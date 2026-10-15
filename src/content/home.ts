/**
 * Conteúdo da home. Todo texto editável fica aqui; os componentes só cuidam do layout.
 * Regra do projeto conceito: nada de números, avaliações, clientes ou certificações inventados.
 */

export type Segment = "Residencial" | "Comercial";

export const serviceLabels = {
  installation: "Instalação",
  preventive: "Manutenção preventiva",
  cleaning: "Higienização",
  corrective: "Manutenção corretiva",
  pmoc: "PMOC",
  unsure: "Não sei / preciso de avaliação",
} as const;

export const quoteServiceOptions = Object.values(serviceLabels);

/* ---------------------------------------------------------------- Hero */

export const hero = {
  eyebrow: "Ar-condicionado em Barueri e Alphaville",
  title: "Ar-condicionado bem instalado, funcionando direito e sem dor de cabeça.",
  subtitle:
    "Instalação, manutenção e higienização para residências e empresas em Barueri, Alphaville e região, com atendimento técnico, orçamento claro e serviço bem executado do começo ao fim.",
  primaryCta: "Pedir orçamento",
  secondaryCta: { label: "Conhecer os serviços", href: "#servicos" },
  support: ["Atendimento residencial e comercial", "Orçamento rápido", "Barueri, Alphaville e região"],
};

/* ---------------------------------------------------------- Introdução */

export const intro = {
  eyebrow: "Por que isso importa",
  title: "Climatização exige mais do que instalar um aparelho na parede.",
  text: "Posicionamento, capacidade, drenagem, infraestrutura elétrica e instalação influenciam diretamente no desempenho do equipamento. A Clima Norte cuida do serviço de forma completa para evitar problemas depois.",
  followUp:
    "Na prática, a maior parte das reclamações de “ar que não gela” ou “ar que pinga” começa em uma decisão errada na instalação — não no aparelho.",
  factors: ["Capacidade", "Posicionamento", "Drenagem", "Elétrica", "Tubulação"],
};

/* ------------------------------------------------------------ Serviços */

export const services = {
  eyebrow: "Serviços",
  title: "Quatro serviços, um mesmo cuidado: entender antes de executar.",
  intro:
    "Cada atendimento começa olhando o equipamento, o ambiente e o histórico de uso. É isso que define o que precisa ser feito — e o que não precisa.",

  installation: {
    number: "01",
    label: serviceLabels.installation,
    title: "Instalação feita para funcionar bem hoje e continuar funcionando depois.",
    text: "Uma instalação incorreta pode causar vazamento de água, ruído, baixo rendimento, consumo excessivo e redução da vida útil do aparelho. Por isso, antes de furar a parede, avaliamos o que o equipamento precisa para trabalhar no ponto certo.",
    checklistTitle: "Pontos avaliados em toda instalação",
    checklist: [
      { title: "Capacidade em BTUs", text: "Compatível com o tamanho e o uso do ambiente." },
      { title: "Posição do equipamento", text: "Para distribuir o ar sem jato direto em quem está no cômodo." },
      { title: "Drenagem", text: "Caimento e caminho da água definidos antes da fixação." },
      { title: "Elétrica", text: "Circuito, disjuntor e bitola adequados ao aparelho." },
      { title: "Distância entre unidades", text: "Tubulação dentro do que o fabricante recomenda." },
      { title: "Acabamento", text: "Tubulação protegida, furos vedados e ambiente limpo." },
    ],
    cta: "Solicitar orçamento de instalação",
  },

  preventive: {
    number: "02",
    label: serviceLabels.preventive,
    title: "Manutenção não é só para quando o aparelho para.",
    text: "Um ar-condicionado sem revisão continua ligando — mas gela menos, gasta mais e desgasta peças aos poucos. A manutenção preventiva mantém o equipamento trabalhando como deveria e mostra problemas antes que virem conserto.",
    points: [
      "Desempenho: verificação de temperatura de saída e funcionamento geral",
      "Limpeza de filtros, serpentina e bandeja",
      "Prevenção de falhas: conexões, fixação e componentes",
      "Inspeção do dreno e da unidade externa",
      "Conservação do equipamento ao longo dos anos",
    ],
    note: "Para empresas, a rotina preventiva pode ser organizada dentro de um PMOC, quando aplicável.",
    cta: "Agendar manutenção preventiva",
  },

  cleaning: {
    number: "03",
    label: serviceLabels.cleaning,
    title: "Não é só limpar o filtro.",
    text: "Lavar o filtro ajuda, mas a sujeira que causa cheiro ruim e perda de rendimento fica mais para dentro: na serpentina, na turbina e na bandeja de drenagem. A higienização adequada chega nessas partes.",
    compare: {
      superficial: {
        title: "Limpeza superficial",
        items: ["Filtro lavado", "Carenagem externa limpa", "Sujeira interna continua no aparelho"],
      },
      complete: {
        title: "Higienização adequada",
        items: [
          "Desmontagem das partes de acesso",
          "Limpeza da serpentina e da turbina",
          "Limpeza da bandeja e do dreno",
          "Produto próprio para climatização",
          "Teste de funcionamento ao final",
        ],
      },
    },
    cta: "Solicitar higienização",
  },

  corrective: {
    number: "04",
    label: serviceLabels.corrective,
    title: "Primeiro o diagnóstico. Depois a peça.",
    text: "Trocar componentes no escuro sai caro e nem sempre resolve. Na manutenção corretiva, o técnico identifica a causa do defeito, explica o que encontrou e só então apresenta o orçamento do reparo.",
    steps: [
      { title: "Identificar", text: "Testes elétricos, pressão do sistema e componentes." },
      { title: "Explicar", text: "O que está errado, por que aconteceu e as opções." },
      { title: "Corrigir", text: "Reparo combinado, com teste de funcionamento ao final." },
    ],
    cta: "Pedir avaliação de defeito",
  },
};

