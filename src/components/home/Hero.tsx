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
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex flex-col overflow-hidden bg-[#081b2a] text-white lg:block"
    >
      {/*
        Elemento característico do hero: a foto sangra até a borda e recebe um recorte diagonal
        (no topo no mobile, na lateral esquerda no desktop). Sem overlay sobre a imagem.
      */}
      <figure className="relative order-last aspect-[16/11] w-full [clip-path:polygon(0_9%,100%_0,100%_100%,0_100%)] sm:aspect-[16/9] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-1/2 lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] xl:w-[52%]">
        <Photo
          photo={photos.hero}
          sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 50vw, 100vw"
          preload
          className="scale-[1.3] origin-[45%_95%] lg:scale-[1.45] lg:origin-[40%_100%]"
        />
        <figcaption className="absolute right-6 top-6 hidden items-center gap-2 bg-[#081b2a]/85 px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur-sm sm:inline-flex lg:right-8 lg:top-8">
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
          Medição de pressão do sistema durante a manutenção
        </figcaption>
      </figure>

      <Container className="relative flex flex-col lg:min-h-[min(calc(100svh-4.75rem),48rem)] lg:justify-center">
        <div className="py-10 sm:py-16 lg:w-1/2 lg:py-14 lg:pr-8 xl:w-[48%]">
          <div className="fade-up">
            <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
          </div>

          <h1
            id="hero-title"
            className="fade-up mt-6 text-balance text-[2.25rem] font-extrabold leading-[1.03] tracking-[-0.035em] text-white [animation-delay:60ms] min-[400px]:text-[2.5rem] sm:text-[3.5rem] lg:text-[3.25rem] xl:text-[3.625rem]"
          >
            {keepHyphenated(hero.title)}
          </h1>

          <p className="fade-up mt-6 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-on-dark [animation-delay:120ms] sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="fade-up mt-9 flex flex-col gap-3 [animation-delay:180ms] min-[480px]:flex-row">
            <QuoteButton className={buttonClasses({ variant: "accent", size: "lg", className: "whitespace-nowrap" })}>
              {hero.primaryCta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
            <a href={hero.secondaryCta.href} className={buttonClasses({ variant: "outlineDark", size: "lg", className: "whitespace-nowrap" })}>
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="fade-up mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-on-dark [animation-delay:240ms]">
            {hero.support.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-aqua" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
