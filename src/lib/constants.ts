import type { NavLink, Service, Testimonial, PodcastShow } from "@/types";

export const siteConfig = {
  name: "Trisha",
  title: "Trisha - Corporate Emcee, Host, Moderator & Podcaster",
  description:
    "Trisha is a leading Corporate EMCEE, Host, Moderator, Podcaster, and Motivational Speaker. Elevating events with elegance, warmth, and impact. Book Trisha for your next event.",
  url: "https://trishahost.com",
  email: "bookings@trishahost.com",
  whatsapp: "254700000000",
  social: {
    instagram: "https://instagram.com/trisha",
    linkedin: "https://linkedin.com/in/trisha",
    youtube: "https://youtube.com/@trisha",
    twitter: "https://twitter.com/trisha",
    tiktok: "https://tiktok.com/@trisha",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Trisha", href: "/about" },
      { label: "Press & Media", href: "/press" },
    ],
  },
  {
    label: "Services",
    href: "/services/corporate-emceeing",
    children: [
      { label: "Corporate Emceeing & Hosting", href: "/services/corporate-emceeing" },
      { label: "Moderating", href: "/services/moderating" },
      { label: "Motivational Speaking", href: "/services/motivational-speaking" },
      { label: "Podcasting", href: "/services/podcasting" },
    ],
  },
  { label: "Podcasts", href: "/podcasts" },
  { label: "Testimonials", href: "/testimonials" },
];

export const services: Service[] = [
  {
    slug: "corporate-emceeing",
    title: "Corporate Emceeing & Hosting",
    shortTitle: "Emceeing & Hosting",
    tagline: "Commanding stages at corporate events with elegance and energy",
    description: [
      "Trisha brings broadcast-level polish and authentic warmth to every event she hosts. From high-profile conferences and award ceremonies to intimate corporate dinners and product launches, she creates seamless, engaging experiences that keep audiences captivated.",
      "With years of experience on national television and major stages across East Africa, Trisha understands the nuances of pacing, audience energy, and brand messaging that make an event truly memorable.",
    ],
    heroImage: "/images/photos/stage-red-outfit.jpg",
    icon: "Mic",
    deliverables: [
      "Conferences & Summits",
      "Award Ceremonies & Galas",
      "Product Launches",
      "Corporate Dinners",
      "Charity Events & Fundraisers",
    ],
    ctaText: "Book Trisha for Your Event",
  },
  {
    slug: "moderating",
    title: "Moderating",
    shortTitle: "Moderating",
    tagline: "Guiding powerful conversations with poise and precision",
    description: [
      "As a skilled moderator, Trisha guides panels, fireside chats, and executive roundtables with intelligence, preparation, and grace. She draws out meaningful insights from speakers while keeping conversations dynamic and on track.",
      "Her ability to connect with diverse audiences and adapt to complex topics in real time makes her the ideal choice for high-stakes discussions at conferences, summits, and corporate retreats.",
    ],
    heroImage: "/images/photos/stage-redefining-success.jpg",
    icon: "Users",
    deliverables: [
      "Panel Discussions",
      "Fireside Chats",
      "Executive Roundtables",
      "Summit Moderation",
      "Town Hall Facilitation",
    ],
    ctaText: "Book Trisha as Moderator",
  },
  {
    slug: "motivational-speaking",
    title: "Motivational Speaking",
    shortTitle: "Speaking",
    tagline: "Inspiring audiences with stories of purpose and resilience",
    description: [
      "Trisha delivers powerful keynotes and motivational talks that move audiences to action. Drawing from her journey in media, entrepreneurship, and faith, she speaks on topics including purpose, resilience, communication, and women in leadership.",
      "Her authentic storytelling style creates deep emotional connections, making her talks not just heard but felt and remembered long after the event ends.",
    ],
    heroImage: "/images/photos/stage-orange-podium.jpg",
    icon: "Sparkles",
    deliverables: [
      "Keynote Addresses",
      "Breakout Sessions",
      "Women's Conferences",
      "Leadership Summits",
      "Inspirational Talks",
    ],
    ctaText: "Book Trisha to Speak",
  },
  {
    slug: "podcasting",
    title: "Podcasting",
    shortTitle: "Podcasting",
    tagline: "Hosting conversations that inspire, inform, and empower",
    description: [
      "Trisha hosts two successful audiovisual podcasts, The 360 Perspective and Your Health Kenya, where she leads authentic, thought-provoking conversations with leaders, changemakers, and visionaries.",
      "Looking for a guest appearance, collaboration, or sponsorship opportunity? Trisha's podcast platforms offer brands and thought leaders a powerful way to connect with engaged audiences across East Africa and beyond.",
    ],
    heroImage: "/images/photos/podcast-wide-branded.jpg",
    icon: "Podcast",
    deliverables: [
      "Guest Appearances",
      "Podcast Collaborations",
      "Sponsorship Opportunities",
      "Cross-Promotion",
      "Live Podcast Events",
    ],
    ctaText: "Collaborate with Trisha",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Trisha brought an incredible energy to our annual conference. Her ability to connect with the audience and keep the program flowing seamlessly was exceptional. We've already booked her for next year.",
    name: "Sarah Kimani",
    title: "Events Director",
    organization: "Safaricom PLC",
  },
  {
    quote:
      "Working with Trisha was a game-changer for our summit. She moderated a complex panel with grace and intelligence, drawing out insights that the audience found truly valuable.",
    name: "David Ochieng",
    title: "Conference Chair",
    organization: "East Africa Business Summit",
  },
  {
    quote:
      "Trisha's keynote was the highlight of our women's leadership event. Her authenticity and warmth moved the entire room. She doesn't just speak, she connects.",
    name: "Grace Mwangi",
    title: "Program Director",
    organization: "Women in Business Network",
  },
  {
    quote:
      "From the moment Trisha stepped on stage, she commanded attention. Her professionalism and charisma made our product launch an unforgettable experience for all attendees.",
    name: "Michael Njoroge",
    title: "Marketing VP",
    organization: "KCB Group",
  },
  {
    quote:
      "Trisha's podcast interview style is remarkable. She creates such a comfortable space that guests open up in ways they never expected. The episode we did together was our most downloaded.",
    name: "Amina Hassan",
    title: "CEO",
    organization: "Nairobi Health Initiative",
  },
  {
    quote:
      "We needed an emcee who could handle a high-profile gala with both elegance and energy. Trisha delivered beyond our expectations. Our guests are still talking about it.",
    name: "Peter Kiptoo",
    title: "Event Coordinator",
    organization: "Kenya Red Cross",
  },
];

