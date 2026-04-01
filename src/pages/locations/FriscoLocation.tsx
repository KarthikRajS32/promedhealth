import { motion } from 'framer-motion';
import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { MapPin, Phone, Mail, Clock, Navigation, Building2, ShieldCheck, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FriscoLocation() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const slideRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Frisco Location"
        subtitle="Our flagship clinic providing modern, comfortable primary care in Frisco, TX."
        breadcrumbs={[{ name: 'Locations', path: '/locations' }, { name: 'Frisco', path: '/locations/frisco' }]}
      />

      {/* Map + Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div 
              {...slideLeft}
              className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-80 lg:h-auto"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.670356763442!2d-96.7562854!3d33.1558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c393bc3075f%3A0xc6cb1c7df8b64e0!2s11691%20Independence%20Pkwy%20%23110%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1711894000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Contact info */}
            <motion.div 
              {...slideRight}
              className="space-y-5"
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Contact & Hours</p>
                <h2 className="text-2xl font-bold text-brand-primary">ProMed Health — Frisco</h2>
              </div>

              <div className="space-y-3">
                {[
                  { icon: MapPin, label: 'Address', value: `${clinicInfo.contact.address.street}, Suite 110, ${clinicInfo.contact.address.city}, TX ${clinicInfo.contact.address.zip}` },
                  { icon: Phone, label: 'Phone', value: clinicInfo.contact.phone, href: `tel:${clinicInfo.contact.phone}` },
                  { icon: Mail, label: 'Email', value: clinicInfo.contact.email, href: `mailto:${clinicInfo.contact.email}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-brand-light rounded-xl border border-slate-100">
                    <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-brand-secondary shrink-0">
                      <item.icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors mt-0.5 block">{item.value}</a>
                      ) : (
                        <p className="text-sm font-medium text-brand-primary mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hours */}
              <div className="bg-brand-light rounded-xl border border-slate-100 p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-brand-secondary" />
                  <p className="text-xs font-semibold text-brand-primary uppercase tracking-widest">Office Hours</p>
                </div>
                {clinicInfo.contact.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <span className="text-slate-500 text-xs">{h.days}</span>
                    <span className="text-brand-primary font-semibold text-xs">{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicInfo.contact.address.street + ' ' + clinicInfo.contact.address.city)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-[#007aab] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                  <Navigation size={14} /> Get Directions
                </a>
                <Link to="/appointments"
                  className="inline-flex items-center gap-2 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                  <Calendar size={14} /> Book Visit
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facility highlights */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div 
            {...fadeUp}
            className="text-center mb-8 space-y-2"
          >
            <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Our Facility</p>
            <h2 className="text-2xl font-bold text-brand-primary">What to Expect</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Building2, title: 'Modern Clinical Lab', desc: 'Full diagnostic suite including bloodwork and wellness screenings.' },
              { icon: ShieldCheck, title: 'HIPAA Compliant', desc: 'Rigorous standards ensuring your medical records remain private.' },
              { icon: Heart, title: 'Patient Comfort', desc: 'Designed to reduce anxiety with private, comfortable suites.' },
              { icon: Clock, title: 'Same-Day Visits', desc: 'Dedicated fast-track for same-day sickness or urgent needs.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group space-y-3"
              >
                <div className="w-9 h-9 bg-brand-accent rounded-lg flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <item.icon size={16} />
                </div>
                <p className="text-sm font-semibold text-brand-primary">{item.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
