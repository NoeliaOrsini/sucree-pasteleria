import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { GALLERY } from "@/lib/site";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galeria" className="bg-cream/60 py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-8 h-[1px] w-96 max-w-full bg-gradient-to-r from-transparent via-[#800020]/60 to-transparent md:mb-10" />
        <header className="text-center">
          <p className="eyebrow">Galería</p>
          <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl md:text-6xl">
            Nuestras Creaciones
          </h2>
        </header>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpen(i)}
              className="frame-photo group relative aspect-square"
              aria-label={`Ampliar imagen ${i + 1}`}
            >
              <img
                src={src}
                alt={`Pastelería artesanal de Sucrée, imagen ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-burgundy-deep/0 transition-colors duration-500 group-hover:bg-burgundy-deep/25" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-90 flex items-center justify-center bg-burgundy-deep/85 p-5 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute right-5 top-5 text-ivory"
            onClick={() => setOpen(null)}
          >
            <X className="h-7 w-7" strokeWidth={1.25} />
          </button>
          <img
            src={GALLERY[open]}
            alt={`Pastelería artesanal de Sucrée, imagen ampliada ${open + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
