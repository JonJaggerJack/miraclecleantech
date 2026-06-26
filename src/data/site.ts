// Réglages généraux du site (repli si Sanity n'est pas branché).
export interface SiteSettings {
  brandName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
}

export const siteSettings: SiteSettings = {
  brandName: 'Miracles Actions for Women',
  tagline: 'Pour le Droit et l\'Égalité des Femmes',
  email: 'miraclecleantech@gmail.com',
  phone: '+243850714774',
  whatsapp: '+243993172985',
  location: 'Bukavu',
};
