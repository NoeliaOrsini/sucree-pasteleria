import { MapPin, Phone, User } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { ADDRESS, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site";

export function Contact() {
  return (
    <section id="contacto" className="bg-cream/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <header className="text-center">
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl md:text-6xl">
            Dónde encontrarnos
          </h2>
        </header>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-8">
            <ul className="space-y-5 border-l border-burgundy/25 pl-6">
              <Row icon={<User className="h-4 w-4" strokeWidth={1.5} />} label="Pastelera">
                Valentina Chironi
              </Row>
              <Row icon={<MapPin className="h-4 w-4" strokeWidth={1.5} />} label="Ubicación">
                {ADDRESS}
              </Row>
              <Row icon={<Phone className="h-4 w-4" strokeWidth={1.5} />} label="WhatsApp">
                {WHATSAPP_DISPLAY}
              </Row>
            </ul>

            <div className="flex items-center gap-5 border border-dashed border-burgundy/35 bg-ivory p-5">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-burgundy/20 bg-cream">
                <QRCodeSVG
                  value={WHATSAPP_URL}
                  size={96}
                  title="Código QR de WhatsApp de Sucrée Pastelería"
                  role="img"
                  aria-label="Código QR de WhatsApp de Sucrée Pastelería"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-xl text-burgundy">Código QR de WhatsApp</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Escaneá y escribinos directo desde el celular.
                </p>
              </div>
            </div>
          </div>

          <div className="frame-photo min-h-72 md:min-h-full">
            <iframe
              title="Ubicación de Sucrée Pastelería en Turdo 627, Lobos"
              src="https://www.google.com/maps?q=Turdo%20627%2C%20Lobos%2C%20Buenos%20Aires&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-72 w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-1 shrink-0 text-burgundy">{icon}</span>
      <span className="min-w-0">
        <span className="block text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block font-display text-xl text-foreground sm:text-2xl">
          {children}
        </span>
      </span>
    </li>
  );
}
