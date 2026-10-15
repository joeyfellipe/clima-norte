import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Icon } from "@/components/ui/Icon";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Clima Norte pelo WhatsApp"
      className="whatsapp-float fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-navy/20 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsapp" className="h-7 w-7" strokeWidth={1.9} />
    </a>
  );
}
