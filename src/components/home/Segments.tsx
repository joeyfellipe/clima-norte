import { segments } from "@/content/home";
import { photos } from "@/content/photos";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

function Places({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className={`mt-8 grid grid-cols-2 border-t text-[0.9375rem] font-semibold ${dark ? "border-white/15" : "border-navy/10"}`}>
      {items.map((place) => (
        <li key={place} className={`flex items-center gap-2.5 border-b py-3 ${dark ? "border-white/15" : "border-navy/10"}`}>
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
          {place}
        </li>
      ))}
    </ul>
  );
}

export function Segments() {
  const { residential, commercial } = segments;

  return (
    <section id="residencial-comercial" aria-labelledby="segmentos-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading id="segmentos-title" eyebrow={segments.eyebrow} title={segments.title} />

        {/* Residencial */}
        <article aria-labelledby="residencial-title" className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-end lg:gap-14">
          <figure className="reveal relative -mx-4 aspect-[4/3] sm:mx-0 lg:col-span-7 lg:aspect-[7/6]">
            <Photo photo={photos.residential} sizes="(min-width: 1024px) 55vw, 100vw" className="sm:rounded-2xl" />
          </figure>
          <div className="lg:col-span-5 lg:pb-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-aqua-ink">{residential.segment}</p>
            <h3 id="residencial-title" className="mt-4 text-balance text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy sm:text-4xl">
              {residential.title}
            </h3>
            <p className="mt-5 text-pretty text-[1.0625rem] leading-relaxed text-muted">{residential.text}</p>
            <Places items={residential.places} />
            <p className="mt-6 text-sm leading-relaxed text-muted">{residential.note}</p>
            <QuoteButton
              segment={residential.segment}
              className={buttonClasses({ variant: "primary", size: "lg", className: "mt-8 w-full sm:w-auto" })}
            >
              {residential.cta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
          </div>
        </article>

        {/* Comercial: bloco escuro sobreposto à foto no desktop */}
        <article aria-labelledby="comercial-title" className="relative mt-20 lg:mt-32 lg:grid lg:grid-cols-12 lg:items-center">
          <figure className="reveal relative -mx-4 aspect-[4/3] sm:mx-0 lg:col-span-8 lg:col-start-5 lg:row-start-1 lg:aspect-[16/11]">
            <Photo photo={photos.commercial} sizes="(min-width: 1024px) 65vw, 100vw" className="sm:rounded-2xl" />
          </figure>
          <div className="relative -mx-4 bg-navy px-5 py-10 text-white sm:mx-0 sm:-mt-16 sm:ml-8 sm:rounded-2xl sm:p-10 lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:m-0 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-aqua">{commercial.segment}</p>
            <h3 id="comercial-title" className="mt-4 text-balance text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl">
              {commercial.title}
            </h3>
            <p className="mt-5 text-pretty text-[1.0625rem] leading-relaxed text-on-dark">{commercial.text}</p>
            <Places items={commercial.places} dark />
            <p className="mt-6 text-sm leading-relaxed text-on-dark">{commercial.note}</p>
            <QuoteButton
              segment={commercial.segment}
              className={buttonClasses({ variant: "accent", size: "lg", className: "mt-8 w-full sm:w-auto" })}
            >
              {commercial.cta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
          </div>
        </article>
      </Container>
    </section>
  );
}
