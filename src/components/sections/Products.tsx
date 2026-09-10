import { useState } from "react";
import { CATEGORIES, type Category } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Products() {
  return (
    <section id="productos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <header className="text-center">
          <p className="eyebrow">Catálogo</p>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl md:text-6xl">
            Nuestros productos
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Todo se elabora por encargo. Consultanos disponibilidad, tamaños y tiempos de
            preparación por WhatsApp.
          </p>
        </header>

        <div className="mt-16 space-y-20 md:space-y-28">
          {CATEGORIES.map((category, i) => (
            <CategoryBlock key={category.id} category={category} flipped={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({ category, flipped }: { category: Category; flipped: boolean }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={cn("frame-photo relative aspect-4/3 overflow-hidden", flipped && "md:order-2")}>
        <img
          src={category.image}
          alt={`${category.name} de Sucrée Pastelería`}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out",
            active ? "scale-105" : "scale-100",
          )}
        />
        {/* TEXTO Y FONDO BORGOÑA SOBRE LA IMAGEN COMENTADO PARA LA FASE 2:
        <div
          className={cn(
            "pointer-events-none absolute inset-0 flex items-end bg-burgundy-deep/45 p-6 transition-opacity duration-500",
            active ? "opacity-100" : "opacity-0",
          )}
        >
          <span className="font-display text-2xl text-ivory sm:text-3xl">{active}</span>
        </div>
        */}
      </div>

      <div className="min-w-0">
        <p className="eyebrow">{String(CATEGORIES.indexOf(category) + 1).padStart(2, "0")}</p>
        <h3 className="mt-3 font-display text-3xl uppercase tracking-[0.06em] text-burgundy sm:text-4xl">
          {category.name}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {category.note}
        </p>

        <ul className="mt-7 border-t border-border" onMouseLeave={() => setActive(null)}>
          {category.items.map((item) => (
            <li key={item} className="border-b border-border">
              <button
                type="button"
                onMouseEnter={() => setActive(item)}
                onFocus={() => setActive(item)}
                className={cn(
                  "group flex w-full items-center gap-3 py-3 text-left transition-all duration-300",
                  active === item ? "pl-3 text-burgundy" : "pl-0 text-foreground",
                )}
              >
                <span
                  className={cn(
                    "h-px bg-burgundy transition-all duration-300",
                    active === item ? "w-6" : "w-0",
                  )}
                />
                <span className="text-sm tracking-wide sm:text-base">{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
