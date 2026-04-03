"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "gold-outline" | "navy" | "white-outline";
  size?: "default" | "lg" | "xl";
  showArrow?: boolean;
  className?: string;
}

const variants = {
  gold: "bg-gold text-navy hover:bg-gold-light",
  "gold-outline": "border-2 border-gold text-gold hover:bg-gold hover:text-navy",
  navy: "bg-navy text-ivory hover:bg-navy-light",
  "white-outline": "border-2 border-white/30 text-white hover:bg-white/10",
};

const sizes = {
  default: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
  xl: "px-10 py-4 text-lg",
};

export function CtaButton({
  href,
  children,
  variant = "gold",
  size = "default",
  showArrow = false,
  className,
}: CtaButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const inner = (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-semibold rounded-full tracking-wide transition-all duration-300",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  );

  if (prefersReducedMotion) return inner;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      {inner}
    </motion.div>
  );
}
