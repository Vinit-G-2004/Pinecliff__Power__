import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, CheckCircle2, FileCheck } from 'lucide-react';

const complianceItems = [
  {
    icon: Shield,
    title: 'Safety Standards',
    description: 'Adherence to international safety protocols',
  },
  {
    icon: Award,
    title: 'CPCB Compliant',
    description: 'Central Pollution Control Board certified',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Regular maintenance and quality checks',
  },
  {
    icon: FileCheck,
    title: 'Engineering Excellence',
    description: 'ISO certified engineering practices',
  },
];

export default function Compliance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gray-900 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #7CB342 2px, transparent 2px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Compliance & <span className="text-[#7CB342]">Standards</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Committed to excellence through rigorous safety and quality standards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-[#7CB342] transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-[#7CB342] to-[#9CCC65] rounded-xl flex items-center justify-center mb-4"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3, type: 'spring' }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <item.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </motion.div>
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#7CB342] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-[#7CB342] rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