/* --------------------------------------------------------- Diagnóstico */

export const symptoms = [
  {
    id: "nao-gela",
    label: "Não está gelando",
    checks: "filtros e serpentina, carga de gás e possíveis vazamentos, sensores e a capacidade do aparelho para o ambiente",
  },
  {
    id: "pingando",
    label: "Está pingando água",
    checks: "obstrução no dreno, inclinação da evaporadora e sujeira acumulada na bandeja",
  },
  {
    id: "cheiro",
    label: "Cheiro ruim ao ligar",
    checks: "acúmulo de sujeira e umidade na serpentina, na turbina e na bandeja de drenagem",
  },
  {
    id: "barulho",
    label: "Barulho ou vibração",
    checks: "fixação das unidades, ventiladores, peças soltas e o suporte da condensadora",
  },
  {
    id: "demora",
    label: "Demora para climatizar",
    checks: "dimensionamento em BTUs, limpeza, carga de gás e a posição do equipamento",
  },
  {
    id: "consumo",
    label: "Consumo de energia aumentou",
    checks: "sujeira nas serpentinas, carga de gás, ventilação da condensadora e hábitos de uso",
  },
  {
    id: "nao-liga",
    label: "Não liga",
    checks: "alimentação elétrica, disjuntor, placa eletrônica e controle remoto",
  },
  {
    id: "manutencao-atrasada",
    label: "Manutenção atrasada",
    checks: "limpeza completa, dreno, conexões e funcionamento geral em uma revisão preventiva",
  },
] as const;

export type SymptomId = (typeof symptoms)[number]["id"];

export const equipmentTypes = ["Split", "Inverter", "Cassete", "Piso teto", "Janela", "Outro"] as const;

export const diagnosis = {
  eyebrow: "Diagnóstico inicial",
  title: "Seu ar-condicionado está pedindo manutenção?",
  text: "Escolha o que você percebeu. Em quatro respostas, montamos uma mensagem com as informações que o técnico precisa para orientar o próximo passo.",
  disclaimer:
    "Isto não é um diagnóstico técnico. É uma coleta inicial de informações; a causa real só é confirmada na avaliação do equipamento.",
  steps: ["Problema", "Equipamento", "Local", "Região", "Resumo"],
};

/* ----------------------------------------------- Residencial e comercial */

export const segments = {
  eyebrow: "Residencial e comercial",
  title: "Cada ambiente tem uma rotina. A climatização precisa acompanhar.",
  residential: {
    segment: "Residencial" as Segment,
    title: "Conforto para casa sem improviso.",
    text: "Em casa, o ar-condicionado precisa ser silencioso, não pingar e não jogar vento direto na cama ou no sofá. Isso se resolve com escolha de capacidade, posição certa e um acabamento que não estraga a parede.",
    places: ["Quartos", "Salas", "Apartamentos", "Casas", "Home office"],
    note: "Em apartamentos, verificamos as regras do condomínio para a unidade externa antes da instalação.",
    cta: "Orçamento residencial",
  },
  commercial: {
    segment: "Comercial" as Segment,
    title: "Climatização que acompanha a rotina da empresa.",
    text: "No comércio, aparelho parado é cliente desconfortável e equipe rendendo menos. Planejamos instalações e manutenções em horários que não atrapalham o funcionamento e organizamos a rotina preventiva dos equipamentos.",
    places: ["Escritórios", "Lojas", "Consultórios", "Salas comerciais", "Manutenção preventiva", "PMOC quando aplicável"],
    note: "Atendimento com agenda combinada para não interromper o expediente.",
    cta: "Orçamento comercial",
  },
};

