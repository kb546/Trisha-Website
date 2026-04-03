import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaButton } from "@/components/shared/cta-button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { stats } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Trisha",
  description:
    "Meet Trisha - former Citizen TV Kenya presenter, podcaster, and one of East Africa's most sought-after event hosts and motivational speakers.",
};

const milestones = [
  { year: "Early Career", title: "Citizen TV Kenya", description: "Began her media career as a TV Presenter on one of Kenya's most-watched networks, developing broadcast depth and on-screen credibility." },
  { year: "Ministry", title: "ICC Nairobi Church", description: "Served as a host at ICC Nairobi Church, communicating with sincerity, poise, and impact before large congregations." },
  { year: "Podcasting", title: "The 360 Perspective", description: "Launched The 360 Perspective podcast, creating a platform for authentic, thought-provoking conversations with leaders and changemakers." },
  { year: "Health", title: "Your Health Kenya", description: "Launched Your Health Kenya podcast, dedicated to health awareness and empowerment across East Africa." },
  { year: "Milestone", title: "360 Perspective Live", description: "Created and hosted the 360 Perspective Live event, bringing together more than 700 attendees in a transformative gathering." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              About
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6">
              The Story Behind{" "}
              <span className="text-gold">the Voice</span>
            </h1>
            <p className="text-ivory/70 text-lg leading-relaxed">
              A journey shaped by purpose, media, and the relentless pursuit of meaningful connection.
            </p>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Photo placeholder */}
            <ScrollReveal className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="aspect-[3/4] rounded-2xl bg-navy/5 overflow-hidden relative">
                  <Image
                    src="/images/photos/headshot-dark-bg.jpg"
                    alt="Trisha - professional studio portrait"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Bio text */}
            <ScrollReveal className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-charcoal leading-relaxed">
                  Trisha is a dynamic and accomplished Corporate EMCEE, Host, Moderator, Podcaster, and
                  Motivational Speaker with a passion for meaningful communication and impactful audience
                  engagement. Known for her elegance, warmth, confidence, and professionalism, she has built
                  a distinguished reputation as a communicator who commands stages, guides important
                  conversations, and creates memorable experiences across corporate, media, and inspirational
                  platforms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  She is the host of two audiovisual podcasts, The 360 Perspective and Your Health Kenya,
                  where she leads authentic, thought-provoking conversations that inspire, inform, and empower
                  her growing audience. Her podcasting work reflects a deep commitment to purposeful dialogue
                  and a natural ability to connect with people in a way that feels both real and engaging.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trisha&apos;s career in media was shaped by her role as a TV Presenter on Citizen TV Kenya,
                  one of the country&apos;s most-watched networks. This experience gave her broadcast depth,
                  on-screen credibility, and the polished presentation skills that now define her work on
                  stage and behind the microphone. She also served as a host at ICC Nairobi Church, where
                  she became known for communicating with sincerity, poise, and impact before large
                  congregations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  One of her most notable achievements is the creation and hosting of the 360 Perspective
                  Live event, a powerful gathering that brought together more than 700 attendees. This
                  milestone reflects not just her influence as a public figure, but her leadership and vision
                  for creating transformative spaces where people come together around meaningful ideas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether hosting a corporate event, moderating a high-level panel, leading a podcast
                  conversation, or delivering a motivational keynote, Trisha consistently brings excellence,
                  intelligence, grace, and impact to every engagement.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
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
      </section>

      {/* Milestones */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Journey"
              title="Key Milestones"
              subtitle="A career defined by growth, vision, and impact."
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, i) => (
              <ScrollReveal key={milestone.title} delay={i * 0.1}>
                <div className="flex gap-6 mb-12 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                    {i < milestones.length - 1 && (
                      <div className="w-px h-full bg-gold/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-1">
                      {milestone.year}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-ivory/60 text-lg mb-8">
              Bring Trisha&apos;s energy, elegance, and expertise to your next event.
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
