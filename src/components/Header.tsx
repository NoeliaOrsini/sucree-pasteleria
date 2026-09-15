import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV, WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_0_var(--border)]" : "bg-ivory",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:grid-cols-3 md:py-5">
        <a href="#inicio" className="min-w-0 md:order-2 md:justify-self-center">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:order-1 md:flex">
          {NAV.slice(0, 3).map((n) => (
            <NavLink key={n.href} {...n} />
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 md:order-3 md:flex">
          {NAV.slice(3).map((n) => (
            <NavLink key={n.href} {...n} />
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="boutique-cta rounded-full px-5 py-1.5 text-xs font-normal uppercase tracking-widest"
          >
            Pedidos
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 justify-self-end text-burgundy md:hidden"
        >
          {open ? <Menu className="h-6 w-6 rotate-90 opacity-0" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div className="hairline mx-auto max-w-6xl" />

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-60 flex flex-col bg-ivory transition-all duration-400 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Logo />
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="text-burgundy"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-burgundy"
            >
              {n.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="boutique-cta mt-4 border border-burgundy px-8 py-3 text-base font-medium uppercase tracking-[0.2em]"
          >
            Pedidos
          </a>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="relative whitespace-nowrap text-xs font-normal uppercase tracking-widest text-[#362722] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-burgundy after:transition-all after:duration-300 hover:text-burgundy hover:after:w-full"
    >
      {label}
    </a>
  );
}
