import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { MapPin, Phone, Mail, Navigation, Building2, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
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
                    <h2 className="text-4xl lg:text-7xl font-black text-brand-primary tracking-tight">Our Main <br/> Clinical Hub</h2>
                    <p className="text-xl font-medium text-slate-600 leading-relaxed max-w-xl">
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

                 <div className="p-10 bg-brand-primary rounded-[40px] text-brand-white shadow-xl shadow-brand-primary/10">
                    <div className="grid sm:grid-cols-2 gap-12">
                       <div className="space-y-6">
                          <h4 className="text-xl font-black tracking-widest uppercase">Office Hours</h4>
                          <ul className="space-y-3">
                             {clinicInfo.contact.hours.map((hour, idx) => (
                                <li key={idx} className="flex justify-between text-sm font-bold">
                                   <span className="text-brand-accent/60">{hour.days}</span>
                                   <span>{hour.time}</span>
                                </li>
                             ))}
                          </ul>
                       </div>
                       <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
                          <h4 className="text-xl font-black tracking-widest uppercase">Contact Direct</h4>
                          <div className="space-y-4">
                             <a href={`tel:${clinicInfo.contact.phone}`} className="flex items-center gap-3 text-brand-secondary font-black text-lg hover:underline transition-all">
                                <Phone size={20} /> {clinicInfo.contact.phone}
                             </a>
                             <a href={`mailto:${clinicInfo.contact.email}`} className="flex items-center gap-3 text-brand-accent hover:text-white transition-colors">
                                <Mail size={18} /> {clinicInfo.contact.email}
                             </a>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Map & Nav Column */}
              <div className="space-y-10 lg:sticky lg:top-32">
                 {/* Map Placeholder */}
                 <div className="aspect-square w-full rounded-[48px] overflow-hidden bg-slate-100 border-[16px] border-brand-accent shadow-2xl relative group">
                    <div className="absolute inset-0 bg-brand-secondary/5 opacity-50 mix-blend-overlay" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-4">
                       <div className="w-20 h-20 bg-brand-white rounded-3xl flex items-center justify-center text-brand-primary shadow-xl group-hover:scale-110 transition-transform">
                          <MapPin size={40} />
                       </div>
                       <div className="space-y-2">
                          <h3 className="text-2xl font-black text-brand-primary">Interactive Map</h3>
                          <p className="text-sm font-bold text-slate-400">Placeholder for Google Maps API</p>
                       </div>
                    </div>
                    
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
