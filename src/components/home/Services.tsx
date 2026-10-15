import { services } from "@/content/home";
import { photos } from "@/content/photos";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

const h3Class = "mt-4 text-balance text-[1.75rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-4xl";

function ServiceTag({ number, label, dark = false }: { number: string; label: string; dark?: boolean }) {
  return (
    <p className={`flex items-baseline gap-3 text-sm font-bold ${dark ? "text-aqua" : "text-aqua-ink"}`}>
      <span className="font-mono">{number}</span>
      <span className={`uppercase tracking-[0.14em] ${dark ? "text-white" : "text-navy"}`}>{label}</span>
    </p>
  );
}

export function Services() {
  const { installation, preventive, cleaning, corrective } = services;

  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-mist py-20 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading id="servicos-title" eyebrow={services.eyebrow} title={services.title} intro={services.intro} />

        {/* 01 — Instalação */}
        <article
          id="instalacao"
          aria-labelledby="instalacao-title"
          className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:items-center lg:gap-14"
        >
          <figure className="reveal relative -mx-4 aspect-[4/3] sm:mx-0 lg:col-span-6 lg:aspect-[4/5]">
            <Photo photo={photos.installation} sizes="(min-width: 1024px) 45vw, 100vw" className="sm:rounded-2xl" />
          </figure>

          <div className="lg:col-span-6">
            <ServiceTag number={installation.number} label={installation.label} />
            <h3 id="instalacao-title" className={`${h3Class} text-navy`}>
              {installation.title}
            </h3>
            <p className="mt-5 text-pretty text-[1.0625rem] leading-relaxed text-muted">{installation.text}</p>

            <h4 className="mt-9 text-xs font-bold uppercase tracking-[0.16em] text-navy">{installation.checklistTitle}</h4>
            <ul className="mt-4 grid border-t border-navy/10 sm:grid-cols-2 sm:gap-x-8">
              {installation.checklist.map((item) => (
                <li key={item.title} className="flex gap-3 border-b border-navy/10 py-4">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-aqua-ink" strokeWidth={2.5} />
                  <span>
                    <span className="block font-semibold text-navy">{item.title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted">{item.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <QuoteButton
              service={installation.label}
              className={buttonClasses({ variant: "primary", size: "lg", className: "mt-9 w-full sm:w-auto" })}
            >
              {installation.cta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
          </div>
        </article>

        {/* 02 — Manutenção preventiva */}
        <article
          id="manutencao-preventiva"
          aria-labelledby="preventiva-title"
          className="mt-20 grid gap-10 lg:mt-32 lg:grid-cols-12 lg:items-center lg:gap-14"
        >
          <div className="lg:col-span-6 lg:row-start-1">
            <ServiceTag number={preventive.number} label={preventive.label} />
            <h3 id="preventiva-title" className={`${h3Class} text-navy`}>
              {preventive.title}
            </h3>
            <p className="mt-5 text-pretty text-[1.0625rem] leading-relaxed text-muted">{preventive.text}</p>

            <ol className="mt-8 space-y-3">
              {preventive.points.map((point, i) => (
                <li key={point} className="flex gap-4 text-[0.9375rem] leading-relaxed text-navy">
                  <span className="w-6 shrink-0 font-mono text-xs leading-6 text-aqua-ink">{String(i + 1).padStart(2, "0")}</span>
                  {point}
                </li>
              ))}
            </ol>

            <p className="mt-8 border-l-2 border-aqua pl-4 text-sm leading-relaxed text-muted">{preventive.note}</p>

            <QuoteButton
              service={preventive.label}
              className={buttonClasses({ variant: "link", className: "mt-8 text-base font-bold" })}
            >
              {preventive.cta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
          </div>

          <figure className="reveal relative -mx-4 aspect-[4/3] sm:mx-0 lg:col-span-5 lg:col-start-8 lg:aspect-[4/5]">
            <Photo photo={photos.inspection} sizes="(min-width: 1024px) 38vw, 100vw" className="sm:rounded-2xl" />
          </figure>
        </article>

        {/* 03 — Higienização */}
        <article
          id="higienizacao"
          aria-labelledby="higienizacao-title"
          className="-mx-4 mt-20 overflow-hidden bg-navy text-white sm:mx-0 sm:rounded-3xl lg:mt-32 lg:grid lg:grid-cols-12"
        >
          <figure className="relative aspect-[16/10] lg:col-span-5 lg:aspect-auto">
            <Photo photo={photos.cleaning} sizes="(min-width: 1024px) 40vw, 100vw" />
          </figure>

          <div className="px-5 py-12 sm:px-10 sm:py-14 lg:col-span-7 lg:px-14 lg:py-16">
            <ServiceTag number={cleaning.number} label={cleaning.label} dark />
            <h3 id="higienizacao-title" className={h3Class}>
              {cleaning.title}
            </h3>
            <p className="mt-5 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-on-dark">{cleaning.text}</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-on-dark">
                  {cleaning.compare.superficial.title}
                </h4>
                <ul className="mt-4 space-y-3 border-t border-white/12 pt-4">
                  {cleaning.compare.superficial.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] text-on-dark">
                      <Icon name="minus" className="mt-0.5 h-4 w-4 shrink-0 text-on-dark/60" strokeWidth={2.25} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-aqua">{cleaning.compare.complete.title}</h4>
                <ul className="mt-4 space-y-3 border-t border-aqua/40 pt-4">
                  {cleaning.compare.complete.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] text-white">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <QuoteButton
              service={cleaning.label}
              className={buttonClasses({ variant: "accent", size: "lg", className: "mt-10 w-full sm:w-auto" })}
            >
              {cleaning.cta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
          </div>
        </article>

        {/* 04 — Manutenção corretiva */}
        <article
          id="manutencao-corretiva"
          aria-labelledby="corretiva-title"
          className="mt-20 grid gap-10 lg:mt-32 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-5">
            <ServiceTag number={corrective.number} label={corrective.label} />
            <h3 id="corretiva-title" className={`${h3Class} text-navy`}>
              {corrective.title}
            </h3>
            <p className="mt-5 text-pretty text-[1.0625rem] leading-relaxed text-muted">{corrective.text}</p>
            <QuoteButton
              service={corrective.label}
              className={buttonClasses({ variant: "link", className: "mt-8 text-base font-bold" })}
            >
              {corrective.cta}
              <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
            </QuoteButton>
          </div>

          <ol className="grid gap-px self-end overflow-hidden rounded-2xl bg-navy/10 sm:grid-cols-3 lg:col-span-7">
            {corrective.steps.map((s, i) => (
              <li key={s.title} className="bg-white p-6 sm:p-7">
                <span className="font-mono text-sm text-aqua-ink">{String(i + 1).padStart(2, "0")}</span>
                <h4 className="mt-2 text-xl font-extrabold tracking-tight text-navy sm:mt-12">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </article>
      </Container>
    </section>
  );
}
