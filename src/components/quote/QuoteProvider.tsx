"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { quoteServiceOptions, type Segment } from "@/content/home";
import { buildQuoteMessage, buildWhatsAppUrl, formatPhone, openWhatsApp } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/button";

type OpenOptions = { service?: string; segment?: Segment };
type OpenQuote = (options?: OpenOptions) => void;

const QuoteContext = createContext<OpenQuote | null>(null);

export function useQuote(): OpenQuote {
  const open = useContext(QuoteContext);
  if (!open) throw new Error("useQuote precisa estar dentro de <QuoteProvider>.");
  return open;
}

type FormValues = {
  phone: string;
  location: string;
  service: string;
  segment: Segment | "";
  details: string;
};

const emptyValues: FormValues = { phone: "", location: "", service: "", segment: "", details: "" };

const STEPS = ["Contato", "Serviço", "Detalhes"] as const;

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-navy placeholder:text-muted/70 transition-colors focus:border-aqua focus:outline-none focus:ring-3 focus:ring-aqua/25";
const labelClass = "mb-2 block text-sm font-semibold text-navy";
const optionClass =
  "flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-line px-4 py-2.5 text-[0.9375rem] font-medium transition-colors hover:border-navy/30 has-checked:border-navy has-checked:bg-navy has-checked:text-white has-focus-visible:ring-3 has-focus-visible:ring-aqua/40";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [step, setStep] = useState(0);
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const open = useCallback<OpenQuote>((options = {}) => {
    setSentUrl(null);
    setStep(0);
    setValues((v) => ({
      ...v,
      service: options.service ?? v.service,
      segment: options.segment ?? v.segment,
    }));
    dialogRef.current?.showModal();
  }, []);

  const close = () => dialogRef.current?.close();

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) close();
  };

  // A validação nativa (required/pattern) roda a cada etapa, pois cada etapa é um submit.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }
    if (!values.segment) return;
    const url = buildWhatsAppUrl(buildQuoteMessage({ ...values, segment: values.segment }));
    if (openWhatsApp(url)) setSentUrl(url);
  };

  const progress = sentUrl ? 100 : ((step + 1) / STEPS.length) * 100;

  return (
    <QuoteContext.Provider value={open}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby="quote-title"
        onClick={handleBackdropClick}
        className="quote-dialog m-0 mt-auto max-h-[94dvh] w-full max-w-none overflow-y-auto overscroll-contain rounded-t-3xl bg-white p-0 text-navy shadow-2xl sm:m-auto sm:max-h-[90dvh] sm:max-w-lg sm:rounded-3xl"
      >
        <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="quote-title" className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Pedir orçamento
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Três etapas rápidas. No final, a mensagem abre pronta no WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="-mr-2 -mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-muted hover:bg-mist hover:text-navy focus-visible:outline-2 focus-visible:outline-aqua"
            >
              <Icon name="close" />
            </button>
          </div>

          {/* progresso */}
          <div className="mt-6">
            <div className="flex justify-between text-xs font-semibold text-muted">
              <span>
                {sentUrl ? "Concluído" : `Etapa ${step + 1} de ${STEPS.length} · ${STEPS[step]}`}
              </span>
            </div>
            <div
              className="mt-2 h-1.5 overflow-hidden rounded-full bg-mist"
              role="progressbar"
              aria-label="Progresso do formulário"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
            >
              <div className="h-full rounded-full bg-aqua transition-[width] duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {sentUrl ? (
            <div className="mt-6 rounded-2xl bg-mist p-5" role="status">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-aqua/15 text-aqua-ink">
                <Icon name="check" strokeWidth={2.25} />
              </span>
              <p className="mt-3 font-semibold">Mensagem pronta no WhatsApp.</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Abrimos o WhatsApp em uma nova aba com as suas respostas. Se a conversa não abriu, use o botão abaixo.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={sentUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses({ variant: "primary" })}>
                  <Icon name="whatsapp" /> Abrir WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSentUrl(null);
                    setStep(0);
                  }}
                  className={buttonClasses({ variant: "outline" })}
                >
                  Editar respostas
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="quote-phone" className={labelClass}>
                      Telefone com DDD
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel-national"
                      required
                      pattern="\(\d{2}\) \d{4,5}-\d{4}"
                      title="Informe DDD e número, por exemplo (11) 91234-5678"
                      value={values.phone}
                      onChange={(e) => update("phone", formatPhone(e.target.value))}
                      className={fieldClass}
                      placeholder="(11) 91234-5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-location" className={labelClass}>
                      Cidade e bairro
                    </label>
                    <input
                      id="quote-location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      required
                      maxLength={80}
                      value={values.location}
                      onChange={(e) => update("location", e.target.value)}
                      className={fieldClass}
                      placeholder="Ex.: Barueri, Alphaville"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5">
                  <fieldset>
                    <legend className={labelClass}>Qual serviço?</legend>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {quoteServiceOptions.map((option) => (
                        <label key={option} className={optionClass}>
                          <input
                            type="radio"
                            name="service"
                            value={option}
                            required
                            checked={values.service === option}
                            onChange={() => update("service", option)}
                            className="sr-only"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className={labelClass}>Onde?</legend>
                    <div className="grid grid-cols-2 gap-2">
                      {(["Residencial", "Comercial"] as const).map((segment) => (
                        <label key={segment} className={optionClass}>
                          <input
                            type="radio"
                            name="segment"
                            value={segment}
                            required
                            checked={values.segment === segment}
                            onChange={() => update("segment", segment)}
                            className="sr-only"
                          />
                          {segment}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}

              {step === 2 && (
                <div>
                  <label htmlFor="quote-details" className={labelClass}>
                    Conte rapidamente o que precisa <span className="font-normal text-muted">(opcional)</span>
                  </label>
                  <textarea
                    id="quote-details"
                    name="details"
                    rows={4}
                    maxLength={400}
                    value={values.details}
                    onChange={(e) => update("details", e.target.value)}
                    className={`${fieldClass} resize-none`}
                    placeholder="Ex.: split 12.000 BTUs no quarto, está pingando água desde a semana passada."
                  />
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    Modelo do aparelho, quantidade de equipamentos e fotos (enviadas depois no WhatsApp) agilizam o orçamento.
                  </p>
                </div>
              )}

              <div className="mt-7 flex gap-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className={buttonClasses({ variant: "outline", size: "lg", className: "px-5" })}
                  >
                    <Icon name="arrowLeft" className="h-4 w-4" strokeWidth={2.25} />
                    <span className="sr-only sm:not-sr-only">Voltar</span>
                  </button>
                )}
                <button type="submit" className={buttonClasses({ variant: "primary", size: "lg", className: "flex-1" })}>
                  {step < STEPS.length - 1 ? (
                    <>
                      Continuar <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2.25} />
                    </>
                  ) : (
                    <>
                      <Icon name="whatsapp" /> Enviar no WhatsApp
                    </>
                  )}
                </button>
              </div>

              <p className="mt-4 text-center text-xs leading-relaxed text-muted">
                Nenhum dado é salvo no site. As respostas servem apenas para montar a sua mensagem.
              </p>
            </form>
          )}
        </div>
      </dialog>
    </QuoteContext.Provider>
  );
}
