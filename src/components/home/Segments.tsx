import { segments } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

export function Segments() {
  return (
    <section id="residencial-comercial" aria-labelledby="segmentos-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading id="segmentos-title" eyebrow={segments.eyebrow} title={segments.title} />

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {segments.items.map((item) => {
            const dark = item.segment === "Comercial";
            return (
              <article
                key={item.segment}
                className={`reveal relative overflow-hidden rounded-3xl p-6 sm:p-9 ${
                  dark ? "bg-navy text-white" : "border border-line bg-mist text-navy"
                }`}
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 200"
                  className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 ${dark ? "text-white/[0.06]" : "text-aqua/20"}`}
                >
                  <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="100" cy="100" r="38" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>

                <div className="relative">
                  <p
                    className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] ${
                      dark ? "text-aqua" : "text-aqua-ink"
                    }`}
                  >
                    <Icon name={item.icon} className="h-5 w-5" />
                    {item.segment}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-[1.75rem]">{item.title}</h3>
                  <p className={`mt-3 max-w-md leading-relaxed ${dark ? "text-on-dark" : "text-muted"}`}>{item.text}</p>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Ambientes ${item.segment.toLowerCase()}`}>
                    {item.places.map((place) => (
                      <li
                        key={place}
                        className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
                          dark ? "bg-white/8 text-white ring-1 ring-white/12" : "bg-white text-navy ring-1 ring-line"
                        }`}
                      >
                        {place}
                      </li>
                    ))}
                  </ul>

                  <QuoteButton
                    segment={item.segment}
                    className={buttonClasses({
                      variant: dark ? "accent" : "primary",
                      className: "mt-8 w-full min-[400px]:w-auto",
                    })}
                  >
                    {item.cta}
                    <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
                  </QuoteButton>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
