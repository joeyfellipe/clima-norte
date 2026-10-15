import type { IconName } from "@/components/ui/Icon";

export type Segment = "Residencial" | "Comercial";

export const hero = {
  eyebrow: "Climatização em Barueri e Alphaville",
  title: "Conforto térmico com instalação e manutenção profissional.",
  subtitle:
    "Atendimento em Barueri, Alphaville e região para residências e empresas. Instalação, manutenção e higienização com agilidade, segurança e transparência.",
  primaryCta: "Solicitar orçamento",
  secondaryCta: { label: "Ver serviços", href: "#servicos" },
  trust: [
    "Atendimento residencial e comercial",
    "Orçamento rápido",
    "Suporte especializado",
  ],
};

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  /** Rótulo usado no formulário de orçamento. Sem rótulo = não aparece no select. */
  quoteLabel?: string;
};

export const services = {
  eyebrow: "Serviços",
  title: "Serviços de climatização para cada necessidade",
  intro:
    "Da instalação à manutenção periódica, cada atendimento começa pelo entendimento do ambiente e do equipamento.",
  items: [
    {
      id: "instalacao",
      icon: "airConditioner",
      title: "Instalação de ar-condicionado",
      description:
        "Instalação adequada para melhor desempenho, eficiência energética e durabilidade do equipamento.",
      quoteLabel: "Instalação",
    },
    {
      id: "manutencao-preventiva",
      icon: "calendarCheck",
      title: "Manutenção preventiva",
      description:
        "Revisões periódicas para reduzir falhas, preservar o desempenho e evitar gastos inesperados.",
      quoteLabel: "Manutenção preventiva",
    },
    {
      id: "manutencao-corretiva",
      icon: "wrench",
      title: "Manutenção corretiva",
      description:
        "Diagnóstico e correção de falhas em equipamentos com atendimento objetivo e transparente.",
      quoteLabel: "Manutenção corretiva",
    },
    {
      id: "higienizacao",
      icon: "wind",
      title: "Higienização",
      description:
        "Limpeza técnica para melhorar a qualidade do ar e preservar o funcionamento do aparelho.",
      quoteLabel: "Higienização",
    },
    {
      id: "pmoc",
      icon: "clipboard",
      title: "PMOC",
      description:
        "Apoio à manutenção e organização técnica de sistemas de climatização em ambientes comerciais.",
      quoteLabel: "PMOC",
    },
    {
      id: "residencial-comercial",
      icon: "building",
      title: "Atendimento residencial e comercial",
      description:
        "Soluções para casas, apartamentos, escritórios, lojas e pequenos estabelecimentos.",
    },
  ] satisfies Service[],
};

export const quoteServiceOptions = [
  ...services.items.flatMap((s) => ("quoteLabel" in s && s.quoteLabel ? [s.quoteLabel] : [])),
  "Não sei / preciso de avaliação",
];

export const segments = {
  eyebrow: "Residencial e comercial",
  title: "Para sua casa ou para o seu negócio",
  items: [
    {
      segment: "Residencial" as Segment,
      icon: "home" as IconName,
      title: "Conforto para sua casa.",
      text: "Mais conforto, qualidade do ar e segurança no uso diário do equipamento.",
      places: ["Quartos", "Salas", "Apartamentos", "Casas", "Home office"],
      cta: "Orçamento residencial",
    },
    {
      segment: "Comercial" as Segment,
      icon: "building" as IconName,
      title: "Climatização para o seu negócio.",
      text: "Ambientes confortáveis e equipamentos funcionando com maior confiabilidade para empresas e estabelecimentos comerciais.",
      places: ["Escritórios", "Lojas", "Consultórios", "Pequenos comércios", "Salas comerciais"],
      cta: "Orçamento comercial",
    },
  ],
};

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Um atendimento técnico, claro e próximo",
  intro:
    "O foco é resolver bem: entender o que o equipamento precisa, explicar antes de executar e manter o processo simples.",
  items: [
    {
      icon: "mapPin" as IconName,
      title: "Atendimento local",
      text: "Atuação em Barueri, Alphaville e regiões próximas.",
    },
    {
      icon: "shieldCheck" as IconName,
      title: "Serviço técnico",
      text: "Execução cuidadosa, com atenção à instalação e manutenção correta dos equipamentos.",
    },
    {
      icon: "eye" as IconName,
      title: "Transparência",
      text: "O cliente entende o serviço necessário antes da execução.",
    },
    {
      icon: "clock" as IconName,
      title: "Agilidade",
      text: "Contato rápido e processo simples para solicitar avaliação e orçamento.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "Como funciona",
  title: "Do primeiro contato à execução, em quatro etapas",
  steps: [
    {
      number: "01",
      title: "Solicite atendimento",
      text: "Entre em contato e informe o tipo de serviço necessário.",
    },
    {
      number: "02",
      title: "Entendemos a necessidade",
      text: "Coletamos informações sobre o ambiente e o equipamento.",
    },
    {
      number: "03",
      title: "Avaliação e orçamento",
      text: "Apresentamos a solução indicada e as condições do serviço.",
    },
    {
      number: "04",
      title: "Execução",
      text: "Realizamos o atendimento conforme o escopo combinado.",
    },
  ],
};

export const regions = {
  eyebrow: "Regiões atendidas",
  title: "Ar-condicionado em Barueri, Alphaville e região",
  text: "Atendimento em Barueri, Alphaville e região. Consulte disponibilidade para outras localidades.",
  cta: "Consultar disponibilidade",
};

export const quoteRegionOptions = [
  "Barueri",
  "Alphaville",
  "Santana de Parnaíba",
  "Tamboré",
  "Outra localidade",
];

export const faq = {
  eyebrow: "Dúvidas frequentes",
  title: "Perguntas frequentes",
  items: [
    {
      question: "Vocês atendem residências e empresas?",
      answer:
        "Sim. A Clima Norte atende tanto clientes residenciais quanto pequenos e médios estabelecimentos comerciais.",
    },
    {
      question: "Quais tipos de ar-condicionado vocês atendem?",
      answer:
        "O atendimento depende do equipamento e do serviço necessário. Informe o modelo no momento do contato para confirmação.",
    },
    {
      question: "Vocês fazem instalação?",
      answer:
        "Sim. A instalação é realizada conforme as condições do ambiente e do equipamento.",
    },
    {
      question: "Também fazem limpeza e higienização?",
      answer:
        "Sim. A higienização ajuda na conservação do equipamento e na qualidade do ar.",
    },
    {
      question: "Atendem em Alphaville?",
      answer:
        "Sim. Alphaville, Barueri e regiões próximas fazem parte da área principal de atendimento.",
    },
    {
      question: "Como solicitar um orçamento?",
      answer:
        "Basta entrar em contato pelo WhatsApp e enviar as informações básicas do serviço desejado.",
    },
  ],
};

export const finalCta = {
  title: "Precisa instalar, manter ou higienizar seu ar-condicionado?",
  text: "Fale com a Clima Norte e solicite uma avaliação para o seu imóvel ou empresa.",
  cta: "Solicitar orçamento",
};
