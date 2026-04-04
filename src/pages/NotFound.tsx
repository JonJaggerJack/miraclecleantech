import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-8xl font-extrabold text-blue-700 mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page introuvable</h1>
          <p className="text-gray-500 mb-8">
            Cette page n'existe pas ou a été déplacée. Retournez à l'accueil pour continuer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors text-sm"
            >
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <button
              onClick={() => history.back()}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
