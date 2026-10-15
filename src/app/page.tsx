import { siteConfig } from "@/config/site";
import { serviceLabels } from "@/content/home";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { Services } from "@/components/home/Services";
import { Diagnosis } from "@/components/home/Diagnosis";
import { Segments } from "@/components/home/Segments";
import { Estimate } from "@/components/home/Estimate";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Brands } from "@/components/home/Brands";
import { Region } from "@/components/home/Region";
import { Technical } from "@/components/home/Technical";
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
  makesOffer: [
    serviceLabels.installation,
    serviceLabels.preventive,
    serviceLabels.cleaning,
    serviceLabels.corrective,
    serviceLabels.pmoc,
  ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
};

export default function HomePage() {
  return (
    <main id="conteudo">
      <Hero />
      <Intro />
      <Services />
      <Diagnosis />
      <Segments />
      <Estimate />
      <HowItWorks />
      <Brands />
      <Region />
      <Technical />
      <Faq />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
      />
    </main>
  );
}
