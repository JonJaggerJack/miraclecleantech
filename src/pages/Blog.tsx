import { motion } from 'framer-motion';
import { BookOpen, Scale, Smartphone, HeartHandshake, Users } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import IllustrationBlog from '../components/IllustrationBlog';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blog';
import { BlobDecor, DotGrid } from '../components/SvgDecor';

const themes = [
  {
    icon: Users,
    title: 'Autonomisation',
    description:
      "Des récits d'ateliers et de rencontres, et ce que l'autonomie change concrètement dans la vie des femmes.",
  },
  {
    icon: Scale,
    title: 'Droits & égalité',
    description:
      "Connaître ses droits, c’est déjà commencer à les défendre : nos repères et nos actions de plaidoyer pour l’égalité.",
  },
  {
    icon: Smartphone,
    title: 'Numérique responsable',
    description:
      "Des conseils simples pour utiliser internet et les réseaux sociaux de façon utile, réfléchie et sûre.",
  },
  {
    icon: HeartHandshake,
    title: "Vie de l'association",
    description:
      "Les coulisses de MAW : nos équipes, nos partenaires et les moments forts sur le terrain à Bukavu.",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gray-50 relative overflow-hidden">
        <BlobDecor className="absolute -right-24 -top-16 w-[440px] h-[440px] text-green-100/40 pointer-events-none" />
        <DotGrid className="absolute bottom-6 left-6 text-green-300/30 w-44 h-44 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <span className="text-green-700">
              repères
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-500 max-w-xl"
          >
            Le blog de Miracles Actions for Women : nos ateliers, nos combats pour les droits des femmes, nos conseils sur le numérique et la vie de l'association à Bukavu.
          </motion.p>
            </div>
            {/* Right – illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hidden lg:flex justify-center"
            >
              <IllustrationBlog className="w-full max-w-md" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <SectionWrapper>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Nos publications</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Derniers articles</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* Thèmes */}
      <SectionWrapper className="bg-gray-50/50">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Nos thématiques</h2>
          <p className="text-gray-500 leading-relaxed">
            Les sujets qui guident notre action quotidienne et nos prochaines publications.
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
              <div className="shrink-0 w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
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
