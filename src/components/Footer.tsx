import { Link } from 'react-router-dom';
import logoImg from '../imgs/Logo miracle.jpeg';

const footerLinks = {
  company: [
    { label: 'À propos', to: '/about' },
    { label: 'Notre mission', to: '/about#mission' },
    { label: 'L\'organisation', to: '/about#organisation' },
    { label: 'Notre impact', to: '/impact' },
  ],
  products: [
    { label: 'Hygiène des mains', to: '/products' },
    { label: 'Nettoyage des sols', to: '/products' },
  ],
  support: [
    { label: 'Contact', to: '/contact' },
    { label: 'Blog', to: '/blog' },
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
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src={logoImg}
                alt="Miraclecleantech ASBL"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Organisation apolitique créée en décembre 2025, Miraclecleantech ASBL accompagne les personnes vulnérables et soutient son action par la production de produits d'hygiène des mains et de nettoyage des sols.
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
            © 2026 Miraclecleantech ASBL · Au service de l'hygiène, de l'assistance et du cadre de vie.
          </p>
        </div>
      </div>
    </footer>
  );
}
