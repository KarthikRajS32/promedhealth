import { clinicInfo } from '../../data/content';
import { MapPin, Phone, Mail, Navigation, Building2, ShieldCheck, Heart, ArrowRight, Plus, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function FriscoLocation() {
  return (
    <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* ── LOCATION HEADER ── */}
      <section className="container-custom relative mb-32">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
            <MapPin size={14} className="text-brand-accent" /> Clinical Headquarters
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
            Excellence <br />
            <span className="text-slate-300">in Frisco.</span>
          </h1>
          
          <p className="text-xl text-brand-muted font-medium max-w-2xl leading-relaxed">
            Our flagship clinic provides a modern, comfortable environment for all your primary care needs, equipped with advanced clinical technology and led by Dr. Kavitha Ilayaraja, MD.
          </p>
        </div>
      </section>

      {/* ── ASYMMETRIC MAP INTERFACE ── */}
      <section className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Main Map Visual */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[500px] relative rounded-[4rem] overflow-hidden bg-brand-primary group shadow-2xl">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-[10s]" />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-80" />
               
               <div className="absolute bottom-12 inset-x-12 space-y-6">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-white shadow-xl">
                        <MapPin size={24} />
                     </div>
                     <p className="text-xl font-bold text-white tracking-tight">
                        {clinicInfo.contact.address.street}, {clinicInfo.contact.address.city}
                     </p>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.contact.address.street + " " + clinicInfo.contact.address.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button size="xl" className="px-12 h-16 rounded-3xl group bg-brand-accent text-white border-transparent hover:bg-white hover:text-brand-primary transition-all">
                      Directions <Navigation size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </a>
               </div>
            </div>
          </div>

          {/* Contact & Hours Card */}
          <div className="lg:col-span-5">
            <div className="h-full p-12 lg:p-16 bg-white border border-slate-100 rounded-[4rem] space-y-12 shadow-sm hover:shadow-2xl transition-all duration-700">
               <div className="space-y-10">
                  <h3 className="text-sm font-black text-brand-primary uppercase tracking-[0.3em]">Communication Hub</h3>
                  <div className="space-y-8">
                     <div className="flex items-start gap-6 group">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all">
                           <Phone size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted mb-1">Direct Line</p>
                           <a href={`tel:${clinicInfo.contact.phone}`} className="text-2xl font-black text-brand-primary hover:text-brand-accent transition-colors">
                              {clinicInfo.contact.phone}
                           </a>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-all">
                           <Mail size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted mb-1">Health Support</p>
                           <a href={`mailto:${clinicInfo.contact.email}`} className="text-2xl font-black text-brand-primary hover:text-brand-accent transition-colors">
                              {clinicInfo.contact.email}
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-6 pt-10 border-t border-slate-50">
                  <h3 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.3em] flex items-center gap-2">
                     <Clock size={14} className="text-brand-accent" /> Patient Access Hours
                  </h3>
                  <ul className="space-y-4">
                     {clinicInfo.contact.hours.map((hour, idx) => (
                        <li key={idx} className="flex justify-between items-center text-sm font-bold border-b border-slate-50 pb-4">
                           <span className="text-brand-muted">{hour.days}</span>
                           <span className="text-brand-primary">{hour.time}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITY HIGHLIGHT GRID ── */}
      <section className="container-custom mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         {[
           { icon: Building2, title: "Modern Clinical Lab", desc: "Full diagnostic suite including bloodwork and wellness screenings." },
           { icon: ShieldCheck, title: "Compliance Hub", desc: "Rigorous HIPAA standards ensuring your medical records remain private." },
           { icon: Heart, title: "Patient Comfort", desc: "Designed to reduce anxiety with private suites and minimalist therapy rooms." },
           { icon: Plus, title: "Acute Support", desc: "Dedicated fast-track rooms for same-day sickness or urgent needs." }
         ].map((item, i) => (
           <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] space-y-8 hover:bg-brand-surface hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                 <item.icon size={24} />
              </div>
              <div className="space-y-4">
                 <h4 className="text-xl font-black text-brand-primary tracking-tight">{item.title}</h4>
                 <p className="text-sm text-brand-muted font-medium leading-relaxed">{item.desc}</p>
              </div>
           </div>
         ))}
      </section>

      {/* ── BOLD CTA ── */}
      <section className="container-custom mt-32 text-center space-y-12">
          <div className="w-20 h-20 bg-brand-accent/10 rounded-[2rem] flex items-center justify-center text-brand-accent mx-auto">
            <Navigation size={40} className="fill-brand-accent" />
          </div>
          <h2 className="text-6xl sm:text-7xl font-black text-brand-primary tracking-tighter leading-none">
            Ready for a <br />
            <span className="text-slate-300">clinical visit?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link to="/appointments">
                <Button size="xl" className="px-16 h-20 rounded-3xl text-xl font-black group">
                  Book at Frisco <ArrowRight size={24} className="ml-3 transition-transform group-hover:translate-x-1" />
                </Button>
             </Link>
             <Link to="/contact">
                <Button variant="outline" size="xl" className="px-16 h-20 rounded-3xl text-xl font-black border-slate-200 hover:bg-brand-primary hover:text-white group">
                  Contact Support
                </Button>
             </Link>
          </div>
      </section>

    </div>
  );
}
