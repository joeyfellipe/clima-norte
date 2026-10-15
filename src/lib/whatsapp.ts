import { siteConfig } from "@/config/site";

export type QuoteRequest = {
  name: string;
  service: string;
  segment: string;
  region: string;
  details?: string;
};

export function buildWhatsAppUrl(
  message: string = siteConfig.whatsapp.defaultMessage,
): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteMessage(quote: QuoteRequest): string {
  const lines = [
    siteConfig.whatsapp.defaultMessage,
    "",
    `*Nome:* ${quote.name.trim()}`,
    `*Serviço:* ${quote.service}`,
    `*Tipo de imóvel:* ${quote.segment}`,
    `*Cidade/região:* ${quote.region}`,
  ];

  const details = quote.details?.trim();
  if (details) lines.push(`*O que preciso:* ${details}`);

  return lines.join("\n");
}
