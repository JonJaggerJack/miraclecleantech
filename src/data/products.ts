// Programmes / actions de Miracles Actions for Women — alignés sur les objectifs officiels.
// (Le type garde le nom "Product" en interne — c'est la carte générique réutilisée.)
export interface Product {
  id: string | number;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Autonomisation économique",
    category: "Autonomisation",
    description:
      "Des formations et des activités génératrices de revenus pour rendre les femmes et les personnes vulnérables financièrement autonomes.",
    benefits: [
      "Formations pratiques",
      "Activités génératrices de revenus",
      "Accompagnement vers l'emploi",
      "Autonomie financière",
    ],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  },
  {
    id: 2,
    name: "Éducation des jeunes filles",
    category: "Éducation",
    description:
      "Faciliter l'accès à l'éducation et renforcer les capacités des jeunes filles pour leur ouvrir de nouvelles perspectives.",
    benefits: [
      "Accès à l'éducation",
      "Renforcement des capacités",
      "Soutien scolaire",
      "Mentorat",
    ],
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&q=80",
  },
  {
    id: 3,
    name: "Lutte contre les violences faites aux femmes",
    category: "Droits & protection",
    description:
      "Prévenir et combattre toutes les formes de violences faites aux femmes, et protéger celles qui en sont victimes.",
    benefits: [
      "Prévention & sensibilisation",
      "Écoute et protection",
      "Orientation des victimes",
      "Plaidoyer",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    id: 4,
    name: "Droits des femmes & égalité des genres",
    category: "Droits & protection",
    description:
      "Sensibiliser les communautés aux droits des femmes et à l'égalité des genres, et faire entendre leur voix.",
    benefits: [
      "Causeries communautaires",
      "Information sur les droits",
      "Plaidoyer local",
      "Mobilisation",
    ],
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
  },
  {
    id: 5,
    name: "Accompagnement des personnes vulnérables",
    category: "Accompagnement",
    description:
      "Un accompagnement social, moral et psychologique pour les personnes vulnérables, dans le respect de leur dignité.",
    benefits: [
      "Soutien social",
      "Soutien moral & psychologique",
      "Écoute et orientation",
      "Suivi de proximité",
    ],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    id: 6,
    name: "Leadership féminin",
    category: "Leadership",
    description:
      "Encourager le leadership des femmes et leur participation à la prise de décision au sein de la communauté.",
    benefits: [
      "Ateliers de leadership",
      "Prise de parole",
      "Participation citoyenne",
      "Réseaux de femmes",
    ],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
  },
  {
    id: 7,
    name: "Environnement & développement durable",
    category: "Environnement",
    description:
      "Lutter contre l'insalubrité (hygiène publique, déforestation) et réduire les déchets par le tri, le recyclage et la réutilisation.",
    benefits: [
      "Sensibilisation à l'hygiène publique",
      "Lutte contre la déforestation",
      "Tri & recyclage",
      "Réutilisation des produits finis",
    ],
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
  },
];
