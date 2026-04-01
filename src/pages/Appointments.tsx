import { motion } from 'framer-motion';
import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Calendar, Phone, Smartphone, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

export function Appointments() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Book an Appointment"
        subtitle="Schedule your visit online or by phone — we make it simple."
        breadcrumbs={[{ name: 'Appointments', path: '/appointments' }]}
      />

      {/* Two booking paths */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-5 mb-10">

            {/* Online */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-light rounded-2xl border border-slate-100 p-7 space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-secondary">
                  <Calendar size={18} />
                </div>
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Option 01</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-brand-primary">Book Online</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Access Dr. Ilayaraja's real-time availability. Best for physicals, follow-ups, and non-emergent visits.</p>
              </div>
              <div className="space-y-2">
                {['24/7 Online Access', 'Instant Confirmation', 'Secure & Private'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle size={12} className="text-brand-secondary shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <a href={clinicInfo.portalUrls.patientPortal} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-[#007aab] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors w-full justify-center">
                <Calendar size={14} /> Launch Scheduler
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-primary rounded-2xl p-7 space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-brand-secondary">
                  <Phone size={18} />
                </div>
                <span className="text-xs font-semibold text-white/30 uppercase tracking-widest">Option 02</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Call to Book</h3>
                <p className="text-sm text-white/60 leading-relaxed">Prefer speaking with someone? Our team can help coordinate complex visits or multi-physician record transfers.</p>
              </div>
              <div className="space-y-2">
                {['Personalized Assistance', 'Complex Visit Coordination', 'Mon–Fri 8AM–5PM'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle size={12} className="text-brand-secondary shrink-0" /> {item}
                  </div>
                ))}
              </div>
              <a href={`tel:${clinicInfo.contact.phone}`}
                className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-[#007aab] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors w-full justify-center">
                <Phone size={14} /> {clinicInfo.contact.phone}
              </a>
            </motion.div>
          </div>

          {/* Healow app */}
          <div className="bg-brand-light rounded-2xl border border-slate-100 p-7">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div 
                {...fadeUp}
                className="space-y-4"
              >
                <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Mobile App</p>
                <h3 className="text-xl font-bold text-brand-primary">Book on the Go with Healow</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Download the Healow app for the fastest coordination of your medical records and appointments from your phone.</p>
                <div className="flex items-center gap-3 p-4 bg-slate-900 rounded-xl">
                  <Smartphone size={20} className="text-brand-secondary shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Practice Code</p>
                    <p className="text-lg font-bold text-white tracking-widest">PHPC</p>
                  </div>
                </div>
              </motion.div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Clock, title: 'Same-Day Access', desc: 'Acute issues prioritized for same-day consultation.' },
                  { icon: ShieldCheck, title: 'HIPAA Certified', desc: 'Digital intake protected by medical encryption.' },
                  { icon: Smartphone, title: 'Universal Sync', desc: 'Appointments sync instantly across all devices.' },
                  { icon: Calendar, title: 'Easy Reschedule', desc: 'Modify or cancel appointments anytime online.' },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-xl border border-slate-100 p-4 space-y-2"
                  >
                    <item.icon size={16} className="text-brand-secondary" />
                    <p className="text-xs font-semibold text-brand-primary">{item.title}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
