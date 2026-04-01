import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../data/services';
import { Stethoscope, Activity, ShieldCheck, ArrowUpRight, Plus, Sparkles, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export function ServicesHub() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Specialties', icon: Sparkles },
    { id: 'primary', name: 'Primary Care', icon: Stethoscope },
    { id: 'chronic', name: 'Chronic Disease', icon: Activity },
    { id: 'specialized', name: 'Specialized', icon: ShieldCheck },
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(s => s.category === filter);

  return (
    <div className="flex flex-col bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white">
      
      {/* ── INTERACTIVE EXPLORER HEADER ── */}
      <section className="container-custom relative mb-32">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
            <Plus size={14} className="text-brand-accent" /> Expert Care Portfolio
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
            Comprehensive <br />
            <span className="text-slate-300">Evidence-Based</span> <br />
            Medicine<span className="text-brand-accent">.</span>
          </h1>

          <div className="flex flex-wrap gap-3 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={cn(
                  "flex items-center gap-3 px-8 h-16 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all duration-500",
                  filter === cat.id 
                    ? "bg-brand-accent text-white shadow-xl shadow-brand-accent/25 translate-y-[-4px]" 
                    : "bg-white text-brand-muted border border-slate-100 hover:border-brand-accent hover:text-brand-accent"
                )}
              >
                <cat.icon size={20} className={cn("transition-colors", filter === cat.id ? "text-white" : "text-brand-accent/40")} />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ASYMMETRIC SERVICE GRID ── */}
      <section className="container-custom min-h-[600px]">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10"
        >
          <AnimatePresence>
            {filteredServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              const isLarge = idx % 5 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={cn(
                    "group relative overflow-hidden flex flex-col justify-between p-10 bg-white border border-slate-100 rounded-[3.5rem] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)]",
                    isLarge ? "md:col-span-2 xl:col-span-2 aspect-[auto] min-h-[350px] md:min-h-[450px]" : "aspect-square"
                  )}
                >
                  <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-1000 rotate-12">
                     <ServiceIcon size={isLarge ? 200 : 120} />
                  </div>
                  
                  <div className="relative z-10 w-fit">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 mb-8">
                       <ServiceIcon size={28} />
                    </div>
                  </div>

                  <div className="relative z-10 space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted leading-none">{service.category}</p>
                    <h3 className={cn(
                      "font-black text-brand-primary tracking-tighter leading-none mb-4",
                      isLarge ? "text-4xl md:text-5xl" : "text-3xl"
                    )}>
                      {service.title}
                    </h3>
                    <p className={cn(
                      "text-brand-muted font-medium mb-8",
                      isLarge ? "max-w-md text-lg" : "text-sm line-clamp-2"
                    )}>
                      {service.shortDescription}
                    </p>
                    <Link to={`/services/${service.id}`} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-brand-accent group/btn">
                      Explore Treatment 
                      <div className="w-10 h-10 border border-brand-accent/20 rounded-xl flex items-center justify-center group-hover/btn:bg-brand-accent group-hover/btn:text-white transition-all">
                        <ArrowUpRight size={16} />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── BOLD PHILOSOPHY CTA ── */}
      <section className="container-custom mt-48">
        <div className="relative rounded-[4rem] bg-brand-primary p-12 lg:p-24 overflow-hidden group">
           <img 
            src="/C:\Users\Hope3\.gemini\antigravity\brain\a4a45535-d6fc-41d1-9567-a6e243cacc1d\medical_specialties_abstract_1775032262990.png" 
            alt="Medical Abstract" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110 group-hover:scale-100 transition-transform duration-[3s]"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary via-brand-primary/80 to-transparent" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <h2 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter">
                  Our Clinical <br />
                  <span className="text-white/30">Philosophy.</span>
                </h2>
                <p className="text-xl text-white/50 font-medium leading-relaxed max-w-xl">
                  Led by Dr. Kavitha Ilayaraja, MD, we combine evidence-based medicine with the art of compassionate human connection to treat the whole person, not just the symptoms.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-6">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-white font-black"><Heart size={20} /></div>
                      <div>
                        <p className="text-white font-black leading-tight">Patient-First</p>
                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Protocol</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand-accent font-black"><Plus size={20} /></div>
                      <div>
                        <p className="text-white font-black leading-tight">Integrative</p>
                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest">Technique</p>
                      </div>
                   </div>
                </div>
              </div>
              
              <div className="glass-dark rounded-[3rem] p-12 space-y-8 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-accent rounded-3xl flex items-center justify-center text-white">
                  <Stethoscope size={40} />
                </div>
                <h3 className="text-3xl font-black text-white px-4">Ready to consult with Dr. Kavitha Ilayaraja?</h3>
                <Link to="/appointments">
                  <Button size="xl" className="px-16 rounded-3xl group">
                    Schedule Initial Visit <ArrowUpRight className="ml-2 transition-transform group-hover:rotate-45" />
                  </Button>
                </Link>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
