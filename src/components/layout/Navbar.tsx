import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, Menu, X, ChevronDown, Calendar, ArrowRight } from 'lucide-react';
import { clinicInfo } from '../../data/content';
import { services } from '../../data/services';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      subLinks: [
        { name: 'Our Physicians', path: '/about/physicians' },
        { name: 'Testimonials', path: '/about/testimonials' },
      ],
    },
    {
      name: 'Patient Access',
      path: '/patient-access',
      subLinks: [
        { name: 'Televisit', path: '/patient-access/televisit' },
        { name: 'Patient Portal', path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', external: true },
        { name: 'Pay Your Bill', path: 'https://www.healowpay.com/HealowPay/jsp/healow/login.jsp', external: true },
        { name: 'Insurance', path: '/patient-access/insurance' },
      ],
    },
    {
      name: 'Services',
      path: '/services',
      subLinks: services.map(s => ({ name: s.title, path: `/services/${s.id}` })),
    },
    { name: 'Locations', path: '/locations/frisco' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-brand-primary text-brand-white py-2">
        <div className="container-custom flex justify-between items-center text-sm font-medium">
          <div className="flex gap-6">
            <a href={`tel:${clinicInfo.contact.phone}`} className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Phone size={14} /> {clinicInfo.contact.phone}
            </a>
            <a href={`mailto:${clinicInfo.contact.email}`} className="flex items-center gap-2 hover:text-brand-accent transition-colors">
              <Mail size={14} /> {clinicInfo.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>Mon - Fri: 8:00 AM – 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "transition-all duration-300",
        isScrolled ? "bg-brand-white shadow-md py-3" : "bg-brand-white py-5"
      )}>
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/src/assets/promed-logo.png"
              alt="ProMed Health"
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <button
                    className={cn(
                      "px-4 py-2 text-[15px] font-bold text-slate-600 hover:text-brand-primary flex items-center gap-1 transition-colors",
                      activeDropdown === link.name && "text-brand-primary"
                    )}
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.name} <ChevronDown size={14} className={cn("transition-transform", activeDropdown === link.name && "rotate-180")} />
                  </button>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => cn(
                      "px-4 py-2 text-[15px] font-bold transition-colors",
                      isActive ? "text-brand-primary" : "text-slate-600 hover:text-brand-primary"
                    )}
                  >
                    {link.name}
                  </NavLink>
                )}

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div
                    className={cn(
                      "absolute top-full left-0 w-64 bg-brand-white shadow-2xl rounded-2xl border border-brand-accent transform transition-all duration-200 p-2",
                      activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none",
                      link.name === 'Services' && "w-[480px] grid grid-cols-2 p-4"
                    )}
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.subLinks.map((sub) => (
                      sub.external ? (
                        <a
                          key={sub.name}
                          href={sub.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 text-[14px] font-bold text-slate-700 hover:bg-brand-accent hover:text-brand-primary rounded-xl transition-all flex items-center justify-between group/sub"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.name}
                          <ArrowRight size={14} className="opacity-0 group-hover/sub:opacity-100 -translate-x-2 group-hover/sub:translate-x-0 transition-all" />
                        </a>
                      ) : (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="p-3 text-[14px] font-bold text-slate-700 hover:bg-brand-accent hover:text-brand-primary rounded-xl transition-all flex items-center justify-between group/sub"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.name}
                          <ArrowRight size={14} className="opacity-0 group-hover/sub:opacity-100 -translate-x-2 group-hover/sub:translate-x-0 transition-all" />
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="ml-4 h-6 w-px bg-slate-200" />

            <Link to="/appointments" className="ml-6">
              <Button size="md" className="gap-2">
                <Calendar size={18} /> Book Online
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-slate-600 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={cn(
          "lg:hidden fixed inset-x-0 bottom-0 top-[72px] bg-brand-white transform transition-transform duration-300 z-50 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-slate-50 last:border-none">
                {link.subLinks ? (
                  <div className="py-4">
                    <button
                      className="flex items-center justify-between w-full text-lg font-black text-brand-primary"
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    >
                      {link.name} <ChevronDown size={20} className={cn("transition-transform", activeDropdown === link.name && "rotate-180")} />
                    </button>
                    <div className={cn(
                      "mt-4 flex flex-col gap-3 pl-4 border-l-2 border-brand-accent overflow-hidden transition-all duration-300",
                      activeDropdown === link.name ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {link.subLinks.map(sub => (
                        sub.external ? (
                          <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-slate-600 py-1">
                            {sub.name}
                          </a>
                        ) : (
                          <Link key={sub.name} to={sub.path} className="text-base font-bold text-slate-600 py-1">
                            {sub.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={link.path} className="block py-4 text-lg font-black text-brand-primary">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/appointments" className="mt-8">
              <Button size="lg" className="w-full h-16 rounded-2xl">Book Appointment</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
