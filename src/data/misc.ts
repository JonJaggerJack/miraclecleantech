export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie-Claire Kofi",
    role: "Directrice d'école primaire",
    content: "Depuis que nous utilisons les produits MCT dans notre école, les cas d'infections chez les élèves ont drastiquement diminué. Le kit scolaire est vraiment adapté et les enfants adorent les sessions d'éducation à l'hygiène.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    id: 2,
    name: "Dr. Emmanuel Asante",
    role: "Médecin de santé publique",
    content: "Je recommande les produits MCT à mes patients. La qualité est remarquable et les formulations sont bien pensées. C'est rare de trouver des produits locaux qui rivalisent avec les importations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    id: 3,
    name: "Ama Owusu",
    role: "Mère de famille, commerçante",
    content: "Le désinfectant multi-surfaces est devenu indispensable dans mon foyer. Il est efficace, sent bon et ne brûle pas les mains. De plus, savoir que j'aide une entreprise locale gérée par des femmes m'encourage encore plus.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    id: 4,
    name: "Pastor John Mensah",
    role: "Responsable d'orphelinat",
    content: "L'engagement de MCT envers nos enfants est sincère et touchant. Les dons réguliers de kits d'hygiène et les sessions d'éducation ont vraiment amélioré les conditions sanitaires de notre établissement.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
];

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Où sont fabriqués les produits MCT ?",
    answer: "Tous nos produits sont fabriqués localement en utilisant des technologies modernes et des matières premières soigneusement sélectionnées. Notre engagement envers la production locale crée des emplois et stimule l'économie communautaire.",
    category: "Produits",
  },
  {
    id: 2,
    question: "Vos produits sont-ils testés dermatologiquement ?",
    answer: "Oui, tous nos produits sont testés dermatologiquement avant leur mise sur le marché. Nous accordons une grande importance à la sécurité et à la tolérance cutanée, notamment pour les peaux sensibles des enfants.",
    category: "Sécurité",
  },
  {
    id: 3,
    question: "Comment passer une commande en gros ?",
    answer: "Pour les commandes en gros (entreprises, écoles, hôpitaux, associations), veuillez nous contacter directement via notre formulaire de contact ou par téléphone. Nous proposons des tarifs préférentiels et une livraison adaptée à vos besoins.",
    category: "Commandes",
  },
  {
    id: 4,
    question: "Puis-je faire un don pour votre programme social ?",
    answer: "Absolument ! Nous acceptons les dons pour notre programme d'aide aux orphelins. Chaque don est utilisé pour acheter des kits d'hygiène qui seront distribués dans les orphelinats partenaires. Contactez-nous pour plus d'informations.",
    category: "Social",
  },
  {
    id: 5,
    question: "Quels sont vos délais de livraison ?",
    answer: "Nous livrons dans un délai de 24 à 72 heures pour les zones urbaines. Pour les zones rurales et éloignées, les délais peuvent varier entre 3 et 7 jours ouvrés. Des frais de livraison peuvent s'appliquer selon la distance.",
    category: "Livraison",
  },
  {
    id: 6,
    question: "Proposez-vous des formations sur l'hygiène ?",
    answer: "Oui ! Notre équipe propose des formations et ateliers sur les bonnes pratiques d'hygiène pour les écoles, entreprises et associations. Ces formations peuvent être adaptées à votre public cible. Contactez-nous pour un devis.",
    category: "Services",
  },
  {
    id: 7,
    question: "MCT est-elle une entreprise engagée politiquement ?",
    answer: "Non. Miracle Clean Tech est une entreprise strictement apolitique. Notre seul engagement est envers la santé publique, l'hygiène et le bien-être de toutes les communautés, sans distinction de bord politique, de religion ou d'ethnie.",
    category: "Général",
  },
  {
    id: 8,
    question: "Qui sont les fondatrices de MCT ?",
    answer: "MCT a été fondée en décembre 2025 par un groupe de femmes engagées et passionnées par la santé publique et l'entrepreneuriat social. Leur vision commune : créer des solutions d'hygiène accessibles tout en ayant un impact social positif sur leurs communautés.",
    category: "Général",
  },
];
