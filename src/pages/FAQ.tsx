import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import { faqs } from '../data/misc';

const categories = ['Tous', 'Général', 'Produits', 'Sécurité', 'Commandes', 'Livraison', 'Social', 'Services'];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filtered = activeCategory === 'Tous'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white via-green-50/30 to-blue-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-green-600 uppercase tracking-widest">
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Questions{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              fréquentes
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
          >
            Retrouvez les réponses aux questions les plus posées sur MCT, nos produits et notre mission.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={filtered} />

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-10 text-center border border-gray-100"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-md">
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Vous n'avez pas trouvé votre réponse ?</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions personnalisées.
            </p>
            <Button to="/contact" size="lg">
              Nous contacter directement
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
