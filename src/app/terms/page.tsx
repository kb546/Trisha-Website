import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-ivory">
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-lg">
          <p className="text-muted-foreground leading-relaxed">
            By using this website, you agree to the following terms and conditions.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy mt-12 mb-4">Use of Website</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website is provided for informational purposes and to facilitate booking
            inquiries. All content, including text, images, and design, is owned by Trisha
            and may not be reproduced without permission.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy mt-12 mb-4">Booking Inquiries</h2>
          <p className="text-muted-foreground leading-relaxed">
            Submitting a booking inquiry through this website does not constitute a confirmed
            booking. All bookings are subject to availability and confirmation by Trisha&apos;s
            team.
          </p>

          <h2 className="font-heading text-2xl font-bold text-navy mt-12 mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about these terms, please contact us at bookings@trishahost.com.
          </p>
        </div>
      </section>
    </>
  );
}
