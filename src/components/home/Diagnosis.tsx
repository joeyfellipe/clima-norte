"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { diagnosis, equipmentTypes, symptoms, type Segment, type SymptomId } from "@/content/home";
import { photos } from "@/content/photos";
import { buildStructuredMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buttonClasses } from "@/components/ui/button";

type Answers = {
  symptom?: SymptomId;
  equipment?: string;
  segment?: Segment;
  region?: string;
  neighborhood: string;
};

const OTHER_REGION = "Outra localidade";
const questions = [
  "Qual problema você percebeu?",
  "Qual o tipo do equipamento?",
  "Onde está instalado?",
  "Em qual cidade ou região?",
  "Resumo do seu atendimento",
];

const chipClass =
  "flex min-h-13 w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-[0.9375rem] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aqua";
const chipIdle = "border-line bg-white text-navy hover:border-navy/40 hover:bg-mist";
const chipActive = "border-navy bg-navy text-white";

export function Diagnosis() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({ neighborhood: "" });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const interacted = useRef(false);

  // Leva o foco para a pergunta atual a cada troca de etapa (sem roubar o foco no carregamento).
  useEffect(() => {
    if (interacted.current) titleRef.current?.focus({ preventScroll: true });
  }, [step]);

  const go = (next: number) => {
    interacted.current = true;
    setStep(next);
  };

  const choose = <K extends keyof Answers>(key: K, value: Answers[K], next: number) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    go(next);
  };

  const symptom = symptoms.find((s) => s.id === answers.symptom);
  const regionText =
    answers.region === OTHER_REGION
      ? answers.neighborhood
      : [answers.region, answers.neighborhood].filter(Boolean).join(" — ");

  const whatsappUrl = buildWhatsAppUrl(
    buildStructuredMessage([
      ["Fluxo", "Diagnóstico inicial"],
      ["Problema percebido", symptom?.label],
      ["Equipamento", answers.equipment],
      ["Local", answers.segment],
      ["Cidade/região", regionText],
    ]),
  );

  const canFinishRegion = answers.region && (answers.region !== OTHER_REGION || answers.neighborhood.trim());

  return (
    <section id="diagnostico" aria-labelledby="diagnostico-title" className="bg-navy py-20 text-white sm:py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading id="diagnostico-title" eyebrow={diagnosis.eyebrow} title={diagnosis.title} intro={diagnosis.text} tone="dark" />

          <figure className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
            <Photo photo={photos.splitIndoor} sizes="36vw" />
          </figure>

          <p className="mt-8 flex gap-3 text-sm leading-relaxed text-on-dark">
            <Icon name="eye" className="mt-0.5 h-4 w-4 shrink-0 text-aqua" />
            {diagnosis.disclaimer}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="-mx-4 bg-white p-5 text-navy sm:mx-0 sm:rounded-3xl sm:p-8 lg:p-10">
            {/* indicador de etapas */}
            <ol className="grid grid-cols-5 gap-1.5" aria-label="Etapas do diagnóstico">
              {diagnosis.steps.map((label, i) => (
                <li key={label} aria-current={i === step ? "step" : undefined}>
                  <span className={`block h-1 rounded-full ${i <= step ? "bg-aqua" : "bg-mist"}`} />
                  <span
                    className={`mt-2 hidden text-xs font-semibold sm:block ${i === step ? "text-navy" : "text-muted"}`}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-7 flex items-center justify-between gap-4">
              <h3
                ref={titleRef}
                tabIndex={-1}
                className="text-xl font-extrabold tracking-tight outline-none sm:text-2xl"
              >
                <span className="mr-2 font-mono text-sm font-bold text-aqua-ink">
                  {String(step + 1).padStart(2, "0")}
                </span>
                {questions[step]}
              </h3>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => go(step - 1)}
                  className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-muted hover:bg-mist hover:text-navy focus-visible:outline-2 focus-visible:outline-aqua"
                >
                  <Icon name="arrowLeft" className="h-4 w-4" /> Voltar
                </button>
              )}
            </div>

            <div className="mt-6 min-h-[20rem] lg:min-h-[18rem]">
              {step === 0 && (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {symptoms.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        aria-pressed={answers.symptom === s.id}
                        onClick={() => choose("symptom", s.id, 1)}
                        className={`${chipClass} ${answers.symptom === s.id ? chipActive : chipIdle}`}
                      >
                        {s.label}
                        <Icon name="arrowRight" className="h-4 w-4 shrink-0 opacity-50" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {step === 1 && (
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {equipmentTypes.map((type) => (
                    <li key={type}>
                      <button
                        type="button"
                        aria-pressed={answers.equipment === type}
                        onClick={() => choose("equipment", type, 2)}
                        className={`${chipClass} ${answers.equipment === type ? chipActive : chipIdle}`}
                      >
                        {type}
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {step === 2 && (
                <ul className="grid gap-2 sm:grid-cols-2">
                  {(["Residencial", "Comercial"] as const).map((segment) => (
                    <li key={segment}>
                      <button
                        type="button"
                        aria-pressed={answers.segment === segment}
                        onClick={() => choose("segment", segment, 3)}
                        className={`${chipClass} min-h-20 ${answers.segment === segment ? chipActive : chipIdle}`}
                      >
                        <span>
                          <span className="block text-base">{segment}</span>
                          <span className="mt-0.5 block text-xs font-medium opacity-70">
                            {segment === "Residencial" ? "Casa, apartamento, home office" : "Escritório, loja, consultório"}
                          </span>
                        </span>
                        <Icon name={segment === "Residencial" ? "home" : "building"} className="h-5 w-5 shrink-0 opacity-60" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {step === 3 && (
                <div>
                  <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {[...siteConfig.serviceArea, OTHER_REGION].map((area) => (
                      <li key={area}>
                        <button
                          type="button"
                          aria-pressed={answers.region === area}
                          onClick={() => setAnswers((a) => ({ ...a, region: area }))}
                          className={`${chipClass} min-h-12 text-sm ${answers.region === area ? chipActive : chipIdle}`}
                        >
                          {area}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <label htmlFor="diag-neighborhood" className="mt-5 block text-sm font-semibold">
                    {answers.region === OTHER_REGION ? "Qual cidade e bairro?" : "Bairro"}{" "}
                    {answers.region !== OTHER_REGION && <span className="font-normal text-muted">(opcional)</span>}
                  </label>
                  <input
                    id="diag-neighborhood"
                    type="text"
                    maxLength={80}
                    autoComplete="address-level3"
                    value={answers.neighborhood}
                    onChange={(e) => setAnswers((a) => ({ ...a, neighborhood: e.target.value }))}
                    placeholder={answers.region === OTHER_REGION ? "Ex.: Cotia, Granja Viana" : "Ex.: Alphaville Residencial 2"}
                    className="mt-2 w-full rounded-xl border border-line px-4 py-3.5 text-base placeholder:text-muted/70 focus:border-aqua focus:outline-none focus:ring-3 focus:ring-aqua/25"
                  />
                  <button
                    type="button"
                    disabled={!canFinishRegion}
                    onClick={() => go(4)}
                    className={buttonClasses({ variant: "primary", size: "lg", className: "mt-6 w-full sm:w-auto" })}
                  >
                    Ver resumo <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
                  </button>
                </div>
              )}

              {step === 4 && (
                <div>
                  <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line text-sm">
                    {[
                      ["Problema", symptom?.label],
                      ["Equipamento", answers.equipment],
                      ["Local", answers.segment],
                      ["Região", regionText],
                    ].map(([label, value]) => (
                      <div key={label} className="bg-mist p-4">
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{label}</dt>
                        <dd className="mt-1 font-semibold text-navy">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  {symptom && (
                    <p className="mt-6 text-pretty text-[0.9375rem] leading-relaxed text-navy">
                      Nesse tipo de situação, o técnico costuma verificar {symptom.checks}.
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    A causa real só é confirmada na avaliação. Envie as respostas e, se puder, uma foto do aparelho.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonClasses({ variant: "primary", size: "lg" })}
                    >
                      <Icon name="whatsapp" /> Enviar pelo WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setAnswers({ neighborhood: "" });
                        go(0);
                      }}
                      className={buttonClasses({ variant: "outline", size: "lg" })}
                    >
                      Recomeçar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
