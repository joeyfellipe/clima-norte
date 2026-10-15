import { siteConfig } from "@/config/site";
import { serviceLabels } from "@/content/home";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

const footerServices = [
  serviceLabels.installation,
  serviceLabels.preventive,
  serviceLabels.cleaning,
  serviceLabels.corrective,
  serviceLabels.pmoc,
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 pb-24 pt-16 text-on-dark sm:pb-12 lg:pt-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo tone="dark" />
            <p className="mt-5 text-sm leading-relaxed">
              Instalação, manutenção e higienização de ar-condicionado para residências e empresas em Barueri,
              Alphaville e região oeste de São Paulo.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Serviços</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {footerServices.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Região</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm md:grid-cols-1">
              {siteConfig.serviceArea.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Contato</h2>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-aqua"
            >
              <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
            </a>
            <p className="mt-3 text-sm leading-relaxed">Atendimento com hora marcada.</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-on-dark/80 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.fullName}.
          </p>
          {siteConfig.isConcept && (
            <p className="max-w-xl md:text-right">
              Projeto conceito desenvolvido pela {siteConfig.agency.name} para portfólio. Empresa fictícia; informações
              de contato ilustrativas.
            </p>
          )}
        </div>
      </Container>
    </footer>
  );
}
