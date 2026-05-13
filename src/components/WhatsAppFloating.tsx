import { MessageCircle } from 'lucide-react';
import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

export default function WhatsAppFloating() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      // Show button after scrolling down 300px
      setIsVisible(latest > 300);
    });
  }, [scrollY]);

  const whatsappNumber = "+27794808977"; // Replace with actual number
  const message = encodeURIComponent("Hi Georgia, I'd like to book a massage.\nService: \nPreferred day/time: ");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-olive-700 text-white p-4 rounded-full shadow-lg shadow-olive-900/30 hover:opacity-90 hover:scale-110 transition-all flex items-center justify-center group"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle size={28} />
      {/* Tooltip on hover for desktop */}
      <span className="absolute right-full mr-4 bg-ink-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Book an appointment
      </span>
    </motion.a>
  );
}