/* ----------------------------------------------------------- Estimativa */

export const estimate = {
  eyebrow: "Estimativa rápida",
  title: "Tenha uma estimativa inicial do serviço.",
  text: "Escolha as opções mais próximas da sua situação. Você vê o que costuma influenciar o valor e já envia tudo organizado para o orçamento.",
  services: [serviceLabels.installation, serviceLabels.preventive, serviceLabels.cleaning],
  capacities: ["9.000 BTUs", "12.000 BTUs", "18.000 BTUs", "24.000 BTUs", "30.000+ BTUs", "Não sei"],
  places: ["Casa", "Apartamento", "Comércio/escritório"],
  complexities: ["Padrão", "Acesso difícil", "Não sei"],
  noPriceMessage: "Para estimar o valor precisamos confirmar alguns detalhes pelo WhatsApp.",
  cta: "Enviar estimativa pelo WhatsApp",
  /**
   * Faixas de preço por serviço + capacidade (em reais). Vazio de propósito: o projeto é conceito e
   * não há tabela real. Quando houver, preencha no formato "Instalação|12.000 BTUs": { min, max }
   * e o simulador passa a exibir a faixa automaticamente.
   */
  priceRanges: {} as Record<string, { min: number; max: number }>,
  /** Observações exibidas conforme as escolhas. Explicam o que muda o valor, sem inventar números. */
  notes: {
    service: {
      [serviceLabels.installation]:
        "Na instalação, a distância entre as unidades, o tipo de parede e a necessidade de um novo ponto elétrico mudam o escopo.",
      [serviceLabels.preventive]:
        "Na manutenção, o valor varia com a quantidade de aparelhos e o acesso às unidades interna e externa.",
      [serviceLabels.cleaning]:
        "Na higienização, o nível de sujeira e o modelo do aparelho definem o tempo de serviço.",
    } as Record<string, string>,
    capacity: {
      "24.000 BTUs": "Aparelhos maiores costumam pedir circuito elétrico dedicado e suporte reforçado.",
      "30.000+ BTUs": "Aparelhos maiores costumam pedir circuito elétrico dedicado e suporte reforçado.",
      "Não sei": "Sem problema: uma foto da etiqueta do aparelho já ajuda a identificar a capacidade.",
    } as Record<string, string>,
    place: {
      Apartamento: "Em apartamento, as regras do condomínio podem definir onde fica a condensadora.",
      "Comércio/escritório": "Para empresas, dá para combinar o atendimento fora do horário de pico.",
    } as Record<string, string>,
    complexity: {
      "Acesso difícil": "Condensadora em fachada ou em altura pode exigir equipamento de segurança adicional.",
      "Não sei": "Fotos do local onde ficam as unidades ajudam a avaliar o acesso sem visita prévia.",
    } as Record<string, string>,
  },
};

/* --------------------------------------------------------- Como funciona */

export const howItWorks = {
  eyebrow: "Como funciona",
  title: "Um processo simples, explicado em cada etapa.",
  steps: [
    {
      number: "01",
      title: "Conte o que precisa",
      text: "Pelo WhatsApp ou pelo formulário: o serviço, o aparelho e onde ele está. Fotos ajudam bastante.",
    },
    {
      number: "02",
      title: "Entendemos o equipamento e o ambiente",
      text: "Confirmamos modelo, capacidade, acesso às unidades e o que já foi feito antes no aparelho.",
    },
    {
      number: "03",
      title: "Você recebe a orientação e o orçamento",
      text: "Com o escopo descrito: o que será feito, o que está incluso e o que depende de avaliação no local.",
    },
    {
      number: "04",
      title: "Executamos o serviço",
      text: "No dia e horário combinados, com proteção do ambiente e teste de funcionamento ao final.",
    },
    {
      number: "05",
      title: "Explicamos os cuidados depois do atendimento",
      text: "Como usar, quando limpar o filtro e quando vale fazer a próxima revisão.",
    },
  ],
};

/* -------------------------------------------------------------- Marcas */

export const brands = {
  eyebrow: "Fabricantes",
  title: "Trabalhamos com equipamentos das principais marcas do mercado.",
  items: ["Samsung", "LG", "Daikin", "Midea", "Gree", "Fujitsu", "Carrier", "Elgin", "Springer", "Electrolux", "Consul", "Philco"],
  disclaimer:
    "As marcas exibidas são referências de equipamentos atendidos e não representam vínculo ou assistência técnica autorizada.",
};

