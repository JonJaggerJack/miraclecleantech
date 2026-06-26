import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Zap, Heart, Users, Globe,
  Star, ChevronRight,
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { products } from '../data/products';
import { homeContent, type HomeContent } from '../data/home';
import { useSanityData } from '../lib/useSanity';
import { useMergedContent } from '../lib/useMergedContent';
import { ACTIONS_QUERY, HOME_QUERY } from '../lib/queries';
import heroImg from '../imgs/2.jpeg';
import { BlobDecor, DotGrid, RingDecor } from '../components/SvgDecor';

// Présentation (icône + couleur) des cartes mission, fusionnée par position
// avec les textes éditables.
const missionStyles = [
  { icon: Users, color: 'bg-green-600' },
  { icon: Zap, color: 'bg-emerald-600' },
  { icon: Shield, color: 'bg-rose-500' },
  { icon: Star, color: 'bg-amber-500' },
  { icon: Heart, color: 'bg-violet-600' },
  { icon: Globe, color: 'bg-teal-600' },
];

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ c }: { c: HomeContent }) {
  return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50">
      {/* Decorative background */}
      <BlobDecor className="absolute -top-20 -right-32 w-[520px] h-[520px] text-green-100/50 pointer-events-none" />
      <DotGrid className="absolute bottom-24 left-0 text-green-300/30 w-52 h-52 pointer-events-none" />
      <RingDecor className="absolute top-1/3 -left-28 w-72 h-72 text-green-200/25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            {c.heroTitleStart}{' '}
            <span className="text-green-700">{c.heroTitleHighlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
          >
            {c.heroIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button to="/actions" size="lg">
              Découvrir nos actions
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/about" variant="outline" size="lg">
              Qui nous sommes
            </Button>
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
              alt="Femmes accompagnées par Miracles Actions for Women à Bukavu"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/15" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  const c = useMergedContent<HomeContent>(HOME_QUERY, homeContent);
  const featured = useSanityData(ACTIONS_QUERY, products);

  return (
    <>
      <Hero c={c} />

      {/* Mission Section */}
      <SectionWrapper className="bg-white relative overflow-hidden">
        <RingDecor className="absolute -right-20 top-10 w-64 h-64 text-green-100/40 pointer-events-none" />
        <DotGrid className="absolute left-0 bottom-0 w-40 h-40 text-green-200/40 pointer-events-none" />
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-green-600 uppercase tracking-widest"
          >
            {c.missionKicker}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-extrabold text-gray-900"
          >
            {c.missionTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-base"
          >
            {c.missionIntro}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.missions.map((m, i) => {
            const s = missionStyles[i % missionStyles.length];
            const Icon = s.icon;
            return (
              <motion.div
                key={m.title + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-gray-100/70 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{m.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Quote */}
      <section className="bg-gray-900 px-6 py-20 relative overflow-hidden">
        <RingDecor className="absolute -right-16 -top-10 w-72 h-72 text-white/5 pointer-events-none" />
        <figure className="max-w-3xl mx-auto text-center relative">
          <blockquote className="text-2xl lg:text-3xl font-semibold text-white leading-snug">
            {c.quoteText}
          </blockquote>
          <figcaption className="mt-6 text-green-400 text-sm font-medium">
            {c.quoteAttribution}
          </figcaption>
        </figure>
      </section>

      {/* Featured actions */}
      <SectionWrapper className="bg-gray-50/50 relative overflow-hidden">
        <BlobDecor className="absolute -left-24 -bottom-20 w-80 h-80 text-green-100/50 pointer-events-none" />
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">{c.actionsKicker}</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">{c.actionsTitle}</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">{c.actionsIntro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.slice(0, 3).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Button to="/actions" variant="outline" size="lg">
            Voir toutes nos actions
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
          className="relative rounded-3xl bg-green-700 p-12 text-center overflow-hidden"
        >
          <BlobDecor className="absolute -top-16 -right-20 w-72 h-72 text-white/10 pointer-events-none" />
          <RingDecor className="absolute -bottom-12 -left-16 w-60 h-60 text-white/10 pointer-events-none" />
          <div className="relative">
            <h2 className="text-4xl font-extrabold text-white mb-4">{c.ctaTitle}</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">{c.ctaText}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/actions"
                className="px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Voir nos actions
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
