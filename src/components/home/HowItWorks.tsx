import { howItWorks } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full text-aqua/10"
      >
        <path d="M0 80c240 60 480 60 720 0s480-60 720 0" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M0 130c240 60 480 60 720 0s480-60 720 0" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <Container className="relative">
        <SectionHeading id="como-funciona-title" eyebrow={howItWorks.eyebrow} title={howItWorks.title} tone="dark" />

        <ol className="relative mt-10 grid gap-0 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {/* linha de conexão (desktop) */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block" />

          {howItWorks.steps.map((step, i) => (
            <li key={step.number} className="reveal relative flex gap-5 pb-8 last:pb-0 lg:block lg:pb-0">
              {/* linha de conexão (mobile) */}
              {i < howItWorks.steps.length - 1 && (
                <span aria-hidden="true" className="absolute bottom-0 left-6 top-12 w-px bg-white/15 lg:hidden" />
              )}
              <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-[0.9375rem] font-bold text-aqua ring-1 ring-aqua/50">
                {step.number}
              </span>
              <div className="pt-2.5 lg:mt-6 lg:pt-0">
                <h3 className="text-lg font-bold tracking-tight text-white">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-on-dark">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
