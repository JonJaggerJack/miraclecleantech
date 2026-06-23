import { Link } from 'react-router-dom';
import { BrandIcon } from './Brand';

const footerLinks = {
  company: [
    { label: 'À propos', to: '/about' },
    { label: 'Notre mission', to: '/about#mission' },
    { label: 'L\'organisation', to: '/about#organisation' },
  ],
  products: [
    { label: 'Hygiène des mains', to: '/products' },
    { label: 'Nettoyage des sols', to: '/products' },
  ],
  support: [
    { label: 'Contact', to: '/contact' },
    { label: 'Blog', to: '/blog' },
    { label: 'Formations', to: '/formations' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <BrandIcon className="h-12 w-12 shrink-0 object-contain" />
              <span className="text-white font-bold text-base leading-tight">
                Miracles Actions<br />for Women
                <span className="block text-[11px] font-medium text-white mt-1">
                  Pour le Droit et l'Égalité des Femmes
                </span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Organisation apolitique créée en décembre 2025, Miracles Actions for Women (MAW) œuvre pour le droit et l'égalité des femmes et accompagne les personnes vulnérables.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Organisation</h4>
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
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © 2026 Miracles Actions for Women · Au service de l'hygiène, de l'assistance et du cadre de vie.
          </p>
        </div>
      </div>
    </footer>
  );
}
