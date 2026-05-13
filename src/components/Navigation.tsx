import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-sand-50/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-xl font-serif tracking-tight font-bold text-ink-900 leading-none">
            Massage <span className="font-normal italic">by</span> Georgia
          </a>

          <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-semibold opacity-70 text-ink-900">
            <a href="#services" className="hover:text-olive-600 transition-colors">Treatments</a>
            <a href="#about" className="hover:text-olive-600 transition-colors">About</a>
            <a 
              href="#booking" 
              className="bg-olive-900 text-white px-6 py-2.5 rounded-full hover:bg-olive-800 transition-colors shadow-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
