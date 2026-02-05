import type { ExperienceHighlight, HomeHero, Skill } from "./types";

export const homeHero: HomeHero = {
  title: "Frédéric Denis",
  subtitle: "Senior Frontend Developer React",
  intro:
    "Développeur frontend senior avec plus de 8 ans d'expérience dans la conception et l'évolution d'applications web complexes en React et TypeScript. Spécialisé dans l'architecture front, la qualité logicielle et les environnements applicatifs exigeants.",
};

export const skills: Skill[] = [
  {
    title: "React & TypeScript",
    description:
      "Expertise avancée de l'écosystème React : hooks, Redux Toolkit, React Query, applications à forte complexité fonctionnelle",
  },
  {
    title: "Qualité & Tests",
    description:
      "Mise en place et amélioration de tests end-to-end avec Playwright et Cypress pour sécuriser les parcours critiques",
  },
  {
    title: "Architecture Front",
    description:
      "Conception de codebases maintenables et scalables : modularité, design patterns, modernisation progressive du legacy",
  },
  {
    title: "Produit & Delivery",
    description:
      "Collaboration étroite avec le produit, focus valeur métier, cadence de delivery soutenue et fiabilité long terme",
  },
  {
    title: "Industrialisation & Tooling",
    description:
      "Automatisation des workflows, outillage Node.js, migrations tooling, optimisation des builds et du time-to-market",
  },
];

export const experienceHighlight: ExperienceHighlight = {
  years: "8+ ans d'expérience",
  description:
    "De la startup à des environnements très industrialisés, j'ai conçu et fait évoluer des applications critiques, multi-clients et à forte longévité. Mon objectif constant : fiabilité, maintenabilité et impact produit mesurable.",
};
