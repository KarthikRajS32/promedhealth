import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import { clinicInfo } from '../../data/content';
import { services } from '../../data/services';
import { promedLogo } from '../../assets';

export function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Home',           path: '/' },
    { name: 'Our Physicians', path: '/about/physicians' },
    { name: 'Testimonials',   path: '/about/testimonials' },
    { name: 'Locations',      path: '/locations/frisco' },
    { name: 'Contact',        path: '/contact' },
  ];

  const patientLinks = [
    { name: 'Televisit',        path: '/patient-access/televisit',                                          ext: false },
    { name: 'Patient Portal',   path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp',   ext: true  },
    { name: 'Pay Your Bill',    path: 'https://www.healowpay.com/HealowPay/jsp/healow/login.jsp',           ext: true  },
    { name: 'Insurance',        path: '/patient-access/insurance',                                          ext: false },
    { name: 'Book Appointment', path: '/appointments',                                                      ext: false },
  ];

  const lnk = (
    <T extends { name: string; path: string; ext?: boolean }>(l: T) =>
      l.ext ? (
        <a href={l.path} target="_blank" rel="noopener noreferrer"
          className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
          <span className="w-1 h-1 rounded-full bg-s group-hover:w-3 transition-all duration-300" />
          {l.name}
        </a>
      ) : (
        <Link to={l.path}
          className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
          <span className="w-1 h-1 rounded-full bg-s group-hover:w-3 transition-all duration-300" />
          {l.name}
        </Link>
      )
  );

  return (
    <footer className="bg-p">

      {/* ── Main content ── */}
      <div className="wrap pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand + contact */}
          <div className="lg:col-span-4 space-y-7">
            <Link to="/">
              <img src={promedLogo} alt="ProMed Health" className="h-14 w-auto brightness-0 invert opacity-90" />
            </Link>
            <p className="text-sm text-white/45 leading-relaxed">
              Patient-centered primary care in Frisco, TX — led by Dr. Kavitha Ilayaraja, MD, board certified in Internal Medicine.
            </p>

            <div className="space-y-3.5">
              {[
                { Icon: Phone,  text: clinicInfo.contact.phone,  href: `tel:${clinicInfo.contact.phone}` },
                { Icon: Mail,   text: clinicInfo.contact.email,  href: `mailto:${clinicInfo.contact.email}` },
                { Icon: MapPin, text: `${clinicInfo.contact.address.street}, ${clinicInfo.contact.address.city}, TX ${clinicInfo.contact.address.zip}` },
                { Icon: Clock,  text: 'Mon – Fri: 8:00 AM – 5:00 PM' },
              ].map(({ Icon, text, href }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon size={14} className="text-s shrink-0 mt-0.5" />
                  {href
                    ? <a href={href} className="text-sm text-white/50 hover:text-white transition-colors">{text}</a>
                    : <span className="text-sm text-white/50">{text}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Quick Links</p>
            <ul className="space-y-3">
              {navLinks.map(l => <li key={l.name}>{lnk(l)}</li>)}
            </ul>
          </div>

          {/* Patient Access */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Patient Access</p>
            <ul className="space-y-3">
              {patientLinks.map(l => <li key={l.name}>{lnk(l)}</li>)}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4 space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/60">Our Services</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {services.slice(0, 8).map(s => (
                <li key={s.id}>{lnk({ name: s.title, path: `/services/${s.id}`, ext: false })}</li>
              ))}
            </ul>
            <Link to="/services"
              className="inline-flex items-center gap-1.5 text-xs text-s hover:text-white transition-colors mt-1">
              View all services <ArrowRight size={11} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/8" />

        {/* Map */}
        <div className="mt-8 rounded-xl overflow-hidden border border-white/10 h-44">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.670356763442!2d-96.7562854!3d33.1558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c393bc3075f%3A0xc6cb1c7df8b64e0!2s11691%20Independence%20Pkwy%20%23110%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1711894000000!5m2!1sen!2sus"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title="ProMed Health Location"
          />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="wrap py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-white/60">© {year} ProMed Health Primary Care. All rights reserved.</p>
          <div className="flex items-center gap-1 text-white/50 text-sm">
            <Link to="/privacy" className="hover:text-white/80 transition-colors px-3 py-1">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms"   className="hover:text-white/80 transition-colors px-3 py-1">Terms & Conditions</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
