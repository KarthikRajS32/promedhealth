import { motion } from 'framer-motion';
import { clinicInfo } from '../../data/content';
import { Check, Shield, AlertCircle, Phone, ArrowUpRight, Plus, Heart } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import aetnaLogo from '../../assets/atena-1.png';
import texasHealthLogo from '../../assets/texax-helath.png';
import bcbsLogo from '../../assets/bcbs.png';
import uhcLogo from '../../assets/UHC2.png';
import cignaLogo from '../../assets/Cigna.png';
import medicareLogo from '../../assets/Medicare.png';
import humanaLogo from '../../assets/Humana.png';
import firstHealthLogo from '../../assets/first-health.png';
import selfPayLogo from '../../assets/self-pay.png';

export function Insurance() {
  const plans = [
    { name: 'Aetna', logo: aetnaLogo },
    { name: 'Texas Health', logo: texasHealthLogo },
    { name: 'BlueCross BlueShield', logo: bcbsLogo },
    { name: 'UnitedHealthcare', logo: uhcLogo },
    { name: 'Cigna', logo: cignaLogo },
    { name: 'Medicare', logo: medicareLogo },
    { name: 'Humana', logo: humanaLogo },
    { name: 'First Health', logo: firstHealthLogo },
    { name: 'Self-Pay', logo: selfPayLogo },
  ];

  return (
    <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* ── COVERAGE EXPLORER HEADER ── */}
      <section className="container-custom relative mb-32">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
            <Shield size={14} className="text-brand-accent" /> Network Participation
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
            Coverage <br />
            <span className="text-slate-300">& Care Coordination.</span>
          </h1>
          
          <p className="text-xl text-brand-muted font-medium max-w-2xl leading-relaxed">
            We partner with major national and regional carriers to ensure your path to wellness is seamless and financially transparent.
          </p>
        </div>
      </section>

      {/* ── PREMIUM PLAN GRID ── */}
      <section className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                  <ArrowUpRight size={24} className="text-brand-accent" />
               </div>
               
               <div className="w-full aspect-[3/2] rounded-2xl bg-slate-50 flex items-center justify-center p-8 mb-8 group-hover:bg-white transition-colors duration-500">
                  <img src={plan.logo} alt={plan.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" />
               </div>
               
               <h3 className="text-sm font-black text-brand-primary uppercase tracking-[0.15em] mb-2">{plan.name}</h3>
               <p className="text-[10px] font-black text-brand-muted uppercase tracking-widest">In-Network Partner</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SPECIALIZED MEDICARE MODULE ── */}
      <section className="container-custom mt-48">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative group">
               <div className="absolute -inset-10 bg-brand-accent/5 rounded-[4rem] blur-3xl pointer-events-none" />
               <div className="relative p-12 lg:p-20 bg-brand-primary rounded-[4rem] text-white space-y-10 overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                    <Heart size={200} />
                  </div>
                  
                  <div className="inline-flex items-center gap-2 text-brand-accent text-[10px] font-black uppercase tracking-[0.3em]">
                    <Plus size={14} /> Medicare Center
                  </div>
                  
                  <h2 className="text-5xl font-black leading-[0.9] tracking-tighter">
                    Coordinated <br />
                    <span className="text-white/30 text-4xl">Medicare Specialty.</span>
                  </h2>
                  
                  <p className="text-lg text-white/50 font-medium leading-relaxed">
                    Under the leadership of Dr. Kavitha Ilayaraja, we offer specialized internal medicine for seniors, coordinating seamlessly with Medicare and Medicare Advantage (Part C) plans.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    {['Annual Wellness Visits', 'Path C Coordination', 'Chronic Care Management'].map(item => (
                       <div key={item} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest group/item">
                          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:bg-brand-accent group-hover/item:border-brand-accent transition-all">
                             <Check size={14} className="text-brand-accent group-hover/item:text-white" />
                          </div>
                          {item}
                       </div>
                    ))}
                  </div>
               </div>
            </div>

            <div className="space-y-12">
               <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] space-y-8 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent">
                    <Phone size={28} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-brand-primary leading-tight">Verification <br /> Protocol.</h3>
                    <p className="text-brand-muted font-medium leading-relaxed">
                      Insurance networks can shift rapidly. We recommend a brief verification call to confirm our current participation with your specific plan before your visit.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted mb-1">Clinic Contact</p>
                        <p className="text-2xl font-black text-brand-primary">{clinicInfo.contact.phone}</p>
                     </div>
                     <a href={`tel:${clinicInfo.contact.phone}`}>
                        <Button variant="primary" className="rounded-2xl">Call Now</Button>
                     </a>
                  </div>
               </div>

               <div className="p-12 bg-brand-surface border border-brand-accent/20 rounded-[3.5rem] relative overflow-hidden group hover:bg-brand-accent transition-all duration-700">
                  <div className="relative z-10 space-y-6">
                    <h4 className="text-2xl font-black text-brand-primary group-hover:text-white transition-colors">Self-Pay Options</h4>
                    <p className="text-brand-muted font-medium group-hover:text-white/70 transition-colors leading-relaxed">
                      For patients without coverage, we offer transparent, competitive self-pay rates to preserve your health without the overhead.
                    </p>
                    <div className="flex items-center gap-3 text-brand-accent group-hover:text-white text-xs font-black uppercase tracking-[0.2em] transition-colors">
                      View Rates <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                    <AlertCircle size={150} />
                  </div>
               </div>
            </div>
        </div>
      </section>

    </div>
  );
}
