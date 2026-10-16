import type { CSSProperties } from "react";
import Image from "next/image";
import { brands } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

type Logo = { src: string; width: number; height: number };

/**
 * Logotipos oficiais em /public/brands (SVG com viewBox ajustado ao desenho).
 * Marcas sem arquivo oficial em boa resolução (Springer, Philco) seguem em tipografia.
 */
const logos: Record<string, Logo> = {
  Samsung: { src: "/brands/samsung.svg", width: 7051, height: 1080 },
  LG: { src: "/brands/lg.svg", width: 580, height: 255 },
  Daikin: { src: "/brands/daikin.svg", width: 298, height: 63 },
  Midea: { src: "/brands/midea.svg", width: 3229, height: 1244 },
  Gree: { src: "/brands/gree.svg", width: 195, height: 38 },
  Fujitsu: { src: "/brands/fujitsu.svg", width: 200, height: 97 },
  Carrier: { src: "/brands/carrier.svg", width: 707, height: 280 },
  Elgin: { src: "/brands/elgin.svg", width: 500, height: 208 },
  Electrolux: { src: "/brands/electrolux.svg", width: 218, height: 50 },
  Consul: { src: "/brands/consul.svg", width: 500, height: 128 },
};

/**
 * Tamanho óptico: a largura cresce com a raiz da proporção, para logos largas e compactas
 * ocuparem área visual parecida (--logo-unit muda por breakpoint).
 */
function logoStyle({ width, height }: Logo): CSSProperties {
  return { width: `calc(var(--logo-unit) * ${Math.sqrt(width / height).toFixed(3)})` };
}

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
          <ul className="grid grid-cols-2 border-l border-t border-line [--logo-unit:2.75rem] sm:grid-cols-3 sm:[--logo-unit:3.25rem] lg:grid-cols-4 lg:[--logo-unit:3.5rem]">
            {brands.items.map((brand) => {
              const logo = logos[brand];
              return (
                <li key={brand} className="flex min-h-24 items-center justify-center border-b border-r border-line px-4 sm:min-h-28">
                  {logo ? (
                    <Image
                      src={logo.src}
                      alt={brand}
                      width={logo.width}
                      height={logo.height}
                      className="h-auto max-w-full"
                      style={logoStyle(logo)}
                    />
                  ) : (
                    <span className="text-lg font-bold tracking-tight text-navy/70 sm:text-xl">{brand}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted">{brands.disclaimer}</p>
        </div>
      </Container>
    </section>
  );
}
