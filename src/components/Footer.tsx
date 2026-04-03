import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Share2, Send, Globe, Rss, Heart } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'À propos', to: '/about' },
    { label: 'Notre mission', to: '/about#mission' },
    { label: 'Notre équipe', to: '/about#team' },
    { label: 'Impact social', to: '/impact' },
  ],
  products: [
    { label: 'Hygiène corporelle', to: '/products' },
    { label: 'Désinfectants', to: '/products' },
    { label: 'Produits ménagers', to: '/products' },
    { label: 'Kits scolaires', to: '/products' },
  ],
  support: [
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact', to: '/contact' },
    { label: 'Blog', to: '/blog' },
    { label: 'Politique de confidentialité', to: '/' },
  ],
};

const socials = [
  { icon: Share2, href: '#', label: 'Facebook' },
  { icon: Send, href: '#', label: 'Twitter' },
  { icon: Globe, href: '#', label: 'Instagram' },
  { icon: Rss, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-white leading-tight block">Miracle Clean Tech</span>
                <span className="text-xs text-gray-400">Hygiène & Innovation</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Entreprise innovante dédiée à la fabrication de produits d'hygiène et de nettoyage de qualité, 
              avec un engagement durable envers la santé publique et les communautés.
            </p>
            {/* Contact info */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>contact@miraclecleantech.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>+233 000 000 000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>Afrique de l'Ouest</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Entreprise</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Produits</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.products.map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Support</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.support.map((link) => (
                <li key={link.to + link.label}>
                  <Link to={link.to} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            © 2026 Miracle Clean Tech · Fait avec{' '}
            <Heart className="w-3 h-3 text-red-400 inline" /> pour la santé de nos communautés
          </p>
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
