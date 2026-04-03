import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.2em] mb-3",
            light ? "text-gold-light" : "text-gold"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
          light ? "text-ivory" : "text-navy"
        )}
      >
        {title}
      </h2>
      {/* Gold accent line */}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full bg-gold",
          align === "center" && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-6 text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-ivory/70" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
