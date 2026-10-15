import { siteConfig } from "@/config/site";
import { services } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 pb-24 pt-14 text-on-dark sm:pb-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-4 text-sm leading-relaxed">
              Instalação, manutenção e higienização de ar-condicionado para residências e empresas em Barueri,
              Alphaville e região.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Serviços</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.items.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#servicos" className="hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Regiões</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.serviceArea.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-on-dark/80 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.fullName}.
          </p>
          {siteConfig.isConcept && (
            <p className="max-w-xl md:text-right">
              Projeto conceito desenvolvido pela {siteConfig.agency.name} para portfólio. Empresa fictícia; dados de
              contato ilustrativos.
            </p>
          )}
        </div>
      </Container>
    </footer>
  );
}
