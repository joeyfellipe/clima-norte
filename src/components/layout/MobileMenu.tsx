"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/button";
import { useQuote } from "@/components/quote/QuoteProvider";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const openQuote = useQuote();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1280 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-navy hover:bg-mist focus-visible:outline-2 focus-visible:outline-aqua"
      >
        <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-white shadow-lg shadow-navy/5"
      >
        <nav aria-label="Menu" className="mx-auto max-w-7xl px-4 pb-5 pt-2 sm:px-6 lg:px-10">
          <ul className="divide-y divide-line">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-between text-base font-medium text-navy"
                >
                  {item.label}
                  <Icon name="arrowRight" className="h-4 w-4 text-muted" />
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              openQuote();
            }}
            className={buttonClasses({ variant: "primary", size: "lg", className: "mt-4 w-full" })}
          >
            Pedir orçamento
          </button>
        </nav>
      </div>
    </div>
  );
}
