import { finalCta } from "@/content/home";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

export function FinalCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <svg
            aria-hidden="true"
            viewBox="0 0 600 300"
            preserveAspectRatio="xMaxYMid slice"
            className="pointer-events-none absolute inset-0 h-full w-full text-aqua/15"
          >
            <path d="M200 260c80-60 160-60 240 0s120 40 160 10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M240 220c80-60 160-60 240 0s80 30 120 10" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M280 180c80-60 160-60 240 0s50 20 80 10" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="560" cy="40" r="120" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>

          <div className="relative max-w-2xl">
            <h2 id="contato-title" className="text-balance text-[1.75rem] font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-on-dark sm:text-lg">{finalCta.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                <Icon name="whatsapp" /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
