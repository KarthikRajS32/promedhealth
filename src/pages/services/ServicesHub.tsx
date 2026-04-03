import { SectionBanner } from '../../components/ui/SectionBanner';
import { services } from '../../data/services';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { ShieldCheck, Heart, Activity, Thermometer, Stethoscope, CheckCircle } from 'lucide-react';

export function ServicesHub() {
  const categories = [
    { name: 'Primary Care', category: 'primary', icon: Stethoscope },
    { name: 'Chronic Disease', category: 'chronic', icon: Activity },
    { name: 'Specialized Medicine', category: 'specialized', icon: ShieldCheck },
  ];

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Our Medical Services"
        subtitle="Comprehensive high-quality healthcare for acute, chronic, and preventive medical needs."
        breadcrumbs={[
          { name: 'Services', path: '/services' }
        ]}
      />

      <section className="section-padding bg-brand-white pt-24 pb-32">
        <div className="container-custom">
          {categories.map((cat, idx) => (
            <div key={cat.name} className={idx > 0 ? "mt-32" : ""}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div className="max-w-2xl space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-secondary">
                       <cat.icon size={24} />
                    </div>
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none">Category</h3>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-brand-primary tracking-tight leading-tight">
                    {cat.name}
                  </h2>
                </div>
                <div className="h-1.5 w-32 bg-brand-secondary rounded-full hidden md:block" />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {services
                  .filter(s => s.category === cat.category)
                  .map(service => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-brand-primary/90 text-brand-white relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000 rotate-12">
            <Heart size={320} />
         </div>

         <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
               <div className="space-y-10">
                  <div className="h-2 w-20 bg-brand-secondary rounded-full" />
                  <h2 className="text-5xl lg:text-5xl font-black text-white/90 leading-tight tracking-tight">Our Clinical <br/> Philosophy</h2>
                  <p className="text-lg font-medium text-brand-accent/80 leading-relaxed">
                    Lead by Dr. Kavitha Ilayaraja, MD, ProMed Health is 
                    committed to an internal medical practice that combines 
                    evidence-based science with compassionate human connection.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                     {[
                       { title: "Personalized", desc: "Every treatment plan is tailored to your unique history, values, and health goals." },
                       { title: "Coordinated", desc: "We seamless coordinate with specialists and Medicare plans for unified care." },
                       { title: "Preventative", desc: "Focusing on wellness first to prevent acute issues before they start." },
                       { title: "Accessible", desc: "With same-day visits and telemedicine, we are here when you need us." }
                     ].map((item, idx) => (
                        <div key={idx} className="space-y-2">
                           <h4 className="text-xl font-black text-white/90  tracking-tight">{item.title}</h4>
                           <p className="text-sm font-bold text-brand-accent/60 leading-relaxed">{item.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="p-12 lg:p-14 bg-brand-white rounded-[64px] shadow-2xl relative rotate-2 group-hover:rotate-0 transition-all duration-700">
                  <div className="space-y-12">
                     <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-brand-accent rounded-[32px] flex items-center justify-center text-brand-secondary">
                          <Thermometer size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-brand-primary tracking-tight md:text-3xl">Expert Primary Care <br/> Since Day One</h3>
                     </div>
                     
                     <p className="text-lg font-bold text-slate-500 leading-relaxed italic">
                        "Continuity of care is the foundation of patient wellness. 
                        We don't just treat symptoms; we treat the whole person."
                     </p>
                     
                     <div className="pt-10 border-t border-brand-accent flex items-center justify-between">
                        <div>
                           <h4 className="text-xl font-black text-brand-primary">Dr. Kavitha Ilayaraja, MD</h4>
                           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Lead Medical Specialist</p>
                        </div>
                        <CheckCircle size={32} className="text-brand-secondary" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
