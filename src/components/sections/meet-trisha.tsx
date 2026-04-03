"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CtaButton } from "@/components/shared/cta-button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { stats } from "@/lib/constants";

export function MeetTrisha() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-navy/5 overflow-hidden relative">
                <Image
                  src="/images/photos/portrait-yellow-top.jpg"
                  alt="Trisha — portrait with warm smile"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Meet Trisha
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                Elegance, Warmth &{" "}
                <span className="text-gold">Impact</span> on Every Stage
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Trisha is a leading Corporate EMCEE, Host, Moderator, Podcaster, and
                  Motivational Speaker known for her polished presence, authentic
                  communication, and ability to create powerful connections with diverse
                  audiences.
                </p>
                <p>
                  A former TV Presenter on Citizen TV Kenya, she brings broadcast-level
                  confidence and warmth to every stage she commands. She currently hosts
                  two audiovisual podcasts — The 360 Perspective and Your Health Kenya —
                  leading conversations that inspire, inform, and empower.
                </p>
              </div>
              <CtaButton href="/about" variant="navy" size="lg" showArrow>
                Read Full Story
              </CtaButton>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border/50">
                {stats.map((stat) => (
                  <AnimatedCounter
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
