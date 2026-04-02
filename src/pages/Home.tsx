import { ArrowRight, Phone, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { clinicInfo, testimonials } from '../data/content';
import { ServiceCard } from '../components/ui/ServiceCard';
import { aetna, texasHealth, bcbs, uhc, cigna, medicare, humana, firstHealth, selfPay, kavithaPhoto, doctorTeam } from '../assets';

export function Home() {
  const featuredServices = services.slice(0, 6);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 8000);
    return () => clearInterval(t);
  }, []);

  const plans = [
    { name: 'Aetna', logo: aetna },
    { name: 'Texas Health', logo: texasHealth },
    { name: 'BlueCross BlueShield', logo: bcbs },
    { name: 'UnitedHealthcare', logo: uhc },
    { name: 'Cigna', logo: cigna },
    { name: 'Medicare', logo: medicare },
    { name: 'Humana', logo: humana },
    { name: 'First Health', logo: firstHealth },
    { name: 'Self-Pay', logo: selfPay },
  ];

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

      {/* ── HERO: full-height split, clinic image left / text right ── */}
      <section className="min-h-screen flex flex-col lg:flex-row pt-[88px]">
        {/* Image half — clinic/hospital image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden"
        >
          <img
            src={doctorTeam}
            alt="ProMed Health Modern Clinic Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-primary/20" />
          {/* Accepting badge */}
          <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md px-6 py-4 shadow-2xl border-l-4 border-brand-secondary rounded-md">
            <p className="text-xs font-bold text-brand-secondary uppercase tracking-[0.2em] ">Now Accepting</p>
            <p className="text-lg font-semibold text-brand-primary mt-1">New Patients</p>
          </div>
        </motion.div>

        {/* Text half */}
        <div className="lg:w-1/2 bg-brand-primary flex items-center">
          <motion.div 
             {...slideLeft}
            className="px-8 sm:px-16 lg:px-24 py-20 space-y-10 max-w-2xl"
          >
            <div className="space-y-4">
              <p className="text-brand-secondary text-sm font-bold uppercase tracking-[0.3em]">Welcome To ProMed Health</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] font-heading underline-offset-8">
                Your Health Is <br /> <em className="text-brand-secondary not-italic">Our Priority.</em>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-white/80 text-base lg:text-lg leading-relaxed font-medium">
                Welcome to ProMed Health Primary Care. Conveniently located in Frisco, our practice is dedicated to providing exceptional healthcare services under the expert guidance of <span className="text-brand-secondary">Dr. Kavitha Ilayaraja</span>, who brings several years of experience in internal medicine and primary care specialty.
              </p>
              <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                At ProMed Health, we believe in fostering strong patient-provider relationships built on trust, compassion, and personalized care. Whether you’re in need of preventive screenings, managing chronic conditions, or seeking treatment for acute illnesses, Dr. Ilayaraja and our team are here to support you every step of the way. Experience comprehensive healthcare tailored to your individual needs in a welcoming and patient-centered environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
              <Link to="/appointments"
                className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-[#267a7a] text-white text-sm font-bold px-8 py-4 transition-all hover:scale-105 active:scale-95 shadow-lg uppercase tracking-wider rounded-md">
                <Calendar size={18} /> Schedule Appointment
              </Link>
              <a href={`tel:${clinicInfo.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 text-sm font-bold px-8 py-4 transition-all uppercase tracking-wider backdrop-blur-sm rounded-md">
                <Phone size={18} /> {clinicInfo.contact.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK ACCESS: horizontal strip ── */}
      <section className="bg-brand-warm border-y border-slate-200">
        <div className="container-custom">
          <motion.div 
            {...fadeUp}
            className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200"
          >
            {[
              { title: 'Televisit', desc: 'Consult from home via secure video.', path: '/patient-access/televisit', external: false },
              { title: 'Patient Portal', desc: 'Access records & messages.', path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', external: true },
              { title: 'Insurance Plans', desc: 'Most major plans accepted.', path: '/patient-access/insurance', external: false },
            ].map((item, i) => {
              const cls = "group flex items-center justify-between px-8 py-6 hover:bg-white transition-colors cursor-pointer";
              const inner = (
                <>
                  <div>
                    <p className="text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">{item.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-brand-secondary group-hover:translate-x-1 transition-all shrink-0" />
                </>
              );
              return item.external
                ? <a key={i} href={item.path} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                : <Link key={i} to={item.path} className={cls}>{inner}</Link>;
            })}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT: text left, image right, warm bg ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...slideLeft}
              className="space-y-6"
            >
              <p className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em]">Meet Your Doctor</p>
              <h2 className="text-3xl lg:text-4xl leading-snug">Dr. Kavitha Ilayaraja, <em>MD</em></h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Board certified in Internal Medicine, Dr. Ilayaraja earned her medical degree from Madurai Medical College, India, and completed her residency at Medical City Arlington, Texas. She also serves as a hospitalist physician at Medical City Hospital Plano, Denton, and Frisco.
              </p>
              <ul className="space-y-2.5">
                {['Board Certified — Internal Medicine', 'Madurai Medical College, India', 'Residency — Medical City Arlington', 'Hospitalist — Medical City Plano & Frisco'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/about/physicians"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-secondary hover:gap-3 transition-all ">
                Learn more about Dr. Kavitha Ilayaraja <ArrowRight size={14} />
              </Link>
            </motion.div>
            <motion.div 
              {...slideRight}
              className="relative"
            >
              <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-md">
                <img src={kavithaPhoto} alt="Dr. Kavitha Ilayaraja" className="w-full h-full object-cover" />
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES: warm bg, compact grid ── */}
      <section className="section-padding bg-brand-warm">
        <div className="container-custom">
          <motion.div 
            {...fadeUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10"
          >
            <div className="space-y-2">
              <p className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em]">What We Offer</p>
              <h2 className="text-3xl lg:text-4xl">Medical Services</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-secondary hover:gap-3 transition-all shrink-0">
              View all services <ArrowRight size={14} />
            </Link>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {featuredServices.map((s, i) => (
               <motion.div 
                key={s.id} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
               >
                 <ServiceCard service={s} className='rounded-md'/>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE: clean white, marquee ── */}
      <section className="py-14 bg-white border-y border-slate-100 overflow-hidden">
        <motion.div 
          {...fadeUp}
          className="container-custom mb-8 text-center"
        >
          <p className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em] mb-2">Coverage</p>
          <h2 className="text-2xl">Accepted Insurance Plans</h2>
        </motion.div>
        <div className="flex gap-5 animate-marquee">
          {[...plans, ...plans].map((plan, i) => (
            <div key={i} className="inline-flex flex-col items-center gap-2 px-6 py-4 bg-brand-light border border-slate-100 min-w-[140px] flex-shrink-0">
              <img src={plan.logo} alt={plan.name} className="h-8 w-auto object-contain" />
              <span className="text-xs text-slate-400 text-center">{plan.name}</span>
            </div>
          ))}
        </div>
        <motion.div 
          {...fadeUp}
          className="text-center mt-6"
        >
          <Link to="/patient-access/insurance" className="text-xs font-medium text-brand-secondary hover:underline inline-flex items-center gap-1">
            View full list <ArrowRight size={12} />
          </Link>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS: warm bg, single card, serif quote ── */}
      <section className="section-padding bg-brand-warm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              {...slideLeft}
              className="space-y-4"
            >
              <p className="text-xs font-semibold text-brand-secondary uppercase tracking-[0.2em]">Patient Reviews</p>
              <h2 className="text-3xl lg:text-4xl leading-snug">What Our Patients<br />Are Saying</h2>
              <p className="text-sm text-slate-500">Trusted by hundreds of patients in Frisco, TX.</p>
              <div className="flex gap-2 pt-2">
                <button onClick={() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 border border-slate-200 hover:border-brand-secondary hover:text-brand-secondary flex items-center justify-center transition-colors">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={() => setCurrent(p => (p + 1) % testimonials.length)}
                  className="w-10 h-10 border border-slate-200 hover:border-brand-secondary hover:text-brand-secondary flex items-center justify-center transition-colors">
                  <ChevronRight size={16} />
                </button>
              </div>
              <div className="flex gap-1.5 pt-1">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`h-1 transition-all duration-300 ${i === current ? 'w-8 bg-brand-secondary' : 'w-3 bg-slate-300'}`} />
                ))}
              </div>
            </motion.div>

            <motion.div 
              {...slideRight}
              className="overflow-hidden"
            >
              <div className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}>
                {testimonials.map((item, idx) => (
                  <div key={idx} className="min-w-full">
                    <div className="bg-white p-8 border-l-4 border-brand-secondary shadow-sm">
                      <p className="text-lg font-heading italic text-brand-primary leading-relaxed mb-6">
                        "{item.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-primary flex items-center justify-center text-white font-semibold text-sm shrink-0">
                          {item.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-brand-primary">{item.author}</p>
                          <p className="text-xs text-slate-400">Designation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA: full-width dark band ── */}
      <section className="bg-brand-primary py-16">
        <motion.div 
          {...fadeUp}
          className="container-custom flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl text-white">Ready to Take Charge of Your Health?</h2>
            <p className="text-sm text-white/50">Now accepting new patients at our Frisco, TX location.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-brand-secondary hover:bg-[#267a7a] text-white text-sm font-medium px-7 py-3.5 transition-colors rounded-md">
              <Calendar size={14} /> Book Appointment
            </Link>
            <a href={`tel:${clinicInfo.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:bg-white/10 text-sm font-medium px-7 py-3.5 transition-colors rounded-md">
              <Phone size={14} /> Call Us
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
