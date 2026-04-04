import { motion } from 'framer-motion';
import { Heart, Target, Eye, Star, Users, Leaf, Zap, Shield } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import founderImg from '../imgs/1.jpeg';
import whoWeAreImg from '../imgs/3.jpeg';

const values = [
  { icon: Star, title: 'Qualité', desc: 'Des produits utiles, clairs et soignés.', color: 'bg-amber-500' },
  { icon: Zap, title: 'Innovation', desc: "Une approche actuelle au service de l'utilité sociale.", color: 'bg-blue-700' },
  { icon: Shield, title: 'Responsabilité', desc: 'Un engagement mené avec sérieux et cohérence.', color: 'bg-green-600' },
  { icon: Heart, title: 'Engagement', desc: "L'assistance des personnes vulnérables reste au centre.", color: 'bg-rose-500' },
  { icon: Users, title: 'Inclusion', desc: 'Une action tournée vers les communautés et les bénéficiaires.', color: 'bg-violet-600' },
];

const missionItems = [
  "Promouvoir l'hygiène dans toutes les communautés",
  "Réduire les maladies liées au manque d'hygiène",
  'Renforcer les bonnes pratiques sanitaires',
  "Assainir l'environnement",
  'Assister les personnes vulnérables',
  'Financer durablement les activités sociales',
];

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold text-green-600 uppercase tracking-widest"
          >
            Notre histoire
          </motion.span>
            <span className="mt-3 text-5xl font-extrabold text-gray-900 leading-tight">
              Nous sommes{' '}
              <span className="text-blue-700">
                Miraclecleantech ASBL
              </span>
            </span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            Une organisation créée pour assister les personnes vulnérables et promouvoir l'hygiène à travers une action utile et structurée.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={whoWeAreImg}
              alt="Miraclecleantech ASBL"
              className="rounded-3xl shadow-2xl shadow-gray-200/60 w-full h-[450px] object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Qui nous sommes</span>
            <h2 className="mt-3 text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Une organisation sociale soutenue par une production utile
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 text-base leading-relaxed">
              <p>
                Miracle Clean Tech est une ASBL engagée dans l'assistance aux personnes vulnérables, en offrant un accompagnement social et communautaire adapté à leurs besoins.
              </p>
              <p>
                Elle œuvre également pour le développement durable des communautés à travers des actions de sensibilisation, de protection de l'environnement et de promotion des initiatives locales.
              </p>
              <p>
                L'organisation propose des formations visant à renforcer les capacités, favoriser l'autonomisation et soutenir l'engagement communautaire.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button to="/products">Nos produits</Button>
              <Button to="/impact" variant="outline">Notre impact</Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50/50" id="mission">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <ul className="flex flex-col gap-3">
              {missionItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900 rounded-3xl p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-700 flex items-center justify-center mb-6 shadow-lg">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Notre Vision</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Créer un environnement sain et améliorer la santé publique grâce à des solutions d'hygiène et d'assainissement utiles, au service des personnes vulnérables et des communautés.
            </p>
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
              <Leaf className="w-6 h-6 text-green-400 mb-3" />
              <p className="text-white font-semibold text-sm mb-1">
                Un monde plus propre pour tous
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Nous visons un cadre de vie plus sain, où l'hygiène et l'assainissement participent à la dignité des personnes et au bien-être collectif.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Nos valeurs</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Ce en quoi nous croyons</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm">{value.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50/50" id="organisation">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">L'organisation</span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Repères essentiels</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left"
          >
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-blue-50 flex items-center justify-center shadow-md">
                <Users className="w-14 h-14 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Miraclecleantech ASBL</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                L'organisation intervient dans l'assistance des personnes vulnérables. Son modèle est simple : soutenir une action sociale concrète grâce à la production de produits d'hygiène des mains et de nettoyage des sols.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {['ASBL', 'Apolitique', 'Décembre 2025'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">À l'origine</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">La fondatrice</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-10 items-center bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-8"
          >
            <div className="shrink-0">
              <img
                src={founderImg}
                alt="Agathe Ishara, fondatrice de Miraclecleantech ASBL"
                className="w-48 h-48 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Agathe Ishara</h3>
              <p className="text-sm font-semibold text-green-600 mb-4">Fondatrice de Miraclecleantech ASBL</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Agathe Ishara est à l'origine de Miraclecleantech ASBL, une organisation créée en décembre 2025 à Bukavu pour assister les personnes vulnérables et promouvoir l'hygiène dans les communautés.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
