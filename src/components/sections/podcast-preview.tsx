"use client";

import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { podcasts } from "@/lib/constants";

export function PodcastPreview() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Podcasts"
            title="Listen & Be Inspired"
            subtitle="Tune into conversations that challenge perspectives, celebrate leadership, and empower communities."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcasts.map((podcast, i) => (
            <ScrollReveal key={podcast.title} delay={i * 0.15}>
              <div className="group bg-ivory rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-500">
                {/* Icon and title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                    <Headphones className="h-7 w-7 text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy">
                    {podcast.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {podcast.description}
                </p>

                {/* Platform links */}
                <div className="flex flex-wrap gap-3 mb-6">
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
                      className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide uppercase bg-navy/5 text-navy rounded-full hover:bg-gold hover:text-navy transition-all duration-300"
                    >
                      {platform.label}
                    </a>
                  ))}
                </div>

                <Link
                  href="/podcasts"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all duration-300"
                >
                  View All Episodes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
