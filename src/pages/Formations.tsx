import { motion } from 'framer-motion';
import { Monitor, Table2, BarChart3, BrainCircuit, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import IllustrationTech from '../components/IllustrationTech';
import { BlobDecor, DotGrid, RingDecor } from '../components/SvgDecor';

const formations = [
  {
    icon: Monitor,
    title: 'Informatique de base',
    tag: 'Fondamentaux',
    color: 'bg-blue-700',
    duration: 'Module 1',
    desc: "Prise en main de l'ordinateur, navigation sur internet, gestion des fichiers et dossiers, notions de sécurité numérique.",
    points: [
      'Utilisation du clavier et de la souris',
      'Navigation web et messagerie électronique',
      'Gestion de fichiers et stockage',
      'Sécurité et bonnes pratiques en ligne',
    ],
  },
  {
    icon: Table2,
    title: 'Outils bureautiques',
    tag: 'Pratique',
    color: 'bg-green-600',
    duration: 'Module 2',
    desc: 'Maîtrise des logiciels essentiels pour le travail de bureau : traitement de texte, tableur et présentation.',
    points: [
      'Traitement de texte (Word / LibreOffice)',
      'Tableur et calculs de base (Excel)',
      'Création de présentations (PowerPoint)',
      'Mise en forme et impression de documents',
    ],
  },
  {
    icon: BarChart3,
    title: 'Collecte & analyse de données',
    tag: 'Analytique',
    color: 'bg-violet-600',
    duration: 'Module 3',
    desc: 'Méthodologie de collecte de données terrain, organisation et analyse simple pour appuyer la prise de décision.',
    points: [
      'Conception de formulaires de collecte',
      'Saisie et nettoyage des données',
      'Analyse et visualisation avec tableur',
      'Lecture et interprétation des résultats',
    ],
  },
  {
    icon: BrainCircuit,
    title: "Initiation à l'intelligence artificielle",
    tag: 'Innovation',
    color: 'bg-rose-500',
    duration: 'Module 4',
    desc: "Découverte des concepts fondamentaux de l'IA, de ses usages pratiques et de ses enjeux pour les communautés.",
    points: [
      "Qu'est-ce que l'intelligence artificielle ?",
      "Outils d'IA accessibles au quotidien",
      "Cas d'usage concrets dans le contexte local",
      "Enjeux éthiques et limites de l'IA",
    ],
  },
];

const whyItems = [
  "Renforcer les capacités des membres de la communauté",
  "Favoriser l'autonomisation numérique",
  "Ouvrir de nouvelles perspectives professionnelles",
  "Soutenir les activités sociales de l'ASBL",
];

export default function Formations() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gray-50 relative overflow-hidden">
        <BlobDecor className="absolute -top-16 -left-24 w-[420px] h-[420px] text-blue-100/35 pointer-events-none" />
        <DotGrid className="absolute bottom-8 right-8 text-green-300/25 w-44 h-44 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold text-green-600 uppercase tracking-widest"
          >
            Branche technologique
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Formations{' '}
            <span className="text-blue-700">professionnelles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-500 leading-relaxed max-w-lg"
          >
            Miraclecleantech ASBL accompagne les communautés vers l'autonomisation numérique à travers des formations pratiques et accessibles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button to="/contact">S'inscrire à une formation</Button>
            <Button to="/about" variant="outline">En savoir plus</Button>
          </motion.div>
            </div>
            {/* Right – illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden lg:flex justify-center"
            >
              <IllustrationTech className="w-full max-w-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formations grid */}
      <SectionWrapper className="relative overflow-hidden">
        <RingDecor className="absolute -right-16 top-8 w-56 h-56 text-blue-100/40 pointer-events-none" />
        <DotGrid className="absolute left-0 bottom-0 w-40 h-40 text-green-200/35 pointer-events-none" />
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Programme</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Les 4 modules</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Un parcours progressif conçu pour développer des compétences numériques concrètes et durables.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {formations.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900 text-lg">{f.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs">{f.tag}</span>
                    <span className="text-xs text-gray-400">{f.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.desc}</p>
              <ul className="flex flex-col gap-2">
                {f.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pourquoi ces formations */}
      <SectionWrapper className="bg-gray-50/50 relative overflow-hidden">
        <BlobDecor className="absolute -left-20 -bottom-16 w-72 h-72 text-green-100/50 pointer-events-none" />
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Notre approche</span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900">
              Pourquoi ces formations ?
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Ces formations s'inscrivent directement dans la mission de Miraclecleantech ASBL : renforcer les communautés par des actions concrètes et durables.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm"
          >
            <ul className="flex flex-col gap-5">
              {whyItems.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-4 h-4 text-blue-700" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-blue-700 p-12 text-center relative overflow-hidden"
        >
          <BrainCircuit className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Intéressé par nos formations ?
          </h2>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Contactez-nous pour connaître les prochaines sessions, les modalités et les conditions d'accès.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Nous contacter
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all"
            >
              À propos de l'ASBL
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
