import { motion } from 'framer-motion';
import { SectionBanner } from '../../components/ui/SectionBanner';
import { physicians } from '../../data/physicians';
import { ShieldCheck, Award, GraduationCap, CheckCircle, Heart, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Physicians() {
  const dr = physicians[0];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const slideRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Our Physicians"
        subtitle="Meet the experienced medical professionals dedicated to your healthcare excellence."
        breadcrumbs={[{ name: 'About', path: '/about' }, { name: 'Physicians', path: '/about/physicians' }]}
      />

      {/* Doctor Profile */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-2 items-start">

            {/* Image + paragraph below */}
            <motion.div 
              {...slideLeft}
              className="flex flex-col gap-6"
            >
              <div className="max-w-sm mx-auto lg:mx-0 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img src="/src/assets/kavitha-photo.png" alt="Dr. Kavitha Ilayaraja" className="w-full h-full object-cover" />
              </div>
            
            </motion.div>

            {/* Content */}
            <motion.div 
              {...slideRight}
              className="space-y-8"
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Internal Medicine Specialist</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-brand-primary">{dr.name}</h2>
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{dr.title} · {dr.specialty}</p>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed">
                Introducing Dr. Kavitha Ilayaraja MD, a distinguished board certified internal medicine and primary care specialist with several years of experience. Dr. Ilayaraja earned her medical degree from Madurai Medical College, India, and completed her Internal Medicine residency at Medical City Arlington, Texas. Dr. Ilay also serves as a hospitalist physician in Medical City Hospital Plano, Denton and Frisco locations.
              </p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Internal medicine-trained primary care physicians like Dr. Ilay possess a deep understanding of adult health and are skilled in managing a wide range of medical conditions, from common ailments to complex diseases. By choosing Dr. Ilay as your primary care provider, you'll receive comprehensive, personalized care focused on preventive health, early detection, and effective management of chronic conditions. Patients benefit from her extensive experience and holistic approach to healthcare. Experience the difference with Dr. Kavitha Ilayaraja as your trusted healthcare partner.
              </p>

              {/* Education & Board */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-brand-light rounded-xl border border-slate-100 space-y-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-brand-secondary" />
                    <h3 className="text-sm font-bold text-brand-primary">Education</h3>
                  </div>
                  <ul className="space-y-2">
                    {dr.education?.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle size={12} className="text-brand-secondary shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 bg-brand-light rounded-xl border border-slate-100 space-y-4">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-brand-secondary" />
                    <h3 className="text-sm font-bold text-brand-primary">Board Status</h3>
                  </div>
                  <ul className="space-y-2">
                    {dr.certifications?.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle size={12} className="text-brand-secondary shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hospitalist callout */}
              <div className="p-5 bg-brand-primary rounded-xl text-white flex items-start gap-4">
                <ShieldCheck size={18} className="text-brand-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">Hospitalist Physician</p>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Dr. Ilayaraja also serves at Medical City Hospital Plano, Denton, and Frisco — bringing acute inpatient care expertise to her primary care practice.
                  </p>
                </div>
              </div>

              <Link to="/appointments"
                className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-[#007aab] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors">
                Schedule a Visit
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <motion.div 
            {...fadeUp}
            className="text-center mb-10 space-y-2"
          >
            <p className="text-xs font-semibold text-brand-secondary uppercase tracking-widest">Our Approach</p>
            <h2 className="text-2xl font-bold text-brand-primary">Philosophy of Care</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, title: 'Evidence-Based', desc: 'Decades of clinical experience ensuring accurate diagnosis and treatment plans for every stage of life.' },
              { icon: BookOpen, title: 'Modern Approach', desc: 'Leveraging the latest clinical research and telemedicine technology to make high-quality care accessible.' },
              { icon: Heart, title: 'Patient-Centered', desc: 'Treating you as a person, not just a patient — prioritizing your well-being through compassionate partnerships.' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group space-y-3"
              >
                <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <item.icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
