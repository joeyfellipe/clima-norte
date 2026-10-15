/**
 * Dados centrais do site.
 * Clima Norte é uma empresa FICTÍCIA (projeto conceito de portfólio da Velotiza).
 * Todos os dados de contato abaixo são ilustrativos — troque aqui quando houver dados reais.
 */
export const siteConfig = {
  name: "Clima Norte",
  fullName: "Clima Norte Ar-Condicionado",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "pt_BR",
  title: "Ar-condicionado em Barueri e Alphaville | Clima Norte",
  description:
    "Instalação, manutenção e higienização de ar-condicionado para residências e empresas em Barueri, Alphaville, Tamboré e Santana de Parnaíba. Solicite seu orçamento.",

  /** Projeto conceito: mantém o aviso no rodapé e bloqueia indexação. */
  isConcept: true,
  indexable: false,

  whatsapp: {
    /** Número fictício (DDD 00 não existe). Formato: 55 + DDD + número, só dígitos. */
    number: "5500000000000",
    defaultMessage:
      "Olá! Vim pelo site da Clima Norte e gostaria de solicitar um orçamento.",
  },

  serviceArea: ["Barueri", "Alphaville", "Santana de Parnaíba", "Tamboré"],

  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Regiões", href: "#regioes" },
    { label: "FAQ", href: "#faq" },
  ],

  agency: { name: "Velotiza" },
} as const;

export type SiteConfig = typeof siteConfig;
