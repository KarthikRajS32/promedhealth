import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Calendar, Apple, Smartphone, ShieldCheck, CheckCircle, Clock, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function Appointments() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Book Appointment"
        subtitle="Schedule your clinical visit online or via telephone for seamless healthcare access."
        breadcrumbs={[
          { name: 'Appointments', path: '/appointments' }
        ]}
      />

      <section className="section-padding bg-brand-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              {/* Booking Options Column */}
              <div className="space-y-12">
                 <div className="space-y-6">
                    <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
                    <h2 className="text-4xl lg:text-5xl font-black text-brand-primary tracking-tight">Simple Booking. <br/> Expert Care.</h2>
                    <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-xl">
                       We've partnered with **Healow** to provide a direct, real-time 
                       scheduling experience. Book your physical, televisit, or chronic care 
                       appointment in just a few clicks.
                    </p>
                 </div>

                 <div className="space-y-8">
                    <div className="p-10 bg-brand-accent rounded-[48px] border border-brand-accent/50 shadow-sm group hover:shadow-2xl transition-all">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                          <div className="space-y-4">
                             <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-brand-white shadow-xl">
                                <Calendar size={28} />
                             </div>
                             <h3 className="text-2xl font-black text-brand-primary uppercase tracking-tight leading-tight">Online Scheduler</h3>
                             <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-xs">
                                Use the Healow portal for 24/7 access to our calendar.
                             </p>
                          </div>
                          <a href={clinicInfo.portalUrls.patientPortal} target="_blank" rel="noopener noreferrer">
                             <Button size="lg" className="h-16 px-10 rounded-2xl gap-2 shadow-2xl">
                                Book Now <ArrowUpRight size={20} />
                             </Button>
                          </a>
                       </div>
                    </div>

                    <div className="p-10 bg-brand-primary rounded-[48px] text-brand-white shadow-xl shadow-brand-primary/10 group hover:shadow-2xl transition-all">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                          <div className="space-y-4">
                             <div className="w-14 h-14 bg-brand-white/10 rounded-2xl flex items-center justify-center text-brand-secondary shadow-lg">
                                <Phone size={28} />
                             </div>
                             <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">Scheduling Line</h3>
                             <p className="text-sm font-bold text-brand-accent/60 leading-relaxed max-w-xs">
                                Prefer to speak with us? Call our office directly.
                             </p>
                          </div>
                          <a href={`tel:${clinicInfo.contact.phone}`}>
                             <Button size="lg" className="h-16 px-10 rounded-2xl gap-2 shadow-2xl bg-brand-secondary">
                                Call to Book <Phone size={20} />
                             </Button>
                          </a>
                       </div>
                    </div>
                 </div>

                 <div className="pt-8 grid sm:grid-cols-2 gap-8">
                    {[
                      { icon: ShieldCheck, title: "HIPAA Secure", desc: "Your data is protected by the highest medical encryption standards." },
                      { icon: Clock, title: "Same-Day Visits", desc: "Acute issues often seen on the same business day." }
                    ].map((item, idx) => (
                       <div key={idx} className="flex gap-4">
                          <div className="shrink-0 w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary">
                             <item.icon size={24} />
                          </div>
                          <div>
                             <h4 className="font-black text-brand-primary">{item.title}</h4>
                             <p className="text-sm font-bold text-slate-500 mt-1">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Mobile Apps Sidebar */}
              <div className="space-y-12 lg:sticky lg:top-32">
                 <div className="p-12 lg:p-16 bg-brand-accent rounded-[64px] border border-brand-accent/50 space-y-12 shadow-sm">
                    <div className="space-y-6">
                       <div className="w-16 h-16 bg-brand-primary rounded-[32px] flex items-center justify-center text-brand-white shadow-xl">
                          <Smartphone size={40} />
                       </div>
                       <h3 className="text-3xl font-black text-brand-primary tracking-tight leading-tight">Book on <br/> the Go</h3>
                       <p className="text-lg font-medium text-slate-500 leading-relaxed">
                          Download the **Healow App** on your smartphone for the 
                          fastest booking and medical record access.
                       </p>
                    </div>

                    <div className="space-y-4">
                       <div className="flex items-center gap-6 p-6 bg-brand-white rounded-3xl border border-brand-accent shadow-sm group hover:border-brand-primary transition-all">
                          <Apple size={32} className="text-slate-400 group-hover:text-brand-primary transition-colors" />
                          <div>
                             <h4 className="text-sm font-black text-brand-primary uppercase tracking-widest">App Store</h4>
                             <p className="text-[11px] font-bold text-slate-400">Download for iPhone</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-6 p-6 bg-brand-white rounded-3xl border border-brand-accent shadow-sm group hover:border-brand-primary transition-all">
                          <Smartphone size={32} className="text-slate-400 group-hover:text-brand-primary transition-colors" />
                          <div>
                             <h4 className="text-sm font-black text-brand-primary uppercase tracking-widest">Google Play</h4>
                             <p className="text-[11px] font-bold text-slate-400">Download for Android</p>
                          </div>
                       </div>
                    </div>

                    <div className="pt-8 border-t border-brand-accent/50 space-y-4">
                       <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-primary leading-none">Our Code: PHPC</h4>
                       <p className="text-sm font-bold text-slate-400 leading-relaxed">
                          Use the code **PHPC** when prompted in the Healow app to find our Frisco practice.
                       </p>
                    </div>
                 </div>

                 {/* New Patient Check */}
                 <div className="p-10 bg-brand-primary rounded-[48px] text-brand-white flex gap-6 items-center">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-brand-secondary shrink-0">
                       <CheckCircle size={32} />
                    </div>
                    <div>
                       <h4 className="text-xl font-black text-white/80 uppercase tracking-tight leading-none">New Patients Welcome</h4>
                       <p className="text-sm font-bold mt-1 text-brand-accent/60 leading-tight">We are currently accepting new residents of Frisco and surrounding areas.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
