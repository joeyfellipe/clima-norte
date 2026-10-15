import { hero } from "@/content/home";
import { photos } from "@/content/photos";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Eyebrow, keepHyphenated } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative flex flex-col overflow-hidden bg-navy text-white lg:block">
      {/* Foto: abaixo do texto no mobile, sangrando à direita no desktop */}
      <figure className="relative order-last aspect-[4/3] overflow-hidden w-full sm:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[48%] xl:w-1/2">
        <Photo photo={photos.hero} sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 100vw" preload className="scale-[1.3] origin-[45%_95%]" />
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent lg:bg-linear-to-r lg:from-navy lg:via-transparent lg:via-35% lg:to-transparent" />
        <figcaption className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs font-medium text-white/90 [text-shadow:0_1px_3px_rgb(0_0_0/0.7)] sm:bottom-6 sm:left-6 lg:left-auto lg:right-8 lg:bottom-8">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-aqua" />
          Medição de pressão do sistema durante a manutenção
        </figcaption>
      </figure>

      <Container className="relative flex flex-col lg:min-h-[min(calc(100svh-4.75rem),52rem)] lg:justify-center">
        <div className="py-12 sm:py-16 lg:w-[52%] lg:py-24 lg:pr-12 xl:pr-16">
          <div className="fade-up">
            <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
          </div>

          <h1
            id="hero-title"
            className="fade-up mt-6 text-balance text-[2.25rem] font-extrabold leading-[1.04] tracking-[-0.03em] [animation-delay:60ms] min-[400px]:text-[2.5rem] sm:text-[3.5rem] xl:text-[4.25rem]"
          >
            {keepHyphenated(hero.title)}
          </h1>

          <p className="fade-up mt-6 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-on-dark [animation-delay:120ms] sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="fade-up mt-9 flex flex-col gap-3 [animation-delay:180ms] min-[480px]:flex-row">
            <QuoteButton className={buttonClasses({ variant: "accent", size: "lg" })}>
              {hero.primaryCta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
            <a href={hero.secondaryCta.href} className={buttonClasses({ variant: "outlineDark", size: "lg" })}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="fade-up mt-10 flex flex-wrap gap-x-3 gap-y-2 border-t border-white/12 pt-6 text-sm text-on-dark [animation-delay:240ms]">
            {hero.support.map((item) => (
              <li key={item} className="inline-flex items-center gap-2.5 pr-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-aqua" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
