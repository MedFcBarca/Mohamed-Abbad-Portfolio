import { shopify,bee2link,spyrals ,printack1,printack2,printack3,printack4,printack5,printack6,printack7,
    the1,the2,the3,the5,the4,the7,the6,
    wf1,wf2,wf3,wf4,wf5,wf6,wf8,
    kc1,kc2,kc3,kc4,kc5,
} 

from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Bee2link",
        icon: bee2link,
        iconBg: "#accbe1",
        date: "Septembre 2025 - Décembre 2025",
        points: [
            "Développement et maintenance d’applications web en utilisant React.js et des technologies associées.",
            "Création de projets de A à Z ainsi que contribution à l’amélioration d’applications existantes.",
             "Mise en place d’interfaces responsives et optimisation de la compatibilité multi-navigateurs.",
             "Amélioration continue du code et correction de bugs dans une logique de qualité et de maintenabilité.",
        ],

    },
    {
    title: "Développeur fullstack",
    company_name: "Spyrals",
    icon: spyrals,
    iconBg: "#ffffff",
    date: "Juillet 2022 - Juillet 2025",
    points: [
        "Development and maintenance of complex web applications using React.js and full-stack technologies.",
        "Refactoring and optimization of existing codebases to improve performance, stability, and maintainability.",
        "Implementation of advanced features including customization tools, search improvements, and administrative back-offices.",
        "Contribution to projects developed from scratch as well as continuous improvement of existing applications.",
    ],
},

    {
  title: "Développeur Full-Stack",
  company_name: "Marketplace de vêtements seconde main (Projet personnel)",
  icon: shopify,
  iconBg: "#b7e4c7",
  date: "2025",
  points: [
    "Conception et développement d’une marketplace complète dédiée à la revente de vêtements d’occasion.",
    "Mise en place d’une architecture full-stack PHP / React.js, pensée pour évoluer vers une boutique en ligne réelle.",
    "Développement d’une API REST personnalisée (PHP / MySQL) pour la gestion des produits, utilisateurs et commandes.",
    "Implémentation d’une architecture MVC légère avec sécurisation des endpoints, gestion des sessions et validation des données.",
    "Création d’une interface React.js dynamique et responsive avec routing client, hooks, Context API et opérations CRUD.",
    "Optimisation des performances : requêtes MySQL, lazy loading, gestion des assets et bonnes pratiques SEO techniques.",
    "Intégration de fonctionnalités avancées : filtres produits, synchronisation simulée des stocks et mise en cache côté client."
  ],
},

]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/MedFcBarca',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mohamedabbad/',
    }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Printack',
    description: 'Application complexe de gestion et d’impression d’étiquettes.\n\nPrintack est une application conçue pour centraliser, organiser et automatiser la création ainsi que l’impression d’étiquettes.\nElle permet de gérer différents formats, modèles et flux d’impression, tout en s’adaptant à des besoins variés (logistique, produits, traçabilité, etc.).\nCe projet m’a permis de travailler sur des problématiques techniques complexes, d’optimisation des processus et de fiabilité des impressions.',
    images: [
      printack1, printack2, printack3, printack4, printack5, printack6, printack7
    ],
  },

    {
  iconUrl: threads,
  theme: 'btn-back-green',
  name: 'Jeu-Concours – Thé Tip Top ',
  description: 'Développement d’un site de jeu-concours avec API et WebApp permettant la gestion des inscriptions, des participations et des gains via tickets de caisse. Conception de l’interface utilisateur, intégration des outils administrateurs et mise en place d’une stratégie marketing digitale incluant analyse concurrentielle et suivi des campagnes.',
  images: [the1, the2, the3, the4, the5, the6, the7],
},

    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Furious Duck',
        description: 'Refonte du workflow de production avec la transition d’un cycle en V vers une méthodologie Agile. Industrialisation des sites web via Docker et des pipelines CI/CD (Jenkins, Git, Linux). Automatisation des déploiements et des tests unitaires et fonctionnels, création de procédures internes et accompagnement de l’équipe.',
        images: [wf1,wf2,wf3,wf4,wf5,wf6,wf8      
    ],
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Karaoke Creole',
        description: 'Développement d’une plateforme de karaoké interactif avec une interface intuitive facilitant la navigation et la gestion des playlists. Ajout de fonctionnalités avancées telles que la gestion d’événements, la création de playlists collaboratives et l’amélioration du moteur de recherche des chansons. Optimisation du chargement des fichiers audio afin de réduire les temps d’attente.\n\nImpact : Contribution sur l’ensemble de l’application, ayant permis une augmentation de 50 % du taux d’engagement des utilisateurs et renforcé l’intérêt du client pour le projet.',
        images: [kc1, kc2, kc3, kc4, kc5],
    },
];