import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacé tu pedido por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-burgundy text-primary-foreground shadow-[0_18px_40px_-18px_oklch(0.36_0.155_20/0.7)] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[inset_0_0_12px_rgba(255,255,255,0.15)]"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
    </a>
  );
}
