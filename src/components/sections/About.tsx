import { ABOUT_IMAGE } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="py-10 md:py-12">
      <div className="mx-auto mb-8 h-[1px] w-96 max-w-full bg-gradient-to-r from-transparent via-[#800020]/60 to-transparent md:mb-10" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="frame-photo aspect-3/4 rounded-b-[12rem]">
          <img
            src={ABOUT_IMAGE}
            alt="Valentina Chironi trabajando en el obrador de Sucrée Pastelería"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">Sobre Sucrée</p>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
            Valentina Chironi
          </h2>
          <div className="mt-6 space-y-5 text-lg font-normal leading-relaxed text-muted-foreground">
            <p>
              Sucrée nace del oficio y la paciencia: masas trabajadas a mano, cremas hechas el
              mismo día y una obsesión sana por el detalle. Valentina lleva la técnica de la
              pastelería francesa a un obrador pequeño en Lobos.
            </p>
            <p>
              Cada pedido se piensa como una pieza única, desde el equilibrio del dulzor hasta la
              terminación final. Sin apuros, sin atajos, con ingredientes que se eligen uno por
              uno.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
