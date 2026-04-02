import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { CheckCircle, ShieldCheck, Globe, Monitor, Play } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { joinTelevisit } from '../../assets';

export function Televisit() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Televisit"
        subtitle="Convenient, secure medical consultations from the comfort and safety of your home."
        breadcrumbs={[
          { name: 'Patient Access', path: '/patient-access' },
          { name: 'Televisit', path: '/patient-access/televisit' }
        ]}
      />

      <section className="section-padding bg-brand-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Illustration / Image Column */}
            <div className="relative group">
               <a
                  href="https://www.youtube.com/watch?v=HFrR3D2BMaQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-[7/5] max-w-xl mx-auto rounded-[40px] overflow-hidden border-[6px] border-brand-white shadow-2xl relative"
               >
                  <img
                     src={joinTelevisit}
                     alt="Televisit"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl
                        scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100
                        transition-all duration-300">
                        <Play size={24} className="text-brand-primary ml-1" fill="currentColor" />
                     </div>
                  </div>
               </a>
            </div>

            {/* Content Column */}
            <div className="space-y-10">
               <div className="space-y-6">
                  <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
                  <h2 className="text-3xl lg:text-4xl font-black text-brand-primary">Healthcare <br/> On Your Schedule</h2>
                  <p className="text-md font-medium text-slate-600 leading-relaxed">
                    Powered by **Healow**, our televisit platform provides a secure, HD video link 
                    directly to Dr. Ilayaraja. Experience clinical care without the commute.
                  </p>
               </div>

               <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { icon: Monitor, title: "HD Video Quality", desc: "Clear, real-time communication for accurate remote diagnosis." },
                    { icon: ShieldCheck, title: "HIPAA Compliant", desc: "All visits are encrypted and private, ensuring your safety." },
                    { icon: Globe, title: "Accessible Anywhere", desc: "Connect from home, work, or while traveling via web or mobile." },
                    { icon: CheckCircle, title: "No Commute", desc: "Save time and effort by avoiding travel and waiting rooms." }
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

               <div className="pt-8 space-y-6">
                  <h4 className="text-lg font-black text-brand-primary border-l-4 border-brand-secondary pl-4 uppercase tracking-widest">How to Connect?</h4>
                  <p className="text-slate-600 text-md font-medium leading-relaxed">
                    Simply request a Televisit during booking or via the patient portal. 
                    You'll receive a secure link 15 minutes before your scheduled appointment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={clinicInfo.portalUrls.televisit} target="_blank" rel="noopener noreferrer">
                       <Button size="lg" className="h-12 px-4 text-md">Start My Televisit</Button>
                    </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="section-padding bg-brand-light border-y border-brand-accent">
        <div className="container-custom">
           <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3 space-y-6">
                 <h2 className="text-3xl font-black text-brand-primary">Prepare for Your Visit</h2>
                 <p className="text-md font-medium text-slate-500">Ensure a smooth experience by following these simple steps before you connect.</p>
              </div>
              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                 {[
                   { step: "1", title: "Stable Connection", desc: "Ensure you have a reliable high-speed internet connection via Wi-Fi or 4G/5G." },
                   { step: "2", title: "Quiet Space", desc: "Find a well-lit, private area where you won't be interrupted during your consult." },
                   { step: "3", title: "Device Check", desc: "Test your camera and microphone. Most modern smartphones and laptops work perfectly." },
                   { step: "4", title: "Wait for Link", desc: "Click the text or email link sent by our office 15 minutes before your time." }
                 ].map((item, idx) => (
                    <div key={idx} className="p-10 bg-brand-white rounded-[40px] border border-brand-accent group hover:-translate-y-2 transition-all duration-300">
                       <span className="text-5xl font-black text-brand-secondary opacity-20 block mb-4 group-hover:opacity-40 transition-opacity italic">0{item.step}</span>
                       <h3 className="text-2xl font-black text-brand-primary mb-2">{item.title}</h3>
                       <p className="text-sm font-bold text-slate-500 leading-relaxed">
                          {item.desc}
                       </p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
