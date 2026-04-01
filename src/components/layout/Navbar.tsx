import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { clinicInfo } from '../../data/content';
import { services } from '../../data/services';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setIsOpen(false); setActiveDropdown(null); }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about', subLinks: [
      { name: 'Our Physicians', path: '/about/physicians' },
      { name: 'Testimonials', path: '/about/testimonials' },
    ]},
    { name: 'Patient Access', path: '/patient-access', subLinks: [
      { name: 'Televisit', path: '/patient-access/televisit' },
      { name: 'Patient Portal', path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', external: true },
      { name: 'Pay Your Bill', path: '/patient-access/bill-pay' },
      { name: 'Insurance', path: '/patient-access/insurance' },
    ]},
    { name: 'Services', path: '/services', subLinks: services.map(s => ({ name: s.title, path: `/services/${s.id}` })) },
    { name: 'Locations', path: '/locations/frisco' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Slim announcement bar */}
      <div className="bg-brand-secondary text-white text-center py-2 text-xs font-medium tracking-wide">
        Now Accepting New Patients — <a href={`tel:${clinicInfo.contact.phone}`} className="underline underline-offset-2 hover:no-underline">{clinicInfo.contact.phone}</a>
      </div>

      {/* Main nav — white with bottom border */}
      <nav className={cn(
        "bg-white transition-all duration-300",
        isScrolled ? "shadow-sm" : "border-b border-slate-200"
      )}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">

            {/* Logo only */}
            <Link to="/" className="shrink-0">
              <img src="/images/promed-logo.png" alt="ProMed Health" className="h-14 w-auto object-contain" />
            </Link>

            {/* Desktop — underline style nav */}
            <div className="hidden lg:flex items-center gap-0">
              {navLinks.map(link => (
                <div key={link.name} className="relative"
                  onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.subLinks ? (
                    <button className={cn(
                      "flex items-center gap-1 px-4 h-16 text-sm font-medium border-b-2 transition-all",
                      activeDropdown === link.name
                        ? "border-brand-secondary text-brand-secondary"
                        : "border-transparent text-slate-500 hover:text-brand-primary hover:border-slate-300"
                    )}>
                      {link.name} <ChevronDown size={13} className={cn("transition-transform", activeDropdown === link.name && "rotate-180")} />
                    </button>
                  ) : (
                    <NavLink to={link.path} className={({ isActive }) => cn(
                      "flex items-center px-4 h-16 text-sm font-medium border-b-2 transition-all",
                      isActive ? "border-brand-secondary text-brand-secondary" : "border-transparent text-slate-500 hover:text-brand-primary hover:border-slate-300"
                    )}>
                      {link.name}
                    </NavLink>
                  )}

                  {link.subLinks && (
                    <div className={cn(
                      "absolute top-full left-0 mt-0 bg-white border border-slate-100 shadow-lg py-2 z-50 transition-all duration-150",
                      link.name === 'Services' ? "w-[460px] grid grid-cols-2 gap-0 p-3" : "w-52",
                      activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    )}>
                      {link.subLinks.map(sub =>
                        (sub as any).external ? (
                          <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm text-slate-600 hover:text-brand-secondary hover:bg-brand-accent transition-colors">
                            {sub.name}
                          </a>
                        ) : (
                          <Link key={sub.name} to={sub.path}
                            className="block px-4 py-2.5 text-sm text-slate-600 hover:text-brand-secondary hover:bg-brand-accent transition-colors">
                            {sub.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA — text link + filled button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={`tel:${clinicInfo.contact.phone}`} className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-primary transition-colors">
                <Phone size={13} /> {clinicInfo.contact.phone}
              </a>
              <Link to="/appointments"
                className="bg-brand-primary hover:bg-brand-secondary text-white text-sm font-medium px-5 py-2.5 transition-colors rounded-md">
                Book Appointment
              </Link>
            </div>

            <button className="lg:hidden p-2 text-slate-500" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className={cn(
          "lg:hidden fixed inset-x-0 top-[88px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-100 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-5 space-y-0.5">
            {navLinks.map(link => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-brand-primary hover:bg-brand-accent transition-colors"
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    >
                      {link.name} <ChevronDown size={14} className={cn("transition-transform", activeDropdown === link.name && "rotate-180")} />
                    </button>
                    <div className={cn(
                      "ml-4 overflow-hidden transition-all duration-300",
                      activeDropdown === link.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {link.subLinks.map(sub =>
                        (sub as any).external ? (
                          <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm text-slate-500 hover:text-brand-secondary transition-colors border-l-2 border-slate-100">
                            {sub.name}
                          </a>
                        ) : (
                          <Link key={sub.name} to={sub.path}
                            className="block px-4 py-2.5 text-sm text-slate-500 hover:text-brand-secondary transition-colors border-l-2 border-slate-100">
                            {sub.name}
                          </Link>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <Link to={link.path} className="block px-4 py-3 text-sm font-medium text-brand-primary hover:bg-brand-accent transition-colors">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link to="/appointments" className="block w-full text-center bg-brand-primary text-white text-sm font-medium py-3 transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
