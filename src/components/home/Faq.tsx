import { faq } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />

        <div className="divide-y divide-line border-y border-line">
          {faq.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua sm:text-lg [&::-webkit-details-marker]:hidden">
                <h3 className="text-pretty">{item.question}</h3>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mist text-aqua-ink transition-transform duration-200 group-open:rotate-45">
                  <Icon name="plus" className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </summary>
              <p className="max-w-2xl pb-5 pr-12 text-[0.9375rem] leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
