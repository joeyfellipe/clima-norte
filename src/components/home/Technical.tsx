import { services, technical } from "@/content/home";
import { photos } from "@/content/photos";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { Eyebrow, keepHyphenated } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

export function Technical() {
  return (
    <section id="instalacao-correta" aria-labelledby="tecnica-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-7">
            <Eyebrow>{technical.eyebrow}</Eyebrow>
            <h2
              id="tecnica-title"
              className="mt-5 text-balance text-[2rem] font-extrabold leading-[1.08] tracking-[-0.025em] text-navy sm:text-[2.75rem] lg:text-[3.25rem]"
            >
              {keepHyphenated(technical.title)}
            </h2>
          </div>
          <p className="text-pretty text-[1.0625rem] leading-relaxed text-muted sm:text-lg lg:col-span-5 lg:pb-2">
            {technical.text}
          </p>
        </div>

        <figure className="reveal relative -mx-4 mt-12 aspect-[4/3] sm:mx-0 sm:aspect-[21/9] lg:mt-16">
          <Photo photo={photos.condenser} sizes="(min-width: 1280px) 1200px, 100vw" className="sm:rounded-2xl" />
        </figure>

        <ol className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {technical.items.map((item, i) => (
            <li key={item.title} className="border-t-2 border-navy py-6 lg:pb-10">
              <p className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-aqua-ink">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-navy">{item.title}</span>
              </p>
              <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
          <li className="flex flex-col justify-between border-t-2 border-aqua py-6 lg:pb-10">
            <p className="text-pretty text-[0.9375rem] font-semibold leading-relaxed text-navy">
              Tudo isso entra no orçamento de instalação, antes de qualquer furo na parede.
            </p>
            <QuoteButton
              service={services.installation.label}
              className={buttonClasses({ variant: "link", className: "mt-4 self-start font-bold" })}
            >
              Pedir avaliação
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
          </li>
        </ol>
      </Container>
    </section>
  );
}
