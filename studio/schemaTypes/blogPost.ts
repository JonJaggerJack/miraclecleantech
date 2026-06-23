import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Article de blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Identifiant URL',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'excerpt', title: 'Accroche', type: 'text', rows: 3 }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'text',
      rows: 20,
      description: 'Séparez les paragraphes par une ligne vide.',
    }),
    defineField({ name: 'author', title: 'Auteur', type: 'string' }),
    defineField({ name: 'date', title: 'Date (affichée)', type: 'string' }),
    defineField({ name: 'category', title: 'Catégorie', type: 'string' }),
    defineField({ name: 'readTime', title: 'Temps de lecture', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Image (upload)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: "Image (URL externe, si pas d'upload)",
      type: 'url',
    }),
    defineField({ name: 'tags', title: 'Mots-clés', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'order',
      title: 'Ordre (petit = en premier)',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
});
