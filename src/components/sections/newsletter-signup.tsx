"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to newsletter API
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-blush/20 via-ivory to-gold/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            Stay Connected
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy leading-tight mb-4">
            Join the Community
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Get updates on upcoming events, new podcast episodes, and exclusive insights
            delivered to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-white border-border/50 rounded-full px-6 text-charcoal placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-sm text-gold font-medium">
              Welcome aboard! Check your inbox for a confirmation.
            </p>
          )}

          <p className="mt-6 text-xs text-muted-foreground">
            No spam, ever. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
