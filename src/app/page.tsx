import { Hero } from "@/components/sections/hero";
import { CredibilityBar } from "@/components/sections/credibility-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedTestimonial } from "@/components/sections/featured-testimonial";
import { MeetTrisha } from "@/components/sections/meet-trisha";
import { LiveEventHighlight } from "@/components/sections/live-event-highlight";
import { PodcastPreview } from "@/components/sections/podcast-preview";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { FooterCta } from "@/components/sections/footer-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <ServicesGrid />
      <FeaturedTestimonial />
      <MeetTrisha />
      <LiveEventHighlight />
      <PodcastPreview />
      <NewsletterSignup />
      <FooterCta />
    </>
  );
}
