import { CtaButton } from "@/components/shared/cta-button";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24 min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-8xl font-heading font-bold text-gold mb-6">404</p>
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <CtaButton href="/" variant="navy" size="lg">
          Back to Home
        </CtaButton>
      </div>
    </section>
  );
}
