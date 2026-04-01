import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../../data/services';
import { Check, ShieldCheck, UserCheck, Stethoscope, ArrowRight, Pill, AlertCircle, Plus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function ServiceDetail() {
   const { serviceId } = useParams<{ serviceId: string }>();
   const service = services.find(s => s.id === serviceId);

   if (!service) {
      return <Navigate to="/services" replace />;
   }

   const Icon = service.icon;

   return (
      <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
         
         {/* ── DIAGNOSTIC HEADER ── */}
         <section className="container-custom relative mb-24 lg:mb-32">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-4xl space-y-12 relative z-10">
               <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
                  <Icon size={14} className="text-brand-accent" /> Specialization Hub
               </div>
               
               <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
                  {service.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="text-slate-300">{service.title.split(' ').slice(-1)} Protocol.</span>
               </h1>
               
               <p className="text-xl text-brand-muted font-medium max-w-2xl leading-relaxed">
                  {service.shortDescription}
               </p>
            </div>
         </section>

         {/* ── ASYMMETRIC CONTENT GRID ── */}
         <section className="container-custom">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
               
               {/* Main Scientific Content */}
               <div className="lg:col-span-8 space-y-24">
                  <div className="space-y-10">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-1 px-4 bg-brand-secondary rounded-full" />
                        <h2 className="text-sm font-black text-brand-primary uppercase tracking-[0.3em]">Overview & Pathophysiology</h2>
                     </div>
                     <p className="text-2xl font-bold text-brand-primary leading-relaxed tracking-tight">
                        {service.content.overview}
                     </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     {service.content.symptoms && (
                        <div className="p-10 bg-white border border-slate-100 rounded-[3.5rem] space-y-8 hover:shadow-2xl transition-all duration-500">
                           <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent">
                              <AlertCircle size={28} />
                           </div>
                           <h3 className="text-2xl font-black text-brand-primary tracking-tight">Clinical Symptoms</h3>
                           <ul className="space-y-4">
                              {service.content.symptoms.map(item => (
                                 <li key={item} className="flex gap-4 text-sm font-bold text-brand-muted group">
                                    <div className="w-5 h-5 rounded-md bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                                       <Plus size={12} />
                                    </div>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}

                     {service.content.causes && (
                        <div className="p-10 bg-brand-accent/5 border border-brand-accent/10 rounded-[3.5rem] space-y-8 hover:shadow-2xl transition-all duration-500">
                           <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm">
                              <Stethoscope size={28} />
                           </div>
                           <h3 className="text-2xl font-black text-brand-primary tracking-tight">Risk Factors</h3>
                           <ul className="space-y-4">
                              {service.content.causes.map(item => (
                                 <li key={item} className="flex gap-4 text-sm font-bold text-brand-muted group">
                                    <div className="w-5 h-5 rounded-md bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                                       <Plus size={12} />
                                    </div>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}
                  </div>

                  <div className="space-y-12">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-1 px-4 bg-brand-secondary rounded-full" />
                        <h2 className="text-sm font-black text-brand-primary uppercase tracking-[0.3em]">Therapeutic Strategy</h2>
                     </div>
                     <div className="grid sm:grid-cols-2 gap-6">
                        {service.content.treatment?.map((item, idx) => (
                           <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-3xl flex items-center gap-6 hover:border-brand-accent transition-all duration-500 shadow-sm">
                              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                                 <Pill size={24} />
                              </div>
                              <span className="font-black text-brand-primary tracking-tight">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Benefits Feature */}
                  <div className="relative rounded-[4rem] bg-brand-primary p-12 lg:p-20 text-white overflow-hidden group shadow-2xl">
                     <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-[4s]">
                        <ShieldCheck size={300} />
                     </div>
                     <div className="relative z-10 space-y-12">
                        <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight">Patient Benefits <br /> & Long-term Care</h3>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                           {service.content.benefits?.map((item, idx) => (
                              <div key={idx} className="flex gap-4 items-start group/item">
                                 <div className="w-6 h-6 rounded-full bg-brand-accent border border-brand-accent/20 flex items-center justify-center text-white shrink-0 mt-1 transition-transform group-hover/item:scale-110">
                                    <Check size={14} />
                                 </div>
                                 <p className="font-bold text-lg text-white/70 leading-snug group-hover/item:text-white transition-colors">{item}</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Clinical Action Sidebar */}
               <div className="lg:col-span-4 lg:sticky lg:top-40 space-y-10">
                  <div className="p-12 bg-white border border-slate-100 rounded-[3.5rem] space-y-10 shadow-sm hover:shadow-2xl transition-all duration-500">
                     <div className="space-y-6">
                        <div className="w-20 h-20 bg-brand-accent/10 rounded-[2rem] flex items-center justify-center text-brand-accent">
                           <Icon size={40} />
                        </div>
                        <h3 className="text-3xl font-black text-brand-primary leading-tight tracking-tighter">Clinical Intake Protocol.</h3>
                        <p className="text-brand-muted font-medium leading-relaxed italic">
                           Consult with Dr. Kavitha Ilayaraja, MD, about these health concerns today at our Frisco practice.
                        </p>
                     </div>

                     <div className="space-y-4 pt-4">
                        <Link to="/appointments" className="block">
                           <Button className="w-full h-16 rounded-2xl group text-lg">
                              Book Consult <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                           </Button>
                        </Link>
                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-secondary shadow-sm">
                              <UserCheck size={20} />
                           </div>
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary leading-none">MD: Dr. Ilayaraja</p>
                        </div>
                     </div>
                  </div>

                  <div className="p-10 bg-brand-surface border border-brand-accent/20 rounded-[3rem]">
                     <h4 className="text-sm font-black text-brand-primary uppercase tracking-[0.3em] mb-8">Patient Access</h4>
                     <ul className="space-y-6">
                        {[
                           { name: "Televisit Path", path: "/patient-access/televisit" },
                           { name: "Secure Portal", path: "/patient-access/portal" },
                           { name: "Carrier Verification", path: "/patient-access/insurance" }
                        ].map(link => (
                           <li key={link.name}>
                              <Link to={link.path} className="flex items-center justify-between text-xs font-black uppercase tracking-[0.2em] text-brand-muted hover:text-brand-accent group transition-all">
                                 {link.name}
                                 <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

            </div>
         </section>
      </div>
   );
}
