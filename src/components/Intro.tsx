import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Intro() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGone(true), 3600);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-100 flex items-center justify-center bg-ivory"
      style={{ animation: "veil-out 0.7s ease 2.9s both" }}
    >
      <Logo animated size="lg" />
    </div>
  );
}
