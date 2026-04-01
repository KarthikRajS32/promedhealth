import { motion } from 'framer-motion';
import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { Monitor, ShieldCheck, Globe, Smartphone, CheckCircle, Play } from 'lucide-react';

export function Televisit() {
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
        title="Televisit"
        subtitle="Secure, convenient medical consultations from the comfort of your home."
        breadcrumbs={[{ name: 'Patient Access', path: '/patient-access' }, { name: 'Televisit', path: '/patient-access/televisit' }]}
      />

      {/* Hero split */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              {...slideLeft}
              className="max-w-sm mx-auto lg:mx-0"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <a href="https://www.youtube.com/watch?v=HFrR3D2BMaQ" target="_blank" rel="noopener noreferrer" className="relative block group">
                  <img src="/images/join-televisit-landing.png" alt="Televisit" className="w-full object-cover" />
                  <div className="absolute inset-0 bg-brand-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play size={20} className="text-brand-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div 
              {...slideRight}
              className="space-y-6"
            >
              <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Powered by Healow</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-brand-primary">Healthcare On Your Schedule</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our televisit platform provides a secure, HD video link directly to Dr. Ilayaraja. Experience clinical care without the commute — from home, work, or anywhere.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Monitor, title: 'HD Video Quality', desc: 'Clear real-time communication for accurate remote diagnosis.' },
                  { icon: ShieldCheck, title: 'HIPAA Compliant', desc: 'All visits are encrypted and fully private.' },
                  { icon: Globe, title: 'Accessible Anywhere', desc: 'Connect via web or mobile from any location.' },
                  { icon: Smartphone, title: 'No Commute', desc: 'Save time by avoiding travel and waiting rooms.' },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-brand-light rounded-xl border border-slate-100">
                    <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-brand-secondary shrink-0">
                      <f.icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-primary">{f.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href={clinicInfo.portalUrls.televisit} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-[#007aab] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors">
                Start My Televisit
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Preparation steps */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div 
            {...fadeUp}
            className="text-center mb-10 space-y-2"
          >
            <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Before You Connect</p>
            <h2 className="text-2xl font-bold text-brand-primary">Prepare for Your Visit</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Stable Connection', desc: 'Ensure reliable high-speed internet via Wi-Fi or 4G/5G.' },
              { step: '02', title: 'Quiet Space', desc: 'Find a well-lit, private area free from interruptions.' },
              { step: '03', title: 'Device Check', desc: 'Test your camera and microphone before the appointment.' },
              { step: '04', title: 'Wait for Link', desc: 'Click the secure link sent 15 minutes before your time.' },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <p className="text-2xl font-bold text-brand-secondary/30 mb-3">{s.step}</p>
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle size={14} className="text-brand-secondary shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-brand-primary">{s.title}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-5">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
