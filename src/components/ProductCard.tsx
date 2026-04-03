import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-600">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{product.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{product.description}</p>

        {/* Benefits */}
        <ul className="flex flex-col gap-1.5">
          {product.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-xs text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-4 border-t border-gray-50">
          <p className="text-sm font-semibold text-green-700">
            Produit au service de l'action de l'ASBL
          </p>
        </div>
      </div>
    </motion.div>
  );
}
