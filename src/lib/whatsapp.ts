import { siteConfig } from "@/config/site";

const { whatsapp } = siteConfig;

export type QuoteRequest = {
  phone: string;
  location: string;
  service: string;
  segment: string;
  details?: string;
};

type Fields = [label: string, value: string | undefined][];

/** Mensagem padrão dos CTAs que levam direto ao WhatsApp. */
export const defaultWhatsAppMessage = `${whatsapp.intro}\n\n${whatsapp.defaultBody}`;

export function buildWhatsAppUrl(message: string = defaultWhatsAppMessage): string {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/**
 * Mensagem dos fluxos com formulário: identificação do projeto conceito, os dados preenchidos
 * ("rótulo: valor", ignorando vazios) e o fechamento padrão.
 */
export function buildStructuredMessage(fields: Fields): string {
  const lines = fields.flatMap(([label, value]) => {
    const v = value?.trim();
    return v ? [`${label}: ${v}`] : [];
  });
  return [whatsapp.intro, "", whatsapp.formLead, "", ...lines, "", whatsapp.formClosing].join("\n");
}

export function buildQuoteMessage(quote: QuoteRequest): string {
  return buildStructuredMessage([
    ["Fluxo", "Pedido de orçamento"],
    ["Serviço", quote.service],
    ["Tipo", quote.segment],
    ["Região", quote.location],
    ["Telefone", quote.phone],
    ["Descrição", quote.details],
  ]);
}

/** Formata telefone brasileiro enquanto o usuário digita: (11) 91234-5678. */
export function formatPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

/** Abre o WhatsApp em nova aba; se o navegador bloquear, navega na mesma aba. */
export function openWhatsApp(url: string): boolean {
  // Sem "noopener" na string de features: com ele, window.open sempre retorna null.
  const win = window.open(url, "_blank");
  if (!win) {
    window.location.href = url;
    return false;
  }
  win.opener = null;
  return true;
}
