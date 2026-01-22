import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Zap, CheckCircle, Settings, Wrench } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Quick Power',
    description: 'On-demand diesel generators delivered within 30 minutes',
  },
  {
    icon: CheckCircle,
    title: 'Load Testing',
    description: 'Comprehensive load testing to verify reliability and capacity',
  },
  {
    icon: Settings,
    title: 'DG Set on Hire / Rental',
    description: 'Flexible rental options from 62 KVA to 2000 KVA',
  },
  {
    icon: Wrench,
    title: 'Installation',
    description: 'Professional setup ensuring optimal performance and compliance',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#7CB342]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive power solutions tailored to your needs
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 snap-center"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#7CB342] to-[#9CCC65] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#7CB342] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-6 w-12 h-1 bg-gradient-to-r from-[#7CB342] to-[#9CCC65] rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
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
