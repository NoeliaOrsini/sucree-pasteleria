import { Linkedin, Mail } from "lucide-react";
import { Logo } from "../Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <Logo />
        <div className="space-y-2 text-xs tracking-wide text-muted-foreground">
          <p>Realizado por Noelia Orsini</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="mailto:noelia.tech@gmail.com"
              className="inline-flex items-center gap-2 transition-colors hover:text-burgundy"
            >
              <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
              noelia.tech@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/noelia-orsini"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-burgundy"
            >
              <Linkedin className="h-3.5 w-3.5" strokeWidth={1.5} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
