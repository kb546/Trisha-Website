import type { Metadata } from "next";
import { BookingForm } from "@/components/forms/booking-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Trisha",
  description:
    "Book Trisha for your next corporate event, conference, gala, or speaking engagement. Fill out the inquiry form and our team will respond within 48 hours.",
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              Book Trisha
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-ivory leading-tight mb-6">
              Let&apos;s Create Something{" "}
              <span className="text-gold">Extraordinary</span>
            </h1>
            <p className="text-ivory/70 text-lg leading-relaxed">
              Tell us about your event and we&apos;ll get back to you within 48 hours
              to discuss how Trisha can make it unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <BookingForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy mb-6">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm mb-1">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-muted-foreground text-sm hover:text-gold transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm mb-1">WhatsApp</p>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-gold transition-colors"
                      >
                        Chat with us
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm mb-1">Based in</p>
                      <p className="text-muted-foreground text-sm">
                        Nairobi, Kenya — Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy/5 rounded-2xl p-8">
                <h3 className="font-heading text-lg font-bold text-navy mb-3">
                  What to Expect
                </h3>
                <ol className="space-y-3">
                  {[
                    "Submit your inquiry below",
                    "Receive a response within 48 hours",
                    "Discuss event details and logistics",
                    "Confirm booking and prepare for an amazing event",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
