import { SectionBanner } from '../components/ui/SectionBanner';
import { clinicInfo } from '../data/content';
import { Calendar, Smartphone, ShieldCheck, Clock, Phone, CheckCircle, ArrowUpRight } from 'lucide-react';

export function Appointments() {
  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Book Appointment"
        subtitle="Schedule your clinical visit online or via telephone for seamless healthcare access."
        breadcrumbs={[{ name: 'Appointments', path: '/appointments' }]}
      />

      <section className="sp bg-warm">
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {/* Online */}
            <div className="bg-card border border-border rounded-2xl p-7 space-y-5 rv-left">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-a rounded-xl flex items-center justify-center text-s">
                  <Calendar size={18} />
                </div>
                <span className="text-xs font-semibold text-muted uppercase tracking-widest">Option 01</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-p">Book Online</h3>
                <p className="text-sm text-muted leading-relaxed">Access Dr. Ilayaraja's real-time availability. Best for physicals, follow-ups, and non-emergent visits.</p>
              </div>
              <ul className="space-y-2">
                {['24/7 Online Access', 'Instant Confirmation', 'Secure & Private'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted">
                    <CheckCircle size={12} className="text-s shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href={clinicInfo.portalUrls.patientPortal} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-px w-full justify-center shadow-sm">
                <ArrowUpRight size={14} /> Launch Scheduler
              </a>
            </div>

            {/* Phone */}
            <div className="bg-p rounded-2xl p-7 space-y-5 rv-right">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-s">
                  <Phone size={18} />
                </div>
                <span className="text-xs font-semibold text-white/30 uppercase tracking-widest">Option 02</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Call to Book</h3>
                <p className="text-sm text-white/55 leading-relaxed">Prefer speaking with someone? Our team can help coordinate complex visits or multi-physician record transfers.</p>
              </div>
              <ul className="space-y-2">
                {['Personalized Assistance', 'Complex Visit Coordination', 'Mon–Fri 8AM–5PM'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/60">
                    <CheckCircle size={12} className="text-s shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <a href={`tel:${clinicInfo.contact.phone}`}
                className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-px w-full justify-center shadow-sm">
                <Phone size={14} /> {clinicInfo.contact.phone}
              </a>
            </div>
          </div>

          {/* Healow app */}
          <div className="bg-card border border-border rounded-2xl p-7 rv-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full">Mobile App</div>
                <h3 className="text-xl font-semibold text-p">Book on the Go with Healow</h3>
                <p className="text-sm text-muted leading-relaxed">Download the Healow app for the fastest coordination of your medical records and appointments from your phone.</p>
                <div className="flex items-center gap-3 p-4 bg-ink rounded-2xl">
                  <Smartphone size={18} className="text-s shrink-0" />
                  <div>
                    <p className="text-xs text-white/50">Practice Code</p>
                    <p className="text-lg font-bold text-white tracking-widest">PHPC</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Clock,       title: 'Same-Day Access',  desc: 'Acute issues prioritized for same-day consultation.' },
                  { icon: ShieldCheck, title: 'HIPAA Certified',  desc: 'Digital intake protected by medical encryption.' },
                  { icon: Smartphone,  title: 'Universal Sync',   desc: 'Appointments sync instantly across all devices.' },
                  { icon: Calendar,    title: 'Easy Reschedule',  desc: 'Modify or cancel appointments anytime online.' },
                ].map((item, i) => (
                  <div key={i} className={`bg-warm border border-border rounded-xl p-4 space-y-2 rv-up d${i+1}`}>
                    <item.icon size={15} className="text-s" />
                    <p className="text-xs font-semibold text-p">{item.title}</p>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
