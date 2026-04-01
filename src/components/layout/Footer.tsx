import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Share2, Shield, Heart } from 'lucide-react';
import { clinicInfo } from '../../data/content';
import { services } from '../../data/services';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand & Contact — 5 cols */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-brand-accent rounded-2xl flex items-center justify-center text-white font-black text-2xl group-hover:rotate-6 transition-transform">P</div>
              <span className="font-heading font-extrabold text-2xl tracking-tighter">ProMed<span className="text-brand-accent">.</span></span>
            </Link>
            
            <h2 className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-tight text-white/90">
              Modern Primary Care<br />
              <span className="text-white/40">Redefining standards in Frisco.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">Direct Line</p>
                <a href={`tel:${clinicInfo.contact.phone}`} className="block text-lg font-bold hover:text-brand-accent transition-colors">
                  {clinicInfo.contact.phone}
                </a>
                <a href={`mailto:${clinicInfo.contact.email}`} className="block text-sm font-medium text-white/50 hover:text-white transition-colors">
                  {clinicInfo.contact.email}
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">Our Location</p>
                <p className="text-sm font-medium text-white/60 leading-relaxed">
                  {clinicInfo.contact.address.street}<br />
                  {clinicInfo.contact.address.city}, {clinicInfo.contact.address.state} {clinicInfo.contact.address.zip}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {[Globe, Share2, Shield, Heart].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all group">
                  <Icon size={18} className="text-white/40 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation — 7 cols */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-8">
              
              {/* Services Column */}
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">Specialties</p>
                <ul className="space-y-4">
                  {services.slice(0, 6).map(s => (
                    <li key={s.id}>
                      <Link to={`/services/${s.id}`} className="text-sm font-bold text-white/40 hover:text-brand-accent transition-colors flex items-center justify-between group">
                        {s.title} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Patients Column */}
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">For Patients</p>
                <ul className="space-y-4">
                  {[
                    { name: 'Patient Portal', path: 'https://health.healow.com/PHPC' },
                    { name: 'Schedule Visit', path: '/appointments' },
                    { name: 'Televisit Guide', path: '/patient-access/televisit' },
                    { name: 'Insurance List', path: '/patient-access/insurance' },
                    { name: 'Pay Your Bill', path: '/patient-access/bill-pay' },
                  ].map(l => (
                    <li key={l.name}>
                      <Link to={l.path} className="text-sm font-bold text-white/40 hover:text-brand-accent transition-colors flex items-center justify-between group">
                        {l.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="space-y-6 col-span-2 sm:col-span-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted">Practice</p>
                <ul className="space-y-4">
                  {[
                    { name: 'About Dr. Kavitha', path: '/about/physicians' },
                    { name: 'Our Location', path: '/locations/frisco' },
                    { name: 'Reviews', path: '/about/testimonials' },
                    { name: 'Contact', path: '/contact' },
                    { name: 'Careers', path: '#' },
                  ].map(l => (
                    <li key={l.name}>
                      <Link to={l.path} className="text-sm font-bold text-white/40 hover:text-brand-accent transition-colors flex items-center justify-between group">
                        {l.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Bottom Actions Area */}
            <div className="mt-16 bg-white/[0.03] border border-white/5 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-lg font-bold">Accepting New Patients</p>
                <p className="text-sm text-white/40">Secure your appointment online in less than 2 minutes.</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <Link to="/appointments" className="px-8 h-12 bg-white text-brand-primary rounded-2xl flex items-center justify-center font-black text-sm hover:bg-brand-accent hover:text-white transition-all">
                  Book Now
                </Link>
                <a href={`tel:${clinicInfo.contact.phone}`} className="px-8 h-12 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center font-black text-sm hover:bg-white/10 transition-all">
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
            © {year} ProMed Health. Built for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
