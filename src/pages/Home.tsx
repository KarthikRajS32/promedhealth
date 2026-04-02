import { ArrowRight, Phone, Calendar, CheckCircle, Video, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { services } from '../data/services';
import { clinicInfo, testimonials } from '../data/content';
import {
  promedHospital, doctorImg, kavithaPhoto,
  aetna, texasHealth, bcbs, uhc, cigna, medicare, humana, firstHealth, selfPay,
} from '../assets';

const PLANS = [
  { name: 'Aetna',               logo: aetna },
  { name: 'Texas Health',        logo: texasHealth },
  { name: 'BlueCross BlueShield',logo: bcbs },
  { name: 'UnitedHealthcare',    logo: uhc },
  { name: 'Cigna',               logo: cigna },
  { name: 'Medicare',            logo: medicare },
  { name: 'Humana',              logo: humana },
  { name: 'First Health',        logo: firstHealth },
  { name: 'Self-Pay',            logo: selfPay },
];

export function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col bg-warm">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={promedHospital} alt="ProMed Health Primary Care Clinic"
          className="absolute inset-0 w-full h-full object-cover rv-fade" />
        <div className="absolute inset-0 bg-gradient-to-t from-p/90 via-p/60 to-p/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-p/40 via-p/20 to-p/80" />

        <div className="relative z-10 wrap w-full pt-24 sm:pt-28 lg:pt-32 pb-16">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

            {/* Doctor image */}
            <div className="flex justify-center lg:justify-start w-full rv-left d1">
              <div className="w-[200px] sm:w-[300px] lg:w-[420px] aspect-[7/6] rounded-3xl overflow-hidden border-2 border-white/15 shadow-2xl">
                <img src={doctorImg} alt="Dr. Kavitha Ilayaraja"
                  className="w-full h-full object-cover object-top" />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-4 sm:space-y-5 text-center lg:text-left w-full rv-right d2">
              <p className="text-gray-200 text-xs font-semibold uppercase tracking-[0.2em]">
                Welcome To ProMed Health Primary Care
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[3.30rem] font-bold text-white leading-[1.06]">
                Where Your Health Is<br />
                <em className="not-italic text-s">Our Priority.</em>
              </h1>
              <p className="text-white/80 text-sm leading-relaxed">
                Welcome to ProMed Health Primary Care, where your health is our priority. Conveniently located in Frisco, our practice is dedicated to providing exceptional healthcare services under the expert guidance of Dr. Kavitha Ilayaraja, who brings several years of experience in internal medicine and primary care specialty.
              </p>
              <p className="text-white/80 text-sm leading-relaxed hidden sm:block">
                At ProMed Health, we believe in fostering strong patient-provider relationships built on trust, compassion, and personalized care. Whether you're in need of preventive screenings, managing chronic conditions, or seeking treatment for acute illnesses, Dr. Ilayaraja and our team are here to support you every step of the way.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link to="/appointments"
                  className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-px shadow-lg shadow-s/30">
                  <Calendar size={14} /> Book Appointment
                </Link>
                <a href={`tel:${clinicInfo.contact.phone}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-full transition-all">
                  <Phone size={14} /> {clinicInfo.contact.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ACCESS STRIP ── */}
      <section className="bg-s">
        <div className="wrap">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {[
              { icon: Video,  title: 'Televisit',      desc: 'Consult from home securely.',  path: '/patient-access/televisit', ext: false },
              { icon: Globe,  title: 'Patient Portal',  desc: 'Records & secure messaging.',  path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', ext: true },
              { icon: Shield, title: 'Insurance Plans', desc: 'Most major plans accepted.',   path: '/patient-access/insurance', ext: false },
            ].map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div className="group flex items-center gap-4 px-5 sm:px-7 py-5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-white/25 transition-colors">
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/60 mt-0.5">{item.desc}</p>
                  </div>
                  <ArrowRight size={14} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              );
              return item.ext
                ? <a key={i} href={item.path} target="_blank" rel="noopener noreferrer">{inner}</a>
                : <Link key={i} to={item.path}>{inner}</Link>;
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="sp bg-warm">
        <div className="wrap">
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div className="lg:col-span-3 space-y-5 lg:space-y-6 w-full rv-left">
              <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full">
                Meet Your Doctor
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Dr. Kavitha Ilayaraja, <span className="text-s">MD</span>
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Board certified in Internal Medicine, Dr. Ilayaraja earned her medical degree from Madurai Medical College, India, and completed her residency at Medical City Arlington, Texas. She also serves as a hospitalist physician at Medical City Hospital Plano, Denton, and Frisco.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Internal medicine-trained physicians like Dr. Ilayaraja possess a deep understanding of adult health, skilled in managing conditions from common ailments to complex diseases — with a holistic, patient-first approach.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Board Certified — Internal Medicine',
                  'Madurai Medical College, India',
                  'Residency — Medical City Arlington',
                  'Hospitalist — Medical City Plano & Frisco',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-ink">
                    <CheckCircle size={13} className="text-s shrink-0 mt-0.5" /> {item}
                  </div>
                ))}
              </div>
              <Link to="/about/physicians"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-s hover:gap-3 transition-all">
                Full Profile <ArrowRight size={14} />
              </Link>
            </div>

            {/* Image */}
            <div className="lg:col-span-2 w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 rv-right">
              <div className="relative">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <img src={kavithaPhoto} alt="Dr. Kavitha Ilayaraja" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3">
                  <p className="text-xs font-semibold text-p">Dr. Kavitha Ilayaraja, MD</p>
                  <p className="text-xs text-muted mt-0.5">Internal Medicine · Primary Care Physician</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="sp bg-card border-y border-border">
        <div className="wrap">
          <div className="flex items-end justify-between mb-8 sm:mb-10 rv-up">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full">
                What We Offer
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl">Medical Services</h2>
            </div>
            <Link to="/services" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-s hover:gap-3 transition-all">
              All services <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 6).map((s, i) => {
              const Icon = s.icon;
              return (
                <Link key={s.id} to={`/services/${s.id}`}
                  className={`group flex gap-4 p-5 bg-warm border border-border rounded-2xl hover:border-s/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 rv-up d${(i % 3) + 1}`}>
                  <div className="w-10 h-10 rounded-xl bg-a flex items-center justify-center text-s group-hover:bg-s group-hover:text-white transition-all shrink-0">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <p className="text-sm font-semibold text-p group-hover:text-s transition-colors">{s.title}</p>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">{s.shortDescription}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-s mt-1">
                      Learn more <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-s">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INSURANCE ── */}
      <section className="py-14 bg-warm overflow-hidden">
        <div className="wrap mb-8 rv-up">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full mb-3">Coverage</div>
              <h2 className="text-2xl lg:text-3xl">Accepted Insurance Plans</h2>
            </div>
            <Link to="/patient-access/insurance" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-s hover:gap-3 transition-all">
              View all <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 marquee">
          {[...PLANS, ...PLANS].map((p, i) => (
            <div key={i} className="inline-flex flex-col items-center gap-2.5 px-6 py-5 bg-card border border-border rounded-2xl min-w-[150px] flex-shrink-0 hover:border-s/30 hover:shadow-sm transition-all">
              <img src={p.logo} alt={p.name} className="h-9 w-auto object-contain" />
              <span className="text-xs text-muted text-center font-medium">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="sp bg-card border-t border-border">
        <div className="wrap">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">

            {/* Left: heading + dots (desktop) */}
            <div className="space-y-4 lg:space-y-6 lg:sticky lg:top-28 w-full rv-up">
              <div className="inline-flex items-center gap-2 bg-a text-s text-xs font-semibold px-3 py-1.5 rounded-full">
                Patient Reviews
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight">
                What Our Patients<br />Are Saying
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Trusted by hundreds of patients across Frisco, TX. Here's what they say about their experience with ProMed Health.
              </p>
              {/* Dots — desktop only */}
              <div className="hidden lg:flex gap-2 pt-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-s' : 'w-2 bg-border'}`} />
                ))}
              </div>
            </div>

            {/* Right: slider */}
            <div className="w-full">
              <div className="overflow-hidden">
                <div className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${active * 100}%)` }}>
                  {testimonials.map((item, idx) => (
                    <div key={idx} className="min-w-full">
                      <div className="bg-warm border border-border rounded-3xl p-5 sm:p-8 space-y-5">
                        <div className="text-s/20 leading-none font-serif text-7xl font-bold select-none">"</div>
                        <p className="text-sm sm:text-base text-ink leading-relaxed -mt-4">
                          {item.text}
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-border">
                          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-p flex items-center justify-center text-white font-bold text-sm sm:text-base shrink-0">
                            {item.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-p">{item.author}</p>
                            <p className="text-xs text-muted">Designation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Dots — mobile only */}
              <div className="flex lg:hidden justify-center gap-2 pt-5">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-s' : 'w-2 bg-border'}`} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-s py-16">
        <div className="wrap flex flex-col lg:flex-row items-center justify-between gap-8 rv-up">
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Take Charge of Your Health?</h2>
            <p className="text-sm text-white/65">Now accepting new patients at our Frisco, TX location.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-warm text-s text-sm font-semibold px-7 py-3 rounded-full transition-all hover:-translate-y-px shadow-sm">
              <Calendar size={14} /> Book Appointment
            </Link>
            <a href={`tel:${clinicInfo.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:bg-white/10 text-sm font-medium px-7 py-3 rounded-full transition-all">
              <Phone size={14} /> {clinicInfo.contact.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
