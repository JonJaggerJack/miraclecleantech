import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'action',
  title: 'Action / Programme',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nom', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: ['Autonomisation', 'Droits & plaidoyer', 'Numérique', 'Accompagnement'],
      },
    }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'benefits',
      title: 'Points clés',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Image (upload)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'imageUrl', title: "Image (URL externe)", type: 'url' }),
    defineField({
      name: 'order',
      title: 'Ordre (petit = en premier)',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'image' } },
});
