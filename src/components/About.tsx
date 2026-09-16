import { motion } from 'motion/react';
import aboutImage from "../assets/images/georgia.jpg";

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
                src={aboutImage}
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
            <h2 className="text-5xl font-serif leading-[1.35] text-ink-900 mb-6">
              Expert care in a <br/>
              <span className="italic">safe, respectful space.</span>
            </h2>

            <div className="text-sm leading-relaxed text-ink-900 opacity-80 mb-8 space-y-4">
              <p>
                My name is Georgia Acton, I&rsquo;m 28 years old. In 2019, I graduated from Isa Carstens Academy in Stellenbosch, with an international diploma in Somatology. In 2021, I set out on a global adventure, spending the past four and a half years working on five of Royal Caribbean&rsquo;s largest cruise liners.
              </p>
              <p>
                During that time, I worked with OneSpaWorld, the global leaders in the health and wellness industry, both on land and at sea. This invaluable journey enabled me to connect with thousands of people, refining my expertise in what I love most, working with the body.
              </p>
              <p>
                Now that I&rsquo;ve returned home, I couldn&rsquo;t be more excited to invite you into the calming space I&rsquo;ve created. Whether you&rsquo;re seeking pure relaxation or relief from long-held pain, I&rsquo;m here to help. Without further ado, welcome to the place I&rsquo;ve designed just for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-10 pt-8 border-t border-olive-200">
              <div className="border-l-2 border-olive-700 pl-4">
                <h4 className="font-serif text-xl italic mb-2 text-ink-900">Qualifications &amp; Experience</h4>
                <ul className="text-xs text-ink-900 opacity-70 space-y-1.5 leading-relaxed">
                  <li>3 year international diploma in Somatology.</li>
                  <li>4.5 years onboard Royal Caribbean cruise lines.</li>
                  <li>Working for OneSpaWorld, global leaders in the health and wellness industry, on land and at sea.</li>
                </ul>
              </div>
              <div className="border-l-2 border-olive-700 pl-4">
                <h4 className="font-serif text-xl italic mb-2 text-ink-900">Philosophy</h4>
                <p className="text-xs text-ink-900 opacity-70 leading-relaxed">
                  Every treatment is designed and tailored to exactly what your body needs that day. I focus on providing an outcome that promotes recovery, pain relief as well as a healthy balance of mind and body relaxation. I will always give my best to make you feel better.
                </p>
              </div>
            </div>

            <a
              href="#booking"
              className="inline-block border-b border-olive-700 text-olive-700 text-xs uppercase tracking-widest font-bold pb-1 hover:opacity-70 transition-opacity"
            >
              See availability &amp; Book
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
