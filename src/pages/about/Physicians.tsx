import { SectionBanner } from '../../components/ui/SectionBanner';
import { physicians } from '../../data/physicians';
import { ShieldCheck, Award, BookOpen, Heart, GraduationCap, CheckCircle } from 'lucide-react';
import { kavithaPhoto } from '../../assets';

export function Physicians() {
  const dr = physicians[0]; // Dr. Kavitha Ilayaraja

  return (
    <div className="flex flex-col">
      <SectionBanner
        title="Our Physicians"
        subtitle="Meet the experienced medical professionals dedicated to your healthcare excellence."
        breadcrumbs={[
          { name: 'About', path: '/about' },
          { name: 'Physicians', path: '/about/physicians' }
        ]}
      />

      <section className="section-padding bg-brand-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Image Column */}
            <div className="relative group flex flex-col gap-6">
              <div className="aspect-[3/4] max-w-xs mx-auto rounded-[40px] overflow-hidden bg-brand-accent border-[12px] border-brand-white shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                <img src={kavithaPhoto} alt="Dr. Kavitha Ilayaraja" className="w-full h-full object-cover" />
              </div>
              <p className="text-[15px] font-medium text-slate-600 leading-relaxed">
                Internal medicine-trained primary care physicians like Dr. Ilay possess a deep understanding of adult health and are skilled in managing a wide range of medical conditions, from common ailments to complex diseases. By choosing Dr. Ilay as your primary care provider, you'll receive comprehensive, personalized care focused on preventive health, early detection, and effective management of chronic conditions. Patients benefit from her extensive experience and holistic approach to healthcare. Experience the difference with Dr. Kavitha Ilayaraja as your trusted healthcare partner.
              </p>
            </div>

            {/* Content Column */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
                <h2 className="text-4xl lg:text-4xl font-black text-brand-primary leading-tight">
                  {dr.name}
                </h2>
                <p className="text-lg font-bold uppercase tracking-[0.3em] text-slate-500">
                  {dr.title} • <br />{dr.specialty}
                </p>
              </div>

              <div className="prose prose-lg text-slate-600 font-medium leading-relaxed max-w-none">
                <p>Introducing Dr. Kavitha Ilayaraja MD, a distinguished board certified internal medicine and primary care specialist with several years of experience. Dr. Ilayaraja earned her medical degree from Madurai Medical College, India, and completed her Internal Medicine residency at Medical City Arlington, Texas. And also, Dr. Ilay serving as a hospitalist physician in Medical City Hospital Plano, Denton and Frisco locations.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-6">
                <div className="p-8 bg-brand-accent rounded-3xl space-y-6 border border-brand-accent/50 shadow-sm">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={24} className="text-brand-primary" />
                    <h3 className="text-xl font-black text-brand-primary">Education</h3>
                  </div>
                  <ul className="space-y-4">
                    {dr.education?.map(item => (
                      <li key={item} className="flex gap-3 text-sm font-bold text-slate-600">
                        <CheckCircle size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-brand-accent rounded-3xl space-y-6 border border-brand-accent/50 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Award size={24} className="text-brand-primary" />
                    <h3 className="text-xl font-black text-brand-primary">Board Status</h3>
                  </div>
                  <ul className="space-y-4">
                    {dr.certifications?.map(item => (
                      <li key={item} className="flex gap-3 text-sm font-bold text-slate-600">
                        <CheckCircle size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center gap-6 p-10 bg-brand-primary rounded-[32px] text-brand-white shadow-xl shadow-brand-primary/20">
                <div className="w-16 h-16 bg-brand-white/10 rounded-2xl flex items-center justify-center">
                  <Heart size={32} className="text-brand-secondary" />
                </div>
                <div>
                  <h4 className="text-xl text-gray-300">Dedicated Internal Care</h4>
                  <p className="text-brand-accent text-sm font-bold mt-1 max-w-md">
                    Focused on comprehensive health management and building trust with every patient.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 text-center lg:text-left">
            {[
              { icon: ShieldCheck, title: "Expert Medicine", desc: "Decades of clinical experience ensuring specialized, accurate diagnosis and treatment plans for every stage of life." },
              { icon: BookOpen, title: "Modern Approach", desc: "Leveraging the latest clinical research and telemedicine technology (Televisit) to make high-quality care accessible." },
              { icon: Heart, title: "Personal Connection", desc: "Treating you as a person, not just a patient. We prioritize your well-being through compassionate, long-term health partnerships." }
            ].map((item, idx) => (
              <div
                key={idx}
                className="space-y-6 p-8 bg-brand-white rounded-3xl shadow-sm border border-brand-accent/50 hover:shadow-xl hover:-translate-y-2 hover:border-brand-secondary/40 transition-all duration-500 group cursor-default"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-14 h-14 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-primary mx-auto lg:mx-0 group-hover:bg-brand-secondary group-hover:text-brand-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">{item.title}</h3>
                <p className="text-[15px] font-medium text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
