import { motion } from 'framer-motion';
import { BookOpen, Leaf, HandMetal, FlaskConical, Users } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const themes = [
  {
    icon: Users,
    title: 'Action sociale',
    description:
      "L'ASBL partagera des contenus sur son engagement auprès des personnes vulnérables : approche, terrain, principes.",
  },
  {
    icon: HandMetal,
    title: 'Hygiène des mains',
    description:
      "Des repères sur l\u2019importance de l\u2019hygiène des mains, les bons gestes quotidiens et leur rôle dans la prévention.",
  },
  {
    icon: Leaf,
    title: 'Assainissement',
    description:
      "Comprendre comment l'assainissement de l'environnement et le nettoyage des sols contribuent au bien-être collectif.",
  },
  {
    icon: FlaskConical,
    title: 'Produits & mission',
    description:
      "Comment les produits de l'ASBL s'inscrivent dans une logique d'utilité sociale et de financement de la mission.",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-white via-green-50/30 to-blue-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold text-green-600 uppercase tracking-widest"
          >
            Publications
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-5xl font-extrabold text-gray-900 leading-tight"
          >
            Informations &{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              repères
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-xl mx-auto"
          >
            Le blog de Miraclecleantech ASBL sera un espace de partage autour de nos domaines d'action : hygiène, assainissement, vie de l'organisation et accompagnement des personnes vulnérables.
          </motion.p>
        </div>
      </section>

      <SectionWrapper>
        {/* Intro */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Prochainement</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Les publications n'ont pas encore débuté. Ce blog a vocation à devenir un espace de réflexion et d'information sur les thématiques qui guident notre action quotidienne.
          </p>
        </div>

        {/* Themes */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {themes.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <Icon className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
