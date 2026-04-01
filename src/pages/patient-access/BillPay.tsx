// import { SectionBanner } from '../../components/ui/SectionBanner';
// import { clinicInfo } from '../../data/content';
// import { CreditCard, ShieldCheck, Receipt, DollarSign, ArrowUpRight, HelpCircle, Lock } from 'lucide-react';
// import { Button } from '../../components/ui/Button';

// export function BillPay() {
//   return (
//     <div className="flex flex-col">
//       <SectionBanner
//         title="Pay Your Bill"
//         subtitle="Manage your payments securely and conveniently through the HealowPay platform."
//         breadcrumbs={[
//           { name: 'Patient Access', path: '/patient-access' },
//           { name: 'Pay Your Bill', path: '/patient-access/bill-pay' }
//         ]}
        
//       />

//       <section className="section-padding bg-brand-white">
//         <div className="container-custom">
//            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//               <div className="space-y-12">
//                  <div className="space-y-6">
//                     <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
//                     <h2 className="text-4xl lg:text-5xl font-black text-brand-primary">Fast & Secure <br/> Online Billing</h2>
//                     <p className="text-md font-medium text-slate-600 leading-relaxed">
//                        Our billing process is designed to be as seamless as your care. 
//                        Use **HealowPay** to settle your account balances quickly, securely, and without any paperwork.
//                     </p>
//                  </div>

//                  <div className="grid sm:grid-cols-2 gap-8">
//                     {[
//                       { icon: CreditCard, title: "Major Cards", desc: "We accept Visa, Mastercard, American Express, and Discover." },
//                       { icon: Receipt, title: "Detailed History", desc: "View your full billing history and download receipts for your records." },
//                       { icon: ShieldCheck, title: "Encrypted Payments", desc: "All transactions are processed via bank-grade encryption to ensure safety." },
//                       { icon: Lock, title: "HIPAA Compliant", desc: "Your personal and financial information is always protected." }
//                     ].map((item, idx) => (
//                       <div key={idx} className="flex gap-4 p-6 bg-brand-accent rounded-[32px] border border-brand-accent/50 shadow-sm transition-all hover:shadow-lg">
//                          <div className="shrink-0 w-12 h-12 bg-brand-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
//                             <item.icon size={24} />
//                          </div>
//                          <div>
//                             <h4 className="font-black text-brand-primary">{item.title}</h4>
//                             <p className="text-sm font-bold text-slate-500 mt-1">{item.desc}</p>
//                          </div>
//                       </div>
//                     ))}
//                  </div>

//                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
//                     <a href={clinicInfo.portalUrls.billPay} target="_blank" rel="noopener noreferrer">
//                        <Button size="lg" className="h-16 px-12 text-lg gap-2">
//                           Pay Bill Online <ArrowUpRight size={20} />
//                        </Button>
//                     </a>
//                  </div>
//               </div>

//               <div className="relative group lg:pl-12">
//                  <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-[16px] border-brand-light shadow-2xl bg-white flex flex-col justify-center p-12 relative rotate-2 group-hover:rotate-0 transition-all duration-700">
//                     <div className="space-y-8">
//                        <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-secondary/20 rotate-12">
//                           <DollarSign size={32} />
//                        </div>
//                        <h3 className="text-4xl font-black text-brand-primary leading-tight">Billing & Insurance Support</h3>
//                        <p className="text-lg font-medium text-slate-500 leading-relaxed">
//                           For billing inquiries, questions about your statement, or to update your insurance coverage:
//                        </p>
//                     </div>
                    
//                     <div className="mt-12 p-8 bg-brand-accent rounded-[32px] border border-brand-accent/50 group/item hover:bg-brand-primary transition-colors">
//                        <p className="text-sm font-black text-brand-primary uppercase tracking-[0.2em] mb-4 group-hover/item:text-brand-accent transition-colors">Reach Our Billing Dept</p>
//                        <a href={`tel:${clinicInfo.contact.phone}`} className="text-3xl font-black text-brand-primary group-hover/item:text-brand-white transition-colors">
//                           {clinicInfo.contact.phone}
//                        </a>
//                     </div>
//                  </div>
                 
//                  {/* Floating Info */}
//                  <div className="absolute -bottom-10 -left-10 md:left-0 bg-brand-primary text-brand-white p-10 rounded-[40px] shadow-2xl border border-white/10 max-w-[320px] z-20">
//                     <div className="flex items-center gap-4 mb-4">
//                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-brand-secondary">
//                           <HelpCircle size={28} />
//                        </div>
//                        <h4 className="text-lg font-black tracking-tight">Billing Questions?</h4>
//                     </div>
//                     <p className="text-sm font-bold text-brand-accent/80 leading-relaxed">
//                        Please have your statement and insurance card ready when calling for billing support.
//                     </p>
//                  </div>
//               </div>
//            </div>
//         </div>
//       </section>
//     </div>
//   );
// }
