// Contenu éditable de la page À propos (repli si Sanity n'est pas branché).
export interface AboutContent {
  heroIntro: string;
  whoTitle: string;
  whoParagraphs: string[];
  objectivesTitle: string;
  objectives: string[];
  visionTitle: string;
  visionText: string;
  visionBadgeTitle: string;
  visionBadgeText: string;
  valuesKicker: string;
  valuesTitle: string;
  values: { title: string; desc: string }[];
  projectsKicker: string;
  projectsTitle: string;
  projectsIntro: string;
  projects: { title: string; desc: string; tag: string }[];
  orgParagraph: string;
  founderName: string;
  founderRole: string;
  founderBio: string;
  ctaTitle: string;
  ctaText: string;
}

export const aboutContent: AboutContent = {
  heroIntro:
    "Association sans but lucratif basée à Bukavu (RD Congo), engagée pour les droits des femmes, l'assistance aux personnes vulnérables, la protection de l'environnement, le leadership féminin et la cohésion sociale.",
  whoTitle: 'Une association de femmes, pour les femmes',
  whoParagraphs: [
    "Miracles Actions for Women (MAW) est une association sans but lucratif basée à Bukavu, en République Démocratique du Congo. Elle s'engage pour la promotion et l'égalité des droits des femmes, l'assistance aux personnes vulnérables, la protection de l'environnement, le leadership féminin et la cohésion sociale.",
    "Notre mission : promouvoir, défendre et protéger les droits fondamentaux des femmes et des personnes vulnérables, en garantissant leur dignité, leur autonomisation et leur pleine participation à la société — tout en luttant contre toute forme de discrimination, de violence et d'exclusion sociale, dans un environnement sain et un développement durable.",
    "Une conviction nous guide : quand une femme avance, c'est toute une communauté qui progresse avec elle.",
  ],
  objectivesTitle: 'Nos objectifs',
  objectives: [
    "Promouvoir l'autonomisation économique (formations, activités génératrices de revenus)",
    "Faciliter l'accès à l'éducation et renforcer les capacités des jeunes filles",
    'Lutter contre toutes les formes de violences faites aux femmes',
    "Sensibiliser aux droits des femmes et à l'égalité des genres",
    'Apporter un accompagnement social, moral et psychologique',
    'Encourager le leadership féminin et la participation à la décision',
    "Lutter contre l'insalubrité (hygiène publique, déforestation)",
    'Réduire les déchets : tri, recyclage et réutilisation',
  ],
  visionTitle: 'Notre Vision',
  visionText:
    "Être une organisation de référence en République Démocratique du Congo et au-delà, pour l'autonomisation socio-économique, la protection des droits et le leadership des femmes, des jeunes filles et des personnes vulnérables, dans un cadre d'égalité, de dignité et de développement durable.",
  visionBadgeTitle: "L'égalité n'est pas une faveur",
  visionBadgeText:
    "C'est un droit. Nous travaillons pour qu'il devienne une réalité quotidienne, à Bukavu et au-delà.",
  valuesKicker: 'Nos valeurs',
  valuesTitle: 'Ce en quoi nous croyons',
  values: [
    { title: 'Droits humains', desc: 'Le respect des droits humains avant tout.' },
    { title: 'Égalité de genre', desc: 'Égalité et équité entre les femmes et les hommes.' },
    { title: 'Solidarité', desc: 'Solidarité et respect mutuel.' },
    { title: 'Transparence', desc: 'Transparence et bonne gouvernance.' },
    { title: 'Inclusion', desc: 'Inclusion sociale et dignité.' },
    { title: 'Responsabilité', desc: 'Responsabilité et discipline organisationnelle.' },
    { title: 'Environnement', desc: "Protection de l'environnement et développement durable." },
  ],
  projectsKicker: 'Projets',
  projectsTitle: 'Nos initiatives',
  projectsIntro:
    "Quelques-uns de nos axes d'action, au service des femmes, des jeunes filles et des personnes vulnérables.",
  projects: [
    { title: 'Autonomisation économique', desc: 'Formations et activités génératrices de revenus pour rendre les femmes et les personnes vulnérables autonomes.', tag: 'Autonomisation' },
    { title: 'Éducation des jeunes filles', desc: "Faciliter l'accès à l'éducation et renforcer les capacités des jeunes filles.", tag: 'Éducation' },
    { title: 'Lutte contre les violences', desc: 'Combattre toutes les formes de violences faites aux femmes et accompagner les victimes.', tag: 'Protection' },
    { title: 'Environnement & développement durable', desc: 'Hygiène publique, lutte contre la déforestation, tri, recyclage et réutilisation des déchets.', tag: 'Environnement' },
  ],
  orgParagraph:
    "Association sans but lucratif basée à Bukavu (RD Congo). MAW agit pour les droits et l'autonomisation des femmes, l'éducation des jeunes filles, l'accompagnement des personnes vulnérables et la protection de l'environnement.",
  founderName: 'Agathe Ishara',
  founderRole: 'Fondatrice de Miracles Actions for Women',
  founderBio:
    "Agathe Ishara a fondé Miracles Actions for Women en décembre 2025 à Bukavu. Partie d'un constat simple — trop de femmes restent privées de droits et d'opportunités —, elle a réuni autour d'elle une équipe décidée à changer les choses, une action à la fois.",
  ctaTitle: 'Avançons ensemble',
  ctaText:
    'Vous partagez nos convictions ? Écrivez-nous pour participer à un atelier, devenir bénévole ou nouer un partenariat.',
};
