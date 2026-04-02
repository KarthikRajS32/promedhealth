import { useState } from 'react';
import { services } from '../../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Activity, ShieldCheck, Calendar, CheckCircle } from 'lucide-react';
import { SectionBanner } from '../../components/ui/SectionBanner';
import { cn } from '../../lib/utils';

const categories = [
  { id: 'all',        label: 'All Services',        icon: Stethoscope },
  { id: 'primary',    label: 'Primary Care',         icon: Stethoscope },
  { id: 'chronic',    label: 'Chronic Disease',      icon: Activity },
  { id: 'specialized',label: 'Specialized Medicine', icon: ShieldCheck },
];

export function ServicesHub() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? services : services.filter(s => s.category === active);

  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title="Our Medical Services"
        subtitle="Comprehensive high-quality healthcare for acute, chronic, and preventive medical needs."
        breadcrumbs={[{ name: 'Services', path: '/services' }]}
      />

      {/* Filter tabs */}
      <div className="bg-card border-b border-border sticky top-[68px] z-30">
        <div className="wrap">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map(cat => {
              const Icon = cat.icon;
              return (
                <button key={cat.id} onClick={() => setActive(cat.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200",
                    active === cat.id
                      ? "bg-p text-white shadow-sm"
                      : "text-muted hover:text-p hover:bg-a"
                  )}>
                  <Icon size={12} /> {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-14 lg:py-20 bg-warm">
        <div className="wrap">
          <div key={active} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((service, i) => {
              const Icon = service.icon;
              return (
                <Link key={service.id} to={`/services/${service.id}`}
                  className="group relative flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:border-s/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 60}ms`, animation: 'fadeUp 0.4s ease both' }}>

                  {/* Top color strip */}
                  <div className="h-1 bg-gradient-to-r from-p to-s" />

                  {/* Icon + category */}
                  <div className="flex items-start justify-between px-6 pt-6 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-a flex items-center justify-center text-s group-hover:bg-s group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="text-[10px] font-semibold text-muted uppercase tracking-widest mt-1 bg-warm border border-border px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 px-6 pb-6 space-y-3">
                    <h3 className="text-base font-semibold text-p group-hover:text-s transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-s pt-2 border-t border-border">
                      View Details
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-p py-16">
        <div className="wrap">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 rv-left">
              <div className="inline-flex items-center gap-2 bg-s/20 text-s text-xs font-semibold px-3 py-1.5 rounded-full">
                Our Philosophy
              </div>
              <h2 className="text-3xl lg:text-4xl text-white font-bold leading-tight">
                Evidence-Based Care,<br />Compassionate Delivery.
              </h2>
              <p className="text-sm text-white/55 leading-relaxed max-w-md">
                Led by Dr. Kavitha Ilayaraja, MD, ProMed Health combines the latest clinical science with genuine human connection — treating the whole person, not just the condition.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Personalized Plans', 'Coordinated Care', 'Preventive Focus', 'Always Accessible'].map((t, i) => (
                  <div key={t} className={`flex items-center gap-2 text-xs text-white/70 rv-up d${i+1}`}>
                    <CheckCircle size={13} className="text-s shrink-0" /> {t}
                  </div>
                ))}
              </div>
              <Link to="/appointments"
                className="inline-flex items-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-px shadow-sm">
                <Calendar size={14} /> Book Appointment
              </Link>
            </div>

            {/* Quote card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6 rv-right backdrop-blur-sm">
              <div className="text-s/30 text-7xl font-serif leading-none select-none">"</div>
              <p className="text-sm text-white/70 leading-relaxed -mt-4 italic">
                Continuity of care is the foundation of patient wellness. We don't just treat symptoms — we build lasting health partnerships with every patient we serve.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-s/20 flex items-center justify-center text-s font-bold text-sm shrink-0">K</div>
                <div>
                  <p className="text-sm font-semibold text-white">Dr. Kavitha Ilayaraja, MD</p>
                  <p className="text-xs text-white/40 mt-0.5">Lead Medical Specialist · ProMed Health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
