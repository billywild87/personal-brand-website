export const aboutHero = {
  title: "About",
  subtitle: "Parcours & vision",
};

export const highlights = [
  { value: "8+", label: "ans d'expérience" },
  { value: "20K", label: "utilisateurs (Mes Calanques)" },
  { value: "6", label: "entreprises" },
];

export interface StorySection {
  id: string;
  title: string;
  content: string;
  highlight?: boolean;
}

export const storySections: StorySection[] = [
  {
    id: "intro",
    title: "",
    content: `Je conçois et je fais évoluer des applications web complexes en React et TypeScript, avec une attention particulière portée à l'architecture, à la qualité logicielle et au produit.

Après plus de 8 ans d'expérience, je me positionne aujourd'hui comme développeur frontend senior, spécialisé dans les environnements applicatifs exigeants : performance, maintenabilité, PWA, tests end-to-end et industrialisation des workflows.`,
  },
  {
    id: "origins",
    title: "Origines",
    content: `J'ai grandi à Lille. Avant d'être développeur, j'ai commencé par le webdesign et l'intégration.

HTML, CSS, Photoshop, jQuery : mes premiers projets étaient très orientés visuel. Mais très vite, ce qui m'a attiré n'était pas seulement l'interface, mais ce qui la faisait fonctionner : les données, le rendu, l'architecture, la cohérence d'un système dans le temps.

Je me suis formé au CNAM comme analyste programmeur. Une formation exigeante, centrée sur la culture informatique, l'algorithmique et l'optimisation. On nous apprenait à comprendre avant d'implémenter. Cette rigueur est restée au cœur de ma manière de travailler.

Ensuite, j'ai appris surtout par la pratique : projets personnels, documentation, expérimentation — jusqu'à découvrir React et Node.js, qui sont devenus mes outils principaux.`,
  },
  {
    id: "first-steps",
    title: "Les premières armes",
    highlight: true,
    content: `Mon premier projet structurant est un stage à la Mairie de Lille : un CMS complet en React, Express et MongoDB. Projet ambitieux pour un junior, imparfait, mais déterminant. J'y ai appris une chose essentielle : pour maîtriser un framework, il faut en comprendre les fondations.

Puis chez Setavoo en alternance, j'ai vécu une expérience fondatrice. J'ai développé quasiment seul l'application mobile "Mes Calanques", publiée sur iOS et Android, qui a atteint 20 000 utilisateurs. J'y ai conçu un moteur de rendu dynamique basé sur des structures JSON, des parcours cartographiques avancés avec Mapbox et une UI fortement animée.

C'est là que Redux est devenu central : flux de données, reducers, gestion d'état à grande échelle. Cette autonomie précoce m'a appris à structurer, anticiper l'évolution et livrer des produits fiables.

En CDI chez Setavoo ensuite, j'ai développé une plateforme d'échange citoyen entre mairies et habitants. Rôle transverse, du métier au développement. J'y ai consolidé le full-stack (React, Node.js, PostgreSQL) et compris profondément le lien entre technique et usage produit.`,
  },
  {
    id: "maturity",
    title: "La maturité",
    highlight: true,
    content: `En rejoignant Agence 16 à Nantes, j'ai changé d'échelle. Projets multi-clients, code legacy, contraintes réelles de production. Première confrontation sérieuse à la maintenance et à la modernisation progressive.

Sur une application déployée pour de nombreux clients, la configuration demandait des opérations manuelles lourdes. J'ai conçu et développé un système de theming automatisé permettant de configurer une application en quelques minutes au lieu d'une journée. J'ai également créé des plugins Vite, des packages Rollup et participé à la mise en place d'un mono-repo.

Chez Ocode ensuite, j'ai découvert un environnement très structuré : équipes frontend importantes, QA dédiée, pipelines automatisés. J'y ai approfondi les patterns React (composition, hooks custom, optimisation des re-renders) et conçu un système de tests Cypress parallélisés connecté à une base de données. J'ai commencé à utiliser Node.js comme véritable outil d'ingénierie au service de la QA et du delivery.

De retour chez Agence 16, j'ai mené le projet le plus structurant de ma carrière : concevoir un écosystème multi-applications multi-clients entièrement automatisé. Portail commun, applications indépendantes à structure partagée, design system unifié, service worker global, outils de build et de déploiement automatisés en Node.js, interface d'administration React connectée à un backend.

L'objectif était simple : ajouter un client ne devait plus dépendre d'un développeur. Ce projet concentre aujourd'hui l'essentiel de mon savoir-faire : architecture front, industrialisation, automatisation, et maîtrise de Redux à grande échelle.`,
  },
  {
    id: "today",
    title: "Aujourd'hui",
    content: `Chez Fizen, je travaille sur une application métier complexe en production, utilisée quotidiennement, dans un environnement très industrialisé.

Je participe aux choix d'architecture front, aux décisions techniques et à la modernisation progressive d'une base legacy. J'ai contribué à renforcer la qualité via la mise en place et l'amélioration de tests end-to-end Playwright. Nous travaillons en Kanban, avec revues de code et une forte culture de bonnes pratiques.

Ce contexte m'apprend à livrer dans la durée : améliorer progressivement, sécuriser les parcours critiques, et collaborer étroitement avec le produit dans un cadre exigeant.`,
  },
];

export const vision = {
  title: "Ce que j'apporte",
  intro: `Développeur frontend senior React, orienté architecture, qualité et maintenabilité. Habitué aux environnements applicatifs complexes et industrialisés, sensible au produit et à l'expérience utilisateur. Passionné par l'automatisation, l'outillage et la developer experience.`,
  values: [
    "Clarifier les systèmes complexes",
    "Stabiliser les codebases legacy",
    "Industrialiser les workflows",
    "Rendre les équipes plus efficaces",
    "Construire des produits qui durent",
  ],
};

export const outsideCode = {
  title: "En dehors du code",
  interests: ["Musique", "Art", "Bande dessinée", "UI/UX", "Vélo"],
};
