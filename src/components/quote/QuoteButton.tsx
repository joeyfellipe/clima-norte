"use client";

import type { ReactNode } from "react";
import type { Segment } from "@/content/home";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useQuote } from "./QuoteProvider";

type QuoteButtonProps = {
  children: ReactNode;
  className?: string;
  service?: string;
  segment?: Segment;
};

/**
 * Abre o mini formulário de orçamento.
 * Sem JavaScript, o link cai direto no WhatsApp com a mensagem padrão.
 */
export function QuoteButton({ children, className, service, segment }: QuoteButtonProps) {
  const openQuote = useQuote();

  return (
    <a
      href={buildWhatsAppUrl()}
      aria-haspopup="dialog"
      onClick={(e) => {
        e.preventDefault();
        openQuote({ service, segment });
      }}
      className={className}
    >
      {children}
    </a>
  );
}
