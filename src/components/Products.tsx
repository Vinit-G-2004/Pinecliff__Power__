import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Battery, Gauge, Zap } from 'lucide-react';

const products = [
  {
    icon: Battery,
    name: 'Compact DG Sets',
    capacity: '62 - 250 KVA',
    features: ['Silent Operation', 'Fuel Efficient', 'Easy Maintenance'],
  },
  {
    icon: Gauge,
    name: 'Industrial DG Sets',
    capacity: '250 - 750 KVA',
    features: ['High Performance', 'Heavy Duty', 'Extended Runtime'],
  },
  {
    icon: Zap,
    name: 'High Capacity DG Sets',
    capacity: '750 - 2000 KVA',
    features: ['Maximum Power', 'Industrial Grade', 'Continuous Operation'],
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#7CB342]">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wide range of diesel generators to power your operations
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-96 snap-center"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  className="bg-white border-2 border-gray-200 rounded-3xl p-8 h-full hover:border-[#7CB342] transition-all duration-300 group relative overflow-hidden"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#7CB342] to-[#9CCC65] rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500"
                  />

                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-[#7CB342] to-[#9CCC65] rounded-2xl flex items-center justify-center mb-6 relative z-10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <product.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">
                    {product.name}
                  </h3>

                  <div className="inline-block bg-gradient-to-r from-[#7CB342] to-[#9CCC65] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 relative z-10">
                    {product.capacity}
                  </div>

                  <ul className="space-y-3 relative z-10">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-[#7CB342] rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
