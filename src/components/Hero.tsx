import { motion } from 'motion/react';
import heroImage from "../assets/images/main.webp";
import flourish from "../assets/images/flourish.png";

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
              <img
                src={flourish}
                alt=""
                aria-hidden="true"
                className="w-48 md:w-64 h-auto mb-8 opacity-90"
              />

              <h1 className="text-4xl md:text-5xl font-serif leading-[1.35] mb-5 text-ink-900">
                Specialised <span className="italic">massage therapy</span>
              </h1>

              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-olive-700 mb-10">
                Recovery. Rehabilitation. Relaxation.
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
                  View Treatments
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
