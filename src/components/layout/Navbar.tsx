import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar, ArrowUpRight } from 'lucide-react';
import { clinicInfo } from '../../data/content';
import { services } from '../../data/services';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

import logo from '../../assets/promed-logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { 
    setIsOpen(false); 
    setActiveDropdown(null); 
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services', path: '/services',
      subLinks: services.slice(0, 8).map(s => ({ name: s.title, path: `/services/${s.id}` })),
    },
    {
      name: 'Patients', path: '/patient-access',
      subLinks: [
        { name: 'Patient Portal', path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', external: true },
        { name: 'Televisit', path: '/patient-access/televisit' },
        { name: 'Pay Your Bill', path: '/patient-access/bill-pay' },
        { name: 'Insurance', path: '/patient-access/insurance' },
      ],
    },
    {
      name: 'Practice', path: '/about',
      subLinks: [
        { name: 'Our Physicians', path: '/about/physicians' },
        { name: 'Locations', path: '/locations/frisco' },
        { name: 'Testimonials', path: '/about/testimonials' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 pointer-events-none">
      <header className={cn(
        "max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 pointer-events-auto",
        isScrolled 
          ? "glass-card py-3 px-6 shadow-2xl shadow-brand-primary/5 translate-y-2" 
          : "bg-white py-4 px-8 border border-slate-100 shadow-sm"
      )}>
        <nav className="flex items-center justify-between gap-8">
          {/* Logo Section */}
          <Link to="/" className="shrink-0 flex items-center gap-3">
            <img src={logo} alt="ProMed Health" className="h-10 w-auto" />
            <span className="hidden sm:inline font-heading font-extrabold text-xl tracking-tight text-brand-primary">ProMed<span className="text-brand-accent">.</span></span>
          </Link>

          {/* Core Navigation Slots */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-50/50 p-1 rounded-2xl">
            {navLinks.map(link => (
              <div key={link.name} className="relative group"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.subLinks ? (
                  <button className={cn(
                    "flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300",
                    activeDropdown === link.name 
                      ? "bg-white text-brand-accent shadow-sm" 
                      : "text-slate-500 hover:text-brand-primary"
                  )}>
                    {link.name} <ChevronDown size={14} className={cn("transition-transform duration-300 opacity-60", activeDropdown === link.name && "rotate-180 opacity-100")} />
                  </button>
                ) : (
                  <NavLink to={link.path} className={({ isActive }) => cn(
                    "px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 block",
                    isActive 
                      ? "bg-white text-brand-accent shadow-sm" 
                      : "text-slate-500 hover:text-brand-primary"
                  )}>
                    {link.name}
                  </NavLink>
                )}

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-2 pt-2 transition-all duration-300 z-50",
                    activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 pointer-events-none"
                  )}>
                    <div className={cn(
                      "bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-3 overflow-hidden",
                      link.name === 'Services' ? "w-[600px] grid grid-cols-2 gap-2" : "w-64 flex flex-col gap-1"
                    )}>
                      {link.subLinks.map(sub =>
                        (sub as any).external ? (
                          <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 text-sm font-bold text-slate-600 hover:text-brand-accent hover:bg-brand-accent/5 rounded-xl transition-all group/item">
                            {sub.name} <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity translate-x-2 group-hover/item:translate-x-0 transition-transform" />
                          </a>
                        ) : (
                          <Link key={sub.name} to={sub.path}
                            className="flex items-center justify-between p-3 text-sm font-bold text-slate-600 hover:text-brand-accent hover:bg-brand-accent/5 rounded-xl transition-all group/item">
                            {sub.name} <ArrowUpRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity translate-x-2 group-hover/item:translate-x-0 transition-transform" />
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <a href={`tel:${clinicInfo.contact.phone}`} className="hidden xl:flex flex-col items-end">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted leading-none mb-1">Emergency Help</span>
              <span className="text-sm font-black text-brand-primary tracking-tight transition-colors hover:text-brand-accent">{clinicInfo.contact.phone}</span>
            </a>
            <Link to="/appointments">
              <Button variant="dark" size="md" className="hidden md:flex gap-2 group">
                <Calendar size={16} className="transition-transform group-hover:rotate-12" /> Book Online
              </Button>
            </Link>
            <button 
              className="lg:hidden w-11 h-11 flex items-center justify-center bg-slate-50 text-brand-primary rounded-xl transition-colors hover:bg-slate-100" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu - Modern Slide-Down overlay */}
        <div className={cn(
          "lg:hidden absolute inset-x-0 top-full mt-4 mx-4 glass-card rounded-[2rem] shadow-2xl p-6 transition-all duration-500 origin-top overflow-y-auto max-h-[80vh]",
          isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"
        )}>
          <div className="space-y-6">
            {navLinks.map(link => (
              <div key={link.name}>
                {link.subLinks ? (
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted px-4">{link.name}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {link.subLinks.map(sub => (
                        (sub as any).external ? (
                          <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer"
                            className="p-4 text-xs font-bold text-brand-primary bg-slate-50 border border-slate-100 rounded-2xl hover:bg-brand-accent hover:text-white transition-all">
                            {sub.name}
                          </a>
                        ) : (
                          <Link key={sub.name} to={sub.path}
                            className="p-4 text-xs font-bold text-brand-primary bg-slate-50 border border-slate-100 rounded-2xl hover:bg-brand-accent hover:text-white transition-all">
                            {sub.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={link.path} className="block p-4 text-sm font-black text-brand-primary bg-slate-50 border border-slate-100 rounded-2xl hover:bg-brand-accent hover:text-white transition-all">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/appointments" className="block">
              <Button size="lg" className="w-full h-16 rounded-[1.5rem] text-lg"><Calendar size={20} className="mr-2" /> Book Online Now</Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
