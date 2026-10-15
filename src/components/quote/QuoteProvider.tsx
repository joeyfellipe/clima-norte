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
import { quoteRegionOptions, quoteServiceOptions, type Segment } from "@/content/home";
import { buildQuoteMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
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
  name: string;
  service: string;
  segment: Segment | "";
  region: string;
  details: string;
};

const emptyValues: FormValues = { name: "", service: "", segment: "", region: "", details: "" };

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-navy placeholder:text-muted/70 transition-colors focus:border-aqua focus:outline-none focus:ring-3 focus:ring-aqua/25";
const labelClass = "mb-1.5 block text-sm font-semibold text-navy";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const open = useCallback<OpenQuote>((options = {}) => {
    setSentUrl(null);
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.segment) return;

    const url = buildWhatsAppUrl(
      buildQuoteMessage({ ...values, segment: values.segment }),
    );
    const win = window.open(url, "_blank");
    if (win) {
      win.opener = null;
      setSentUrl(url);
    } else {
      window.location.href = url;
    }
  };

  return (
    <QuoteContext.Provider value={open}>
      {children}

      <dialog
        ref={dialogRef}
        aria-labelledby="quote-title"
        onClick={handleBackdropClick}
        className="quote-dialog m-0 mt-auto max-h-[92dvh] w-full max-w-none overflow-y-auto overscroll-contain rounded-t-3xl bg-white p-0 text-navy shadow-2xl sm:m-auto sm:max-h-[90dvh] sm:max-w-lg sm:rounded-3xl"
      >
        <div className="px-5 pb-6 pt-5 sm:px-8 sm:pb-8 sm:pt-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 id="quote-title" className="text-xl font-bold tracking-tight sm:text-2xl">
                Solicitar orçamento
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Preencha os dados e enviaremos sua mensagem pronta pelo WhatsApp.
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

          {sentUrl ? (
            <div className="mt-6 rounded-2xl bg-mist p-5" role="status">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-aqua/15 text-aqua-ink">
                <Icon name="check" strokeWidth={2.25} />
              </span>
              <p className="mt-3 font-semibold">Mensagem pronta no WhatsApp.</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Abrimos o WhatsApp em uma nova aba com seus dados. Se a conversa não abriu, use o botão abaixo.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a href={sentUrl} target="_blank" rel="noopener noreferrer" className={buttonClasses({ variant: "primary" })}>
                  <Icon name="whatsapp" /> Abrir WhatsApp
                </a>
                <button type="button" onClick={() => setSentUrl(null)} className={buttonClasses({ variant: "outline" })}>
                  Editar dados
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="quote-name" className={labelClass}>
                  Nome
                </label>
                <input
                  id="quote-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={80}
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={fieldClass}
                  placeholder="Como podemos te chamar?"
                />
              </div>

              <div>
                <label htmlFor="quote-service" className={labelClass}>
                  Tipo de serviço
                </label>
                <select
                  id="quote-service"
                  name="service"
                  required
                  value={values.service}
                  onChange={(e) => update("service", e.target.value)}
                  className={`${fieldClass} select-field`}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {quoteServiceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className={labelClass}>Tipo de imóvel</legend>
                <div className="grid grid-cols-2 gap-3">
                  {(["Residencial", "Comercial"] as const).map((segment) => (
                    <label
                      key={segment}
                      className="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl border border-line px-4 text-[0.9375rem] font-medium transition-colors has-checked:border-aqua has-checked:bg-aqua/10 has-focus-visible:ring-3 has-focus-visible:ring-aqua/30"
                    >
                      <input
                        type="radio"
                        name="segment"
                        value={segment}
                        required
                        checked={values.segment === segment}
                        onChange={() => update("segment", segment)}
                        className="h-4 w-4 accent-navy"
                      />
                      {segment}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="quote-region" className={labelClass}>
                  Cidade/região
                </label>
                <select
                  id="quote-region"
                  name="region"
                  required
                  value={values.region}
                  onChange={(e) => update("region", e.target.value)}
                  className={`${fieldClass} select-field`}
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  {quoteRegionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="quote-details" className={labelClass}>
                  O que você precisa? <span className="font-normal text-muted">(opcional)</span>
                </label>
                <textarea
                  id="quote-details"
                  name="details"
                  rows={3}
                  maxLength={400}
                  value={values.details}
                  onChange={(e) => update("details", e.target.value)}
                  className={`${fieldClass} resize-none`}
                  placeholder={
                    values.region === "Outra localidade"
                      ? "Informe sua cidade e uma breve descrição do serviço."
                      : "Ex.: modelo do aparelho, quantidade de equipamentos, ambiente."
                  }
                />
              </div>

              <button type="submit" className={buttonClasses({ variant: "primary", size: "lg", className: "w-full" })}>
                <Icon name="whatsapp" /> Continuar no WhatsApp
              </button>

              <p className="text-center text-xs leading-relaxed text-muted">
                Nenhum dado é salvo no site. As informações servem apenas para montar sua mensagem.
              </p>
            </form>
          )}
        </div>
      </dialog>
    </QuoteContext.Provider>
  );
}
