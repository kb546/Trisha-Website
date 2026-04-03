import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "default" | "featured";
  className?: string;
}

export function TestimonialCard({
  testimonial,
  variant = "default",
  className,
}: TestimonialCardProps) {
  if (variant === "featured") {
    return (
      <div className={cn("text-center max-w-4xl mx-auto", className)}>
        <Quote className="h-12 w-12 text-gold/40 mx-auto mb-6" />
        <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-ivory leading-snug italic">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div className="mt-8">
          <p className="text-gold font-semibold text-lg">{testimonial.name}</p>
          <p className="text-ivory/60 text-sm mt-1">
            {testimonial.title}, {testimonial.organization}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <Quote className="h-8 w-8 text-gold/30 mb-4" />
      <blockquote className="text-charcoal leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-border/50">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-navy text-sm">{testimonial.name}</p>
          <p className="text-muted-foreground text-xs">
            {testimonial.title}, {testimonial.organization}
          </p>
        </div>
      </div>
    </div>
  );
}
