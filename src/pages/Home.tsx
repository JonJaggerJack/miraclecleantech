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
import { useSanityData } from '../lib/useSanity';
import { ACTIONS_QUERY } from '../lib/queries';
import heroImg from '../imgs/2.jpeg';
import { BlobDecor, DotGrid, RingDecor } from '../components/SvgDecor';

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
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
            Quand une femme avance,{' '}
            <span className="text-green-700">
              tout avance avec elle
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
          >
            À Bukavu, Miracles Actions for Women se bat pour le droit et l'égalité des femmes. Ateliers d'autonomisation, sensibilisation, numérique responsable et accompagnement : des actions simples, sur le terrain, qui changent des vies.
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

// ── Mission Cards ─────────────────────────────────────────────────────────────
const missions = [
  { icon: Users, title: "Autonomisation économique", desc: "Des formations et des activités génératrices de revenus pour rendre les femmes et les personnes vulnérables autonomes.", color: "bg-green-600" },
  { icon: Zap, title: "Éducation & capacités", desc: "Faciliter l'accès à l'éducation et renforcer les capacités des jeunes filles.", color: "bg-emerald-600" },
  { icon: Shield, title: "Droits & protection", desc: "Défendre les droits des femmes et lutter contre toutes les formes de violences.", color: "bg-rose-500" },
  { icon: Star, title: "Leadership féminin", desc: "Encourager les femmes à prendre la parole et à participer aux décisions.", color: "bg-amber-500" },
  { icon: Heart, title: "Accompagnement", desc: "Un soutien social, moral et psychologique pour les personnes vulnérables.", color: "bg-violet-600" },
  { icon: Globe, title: "Environnement", desc: "Hygiène publique, lutte contre la déforestation, tri, recyclage et réutilisation des déchets.", color: "bg-teal-600" },
];


export default function Home() {
  const featured = useSanityData(ACTIONS_QUERY, products);
  return (
    <>
      <Hero />

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
            Notre raison d'être
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-extrabold text-gray-900"
          >
            Ce pour quoi nous nous levons
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-base"
          >
            L'autonomisation de la femme est un droit, pas une faveur. C'est cette conviction qui guide chacune de nos actions.
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

      {/* Quote */}
      <section className="bg-gray-900 px-6 py-20 relative overflow-hidden">
        <RingDecor className="absolute -right-16 -top-10 w-72 h-72 text-white/5 pointer-events-none" />
        <figure className="max-w-3xl mx-auto text-center relative">
          <blockquote className="text-2xl lg:text-3xl font-semibold text-white leading-snug">
            « Une femme autonome, c'est une femme qui a accès à l'éducation, aux opportunités et à la décision. Et quand elle avance, c'est toute une communauté qui avance avec elle. »
          </blockquote>
          <figcaption className="mt-6 text-green-400 text-sm font-medium">
            — Échangé lors de notre atelier à Bukavu
          </figcaption>
        </figure>
      </section>

      {/* Featured Products */}
      <SectionWrapper className="bg-gray-50/50 relative overflow-hidden">
        <BlobDecor className="absolute -left-24 -bottom-20 w-80 h-80 text-green-100/50 pointer-events-none" />
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Nos actions</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Ce que nous faisons, concrètement</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Pas de grands discours : des ateliers, des rencontres et un accompagnement de proximité, là où les femmes en ont besoin.
          </p>
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
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Rejoignez le mouvement
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Participer à un atelier, devenir bénévole, nouer un partenariat ou simplement en parler autour de vous : chaque geste compte pour faire avancer le droit des femmes.
            </p>
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
