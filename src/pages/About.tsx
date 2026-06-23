import { motion } from 'framer-motion';
import { Heart, Target, Eye, Star, Users, Leaf, Zap, Shield, BookOpen, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import founderImg from '../imgs/1.jpeg';
import whoWeAreImg from '../imgs/3.jpeg';
import { BlobDecor, DotGrid, RingDecor } from '../components/SvgDecor';
import IllustrationAbout from '../components/IllustrationAbout';

const values = [
  { icon: Heart, title: 'Dignité', desc: 'La dignité de chaque femme passe avant tout le reste.', color: 'bg-rose-500' },
  { icon: Shield, title: 'Égalité', desc: 'Les mêmes droits et les mêmes chances, pour toutes.', color: 'bg-emerald-600' },
  { icon: Users, title: 'Proximité', desc: "On agit là où l'on vit, au plus près des gens.", color: 'bg-green-700' },
  { icon: Star, title: 'Écoute', desc: "On commence toujours par écouter avant d'agir.", color: 'bg-amber-500' },
  { icon: Zap, title: 'Persévérance', desc: 'Le changement prend du temps ; nous tenons bon.', color: 'bg-violet-600' },
];

const projects = [
  {
    icon: Users,
    title: "Ateliers d'autonomisation",
    desc: "Des espaces où les femmes reprennent confiance, apprennent et décident — comme notre atelier de Bukavu sur l'autonomisation et le numérique.",
    color: 'bg-green-700',
    tag: 'Autonomisation',
  },
  {
    icon: BookOpen,
    title: 'Sensibilisation & plaidoyer',
    desc: "Causeries de quartier et plaidoyer auprès des acteurs locaux pour faire connaître et respecter les droits des femmes.",
    color: 'bg-emerald-600',
    tag: 'Droits',
  },
  {
    icon: Heart,
    title: 'Accompagnement de proximité',
    desc: "Nous écoutons, orientons et accompagnons les femmes et les familles fragilisées vers les bons relais, sans jamais juger.",
    color: 'bg-rose-500',
    tag: 'Terrain',
  },
  {
    icon: Monitor,
    title: 'Numérique responsable',
    desc: "Initier les femmes aux outils numériques et à un usage des réseaux sociaux sûr, réfléchi et utile.",
    color: 'bg-violet-600',
    tag: 'Numérique',
    link: '/formations',
  },
];

const missionItems = [
  "Défendre le droit et l'égalité des femmes",
  "Autonomiser les femmes : estime de soi, décision, opportunités",
  'Sensibiliser et faire du plaidoyer dans les communautés',
  "Former à un usage responsable du numérique",
  'Accompagner les femmes et les familles vulnérables',
  'Agir concrètement à Bukavu et dans le Sud-Kivu',
];

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 bg-gray-50 relative overflow-hidden">
        <BlobDecor className="absolute -top-20 -right-24 w-[420px] h-[420px] text-green-100/40 pointer-events-none" />
        <DotGrid className="absolute bottom-4 left-4 text-green-300/25 w-44 h-44 pointer-events-none" />
        <RingDecor className="absolute -bottom-10 -right-10 w-60 h-60 text-green-200/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold text-green-600 uppercase tracking-widest"
          >
            Notre histoire
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Nous sommes{' '}
            <span className="text-green-700">
              Miracles Actions for Women
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-500 leading-relaxed max-w-lg"
          >
            Une association née à Bukavu en 2025, décidée à faire avancer le droit et l'égalité des femmes — une rencontre, un atelier, une histoire à la fois.
          </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden lg:flex justify-center"
            >
              <IllustrationAbout className="w-full max-w-md" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={whoWeAreImg}
              alt="Miracles Actions for Women"
              className="w-full h-[480px] object-cover object-top"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Qui nous sommes</span>
            <h2 className="mt-3 text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Une association de femmes, pour les femmes
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 text-base leading-relaxed">
              <p>
                Miracles Actions for Women (MAW) est une association apolitique basée à Bukavu, dans le Sud-Kivu. Nous défendons le droit et l'égalité des femmes, et nous croyons qu'aucune communauté n'avance vraiment si la moitié de ses membres reste en arrière.
              </p>
              <p>
                Notre travail est simple et concret : organiser des ateliers, sensibiliser sur les droits, former au numérique et accompagner celles qui en ont le plus besoin. Chaque action part de l'écoute et se vit sur le terrain.
              </p>
              <p>
                Nous sommes une jeune association, mais déterminée — convaincue qu'une femme qui avance entraîne toute une communauté avec elle.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button to="/actions">Nos actions</Button>
              <Button to="/contact" variant="outline">Nous rencontrer</Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gray-50/50 relative overflow-hidden" id="mission">
        <RingDecor className="absolute -left-16 top-10 w-56 h-56 text-green-100/40 pointer-events-none" />
        <DotGrid className="absolute right-4 bottom-4 w-40 h-40 text-green-200/30 pointer-events-none" />
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
            <div className="w-14 h-14 rounded-2xl bg-green-700 flex items-center justify-center mb-6 shadow-lg">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Notre Vision</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Une société où les femmes prennent leur place pleinement : libres de décider, d'apprendre, d'entreprendre et de faire entendre leur voix, à égalité avec les hommes.
            </p>
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
              <Leaf className="w-6 h-6 text-green-400 mb-3" />
              <p className="text-white font-semibold text-sm mb-1">
                L'égalité n'est pas une faveur
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                C'est un droit. Nous travaillons pour qu'il devienne une réalité quotidienne, à Bukavu et au-delà.
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
              <div className="w-28 h-28 rounded-2xl bg-green-50 flex items-center justify-center shadow-md">
                <Users className="w-14 h-14 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Miracles Actions for Women</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Association apolitique basée à Bukavu (Sud-Kivu, RD Congo), MAW agit pour le droit et l'égalité des femmes à travers des ateliers, de la sensibilisation, des formations au numérique et un accompagnement de proximité.
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

      <SectionWrapper className="bg-gray-50/50 relative overflow-hidden">
        <BlobDecor className="absolute -right-20 -top-10 w-80 h-80 text-green-100/30 pointer-events-none" />
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Projets</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Nos initiatives</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Quatre façons d'agir, complémentaires, toutes au service du droit et de l'autonomie des femmes.
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
                <div className={`w-14 h-14 rounded-xl ${p.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <p.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{p.title}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs">{p.tag}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  {'link' in p && (
                    <Link to={p.link as string} className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors">
                      Voir les formations
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
                alt="Agathe Ishara, fondatrice de Miracles Actions for Women"
                className="w-48 h-48 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Agathe Ishara</h3>
              <p className="text-sm font-semibold text-green-600 mb-4">Fondatrice de Miracles Actions for Women</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Agathe Ishara a fondé Miracles Actions for Women en décembre 2025 à Bukavu. Partie d'un constat simple — trop de femmes restent privées de droits et d'opportunités —, elle a réuni autour d'elle une équipe décidée à changer les choses, une action à la fois.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-green-700 p-12 text-center relative overflow-hidden"
        >
          <div className="relative">
            <Heart className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-4xl font-extrabold text-white mb-4">Avançons ensemble</h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
              Vous partagez nos convictions ? Écrivez-nous pour participer à un atelier, devenir bénévole ou nouer un partenariat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-green-700 font-bold rounded-xl text-sm hover:shadow-xl hover:scale-105 transition-all duration-200">
                Nous écrire
              </Link>
              <Link to="/actions" className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all">
                Découvrir nos actions
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
