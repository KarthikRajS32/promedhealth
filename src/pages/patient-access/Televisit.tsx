import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { CheckCircle, ShieldCheck, Globe, Monitor, Play } from 'lucide-react';
import { joinTelevisit } from '../../assets';

export function Televisit() {
  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Televisit"
        subtitle="Convenient, secure medical consultations from the comfort and safety of your home."
        breadcrumbs={[{ name: 'Patient Access', path: '/patient-access' }, { name: 'Televisit', path: '/patient-access/televisit' }]}
      />

      <section className="sp bg-warm">
        <div className="wrap ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-[-70px]">

            {/* Image */}
            <div className="rv-left">
              <div className="max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-xl border border-border">
                <a href="https://www.youtube.com/watch?v=HFrR3D2BMaQ" target="_blank" rel="noopener noreferrer" className="relative block group">
                  <img src={joinTelevisit} alt="Televisit" className="w-full object-cover" />
                  <div className="absolute inset-0 bg-p/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play size={20} className="text-p ml-1" fill="currentColor" />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 rv-right">
              <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full">Powered by Healow</div>
              <h2 className="text-3xl lg:text-4xl">Healthcare On Your Schedule</h2>
              <p className="text-sm text-muted leading-relaxed">
                Our televisit platform provides a secure, HD video link directly to Dr. Ilayaraja. Experience clinical care without the commute — from home, work, or anywhere.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Monitor,     title: 'HD Video Quality',   desc: 'Clear real-time communication for accurate remote diagnosis.' },
                  { icon: ShieldCheck, title: 'HIPAA Compliant',    desc: 'All visits are encrypted and fully private.' },
                  { icon: Globe,       title: 'Accessible Anywhere',desc: 'Connect via web or mobile from any location.' },
                  { icon: CheckCircle, title: 'No Commute',         desc: 'Save time by avoiding travel and waiting rooms.' },
                ].map((f, i) => (
                  <div key={i} className={`flex items-start gap-3 p-4 bg-card border border-border rounded-2xl rv-up d${i+1}`}>
                    <div className="w-8 h-8 rounded-lg bg-a flex items-center justify-center text-s shrink-0">
                      <f.icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-p">{f.title}</p>
                      <p className="text-xs text-muted mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-p border-l-4 border-s pl-3">How to Connect?</h4>
                <p className="text-sm text-muted leading-relaxed">
                  Simply request a Televisit during booking or via the patient portal. You'll receive a secure link 15 minutes before your scheduled appointment.
                </p>
                <a href={clinicInfo.portalUrls.televisit} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-px shadow-sm">
                  Start My Televisit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="sp bg-card border-t border-border ">
        <div className="wrap mt-[-70px]">
          <div className="text-center mb-10 rv-up">
            <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-2 rounded-full mb-3">Before You Connect</div>
            <h2 className="text-3xl">Prepare for Your Visit</h2>
            <p className="text-sm text-muted mt-2">Ensure a smooth experience by following these simple steps.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'Stable Connection', desc: 'Ensure reliable high-speed internet via Wi-Fi or 4G/5G.' },
              { step: '02', title: 'Quiet Space',       desc: 'Find a well-lit, private area free from interruptions.' },
              { step: '03', title: 'Device Check',      desc: 'Test your camera and microphone before the appointment.' },
              { step: '04', title: 'Wait for Link',     desc: 'Click the secure link sent 15 minutes before your time.' },
            ].map((s, i) => (
              <div key={i} className={`bg-warm border border-border rounded-2xl p-5 hover:border-s/30 hover:shadow-md hover:-translate-y-0.5 transition-all rv-up d${i+1}`}>
                <p className="text-2xl font-bold text-s/25 mb-3">{s.step}</p>
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle size={13} className="text-s shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-p">{s.title}</p>
                </div>
                <p className="text-xs text-muted leading-relaxed pl-5">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
