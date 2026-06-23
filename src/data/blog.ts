export interface BlogPost {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 5,
    slug: "atelier-autonomisation-femme-numerique-responsable",
    title: "Atelier MAW : l'autonomisation de la femme et un numérique responsable",
    excerpt: "Retour sur l'atelier organisé par Miracles Actions for Women autour de deux thèmes essentiels : l'autonomisation de la femme et l'utilisation responsable des réseaux sociaux.",
    content: `👉 L'autonomisation de la femme est un droit, pas une faveur. Et le numérique doit être un outil de progrès, pas de danger.

Organisé par Miracles Actions for Women, cet atelier a réuni des participants autour de deux thèmes essentiels : l'autonomisation de la femme et l'utilisation responsable des réseaux sociaux.

À travers des échanges riches et participatifs, un message fort s'est imposé :
👉 l'autonomisation de la femme est un droit, pas une faveur.

Une femme autonome est une femme qui a accès à l'éducation, aux opportunités et à la prise de décision. Et lorsqu'elle avance, c'est toute une communauté qui progresse avec elle.

Nous avons également réfléchi à notre usage du numérique, devenu incontournable dans notre quotidien. Les réseaux sociaux peuvent être un puissant levier de développement, à condition d'être utilisés avec responsabilité.

👉 Le numérique doit être un outil de progrès, pas de danger.
Réfléchir avant de publier, respecter les autres et protéger sa vie privée sont des réflexes essentiels à adopter.

Cet atelier a renforcé la prise de conscience des participants sur leur rôle dans le changement social. Plusieurs ont exprimé leur engagement à promouvoir l'autonomisation des femmes dans leur entourage et à adopter une utilisation plus responsable, réfléchie et sécurisée des réseaux sociaux. Il a également suscité une forte motivation à devenir des acteurs actifs du développement communautaire.

Nous adressons nos sincères remerciements à nos intervenantes, Madame Joviane Birindwa et Madame Claudiana Bagayamukwe, pour leurs précieuses contributions. Par la richesse de leurs échanges, la pertinence de leurs analyses et le partage généreux de leurs expériences, elles ont su inspirer, motiver et enrichir la réflexion de l'ensemble des participants.

Ce moment a été bien plus qu'une rencontre : un espace d'éveil, d'échange et d'engagement collectif.`,
    author: "Équipe Miracles Actions for Women",
    date: "2026",
    category: "Atelier",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    tags: ["Autonomisation", "Femmes", "Numérique"],
  },
];
