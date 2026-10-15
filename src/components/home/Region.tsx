import { region } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";

/**
 * Posições aproximadas (a partir de latitude/longitude reais) num mapa esquemático.
 * `dx`/`dy` deslocam o rótulo em relação ao ponto; `anchor` alinha o texto.
 */
const places = [
  { name: "Santana de Parnaíba", x: 132, y: 96, primary: true, dx: -20, dy: -20, anchor: "start" },
  { name: "Alphaville", x: 300, y: 182, primary: true, dx: 0, dy: -18, anchor: "middle" },
  { name: "Tamboré", x: 376, y: 226, primary: true, dx: 16, dy: 6, anchor: "start" },
  { name: "Barueri", x: 244, y: 258, primary: true, dx: -16, dy: 6, anchor: "end" },
  { name: "Jandira", x: 170, y: 304, primary: false, dx: -14, dy: 22, anchor: "end" },
  { name: "Itapevi", x: 84, y: 352, primary: false, dx: 0, dy: 30, anchor: "middle" },
  { name: "Carapicuíba", x: 348, y: 306, primary: false, dx: 0, dy: 30, anchor: "middle" },
  { name: "Osasco", x: 478, y: 300, primary: false, dx: 0, dy: -18, anchor: "middle" },
] as const;

const hub = places.find((p) => p.name === "Barueri")!;

function CoverageMap() {
  return (
    <svg viewBox="0 0 600 430" aria-hidden="true" focusable="false" className="h-auto w-full">
      <defs>
        <pattern id="map-dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#FFFFFF" fillOpacity="0.08" />
        </pattern>
      </defs>
      <rect width="600" height="430" fill="url(#map-dots)" />

      {/* área principal */}
      <path
        d="M96 92 C150 40 300 120 360 150 C430 186 432 262 372 286 C300 312 220 300 176 270 C120 232 60 140 96 92 Z"
        fill="#39BCEB"
        fillOpacity="0.12"
        stroke="#39BCEB"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      {/* área de entorno */}
      <path
        d="M48 120 C40 40 220 30 330 100 C440 160 560 220 540 320 C520 400 330 400 220 380 C120 370 56 300 48 120 Z"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.22"
        strokeWidth="1.5"
        strokeDasharray="4 8"
      />

      {/* ligações a partir de Barueri */}
      <g stroke="#FFFFFF" strokeOpacity="0.18" strokeWidth="1.25">
        {places
          .filter((p) => p !== hub)
          .map((p) => (
            <line key={p.name} x1={hub.x} y1={hub.y} x2={p.x} y2={p.y} />
          ))}
      </g>

      {/* direção da capital */}
      <g fill="#B8C6D4" fontSize="15" fontWeight="600">
        <text x="584" y="214" textAnchor="end">
          São Paulo
        </text>
        <path d="M528 228h52m-8-6 8 6-8 6" stroke="#B8C6D4" strokeWidth="1.5" fill="none" />
      </g>

      {places.map((p) => (
        <g key={p.name}>
          {p.primary ? (
            <>
              <circle cx={p.x} cy={p.y} r="14" fill="#39BCEB" fillOpacity="0.2" />
              <circle cx={p.x} cy={p.y} r="6" fill="#39BCEB" />
            </>
          ) : (
            <circle cx={p.x} cy={p.y} r="5.5" fill="#0B1F33" stroke="#FFFFFF" strokeWidth="2" />
          )}
          <text
            x={p.x + p.dx}
            y={p.y + p.dy}
            textAnchor={p.anchor}
            fontSize={p.primary ? 23 : 20}
            fontWeight={p.primary ? 800 : 600}
            fill={p.primary ? "#FFFFFF" : "#B8C6D4"}
          >
            {p.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Region() {
  return (
    <section id="regiao" aria-labelledby="regiao-title" className="overflow-hidden bg-navy py-20 text-white sm:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading id="regiao-title" eyebrow={region.eyebrow} title={region.title} intro={region.text} tone="dark" className="lg:[&_h2]:text-[2.75rem]" />

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-aqua">Foco principal</h3>
              <ul className="mt-4 space-y-2.5 border-t border-white/15 pt-4 font-semibold">
                {region.primary.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-on-dark">Também atendemos</h3>
              <ul className="mt-4 space-y-2.5 border-t border-white/15 pt-4 text-on-dark">
                {region.nearby.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-on-dark">{region.other}</p>
          <QuoteButton className={buttonClasses({ variant: "accent", size: "lg", className: "mt-6 w-full sm:w-auto" })}>
            {region.cta}
            <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
          </QuoteButton>
        </div>

        <figure className="reveal -mx-4 border-y border-white/10 bg-navy-900/40 px-2 py-6 sm:mx-0 sm:rounded-3xl sm:border sm:p-8 lg:col-span-7">
          <CoverageMap />
          <figcaption className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 px-2 text-xs text-on-dark">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-aqua" /> Foco principal
            </span>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full border-2 border-white" /> Municípios próximos
            </span>
            <span className="sm:ml-auto">{region.mapNote}</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
