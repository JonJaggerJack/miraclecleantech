import { motion } from 'framer-motion';
import { Heart, Target, Eye, Star, Users, Leaf, Zap, Shield, Award, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

const values = [
  { icon: Star, title: 'Qualité', desc: 'Chaque produit est conçu avec les meilleures formulations et testé rigoureusement.', color: 'from-amber-400 to-orange-500' },
  { icon: Zap, title: 'Innovation', desc: 'Nous exploitons les technologies modernes pour créer des solutions toujours plus efficaces.', color: 'from-blue-400 to-indigo-500' },
  { icon: Shield, title: 'Responsabilité', desc: 'Nous assumons notre rôle envers nos clients, notre communauté et notre planète.', color: 'from-green-400 to-teal-500' },
  { icon: Heart, title: 'Engagement', desc: 'Notre engagement envers la santé publique est au cœur de chacune de nos décisions.', color: 'from-rose-400 to-pink-500' },
  { icon: Users, title: 'Inclusion', desc: 'Nous concevons pour tous : familles, écoles, orphelinats, entreprises.', color: 'from-violet-400 to-purple-500' },
];

const timeline = [
  { date: 'Décembre 2025', title: 'Fondation de MCT', desc: 'Un groupe de femmes engagées crée Miracle Clean Tech avec la vision de transformer la santé publique.' },
  { date: 'Janvier 2026', title: 'Premiers produits lancés', desc: 'Lancement de la gamme initiale : savon hygiénique, désinfectant et gel hydroalcoolique.' },
  { date: 'Février 2026', title: 'Programme social lancé', desc: 'Démarrage des partenariats avec 5 orphelinats pour des dons réguliers de kits d\'hygiène.' },
  { date: 'Mars 2026', title: 'Extension de la gamme', desc: 'Ajout de la lessive écologique et du kit scolaire. Premières formations en hygiène en milieu scolaire.' },
  { date: 'Avril 2026', title: 'Site web & présence digitale', desc: 'Lancement du site web officiel et développement de la présence en ligne pour toucher plus de communautés.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-white via-green-50/30 to-blue-50/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative">
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
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Miracle Clean Tech
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            Une entreprise née de la conviction que l'hygiène est un droit fondamental, 
            fondée par des femmes qui ont décidé de changer les choses.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=700&q=80"
              alt="Fondatrices MCT"
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
              Nées pour transformer l'hygiène locale
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 text-base leading-relaxed">
              <p>
                Miracle Clean Tech (MCT) est une entreprise innovante spécialisée dans la fabrication 
                de produits d'hygiène et de nettoyage. Fondée en décembre 2025 par un groupe de femmes 
                passionnées et engagées, MCT est née d'une constatation simple : des milliers de familles 
                n'ont pas accès à des produits d'hygiène de qualité abordables.
              </p>
              <p>
                Nous avons décidé de changer cela. Avec les technologies modernes et un profond respect 
                pour nos communautés, nous fabriquons des produits qui nettoient efficacement, respectent 
                les peaux sensibles et s'intègrent dans tous les budgets.
              </p>
              <p>
                MCT est une entreprise strictement <strong className="text-gray-700">apolitique</strong>. 
                Notre seul agenda est la santé publique et l'inclusion sociale.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button to="/products">Nos produits</Button>
              <Button to="/impact" variant="outline">Notre impact</Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission / Vision */}
      <SectionWrapper className="bg-gray-50/50" id="mission">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6 shadow-lg">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <ul className="flex flex-col gap-3">
              {[
                'Promouvoir l\'hygiène dans toutes les communautés',
                'Réduire les maladies liées au manque d\'hygiène',
                'Renforcer les bonnes pratiques sanitaires',
                'Assainir l\'environnement',
                'Améliorer le bien-être des enfants orphelins',
                'Contribuer au développement local',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Notre Vision</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              Créer un environnement sain et améliorer la santé publique grâce à des solutions 
              d'hygiène innovantes, accessibles à toutes les couches de la société.
            </p>
            <div className="p-5 rounded-2xl bg-white/10 border border-white/10">
              <Leaf className="w-6 h-6 text-green-400 mb-3" />
              <p className="text-white font-semibold text-sm mb-1">
                Un monde plus propre pour tous
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Nous imaginons un futur où chaque enfant, chaque famille, chaque communauté 
                a accès à une hygiène digne, quels que soient ses moyens.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Nos valeurs</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Ce en quoi nous croyons</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                <v.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm">{v.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Founder */}
      <SectionWrapper className="bg-gray-50/50" id="team">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Les fondatrices</span>
            <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Un groupe de femmes engagées</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center text-center md:text-left"
          >
            <div className="flex-shrink-0">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center shadow-md">
                <Users className="w-14 h-14 text-green-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold text-amber-600">Fondatrices</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Groupe fondateur MCT</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Miracle Clean Tech a été fondée par un groupe de femmes déterminées, unies par 
                une même vision : mettre leurs compétences et leur passion au service de la santé 
                publique. Leur force collective, leur créativité et leur engagement sans faille 
                sont le vrai moteur de MCT.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {['Leadership féminin', 'Entrepreneuriat social', 'Innovation locale'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-widest">Notre parcours</span>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900">Timeline MCT</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-400 to-blue-500" />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.date}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="relative flex-shrink-0 w-12 flex justify-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center shadow-md z-10">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex-1 mb-2">
                    <span className="text-xs font-semibold text-green-600">{item.date}</span>
                    <h4 className="font-bold text-gray-900 mt-1 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
