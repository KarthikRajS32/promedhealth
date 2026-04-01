import { motion } from 'framer-motion';
import { clinicInfo } from '../../data/content';
import { Smartphone, ShieldCheck, Globe, Monitor, ArrowUpRight, Play, Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import televisitMockup from '../../assets/join-televisit-landing.png';

export function Televisit() {
  const features = [
    { icon: Monitor, title: "HD Video Quality", desc: "Clear, real-time communication for accurate remote diagnosis and visual inspection." },
    { icon: ShieldCheck, title: "HIPAA Compliant", desc: "All visits are encrypted and private, ensuring your safety and data integrity." },
    { icon: Globe, title: "Universal Access", desc: "Connect from home, work, or while traveling via web browser or mobile app." },
    { icon: Smartphone, title: "Secure Portal", desc: "Unified access through the secure patient gateway without multiple app logins." }
  ];

  const steps = [
    { title: "Stable Connection", desc: "Reliable internet via Wi-Fi or 4G/5G ensures no interruption during your consult." },
    { title: "Quiet Space", desc: "Find a well-lit, private area where you won't be interrupted during your specialized consult." },
    { title: "Device Check", desc: "Test your camera and microphone. Most modern smartphones and laptops work perfectly." },
    { title: "Wait for Link", desc: "Click the secure text or email link sent by our office 15 minutes before your time." }
  ];

  return (
    <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* ── IMMERSIVE TELEVISIT HERO ── */}
      <section className="container-custom relative mb-32 lg:mb-48">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-12 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
                <Play size={14} className="fill-brand-accent text-brand-accent" /> Care From Anywhere
              </div>
              
              <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
                Expert Medicine <br />
                <span className="text-slate-300">Simplified.</span>
              </h1>
              
              <p className="text-xl text-brand-muted font-medium max-w-xl leading-relaxed">
                Experience clinical excellence without the commute. ProMed's secure, HD video platform connects you directly with Dr. Ilayaraja from any location.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                 <a href={clinicInfo.portalUrls.televisit} target="_blank" rel="noopener noreferrer">
                    <Button size="xl" className="px-12 h-20 rounded-3xl text-lg font-black group">
                      Launch Portal <ArrowUpRight className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                 </a>
                 <p className="flex flex-col justify-center text-xs font-black uppercase tracking-widest text-brand-muted border-l-2 border-slate-100 pl-6">
                    Powered by <br /> <span className="text-brand-primary text-lg">Healow</span>
                 </p>
              </div>
           </div>

           <div className="relative group">
              <div className="absolute -inset-10 bg-brand-accent/10 rounded-[4rem] group-hover:bg-brand-accent/20 blur-3xl transition-all duration-700 pointer-events-none" />
              <div className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden bg-brand-primary shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src={televisitMockup} 
                  alt="Televisit" 
                  className="w-full h-full object-cover scale-110 opacity-80 group-hover:scale-100 transition-transform duration-1000" 
                />
              </div>
              
              {/* Floating Status Widget */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 lg:-right-12 glass-dark p-6 rounded-3xl space-y-4 max-w-[200px]"
              >
                 <div className="flex -space-x-3">
                   {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-xl bg-slate-800 border-2 border-brand-primary" />)}
                 </div>
                 <p className="text-xs font-bold text-white/50 leading-tight">Join <span className="text-white">1000+ patients</span> using remote care daily.</p>
              </motion.div>
           </div>
        </div>
      </section>

      {/* ── CAPABILITY GRID ── */}
      <section className="container-custom mb-48">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {features.map((feature, i) => (
             <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500 space-y-8 group">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                   <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-brand-primary leading-tight">{feature.title}</h4>
                <p className="text-sm text-brand-muted font-medium leading-relaxed">{feature.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* ── GEOMETRIC PREPARATION PROCESS ── */}
      <section className="container-custom">
        <div className="relative rounded-[4rem] bg-brand-primary p-12 lg:p-24 overflow-hidden group">
           <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-[4s]">
              <Monitor size={300} />
           </div>
           
           <div className="relative z-10 grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-4 space-y-8">
                <p className="text-xs font-black uppercase tracking-widest text-brand-accent">Onboarding Flow</p>
                <h2 className="text-5xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter">
                  Seamless <br />
                  <span className="text-white/30 text-4xl">Engagement.</span>
                </h2>
                <p className="text-white/50 font-medium leading-relaxed">
                  Follow these essential protocols to ensure your remote visit is as productive as an in-person meeting.
                </p>
              </div>
              
              <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
                {steps.map((step, i) => (
                  <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-6 hover:bg-white/10 transition-all duration-500 group/step">
                     <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">Step 0{i+1}</span>
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/step:bg-brand-accent group-hover/step:border-brand-accent transition-all">
                           <Check size={14} className="text-white/20 group-hover/step:text-white" />
                        </div>
                     </div>
                     <h3 className="text-2xl font-black text-white">{step.title}</h3>
                     <p className="text-white/40 text-sm font-medium leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}
