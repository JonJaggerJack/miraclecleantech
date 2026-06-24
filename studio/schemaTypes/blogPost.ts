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
      name: 'body',
      title: 'Contenu (texte enrichi, avec photos)',
      type: 'array',
      description: 'Rédigez l\'article ici. Bouton « + » pour ajouter une photo n\'importe où.',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Texte alternatif (accessibilité)' },
            { name: 'caption', type: 'string', title: 'Légende (optionnel)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Contenu (texte simple — ancien format, optionnel)',
      type: 'text',
      rows: 12,
      description: 'Utilisé seulement si le « texte enrichi » ci-dessus est vide.',
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
