import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, BookOpen, Droplets, Shield } from 'lucide-react';
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
  { icon: Users, value: 2, suffix: '', label: 'Pôles d\'intervention', color: 'from-blue-500 to-blue-600' },
  { icon: Droplets, value: 2, suffix: '', label: 'Produits clés', color: 'from-green-500 to-teal-600' },
  { icon: Heart, value: 1, suffix: '', label: 'Action sociale centrale', color: 'from-rose-500 to-pink-600' },
  { icon: Shield, value: 2025, suffix: '', label: 'Année de création', color: 'from-violet-500 to-purple-600' },
];

const projects = [
  {
    icon: Heart,
    title: 'Assistance aux personnes vulnérables',
    desc: 'L\'organisation concentre son action sur l\'accompagnement des personnes vulnérables à travers une approche sociale, préventive et utile.',
    color: 'from-rose-500 to-pink-600',
    tag: 'Mission',
  },
  {
    icon: BookOpen,
    title: 'Promotion de l\'hygiène',
    desc: 'Miraclecleantech ASBL met l\'accent sur la sensibilisation et les bonnes pratiques sanitaires afin de réduire les risques liés au manque d\'hygiène.',
    color: 'from-blue-500 to-indigo-600',
    tag: 'Éducation',
  },
  {
    icon: Leaf,
    title: 'Assainissement du cadre de vie',
    desc: 'L\'amélioration du cadre de vie passe par des actions simples autour du nettoyage des sols et d\'un environnement plus sain pour tous.',
    color: 'from-green-500 to-teal-600',
    tag: 'Environnement',
  },
  {
    icon: Users,
    title: 'Production au service de la mission',
    desc: 'La production de produits d\'hygiène des mains et de nettoyage des sols permet de financer durablement les activités sociales de l\'ASBL.',
    color: 'from-emerald-500 to-green-600',
    tag: 'Produits',
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
            Des actions concrètes pour{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              les communautés
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
          >
            L'action de Miraclecleantech ASBL s'organise autour de l'assistance, de l'hygiène et de l'assainissement.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Chiffres clés</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Nos repères essentiels</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            L'organisation intervient sur des axes directement liés à sa mission d'assistance, d'hygiène et d'assainissement.
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

      {/* CTA */}
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
            <h2 className="text-4xl font-extrabold text-white mb-4">Soutenir l'action de l'ASBL</h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
              Les produits d'hygiène des mains et de nettoyage des sols participent au financement des activités de Miraclecleantech ASBL.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-white text-rose-600 font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all duration-200">
                Nous écrire
              </a>
              <a href="/products" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all">
                Découvrir les produits
              </a>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
