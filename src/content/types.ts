export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  siteUrl?: string;
}

export interface Logo {
  prefix: string;
  name: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  label: string;
  url: string;
  icon: string;
}

export interface Branding {
  logo: Logo;
  socialLinks: SocialLink[];
}

export interface NavItem {
  href: string;
  label: string;
}

export interface HomeHero {
  title: string;
  subtitle: string;
  intro: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface ExperienceHighlight {
  years: string;
  description: string;
}

export type ContactIconName =
  | "mail"
  | "linkedin"
  | "github"
  | "phone"
  | "mapPin"
  | "download";

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: ContactIconName;
}

export interface Availability {
  status: string;
  description: string;
}

export interface Location {
  title: string;
  description: string;
}

export interface ContactPage {
  title: string;
  subtitle: string;
  intro: string;
  availability: Availability;
  location: Location;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface StorySection {
  id: string;
  title: string;
  content: string;
  highlight?: boolean;
}

export interface Vision {
  title: string;
  intro: string;
  values: string[];
}

export interface OutsideCode {
  title: string;
  interests: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string[];
  technologies: string[];
  hasDetail?: boolean;
}

export interface Formation {
  id: string;
  title: string;
  school: string;
  period: string;
  description?: string;
}

export interface StackCategory {
  category: string;
  items: string[];
}

export interface TeamBreakdown {
  role: string;
  count: number;
}

export interface Team {
  total: number;
  breakdown: TeamBreakdown[];
}

export interface ExperienceDetail {
  id: string;
  role: string;
  company: string;
  companyDescription: string;
  location: string;
  type: string;
  period: string;
  context: string[];
  roleDescription: string;
  collaborations?: string[];
  responsibilities: string[];
  contributions: string[];
  quality?: string[];
  challenges: string[];
  stack: StackCategory[];
  team: Team;
  learnings: string[];
}
