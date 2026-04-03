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
    name: "Savon liquide pour les mains",
    category: "Hygiène des mains",
    description: "Produit d'hygiène pensé pour le lavage régulier des mains et la promotion des bonnes pratiques sanitaires.",
    benefits: ["Usage quotidien", "Format pratique", "Contribue à l'action sociale", "Adapté aux espaces collectifs"],
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=600&q=80",
  },
  {
    id: 2,
    name: "Gel d'hygiène des mains",
    category: "Hygiène des mains",
    description: "Solution d'hygiène des mains conçue pour les situations où l'eau et le savon ne sont pas immédiatement disponibles.",
    benefits: ["Application rapide", "Format mobile", "Usage individuel ou collectif", "Soutient les activités de l'ASBL"],
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&q=80",
  },
  {
    id: 3,
    name: "Nettoyant pour les sols",
    category: "Nettoyage des sols",
    description: "Produit de nettoyage destiné à l'entretien régulier des sols dans les maisons, bureaux et espaces communautaires.",
    benefits: ["Entretien quotidien", "Utilisation simple", "Convient aux espaces partagés", "Contribue à l'action sociale"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 4,
    name: "Solution de lavage des sols",
    category: "Nettoyage des sols",
    description: "Formule dédiée au nettoyage des surfaces au sol afin de contribuer à un cadre de vie plus propre et plus sain.",
    benefits: ["Nettoyage régulier", "Usage communautaire", "Aide à l'assainissement", "Production au service de l'ASBL"],
    image: "https://images.unsplash.com/photo-1585421514284-efb74320b7f8?w=600&q=80",
  },
];
