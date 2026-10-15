import { finalCta } from "@/content/home";
import { photos } from "@/content/photos";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative isolate overflow-hidden bg-navy text-white">
      <Photo photo={photos.rooftop} sizes="100vw" className="-z-10" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/75 lg:bg-linear-to-r lg:from-navy lg:from-25% lg:via-navy/70 lg:to-navy/10" />

      <Container className="py-24 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <h2
            id="contato-title"
            className="text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem] lg:text-[3.5rem]"
          >
            {finalCta.title}
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-on-dark sm:text-lg">{finalCta.text}</p>
          <div className="mt-10 flex flex-col gap-3 min-[480px]:flex-row">
            <QuoteButton className={buttonClasses({ variant: "accent", size: "lg" })}>
              {finalCta.cta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ variant: "outlineDark", size: "lg" })}
            >
              <Icon name="whatsapp" /> {finalCta.whatsapp}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
