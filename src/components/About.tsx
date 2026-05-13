import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-sand-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 relative z-10">
              <img
                src="https://picsum.photos/seed/portrait/800/1066"
                alt="Georgia - Massage Therapist"
                className="w-full h-full object-cover rounded-t-full bg-sand-300 shadow-xl shadow-olive-900/5"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-olive-700 mb-2 block">
              About Georgia
            </span>
            <h2 className="text-5xl font-serif text-ink-900 mb-6">
              Expert care in a <br/>
              <span className="italic">safe, respectful space.</span>
            </h2>
            
            <div className="text-sm leading-relaxed text-ink-900 opacity-80 mb-8 space-y-4">
              <p>
                Hi, I'm Georgia. I believe that professional massage therapy goes beyond just working out knots — it's about resetting your nervous system and allowing your body the space it needs to heal.
              </p>
              <p>
                With extensive training in anatomy and specialized therapeutic techniques, I treat every client as an individual. Whether you're a stressed professional needing to unwind, or someone seeking relief from chronic tension, your session is entirely tailored to you.
              </p>
              <p>
                My practice is built on a philosophy of personalized care, clear boundaries, and professionalism. I don't run a generic chain spa; I provide a calm, private environment where your wellbeing is the absolute priority.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10 pt-8 border-t border-olive-200">
              <div className="border-l-2 border-olive-700 pl-4">
                <h4 className="font-serif text-xl italic mb-1 text-ink-900">Training</h4>
                <p className="text-xs text-ink-900 opacity-70">Certified Massage Therapist with specialized training in Deep Tissue and Myofascial Release.</p>
              </div>
              <div className="border-l-2 border-olive-700 pl-4">
                <h4 className="font-serif text-xl italic mb-1 text-ink-900">Philosophy</h4>
                <p className="text-xs text-ink-900 opacity-70">Outcome-based care with a focus on holistic recovery and pain relief.</p>
              </div>
            </div>

            <a
              href="#booking"
              className="inline-block border-b border-olive-700 text-olive-700 text-xs uppercase tracking-widest font-bold pb-1 hover:opacity-70 transition-opacity"
            >
              See availability & Book
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
