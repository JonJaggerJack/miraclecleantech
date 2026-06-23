import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'Page À propos',
  type: 'document',
  fields: [
    defineField({ name: 'heroIntro', title: 'Accroche', type: 'text', rows: 3 }),
    defineField({ name: 'whoTitle', title: '« Qui nous sommes » — titre', type: 'string' }),
    defineField({
      name: 'whoParagraphs',
      title: '« Qui nous sommes » — paragraphes',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
    }),
    defineField({ name: 'visionText', title: 'Vision', type: 'text', rows: 3 }),
    defineField({
      name: 'values',
      title: 'Valeurs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'desc', title: 'Texte', type: 'string' },
          ],
        },
      ],
    }),
    defineField({ name: 'founderName', title: 'Fondatrice — nom', type: 'string' }),
    defineField({ name: 'founderRole', title: 'Fondatrice — rôle', type: 'string' }),
    defineField({ name: 'founderBio', title: 'Fondatrice — biographie', type: 'text', rows: 4 }),
  ],
  preview: { prepare: () => ({ title: 'Page À propos' }) },
});
