import { differentials } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="border-t border-line bg-white py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          id="diferenciais-title"
          eyebrow={differentials.eyebrow}
          title={differentials.title}
          intro={differentials.intro}
        />

        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10">
          {differentials.items.map((item) => (
            <li key={item.title} className="reveal border-t-2 border-aqua/40 pt-5">
              <Icon name={item.icon} className="h-7 w-7 text-aqua-ink" />
              <h3 className="mt-4 text-lg font-bold tracking-tight text-navy">{item.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
