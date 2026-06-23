import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: "Page d'accueil",
  type: 'document',
  fields: [
    defineField({ name: 'heroTitleStart', title: 'Titre — début', type: 'string' }),
    defineField({ name: 'heroTitleHighlight', title: 'Titre — partie colorée', type: 'string' }),
    defineField({ name: 'heroIntro', title: 'Accroche', type: 'text', rows: 3 }),
    defineField({
      name: 'missions',
      title: 'Cartes « Notre raison d\'être »',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'desc', title: 'Texte', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
    defineField({ name: 'quoteText', title: 'Citation', type: 'text', rows: 3 }),
    defineField({ name: 'quoteAttribution', title: 'Citation — source', type: 'string' }),
    defineField({ name: 'ctaHeading', title: 'Appel à l\'action — titre', type: 'string' }),
    defineField({ name: 'ctaText', title: 'Appel à l\'action — texte', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: "Page d'accueil" }) },
});
