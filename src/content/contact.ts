import type { ContactLink, ContactPage } from "./types";

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "1214fdenis@gmail.com",
    href: "mailto:1214fdenis@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "Frédéric Denis",
    href: "https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-denis-5b578413a",
    icon: "linkedin",
  },
  {
    label: "CV",
    value: "Télécharger mon CV",
    href: "/Frederic_Denis_CV.pdf",
    icon: "download",
  },
];

export const techStack = [
  "React",
  "TypeScript",
  "Redux Toolkit",
  "Vite",
] as const;

export const contactPage: ContactPage = {
  title: "Contact",
  subtitle: "Disponible pour de nouvelles opportunités à Paris",
  intro:
    "Intéressé par une collaboration ? Je suis actuellement disponible pour des postes en CDI sur Paris.",
  availability: {
    status: "Disponible",
    description: "Ouvert aux opportunités CDI. Réponse sous 24-48h.",
  },
  location: {
    title: "Paris, France",
    description: "Disponible pour des missions sur site ou en télétravail.",
  },
};
