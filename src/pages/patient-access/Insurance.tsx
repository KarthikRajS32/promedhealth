import { SectionBanner } from '../../components/ui/SectionBanner';

export function Insurance() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Insurance"
        subtitle=""
        breadcrumbs={[
          { name: 'Patient Access', path: '/patient-access' },
          { name: 'Insurance', path: '/patient-access/insurance' }
        ]}
      />

      <section className="section-padding bg-brand-white">
        <div className="container-custom">
           <div className="max-w-4xl mx-auto space-y-16">
              <div className="space-y-6 text-center">
                 <div className="h-1.5 w-20 bg-brand-secondary rounded-full mx-auto" />
                 <h2 className="text-4xl lg:text-5xl font-black text-brand-primary">Accepted Insurance</h2>
              </div>

              {/* Insurance Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Aetna', logo: '/images/atena-1.png' },
                  { name: 'Texas Health', logo: '/images/texax-helath.png' },
                  { name: 'BlueCross BlueShield', logo: '/images/bcbs.png' },
                  { name: 'UnitedHealthcare', logo: '/images/UHC2.png' },
                  { name: 'Cigna', logo: '/images/Cigna.png' },
                  { name: 'Medicare', logo: '/images/Medicare.png' },
                  { name: 'Humana', logo: '/images/Humana.png' },
                  { name: 'First Health', logo: '/images/first-health.png' },
                  { name: 'Self-Pay', logo: '/images/self-pay.png' },
                ].map((plan, idx) => (
                  <div key={idx} className="relative bg-brand-white rounded-[28px] border border-brand-accent shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-brand-secondary/50 transition-all duration-300 group overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-brand-primary to-brand-secondary" />
                    <div className="flex flex-col items-center gap-4 p-8">
                      <div className="w-46 h-24 bg-brand-light rounded-2xl flex items-center justify-center border border-brand-accent group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <img src={plan.logo} alt={plan.name} className="h-14 w-auto object-contain" />
                      </div>
                      <span className="font-black text-brand-primary text-sm tracking-wide text-center">{plan.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="grid md:grid-cols-2 gap-12 pt-16 border-t border-brand-accent/50">
                 <div className="space-y-6 bg-brand-primary rounded-[40px] p-12 text-brand-white shadow-xl shadow-brand-primary/10">
                    <h3 className="text-3xl font-black">Medicare & Seniors</h3>
                    <p className="text-lg font-medium text-brand-accent/80 leading-relaxed">
                       We specialize in internal medicine for seniors and fully coordinate 
                       with Medicare and Medicare Advantage (Part C) plans.
                    </p>
                    <ul className="space-y-4 pt-4">
                       <li className="flex gap-3 text-sm font-bold items-center">
                          <CheckCircle size={18} className="text-brand-secondary" />
                          Annual Wellness Visits Supported
                       </li>
                       <li className="flex gap-3 text-sm font-bold items-center">
                          <CheckCircle size={18} className="text-brand-secondary" />
                          Part C Coverage Coordination
                       </li>
                    </ul>
                 </div>

                 <div className="space-y-6 bg-brand-light rounded-[40px] p-12 border border-brand-accent shadow-sm">
                    <h3 className="text-3xl font-black text-brand-primary uppercase tracking-tight">Self-Pay Options</h3>
                    <p className="text-lg font-medium text-slate-500 leading-relaxed">
                       For patients without insurance coverage, we offer competitive 
                       self-pay rates to ensure you don't compromise on your health.
                    </p>
                    <div className="pt-6 border-t border-brand-accent/50 group/item">
                       <p className="text-sm font-black text-brand-primary uppercase tracking-widest mb-4">Request a Quote</p>
                       <a href={`tel:${clinicInfo.contact.phone}`} className="text-3xl font-black text-brand-primary group-hover/item:text-brand-secondary transition-colors italic">
                          {clinicInfo.contact.phone}
                       </a>
                    </div>
                 </div>
              </div> */}

              {/* Warning/Alert */}
              {/* <div className="bg-brand-accent/50 p-10 rounded-[40px] border border-brand-accent flex flex-col md:flex-row gap-6 md:items-center">
                 <div className="w-16 h-16 bg-brand-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm">
                    <AlertCircle size={32} />
                 </div>
                 <div className="space-y-2">
                    <h4 className="text-xl font-black text-brand-primary">Verify Your Coverage</h4>
                    <p className="text-sm font-bold text-slate-500 leading-relaxed max-w-2xl">
                       Insurance plans and provider networks can change frequently. 
                       We strongly recommend verifying our current participation with your specific plan before your visit.
                    </p>
                 </div>
              </div> */}
           </div>
        </div>
      </section>
    </div>
  );
}
