import { SectionBanner } from '../../components/ui/SectionBanner';
import {
  aetna, texasHealth, bcbs, uhc, cigna, medicare, humana, firstHealth, selfPay
} from '../../assets';

const plans = [
  { name: 'Aetna',                logo: aetna },
  { name: 'Texas Health',         logo: texasHealth },
  { name: 'BlueCross BlueShield', logo: bcbs },
  { name: 'UnitedHealthcare',     logo: uhc },
  { name: 'Cigna',                logo: cigna },
  { name: 'Medicare',             logo: medicare },
  { name: 'Humana',               logo: humana },
  { name: 'First Health',         logo: firstHealth },
  { name: 'Self-Pay',             logo: selfPay },
];


export function Insurance() {
  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Accepted Insurance"
        subtitle=""
        breadcrumbs={[
          { name: 'Patient Access', path: '/patient-access' },
          { name: 'Insurance', path: '/patient-access/insurance' },
        ]}
      />

      {/* Plans grid */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-brand-white border border-brand-accent text-brand-secondary text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
              Coverage
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-primary">Accepted Insurance Plans</h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Please contact us for any insurance questions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className="group relative bg-brand-white rounded-[28px] border border-brand-accent shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%] group-hover:bg-right transition-all duration-700" />

                <div className="p-6 flex items-center gap-5">
                  {/* logo box */}
                  <div className="w-20 h-20 shrink-0 bg-brand-light rounded-2xl border border-brand-accent flex items-center justify-center group-hover:border-brand-secondary/30 group-hover:bg-brand-accent/40 transition-all duration-300 p-3">
                    <img src={plan.logo} alt={plan.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* info */}
                  <div className="flex flex-col gap-2 min-w-0">
                    <p className="text-base font-black text-brand-primary leading-tight truncate">{plan.name}</p>
                    
                  </div>
                </div>

                {/* hover ring */}
                <div className="absolute inset-0 rounded-[28px] ring-1 ring-brand-secondary/0 group-hover:ring-brand-secondary/20 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
