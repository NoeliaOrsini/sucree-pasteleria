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
        "boutique-cta inline-flex min-h-11 items-center justify-center px-9 py-4 text-sm font-medium uppercase tracking-[0.2em]",
        variant === "solid"
          ? "border border-burgundy"
          : "border border-burgundy",
        className,
      )}
    >
      Hacé tu pedido
    </a>
  );
}
