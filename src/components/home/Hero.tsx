import { hero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";
import { AirflowVisual } from "./AirflowVisual";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden bg-white">
      {/* linhas de fluxo de ar ao fundo */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full text-aqua/15 sm:h-64"
      >
        <path d="M0 260c240-80 480-80 720 0s480 80 720 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M0 310c240-80 480-80 720 0s480 80 720 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M0 360c240-80 480-80 720 0s480 80 720 0" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-b from-mist/0 via-mist/0 to-mist" />

      <Container className="relative grid items-center gap-10 pb-12 pt-8 sm:pb-16 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-20 lg:pt-16">
        <div className="max-w-2xl">
          <p className="fade-up inline-flex items-center gap-2 rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1.5 text-[0.8125rem] font-semibold text-aqua-ink">
            <Icon name="mapPin" className="h-4 w-4" />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="mt-4 text-balance text-[2rem] font-bold leading-[1.1] tracking-tight text-navy min-[400px]:text-[2.25rem] sm:mt-6 sm:text-5xl lg:text-[3.5rem]"
          >
            {hero.title}
          </h1>

          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="fade-up mt-6 flex flex-col gap-3 [animation-delay:180ms] sm:flex-row sm:mt-8">
            <QuoteButton className={buttonClasses({ variant: "primary", size: "lg" })}>
              {hero.primaryCta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
            <a href={hero.secondaryCta.href} className={buttonClasses({ variant: "outline", size: "lg" })}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="fade-up mt-6 flex flex-col gap-2 text-sm text-muted [animation-delay:240ms] sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-5">
            {hero.trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-aqua/15 text-aqua-ink">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto hidden w-full max-w-md md:block lg:max-w-none">
          <AirflowVisual className="h-auto w-full" />
        </div>
      </Container>
    </section>
  );
}
