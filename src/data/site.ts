// Réglages généraux du site (repli si Sanity n'est pas branché).
export interface SiteSettings {
  brandName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

export const siteSettings: SiteSettings = {
  brandName: 'Miracles Actions for Women',
  tagline: 'Pour le Droit et l\'Égalité des Femmes',
  email: 'miraclecleantech@gmail.com',
  phone: '+243850714774',
  whatsapp: '+243993172985',
  location: 'Bukavu',
  linkedin: 'https://www.linkedin.com/company/miracle-clean-tech/',
  facebook: 'https://www.facebook.com/share/1KsqrBxrY9/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/maw_7.875450?igsh=cWs0Y216N2w3azNp&utm_source=qr',
};
