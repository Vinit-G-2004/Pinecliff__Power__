import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/image.png" alt="Pinecliff Power" className="h-16 rounded-xl" />

          <p className="text-gray-400 text-center max-w-2xl">
            Leading the power solutions industry with reliability, innovation, and excellence
          </p>

          <div className="flex items-center space-x-2 text-gray-500 text-sm">
            <span>&copy; 2024 Pinecliff Power Pvt Ltd.</span>
            <span>•</span>
            <span>All Rights Reserved</span>
          </div>

          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-[#7CB342] to-[#9CCC65] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </footer>
  );
}
