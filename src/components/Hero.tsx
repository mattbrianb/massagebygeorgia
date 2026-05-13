import { motion } from 'motion/react';
import heroImage from "../assets/images/main.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Spa room"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-sand-50/80 backdrop-blur-sm mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-sand-50/90 via-sand-50/60 to-sand-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-olive-700 mb-2 block">
                Massage by Georgia
              </span>
              <h1 className="text-6xl font-serif leading-[1.1] mb-4 text-ink-900">
                Professional therapeutic <br className="hidden md:block"/>
                <span className="italic">massage therapy.</span>
              </h1>
              <p className="text-sm leading-relaxed text-ink-900 opacity-80 max-w-sm mb-8">
                Relaxation, recovery, and pain relief — personalised to your body and your needs in a calm, private setting.
              </p>
              
              <div className="flex items-center gap-6">
                <a
                  href="#booking"
                  className="bg-olive-700 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
                >
                  Book via WhatsApp
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 text-xs uppercase tracking-widest font-bold text-olive-700 hover:opacity-70 transition-opacity"
                >
                  View Services
                </a>
              </div>
            </div>
          </motion.div>

          {/* Micro-trust signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-8 text-sm text-ink-700"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-olive-500"></span>
              Qualified Therapist
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-olive-500"></span>
              By Appointment Only
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-olive-500"></span>
              Private & Professional
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
