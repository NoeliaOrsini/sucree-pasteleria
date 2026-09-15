import { OrderButton } from "../OrderButton";
import { HERO_IMAGE } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 md:grid-cols-2 md:gap-16 md:pb-12">
        <div className="animate-rise" style={{ animationDelay: "3.4s" }}>
          <p className="eyebrow">Lobos · Buenos Aires</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
            Pastelería
            <br />
            <em className="text-burgundy not-italic">artesanal</em> de
            <br />
            inspiración francesa
          </h1>
          <p className="mt-7 max-w-md text-base font-normal leading-relaxed text-muted-foreground">
            Cada pieza se prepara por encargo, con materia prima seleccionada y el tiempo que la
            buena pastelería necesita. Tortas, tartas, petit fours y postres para tus momentos.
          </p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <OrderButton />
            <a
              href="#productos"
              className="inline-flex items-center border-b border-[#362722]/30 pb-1 text-base font-medium uppercase tracking-[0.16em] text-burgundy transition-colors hover:border-burgundy"
            >
              Ver catálogo
            </a>
          </div>
        </div>

        <div className="animate-rise" style={{ animationDelay: "3.6s" }}>
          <div className="frame-photo relative aspect-4/5 rounded-t-[14rem]">
            <img
              src={HERO_IMAGE}
              alt="Torta artesanal de estilo francés elaborada en Sucrée Pastelería"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className="hairline mx-auto max-w-6xl" />
    </section>
  );
}
