import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../../data/services';
import { SectionBanner } from '../../components/ui/SectionBanner';
import { CheckCircle, AlertCircle, Pill, ArrowRight, ShieldCheck, UserCheck, Stethoscope } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="flex flex-col">
      <SectionBanner
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.id}` }
        ]}
      />

      <section className="section-padding bg-brand-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-24 items-start">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-16">
              <div className="space-y-8">
                <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
                <h2 className="text-4xl lg:text-5xl font-black text-brand-primary leading-tight">
                  Overview & Diagnosis
                </h2>
                <p className="text-lg font-medium text-slate-600 leading-relaxed">
                  {service.content.overview}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 pt-8">
                 {service.content.symptoms && (
                   <div className="p-10 bg-brand-accent rounded-[40px] space-y-8 border border-brand-accent/50 group hover:-translate-y-1 transition-all">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-secondary shadow-sm">
                            <AlertCircle size={24} />
                         </div>
                         <h3 className="text-2xl font-black text-brand-primary">Symptoms</h3>
                      </div>
                      <ul className="space-y-4">
                        {service.content.symptoms.map(item => (
                          <li key={item} className="flex gap-3 text-sm font-bold text-slate-600">
                             <CheckCircle size={18} className="text-brand-secondary shrink-0" />
                             {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                 )}

                 {service.content.causes && (
                   <div className="p-10 bg-brand-accent rounded-[40px] space-y-8 border border-brand-accent/50 group hover:-translate-y-1 transition-all">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-secondary shadow-sm">
                            <Stethoscope size={24} />
                         </div>
                         <h3 className="text-2xl font-black text-brand-primary">Risk Factors</h3>
                      </div>
                      <ul className="space-y-4">
                        {service.content.causes.map(item => (
                          <li key={item} className="flex gap-3 text-sm font-bold text-slate-600">
                             <CheckCircle size={18} className="text-brand-secondary shrink-0" />
                             {item}
                          </li>
                        ))}
                      </ul>
                   </div>
                 )}
              </div>

              <div className="pt-8 space-y-12">
                 <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
                 <h2 className="text-4xl lg:text-5xl font-black text-brand-primary leading-tight">
                    Care & Treatment
                 </h2>
                 <p className="text-lg font-medium text-slate-600 leading-relaxed">
                    Personalized treatment plans are developed with Dr. Ilayaraja to ensure 
                    long-term health stability and optimal recovery.
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-8">
                    {service.content.treatment?.map((item, idx) => (
                       <div key={idx} className="flex gap-4 p-8 bg-brand-white rounded-3xl border border-brand-accent shadow-sm group hover:border-brand-primary transition-all">
                          <div className="shrink-0 w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-white transition-colors">
                             <Pill size={24} />
                          </div>
                          <span className="font-black text-brand-primary leading-tight pt-2">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="pt-16 bg-brand-primary rounded-[40px] p-12 lg:p-12 text-brand-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000 rotate-12">
                    <ShieldCheck size={300} />
                 </div>
                 
                 <div className="relative z-10 space-y-10">
                    <h3 className="text-3xl lg:text-5xl text-white/80 tracking-tight leading-tight">Benefits of Care</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                       {service.content.benefits?.map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-start">
                             <CheckCircle size={24} className="text-brand-secondary shrink-0" />
                             <p className="font-bold text-lg text-brand-accent/90">{item}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>

            {/* Sidebar / Quick Actions */}
            <div className="space-y-10 lg:sticky lg:top-32">
               {/* Icon Branding */}
               <div className="w-24 h-24 bg-brand-accent rounded-[32px] flex items-center justify-center text-brand-primary shadow-lg border border-brand-accent/50 mx-auto lg:mx-0">
                  <Icon size={48} strokeWidth={1.5} />
               </div>

               <div className="p-10 bg-brand-primary rounded-[40px] text-brand-white shadow-xl shadow-brand-primary/10 space-y-10">
                  <div className="space-y-4">
                     <h3 className="text-2xl text-white/90 uppercase tracking-widest leading-tight">Need Immediate Care?</h3>
                     <p className="text-sm font-bold text-brand-accent/80 leading-relaxed">
                        Consult with Dr. Kavitha Ilayaraja, MD, about these health concerns today.
                     </p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                     <Link to="/appointments">
                        <Button className="w-full h-16 rounded-2xl bg-brand-white text-brand-primary hover:bg-brand-accent px-8">
                           Book Appointment
                        </Button>
                     </Link>
                     <Link to="/contact">
                        <Button variant="outline" className="w-full h-16 rounded-2xl border-white/20 text-white hover:bg-white/5 px-8">
                           Contact Support
                        </Button>
                     </Link>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center">
                           <UserCheck size={20} />
                        </div>
                        <p className="text-xs font-black uppercase tracking-widest">Lead MD: Dr. Kavitha Ilayaraja</p>
                     </div>
                  </div>
               </div>

               {/* Related Information */}
               <div className="p-8 bg-brand-accent rounded-[32px] border border-brand-accent/50 space-y-6">
                  <h4 className="text-xl font-black text-brand-primary uppercase tracking-tight">Patient Resources</h4>
                  <ul className="space-y-4">
                     {[
                       { name: "Televisit Link", path: "/patient-access/televisit" },
                       { name: "Patient Portal", path: "/patient-access/portal" },
                       { name: "Accepted Insurance", path: "/patient-access/insurance" }
                     ].map(link => (
                       <li key={link.name}>
                          <Link to={link.path} className="flex items-center justify-between text-sm font-black text-slate-500 hover:text-brand-primary group transition-all">
                             {link.name}
                             <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                       </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
