import { SectionBanner } from '../../components/ui/SectionBanner';
import { aetna, texasHealth, bcbs, uhc, cigna, medicare, humana, firstHealth, selfPay } from '../../assets';

const plans = [
  { name: 'Aetna',                logo: aetna},
  { name: 'Texas Health',         logo: texasHealth},
  { name: 'BlueCross BlueShield', logo: bcbs },
  { name: 'UnitedHealthcare',     logo: uhc},
  { name: 'Cigna',                logo: cigna },
  { name: 'Medicare',             logo: medicare },
  { name: 'Humana',               logo: humana},
  { name: 'First Health',         logo: firstHealth},
  { name: 'Self-Pay',             logo: selfPay},
];

export function Insurance() {
  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Accepted Insurance"
        subtitle=""
        breadcrumbs={[{ name: 'Patient Access', path: '/patient-access' }, { name: 'Insurance', path: '/patient-access/insurance' }]}
      />

      <section className="sp bg-warm">
        <div className="wrap mt-[-70px]">
          <div className="text-center mb-12 rv-up">
            <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Coverage</div>
            <h2 className="text-3xl">Accepted Insurance Plans</h2>
            <p className="text-sm text-muted mt-2 max-w-lg mx-auto">Please contact us for any insurance questions</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {plans.map((plan, i) => (
              <div key={i}
                className={`group relative bg-card rounded-3xl border border-border overflow-hidden hover:border-s/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 rv-up d${(i % 3) + 1}`}>
                <div className="h-1 bg-gradient-to-r from-p via-s to-p bg-[length:200%] group-hover:bg-right transition-all duration-700" />
                <div className="flex items-center justify-center px-8 pt-8 pb-5">
                  <div className="w-full h-24 flex items-center justify-center bg-warm rounded-2xl border border-border group-hover:border-s/20 group-hover:bg-a/40 transition-all duration-300 p-4">
                    <img src={plan.logo} alt={plan.name}
                      className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-3xl ring-1 ring-s/0 group-hover:ring-s/20 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
