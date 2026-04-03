export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Qu'est-ce que Miraclecleantech ASBL ?",
    answer: "Miraclecleantech ASBL est une organisation qui travaille dans l'assistance des personnes vulnérables tout en promouvant l'hygiène et l'assainissement de l'environnement.",
    category: "Général",
  },
  {
    id: 2,
    question: "Comment l'ASBL finance-t-elle ses activités ?",
    answer: "Miraclecleantech ASBL finance ses activités notamment grâce à la production de produits d'hygiène des mains et de nettoyage des sols.",
    category: "Mission",
  },
  {
    id: 3,
    question: "Quels produits proposez-vous ?",
    answer: "L'organisation propose principalement des produits d'hygiène des mains et des produits de nettoyage des sols.",
    category: "Produits",
  },
  {
    id: 4,
    question: "Pourquoi avoir choisi l'hygiène des mains et le nettoyage des sols ?",
    answer: "Parce que ces deux domaines répondent à des besoins quotidiens concrets tout en soutenant l'action sociale de l'ASBL autour de la prévention, de l'hygiène et de l'assainissement.",
    category: "Produits",
  },
  {
    id: 5,
    question: "Depuis quand l'organisation existe-t-elle ?",
    answer: "Miraclecleantech ASBL a été créée en décembre 2025.",
    category: "Général",
  },
  {
    id: 6,
    question: "L'organisation est-elle apolitique ?",
    answer: "Oui. Miraclecleantech ASBL est une organisation apolitique centrée sur son action sociale, l'hygiène et l'amélioration du cadre de vie.",
    category: "Mission",
  },
  {
    id: 7,
    question: "Comment vous contacter ?",
    answer: "Le formulaire de contact du site est le canal principal pour toute demande d'information, de partenariat ou de commande.",
    category: "Contact",
  },
  {
    id: 8,
    question: "Qui sont les bénéficiaires de vos actions ?",
    answer: "Les actions de Miraclecleantech ASBL s'adressent aux personnes vulnérables ainsi qu'aux communautés qui ont besoin d'un meilleur accès à l'hygiène et à un environnement plus sain.",
    category: "Mission",
  },
];
