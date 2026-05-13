import { motion } from 'motion/react';

const services = [
  {
    id: 'stress-release',
    title: 'Stress Release Massage',
    benefit: 'Melt away tension and calm your nervous system.',
    durations: '60 mins | 90 mins',
    price: 'From £60',
    description: 'A flowing, restorative treatment using medium pressure to quiet the mind and release surface tension. Perfect for general stress relief and promoting deep sleep.'
  },
  {
    id: 'deep-tissue',
    title: 'Deep Tissue Massage',
    benefit: 'Targeted relief for chronic pain and stiffness.',
    durations: '60 mins | 90 mins',
    price: 'From £70',
    description: 'Focused firm pressure to reach deeper layers of muscle and fascia. Ideal for athletes, desk workers, or anyone with persistent knots and restricted movement.'
  },
  {
    id: 'custom-recovery',
    title: 'Custom Recovery Session',
    benefit: 'A tailored blend of techniques for your specific needs.',
    durations: '75 mins',
    price: '£85',
    description: 'We will assess your body and create a unique session blending deep tissue, relaxation, and mobilisations to address your specific pain points.'
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
          <h2 className="text-4xl md:text-5xl font-serif text-ink-900 mb-6">
            Choose your <span className="italic">treatment</span>
          </h2>
          <p className="text-sm leading-relaxed text-ink-900 opacity-80 max-w-2xl mx-auto">
            Transparent pricing, no hidden fees. Each session includes a brief consultation to ensure the treatment is perfectly tailored to your needs today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="border-l-2 border-olive-700 pl-8 py-4 flex flex-col h-full hover:bg-sand-100 transition-colors"
            >
              <div className="mb-6 flex-grow">
                <h3 className="font-serif text-2xl italic mb-2 text-ink-900">{service.title}</h3>
                <p className="text-sm opacity-80 mb-4">{service.benefit}</p>
                <p className="text-xs font-medium text-ink-900 opacity-60 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-6 text-ink-900 text-xs uppercase tracking-widest font-semibold opacity-70">
                  <div>{service.durations}</div>
                  <div>{service.price}</div>
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
