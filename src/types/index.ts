export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string[];
  heroImage: string;
  icon: string;
  deliverables: string[];
  ctaText: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organization: string;
  image?: string;
  service?: string;
}

export interface PodcastShow {
  title: string;
  description: string;
  image: string;
  spotifyUrl: string;
  appleUrl: string;
  youtubeUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
