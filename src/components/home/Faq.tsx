import { faq } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-mist py-20 sm:py-24 lg:py-32">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <SectionHeading id="faq-title" eyebrow={faq.eyebrow} title={faq.title} className="lg:col-span-4" />

        <div className="border-t border-navy/15 lg:col-span-8">
          {faq.items.map((item) => (
            <details key={item.question} className="group border-b border-navy/15">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua [&::-webkit-details-marker]:hidden">
                <h3 className="text-pretty text-lg font-bold tracking-tight text-navy sm:text-xl">{item.question}</h3>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/15 text-navy transition-transform duration-200 group-open:rotate-45">
                  <Icon name="plus" className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-14 text-pretty text-base leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
