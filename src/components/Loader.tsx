import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-blue-700"
        />
        <p className="text-sm text-gray-400">Chargement...</p>
      </div>
    </div>
  );
}
