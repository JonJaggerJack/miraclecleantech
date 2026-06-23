export interface BlogPost {
  id: number;
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
  {
    id: 1,
    slug: "mission-assistance-personnes-vulnerables",
    title: "Pourquoi Miracles Actions for Women place les personnes vulnérables au centre",
    excerpt: "Miracles Actions for Women agit d'abord comme une organisation d'assistance, avec une attention particulière portée aux personnes vulnérables.",
    content: `Miracles Actions for Women est une organisation orientée vers l'assistance des personnes vulnérables. Son action repose sur une conviction simple : l'hygiène, la prévention et l'assainissement participent directement à la dignité humaine.

Notre mission consiste à promouvoir l'hygiène, réduire les maladies liées au manque d'hygiène, renforcer les bonnes pratiques sanitaires et contribuer à un environnement plus sain.

L'ASBL agit avec une logique d'utilité sociale. Chaque activité, chaque produit et chaque action sont pensés pour soutenir cet objectif principal : accompagner les personnes vulnérables avec sérieux, sobriété et impact.`,
    author: "Équipe Miracles Actions for Women",
    date: "2026",
    category: "Mission",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    tags: ["Mission", "Assistance", "Communauté"],
  },
  {
    id: 2,
    slug: "produits-qui-financent-la-mission-sociale",
    title: "Comment nos produits financent les activités de l'ASBL",
    excerpt: "La production de solutions d'hygiène des mains et de nettoyage des sols constitue le levier de financement des actions sociales de Miracles Actions for Women.",
    content: `Miracles Actions for Women a choisi un modèle clair : produire des produits utiles pour soutenir une mission utile.

Les solutions d'hygiène des mains et de nettoyage des sols ne sont pas une activité séparée de la mission. Elles permettent au contraire de financer les interventions, l'accompagnement et les actions menées auprès des personnes vulnérables.

Ce positionnement donne du sens à la production. Les produits répondent à des besoins quotidiens, tandis que leur vente soutient durablement les activités de l'organisation.`,
    author: "Équipe Miracles Actions for Women",
    date: "2026",
    category: "Produits",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["Produits", "Financement", "ASBL"],
  },
  {
    id: 3,
    slug: "bons-gestes-hygiene-des-mains",
    title: "Les bons gestes pour l'hygiène des mains",
    excerpt: "L'hygiène des mains reste l'un des réflexes les plus simples et les plus utiles pour renforcer les bonnes pratiques sanitaires.",
    content: `L'hygiène des mains est au cœur de la prévention. Elle contribue à limiter les risques liés au manque d'hygiène et favorise un cadre de vie plus sain.

Pour Miracles Actions for Women, produire des solutions d'hygiène des mains a donc un double sens : répondre à un besoin concret et soutenir une action sociale.

Au quotidien, l'objectif reste le même : encourager les bons gestes, rendre l'hygiène plus accessible et renforcer la prévention dans les espaces de vie et de travail.`,
    author: "Équipe Miracles Actions for Women",
    date: "2026",
    category: "Hygiène",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    tags: ["Hygiène", "Mains", "Prévention"],
  },
  {
    id: 4,
    slug: "nettoyage-des-sols-et-cadre-de-vie",
    title: "Nettoyage des sols et assainissement du cadre de vie",
    excerpt: "Le nettoyage des sols participe directement à l'assainissement de l'environnement et au bien-être collectif.",
    content: `Le nettoyage des sols n'est pas un geste secondaire. Il contribue à l'assainissement de l'environnement et à l'amélioration du cadre de vie.

En produisant des solutions destinées à cet usage, Miracles Actions for Women relie la production à sa vision : créer un environnement sain grâce à des solutions simples, modernes et utiles.

Cette approche s'inscrit dans une logique globale de santé publique, de prévention et d'accompagnement des communautés.`,
    author: "Équipe Miracles Actions for Women",
    date: "2026",
    category: "Assainissement",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1542601906897-d5a4abe7b2a3?w=800&q=80",
    tags: ["Environnement", "Assainissement", "Communauté"],
  },
];
