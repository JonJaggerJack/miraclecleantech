import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Leaf, Zap, Heart, Users, Globe,
  Star, ChevronRight, CheckCircle2,
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products } from '../data/products';
import heroImg from '../imgs/2.jpeg';
import { BlobDecor, DotGrid, RingDecor } from '../components/SvgDecor';

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50">
      {/* Decorative background */}
      <BlobDecor className="absolute -top-20 -right-32 w-[520px] h-[520px] text-blue-100/50 pointer-events-none" />
      <DotGrid className="absolute bottom-24 left-0 text-green-300/30 w-52 h-52 pointer-events-none" />
      <RingDecor className="absolute top-1/3 -left-28 w-72 h-72 text-blue-200/25 pointer-events-none" />

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
            Miraclecleantech ASBL · Créée en décembre 2025
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            L'hygiène au service de{' '}
            <span className="text-blue-700">
              l'action sociale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
          >
            Miraclecleantech ASBL accompagne les personnes vulnérables et soutient son action par la production de solutions d'hygiène des mains et de nettoyage des sols.
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
              L'organisation
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
              { value: '2', label: 'Axes de production' },
              { value: '1', label: 'Action sociale' },
              { value: '2025', label: 'Année de création' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-blue-700">
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
              src={heroImg}
              alt="Produits Miraclecleantech ASBL"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/15" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Action sociale</p>
                <p className="text-xs text-gray-400">Assistance aux personnes vulnérables</p>
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
              <p className="text-sm font-semibold text-gray-800">Hygiène des mains & sols</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Mission Cards ─────────────────────────────────────────────────────────────
const missions = [
  { icon: Shield, title: "Promouvoir l'hygiène", desc: "Sensibiliser et faciliter l'accès à des pratiques hygiéniques de qualité pour toutes les communautés.", color: "bg-green-600" },
  { icon: Globe, title: "Réduire les risques sanitaires", desc: "Contribuer à la réduction des maladies liées au manque d'hygiène par des gestes et produits utiles.", color: "bg-teal-600" },
  { icon: Heart, title: "Assister les personnes vulnérables", desc: "Placer l'accompagnement des personnes vulnérables au coeur de l'action de l'ASBL.", color: "bg-rose-500" },
  { icon: Leaf, title: "Assainir l'environnement", desc: "Améliorer le cadre de vie grâce au nettoyage et à l'assainissement des espaces.", color: "bg-blue-600" },
  { icon: Users, title: "Renforcer les bonnes pratiques", desc: "Encourager des habitudes simples et durables autour de l'hygiène et de la propreté.", color: "bg-violet-600" },
  { icon: Zap, title: "Soutenir l'action sociale", desc: "Utiliser la production de produits utiles pour soutenir durablement les activités de l'organisation.", color: "bg-amber-500" },
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
            Miraclecleantech ASBL agit pour l'hygiène, l'assainissement et l'accompagnement des personnes vulnérables.
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
              <div className={`w-12 h-12 rounded-xl ${m.color} flex items-center justify-center mb-4 shadow-md`}>
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
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Produits essentiels</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Deux familles de produits soutiennent l'action sociale de l'ASBL : l'hygiène des mains et le nettoyage des sols.
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

      {/* Final CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-blue-700 p-12 text-center overflow-hidden"
        >
          <div className="relative">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Soutenir Miraclecleantech ASBL
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Les produits d'hygiène des mains et de nettoyage des sols participent au financement d'une action sociale tournée vers les personnes vulnérables.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all duration-200"
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
