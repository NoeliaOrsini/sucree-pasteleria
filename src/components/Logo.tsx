import { ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";

const LETTERS = ["S", "U", "C", "R", "É", "E"];

type LogoProps = {
  /** When true, letters/hat/subtitle animate in sequence. */
  animated?: boolean;
  className?: string;
  size?: "sm" | "lg";
};

export function Logo({ animated = false, className, size = "sm" }: LogoProps) {
  const wordSize = size === "lg" ? "text-[13vw] sm:text-7xl md:text-8xl" : "text-2xl sm:text-3xl";
  const subSize =
    size === "lg"
      ? "text-base tracking-[0.15em]"
      : "text-[9px] tracking-[0.3em] sm:text-sm sm:tracking-[0.15em]";

  return (
    <div className={cn("flex flex-col items-center leading-none", className)}>
      <div className="relative flex items-end">
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className={cn(
              "font-display tracking-[0.12em] text-burgundy",
              wordSize,
              animated && "animate-letter",
            )}
            style={animated ? { animationDelay: `${0.25 + i * 0.14}s` } : undefined}
          >
            {letter}
          </span>
        ))}
        <ChefHat
          aria-hidden
          strokeWidth={1.25}
          className={cn(
            "absolute right-0 translate-x-[15%] text-burgundy",
            size === "lg"
              ? "-top-[0.62em] h-[0.58em] w-[0.58em] text-[13vw] sm:text-7xl md:text-8xl"
              : "-top-[0.6em] h-[0.62em] w-[0.62em] text-2xl sm:text-3xl",
            animated && "animate-hat",
          )}
          style={animated ? { animationDelay: "1.35s" } : undefined}
        />
      </div>
      <span
        className={cn(
          "mt-2 block w-full text-center font-sans font-medium uppercase text-muted-foreground",
          subSize,
          animated && "animate-rise",
        )}
        style={animated ? { animationDelay: "2s" } : undefined}
      >
        Pastelería
      </span>
    </div>
  );
}
