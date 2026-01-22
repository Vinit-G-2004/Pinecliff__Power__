import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const highlights = [
  {
    title: 'Years of Trusted Generator Rental Solutions',
    description: 'For the past 15 years, Pinecliff Power Pvt Ltd has been Pune\'s trusted leader in diesel generator rentals.',
  },
  {
    title: 'Focused on Solutions',
    description: 'Continuous learning is ingrained in our process, ensuring we optimize our problem-solving efficiency.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-[#7CB342]">Pinecliff Power</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are pleased to introduce ourselves as a premier engineering solutions company
            specializing in comprehensive power solutions, supported by extensive technical
            and technological expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#7CB342] to-[#9CCC65] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-[#7CB342] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                whileHover={{ scale: 1.2 }}
              />

              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
