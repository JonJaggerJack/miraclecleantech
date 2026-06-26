import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: "Page d'accueil",
  type: 'document',
  fields: [
    defineField({ name: 'heroTitleStart', title: 'Titre — début', type: 'string' }),
    defineField({ name: 'heroTitleHighlight', title: 'Titre — partie colorée', type: 'string' }),
    defineField({ name: 'heroIntro', title: 'Accroche', type: 'text', rows: 3 }),

    defineField({ name: 'missionKicker', title: 'Section mission — sur-titre', type: 'string' }),
    defineField({ name: 'missionTitle', title: 'Section mission — titre', type: 'string' }),
    defineField({ name: 'missionIntro', title: 'Section mission — intro', type: 'text', rows: 2 }),
    defineField({
      name: 'missions',
      title: 'Cartes mission',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'desc', title: 'Texte', type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),

    defineField({ name: 'quoteText', title: 'Citation', type: 'text', rows: 3 }),
    defineField({ name: 'quoteAttribution', title: 'Citation — source', type: 'string' }),

    defineField({ name: 'actionsKicker', title: 'Section actions — sur-titre', type: 'string' }),
    defineField({ name: 'actionsTitle', title: 'Section actions — titre', type: 'string' }),
    defineField({ name: 'actionsIntro', title: 'Section actions — intro', type: 'text', rows: 2 }),

    defineField({ name: 'ctaTitle', title: "Appel à l'action — titre", type: 'string' }),
    defineField({ name: 'ctaText', title: "Appel à l'action — texte", type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Page d'accueil" }) },
});
