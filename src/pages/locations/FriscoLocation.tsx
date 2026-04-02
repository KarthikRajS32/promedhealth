import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { MapPin, Phone, Mail, Navigation, Building2, ShieldCheck, Heart, ArrowRight, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export function FriscoLocation() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Frisco Location"
        subtitle="Conveniently located in the heart of Frisco, providing high-quality primary care to the local community."
        breadcrumbs={[
          { name: 'Locations', path: '/locations' },
          { name: 'Frisco', path: '/locations/frisco' }
        ]}
      />

      <section className="section-padding bg-brand-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Location Info Column */}
              <div className="space-y-12">
                 <div className="space-y-6">
                    <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
                    <h2 className="text-4xl lg:text-5xl font-black text-brand-primary tracking-tight">Our Main <br/> Clinical Hub</h2>
                    <p className="text-lg font-medium text-slate-600 leading-relaxed max-w-xl">
                       Our Frisco office offers a modern, comfortable environment for 
                       all your primary care needs, equipped with advanced clinical technology 
                       and led by Dr. Kavitha Ilayaraja, MD.
                    </p>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-8">
                    {[
                      { icon: Building2, title: "Modern Facility", desc: "Equipped with the latest diagnostic and screening technology." },
                      { icon: ShieldCheck, title: "Trusted Care", desc: "A safe, HIPAA-compliant environment for your health files." },
                      { icon: Heart, title: "Compassionate", desc: "Our staff is dedicated to your comfort and health journey." },
                      { icon: MapPin, title: "Accessibility", desc: "Easy access from Independence Pkwy and Main St." }
                    ].map((item, idx) => (
                       <div key={idx} className="space-y-4 p-8 bg-brand-accent rounded-[32px] border border-brand-accent/50 group hover:-translate-y-1 transition-all">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-secondary shadow-sm group-hover:bg-brand-primary group-hover:text-brand-white transition-colors">
                             <item.icon size={24} />
                          </div>
                          <h4 className="text-lg font-black text-brand-primary leading-tight">{item.title}</h4>
                          <p className="text-sm font-bold text-slate-500 leading-relaxed">{item.desc}</p>
                       </div>
                    ))}
                 </div>

                 <div className="bg-brand-primary rounded-[40px] text-brand-white shadow-xl shadow-brand-primary/10 overflow-hidden">
                    {/* Office Hours */}
                    <div className="p-8 space-y-4">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                             <Clock size={16} className="text-brand-secondary" />
                          </div>
                          <h4 className="text-sm font-black tracking-widest uppercase text-white/60">Office Hours</h4>
                       </div>
                       <ul className="space-y-3">
                          {clinicInfo.contact.hours.map((hour, idx) => (
                             <li key={idx} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                                <span className="text-sm font-medium text-white/60">{hour.days}</span>
                                <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                                   hour.time === 'Closed'
                                      ? 'bg-white/10 text-white/40'
                                      : 'bg-brand-secondary/20 text-brand-secondary'
                                }`}>{hour.time}</span>
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Contact Direct */}
                    <div className="p-8 space-y-4 border-t border-white/10">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                             <Phone size={16} className="text-brand-secondary" />
                          </div>
                          <h4 className="text-sm font-black tracking-widest uppercase text-white/60">Contact Direct</h4>
                       </div>
                       <a href={`tel:${clinicInfo.contact.phone}`}
                          className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors group">
                          <div className="w-9 h-9 bg-brand-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                             <Phone size={16} className="text-brand-secondary" />
                          </div>
                          <div>
                             <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Phone</p>
                             <p className="text-sm font-bold text-white group-hover:text-brand-secondary transition-colors">{clinicInfo.contact.phone}</p>
                          </div>
                       </a>
                       <a href={`mailto:${clinicInfo.contact.email}`}
                          className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors group">
                          <div className="w-9 h-9 bg-brand-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                             <Mail size={16} className="text-brand-secondary" />
                          </div>
                          <div>
                             <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Email</p>
                             <p className="text-sm font-bold text-white group-hover:text-brand-secondary transition-colors">{clinicInfo.contact.email}</p>
                          </div>
                       </a>
                    </div>
                 </div>
              </div>

              {/* Map & Nav Column */}
              <div className="space-y-10 lg:sticky lg:top-32">
                 {/* Interactive Map */}
                 <div className="aspect-square w-full rounded-[48px] overflow-hidden border-[16px] border-brand-accent shadow-2xl relative group">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.670356763442!2d-96.7562854!3d33.1558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c393bc3075f%3A0xc6cb1c7df8b64e0!2s11691%20Independence%20Pkwy%20%23110%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1711894000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ProMed Health Frisco Location"
                    />
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.contact.address.street + " " + clinicInfo.contact.address.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-10 inset-x-10"
                    >
                       <Button size="lg" className="w-full h-16 rounded-2xl gap-2 shadow-2xl">
                          Get Directions <Navigation size={20} />
                       </Button>
                    </a>
                 </div>

                 <div className="p-10 bg-brand-white rounded-[40px] border border-brand-accent shadow-lg shadow-brand-primary/5 space-y-8">
                    <div className="space-y-4">
                       <h3 className="text-xl font-black text-brand-primary uppercase tracking-tight">Main Address</h3>
                       <p className="text-lg font-bold text-slate-500 leading-relaxed">
                          {clinicInfo.contact.address.street},<br />
                          {clinicInfo.contact.address.city}, {clinicInfo.contact.address.state} {clinicInfo.contact.address.zip}
                       </p>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-brand-accent/50">
                       <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none">Booking</h4>
                       <Link to="/appointments">
                          <Button variant="outline" className="w-full h-16 rounded-2xl gap-2 font-black border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white">
                             Schedule at this Location <ArrowRight size={20} />
                          </Button>
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
