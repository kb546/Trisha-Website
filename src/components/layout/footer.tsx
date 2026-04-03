import Link from "next/link";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import { siteConfig, navLinks, services } from "@/lib/constants";

const socialLinks = [
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "X / Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-ivory/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-heading text-2xl font-bold text-ivory tracking-wide">
                TRISHA
              </span>
            </Link>
            <p className="mt-4 text-sm text-ivory/60 leading-relaxed max-w-xs">
              Corporate Emcee, Host, Moderator, Podcaster & Motivational Speaker.
              Elevating events with elegance, warmth, and impact.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Trisha", href: "/about" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Podcasts", href: "/podcasts" },
                { label: "Press & Media", href: "/press" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-ivory uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ivory/60 hover:text-gold transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link
                  href="/book"
                  className="inline-flex items-center px-5 py-2.5 mt-2 bg-gold text-navy font-semibold text-sm rounded-full tracking-wide hover:bg-gold-light transition-all duration-300"
                >
                  Book Trisha
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory/40">
            &copy; {new Date().getFullYear()} Trisha. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-ivory/40 hover:text-ivory/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-ivory/40 hover:text-ivory/60 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
