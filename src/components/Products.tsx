import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const products = [
  {
    name: '1500 kVA Cummins Diesel Generator – K50 Series',
    image: 'products/1.jpeg',
  },
  {
    name: 'Cummins 1010 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/2.jpeg',
  },
  {
    name: 'Cummins 125 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/3.jpeg',
  },
   {
    name: 'Cummins 1500 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/4.jpeg',
  },
   {
    name: 'Cummins 225 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/5.jpeg',
  },
   {
    name: 'Cummins 250 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/6.jpeg',
  },
   {
    name: 'Cummins 320 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/7.jpeg',
  },
   {
    name: 'Cummins 500 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/8.jpeg',
  },
   {
    name: 'Cummins 750 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/9.jpeg',
  },
   {
    name: 'Cummins 900 kVA Diesel Generator (CPCB II & CPCB IV)',
    image: '/products/10.jpeg',
  },
  // add remaining products (up to 10) same format
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
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
                  className="bg-white border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-[#7CB342] transition-all duration-300 group"
                  whileHover={{ y: -10 }}
                >
                  {/* PRODUCT IMAGE (ADDED) */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* PRODUCT NAME */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#7CB342] transition-colors">
                      {product.name}
                    </h3>
                  </div>
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
