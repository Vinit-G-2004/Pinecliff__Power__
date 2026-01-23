import { motion } from 'framer-motion';
import { Instagram, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CONTACT */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Contact
              </h4>

              <div className="space-y-2 text-gray-400 text-sm leading-snug">
                <p>
                  <span className="text-gray-300 font-medium">Main Office</span><br />
                  CBD Belapur, Navi Mumbai – 400614
                </p>

                <p>
                  <span className="text-gray-300 font-medium">Workshop</span><br />
                  Ambethan, Tal-Khed, Pune – 410501
                </p>

                <p>
                  <a
                    href="tel:9604941516"
                    className="hover:text-[#7CB342] transition-colors"
                  >
                    +91 96049 41516
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:info@pinecliffpower"
                    className="hover:text-[#7CB342] transition-colors"
                  >
                    info@pinecliffpower
                  </a>
                </p>
              </div>
            </div>

            {/* SERVICES */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
                Services
              </h4>

              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-[#7CB342] transition-colors">
                  DG Set Rental
                </li>
                <li className="hover:text-[#7CB342] transition-colors">
                  Quick Power Supply
                </li>
                <li className="hover:text-[#7CB342] transition-colors">
                  Load Testing
                </li>
                <li className="hover:text-[#7CB342] transition-colors">
                  Installation & Compliance
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-4">
              <img
                src="/image.png"
                alt="Pinecliff Power"
                className="h-12 rounded-lg"
              />

              <p className="text-gray-400 text-sm leading-snug">
                Leading the power solutions industry<br />
                with reliable performance,<br />
                innovative engineering,<br />
                and operational excellence.
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/pine.cliff_power/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#7CB342] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61580171407520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#7CB342] transition-colors"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>

                <a
                  href="https://pinecliffpower.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#7CB342] transition-colors"
                >
                  <Globe className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="mt-8 flex justify-center">
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-[#7CB342] to-[#9CCC65] rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* COPYRIGHT */}
          <div className="mt-4 text-center text-gray-500 text-xs">
            © 2024 Pinecliff Power Pvt Ltd. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
