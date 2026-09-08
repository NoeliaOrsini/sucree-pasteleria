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
        "inline-flex items-center justify-center px-9 py-4 text-[0.66rem] uppercase tracking-[0.3em] transition-all duration-300",
        variant === "solid"
          ? "bg-burgundy text-primary-foreground hover:bg-burgundy-deep"
          : "border border-burgundy text-burgundy hover:bg-burgundy hover:text-primary-foreground",
        className,
      )}
    >
      Hacé tu pedido
    </a>
  );
}
