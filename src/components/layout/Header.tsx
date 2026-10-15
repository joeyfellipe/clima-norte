import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { buttonClasses } from "@/components/ui/button";
import { QuoteButton } from "@/components/quote/QuoteButton";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.75rem]">
        <a href="#inicio" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-aqua">
          <Logo />
          <span className="sr-only">— ir para o início</span>
        </a>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-[0.9375rem] font-medium text-muted transition-colors hover:bg-mist hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <QuoteButton className={buttonClasses({ variant: "primary", className: "max-sm:hidden" })}>
            Pedir orçamento
          </QuoteButton>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
