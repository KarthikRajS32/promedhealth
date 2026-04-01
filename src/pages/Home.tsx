import { ArrowRight, CheckCircle, Calendar, Phone, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { services } from '../data/services';
import { clinicInfo, testimonials } from '../data/content';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/ServiceCard';

export function Home() {
  const featuredServices = services.slice(0, 6);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 bg-brand-primary overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left-10 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-white/10 border border-brand-white/20 rounded-full text-brand-white text-xs sm:text-sm font-black tracking-widest">
                <CheckCircle size={14} className="text-brand-secondary" />
                Now Accepting New Patients
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-white leading-tight tracking-tight">
                Where Compassion Meets <span className="text-brand-secondary italic">Connection.</span>
              </h1>
              
              <p className="text-base sm:text-xl text-brand-accent/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                ProMed Health Primary Care is dedicated to providing high-quality, 
                patient-centered medical services under the expert leadership of Dr. Kavitha Ilayaraja, MD.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <Link to="/appointments">
                  <Button size="md" className="gap-3 w-full sm:w-auto">
                    <Calendar size={20} /> Schedule Appointment
                  </Button>
                </Link>
                <a href={`tel:${clinicInfo.contact.phone}`}>
                  <Button variant="outline" size="md" className="border-brand-white/30 text-brand-white hover:bg-brand-white hover:text-brand-primary gap-3 w-full sm:w-auto">
                    <Phone size={20} /> (945) 221-6442
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="relative group mt-8 lg:mt-0">
              <div className="aspect-[5/6] sm:aspect-[3/4]  max-w-[280px] sm:max-w-sm mx-auto rounded-[32px] overflow-hidden bg-brand-accent border-[8px] sm:border-[12px] border-brand-white/10 shadow-2xl relative rotate-2 group-hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 bg-brand-secondary/20 mix-blend-overlay" />
                <img src="/src/assets/kavitha-photo.png" alt="Dr. Kavitha Ilayaraja" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 left-0 sm:-bottom-8 sm:-left-6 bg-brand-white p-3 sm:p-4 rounded-2xl shadow-2xl border border-brand-accent max-w-[160px] sm:max-w-[200px]">
                <h4 className="text-xs sm:text-sm font-black text-brand-primary">Dr. Kavitha Ilayaraja MD</h4>
                <p className="text-xs font-bold text-slate-500 mt-0.5">Primary Care Physician</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utility Bar (Quick Actions) */}
      <section className="bg-brand-white border-b border-brand-accent relative z-20 mt-8 sm:-mt-12 mx-4 lg:mx-auto container-custom rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12">
          {[
            { title: "Televisit", link: "/patient-access/televisit", icon: "Video", desc: "Consult with Dr. Ilayaraja from the comfort of your home." },
            { title: "Patient Portal", link: "/patient-access/portal", icon: "Layout", desc: "Access your medical records and secure messages." },
            { title: "Insurance Plans", link: "/patient-access/insurance", icon: "Shield", desc: "We accept most major insurance plans and medicare." }
          ].map((item, idx) => (
            <Link key={idx} to={item.link} className="group flex items-start gap-6 p-4 rounded-2xl hover:bg-brand-accent transition-colors">
              <div className="w-10 sm:w-14 h-10 sm:h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-brand-white group-hover:bg-brand-secondary transition-colors">
                <ArrowRight size={20} className="group-hover:rotate-45 transition-transform sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-primary group-hover:text-brand-secondary transition-colors">{item.title}</h3>
                <p className="text-sm font-bold text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Hub Section */}
      <section className="section-padding bg-brand-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
            <div className="max-w-2xl space-y-4 sm:space-y-6">
              <div className="h-1.5 w-20 bg-brand-secondary rounded-full" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-primary">Our Comprehensive <br/> Medical Services</h2>
              <p className="text-base sm:text-xl font-medium text-slate-600 leading-relaxed">
                From preventive medicine to complex chronic care, we provide 
                expert primary healthcare for all your medical needs.
              </p>
            </div>
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                View All Services <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Insurance Section - Auto Scroll */}
      <section className="py-16 sm:py-20 bg-brand-light border-y border-brand-accent overflow-hidden">
        <div className="container-custom mb-10 text-center">
          <div className="h-1.5 w-20 bg-brand-secondary rounded-full mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-primary">Accepted Insurance</h2>
          <p className="text-base sm:text-lg font-medium text-slate-500 mt-3">We partner with major providers to keep your care seamless.</p>
        </div>
        <div className="relative">
          {(() => {
            const plans = [
              { name: 'Aetna', logo: '/src/assets/atena-1.png' },
              { name: 'Texas Health', logo: '/src/assets/texax-helath.png' },
              { name: 'BlueCross BlueShield', logo: '/src/assets/bcbs.png' },
              { name: 'UnitedHealthcare', logo: '/src/assets/UHC2.png' },
              { name: 'Cigna', logo: '/src/assets/Cigna.png' },
              { name: 'Medicare', logo: '/src/assets/Medicare.png' },
              { name: 'Humana', logo: '/src/assets/Humana.png' },
              { name: 'First Health', logo: '/src/assets/first-health.png' },
              { name: 'Self-Pay', logo: '/src/assets/self-pay.png' },
            ];
            const doubled = [...plans, ...plans];
            return (
              <div className="flex gap-6 animate-marquee">
                {doubled.map((plan, i) => (
                  <div key={i} className="inline-flex flex-col items-center justify-center px-8 py-5 bg-brand-white rounded-2xl border border-brand-accent shadow-sm min-w-[180px] flex-shrink-0 gap-2">
                    <img src={plan.logo} alt={plan.name} className="h-12 w-auto object-contain" />
                    <span className="text-xs font-bold text-slate-500 text-center">{plan.name}</span>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
        <div className="text-center mt-8">
          <Link to="/patient-access/insurance" className="inline-flex items-center gap-2 text-brand-secondary font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
            View Full List <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* What Our Patients Are Saying - Exact Replica Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Medical Theme Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80" 
            alt="Clinic Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-primary/95 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/50 via-transparent to-brand-primary" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">What Our Patients Are Saying</h2>
            <div className="h-1.5 w-20 bg-brand-secondary rounded-full mx-auto" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-[40px] py-8">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${current * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 100 : 50)}%)` }}
              >
                {testimonials.map((item, idx) => (
                  <div key={idx} className="min-w-full lg:min-w-[50%] px-4 sm:px-6">
                      <div className="relative mb-16">
                      {/* White Card */}
                      <div className="bg-white rounded-[28px] p-7 lg:p-8 shadow-2xl text-center relative z-20 h-full flex flex-col min-h-[280px]">
                        <div className="flex justify-center mb-6">
                          <Quote size={48} className="text-slate-100" fill="currentColor" />
                        </div>
                        <p className="text-base lg:text-base font-medium text-slate-600 leading-relaxed italic flex-grow">
                          "{item.text}"
                        </p>
                        
                        {/* Overlapping Avatar */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full p-1.5 shadow-xl z-30">
                          <div className="w-full h-full rounded-full bg-brand-accent flex items-center justify-center text-brand-primary font-black text-2xl overflow-hidden border border-slate-100">
                             {item.author.charAt(0)}
                          </div>
                        </div>
                      </div>

                      {/* Caption Below Card */}
                      <div className="text-center mt-12 space-y-1">
                        <h4 className="text-lg font-black text-white">{item.author}</h4>
                        <p className="text-sm font-bold text-brand-secondary tracking-[0.2em]">Designation</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-14 h-14 bg-white/10 hover:bg-white text-white hover:text-brand-primary border border-white/20 rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-sm"
              aria-label="Previous patient story"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => setCurrent(prev => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-14 h-14 bg-white/10 hover:bg-white text-white hover:text-brand-primary border border-white/20 rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-sm"
              aria-label="Next patient story"
            >
              <ChevronRight size={28} />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    idx === current ? 'w-10 bg-brand-secondary shadow-[0_0_15px_rgba(0,186,211,0.5)]' : 'w-2.5 bg-white/30'
                  }`}
                  aria-label={`Go to testimonial group ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Counters */}
      {/* <section className="py-20 bg-brand-primary text-brand-white">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 text-center items-center">
          {[
            { stat: "15+", label: "Years Experience" },
            { stat: "5000+", label: "Happy Patients" },
            { stat: "100%", label: "Patient Care" },
            { stat: "16+", label: "Medical Services" }
          ].map(counter => (
            <div key={counter.label} className="space-y-2">
              <span className="text-5xl lg:text-6xl font-black text-brand-secondary tabular-nums">{counter.stat}</span>
              <p className="text-sm font-black uppercase tracking-widest text-brand-accent/60">{counter.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-brand-light">
        <div className="container-custom">
          <div className="bg-brand-secondary rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-24 text-center text-brand-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Calendar size={320} />
            </div>
            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black leading-tight tracking-tight">Need Medical Attention? <br/> Book Your Visit Today.</h2>
              <p className="text-base sm:text-lg font-medium text-white/80 leading-relaxed">
                We are currently accepting new patients at our Frisco location. 
                Schedule your appointment online or call our office at <span className="font-black underline">(945) 221-6442</span>.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                <Link to="/appointments">
                  <Button size="lg" className="bg-brand-white text-brand-primary hover:bg-brand-accent w-full sm:w-auto h-14 sm:h-14 text-base sm:text-xl px-8 sm:px-8">
                    Schedule Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto h-14 sm:h-14 text-base sm:text-xl px-8 sm:px-8">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
