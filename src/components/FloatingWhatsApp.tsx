import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Hacé tu pedido por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-burgundy px-5 py-4 text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.36_0.155_20/0.7)] transition-transform duration-300 hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
      <span className="hidden text-[0.62rem] uppercase tracking-[0.28em] sm:inline">
        Hacé tu pedido
      </span>
    </a>
  );
}
