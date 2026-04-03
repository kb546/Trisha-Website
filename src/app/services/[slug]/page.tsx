import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Mic, Users, Sparkles, Podcast, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CtaButton } from "@/components/shared/cta-button";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { services, testimonials } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic, Users, Sparkles, Podcast,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: "Service Not Found" };
    return {
      title: service.title,
      description: service.tagline,
    };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon] || Mic;
  const relatedTestimonial = testimonials.find((t) => t.service === service.slug) || testimonials[1];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
              <Icon className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-ivory/70 text-xl leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal>
              <div className="space-y-6">
                {service.description.map((paragraph, i) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy mb-6">
                  Perfect For
                </h3>
                <ul className="space-y-4">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 sm:py-32 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TestimonialCard testimonial={relatedTestimonial} variant="featured" />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
              {service.ctaText}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let&apos;s discuss how Trisha can bring her expertise to your next event.
            </p>
            <CtaButton href="/book" variant="gold" size="lg">
              Get in Touch
            </CtaButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
