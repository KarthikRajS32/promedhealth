import { clinicInfo } from '../data/content';
import { Calendar, Apple, Smartphone, ShieldCheck, Clock, Phone, ArrowUpRight, Plus, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Appointments() {
  return (
    <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* ── BOOKING HEADER ── */}
      <section className="container-custom relative mb-32">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
            <Plus size={14} className="text-brand-accent" /> Direct Clinical Access
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
            Simple Booking. <br />
            <span className="text-slate-300">Expert Medicine.</span>
          </h1>
          
          <p className="text-xl text-brand-muted font-medium max-w-2xl leading-relaxed">
            We've streamlined our intake process via **Healow**. Schedule your clinical visit online or via telephone for seamless healthcare access.
          </p>
        </div>
      </section>

      {/* ── ASYMMETRIC PATH SELECTION ── */}
      <section className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Path A: Digital Scheduler */}
          <div className="lg:col-span-7">
            <div className="h-full p-12 lg:p-16 bg-white border border-slate-100 rounded-[4rem] space-y-12 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] group">
               <div className="flex items-center justify-between">
                  <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <Calendar size={32} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Path 01</span>
               </div>
               
               <div className="space-y-6">
                 <h2 className="text-4xl font-black text-brand-primary tracking-tighter leading-none">Online <br /> Scheduler.</h2>
                 <p className="text-brand-muted font-medium leading-relaxed max-w-md">
                    Instant access to Dr. Ilayaraja's real-time availability. Best for physicals, follow-ups, and non-emergent visits.
                 </p>
               </div>
               
               <div className="pt-8 border-t border-slate-50">
                  <a href={clinicInfo.portalUrls.patientPortal} target="_blank" rel="noopener noreferrer">
                    <Button size="xl" className="w-full sm:w-auto px-16 h-20 rounded-3xl group">
                      Launch Scheduler <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </a>
               </div>

               <div className="flex items-center gap-8 pt-4">
                  {['24/7 Access', 'Immediate Confirm'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-muted">
                      <Check size={14} className="text-brand-accent" /> {item}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Path B: Phone Interaction */}
          <div className="lg:col-span-5">
            <div className="h-full p-12 lg:p-16 bg-brand-primary rounded-[4rem] text-white space-y-12 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <Phone size={200} />
               </div>
               
               <div className="flex items-center justify-between relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent">
                    <Phone size={32} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Path 02</span>
               </div>

               <div className="space-y-6 relative z-10">
                 <h2 className="text-4xl font-black text-white tracking-tighter leading-none">Direct <br /> Booking.</h2>
                 <p className="text-white/40 font-medium leading-relaxed">
                    Prefer clinical assistance? Our administrative team can help coordinate complex visits or multi-physician record transfers.
                 </p>
               </div>

               <div className="pt-8 relative z-10">
                  <a href={`tel:${clinicInfo.contact.phone}`}>
                    <Button variant="secondary" size="xl" className="w-full h-20 rounded-3xl bg-brand-accent text-white hover:bg-white hover:text-brand-primary border-transparent">
                      {clinicInfo.contact.phone}
                    </Button>
                  </a>
               </div>
               
               <p className="text-[10px] font-black uppercase tracking-widest text-white/20 relative z-10">Mon - Fri • 8 AM - 5 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HEALOW APP INTEGRATION ── */}
      <section className="container-custom mt-12">
        <div className="p-12 lg:p-24 bg-brand-surface border border-slate-100 rounded-[4rem] grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative group">
              <div className="absolute -inset-10 bg-brand-accent/5 rounded-[4rem] blur-3xl pointer-events-none" />
              <div className="relative aspect-[4/5] max-w-sm mx-auto bg-brand-primary rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group-hover:scale-[1.02] transition-transform duration-700">
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-10 left-10 right-10 space-y-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white">
                       <Smartphone size={24} />
                    </div>
                    <p className="text-white font-black text-2xl tracking-tighter">Unified <br /> Healthcare App.</p>
                 </div>
              </div>
           </div>

           <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-5xl font-black text-brand-primary tracking-tighter leading-tight">Book on <br /> The Move.</h3>
                <p className="text-brand-muted font-medium text-lg leading-relaxed">
                   Download the **Healow App** for the fastest coordination of your medical records and appointments.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                 <div className="p-6 bg-white border border-slate-100 rounded-[2rem] flex items-center gap-5 hover:border-brand-accent transition-all group shadow-sm">
                    <Apple size={28} className="text-slate-300 group-hover:text-brand-primary transition-colors" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted">iOS Platform</p>
                      <p className="font-exrabold text-brand-primary">App Store</p>
                    </div>
                 </div>
                 <div className="p-6 bg-white border border-slate-100 rounded-[2rem] flex items-center gap-5 hover:border-brand-accent transition-all group shadow-sm">
                    <Smartphone size={28} className="text-slate-300 group-hover:text-brand-primary transition-colors" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted">Android OS</p>
                      <p className="font-exrabold text-brand-primary">Google Play</p>
                    </div>
                 </div>
              </div>

              <div className="p-8 bg-slate-950 rounded-[2.5rem] flex items-center justify-between text-white group overflow-hidden relative shadow-xl">
                 <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-1">Practice Code</p>
                    <p className="text-3xl font-black tracking-[0.2em]">PHPC</p>
                 </div>
                 <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                    <Check size={20} className="text-brand-accent group-hover:text-white" />
                 </div>
                 <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:rotate-45 transition-transform duration-700">
                    <ShieldCheck size={100} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── TRUST MODULES ── */}
      <section className="container-custom mt-32">
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { icon: Clock, title: "Same-Day Access", desc: "Acute health issues prioritized for same business day consultation." },
             { icon: ShieldCheck, title: "HIPAA Certified", desc: "Digital intake protected by the highest medical encryption standards." },
             { icon: Smartphone, title: "Universal Sync", desc: "Appointments sync instantly with your portal across all devices." }
           ].map((item, i) => (
             <div key={i} className="p-10 border border-slate-100 rounded-[3rem] space-y-6 hover:bg-white hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500">
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent">
                   <item.icon size={24} />
                </div>
                <h4 className="text-xl font-black text-brand-primary tracking-tight">{item.title}</h4>
                <p className="text-sm text-brand-muted font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

    </div>
  );
}
