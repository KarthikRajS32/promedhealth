import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { ShieldCheck, Mail, ClipboardList, Activity, Lock, HelpCircle, CheckCircle, ExternalLink } from 'lucide-react';

export function PatientPortal() {
  const features = [
    { icon: ClipboardList, title: 'Lab Results',    desc: 'View and download your latest diagnostic results as soon as they are processed.' },
    { icon: Mail,          title: 'Secure Messaging',desc: 'Communicate directly with our medical team for non-urgent clinical inquiries.' },
    { icon: Activity,      title: 'Health Records',  desc: 'Access your complete medical history, active medications, and immunization records.' },
    { icon: Lock,          title: 'PHI Security',    desc: 'Military-grade encryption protects your PHI and ensures strict HIPAA compliance.' },
  ];

  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Patient Portal"
        subtitle="Powered by Healow — secure 24/7 access to your health records, lab results, and clinical team."
        breadcrumbs={[{ name: 'Patient Access', path: '/patient-access' }, { name: 'Patient Portal', path: '/patient-access/portal' }]}
      />

      <section className="sp bg-warm">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-p rounded-2xl p-8 space-y-6 rv-left">
              <div className="w-10 h-10 bg-s/20 rounded-xl flex items-center justify-center text-s">
                <ShieldCheck size={18} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl text-white">Secure Portal Access</h2>
                <p className="text-sm text-white/55 leading-relaxed">Log in to your Healow patient portal to access your medical records, view lab results, and message your care team securely.</p>
              </div>
              <a href={clinicInfo.portalUrls.patientPortal} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-px shadow-sm">
                <ExternalLink size={14} /> Login to Healow
              </a>
              <div className="flex flex-wrap gap-4 pt-2">
                {['Encrypted', 'HIPAA Verified', 'Cloud Managed'].map(item => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-white/40">
                    <CheckCircle size={11} className="text-s" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 space-y-5 rv-right">
              <div className="w-10 h-10 bg-a rounded-xl flex items-center justify-center text-s">
                <HelpCircle size={18} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-p">Need Help?</h3>
                <p className="text-sm text-muted leading-relaxed">Experiencing technical issues or need a password reset? Our team can verify your identity and restore access.</p>
              </div>
              <div className="pt-3 border-t border-border">
                <p className="text-xs text-muted uppercase tracking-widest mb-1.5">Call Us</p>
                <a href={`tel:${clinicInfo.contact.phone}`} className="text-base font-semibold text-p hover:text-s transition-colors">
                  {clinicInfo.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {features.map((f, i) => (
              <div key={i} className={`bg-card border border-border rounded-2xl p-5 space-y-3 hover:border-s/30 hover:shadow-md hover:-translate-y-0.5 transition-all group rv-up d${i+1}`}>
                <div className="w-9 h-9 bg-a rounded-lg flex items-center justify-center text-s group-hover:bg-s group-hover:text-white transition-all">
                  <f.icon size={16} />
                </div>
                <p className="text-sm font-semibold text-p">{f.title}</p>
                <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
