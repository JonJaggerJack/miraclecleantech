import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Leaf, Zap, Heart, Users, Globe,
  Star, ChevronRight, CheckCircle2,
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
import { products } from '../data/products';
import { testimonials } from '../data/misc';

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-blue-50/40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-100/40 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 fill-green-500 text-green-500" />
            Fondée en décembre 2025 · Entreprise 100% locale
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            L'hygiène qui{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              transforme
            </span>{' '}
            les vies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
          >
            Miracle Clean Tech fabrique des produits d'hygiène et de nettoyage innovants 
            pour promouvoir la santé publique et améliorer le bien-être de nos communautés.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button to="/products" size="lg">
              Découvrir nos produits
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/about" variant="outline" size="lg">
              Notre histoire
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { value: '6+', label: 'Produits phares' },
              { value: '100%', label: 'Made localement' },
              { value: '5+', label: 'Orphelinats aidés' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right – Hero image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/70">
            <img
              src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
              alt="Produits MCT"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Impact Social</p>
                <p className="text-xs text-gray-400">Fondée par des femmes engagées</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <p className="text-sm font-semibold text-gray-800">99,9% efficacité</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Mission Cards ─────────────────────────────────────────────────────────────
const missions = [
  { icon: Shield, title: "Promouvoir l'hygiène", desc: "Sensibiliser et faciliter l'accès à des pratiques hygiéniques de qualité pour toutes les communautés.", color: "from-green-500 to-green-600" },
  { icon: Leaf, title: "Assainir l'environnement", desc: "Créer des solutions qui respectent l'environnement tout en assurant une efficacité maximale.", color: "from-blue-500 to-blue-600" },
  { icon: Heart, title: "Aider les orphelins", desc: "Améliorer le bien-être des enfants orphelins grâce à des programmes de donation et d'éducation.", color: "from-rose-500 to-pink-600" },
  { icon: Users, title: "Développement local", desc: "Contribuer à l'économie locale en créant des emplois et en formant notre communauté.", color: "from-violet-500 to-purple-600" },
  { icon: Zap, title: "Innovation continue", desc: "Utiliser les technologies modernes pour formuler des produits toujours plus efficaces et sûrs.", color: "from-amber-500 to-orange-600" },
  { icon: Globe, title: "Santé publique", desc: "Réduire les maladies liées au manque d'hygiène et renforcer les bonnes pratiques sanitaires.", color: "from-teal-500 to-cyan-600" },
];

// ── Impact Stats ──────────────────────────────────────────────────────────────
const stats = [
  { value: '10 000+', label: 'Familles bénéficiaires', icon: Users },
  { value: '5', label: 'Orphelinats partenaires', icon: Heart },
  { value: '6', label: 'Produits formulés', icon: Zap },
  { value: '100%', label: 'Fabriqué localement', icon: Globe },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Mission Section */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-green-600 uppercase tracking-widest"
          >
            Notre mission
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-extrabold text-gray-900"
          >
            Ce qui nous anime chaque jour
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-base"
          >
            MCT est bien plus qu'une entreprise — c'est un mouvement pour la santé, 
            la dignité et l'inclusion sociale.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-100/70 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-4 shadow-md`}>
                <m.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{m.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Products */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Nos produits</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Qualité & Innovation</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Découvrez notre gamme de produits d'hygiène formulés avec soin pour votre famille et votre environnement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {products.slice(0, 3).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Button to="/products" variant="outline" size="lg">
            Voir tous les produits
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </SectionWrapper>

      {/* Impact Stats */}
      <SectionWrapper className="bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-400 uppercase tracking-widest">Notre impact</span>
          <h2 className="mt-2 text-4xl font-extrabold text-white">Des chiffres qui parlent</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-4xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-gray-400 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-white">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Témoignages</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Ce que disent nos clients</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-green-500 to-blue-600 p-12 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
          <div className="relative">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Rejoignez le mouvement MCT
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Commandez nos produits, partenariez avec nous ou contribuez à notre mission sociale. 
              Ensemble, construisons un environnement plus sain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Voir les produits
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all duration-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
