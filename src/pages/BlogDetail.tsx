import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react';
import { blogPosts } from '../data/blog';
import BlogCard from '../components/BlogCard';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Article non trouvé</h2>
          <Link to="/blog" className="text-green-600 hover:underline">← Retour au blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero image */}
      <div className="relative h-96 lg:h-[480px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-green-600 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Retour au blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} de lecture</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Article content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose max-w-none"
        >
          <p className="text-lg text-gray-500 leading-relaxed font-medium mb-6">{post.excerpt}</p>
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line text-base">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Articles similaires</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <BlogCard key={p.id} post={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