export const podcasts: PodcastShow[] = [
  {
    title: "The 360 Perspective",
    description:
      "A thought-provoking audiovisual podcast where Trisha leads conversations with leaders, visionaries, and changemakers on topics that matter. From business and culture to purpose and personal growth, every episode offers a fresh perspective.",
    image: "/images/photos/podcast-wide-branded.jpg",
    spotifyUrl: "https://open.spotify.com/show/the360perspective",
    appleUrl: "https://podcasts.apple.com/podcast/the-360-perspective",
    youtubeUrl: "https://youtube.com/@the360perspective",
  },
  {
    title: "Your Health Kenya",
    description:
      "An informative and empowering podcast dedicated to health awareness in Kenya and East Africa. Trisha brings together medical professionals, wellness experts, and real stories to help audiences make informed health decisions.",
    image: "/images/photos/podcast-brick-guest.jpg",
    spotifyUrl: "https://open.spotify.com/show/yourhealthkenya",
    appleUrl: "https://podcasts.apple.com/podcast/your-health-kenya",
    youtubeUrl: "https://youtube.com/@yourhealthkenya",
  },
];

export const stats = [
  { value: 700, suffix: "+", label: "Live Event Attendees" },
  { value: 100, suffix: "+", label: "Events Hosted" },
  { value: 2, suffix: "", label: "Podcast Shows" },
  { value: 10, suffix: "+", label: "Years in Media" },
];

export const eventTypes = [
  "Corporate Event",
  "Conference",
  "Gala & Award Ceremony",
  "Panel Discussion",
  "Speaking Engagement",
  "Product Launch",
  "Podcast Collaboration",
  "Other",
];

export const audienceSizes = [
  "Under 50",
  "50 – 100",
  "100 – 300",
  "300 – 500",
  "500 – 1,000",
  "1,000+",
];

export const howHeardOptions = [
  "Social Media",
  "Google Search",
  "Referral",
  "Podcast",
  "Attended an Event",
  "Media Feature",
  "Other",
];
