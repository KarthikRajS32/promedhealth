import { motion } from 'framer-motion';
import { SectionBanner } from '../../components/ui/SectionBanner';
import { clinicInfo } from '../../data/content';
import { CheckCircle, AlertCircle, Phone } from 'lucide-react';

const plans = [
  { name: 'Aetna', logo: '/images/atena-1.png' },
  { name: 'Texas Health', logo: '/images/texax-helath.png' },
  { name: 'BlueCross BlueShield', logo: '/images/bcbs.png' },
  { name: 'UnitedHealthcare', logo: '/images/UHC2.png' },
  { name: 'Cigna', logo: '/images/Cigna.png' },
  { name: 'Medicare', logo: '/images/Medicare.png' },
  { name: 'Humana', logo: '/images/Humana.png' },
  { name: 'First Health', logo: '/images/first-health.png' },
  { name: 'Self-Pay', logo: '/images/self-pay.png' },
];

export function Insurance() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Accepted Insurance"
        subtitle="We accept a wide range of plans to ensure our services are accessible to the Frisco community."
        breadcrumbs={[{ name: 'Patient Access', path: '/patient-access' }, { name: 'Insurance', path: '/patient-access/insurance' }]}
      />

      {/* Plans grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            {...fadeUp}
            className="text-center mb-10 space-y-2"
          >
            <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Coverage</p>
            <h2 className="text-2xl font-bold text-brand-primary">Accepted Insurance</h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">We work with most major insurance carriers and Medicare plans to ensure you receive the care you need.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {plans.map((plan, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden"
              >
                <div className="h-1 bg-gradient-to-r from-brand-primary to-brand-secondary" />
                <div className="flex flex-col items-center gap-3 p-5">
                  <div className="w-40 h-20 bg-brand-light rounded-xl flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
                    <img src={plan.logo} alt={plan.name} className="h-10 w-auto object-contain" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Medicare + Self-pay */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-primary rounded-2xl p-7 text-white space-y-4"
            >
              <h3 className="text-lg font-bold">Medicare & Seniors</h3>
              <p className="text-sm text-white/60 leading-relaxed">We specialize in internal medicine for seniors and fully coordinate with Medicare and Medicare Advantage (Part C) plans.</p>
              <ul className="space-y-2">
                {['Annual Wellness Visits Supported', 'Part C Coverage Coordination', 'Chronic Care Management'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle size={13} className="text-brand-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm space-y-4"
            >
              <h3 className="text-lg font-bold text-brand-primary">Self-Pay Options</h3>
              <p className="text-sm text-slate-500 leading-relaxed">For patients without insurance coverage, we offer competitive self-pay rates to ensure you don't compromise on your health.</p>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Request a Quote</p>
                <a href={`tel:${clinicInfo.contact.phone}`} className="flex items-center gap-2 text-brand-primary font-bold hover:text-brand-secondary transition-colors">
                  <Phone size={15} /> {clinicInfo.contact.phone}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Alert */}
          <motion.div 
            {...fadeUp}
            className="mt-5 bg-white rounded-xl border border-slate-100 p-5 flex items-start gap-4"
          >
            <AlertCircle size={18} className="text-brand-secondary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-brand-primary">Verify Your Coverage</p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Insurance plans and provider networks can change frequently. We strongly recommend verifying our current participation with your specific plan before your visit.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
