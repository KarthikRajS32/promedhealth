import { motion } from 'framer-motion';
import { SectionBanner } from '../../components/ui/SectionBanner';
import { testimonials } from '../../data/content';
import { MessageSquare } from 'lucide-react';

export function Testimonials() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Patient Stories"
        subtitle="Real experiences from the patients we're proud to serve in Frisco, TX."
        breadcrumbs={[{ name: 'About', path: '/about' }, { name: 'Testimonials', path: '/about/testimonials' }]}
      />

      {/* Testimonials — masonry columns */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-0">
            {testimonials.map((item, idx) => {
              const isFeatured = idx === 0 || idx === 3;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`break-inside-avoid mb-5 flex flex-col gap-4 border hover:shadow-md rounded-md transition-all duration-300 ${
                    isFeatured
                      ? 'bg-brand-primary border-brand-primary p-7'
                      : 'bg-white border-slate-100 hover:border-brand-secondary/30 p-6'
                  }`}
                >
                  {/* quote */}
                  <div className="flex items-center justify-between ">
                    <MessageSquare
                      size={20}
                      className={isFeatured ? 'text-white/20' : 'text-slate-200'}
                      fill="currentColor"
                    />
                  </div>

                  {/* Full review text — no truncation, no min-height */}
                  <p className={`text-sm leading-relaxed ${
                    isFeatured ? 'text-white/70' : 'text-slate-500'
                  }`}>
                    "{item.text}"
                  </p>

                  {/* Author */}
                  <div className={`flex items-center gap-3 pt-3 border-t ${
                    isFeatured ? 'border-white/10' : 'border-slate-100'
                  }`}>
                    <div className={`w-9 h-9 flex items-center justify-center font-semibold text-sm shrink-0 ${
                      isFeatured ? 'bg-brand-secondary text-white' : 'bg-brand-primary text-white'
                    }`}>
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${
                        isFeatured ? 'text-white' : 'text-brand-primary'
                      }`}>{item.author}</p>
                      <p className={`text-xs ${
                        isFeatured ? 'text-white/40' : 'text-slate-400'
                      }`}>Designation</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary py-14">
        <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-6">
          <motion.div 
            {...fadeUp}
            className="text-center lg:text-left space-y-1"
          >
            <h2 className="text-2xl text-white">Ready to Experience the Difference?</h2>
            <p className="text-sm text-white/50">Join hundreds of satisfied patients at ProMed Health Primary Care in Frisco, TX.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="/appointments"
              className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-[#267a7a] text-white text-sm font-medium px-7 py-3.5 transition-colors shrink-0">
              Book Your Visit
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
