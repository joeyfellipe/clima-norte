import { services } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-mist py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading id="servicos-title" eyebrow={services.eyebrow} title={services.title} intro={services.intro} />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {services.items.map((service) => {
            const quoteLabel = "quoteLabel" in service ? service.quoteLabel : undefined;
            return (
              <li
                key={service.id}
                className="reveal group flex flex-col rounded-2xl border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-navy/5 sm:p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-aqua/12 text-aqua-ink ring-1 ring-aqua/20">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{service.title}</h3>
                <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{service.description}</p>
                <QuoteButton
                  service={quoteLabel}
                  className={buttonClasses({ variant: "link", className: "mt-5 self-start text-[0.9375rem]" })}
                >
                  Solicitar orçamento
                  <span className="sr-only"> de {service.title.toLowerCase()}</span>
                  <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </QuoteButton>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
