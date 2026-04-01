import { clinicInfo } from '../../data/content';
import { CreditCard, ShieldCheck, Receipt, DollarSign, ArrowUpRight, HelpCircle, Lock, Plus, Check } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function BillPay() {
  const billingFeatures = [
    { icon: CreditCard, title: "Major Carriers", desc: "We accept Visa, Mastercard, American Express, and Discover digital payments." },
    { icon: Receipt, title: "Statement History", desc: "View your full clinical billing history and download receipts for tax or HSA records." },
    { icon: ShieldCheck, title: "Bank-Grade Encryption", desc: "All transactions are processed via bank-level AES-256 encryption standards." },
    { icon: Lock, title: "HIPAA Protected", desc: "Your financial data is siloed from clinical data to ensure maximum privacy." }
  ];

  return (
    <div className="bg-brand-surface pt-32 pb-48 selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* ── BILLING HEADER ── */}
      <section className="container-custom relative mb-32">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl space-y-12 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-primary text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em]">
            <DollarSign size={14} className="text-brand-accent" /> Fiscal Transparency
          </div>
          
          <h1 className="text-6xl sm:text-8xl font-black text-brand-primary tracking-tighter leading-[0.9]">
            Simplified <br />
            <span className="text-slate-300">Accounting.</span>
          </h1>
          
          <p className="text-xl text-brand-muted font-medium max-w-2xl leading-relaxed">
            Manage your statements securely through **HealowPay**. Our billing process is designed to be as seamless as your clinical care.
          </p>
        </div>
      </section>

      {/* ── ASYMMETRIC PAYMENT MODULE ── */}
      <section className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Main Payment Card */}
          <div className="lg:col-span-8">
            <div className="h-full p-12 lg:p-20 bg-brand-primary rounded-[4rem] text-white space-y-12 shadow-2xl relative overflow-hidden group border border-white/5">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-125 transition-transform duration-[5s]">
                  <CreditCard size={300} />
               </div>
               
               <div className="space-y-8 relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-accent">
                    <DollarSign size={32} />
                  </div>
                  <h2 className="text-5xl font-black tracking-tighter leading-[0.9]">
                    Quick Pay <br />
                    <span className="text-white/30 text-4xl">Digital Statements.</span>
                  </h2>
               </div>

               <div className="flex flex-col sm:flex-row gap-6 relative z-10 pt-4">
                  <a href={clinicInfo.portalUrls.billPay} target="_blank" rel="noopener noreferrer">
                    <Button size="xl" className="px-12 h-20 rounded-3xl bg-brand-accent text-white hover:bg-white hover:text-brand-primary border-transparent">
                      Settle Statement <ArrowUpRight className="ml-2" />
                    </Button>
                  </a>
                  <Button variant="outline" size="xl" className="px-12 h-20 rounded-3xl border-white/20 text-white hover:bg-white/10">
                    Pricing Transparency
                  </Button>
               </div>

               <div className="flex items-center gap-8 pt-6 relative z-10">
                  {['Instant Receipt', 'Secure Payment', 'Verified Path'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30">
                      <Check size={14} className="text-brand-accent" /> {item}
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Support Float Card */}
          <div className="lg:col-span-4">
            <div className="h-full p-12 bg-white border border-slate-100 rounded-[4rem] space-y-12 hover:shadow-2xl transition-all duration-500">
               <div className="space-y-6">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent">
                    <HelpCircle size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-brand-primary tracking-tighter leading-tight">Billing <br /> Support.</h3>
                  <p className="text-brand-muted font-medium leading-relaxed">
                    Have questions about your insurance EOB or a specific statement charge? Our coordination team is ready to assist.
                  </p>
               </div>
               
               <div className="pt-8 border-t border-slate-50">
                  <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted mb-2">Patient Accounting</p>
                  <a href={`tel:${clinicInfo.contact.phone}`} className="text-2xl font-black text-brand-primary hover:text-brand-accent transition-colors">
                    {clinicInfo.contact.phone}
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACCOUNTING FEATURE GRID ── */}
      <section className="container-custom mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {billingFeatures.map((feature, i) => (
           <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] space-y-8 hover:bg-brand-surface hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                 <feature.icon size={24} />
              </div>
              <div>
                 <h4 className="text-lg font-black text-brand-primary mb-2">{feature.title}</h4>
                 <p className="text-sm text-brand-muted font-medium leading-relaxed">{feature.desc}</p>
              </div>
           </div>
         ))}
      </section>

      {/* ── FISCAL PROTOCOL ── */}
      <section className="container-custom mt-32">
         <div className="p-10 bg-slate-50 border border-slate-200 rounded-[3rem] flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="flex items-center gap-6">
               <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-brand-muted">
                  <Plus size={18} />
               </div>
               <p className="text-xs font-bold text-brand-muted max-w-sm">
                  Please have your statement and insurance carrier card ready when contacting our patient accounting department for the fastest verification.
               </p>
            </div>
            <div className="flex items-center gap-8">
               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-muted">Payment Processor: HealowPay System</p>
            </div>
         </div>
      </section>

    </div>
  );
}
