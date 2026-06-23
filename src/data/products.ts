// Programmes / actions de Miracles Actions for Women.
// (Le type garde le nom "Product" en interne — c'est la carte générique réutilisée.)
export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ateliers d'autonomisation",
    category: "Autonomisation",
    description:
      "Des rencontres où les femmes échangent, apprennent et reprennent confiance. On y parle estime de soi, prise de décision et accès aux opportunités — comme lors de notre atelier de Bukavu sur l'autonomisation et le numérique.",
    benefits: [
      "Échanges en petits groupes",
      "Intervenantes du terrain",
      "Outils concrets pour agir",
      "Suivi après l'atelier",
    ],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  },
  {
    id: 2,
    name: "Sensibilisation aux droits",
    category: "Droits & plaidoyer",
    description:
      "Connaître ses droits, c'est déjà commencer à les défendre. Nous menons des campagnes de proximité sur l'égalité, la protection et la place des femmes dans la décision communautaire.",
    benefits: [
      "Causeries de quartier",
      "Information sur les droits",
      "Plaidoyer auprès des acteurs locaux",
      "Relais dans les communautés",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    id: 3,
    name: "Numérique responsable",
    category: "Numérique",
    description:
      "Le numérique ouvre des portes, à condition de bien s'en servir. Nous formons les femmes aux outils essentiels et à un usage des réseaux sociaux à la fois sûr, réfléchi et utile.",
    benefits: [
      "Bases de l'informatique",
      "Réseaux sociaux en sécurité",
      "Protection de la vie privée",
      "Vers de nouvelles perspectives",
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  },
  {
    id: 4,
    name: "Accompagnement des plus vulnérables",
    category: "Accompagnement",
    description:
      "Derrière chaque situation, il y a une personne. Nous écoutons, orientons et accompagnons les femmes et les familles fragilisées vers les bons relais et un peu plus d'autonomie.",
    benefits: [
      "Écoute et orientation",
      "Mise en relation",
      "Suivi de proximité",
      "Dignité avant tout",
    ],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
];
