import { howItWorks } from "@/content/home";
import { photos } from "@/content/photos";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="bg-white py-20 sm:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading id="como-funciona-title" eyebrow={howItWorks.eyebrow} title={howItWorks.title} />
            <figure className="relative -mx-4 mt-10 aspect-[16/10] sm:mx-0 lg:aspect-[4/5] lg:max-h-[30rem]">
              <Photo photo={photos.tools} sizes="(min-width: 1024px) 38vw, 100vw" className="sm:rounded-2xl" />
            </figure>
          </div>
        </div>

        <ol className="border-t border-navy/10 lg:col-span-7">
          {howItWorks.steps.map((step) => (
            <li
              key={step.number}
              className="reveal grid grid-cols-[4.5rem_1fr] gap-x-4 border-b border-navy/10 py-8 sm:grid-cols-[7.5rem_1fr] sm:gap-x-8 sm:py-10"
            >
              <span
                aria-hidden="true"
                className="text-[3.25rem] font-extrabold leading-[0.85] tracking-[-0.05em] text-aqua sm:text-[5.5rem]"
              >
                {step.number}
              </span>
              <div className="pt-1 sm:pt-2">
                <h3 className="text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                  <span className="sr-only">Etapa {step.number}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-pretty text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
