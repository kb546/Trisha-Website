import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-ivory">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-muted-foreground leading-relaxed">
            Your privacy is important to us. This Privacy Policy outlines how we collect,
            use, and protect your personal information when you use this website.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy mt-12 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            We collect information you voluntarily provide through our booking inquiry form
            and newsletter signup, including your name, email address, organization, and
            event details.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy mt-12 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your information is used solely to respond to booking inquiries, send newsletter
            updates you&apos;ve subscribed to, and improve our services. We do not sell or share
            your personal information with third parties.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy mt-12 mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this privacy policy, please contact us at
            bookings@trishahost.com.
          </p>
        </div>
      </section>
    </>
  );
}
