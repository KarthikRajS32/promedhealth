import { SectionBanner } from '../../components/ui/SectionBanner';
import { physicians } from '../../data/physicians';
import { ShieldCheck, Award, BookOpen, Heart, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { kavithaPhoto } from '../../assets';

export function Physicians() {
  const dr = physicians[0];
  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Our Physicians"
        subtitle="Meet the experienced medical professionals dedicated to your healthcare excellence."
        breadcrumbs={[{ name: 'About', path: '/about' }, { name: 'Physicians', path: '/about/physicians' }]}
      />

      {/* Profile */}
      <section className="sp bg-warm">
        <div className="wrap mt-[-40px]">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Image col */}
            <div className="lg:col-span-2 flex flex-col gap-6 rv-left">
              <div className="aspect-[3/4] max-w-xs mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-xl border border-border">
                <img src={kavithaPhoto} alt="Dr. Kavitha Ilayaraja" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Internal medicine-trained primary care physicians like Dr. Ilay possess a deep understanding of adult health and are skilled in managing a wide range of medical conditions, from common ailments to complex diseases. By choosing Dr. Ilay as your primary care provider, you'll receive comprehensive, personalized care focused on preventive health, early detection, and effective management of chronic conditions.
              </p>
            </div>

            {/* Content col */}
            <div className="lg:col-span-3 space-y-8 rv-right">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full">
                  Internal Medicine Specialist
                </div>
                <h2 className="text-3xl lg:text-4xl">{dr.name}</h2>
                <p className="text-sm font-medium text-muted uppercase tracking-widest">{dr.title} · {dr.specialty}</p>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                Introducing Dr. Kavitha Ilayaraja MD, a distinguished board certified internal medicine and primary care specialist with several years of experience. Dr. Ilayaraja earned her medical degree from Madurai Medical College, India, and completed her Internal Medicine residency at Medical City Arlington, Texas. Dr. Ilay also serves as a hospitalist physician in Medical City Hospital Plano, Denton and Frisco locations.
              </p>

              {/* Education + Board */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 bg-card border border-border rounded-2xl space-y-4 rv-up d1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-a flex items-center justify-center text-s">
                      <GraduationCap size={16} />
                    </div>
                    <h3 className="text-sm font-semibold text-p">Education</h3>
                  </div>
                  <ul className="space-y-2">
                    {dr.education?.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted">
                        <CheckCircle size={12} className="text-s shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-5 bg-card border border-border rounded-2xl space-y-4 rv-up d2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-a flex items-center justify-center text-s">
                      <Award size={16} />
                    </div>
                    <h3 className="text-sm font-semibold text-p">Board Status</h3>
                  </div>
                  <ul className="space-y-2">
                    {dr.certifications?.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted">
                        <CheckCircle size={12} className="text-s shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Callout */}
              <div className="flex items-start gap-4 p-5 bg-p rounded-2xl text-white rv-up d3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Heart size={18} className="text-s" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Dedicated Internal Care</p>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">Focused on comprehensive health management and building trust with every patient.</p>
                </div>
              </div>

              <Link to="/appointments"
                className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-px shadow-sm">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="sp bg-card border-t border-border">
        <div className="wrap mt-[-60px]">
          <div className="text-center mb-10 rv-up">
            <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Our Approach</div>
            <h2 className="text-3xl">Philosophy of Care</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, title: 'Evidence-Based', desc: 'Decades of clinical experience ensuring accurate diagnosis and treatment plans for every stage of life.' },
              { icon: BookOpen,    title: 'Modern Approach', desc: 'Leveraging the latest clinical research and telemedicine technology to make high-quality care accessible.' },
              { icon: Heart,       title: 'Patient-Centered', desc: 'Treating you as a person, not just a patient — prioritizing your well-being through compassionate partnerships.' },
            ].map((item, i) => (
              <div key={i} className={`group flex flex-col gap-4 p-6 bg-warm border border-border rounded-2xl hover:border-s/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 rv-up d${i+1}`}>
                <div className="w-10 h-10 rounded-xl bg-a flex items-center justify-center text-s group-hover:bg-s group-hover:text-white transition-all">
                  <item.icon size={18} />
                </div>
                <p className="text-sm font-semibold text-p group-hover:text-s transition-colors">{item.title}</p>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
