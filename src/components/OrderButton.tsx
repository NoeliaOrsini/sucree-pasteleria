import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/site";

export function OrderButton({
  className,
  variant = "solid",
}: {
  className?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center px-9 py-4 text-[0.66rem] uppercase tracking-[0.3em] transition-all duration-300 ease-in-out hover:-translate-y-0.5",
        variant === "solid"
          ? "bg-burgundy text-primary-foreground hover:bg-burgundy-warm hover:shadow-[0_12px_28px_-12px_rgba(139,30,63,0.35)]"
          : "border border-burgundy text-burgundy hover:bg-burgundy-warm hover:text-primary-foreground hover:shadow-[0_12px_28px_-12px_rgba(139,30,63,0.3)]",
        className,
      )}
    >
      Hacé tu pedido
    </a>
  );
}
