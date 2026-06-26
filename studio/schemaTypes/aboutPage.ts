import { defineType, defineField } from 'sanity';

const titleDesc = {
  type: 'object' as const,
  fields: [
    { name: 'title', title: 'Titre', type: 'string' },
    { name: 'desc', title: 'Texte', type: 'text', rows: 2 },
  ],
  preview: { select: { title: 'title' } },
};

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

    defineField({ name: 'objectivesTitle', title: 'Objectifs — titre', type: 'string' }),
    defineField({
      name: 'objectives',
      title: 'Objectifs (liste)',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({ name: 'visionTitle', title: 'Vision — titre', type: 'string' }),
    defineField({ name: 'visionText', title: 'Vision — texte', type: 'text', rows: 4 }),
    defineField({ name: 'visionBadgeTitle', title: 'Vision — encart titre', type: 'string' }),
    defineField({ name: 'visionBadgeText', title: 'Vision — encart texte', type: 'text', rows: 2 }),

    defineField({ name: 'valuesKicker', title: 'Valeurs — sur-titre', type: 'string' }),
    defineField({ name: 'valuesTitle', title: 'Valeurs — titre', type: 'string' }),
    defineField({ name: 'values', title: 'Valeurs', type: 'array', of: [titleDesc] }),

    defineField({ name: 'projectsKicker', title: 'Initiatives — sur-titre', type: 'string' }),
    defineField({ name: 'projectsTitle', title: 'Initiatives — titre', type: 'string' }),
    defineField({ name: 'projectsIntro', title: 'Initiatives — intro', type: 'text', rows: 2 }),
    defineField({
      name: 'projects',
      title: 'Initiatives',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Titre', type: 'string' },
            { name: 'desc', title: 'Texte', type: 'text', rows: 2 },
            { name: 'tag', title: 'Étiquette', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'tag' } },
        },
      ],
    }),

    defineField({ name: 'orgParagraph', title: 'Organisation — texte', type: 'text', rows: 3 }),

    defineField({ name: 'founderName', title: 'Fondatrice — nom', type: 'string' }),
    defineField({ name: 'founderRole', title: 'Fondatrice — rôle', type: 'string' }),
    defineField({ name: 'founderBio', title: 'Fondatrice — biographie', type: 'text', rows: 4 }),

    defineField({ name: 'ctaTitle', title: "Appel à l'action — titre", type: 'string' }),
    defineField({ name: 'ctaText', title: "Appel à l'action — texte", type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Page À propos' }) },
});
