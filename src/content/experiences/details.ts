// Types for detailed experience data
export interface ExperienceDetail {
  id: string;
  role: string;
  company: string;
  companyDescription: string;
  location: string;
  type: string;
  period: string;
  // Context section
  context: string[];
  // Role section
  roleDescription: string;
  collaborations: string[];
  // Responsibilities
  responsibilities: string[];
  // Key contributions
  contributions: string[];
  // Quality & Tests (optional)
  quality?: string[];
  // Technical challenges
  challenges: string[];
  // Stack & Environment
  stack: {
    category: string;
    items: string[];
  }[];
  // Team composition
  team: {
    total: number;
    breakdown: string[];
  };
  // What I learned
  learnings: string[];
}

export const experienceDetails: Record<string, ExperienceDetail> = {
  fizen: {
    id: "fizen",
    role: "Senior React Frontend Developer",
    company: "Fizen",
    companyDescription:
      "Structure technologique du groupe Amarris, éditeur de logiciels métiers (comptabilité, gestion administrative).",
    location: "Nantes",
    type: "CDI",
    period: "05/2025 → Aujourd'hui",

    context: [
      "Maintenance et évolution d'une application React en production, utilisée quotidiennement.",
      "Environnement très industrialisé : process rigoureux, outils et pratiques structurés.",
      "Cadence produit soutenue, avec un fort besoin de fiabilité et de non-régression.",
    ],

    roleDescription:
      "Senior Front-end intégré à une équipe agile, impliqué dans les décisions techniques et l'architecture front.",

    collaborations: [
      "Équipe produit (PM / PO)",
      "QA",
      "Équipe back-end",
      "Lead développeur",
      "Équipe technique (revues de code)",
    ],

    responsibilities: [
      "Conception et intégration de fonctionnalités performantes et maintenables.",
      "Participation active aux choix d'architecture front et aux décisions techniques.",
      "Maintenance, correction de bugs et amélioration continue sur une base existante (legacy).",
      "Travail en équipe agile (Kanban), revues de code, diffusion des bonnes pratiques.",
      "Mise en place, suivi et amélioration des tests end-to-end.",
    ],

    contributions: [
      "Renforcement et industrialisation des tests E2E avec Playwright.",
      "Amélioration progressive de zones legacy sans rupture fonctionnelle.",
      "Contribution à des choix structurants côté front (maintenabilité, performance, robustesse).",
      "Montée en qualité des parcours critiques via une approche orientée non-régression.",
    ],

    quality: [
      "Mise en place et amélioration continue des scénarios Playwright.",
      "Collaboration étroite avec la QA pour sécuriser les livraisons.",
      "Approche orientée stabilité long terme et réduction des régressions.",
    ],

    challenges: [
      "Faire évoluer une base legacy de façon incrémentale.",
      "Garder une cadence de delivery élevée tout en renforçant la qualité.",
      "S'intégrer à un modèle très structuré avec process millimétrés.",
    ],

    stack: [
      { category: "Frontend", items: ["React", "HTML", "CSS"] },
      { category: "Data / Forms", items: ["React Query", "React Hook Form"] },
      { category: "UI", items: ["MUI"] },
      { category: "Testing", items: ["Playwright"] },
      { category: "DevOps", items: ["Docker"] },
      { category: "Delivery & Tools", items: ["Git", "GitLab", "Jira"] },
      {
        category: "Process",
        items: ["Kanban", "Revues de code", "Bonnes pratiques"],
      },
    ],

    team: {
      total: 12,
      breakdown: [
        "Head/Direction Tech",
        "Back-end (6–7)",
        "Front-end (2)",
        "QA (1)",
        "DevOps (1)",
        "Product (PM/PO)",
        "Product Designer (1)",
        "Alternant (1)",
      ],
    },

    learnings: [
      "Renforcement des réflexes qualité dans un environnement très industrialisé.",
      "Pratique régulière des décisions d'architecture front en contexte produit.",
      "Maîtrise de l'amélioration progressive d'un legacy en production.",
      "Meilleure collaboration produit / QA / tech dans un flux Kanban.",
    ],
  },

  agence16_2024: {
    id: "agence16_2024",
    role: "Senior React Frontend Developer",
    company: "Agence 16",
    companyDescription:
      "Agence (pôle applications) : conception et évolution de produits métiers, multi-projets et multi-clients.",
    location: "Nantes",
    type: "CDI",
    period: "09/2024 → 05/2025",

    context: [
      "Développement et maintenance de fonctionnalités visant à améliorer l'expérience utilisateur et les performances applicatives.",
      "Contexte multi-applications dans une PWA : applications intégrées ou déployées indépendamment.",
      "Cadence de livraison soutenue avec besoins d'industrialisation et d'automatisation.",
    ],

    roleDescription:
      "Développeur Front-end senior impliqué dans l'architecture, les migrations tooling et l'automatisation (front + scripts Node).",

    collaborations: [
      "Équipe produit",
      "Équipe technique",
      "Interlocuteurs projet (pilotage / delivery)",
    ],

    responsibilities: [
      "Développement et maintenance de fonctionnalités orientées UX/perf.",
      "Mise en place d'une architecture multi-applications au sein d'une PWA.",
      "Conception d'outils internes (ticketing, scripts de build) pour industrialiser le delivery.",
      "Participation à la rédaction de cahiers des charges avec les équipes produit et techniques.",
      "Migration d'applications et optimisation des temps de build.",
    ],

    contributions: [
      "Conception et développement d'un outil de ticketing interfacé avec Trello (API Trello).",
      "Migration d'applications de Create React App vers Vite avec réduction notable des temps de build.",
      "Développement de scripts Node.js de pré-build pour automatiser les workflows.",
      "Structuration d'un socle multi-app / multi-clients côté front (PWA).",
    ],

    quality: [
      "Structuration et standardisation des pratiques pour sécuriser les évolutions rapides.",
      "Approche orientée robustesse et maintenabilité dans un contexte de delivery soutenu.",
    ],

    challenges: [
      "Maintenir cohérence et scalabilité dans un écosystème multi-app.",
      "Accélérer le time-to-market tout en améliorant l'expérience utilisateur et les performances.",
      "Industrialiser tooling et workflows au fil de l'eau, sans casser l'existant.",
    ],

    stack: [
      { category: "Frontend", items: ["React", "TypeScript", "Vite"] },
      { category: "State", items: ["Redux Toolkit"] },
      { category: "Tooling", items: ["Node.js"] },
      { category: "Integrations", items: ["API Trello"] },
      {
        category: "Platform",
        items: ["PWA", "Architecture multi-applications"],
      },
      {
        category: "Process",
        items: ["Spécifications / cahiers des charges", "Delivery soutenu"],
      },
    ],

    team: {
      total: 6,
      breakdown: [
        "Direction",
        "Produit (PO/PM)",
        "Design",
        "Dev (front/back/fullstack)",
      ],
    },

    learnings: [
      "Industrialisation d'un écosystème multi-app en PWA.",
      "Migrations tooling (CRA → Vite) et optimisation build.",
      "Automatisation via scripts Node.js orientés delivery.",
      "Lien plus fort entre cadrage produit et implémentation technique.",
    ],
  },

  ocode: {
    id: "ocode",
    role: "React Frontend Developer",
    company: "Ocode",
    companyDescription:
      "Équipe structurée avec QA dédiée et pipelines automatisés, orientée qualité et maintenabilité.",
    location: "Nantes",
    type: "CDI",
    period: "09/2023 → 09/2024",

    context: [
      "Premier environnement très structuré : équipes front importantes, QA dédiée, pipelines automatisés.",
      "Développement d'applications React avec un enjeu fort de performance et d'optimisation du rendu.",
      "Approche qualité renforcée grâce à une meilleure couverture de tests E2E.",
    ],

    roleDescription:
      "Développeur Front-end au sein d'une équipe industrialisée, avec focus sur patterns React, performance et tests.",

    collaborations: [
      "Équipe Front-end",
      "QA",
      "Lead développeur",
      "Produit (PO/PM)",
    ],

    responsibilities: [
      "Développement de fonctionnalités sur des applications React existantes.",
      "Approfondissement des patterns React (composition, render props, hooks custom, optimisation re-renders).",
      "Conception et mise en place de tests E2E Cypress (parallélisation, fiabilité).",
      "Création d'outils Node.js pour faciliter le travail de la QA.",
      "Collaboration active au sein d'équipes agiles (Kanban).",
    ],

    contributions: [
      "Conception d'un système de tests Cypress parallélisés connecté à une base de données.",
      "Création d'outils Node.js pour automatiser/accélérer les workflows QA.",
      "Renforcement de la fiabilité applicative via une meilleure couverture E2E.",
      "Optimisations ciblées sur le rendu et les re-renders React.",
    ],

    quality: [
      "Tests E2E Cypress (parallèles) pour accélérer les cycles de validation.",
      "Pipelines automatisés pour limiter la non-régression.",
    ],

    challenges: [
      "Monter en puissance sur un contexte très structuré (process, QA, CI).",
      "Fiabiliser les parcours applicatifs via E2E et automatisation.",
      "Allier performance front et maintenabilité sur des apps complexes.",
    ],

    stack: [
      { category: "Frontend", items: ["React", "React 18", "TypeScript"] },
      { category: "State / Data", items: ["Redux Toolkit", "React Query"] },
      { category: "Testing", items: ["Cypress"] },
      { category: "Tooling", items: ["Node.js"] },
      {
        category: "Process",
        items: ["Kanban", "Pipelines automatisés", "QA dédiée"],
      },
    ],

    team: {
      total: 10,
      breakdown: [
        "Lead développeur",
        "Front-end (4–5)",
        "Back-end",
        "QA dédiée",
        "Produit",
      ],
    },

    learnings: [
      "Patterns React avancés et optimisation des re-renders.",
      "Conception de tests E2E parallélisés et fiables.",
      "Utilisation de Node.js comme outil d'ingénierie pour la QA.",
      "Travail dans un environnement industrialisé (process + pipelines).",
    ],
  },

  agence16_2021: {
    id: "agence16_2021",
    role: "React Frontend Developer",
    company: "Agence 16",
    companyDescription:
      "Pôle applications : projets multi-clients, maintenance/évolutions, modernisation progressive et outillage.",
    location: "Nantes",
    type: "CDI",
    period: "02/2021 → 09/2023",

    context: [
      "Développement et maintenance d'applications web et mobiles sous forme de PWA.",
      "Intervention sur des applications React de versions variées (v15 à v18).",
      "Contexte multi-clients avec besoin d'outillage et d'automatisation pour accélérer la création/configuration des apps.",
    ],

    roleDescription:
      "Développeur Front-end avec forte exposition au legacy, à la maintenance critique et à la modernisation progressive.",

    collaborations: [
      "Produit (PO/PM)",
      "Équipe technique (fullstack/back)",
      "Direction / pilotage",
      "Design (ponctuellement)",
    ],

    responsibilities: [
      "Maintenance et évolution d'applications React multi-clients.",
      "Modernisation progressive (tooling, modularité, patterns) sur une base legacy.",
      "Automatisation de la création/configuration d'applications via scripts Node.js.",
      "Contribution au design system et à la modularisation du code.",
      "Intervention sur différents outils de build (Vite / Rollup) et plateformes (PWA).",
    ],

    contributions: [
      "Création de plugins Vite et de packages Rollup pour améliorer la modularité.",
      "Mise en place d'un mono-repo pour la gestion multi-projets.",
      "Automatisation de la création d'applications via scripts Node.js.",
      "Contribution à un design system et amélioration des pratiques front.",
      "Intervention sur un projet legacy critique (reprise et stabilisation).",
    ],

    challenges: [
      "Faire cohabiter plusieurs versions de React (v15 → v18).",
      "Assurer la stabilité d'un legacy tout en modernisant progressivement.",
      "Réduire le coût d'onboarding/configuration multi-clients.",
      "Structurer un écosystème outillé (build, packages, mono-repo).",
    ],

    stack: [
      { category: "Frontend", items: ["React (v15 → v18)", "TypeScript"] },
      { category: "State / Data", items: ["Redux", "RTK Query"] },
      { category: "Styling", items: ["Sass"] },
      { category: "Platform", items: ["PWA"] },
      {
        category: "Tooling",
        items: ["Node.js", "Vite", "Rollup", "Mono-repo"],
      },
      { category: "Motion", items: ["React Spring"] },
      { category: "Data", items: ["PostgreSQL", "Firebase"] },
    ],

    team: {
      total: 5,
      breakdown: ["Direction / pilotage", "Produit", "Dev (front/fullstack)"],
    },

    learnings: [
      "Méthode de modernisation incrémentale d'un legacy.",
      "Gestion multi-clients et standardisation (design system, patterns).",
      "Création d'outillage (plugins, packages, scripts) pour industrialiser.",
      "Capacité à intervenir sur des codebases hétérogènes (versions React multiples).",
    ],
  },

  setavoo_cdi: {
    id: "setavoo_cdi",
    role: "Full Stack Developer (React, Node.js)",
    company: "Setavoo",
    companyDescription:
      "Développement de solutions web et mobiles, avec forte autonomie et rôle transverse.",
    location: "Lille",
    type: "CDI",
    period: "09/2018 → 02/2021",

    context: [
      "Développement fullstack d'une plateforme d'échange citoyen entre mairies et habitants.",
      "Refonte complète de fronts et backends existants selon les besoins.",
      "Intervention sur l'ensemble du cycle : architecture, UX/UI, développement.",
    ],

    roleDescription:
      "Développeur fullstack avec autonomie forte, au carrefour du métier, du produit et de la technique.",

    collaborations: [
      "Direction",
      "Interlocuteurs métier",
      "Utilisateurs / clients (mairies)",
    ],

    responsibilities: [
      "Développement web et mobile (front + back).",
      "Architecture de l'état applicatif et structuration des flux (Redux).",
      "Conception et structuration de données relationnelles (PostgreSQL).",
      "Livraison de fonctionnalités de bout en bout et support produit.",
    ],

    contributions: [
      "Conception et évolution d'une plateforme citoyenne complète.",
      "Redux devenu l'outil central pour structurer l'état applicatif.",
      "Premiers projets solides sur PostgreSQL et modélisation de données.",
      "Renforcement du lien technique ↔ produit (besoin/usage terrain).",
    ],

    challenges: [
      "Porter un produit complet avec une équipe réduite.",
      "Gérer des besoins métier concrets et évolutifs.",
      "Structurer des données et des flux complexes avec fiabilité.",
    ],

    stack: [
      { category: "Frontend", items: ["React", "React Native"] },
      { category: "State", items: ["Redux"] },
      { category: "Backend", items: ["Node.js", "Express"] },
      { category: "Database", items: ["PostgreSQL"] },
      { category: "Cartographie", items: ["Mapbox"] },
    ],

    team: {
      total: 4,
      breakdown: ["Direction", "Dev", "Produit/Support", "Business"],
    },

    learnings: [
      "Autonomie sur un produit complet (end-to-end).",
      "Consolidation Redux et architecture d'état.",
      "Modélisation PostgreSQL et structuration des données.",
      "Compréhension forte du lien produit/tech/usage.",
    ],
  },

  setavoo_alternance: {
    id: "setavoo_alternance",
    role: "Mobile Application Developer (React Native)",
    company: "Setavoo",
    companyDescription:
      "Développement d'applications mobiles, avec focus cartographie et rendu dynamique.",
    location: "Lille",
    type: "Contrat de professionnalisation",
    period: "10/2017 → 09/2018",

    context: [
      "Développement d'applications mobiles React Native.",
      "Conception d'une application sociale dédiée à la citoyenneté dans les parcs nationaux.",
      "Publication sur l'Apple Store et le Google Play Store.",
    ],

    roleDescription:
      "Développeur mobile React Native, responsable d'une application complète avec rendu dynamique et cartographie.",

    collaborations: [
      "Direction",
      "Interlocuteurs projet",
      "Client/partenaires",
    ],

    responsibilities: [
      "Développement complet de l'application mobile.",
      "Création d'un moteur de rendu dynamique basé sur des structures JSON.",
      "Développement de parcours cartographiques avancés avec Mapbox.",
      "Animations et composants UI custom.",
      "Publication et maintenance sur stores.",
    ],

    contributions: [
      "Application 'Mes Calanques' (20 000 utilisateurs).",
      "Moteur de rendu dynamique JSON (écrans/sections générés).",
      "Parcours cartographiques avancés Mapbox + UI animée.",
      "Deep-dive Redux : reducers, flux, état à grande échelle.",
    ],

    challenges: [
      "Porter une app complète avec une forte autonomie.",
      "Gérer cartographie, perfs mobiles et UX simultanément.",
      "Publier et maintenir sur iOS et Android.",
    ],

    stack: [
      { category: "Mobile", items: ["React Native"] },
      { category: "State", items: ["Redux"] },
      { category: "Cartographie", items: ["Mapbox"] },
      { category: "Platforms", items: ["iOS", "Android"] },
    ],

    team: {
      total: 3,
      breakdown: ["Direction", "Dev (moi)", "Business/coordination"],
    },

    learnings: [
      "Développement mobile end-to-end (feature → store).",
      "Maîtrise Mapbox et parcours cartographiques.",
      "Architecture Redux à grande échelle en contexte mobile.",
      "Autonomie et responsabilité sur un produit réel.",
    ],
  },

  mairie_lille: {
    id: "mairie_lille",
    role: "Full Stack Developer (React, Node.js)",
    company: "Mairie de Lille",
    companyDescription:
      "Collectivité — service informatique (projet CMS interne).",
    location: "Lille",
    type: "Stage",
    period: "04/2017 → 10/2017",

    context: [
      "Premier projet significatif : conception et développement d'une application de gestion de contenu.",
      "Objectif : optimiser l'organisation et l'accessibilité des informations.",
      "Stack JavaScript moderne (front + back + DB).",
    ],

    roleDescription:
      "Stagiaire fullstack en charge d'un CMS complet (front React + API Express + base MongoDB).",

    collaborations: ["Tuteur de stage", "Service informatique"],

    responsibilities: [
      "Conception et développement d'un CMS complet.",
      "Développement front React et back Express.",
      "Modélisation / intégration des données MongoDB.",
      "Apprentissage et consolidation des fondations React.",
    ],

    contributions: [
      "Livraison d'un CMS complet (React, Express, MongoDB).",
      "Montée en compétence rapide sur React et sa structure de données.",
      "Première expérience fullstack structurante.",
    ],

    challenges: [
      "Projet ambitieux pour un profil junior.",
      "Apprendre plusieurs briques en parallèle (React/Express/MongoDB).",
      "Structurer correctement un projet complet de bout en bout.",
    ],

    stack: [
      { category: "Frontend", items: ["React"] },
      { category: "State", items: ["Redux"] },
      { category: "Backend", items: ["Node.js", "Express"] },
      { category: "Database", items: ["MongoDB"] },
    ],

    team: {
      total: 2,
      breakdown: ["Tuteur", "Stagiaire (moi)"],
    },

    learnings: [
      "Fondations solides de React.",
      "Compréhension de la structure de données et du rendu React.",
      "Approche fullstack et structuration de projet.",
      "Leçon sur le calibrage d'un projet (ambitieux mais formateur).",
    ],
  },
};

// Helper to get experience by ID
export function getExperienceDetail(id: string): ExperienceDetail | undefined {
  return experienceDetails[id];
}

// Get all experience IDs for static generation
export function getAllExperienceIds(): string[] {
  return Object.keys(experienceDetails);
}
