import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-warm-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <img
            src="/public/images/logo.png"
            alt="GurukulX Logo"
            className="w-10 h-10 rounded-full group-hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-xl font-bold text-charcoal tracking-tight">
            GurukulX
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Learn', 'Exchange', 'Community', 'About'].map((item) =>
          <a
            key={item}
            href={item === 'About' ? '#footer' : `#${item.toLowerCase()}`}
            className="text-charcoal/80 hover:text-charcoal font-medium transition-colors relative group">

              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-peach group-hover:w-full transition-all duration-300" />
            </a>
          )}
        </div>

        <motion.button
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}
          className="bg-lavender text-charcoal px-6 py-2.5 rounded-full font-bold shadow-sm hover:shadow-md transition-all">

          Join GuruKul 
        </motion.button>
      </div>
    </motion.nav>);

}