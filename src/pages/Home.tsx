import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, ArrowUpRight, Check, Activity, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';
import { clinicInfo, testimonials } from '../data/content';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';
import heroImage from '../assets/hero.png';

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const featuredServices = services.slice(0, 10);
  
  const journeySteps = [
    { title: "Convenience", desc: "Same-day appointments and minimal wait times.", icon: Activity },
    { title: "Compassion", desc: "Expert care under board-certified Dr. Kavitha.", icon: Heart },
    { title: "Coordination", desc: "Seamless primary care & specialist management.", icon: Activity },
    { title: "Community", desc: "Serving Frisco families with personalized attention.", icon: Users },
  ];

  return (
    <div className="flex flex-col bg-brand-surface selection:bg-brand-accent selection:text-white">

      {/* ── IMMERSIVE SPLIT HERO ── */}
      <section className="relative min-h-[95vh] flex flex-col lg:flex-row overflow-hidden bg-brand-primary">
        {/* Left Panel: Content */}
        <div className="w-full lg:w-[60%] relative z-20 flex flex-col justify-center px-6 lg:px-20 py-28 lg:py-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-2xl px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] text-brand-accent">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              Now Accepting New Patients
            </div>

            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Exceptional <br />
              <span className="text-white/30">Primary Care.</span><br />
              Personalized.
            </h1>

            <p className="text-lg text-white/50 leading-relaxed max-w-xl font-medium">
              Join ProMed Health for a healthcare experience built on trust, coordination, and the expert leadership of Dr. Kavitha Ilayaraja, MD.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link to="/appointments">
                <Button size="xl" className="gap-3 group">
                  Book Appointment <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href={`tel:${clinicInfo.contact.phone}`}>
                <Button variant="outline" size="xl" className="border-white/10 text-white hover:bg-white hover:text-brand-primary">
                  {clinicInfo.contact.phone}
                </Button>
              </a>
            </div>

            {/* Floating Quick Feature */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-12 border-t border-white/5">
              {[
                { label: 'Board Certified', val: 'MD' },
                { label: 'Patient Rating', val: '5.0★' },
                { label: 'Wait Times', val: 'Minimal' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">{stat.label}</p>
                  <p className="text-xl font-black text-white">{stat.val}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Panel: Immersive Visual */}
        <div className="w-full lg:w-[40%] relative min-h-[400px] lg:min-h-full overflow-hidden">
          <img 
            src={heroImage} 
            alt="Modern Clinic" 
            className="absolute inset-0 w-full h-full object-cover scale-110 opacity-70 group-hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary lg:bg-gradient-to-l lg:from-brand-primary/80 lg:to-transparent" />
          
          {/* Glassmorphic Stats Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-12 right-12 glass-dark rounded-3xl p-8 max-w-xs space-y-6"
          >
            <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 rounded-2xl border-4 border-brand-primary bg-slate-800" />
              ))}
              <div className="w-12 h-12 rounded-2xl border-4 border-brand-primary bg-brand-accent flex items-center justify-center text-white font-black text-xs">+1k</div>
            </div>
            <div className="space-y-1">
              <p className="text-xl font-black text-white tracking-tight">Active Patients</p>
              <p className="text-xs text-white/40 font-bold uppercase tracking-widest leading-none">Trusted in Frisco, TX</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HORIZONTAL JOURNEY — SIDE SCROLL ── */}
      <section className="py-32 overflow-hidden bg-brand-surface border-b border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
            <div className="space-y-6 lg:max-w-xl text-center lg:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-accent">Beyond The Clinic</p>
              <h2 className="text-5xl lg:text-6xl font-black text-brand-primary tracking-tighter leading-none">
                A seamless experience <br />
                <span className="text-slate-300">from start to finish.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-brand-accent rounded-full" />
              <p className="text-sm font-black uppercase tracking-[0.1em] text-brand-primary shrink-0">Our Core Principles</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.title}
                  whileHover={{ y: -10 }}
                  className="group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-brand-accent/5 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 mb-8">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-2xl font-black text-brand-primary mb-4">{step.title}</h4>
                  <p className="text-sm text-brand-muted font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GEOMETRIC BENTO GRID — SPECIALTIES ── */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-brand-primary tracking-tighter mb-6">Expert Specialties</h2>
            <p className="text-brand-muted font-bold text-sm tracking-widest uppercase">Comprehensive care across all major disciplines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[250px]">
            {/* Large Card: Preventive */}
            {(() => {
              const ServiceIcon = featuredServices[3].icon;
              return (
                <Link to={`/services/${featuredServices[3].id}`} className="md:col-span-6 lg:col-span-7 row-span-2 group relative overflow-hidden rounded-[3rem] bg-brand-primary text-left">
                  <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-10 transition-opacity" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between">
                    <ServiceIcon size={50} className="text-brand-accent" />
                    <div className="space-y-4">
                      <h3 className="text-4xl font-black text-white">{featuredServices[3].title}</h3>
                      <p className="text-white/50 font-medium max-w-sm">{featuredServices[3].shortDescription}</p>
                      <div className="flex items-center gap-2 text-brand-accent text-sm font-black pt-4 uppercase tracking-[0.15em]">
                        View Details <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })()}

            {/* Square: Diabetes */}
            {(() => {
              const ServiceIcon = featuredServices[4].icon;
              return (
                <Link to={`/services/${featuredServices[4].id}`} className="md:col-span-3 lg:col-span-5 row-span-2 group relative overflow-hidden rounded-[3rem] bg-brand-accent text-white p-12 flex flex-col justify-between text-left">
                  <ServiceIcon size={40} className="text-white bg-white/20 p-2 rounded-xl" />
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black">{featuredServices[4].title}</h3>
                    <p className="text-white/70 text-sm font-medium leading-relaxed">{featuredServices[4].shortDescription}</p>
                  </div>
                  <div className="bg-white text-brand-accent w-12 h-12 rounded-2xl flex items-center justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight size={24} />
                  </div>
                </Link>
              );
            })()}

            {/* Rect: Heart */}
            <Link to={`/services/${featuredServices[6].id}`} className="md:col-span-3 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-8 hover:bg-slate-100 transition-colors flex items-center gap-6 text-left">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                  <Heart size={24} />
                </div>
                <div>
                  <p className="text-lg font-black text-brand-primary leading-tight">Cardiovascular<br />Care</p>
                  <p className="text-xs text-brand-muted font-bold uppercase mt-1">Specialized</p>
                </div>
                <ArrowUpRight className="ml-auto text-slate-300 opacity-60" />
            </Link>

            {/* Rect: Chronic */}
            {featuredServices[9] && (
              <Link to={`/services/${featuredServices[9].id}`} className="md:col-span-3 lg:col-span-4 row-span-1 group relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-8 hover:bg-slate-100 transition-colors flex items-center gap-6 text-left">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-lg font-black text-brand-primary leading-tight">Chronic Care<br />Management</p>
                    <p className="text-xs text-brand-muted font-bold uppercase mt-1">Ongoing Support</p>
                  </div>
                  <ArrowUpRight className="ml-auto text-slate-300 opacity-60" />
              </Link>
            )}

            {/* Mini: All Services */}
            <Link to="/services" className="md:col-span-6 lg:col-span-4 row-span-1 bg-brand-primary text-white rounded-[2.5rem] p-8 flex items-center justify-between group text-left">
               <span className="text-2xl font-black">Browse All <br /> <span className="text-white/30">15+ Services</span></span>
               <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-primary transition-all duration-500">
                  <ArrowRight size={24} />
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STAGGERED MOSAIC — TESTIMONIALS ── */}
      <section className="py-36 bg-brand-surface border-y border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-brand-accent/5 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            
            <div className="lg:col-span-5 space-y-10 text-center lg:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted leading-none">Shared Experiences</p>
              <h2 className="text-6xl font-black text-brand-primary tracking-tighter leading-[0.9]">
                The standard <br />
                <span className="text-brand-accent">we set daily.</span>
              </h2>
              <div className="flex gap-1.5 justify-center lg:justify-start">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />)}
                <span className="ml-3 text-sm font-black text-brand-primary uppercase tracking-widest">4.9 Average Rating</span>
              </div>
              <div className="pt-6">
                 <Link to="/about/testimonials">
                    <Button variant="outline" size="lg" className="px-10 h-16 rounded-[1.5rem] text-sm font-black uppercase tracking-widest">Read All Stories</Button>
                 </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative flex justify-center">
              <div className="w-full max-w-lg relative h-[450px]">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentTestimonial}
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="absolute inset-0 bg-white p-12 rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-slate-50 flex flex-col justify-between text-left"
                  >
                    <p className="text-2xl font-bold text-brand-primary leading-snug tracking-tight">
                      "{testimonials[currentTestimonial].text.split('. ').slice(0, 3).join('. ')}..."
                    </p>
                    <div className="flex items-center gap-5 pt-10 border-t border-slate-50">
                      <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center text-white font-black text-lg">
                        {testimonials[currentTestimonial].author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-extrabold text-brand-primary leading-none mb-1.5">{testimonials[currentTestimonial].author}</p>
                        <p className="text-xs font-bold text-brand-muted uppercase tracking-[0.1em]">Patient Review</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation Pills */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/50 backdrop-blur-lg p-2 rounded-3xl border border-white/50 shadow-sm">
                   {[0,1,2,3].map(i => (
                     <button 
                      key={i} 
                      onClick={() => setCurrentTestimonial(i)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-500",
                        i === currentTestimonial ? "w-12 bg-brand-primary" : "w-2 bg-slate-300"
                      )}
                    />
                   ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BOLD CTA — TRANSITION ── */}
      <section className="bg-brand-primary py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container-custom relative z-10 text-center space-y-12">
          <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter leading-[0.9]">
            Begin your care <br />
            <span className="text-brand-accent">journey today.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link to="/appointments">
              <Button variant="primary" size="xl" className="px-16 h-20 rounded-3xl text-xl font-black tracking-tight">
                Schedule Online
              </Button>
            </Link>
            <a href={`tel:${clinicInfo.contact.phone}`}>
              <Button variant="outline" size="xl" className="px-16 h-20 rounded-3xl text-xl font-black border-white/10 text-white hover:bg-white hover:text-brand-primary transition-all">
                Call Clinic
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 pt-20">
            {['Expert Staff', 'Same-Day Visits', 'All Major Insurance'].map(item => (
              <div key={item} className="flex items-center gap-3 text-white/50 font-black text-xs uppercase tracking-widest">
                <Check size={16} className="text-brand-accent" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
