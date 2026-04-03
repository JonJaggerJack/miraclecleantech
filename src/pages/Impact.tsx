import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, BookOpen, Droplets, Sun, TreePine } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

// Animated counter hook
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(false);

  const start = () => {
    if (ref.current) return;
    ref.current = true;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(progress * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
  };

  return { count, start };
}

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  label: string;
  color: string;
  index: number;
}

function StatCard({ icon: Icon, value, suffix = '', label, color, index }: StatCardProps) {
  const { count, start } = useCounter(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onViewportEnter={() => start()}
      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <p className="text-4xl font-extrabold text-gray-900 mb-1">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-gray-500">{label}</p>
    </motion.div>
  );
}

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Familles bénéficiaires', color: 'from-blue-500 to-blue-600' },
  { icon: Heart, value: 5, suffix: '', label: 'Orphelinats partenaires', color: 'from-rose-500 to-pink-600' },
  { icon: BookOpen, value: 20, suffix: '+', label: 'Sessions d\'éducation', color: 'from-violet-500 to-purple-600' },
  { icon: Droplets, value: 500, suffix: '+', label: 'Kits hygiène distribués', color: 'from-green-500 to-teal-600' },
  { icon: Leaf, value: 3, suffix: '', label: 'Actions éco-responsables', color: 'from-emerald-500 to-green-600' },
  { icon: Sun, value: 100, suffix: '%', label: 'Fabriqué localement', color: 'from-amber-500 to-orange-600' },
];

const projects = [
  {
    icon: Heart,
    title: 'Programme Orphelins',
    desc: 'Distribution mensuelle de kits d\'hygiène dans 5 orphelinats partenaires. Nos équipes visitent régulièrement ces établissements pour s\'assurer de l\'utilisation correcte des produits.',
    color: 'from-rose-500 to-pink-600',
    tag: 'Social',
  },
  {
    icon: BookOpen,
    title: 'Éducation à l\'Hygiène',
    desc: 'Ateliers et formations dans les écoles primaires et secondaires. Nous croyons que l\'éducation est la clé d\'une société plus saine. Plus de 20 sessions animées depuis notre création.',
    color: 'from-blue-500 to-indigo-600',
    tag: 'Éducation',
  },
  {
    icon: Leaf,
    title: 'Assainissement Environnemental',
    desc: 'Organisation de journées de nettoyage communautaires en partenariat avec les autorités locales. Nous sensibilisons également à la gestion des déchets et à la salubrité.',
    color: 'from-green-500 to-teal-600',
    tag: 'Environnement',
  },
  {
    icon: TreePine,
    title: 'Formulations Éco-responsables',
    desc: 'Développement de produits biodégradables qui nettoient efficacement sans polluer les nappes phréatiques ni nuire à la biodiversité. Un engagement fort envers notre planète.',
    color: 'from-emerald-500 to-green-600',
    tag: 'Eco-conception',
  },
];

export default function Impact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white via-green-50/30 to-blue-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-green-600 uppercase tracking-widest">
            Notre impact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Des actions concrètes,{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              un impact réel
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
          >
            Chaque produit MCT vendu concourt à financer nos actions sociales et environnementales. 
            Voici ce que nous accomplissons ensemble.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Chiffres clés</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Notre impact en chiffres</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Projects */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Projets</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Nos initiatives</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Nous agissons sur plusieurs fronts pour créer un impact durable dans nos communautés.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs">{p.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Social */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>
          <div className="relative">
            <Heart className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-4xl font-extrabold text-white mb-4">Soutenez notre cause</h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
              En achetant nos produits ou en faisant un don, vous contribuez directement 
              à améliorer les conditions sanitaires des enfants orphelins et des communautés vulnérables.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-white text-rose-600 font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all duration-200">
                Faire un don
              </a>
              <a href="/products" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all">
                Acheter & aider
              </a>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
