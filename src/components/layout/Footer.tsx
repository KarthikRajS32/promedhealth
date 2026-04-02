import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import { clinicInfo } from '../../data/content';
import { services } from '../../data/services';
import { promedLogo } from '../../assets';

export function Footer() {
  const year = new Date().getFullYear();
  const lnk = "text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5 group";
  const arr = "opacity-0 group-hover:opacity-100 transition-opacity text-s shrink-0";

  return (
    <footer className="bg-p text-white">
      {/* CTA strip */}
    

      {/* Main */}
      <div className="wrap py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/"><img src={promedLogo} alt="ProMed Health" className="h-12 w-auto brightness-0 invert" /></Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Patient-centered primary care in Frisco, TX, led by Dr. Kavitha Ilayaraja, MD — board certified in Internal Medicine.
            </p>
            <div className="space-y-2.5 text-sm text-white/50">
              <a href={`tel:${clinicInfo.contact.phone}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={13} className="text-s shrink-0" /> {clinicInfo.contact.phone}
              </a>
              <a href={`mailto:${clinicInfo.contact.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail size={13} className="text-s shrink-0" /> {clinicInfo.contact.email}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-s shrink-0 mt-0.5" />
                <span>{clinicInfo.contact.address.street}, {clinicInfo.contact.address.city}, TX {clinicInfo.contact.address.zip}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={13} className="text-s shrink-0" />
                <span>Mon – Fri: 8:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Home',           path: '/' },
                { name: 'Our Physicians', path: '/about/physicians' },
                { name: 'Testimonials',   path: '/about/testimonials' },
                { name: 'Locations',      path: '/locations/frisco' },
                { name: 'Contact',        path: '/contact' },
              ].map(l => (
                <li key={l.name}><Link to={l.path} className={lnk}><ArrowRight size={11} className={arr} />{l.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Patient Access */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Patient Access</h4>
            <ul className="space-y-2.5">
              {[
                { name: 'Televisit',      path: '/patient-access/televisit', ext: false },
                { name: 'Patient Portal', path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', ext: true },
                { name: 'Pay Your Bill',  path: 'https://www.healowpay.com/HealowPay/jsp/healow/login.jsp', ext: true },
                { name: 'Insurance',      path: '/patient-access/insurance', ext: false },
                { name: 'Book Appointment', path: '/appointments', ext: false },
              ].map(l => (
                <li key={l.name}>
                  {l.ext
                    ? <a href={l.path} target="_blank" rel="noopener noreferrer" className={lnk}><ArrowRight size={11} className={arr} />{l.name}</a>
                    : <Link to={l.path} className={lnk}><ArrowRight size={11} className={arr} />{l.name}</Link>}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Services</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {services.slice(0, 8).map(s => (
                <li key={s.id}><Link to={`/services/${s.id}`} className={lnk}><ArrowRight size={11} className={arr} />{s.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 h-48">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.670356763442!2d-96.7562854!3d33.1558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c393bc3075f%3A0xc6cb1c7df8b64e0!2s11691%20Independence%20Pkwy%20%23110%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1711894000000!5m2!1sen!2sus"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="wrap py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-white/50">
          <p>© {year} ProMed Health Primary Care. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms"   className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
