import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { MapPin, Phone, Mail, Navigation, Building2, ShieldCheck, Heart, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FriscoLocation() {
  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Frisco Location"
        subtitle="Conveniently located in the heart of Frisco, providing high-quality primary care to the local community."
        breadcrumbs={[{ name: 'Locations', path: '/locations' }, { name: 'Frisco', path: '/locations/frisco' }]}
      />

      <section className="sp bg-warm">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-8 mt-[-50px] ">

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-80 lg:h-auto rv-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.670356763442!2d-96.7562854!3d33.1558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c393bc3075f%3A0xc6cb1c7df8b64e0!2s11691%20Independence%20Pkwy%20%23110%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1711894000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="space-y-5 rv-right">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full">Contact & Hours</div>
                <h2 className="text-2xl lg:text-3xl">ProMed Health — Frisco</h2>
              </div>

              <div className="space-y-3">
                {[
                  { icon: MapPin, label: 'Address', value: `${clinicInfo.contact.address.street}, Suite 110, ${clinicInfo.contact.address.city}, TX ${clinicInfo.contact.address.zip}` },
                  { icon: Phone,  label: 'Phone',   value: clinicInfo.contact.phone, href: `tel:${clinicInfo.contact.phone}` },
                  { icon: Mail,   label: 'Email',   value: clinicInfo.contact.email, href: `mailto:${clinicInfo.contact.email}` },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 bg-card border border-border rounded-2xl rv-up d${i+1}`}>
                    <div className="w-8 h-8 bg-a rounded-lg flex items-center justify-center text-s shrink-0">
                      <item.icon size={14} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wider">{item.label}</p>
                      {(item as any).href
                        ? <a href={(item as any).href} className="text-sm font-medium text-p hover:text-s transition-colors mt-0.5 block">{item.value}</a>
                        : <p className="text-sm font-medium text-p mt-0.5">{item.value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-2xl p-5 space-y-3 rv-up d4">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-s" />
                  <p className="text-xs font-semibold text-p uppercase tracking-widest">Office Hours</p>
                </div>
                {clinicInfo.contact.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-xs border-b border-border pb-2 last:border-0 last:pb-0">
                    <span className="text-muted">{h.days}</span>
                    <span className="text-p font-semibold">{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 rv-up d5">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.contact.address.street + ' ' + clinicInfo.contact.address.city)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-px shadow-sm">
                  <Navigation size={13} /> Get Directions
                </a>
                <Link to="/appointments"
                  className="inline-flex items-center gap-2 border border-p/20 text-p hover:bg-p hover:text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all">
                  <Calendar size={13} /> Book Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="sp bg-card border-t border-border">
        <div className="wrap mt-[-60px]">
          <div className="text-center mb-8 rv-up">
            <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Our Facility</div>
            <h2 className="text-3xl">What to Expect</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Building2,  title: 'Modern Clinical Lab', desc: 'Full diagnostic suite including bloodwork and wellness screenings.' },
              { icon: ShieldCheck,title: 'HIPAA Compliant',     desc: 'Rigorous standards ensuring your medical records remain private.' },
              { icon: Heart,      title: 'Patient Comfort',     desc: 'Designed to reduce anxiety with private, comfortable suites.' },
              { icon: Clock,      title: 'Same-Day Visits',     desc: 'Dedicated fast-track for same-day sickness or urgent needs.' },
            ].map((item, i) => (
              <div key={i} className={`bg-warm border border-border rounded-2xl p-5 hover:border-s/30 hover:shadow-md hover:-translate-y-0.5 transition-all group space-y-3 rv-up d${i+1}`}>
                <div className="w-9 h-9 bg-a rounded-lg flex items-center justify-center text-s group-hover:bg-s group-hover:text-white transition-all">
                  <item.icon size={16} />
                </div>
                <p className="text-sm font-semibold text-p">{item.title}</p>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
