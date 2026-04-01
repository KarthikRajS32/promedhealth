import { motion } from 'framer-motion';
import { clinicInfo } from '../../data/content';
import { CreditCard, ShieldCheck, Receipt, Lock, HelpCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { SectionBanner } from '../../components/ui/SectionBanner';

export function BillPay() {
  const features = [
    { icon: CreditCard, title: 'Major Carriers', desc: 'We accept Visa, Mastercard, American Express, and Discover digital payments.' },
    { icon: Receipt, title: 'Statement History', desc: 'View your full billing history and download receipts for tax or HSA records.' },
    { icon: ShieldCheck, title: 'Bank-Grade Encryption', desc: 'All transactions are processed via AES-256 encryption standards.' },
    { icon: Lock, title: 'HIPAA Protected', desc: 'Your financial data is siloed from clinical data to ensure maximum privacy.' },
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
        title="Pay Your Bill"
        subtitle="Manage your statements securely through HealowPay — simple, fast, and transparent."
        breadcrumbs={[{ name: 'Patient Access', path: '/patient-access' }, { name: 'Pay Your Bill', path: '/patient-access/bill-pay' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pay card */}
            <motion.div 
              {...slideLeft}
              className="bg-brand-primary p-8 space-y-6"
            >
              <div className="w-10 h-10 bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                <CreditCard size={18} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl text-white">Pay Online</h2>
                <p className="text-sm text-white/50 leading-relaxed">
                  Settle your balance quickly and securely through our HealowPay portal. Have your statement ready before proceeding.
                </p>
              </div>
              <a href={clinicInfo.portalUrls.billPay} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-[#267a7a] text-white text-sm font-medium px-6 py-3 transition-colors">
                <ExternalLink size={14} /> Pay via HealowPay
              </a>
              <div className="flex flex-wrap gap-5 pt-2">
                {['Instant Receipt', 'Secure Payment', 'HIPAA Verified'].map(item => (
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
                <h3 className="text-lg font-semibold text-brand-primary font-sans">Billing Support</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Have questions about your insurance EOB or a specific charge? Our coordination team is ready to assist.
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
