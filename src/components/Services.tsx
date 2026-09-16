import { motion } from 'motion/react';

const standardPricing = [
  { duration: '30 mins', price: 'R300' },
  { duration: '60 mins', price: 'R550' },
  { duration: '90 mins', price: 'R750' }
];

const services = [
  {
    id: 'sports',
    title: 'Sports Massage',
    pricing: standardPricing,
    description: 'Sports massage is a targeted treatment designed to relieve muscle tension, improve mobility, speed up recovery, and enhance performance, whether you’re training hard, recovering from injury, or simply feeling tight and overworked.'
  },
  {
    id: 'deep-tissue',
    title: 'Deep Tissue Massage',
    pricing: standardPricing,
    description: 'A therapeutic treatment, releasing chronic pain and restoring mobility to the body. Slow, firm and targeted techniques, eliminating the build up of lactic acid.'
  },
  {
    id: 'stress-release',
    title: 'Stress Release Massage',
    pricing: standardPricing,
    description: 'A deeply soothing treatment designed for both mind and body. Improving the circulation, reducing tension and calming the nervous system. Shifting the body from a state of stress to relaxation.'
  },
  {
    id: 'lymph-drainage',
    title: 'Manual Lymph Drainage Massage',
    pricing: [
      { duration: '60 mins', price: 'R550' }
    ],
    description: 'This slow, light, specialized technique, uses rhythmic strokes to stimulate the lymph lying just under the skin. Reducing fluid buildup and removing metabolic waste from the body.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-sand-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-olive-700 mb-2 block">
            Treatments
          </span>
          <h2 className="text-4xl md:text-5xl font-serif leading-[1.35] text-ink-900 mb-6">
            Choose your <span className="italic">treatment</span>
          </h2>
          <p className="text-sm leading-relaxed text-ink-900 opacity-80 max-w-2xl mx-auto">
            Transparent pricing, no hidden fees. Each session includes a brief consultation to ensure the treatment is perfectly tailored to your needs today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-l-2 border-olive-700 pl-8 pr-8 py-6 flex flex-col h-full hover:bg-sand-100 transition-colors"
            >
              <div className="mb-6 flex-grow">
                <h3 className="font-serif text-2xl italic mb-3 text-ink-900">{service.title}</h3>
                <p className="text-sm text-ink-900 opacity-80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="mb-6 pt-5 border-t border-sand-300 flex flex-col gap-2">
                  {service.pricing.map((tier) => (
                    <div
                      key={tier.duration}
                      className="flex justify-between items-baseline text-ink-900 text-xs uppercase tracking-widest font-semibold opacity-70"
                    >
                      <span>{tier.duration}</span>
                      <span>{tier.price}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`#booking`}
                  className="inline-block border-b border-olive-700 text-olive-700 text-xs uppercase tracking-widest font-bold pb-1 hover:opacity-70 transition-opacity"
                >
                  Book this massage
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
