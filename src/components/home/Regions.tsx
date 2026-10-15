import { siteConfig } from "@/config/site";
import { regions } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

export function Regions() {
  return (
    <section id="regioes" aria-labelledby="regioes-title" className="overflow-hidden bg-mist py-16 sm:py-20 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading id="regioes-title" eyebrow={regions.eyebrow} title={regions.title} intro={regions.text} />
          <QuoteButton className={buttonClasses({ variant: "primary", className: "mt-8 w-full min-[400px]:w-auto" })}>
            {regions.cta}
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
          </QuoteButton>
        </div>

        <div className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 text-aqua/25"
          >
            <circle cx="200" cy="200" r="196" fill="none" stroke="currentColor" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeDasharray="2 6" />
            <circle cx="200" cy="200" r="84" fill="none" stroke="currentColor" />
          </svg>

          <ul className="relative grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
            {siteConfig.serviceArea.map((area) => (
              <li
                key={area}
                className="reveal flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm shadow-navy/[0.03] sm:p-5"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aqua/12 text-aqua-ink">
                  <Icon name="mapPin" />
                </span>
                <span className="font-semibold text-navy">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
