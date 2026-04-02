import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { CreditCard, ShieldCheck, Receipt, Lock, HelpCircle, CheckCircle, ExternalLink } from 'lucide-react';

export function BillPay() {
  const features = [
    { icon: CreditCard,  title: 'Major Carriers',         desc: 'We accept Visa, Mastercard, American Express, and Discover digital payments.' },
    { icon: Receipt,     title: 'Statement History',       desc: 'View your full billing history and download receipts for tax or HSA records.' },
    { icon: ShieldCheck, title: 'Bank-Grade Encryption',   desc: 'All transactions are processed via AES-256 encryption standards.' },
    { icon: Lock,        title: 'HIPAA Protected',         desc: 'Your financial data is siloed from clinical data to ensure maximum privacy.' },
  ];

  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Pay Your Bill"
        subtitle="Manage your statements securely through HealowPay — simple, fast, and transparent."
        breadcrumbs={[{ name: 'Patient Access', path: '/patient-access' }, { name: 'Pay Your Bill', path: '/patient-access/bill-pay' }]}
      />

      <section className="sp bg-warm">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-p rounded-2xl p-8 space-y-6 rv-left">
              <div className="w-10 h-10 bg-s/20 rounded-xl flex items-center justify-center text-s">
                <CreditCard size={18} />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl text-white">Pay Online</h2>
                <p className="text-sm text-white/55 leading-relaxed">Settle your balance quickly and securely through our HealowPay portal. Have your statement ready before proceeding.</p>
              </div>
              <a href={clinicInfo.portalUrls.billPay} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-px shadow-sm">
                <ExternalLink size={14} /> Pay via HealowPay
              </a>
              <div className="flex flex-wrap gap-4 pt-2">
                {['Instant Receipt', 'Secure Payment', 'HIPAA Verified'].map(item => (
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
                <h3 className="text-lg font-semibold text-p">Billing Support</h3>
                <p className="text-sm text-muted leading-relaxed">Have questions about your insurance EOB or a specific charge? Our coordination team is ready to assist.</p>
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
