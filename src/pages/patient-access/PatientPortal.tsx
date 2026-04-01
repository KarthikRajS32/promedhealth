import { motion } from 'framer-motion';
import { clinicInfo } from '../../data/content';
import { ShieldCheck, Mail, ClipboardList, Activity, Lock, HelpCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { SectionBanner } from '../../components/ui/SectionBanner';

export function PatientPortal() {
  const features = [
    { icon: ClipboardList, title: 'Lab Results', desc: 'View and download your latest diagnostic results as soon as they are processed.' },
    { icon: Mail, title: 'Secure Messaging', desc: 'Communicate directly with our medical team for non-urgent clinical inquiries.' },
    { icon: Activity, title: 'Health Records', desc: 'Access your complete medical history, active medications, and immunization records.' },
    { icon: Lock, title: 'PHI Security', desc: 'Military-grade encryption protects your PHI and ensures strict HIPAA compliance.' },
  ];

  const slideLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Patient Portal"
        subtitle="Powered by Healow — secure 24/7 access to your health records, lab results, and clinical team."
        breadcrumbs={[{ name: 'Patient Access', path: '/patient-access' }, { name: 'Patient Portal', path: '/patient-access/portal' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Login card */}
            <motion.div 
              {...slideLeft}
              className="bg-brand-primary p-8 space-y-6"
            >
              <div className="w-10 h-10 bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                <ShieldCheck size={18} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl text-white">Secure Portal Access</h2>
                <p className="text-sm text-white/50 leading-relaxed">
                  Log in to your Healow patient portal to access your medical records, view lab results, and message your care team securely.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={clinicInfo.portalUrls.patientPortal} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-[#267a7a] text-white text-sm font-medium px-6 py-3 transition-colors">
                  <ExternalLink size={14} /> Login to Healow
                </a>
              </div>
              <div className="flex flex-wrap gap-5 pt-2">
                {['Encrypted', 'HIPAA Verified', 'Cloud Managed'].map(item => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-white/40">
                    <CheckCircle size={12} className="text-brand-secondary" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Support card */}
            <motion.div 
               {...slideRight}
               className="bg-brand-warm border border-slate-100 p-8 space-y-5"
            >
              <div className="w-10 h-10 bg-brand-accent flex items-center justify-center text-brand-secondary">
                <HelpCircle size={18} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-brand-primary font-sans">Need Help?</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Experiencing technical issues or need a password reset? Our team can verify your identity and restore access.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-1.5">Call Us</p>
                <a href={`tel:${clinicInfo.contact.phone}`} className="text-lg font-semibold text-brand-primary hover:text-brand-secondary transition-colors font-sans">
                  {clinicInfo.contact.phone}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-warm border border-slate-100 p-5 space-y-3 hover:border-brand-secondary/30 hover:shadow-sm transition-all group"
              >
                <div className="w-9 h-9 bg-brand-accent flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <f.icon size={16} />
                </div>
                <p className="text-sm font-semibold text-brand-primary font-sans">{f.title}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
