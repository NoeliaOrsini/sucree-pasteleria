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
        "boutique-cta inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em]",
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
