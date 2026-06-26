import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Réglages du site',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', title: 'Nom', type: 'string' }),
    defineField({ name: 'tagline', title: 'Slogan', type: 'string' }),
    defineField({ name: 'email', title: 'Email de contact', type: 'string' }),
    defineField({ name: 'phone', title: 'Téléphone', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp', type: 'string' }),
    defineField({ name: 'location', title: 'Localisation', type: 'string' }),
    defineField({ name: 'linkedin', title: 'LinkedIn (URL)', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook (URL)', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram (URL)', type: 'url' }),
  ],
  preview: { select: { title: 'brandName', subtitle: 'tagline' } },
});
