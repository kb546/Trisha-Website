"use client";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/lib/constants";

export function FeaturedTestimonial() {
  const featured = testimonials[0];

  return (
    <section className="py-24 sm:py-32 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <TestimonialCard testimonial={featured} variant="featured" />
        </ScrollReveal>
      </div>
    </section>
  );
}
