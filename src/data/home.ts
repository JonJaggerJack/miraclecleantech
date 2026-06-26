// Contenu éditable de la page d'accueil (repli si Sanity n'est pas branché).
export interface HomeContent {
  heroTitleStart: string;
  heroTitleHighlight: string;
  heroIntro: string;
  missionKicker: string;
  missionTitle: string;
  missionIntro: string;
  missions: { title: string; desc: string }[];
  quoteText: string;
  quoteAttribution: string;
  actionsKicker: string;
  actionsTitle: string;
  actionsIntro: string;
  ctaTitle: string;
  ctaText: string;
}

export const homeContent: HomeContent = {
  heroTitleStart: 'Quand une femme avance,',
  heroTitleHighlight: 'tout avance avec elle',
  heroIntro:
    "À Bukavu, Miracles Actions for Women se bat pour le droit et l'égalité des femmes. Autonomisation, éducation, leadership, accompagnement et protection de l'environnement : des actions concrètes, sur le terrain, qui changent des vies.",
  missionKicker: "Notre raison d'être",
  missionTitle: 'Ce pour quoi nous nous levons',
  missionIntro:
    "L'autonomisation de la femme est un droit, pas une faveur. C'est cette conviction qui guide chacune de nos actions.",
  missions: [
    { title: 'Autonomisation économique', desc: 'Des formations et des activités génératrices de revenus pour rendre les femmes et les personnes vulnérables autonomes.' },
    { title: 'Éducation & capacités', desc: "Faciliter l'accès à l'éducation et renforcer les capacités des jeunes filles." },
    { title: 'Droits & protection', desc: 'Défendre les droits des femmes et lutter contre toutes les formes de violences.' },
    { title: 'Leadership féminin', desc: 'Encourager les femmes à prendre la parole et à participer aux décisions.' },
    { title: 'Accompagnement', desc: 'Un soutien social, moral et psychologique pour les personnes vulnérables.' },
    { title: 'Environnement', desc: 'Hygiène publique, lutte contre la déforestation, tri, recyclage et réutilisation des déchets.' },
  ],
  quoteText:
    "« Une femme autonome, c'est une femme qui a accès à l'éducation, aux opportunités et à la décision. Et quand elle avance, c'est toute une communauté qui avance avec elle. »",
  quoteAttribution: '— Échangé lors de notre atelier à Bukavu',
  actionsKicker: 'Nos actions',
  actionsTitle: 'Ce que nous faisons, concrètement',
  actionsIntro:
    "Pas de grands discours : des ateliers, des rencontres et un accompagnement de proximité, là où les femmes en ont besoin.",
  ctaTitle: 'Rejoignez le mouvement',
  ctaText:
    "Participer à un atelier, devenir bénévole, nouer un partenariat ou simplement en parler autour de vous : chaque geste compte pour faire avancer le droit des femmes.",
};
