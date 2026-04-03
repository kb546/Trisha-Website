import Link from "next/link";
import { ArrowRight, Mic, Users, Sparkles, Podcast } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mic,
  Users,
  Sparkles,
  Podcast,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Mic;

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group block bg-white rounded-2xl p-8 border border-border/50 shadow-sm",
        "hover:shadow-lg hover:shadow-gold/5 hover:-translate-y-1",
        "transition-all duration-500 ease-out",
        className
      )}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 text-gold mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
        {service.shortTitle}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        {service.tagline}
      </p>

      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold group-hover:gap-3 transition-all duration-300">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
