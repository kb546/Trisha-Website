"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CtaButton } from "@/components/shared/cta-button";

export function LiveEventHighlight() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Milestone Event
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ivory leading-tight mb-6">
                The 360 Perspective{" "}
                <span className="text-gold">Live</span>
              </h2>
              <p className="text-ivory/70 text-lg leading-relaxed mb-4">
                A transformative gathering that brought together more than 700 attendees
                in a powerful, purpose-driven experience. This milestone event showcased
                Trisha&apos;s vision, leadership, and ability to create spaces where
                meaningful connections flourish.
              </p>
              <p className="text-ivory/50 text-base leading-relaxed mb-8">
                From curating the lineup to commanding the stage, Trisha demonstrated
                why she is one of East Africa&apos;s most impactful event creators.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CtaButton href="/about" variant="gold" size="lg">
                  Learn More
                </CtaButton>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats / Visual */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="font-heading text-5xl font-bold text-gold mb-2">700+</div>
                <p className="text-ivory/60 text-sm">Attendees</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="font-heading text-5xl font-bold text-gold mb-2">1</div>
                <p className="text-ivory/60 text-sm">Unforgettable Day</p>
              </div>
              <div className="col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                <div className="font-heading text-3xl font-bold text-ivory mb-2">
                  &ldquo;A Transformative Experience&rdquo;
                </div>
                <p className="text-ivory/50 text-sm">
                  - Attendee feedback from 360 Perspective Live
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
