import { brands } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

/** Nomes em tipografia (sem logotipos) para não sugerir parceria ou autorização das fabricantes. */
export function Brands() {
  return (
    <section id="marcas" aria-labelledby="marcas-title" className="border-t border-line bg-white py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <Eyebrow>{brands.eyebrow}</Eyebrow>
          <h2 id="marcas-title" className="mt-5 text-balance text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
            {brands.title}
          </h2>
        </div>

        <div className="lg:col-span-8">
          <ul className="grid grid-cols-3 border-l border-t border-line lg:grid-cols-4">
            {brands.items.map((brand) => (
              <li
                key={brand}
                className="flex min-h-16 items-center justify-center border-b border-r border-line px-2 text-center text-base font-bold tracking-tight text-navy/60 sm:min-h-24 sm:text-xl"
              >
                {brand}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted">{brands.disclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
