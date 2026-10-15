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
    "Instalação, manutenção e higienização de ar-condicionado para residências e empresas em Barueri, Alphaville e região oeste de São Paulo. Orçamento claro pelo WhatsApp.",

  /** Projeto conceito: mantém o aviso no rodapé e bloqueia indexação. */
  isConcept: true,
  indexable: false,

  /**
   * WhatsApp do projeto conceito: os contatos chegam à Velotiza, não a uma empresa real.
   * Formato do número: 55 + DDD + número, só dígitos.
   */
  whatsapp: {
    number: "5511962652362",
    /** Abertura de todas as mensagens: identifica o site demonstrativo e a agência. */
    intro: "Olá! Vim pelo site demonstrativo da Clima Norte Ar-Condicionado, desenvolvido pela Velotiza.",
    /** Mensagem dos CTAs diretos (botão flutuante, rodapé, CTA final). */
    defaultBody:
      "Estou testando o atendimento pelo site e gostaria de falar sobre um projeto parecido para o meu negócio.",
    /** Linhas que envolvem os dados dos fluxos com formulário. */
    formLead: "Estou testando o atendimento deste projeto conceito.",
    formClosing: "Gostaria de saber mais sobre como ter algo parecido no meu negócio.",
  },

  serviceArea: [
    "Barueri",
    "Alphaville",
    "Santana de Parnaíba",
    "Tamboré",
    "Osasco",
    "Carapicuíba",
    "Jandira",
    "Itapevi",
  ],

  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Diagnóstico", href: "#diagnostico" },
    { label: "Estimativa", href: "#estimativa" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Região", href: "#regiao" },
    { label: "FAQ", href: "#faq" },
  ],

  agency: { name: "Velotiza" },
} as const;

export type SiteConfig = typeof siteConfig;
