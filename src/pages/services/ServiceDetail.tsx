import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../../data/services';
import { SectionBanner } from '../../components/ui/SectionBanner';
import { CheckCircle, ArrowRight, Calendar, UserCheck, Phone } from 'lucide-react';
import { clinicInfo } from '../../data/content';

export function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);
  if (!service) return <Navigate to="/services" replace />;
  const Icon = service.icon;

  return (
    <div className="flex flex-col bg-warm">
      <SectionBanner
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { name: 'Services', path: '/services' },
          { name: service.title, path: `/services/${service.id}` },
        ]}
      />

      <section className="py-14 lg:py-20 bg-warm">
        <div className="wrap">
          <div className="grid lg:grid-cols-3 gap-10 items-start">

            {/* ── Main content ── */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview */}
              <div className="bg-card rounded-3xl border border-border overflow-hidden rv-left">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-border bg-a">
                  <div className="w-8 h-8 bg-s/15 rounded-xl flex items-center justify-center text-s">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <h2 className="text-sm font-semibold text-p uppercase tracking-widest">Overview</h2>
                </div>
                <p className="px-6 py-5 text-sm text-ink leading-relaxed">{service.content.overview}</p>
              </div>

              {/* Symptoms + Causes */}
              {(service.content.symptoms || service.content.causes) && (
                <div className="grid sm:grid-cols-2 gap-5 rv-up d1">
                  {service.content.symptoms && (
                    <div className="bg-card border border-border rounded-2xl overflow-hidden">
                      <div className="px-5 py-3.5 bg-rose-50 border-b border-rose-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                        <h3 className="text-xs font-semibold text-rose-700 uppercase tracking-widest">Symptoms</h3>
                      </div>
                      <ul className="p-5 space-y-2.5">
                        {service.content.symptoms.map(item => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-300 shrink-0 mt-1.5" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {service.content.causes && (
                    <div className="bg-card border border-border rounded-2xl overflow-hidden">
                      <div className="px-5 py-3.5 bg-amber-50 border-b border-amber-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        <h3 className="text-xs font-semibold text-amber-700 uppercase tracking-widest">Risk Factors</h3>
                      </div>
                      <ul className="p-5 space-y-2.5">
                        {service.content.causes.map(item => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 shrink-0 mt-1.5" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Treatment */}
              {service.content.treatment && (
                <div className="bg-card border border-border rounded-2xl overflow-hidden rv-up d2">
                  <div className="px-6 py-4 border-b border-border bg-a flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-s shrink-0" />
                    <h3 className="text-xs font-semibold text-p uppercase tracking-widest">Treatment Approach</h3>
                  </div>
                  <div className="p-5 grid sm:grid-cols-2 gap-3">
                    {service.content.treatment.map((item, idx) => (
                      <div key={item}
                        className="group flex items-center gap-3 p-3 bg-warm border border-border rounded-xl hover:border-s/40 hover:bg-a/50 transition-all duration-200">
                        <span className="w-6 h-6 rounded-lg bg-s/10 text-s text-[10px] font-bold flex items-center justify-center shrink-0 group-hover:bg-s group-hover:text-white transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs text-muted group-hover:text-ink transition-colors leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {service.content.benefits && (
                <div className="bg-p rounded-3xl overflow-hidden rv-up d3">
                  <div className="px-7 py-4 border-b border-white/10 flex items-center gap-2">
                    <CheckCircle size={14} className="text-s" />
                    <h3 className="text-xs font-semibold text-white uppercase tracking-widest">Patient Benefits</h3>
                  </div>
                  <div className="p-7 grid sm:grid-cols-2 gap-4">
                    {service.content.benefits.map(item => (
                      <div key={item} className="flex items-start gap-3 group">
                        <div className="w-5 h-5 rounded-full bg-s/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-s transition-colors">
                          <CheckCircle size={11} className="text-s group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-xs text-white/65 leading-relaxed group-hover:text-white/90 transition-colors">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-5 lg:sticky lg:top-28 rv-right">

              {/* Book card */}
              <div className="bg-p rounded-2xl overflow-hidden">
                <div className="p-6 space-y-4">
                  <div className="w-11 h-11 bg-s/20 rounded-2xl flex items-center justify-center text-s">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Schedule a Consultation</h3>
                    <p className="text-xs text-white/45 mt-1 leading-relaxed">
                      Consult with Dr. Kavitha Ilayaraja, MD about {service.title} at our Frisco practice.
                    </p>
                  </div>
                  <Link to="/appointments"
                    className="flex items-center justify-center gap-2 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold py-3 rounded-full transition-all hover:-translate-y-px w-full shadow-sm">
                    <Calendar size={13} /> Book Appointment
                  </Link>
                  <a href={`tel:${clinicInfo.contact.phone}`}
                    className="flex items-center justify-center gap-2 border border-white/15 text-white/70 hover:bg-white/10 text-xs font-medium py-2.5 rounded-full transition-all w-full">
                    <Phone size={12} /> {clinicInfo.contact.phone}
                  </a>
                </div>
                <div className="px-6 py-3 bg-white/5 border-t border-white/10 flex items-center gap-2">
                  <UserCheck size={12} className="text-s shrink-0" />
                  <p className="text-xs text-white/35">Lead MD: Dr. Kavitha Ilayaraja</p>
                </div>
              </div>

              {/* Patient resources */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="px-5 py-3.5 bg-a border-b border-border">
                  <h4 className="text-xs font-semibold text-p uppercase tracking-widest">Patient Resources</h4>
                </div>
                <ul className="p-3 space-y-0.5">
                  {[
                    { name: 'Televisit',      path: '/patient-access/televisit' },
                    { name: 'Patient Portal', path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', ext: true },
                    { name: 'Insurance Info', path: '/patient-access/insurance' },
                  ].map(link => (
                    <li key={link.name}>
                      {(link as any).ext ? (
                        <a href={link.path} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-between px-3 py-2.5 text-sm text-muted hover:text-s hover:bg-a rounded-xl transition-all group">
                          {link.name} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link to={link.path}
                          className="flex items-center justify-between px-3 py-2.5 text-sm text-muted hover:text-s hover:bg-a rounded-xl transition-all group">
                          {link.name} <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other services */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="px-5 py-3.5 bg-a border-b border-border">
                  <h4 className="text-xs font-semibold text-p uppercase tracking-widest">Other Services</h4>
                </div>
                <ul className="p-3 space-y-0.5">
                  {services.filter(s => s.id !== service.id).slice(0, 6).map(s => {
                    const SIcon = s.icon;
                    return (
                      <li key={s.id}>
                        <Link to={`/services/${s.id}`}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted hover:text-s hover:bg-a rounded-xl transition-all group">
                          <div className="w-6 h-6 rounded-lg bg-warm border border-border flex items-center justify-center text-muted group-hover:bg-s group-hover:text-white group-hover:border-s transition-all shrink-0">
                            <SIcon size={11} strokeWidth={1.8} />
                          </div>
                          <span className="flex-1 leading-snug">{s.title}</span>
                          <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
