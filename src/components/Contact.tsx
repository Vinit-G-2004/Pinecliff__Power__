import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Main Office',
    details: ['NMS Titanium, Plot No. 74, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614, India'],
  },
    {
    icon: MapPin,
    title: 'Workshop',
    details: ['Pinecliff Power Pvt Ltd', 'Ambethan, Tal-Khed, Pune', 'Maharashtra – 410501, India'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['96049 41516'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@pinecliffpower'],
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #7CB342 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="text-[#7CB342]">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for reliable power solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 text-center h-full hover:border-[#7CB342] transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#7CB342] rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500"
                />

                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[#7CB342] to-[#9CCC65] rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <info.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                  {info.title}
                </h3>

                <div className="space-y-2 relative z-10">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[#7CB342] to-[#9CCC65] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Power Your Success
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
