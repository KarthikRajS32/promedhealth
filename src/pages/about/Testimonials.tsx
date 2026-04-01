import { motion } from 'framer-motion';
import { testimonials, clinicInfo } from '../../data/content';
import { Quote, Star, ArrowRight, Check, Plus, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { cn } from '../../lib/utils';

export function Testimonials() {
  return (
    <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* ── STORIES HEADER ── */}
      <section className="container-custom relative mb-32">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
            <Plus size={14} className="text-brand-accent" /> Community Impact
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
            The Standard <br />
            <span className="text-slate-300">of Excellence.</span>
          </h1>
          
          <p className="text-xl text-brand-muted font-medium max-w-2xl leading-relaxed">
            We don't just treat symptoms; we build health partnerships. Experience the personal stories of the families we serve in Frisco.
          </p>
        </div>
      </section>

      {/* ── MASONRY STORY GRID ── */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((item, idx) => {
            const isFeatured = idx === 0 || idx === 4;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={cn(
                  "group relative p-12 bg-white border border-slate-100 rounded-[3.5rem] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] flex flex-col",
                  isFeatured ? "md:col-span-2 lg:col-span-1 shadow-lg bg-slate-50 border-transparent" : ""
                )}
              >
                <div className="absolute top-10 right-12 text-brand-accent/20 group-hover:text-brand-accent transition-colors duration-500">
                  <Quote size={48} />
                </div>
                
                <div className="space-y-6 flex-grow">
                   <div className="flex gap-1 mb-8">
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />)}
                   </div>
                   
                   <p className={cn(
                     "font-bold text-brand-primary leading-relaxed",
                     isFeatured ? "text-2xl" : "text-lg"
                   )}>
                     "{item.text}"
                   </p>
                </div>

                <div className="pt-10 mt-10 border-t border-slate-100 flex items-center gap-5">
                   <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-black text-xl">
                      {item.author.charAt(0)}
                   </div>
                   <div>
                      <h4 className="font-exrabold text-brand-primary leading-none mb-1.5">{item.author}</h4>
                      <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">Verified Patient</p>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── SPECIALIZED INSURANCE MODULE ── */}
      <section className="container-custom mt-48">
        <div className="relative rounded-[4rem] bg-brand-primary p-12 lg:p-24 overflow-hidden group text-center lg:text-left">
           <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-10 transition-opacity" />
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter">
                  Broad Network <br />
                  <span className="text-white/30 text-4xl">Compatibility.</span>
                </h2>
                <p className="text-white/50 font-medium leading-relaxed max-w-xl">
                  We accept most internal medicine referrals and major insurance carriers, including specialized Medicare Advantage paths.
                </p>
                <Link to="/patient-access/insurance" className="inline-flex items-center gap-3 text-brand-accent text-xs font-black uppercase tracking-[0.2em] group/btn">
                   Full Carrier List <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {clinicInfo.insurancePlans.slice(0, 6).map((plan) => (
                  <div key={plan} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-center hover:bg-white/10 transition-all">
                    <span className="text-xs font-black text-white tracking-widest uppercase">
                      {plan}
                    </span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* ── BOLD CTA ── */}
      <section className="container-custom mt-48 text-center space-y-12">
          <div className="w-20 h-20 bg-brand-accent/10 rounded-[2rem] flex items-center justify-center text-brand-accent mx-auto">
            <Heart size={40} className="fill-brand-accent" />
          </div>
          <h2 className="text-6xl sm:text-7xl font-black text-brand-primary tracking-tighter leading-none">
            Ready for a <br />
            <span className="text-slate-300">better experience?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link to="/appointments">
                <Button size="xl" className="px-16 h-20 rounded-3xl text-xl font-black group">
                  Book Initial Visit <ArrowRight size={24} className="ml-3 transition-transform group-hover:translate-x-1" />
                </Button>
             </Link>
             <Link to="/services">
                <Button variant="outline" size="xl" className="px-16 h-20 rounded-3xl text-xl font-black border-slate-100 hover:bg-brand-primary hover:text-white group">
                  Our Services
                </Button>
             </Link>
          </div>
          <div className="flex items-center justify-center gap-8 pt-10">
            {['Accepting New Patients', 'Frisco, TX', 'Medicare Specialist'].map(item => (
              <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">
                <Check size={14} className="text-brand-accent" /> {item}
              </div>
            ))}
          </div>
      </section>

    </div>
  );
}
