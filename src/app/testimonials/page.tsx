import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { CtaButton } from "@/components/shared/cta-button";
import { testimonials } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from corporate clients, event organizers, and partners about their experience working with Trisha as their emcee, host, moderator, and speaker.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Testimonials
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6">
              What People{" "}
              <span className="text-gold">Say</span>
            </h1>
            <p className="text-ivory/70 text-lg leading-relaxed">
              Don&apos;t just take our word for it. Hear from the organizations and
              individuals who&apos;ve experienced Trisha&apos;s impact firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} delay={i * 0.05}>
                <TestimonialCard
                  testimonial={testimonial}
                  className="break-inside-avoid"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ivory mb-6">
              Join the List of Satisfied Clients
            </h2>
            <p className="text-ivory/60 text-lg mb-8">
              Ready to experience the Trisha difference at your next event?
            </p>
            <CtaButton href="/book" variant="gold" size="lg">
              Book Trisha
            </CtaButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
