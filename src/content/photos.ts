/**
 * Banco de fotografias do site.
 *
 * Projeto conceito: as fotos vêm de bancos gratuitos (Pexels e Unsplash, licenças que permitem uso
 * comercial sem atribuição obrigatória). Para trocar por fotos reais da empresa, basta substituir
 * `src` (URL remota liberada em next.config.ts ou caminho local em /public) e o `alt`.
 *
 * `position` controla o recorte (object-position) quando a foto é cortada pelo layout.
 */
export type Photo = {
  src: string;
  alt: string;
  /** Página original da foto, para conferência de licença/autoria. */
  source: string;
  position?: string;
};

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2400`;

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=80`;

export const photos = {
  hero: {
    src: pexels(5463575),
    alt: "Técnico ajoelhado ao lado de uma condensadora, medindo a pressão do sistema com manifold",
    source: "https://www.pexels.com/photo/man-checking-an-air-conditioner-5463575/",
    position: "35% 50%",
  },
  gauge: {
    src: pexels(6471912),
    alt: "Técnico ajustando um manifold de pressão durante a manutenção de um ar-condicionado",
    source: "https://www.pexels.com/photo/person-holding-a-pressure-gauge-6471912/",
    position: "50% 55%",
  },
  installation: {
    src: pexels(5463576),
    alt: "Técnico trabalhando nas conexões de tubulação de uma unidade condensadora",
    source: "https://www.pexels.com/photo/man-taping-a-hose-5463576/",
    position: "50% 60%",
  },
  inspection: {
    src: pexels(32588555),
    alt: "Técnico inspecionando componentes elétricos de um sistema de climatização",
    source: "https://www.pexels.com/photo/technician-performing-air-conditioning-maintenance-32588555/",
    position: "50% 35%",
  },
  cleaning: {
    src: unsplash("1737012197886-7d5a52ded45b"),
    alt: "Mãos removendo a grelha de um ar-condicionado de teto para acesso à limpeza interna",
    source: "https://unsplash.com/photos/WwzK2S0h6zU",
    position: "50% 50%",
  },
  splitIndoor: {
    src: pexels(38788452),
    alt: "Evaporadora de ar-condicionado split instalada na parede de um ambiente interno",
    source: "https://www.pexels.com/photo/38788452/",
    position: "60% 50%",
  },
  residential: {
    src: pexels(6588599),
    alt: "Sala de estar com sofá, mesa e ar-condicionado split instalado no alto da parede",
    source: "https://www.pexels.com/photo/6588599/",
    position: "50% 40%",
  },
  commercial: {
    src: pexels(7534177),
    alt: "Escritório com mesas de trabalho e ar-condicionado split instalado na parede",
    source: "https://www.pexels.com/photo/7534177/",
    position: "50% 45%",
  },
  tools: {
    src: unsplash("1625148230889-8195e85aae6b"),
    alt: "Técnico com cinto de ferramentas e escada a caminho de um atendimento",
    source: "https://unsplash.com/photos/3CKZS3-o3XU",
    position: "50% 40%",
  },
  condenser: {
    src: pexels(39318564),
    alt: "Unidade condensadora instalada em suporte na parede externa de um prédio",
    source: "https://www.pexels.com/photo/39318564/",
    position: "50% 50%",
  },
  rooftop: {
    src: pexels(5463581),
    alt: "Técnico trabalhando em uma unidade de climatização de grande porte na cobertura de um prédio",
    source: "https://www.pexels.com/photo/man-drilling-an-aircon-casing-5463581/",
    position: "40% 50%",
  },
} satisfies Record<string, Photo>;
