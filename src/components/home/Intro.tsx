import { intro } from "@/content/home";
import { photos } from "@/content/photos";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pr-8">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2
            id="intro-title"
            className="mt-6 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-navy sm:text-[2.75rem] lg:text-[3.5rem]"
          >
            {intro.title}
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-10 lg:mt-14">
            <p className="text-pretty text-[1.0625rem] leading-relaxed text-navy sm:text-lg">{intro.text}</p>
            <p className="text-pretty text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{intro.followUp}</p>
          </div>

          <ul
            aria-label="Fatores que definem o desempenho"
            className="mt-12 flex flex-wrap border-t border-line pt-6 text-sm font-semibold text-navy lg:mt-16"
          >
            {intro.factors.map((factor, i) => (
              <li key={factor} className="flex items-center py-1 pr-5">
                <span className="mr-2 font-mono text-xs text-aqua-ink">{String(i + 1).padStart(2, "0")}</span>
                {factor}
              </li>
            ))}
          </ul>
        </div>

        <figure className="reveal relative -mx-4 aspect-[4/3] sm:mx-0 sm:aspect-[16/11] lg:col-span-5 lg:aspect-auto lg:min-h-[36rem]">
          <Photo photo={photos.gauge} sizes="(min-width: 1024px) 40vw, 100vw" className="sm:rounded-2xl" />
          <figcaption className="absolute -bottom-px left-0 bg-white py-3 pr-5 text-xs font-medium text-muted max-sm:left-4">
            Manifold: leitura de pressão antes de qualquer ajuste
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
