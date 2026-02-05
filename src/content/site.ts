import type { Branding, SiteMetadata, SocialLink } from "./types";

export const siteMetadata: SiteMetadata = {
  title: "Frédéric Denis - Senior Frontend Developer React",
  description:
    "Senior Frontend Developer avec plus de 8 ans d'expérience. Spécialisé en React, TypeScript, architecture frontend et qualité produit.",
  author: "Frédéric Denis",
  siteUrl: "https://fdenis.dev",
};

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-denis-5b578413a",
    icon: "linkedin",
  },
];

export const branding: Branding = {
  logo: {
    prefix: "f",
    name: "denis",
  },
  socialLinks,
};
