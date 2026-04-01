import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { clinicInfo } from '../../data/content';
import { services } from '../../data/services';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Our Physicians", path: "/about/physicians" },
        { name: "Testimonials", path: "/about/testimonials" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Patient Resources",
      links: [
        { name: "Televisit", path: "/patient-access/televisit" },
        { name: "Patient Portal", path: "/patient-access/portal" },
        { name: "Pay Your Bill", path: "/patient-access/bill-pay" },
        { name: "Insurance Info", path: "/patient-access/insurance" },
        { name: "Book Appointment", path: "/appointments" },
      ],
    },
    {
      title: "Services",
      links: services.slice(0, 5).map(s => ({ name: s.title, path: `/services/${s.id}` })),
    },
  ];

  return (
    <footer className="bg-brand-primary text-brand-white pt-24 pb-12 overflow-hidden border-t border-brand-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Branding */}
          <div className="space-y-8 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/src/assets/promed-logo.png"
                alt="ProMed Health"
                className="h-18 lg:h-18 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-brand-accent/80 leading-relaxed text-[15px] font-medium max-w-xs">
              Providing exceptional, patient-centered healthcare with compassion and expertise.
              Led by Dr. Kavitha Ilayaraja, MD, we are dedicated to your wellness journey.
            </p>
            <div className="pt-4">
              <h5 className="text-sm font-black uppercase tracking-widest text-brand-secondary mb-4">Location Map</h5>
              <div className="rounded-2xl overflow-hidden transition-all duration-500 border border-brand-secondary/30 h-40 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.670356763442!2d-96.7562854!3d33.1558235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c393bc3075f%3A0xc6cb1c7df8b64e0!2s11691%20Independence%20Pkwy%20%23110%2C%20Frisco%2C%20TX%2075035!5e0!3m2!1sen!2sus!4v1711894000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-12">
            {footerLinks.slice(0, 2).map((section) => (
              <div key={section.title} className="space-y-8">
                <h5 className="text-xl font-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-brand-secondary rounded-full">
                  {section.title}
                </h5>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group flex items-center gap-3 text-[15px] font-bold text-brand-accent/70 hover:text-brand-white transition-colors"
                      >
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-brand-secondary" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact info in footer */}
          <div className="space-y-8">
            <h5 className="text-xl font-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-brand-secondary rounded-full">
              Get In Touch
            </h5>
            <div className="space-y-6">
              <a href={`tel:${clinicInfo.contact.phone}`} className="flex items-center gap-4 text-[15px] font-bold hover:text-brand-accent transition-colors group">
                <div className="w-10 h-10 bg-brand-white/10 rounded-xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-brand-white transition-all">
                  <Phone size={18} />
                </div>
                {clinicInfo.contact.phone}
              </a>
              <div className="flex items-start gap-4 text-[15px] font-bold">
                <div className="w-10 h-10 bg-brand-white/10 rounded-xl flex items-center justify-center text-brand-secondary mt-1 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="leading-relaxed">
                  {clinicInfo.contact.address.street},<br />
                  {clinicInfo.contact.address.city}, TX {clinicInfo.contact.address.zip}
                </div>
              </div>
              <div className="flex items-start gap-4 text-[15px] font-bold">
                <div className="w-10 h-10 bg-brand-white/10 rounded-xl flex items-center justify-center text-brand-secondary mt-1 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  Mon - Fri: 8:00 AM – 5:00 PM<br />
                  <span className="text-brand-accent/90">Sat - Sun: Closed</span>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link to="/appointments">
                <Button className="w-full bg-brand-secondary text-brand-white hover:bg-brand-white hover:text-brand-primary h-14 rounded-xl text-sm font-black uppercase tracking-widest">
                  Book Online Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-brand-white/30 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-brand-accent/40">
          <p className='text-gray-200'>© {currentYear} ProMed Health Primary Care. Built with excellence.</p>
          <div className="flex gap-10">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="text-gray-300 hover:text-brand-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
