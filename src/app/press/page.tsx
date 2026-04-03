import type { Metadata } from "next";
import { Download, Mail, Camera } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Press & Media",
  description:
    "Download Trisha's media kit, high-resolution headshots, bios, and press materials for journalists and event organizers.",
};

const speakingTopics = [
  "The Power of Authentic Communication",
  "Women in Media & Leadership",
  "Purpose-Driven Living & Resilience",
  "Building Community Through Conversation",
  "The Future of Podcasting in Africa",
  "From TV to Stage: Lessons in Versatility",
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Press & Media
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6">
              Media <span className="text-gold">Kit</span>
            </h1>
            <p className="text-ivory/70 text-lg leading-relaxed">
              Everything journalists and event organizers need — headshots, bios,
              speaking topics, and press contact information.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Headshots */}
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Camera className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Headshots
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  High-resolution professional headshots in multiple styles — corporate,
                  editorial, and on-stage. Available for press use.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Contact for high-resolution downloads
                </p>
              </div>
            </ScrollReveal>

            {/* Bios */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Download className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Bios
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Short and long biographical copy optimized for event programs,
                  speaker introductions, and press publications.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Contact for downloadable bio pack
                </p>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Mail className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy mb-3">
                  Press Contact
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  For media inquiries, interview requests, or press-related questions,
                  reach out directly.
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Expertise"
              title="Speaking Topics"
              subtitle="Trisha speaks on a range of topics at the intersection of media, leadership, and purpose."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {speakingTopics.map((topic, i) => (
              <ScrollReveal key={topic} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-ivory border border-border/50">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-charcoal font-medium text-sm">{topic}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
