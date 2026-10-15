"use client";

import { useState } from "react";
import { estimate } from "@/content/home";
import { buildStructuredMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";

type Field = "service" | "capacity" | "place" | "complexity";
type Selection = Partial<Record<Field, string>>;

const fields: { key: Field; legend: string; options: readonly string[] }[] = [
  { key: "service", legend: "Serviço", options: estimate.services },
  { key: "capacity", legend: "Capacidade", options: estimate.capacities },
  { key: "place", legend: "Tipo de local", options: estimate.places },
  { key: "complexity", legend: "Complexidade", options: estimate.complexities },
];

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function Estimate() {
  const [sel, setSel] = useState<Selection>({});

  const range = sel.service && sel.capacity ? estimate.priceRanges[`${sel.service}|${sel.capacity}`] : undefined;

  const notes = [
    sel.service && estimate.notes.service[sel.service],
    sel.capacity && estimate.notes.capacity[sel.capacity],
    sel.place && estimate.notes.place[sel.place],
    sel.complexity && estimate.notes.complexity[sel.complexity],
  ].filter((n): n is string => Boolean(n));

  const whatsappUrl = buildWhatsAppUrl(
    buildStructuredMessage([
      ["Fluxo", "Estimativa rápida"],
      ["Serviço", sel.service],
      ["Capacidade", sel.capacity],
      ["Tipo de local", sel.place],
      ["Complexidade", sel.complexity],
    ]),
  );

  return (
    <section id="estimativa" aria-labelledby="estimativa-title" className="bg-mist py-20 sm:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionHeading id="estimativa-title" eyebrow={estimate.eyebrow} title={estimate.title} intro={estimate.text} className="lg:[&_h2]:text-[2.5rem]" />
        </div>

        <div className="-mx-4 overflow-hidden bg-white sm:mx-0 sm:rounded-3xl lg:col-span-8 lg:grid lg:grid-cols-[1.25fr_1fr]">
          <form className="space-y-7 p-5 sm:p-8 lg:p-10" onSubmit={(e) => e.preventDefault()}>
            {fields.map((field) => (
              <fieldset key={field.key}>
                <legend className="text-xs font-bold uppercase tracking-[0.16em] text-navy">{field.legend}</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {field.options.map((option) => (
                    <label
                      key={option}
                      className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-line px-4 text-sm font-semibold text-navy transition-colors hover:border-navy/40 has-checked:border-navy has-checked:bg-navy has-checked:text-white has-focus-visible:ring-3 has-focus-visible:ring-aqua/40"
                    >
                      <input
                        type="radio"
                        name={`estimate-${field.key}`}
                        value={option}
                        checked={sel[field.key] === option}
                        onChange={() => setSel((s) => ({ ...s, [field.key]: option }))}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </form>

          <div className="flex flex-col bg-navy p-5 text-white sm:p-8 lg:p-10" aria-live="polite">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-aqua">Sua estimativa</p>

            {range ? (
              <p className="mt-4 text-3xl font-extrabold tracking-tight">
                {brl(range.min)} a {brl(range.max)}
              </p>
            ) : (
              <p className="mt-4 text-pretty text-xl font-bold leading-snug">{estimate.noPriceMessage}</p>
            )}

            {notes.length > 0 ? (
              <ul className="mt-6 space-y-3 border-t border-white/15 pt-6">
                {notes.map((note) => (
                  <li key={note} className="flex gap-3 text-sm leading-relaxed text-on-dark">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    {note}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 border-t border-white/15 pt-6 text-sm leading-relaxed text-on-dark">
                Selecione as opções para ver o que costuma influenciar o valor do serviço.
              </p>
            )}

            <div className="mt-auto pt-8">
              {sel.service ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClasses({ variant: "accent", size: "lg", className: "w-full" })}
                >
                  <Icon name="whatsapp" /> {estimate.cta}
                </a>
              ) : (
                <p className="rounded-full border border-white/15 px-5 py-3.5 text-center text-sm text-on-dark">
                  Escolha ao menos o serviço para continuar
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
