import { motion } from 'motion/react';
import { MapPin, MessageCircle, Clock, CalendarCheck } from 'lucide-react';

export default function Booking() {
  const whatsappNumber = "27794808977"; // Replace with actual number
  const message = encodeURIComponent("Hi Georgia, I'd like to book a massage.\nService: \nPreferred day/time: ");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="booking" className="py-24 bg-sand-50 relative overflow-hidden text-ink-900 border-t border-sand-200">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-olive-700 mb-2 block">
              Book Your Session
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-ink-900 mb-6">
              Ready to <span className="italic">relax?</span>
            </h2>
            <p className="text-sm leading-relaxed opacity-80 max-w-2xl mx-auto">
              Booking is simple and direct. No endless forms or account creation—just send a message to check availability and secure your time.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            
            {/* How it works */}
            <div className="md:col-span-2 space-y-8">
              <h3 className="text-2xl font-serif text-ink-900 mb-6 italic">How booking works</h3>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-olive-700 flex-shrink-0 font-serif text-xl border border-olive-200">1</div>
                <div>
                  <h4 className="font-semibold text-sm mb-1 uppercase tracking-wider text-ink-900">Send a message</h4>
                  <p className="text-xs opacity-80 leading-relaxed">Message via WhatsApp with your preferred service and general time preference.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-olive-700 flex-shrink-0 font-serif text-xl border border-olive-200">2</div>
                <div>
                  <h4 className="font-semibold text-sm mb-1 uppercase tracking-wider text-ink-900">Confirm exact time</h4>
                  <p className="text-xs opacity-80 leading-relaxed">I'll reply quickly with available slots to finalize your appointment.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center text-olive-700 flex-shrink-0 font-serif text-xl border border-olive-200">3</div>
                <div>
                  <h4 className="font-semibold text-sm mb-1 uppercase tracking-wider text-ink-900">Arrive & relax</h4>
                  <p className="text-xs opacity-80 leading-relaxed">Come to the private studio at your scheduled time and begin your recovery.</p>
                </div>
              </div>
            </div>

            {/* Action Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 bg-olive-700 rounded-[32px] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-olive-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-8 text-sand-50">Request an appointment</h3>
                
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-sand-50 text-olive-900 py-4 px-8 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-sand-200 transition-colors mb-8 shadow-lg shadow-black/10"
                >
                  <MessageCircle size={20} />
                  Book via WhatsApp
                </a>

                <div className="grid sm:grid-cols-2 gap-8 text-sand-100/80">
                  <div>
                    <h4 className="text-sand-50 font-medium mb-3 flex items-center gap-2">
                      <MapPin size={18} /> Location
                    </h4>
                    <p className="text-sm font-light leading-relaxed">
                      Shop 2, Imbabala Park,<br/>
                      33 Macfarlane Drive, Durban, KZN<br/>
                      <span className="text-xs mt-2 block opacity-70">Private setting, exact details provided upon booking confirmation.</span>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sand-50 font-medium mb-3 flex items-center gap-2">
                      <Clock size={18} /> Hours
                    </h4>
                    <ul className="text-sm flex flex-col gap-1 font-light">
                      <li className="flex justify-between"><span>Mon - Fri:</span> <span>9am - 7pm</span></li>
                      <li className="flex justify-between"><span>Saturday:</span> <span>9am - 5pm</span></li>
                      <li className="flex justify-between opacity-50"><span>Sunday:</span> <span>Based on booking</span></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-olive-800 text-xs font-light text-sand-200/60 leading-relaxed">
                  <strong className="block mb-1 text-sand-200">Cancellation Policy</strong>
                  Please provide 24 hours notice for any cancellations. Cancellations within 24 hours may be subject to a 50% fee. By making a booking, you agree to these terms.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
