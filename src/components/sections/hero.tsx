"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CtaButton } from "@/components/shared/cta-button";

export function Hero() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const bgY = useTransform(scrollY, [0, 700], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-svh min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <motion.div
        style={prefersReducedMotion ? {} : { y: bgY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/photos/hero-seated-pink.jpg"
          alt="Trisha — Corporate Emcee, Host, and Speaker"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay — stronger for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
      <div className="absolute inset-0 z-[1] bg-navy/25" />

      {/* Content */}
      <motion.div
        style={prefersReducedMotion ? {} : { opacity }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-sm sm:text-base font-semibold uppercase tracking-[0.25em] mb-6"
        >
          Corporate Emcee &middot; Host &middot; Moderator &middot; Podcaster &middot; Speaker
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory leading-[1.1] mb-8"
        >
          Commanding Stages.{" "}
          <span className="block mt-2">
            <span className="text-gold">Connecting</span> Audiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-ivory/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Elevating events across East Africa and beyond with elegance,
          warmth, and impact. Former Citizen TV Kenya presenter, podcaster,
          and one of the region&apos;s most sought-after event hosts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CtaButton href="/book" variant="gold" size="lg">
            Book Trisha
          </CtaButton>
          <CtaButton href="/about" variant="white-outline" size="lg" showArrow>
            Meet Trisha
          </CtaButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-ivory/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
