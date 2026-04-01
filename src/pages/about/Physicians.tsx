import { motion } from 'framer-motion';
import { physicians } from '../../data/physicians';
import { Award, Heart, GraduationCap, Check, ArrowDown, Plus, Quote } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import doctorPhoto from '../../assets/kavitha-photo.png';

export function Physicians() {
  const dr = physicians[0];

  return (
    <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* ── DESIGNER DOSSIER HEADER ── */}
      <section className="container-custom relative mb-24 lg:mb-40">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-12 gap-16 lg:items-end">
          <div className="lg:col-span-8 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
              <Plus size={14} className="text-brand-accent" /> Clinical Leadership
            </div>
            <h1 className="text-6xl sm:text-8xl xl:text-9xl font-black text-brand-primary tracking-tighter leading-[0.8] transition-all">
              The <br />
              <span className="text-slate-300">Visionary.</span>
            </h1>
            <p className="text-2xl font-bold text-brand-accent tracking-widest uppercase">
              {dr.name} <span className="text-slate-300 mx-4">/</span> {dr.title}
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-end">
            <motion.div 
              initial={{ rotate: 10, y: 50, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="w-20 h-20 rounded-full border-2 border-brand-accent flex items-center justify-center text-brand-accent animate-bounce"
            >
              <ArrowDown size={32} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ASYMMETRIC BIOGRAPHY PROFILE ── */}
      <section className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Sticky Visual Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-accent rounded-[4rem] opacity-20 group-hover:opacity-30 transition-all duration-700 blur-2xl" />
              <div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden bg-brand-primary shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src={doctorPhoto} 
                  alt="Dr. Kavitha Ilayaraja" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                />
              </div>
              
              {/* Floating Quote Widget */}
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] border border-slate-50 max-w-xs space-y-4">
                <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center text-white">
                  <Quote size={20} />
                </div>
                <p className="text-sm font-bold text-brand-primary leading-relaxed italic">
                  "I believe in a medical practice where empathy and evidence-based science coexist."
                </p>
              </div>
            </div>
          </div>

          {/* Scrolling Content Panel */}
          <div className="lg:col-span-7 space-y-24 lg:pt-20">
            
            {/* Mission Statement */}
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-brand-primary tracking-tighter">A Legacy of <br /> Comprehensive Care.</h2>
              <div className="prose prose-xl text-brand-muted font-medium leading-relaxed">
                <p>
                  As an internal medicine-trained specialist, <strong>Dr. Kavitha Ilayaraja</strong> possess a deep understanding of adult health, skilled in managing a wide range of medical conditions from common ailments to complex diseases.
                </p>
                <p>
                  By choosing Dr. Ilayaraja as your primary care provider, you'll receive personalized care focused on preventive health, early detection, and effective management of chronic conditions.
                </p>
              </div>
            </div>

            {/* Accreditation Blocks */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-xl font-black text-brand-primary mb-6">Education</h3>
                <ul className="space-y-4">
                  {dr.education?.map(item => (
                    <li key={item} className="flex gap-3 text-sm font-bold text-brand-muted leading-tight">
                      <Check size={16} className="text-brand-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent mb-8">
                  <Award size={28} />
                </div>
                <h3 className="text-xl font-black text-brand-primary mb-6">Expertise</h3>
                <ul className="space-y-4">
                  {dr.certifications?.map(item => (
                    <li key={item} className="flex gap-3 text-sm font-bold text-brand-muted leading-tight">
                      <Check size={16} className="text-brand-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* hospitalist callout */}
            <div className="p-12 bg-brand-primary rounded-[3.5rem] relative overflow-hidden group">
               <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-10 transition-opacity" />
               <div className="relative z-10 space-y-6">
                 <h3 className="text-3xl font-black text-white leading-tight">Clinical Residency &<br />Hospitalist Service.</h3>
                 <p className="text-white/50 font-medium text-lg leading-relaxed max-w-lg">
                   Dr. Ilayaraja also serves as a hospitalist physician in <strong>Medical City Hospital Plano, Denton, and Frisco</strong>, providing her with unique insights into acute inpatient care and long-term recovery workflows.
                 </p>
                 <div className="pt-4">
                   <Link to="/appointments">
                      <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white hover:text-brand-primary rounded-2xl">
                        Schedule Consultation
                      </Button>
                   </Link>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MISSION PHILOSOPHY GRID ── */}
      <section className="section-padding bg-white mt-48">
        <div className="container-custom">
           <div className="grid lg:grid-cols-3 gap-8">
              {[
                { title: "Evidence-Based", icon: Award, desc: "Decades of clinical experience ensuring specialized, accurate diagnosis and treatment plans for every stage of life." },
                { title: "Tech-Forward", icon: Heart, desc: "Leveraging the latest clinical research and telemedicine technology to make high-quality care accessible everywhere." },
                { title: "Human Centric", icon: Plus, desc: "Treating you as a person, not just a patient. We prioritize your well-being through compassionate workshops." }
              ].map((item, i) => (
                <div key={i} className="p-12 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-700 space-y-8 group">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                      <item.icon size={28} />
                   </div>
                   <h4 className="text-2xl font-black text-brand-primary">{item.title}</h4>
                   <p className="text-brand-muted font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
}
