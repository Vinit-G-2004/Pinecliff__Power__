import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* CHANGE IS HERE */}
      <div className="container mx-auto px-6 flex justify-center">
        <motion.img
          src="/image.png"
          alt="Pinecliff Power"
          className={`transition-all duration-300 rounded-xl ${
            scrolled ? 'h-12' : 'h-16'
          }`}
          animate={{ scale: scrolled ? 0.9 : 1 }}
        />
      </div>
    </motion.nav>
  );
}
