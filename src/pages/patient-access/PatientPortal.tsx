import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { ShieldCheck, Mail, ClipboardList, Activity, Lock, ArrowUpRight, HelpCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function PatientPortal() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Patient Portal"
        subtitle="Securely manage your health records, view lab results, and message our office 24/7."
        breadcrumbs={[
          { name: 'Patient Access', path: '/patient-access' },
          { name: 'Patient Portal', path: '/patient-access/portal' }
        ]}
      />

      <section className="section-padding bg-brand-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-12">
                 <div className="space-y-6">
                    <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
                    <h2 className="text-4xl lg:text-5xl font-black text-brand-primary">Control Your Health Data</h2>
                    <p className="text-lg font-medium text-slate-600 leading-relaxed">
                      Powered by **Healow**, our secure patient portal puts your medical information 
                      at your fingertips. Access your data from any desktop or mobile device.
                    </p>
                 </div>

                 <div className="grid sm:grid-cols-2 gap-8">
                    {[
                      { icon: ClipboardList, title: "Lab Results", desc: "View and download your latest diagnostic results as soon as they are ready." },
                      { icon: Mail, title: "Secure Messaging", desc: "Communicate directly with our medical team for non-urgent inquiries." },
                      { icon: Activity, title: "Health Records", desc: "Access your complete medical history, medications, and immunization records." },
                      { icon: Lock, title: "Secure & Private", desc: "Advanced encryption protects your PHI and ensures HIPAA compliance." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-8 bg-brand-accent rounded-[32px] border border-brand-accent/50 shadow-sm space-y-4 group hover:-translate-y-1 transition-all">
                         <div className="w-12 h-12 bg-brand-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-brand-white transition-colors">
                            <item.icon size={24} />
                         </div>
                         <h3 className="text-xl font-black text-brand-primary">{item.title}</h3>
                         <p className="text-sm font-bold text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    <a href={clinicInfo.portalUrls.patientPortal} target="_blank" rel="noopener noreferrer">
                       <Button size="lg" className="h-16 px-12 text-lg gap-2">
                          Login to Portal <ArrowUpRight size={20} />
                       </Button>
                    </a>
                    <Button variant="outline" size="lg" className="h-16 px-12 text-lg">
                       Create New Account
                    </Button>
                 </div>
              </div>

              <div className="relative group lg:pl-12">
                 <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-[16px] border-brand-light shadow-2xl bg-slate-100 flex items-center justify-center relative rotate-2 group-hover:rotate-0 transition-all duration-700">
                    <div className="text-center p-12 space-y-6">
                       <div className="w-20 h-20 bg-brand-primary rounded-2xl flex items-center justify-center text-brand-white mx-auto shadow-xl">
                          <ShieldCheck size={40} />
                       </div>
                       <h3 className="text-2xl font-black text-brand-primary uppercase tracking-widest leading-tight">Patient Portal <br/> Secure Gateway</h3>
                    </div>
                 </div>
                 
                 {/* Support Float Information */}
                 <div className="absolute -bottom-10 -left-10 md:left-0 bg-brand-primary text-brand-white p-10 rounded-[40px] shadow-2xl border border-white/10 max-w-[320px] z-20">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-secondary">
                          <HelpCircle size={28} />
                       </div>
                       <h4 className="text-lg font-black tracking-tight">Need Support?</h4>
                    </div>
                    <p className="text-sm font-bold text-brand-accent/80 leading-relaxed">
                       If you're having trouble logging in or need to reset your password, please contact our office during business hours.
                    </p>
                    <div className="mt-6 pt-6 border-t border-white/10">
                       <a href={`tel:${clinicInfo.contact.phone}`} className="text-brand-secondary font-black text-lg block hover:underline transition-all underline-offset-8">
                          Call: {clinicInfo.contact.phone}
                       </a>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
