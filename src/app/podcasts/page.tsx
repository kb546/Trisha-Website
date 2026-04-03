import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaButton } from "@/components/shared/cta-button";
import { podcasts } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Podcasts",
  description:
    "Listen to The 360 Perspective and Your Health Kenya, two audiovisual podcasts hosted by Trisha, featuring conversations that inspire, inform, and empower.",
};

export default function PodcastsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Podcasts
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6">
              Conversations That{" "}
              <span className="text-gold">Matter</span>
            </h1>
            <p className="text-ivory/70 text-lg leading-relaxed">
              Tune into thought-provoking dialogues with leaders, changemakers, and visionaries
              across two unique podcast platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast Sections */}
      {podcasts.map((podcast, i) => (
        <section
          key={podcast.title}
          className={`py-24 sm:py-32 ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image placeholder */}
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-video rounded-2xl bg-navy/5 overflow-hidden relative">
                  <Image
                    src={podcast.image}
                    alt={`${podcast.title} podcast studio`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6">
                    {podcast.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {podcast.description}
                  </p>

                  {/* Platform links */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      { label: "Spotify", href: podcast.spotifyUrl },
                      { label: "Apple Podcasts", href: podcast.appleUrl },
                      { label: "YouTube", href: podcast.youtubeUrl },
                    ].map((platform) => (
                      <a
                        key={platform.label}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-navy text-ivory rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
                      >
                        {platform.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Collaboration CTA */}
      <section className="py-24 bg-navy text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ivory mb-6">
              Want to Be a Guest?
            </h2>
            <p className="text-ivory/60 text-lg mb-8">
              We&apos;re always looking for inspiring guests and collaboration opportunities.
              Reach out to discuss how we can create something meaningful together.
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
