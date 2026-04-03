import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../data/services';
import { Stethoscope, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { SectionBanner } from '../../components/ui/SectionBanner';

export function ServicesHub() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'primary', label: 'Primary Care', icon: Stethoscope },
    { id: 'chronic', label: 'Chronic Disease', icon: Activity },
    { id: 'specialized', label: 'Specialized', icon: ShieldCheck },
  ];

  const filtered = filter === 'all' ? services : services.filter(s => s.category === filter);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Our Services"
        subtitle="Comprehensive primary care across all major disciplines — from preventive medicine to chronic disease management."
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
      />

      {/* Filter tabs */}
      <section className="bg-white border-b border-slate-200 sticky top-[88px] z-30">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex gap-0 overflow-x-auto"
          >
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all",
                  filter === cat.id
                    ? "border-brand-secondary text-brand-secondary"
                    : "border-transparent text-slate-500 hover:text-brand-primary"
                )}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-brand-warm">
        <div className="container-custom">
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <Link
                      to={`/services/${service.id}`}
                      className="group flex flex-col gap-4 h-full p-6 bg-white border border-slate-100 hover:border-brand-secondary/40 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="w-10 h-10 bg-brand-accent flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
                          <Icon size={18} strokeWidth={1.8} />
                        </div>
                        <span className="text-xs text-slate-300 uppercase tracking-widest font-medium">{service.category}</span>
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h3 className="text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors font-sans">
                          {service.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">{service.shortDescription}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-secondary text-xs font-medium">
                        Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary/90 py-14">
        <motion.div 
          {...fadeUp}
          className="container-custom flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="text-center lg:text-left space-y-1">
            <h2 className="text-2xl text-white">Ready to Schedule a Visit?</h2>
            <p className="text-sm text-white/50">Dr. Kavitha Ilayaraja is accepting new patients at our Frisco location.</p>
          </div>
          <Link to="/appointments"
            className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-[#267a7a] text-white text-sm font-medium px-7 py-3.5 transition-colors shrink-0">
            Book Appointment <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
