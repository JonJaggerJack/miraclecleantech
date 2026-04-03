export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Savon Hygiénique MCT",
    category: "Hygiène corporelle",
    description: "Savon naturel enrichi aux extraits de plantes locales pour une hygiène quotidienne optimale. Formulé pour toute la famille, adapté aux peaux sensibles.",
    benefits: ["Sans agents chimiques agressifs", "Hydratation longue durée", "Parfum naturel délicat", "Adapté peaux sensibles"],
    image: "https://images.unsplash.com/photo-1607006344380-b6775a0824a7?w=600&q=80",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Désinfectant Multi-Surfaces",
    category: "Nettoyage",
    description: "Solution désinfectante puissante efficace contre 99,9% des bactéries et virus. Idéal pour les foyers, écoles et établissements de santé.",
    benefits: ["Élimine 99,9% des germes", "Sans rinçage", "Parfum citron frais", "Certifié OMS"],
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=600&q=80",
    badge: "Pro",
  },
  {
    id: 3,
    name: "Gel Hydroalcoolique MCT",
    category: "Hygiène des mains",
    description: "Gel hydroalcoolique à 70° d'alcool pour une désinfection rapide et efficace des mains. Format familial et format nomade disponibles.",
    benefits: ["70° d'alcool", "Sèche rapidement", "Non collant", "Enrichi en aloe vera"],
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=600&q=80",
    badge: "Nouveau",
  },
  {
    id: 4,
    name: "Lessive Écologique",
    category: "Lessive",
    description: "Lessive concentrée biodégradable pour un linge impeccablement propre tout en respectant l'environnement et les peaux fragiles.",
    benefits: ["Biodégradable 100%", "Concentré 3x", "Efficace à froid", "Hypoallergénique"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: 5,
    name: "Nettoyant Sol & Surfaces",
    category: "Nettoyage",
    description: "Nettoyant tout-en-un pour sols, sanitaires et surfaces diverses. Une formule avancée qui nettoie, désinfecte et parfume en une seule application.",
    benefits: ["3 actions en 1", "Parfum longue durée", "Efficace sans frotter", "Économique"],
    image: "https://images.unsplash.com/photo-1585421514284-efb74320b7f8?w=600&q=80",
  },
  {
    id: 6,
    name: "Kit Hygiène Scolaire",
    category: "Éducation & Social",
    description: "Kit complet pensé pour les élèves et les établissements scolaires. Inclut savon, gel désinfectant et brochure éducative sur l'hygiène.",
    benefits: ["Kit complet", "Format scolaire", "Brochure éducative incluse", "Prix social"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    badge: "Social",
  },
];
