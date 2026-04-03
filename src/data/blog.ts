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
    id: 1,
    slug: "importance-hygiene-quotidienne",
    title: "L'importance de l'hygiène quotidienne pour la santé publique",
    excerpt: "Découvrez comment de simples gestes d'hygiène au quotidien peuvent prévenir des milliers de maladies et sauver des vies dans nos communautés.",
    content: `L'hygiène quotidienne est l'un des piliers fondamentaux de la santé publique. Des gestes aussi simples que se laver les mains peuvent réduire de 40% les infections respiratoires et de 50% les maladies diarrhéiques.

Chez Miracle Clean Tech, nous croyons fermement que l'accès à des produits d'hygiène de qualité est un droit fondamental. C'est pourquoi nous nous engageons à rendre nos produits accessibles à toutes les couches de la population.

**Les 5 gestes essentiels au quotidien :**
1. Se laver les mains avant et après chaque repas
2. Se laver les mains après un passage aux toilettes
3. Nettoyer régulièrement les surfaces de contact
4. Maintenir son espace de vie propre et aéré
5. Sensibiliser les enfants dès le plus jeune âge

Ces gestes simples, combinés à l'utilisation de produits adaptés, constituent la base d'une bonne santé pour toute la famille.`,
    author: "Équipe MCT",
    date: "15 mars 2026",
    category: "Santé",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    tags: ["Hygiène", "Santé", "Prévention"],
  },
  {
    id: 2,
    slug: "produits-naturels-vs-chimiques",
    title: "Produits naturels vs chimiques : que choisir pour votre famille ?",
    excerpt: "Nous analysons les avantages et inconvénients des produits ménagers naturels et chimiques pour vous aider à faire le meilleur choix pour votre foyer.",
    content: `La question du choix entre produits naturels et chimiques est au cœur des préoccupations des consommateurs modernes. Chez MCT, nous avons développé une gamme qui allie l'efficacité des formules modernes au respect de l'environnement et de la santé.

**Les produits naturels :** respectueux de l'environnement, doux pour les peaux sensibles, mais parfois moins efficaces contre certains agents pathogènes.

**Les produits chimiques :** très efficaces, mais peuvent contenir des substances irritantes ou nocives à long terme.

**Notre approche chez MCT :** nous formulons nos produits pour combiner le meilleur des deux mondes - l'efficacité des formules modernes avec des ingrédients naturels soigneusement sélectionnés.`,
    author: "Dr. Akosua Mensah",
    date: "2 mars 2026",
    category: "Conseils",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    tags: ["Produits naturels", "Conseils", "Famille"],
  },
  {
    id: 3,
    slug: "hygiene-enfants-orphelins",
    title: "Notre programme d'hygiène pour les enfants orphelins",
    excerpt: "MCT s'engage auprès des enfants les plus vulnérables. Découvrez notre programme de donation et d'éducation à l'hygiène dans les orphelinats.",
    content: `L'un des piliers fondateurs de Miracle Clean Tech est son engagement social envers les enfants orphelins. Depuis notre création en décembre 2025, nous avons mis en place un programme structuré d'aide aux orphelinats.

**Notre programme comprend :**
- Distribution mensuelle de kits d'hygiène dans 5 orphelinats partenaires
- Sessions d'éducation à l'hygiène animées par nos équipes
- Parrainage de l'accès à l'eau potable dans certains établissements
- Formation des éducateurs aux bonnes pratiques sanitaires

Ce programme est au cœur de notre mission : nous croyons que chaque enfant, quelle que soit sa situation, mérite accès à une hygiène digne.`,
    author: "Fondatrice MCT",
    date: "20 février 2026",
    category: "Social",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    tags: ["Social", "Orphelins", "Engagement"],
  },
  {
    id: 4,
    slug: "assainissement-environnement-local",
    title: "Comment MCT contribue à l'assainissement de l'environnement local",
    excerpt: "Nos actions vont au-delà de la simple vente de produits. Découvrez comment nous participons activement à l'assainissement de nos communautés.",
    content: `L'assainissement de l'environnement est une priorité nationale et internationale. Chez Miracle Clean Tech, nous ne nous contentons pas de produire des produits de nettoyage - nous participons activement à des campagnes d'assainissement communautaires.

**Nos actions environnementales :**
- Organisation de journées de nettoyage communautaires
- Partenariats avec les collectivités locales
- Sensibilisation aux dangers des déchets et de l'insalubrité
- Développement de produits éco-responsables

Chaque produit MCT vendu contribue directement au financement de ces actions, car nous reversons une part de nos bénéfices à notre fonds d'impact communautaire.`,
    author: "Équipe Impact MCT",
    date: "10 février 2026",
    category: "Environnement",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1542601906897-d5a4abe7b2a3?w=800&q=80",
    tags: ["Environnement", "Assainissement", "Communauté"],
  },
];
