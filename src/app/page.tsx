import { siteConfig } from "@/config/site";
import { services } from "@/content/home";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Segments } from "@/components/home/Segments";
import { Differentials } from "@/components/home/Differentials";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Regions } from "@/components/home/Regions";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";

/** Dados estruturados sem telefone/endereço: só o que é verdadeiro para o conceito. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: siteConfig.fullName,
  description: siteConfig.description,
  url: siteConfig.url,
  areaServed: siteConfig.serviceArea.map((name) => ({ "@type": "Place", name })),
  makesOffer: services.items.slice(0, 5).map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title },
  })),
};

export default function HomePage() {
  return (
    <main id="conteudo">
      <Hero />
      <Services />
      <Segments />
      <Differentials />
      <HowItWorks />
      <Regions />
      <Faq />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