/* -------------------------------------------------------------- Região */

export const region = {
  eyebrow: "Região de atendimento",
  title: "Perto de quem está na região oeste de São Paulo.",
  text: "Atendimento na região oeste de São Paulo, com foco em Barueri, Alphaville e municípios próximos. Concentrar o atendimento em uma região próxima significa deslocamento menor, agenda mais flexível e retorno mais rápido quando for preciso.",
  primary: ["Barueri", "Alphaville", "Santana de Parnaíba", "Tamboré"],
  nearby: ["Osasco", "Carapicuíba", "Jandira", "Itapevi"],
  other: "Consulte disponibilidade para outras localidades.",
  mapNote: "Representação esquemática, fora de escala.",
  cta: "Consultar disponibilidade",
};

/* ------------------------------------------------------ Seção técnica */

export const technical = {
  eyebrow: "Instalação correta",
  title: "O que avaliamos antes de instalar seu ar-condicionado?",
  text: "Sete pontos que definem se o aparelho vai trabalhar bem pelos próximos anos — ou dar problema nos primeiros meses.",
  items: [
    { title: "Capacidade", text: "Um aparelho subdimensionado trabalha mais e pode não climatizar corretamente." },
    { title: "Posicionamento", text: "O local da evaporadora interfere na distribuição do ar." },
    { title: "Condensadora", text: "Precisa de ventilação e acesso adequado." },
    { title: "Drenagem", text: "Inclinação e caminho correto evitam vazamentos." },
    { title: "Elétrica", text: "O circuito precisa ser compatível com o equipamento." },
    { title: "Tubulação", text: "Distância e instalação influenciam no desempenho." },
    { title: "Manutenção futura", text: "O equipamento precisa continuar acessível para limpeza e manutenção." },
  ],
};

/* ----------------------------------------------------------------- FAQ */

export const faq = {
  eyebrow: "Dúvidas frequentes",
  title: "Antes de pedir o orçamento",
  items: [
    {
      question: "Vocês atendem residências e empresas?",
      answer:
        "Sim. Atendemos casas, apartamentos, escritórios, lojas, consultórios e salas comerciais. Para empresas, também organizamos a rotina de manutenção preventiva.",
    },
    {
      question: "Quais tipos de ar-condicionado vocês atendem?",
      answer:
        "Split hi-wall, inverter, cassete, piso teto e janela. Para confirmar, envie o modelo ou uma foto da etiqueta do aparelho no primeiro contato.",
    },
    {
      question: "Vocês fazem a instalação de aparelhos comprados em outra loja?",
      answer:
        "Sim. Antes de agendar, confirmamos a capacidade do aparelho, o local das unidades e se a parte elétrica do imóvel comporta o equipamento.",
    },
    {
      question: "Qual a diferença entre limpeza e higienização?",
      answer:
        "A limpeza simples cuida do filtro e da parte externa. A higienização desmonta as partes de acesso e limpa serpentina, turbina e bandeja, onde fica a sujeira que causa cheiro ruim e perda de rendimento.",
    },
    {
      question: "De quanto em quanto tempo devo fazer manutenção?",
      answer:
        "Depende do uso e do ambiente. Como referência, o filtro deve ser limpo com frequência pelo próprio usuário, e a revisão técnica feita periodicamente. No atendimento indicamos o intervalo adequado para o seu caso.",
    },
    {
      question: "O orçamento é feito pelo WhatsApp?",
      answer:
        "Na maioria dos casos, sim: com fotos e algumas informações é possível orçar. Quando o serviço depende do local, como instalações com acesso difícil, combinamos uma avaliação.",
    },
    {
      question: "Vocês são assistência técnica autorizada de alguma marca?",
      answer:
        "Não. Atendemos equipamentos de diversas marcas, mas sem vínculo com fabricantes. Aparelhos ainda na garantia de fábrica devem ser avaliados primeiro pela assistência autorizada da marca.",
    },
    {
      question: "Atendem fora de Barueri e Alphaville?",
      answer:
        "Atendemos também Santana de Parnaíba, Tamboré, Osasco, Carapicuíba, Jandira e Itapevi. Para outras localidades, consulte disponibilidade.",
    },
  ],
};

/* ----------------------------------------------------------- CTA final */

export const finalCta = {
  title: "Conte o que está acontecendo com o seu ar-condicionado.",
  text: "Com algumas informações e fotos, já orientamos o próximo passo e enviamos o orçamento.",
  cta: "Pedir orçamento",
  whatsapp: "Falar no WhatsApp",
};
