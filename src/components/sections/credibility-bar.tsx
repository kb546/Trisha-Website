import { cn } from "@/lib/utils";

const brands = [
  "Citizen TV Kenya",
  "Safaricom",
  "KCB Group",
  "East Africa Business Summit",
  "ICC Nairobi",
  "Kenya Red Cross",
  "Women in Business Network",
  "UN Women",
];

export function CredibilityBar() {
  return (
    <section className="py-8 bg-white border-y border-border/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Trusted by Leading Organizations
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="mx-8 sm:mx-12 flex-shrink-0 flex items-center"
            >
              <span className="text-lg sm:text-xl font-heading font-semibold text-navy/20 hover:text-navy/50 transition-colors duration-500 select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
