"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CtaButton } from "@/components/shared/cta-button";

export function FooterCta() {
  return (
    <section className="py-24 sm:py-32 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blush/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Let&apos;s Work Together
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-6">
            Ready to Make Your Next Event{" "}
            <span className="text-gold">Unforgettable</span>?
          </h2>
          <p className="text-ivory/60 text-lg max-w-2xl mx-auto mb-10">
            Whether it&apos;s a corporate conference, an intimate panel, or a keynote
            that moves hearts — let&apos;s create something extraordinary together.
          </p>
          <CtaButton href="/book" variant="gold" size="xl">
            Book Trisha Now
          </CtaButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
