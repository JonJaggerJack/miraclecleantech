import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '../data/misc';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
            openId === faq.id
              ? 'border-green-200 shadow-lg shadow-green-50'
              : 'border-gray-100 shadow-sm hover:border-gray-200'
          }`}
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between p-6 text-left gap-4"
          >
            <span className={`font-semibold text-sm leading-snug transition-colors ${
              openId === faq.id ? 'text-green-700' : 'text-gray-800'
            }`}>
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                openId === faq.id ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
