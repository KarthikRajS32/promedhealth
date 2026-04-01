import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { CheckCircle, AlertCircle, ArrowRight, Calendar } from 'lucide-react';
import { SectionBanner } from '../../components/ui/SectionBanner';

export function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  const slideLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const slideRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      <SectionBanner
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[{ name: 'Services', path: '/services' }, { name: service.title, path: `/services/${service.id}` }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div 
              {...slideLeft}
              className="lg:col-span-2 space-y-8"
            >

              {/* Overview */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-accent flex items-center justify-center text-brand-secondary">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <h2 className="text-lg font-semibold text-brand-primary font-sans">Overview</h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed pl-11">{service.content.overview}</p>
              </div>

              <div className="border-t border-slate-100" />

              {/* Symptoms + Causes */}
              <div className="grid sm:grid-cols-2 gap-6">
                {service.content.symptoms && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle size={15} className="text-brand-secondary" />
                      <h3 className="text-sm font-semibold text-brand-primary font-sans">Symptoms</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.content.symptoms.map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0 mt-1.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {service.content.causes && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <AlertCircle size={15} className="text-brand-secondary" />
                      <h3 className="text-sm font-semibold text-brand-primary font-sans">Risk Factors</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.content.causes.map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0 mt-1.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100" />

              {/* Treatment */}
              {service.content.treatment && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-brand-primary font-sans">Treatment Approach</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.content.treatment.map(item => (
                      <div key={item} className="flex items-center gap-3 p-3 bg-brand-warm border border-slate-100 text-xs text-slate-600">
                        <CheckCircle size={13} className="text-brand-secondary shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-slate-100" />

              {/* Benefits */}
              {service.content.benefits && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-brand-primary font-sans">Patient Benefits</h3>
                  <ul className="space-y-2">
                    {service.content.benefits.map(item => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div 
               {...slideRight}
               className="space-y-5"
            >
              {/* Book card */}
              <div className="bg-brand-primary p-6 space-y-4 rounded-md">
                <div className="w-10 h-10 bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-semibold text-white font-sans">Schedule a Consultation</h3>
                <p className="text-xs text-white/50 leading-relaxed">
                  Consult with Dr. Kavitha Ilayaraja, MD about {service.title} at our Frisco practice.
                </p>
                <Link to="/appointments"
                  className="flex items-center justify-center gap-2 bg-brand-secondary hover:bg-[#267a7a] text-white text-sm font-medium py-3 transition-colors w-full rounded-md">
                  <Calendar size={14} /> Book Appointment
                </Link>
              </div>

              {/* Quick links */}
              <div className="bg-brand-warm border border-slate-100 p-5 space-y-3 rounded-md">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Patient Access</h4>
                <ul className="space-y-2">
                  {[
                    { name: 'Televisit', path: '/patient-access/televisit' },
                    { name: 'Patient Portal', path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', external: true },
                    { name: 'Insurance Info', path: '/patient-access/insurance' },
                  ].map(link => (
                    <li key={link.name}>
                      {(link as any).external ? (
                        <a href={link.path} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between text-sm text-slate-500 hover:text-brand-secondary transition-colors group py-1">
                          {link.name} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link to={link.path}
                          className="flex items-center justify-between text-sm text-slate-500 hover:text-brand-secondary transition-colors group py-1">
                          {link.name} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other services */}
              <div className="bg-brand-warm border border-slate-100 p-5 space-y-3 rounded-md">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Other Services</h4>
                <ul className="space-y-2">
                  {services.filter(s => s.id !== service.id).slice(0, 5).map(s => (
                    <li key={s.id}>
                      <Link to={`/services/${s.id}`}
                        className="flex items-center justify-between text-sm text-slate-500 hover:text-brand-secondary transition-colors group py-1">
                        {s.title} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
