import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar, Phone } from 'lucide-react';
import { clinicInfo } from '../../data/content';
import { services } from '../../data/services';
import { cn } from '../../lib/utils';
import { promedLogo } from '../../assets';

export function Navbar() {
  const [open, setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dd, setDd]         = useState<string | null>(null);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => { setOpen(false); setDd(null); }, [loc]);

  const isHome = loc.pathname === '/';

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about', sub: [
      { name: 'Our Physicians', path: '/about/physicians' },
      { name: 'Testimonials',   path: '/about/testimonials' },
    ]},
    { name: 'Patient Access', path: '/patient-access', sub: [
      { name: 'Televisit',     path: '/patient-access/televisit' },
      { name: 'Patient Portal',path: 'https://mycw238.ecwcloud.com/portal27958/jsp/100mp/login_otp.jsp', ext: true },
      { name: 'Pay Your Bill', path: 'https://www.healowpay.com/HealowPay/jsp/healow/login.jsp', ext: true },
      { name: 'Insurance',     path: '/patient-access/insurance' },
    ]},
    { name: 'Services', path: '/services',
      sub: services.map(s => ({ name: s.title, path: `/services/${s.id}` })) },
    { name: 'Locations', path: '/locations/frisco' },
    { name: 'Contact',   path: '/contact' },
  ];

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-slate-200/50 border-b border-border'
    : isHome
      ? 'bg-transparent'
      : 'bg-white border-b border-border';

  const textColor = (active: boolean) =>
    scrolled || !isHome
      ? active ? 'text-s' : 'text-muted hover:text-ink'
      : active ? 'text-s' : 'text-white/80 hover:text-white';

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className={cn("transition-all duration-400", navBg)}>
        <div className="wrap flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={promedLogo} alt="ProMed Health"
              className={cn("h-14 w-auto object-contain transition-all", !scrolled && isHome ? "brightness-0 invert" : "")} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <div key={link.name} className="relative"
                onMouseEnter={() => link.sub && setDd(link.name)}
                onMouseLeave={() => setDd(null)}>
                {link.sub ? (
                  <button className={cn("flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors", textColor(dd === link.name))}>
                    {link.name}
                    <ChevronDown size={13} className={cn("transition-transform", dd === link.name && "rotate-180")} />
                  </button>
                ) : (
                  <NavLink to={link.path} className={({ isActive }) =>
                    cn("block px-3.5 py-2 text-sm font-medium rounded-lg transition-colors", textColor(isActive))}>
                    {link.name}
                  </NavLink>
                )}

                {link.sub && (
                  <div className={cn(
                    "absolute top-full left-0 pt-3 z-50",
                    link.name === 'Services' ? "w-[460px]" : "w-52",
                    dd === link.name ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                  )}>
                    <div className={cn(
                      "bg-white rounded-2xl shadow-xl border border-border py-1.5 transition-all duration-200",
                      link.name === 'Services' ? "grid grid-cols-2 gap-0 p-2" : "",
                      dd === link.name ? "translate-y-0" : "-translate-y-2"
                    )}>
                    {link.sub.map(sub =>
                      (sub as any).ext ? (
                        <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer"
                          className="block px-3.5 py-2.5 text-sm text-muted hover:text-s hover:bg-a rounded-xl transition-colors">
                          {sub.name}
                        </a>
                      ) : (
                        <Link key={sub.name} to={sub.path}
                          className="block px-3.5 py-2.5 text-sm text-muted hover:text-s hover:bg-a rounded-xl transition-colors">
                          {sub.name}
                        </Link>
                      )
                    )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${clinicInfo.contact.phone}`}
              className={cn("text-sm font-medium transition-colors flex items-center gap-1.5", !scrolled && isHome ? "text-white/70 hover:text-white" : "text-muted hover:text-ink")}>
              <Phone size={13} /> {clinicInfo.contact.phone}
            </a>
            <Link to="/appointments"
              className="inline-flex items-center gap-1.5 bg-s hover:bg-[#157a6a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-px shadow-sm">
              <Calendar size={13} /> Book Now
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            {open
              ? <X size={22} className={!scrolled && isHome ? "text-white" : "text-ink"} />
              : <Menu size={22} className={!scrolled && isHome ? "text-white" : "text-ink"} />}
          </button>
        </div>

        {/* Mobile */}
        <div className={cn(
          "lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-white z-50 overflow-y-auto transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-5 space-y-1">
            {links.map(link => (
              <div key={link.name}>
                {link.sub ? (
                  <>
                    <button onClick={() => setDd(dd === link.name ? null : link.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-p rounded-xl hover:bg-a transition-colors">
                      {link.name}
                      <ChevronDown size={14} className={cn("transition-transform", dd === link.name && "rotate-180")} />
                    </button>
                    <div className={cn("ml-3 overflow-hidden transition-all duration-300",
                      dd === link.name ? "max-h-[500px] opacity-100 mt-1" : "max-h-0 opacity-0")}>
                      {link.sub.map(sub =>
                        (sub as any).ext ? (
                          <a key={sub.name} href={sub.path} target="_blank" rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm text-muted hover:text-s border-l-2 border-border hover:bg-a rounded-r-xl transition-colors">
                            {sub.name}
                          </a>
                        ) : (
                          <Link key={sub.name} to={sub.path}
                            className="block px-4 py-2.5 text-sm text-muted hover:text-s border-l-2 border-border hover:bg-a rounded-r-xl transition-colors">
                            {sub.name}
                          </Link>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <Link to={link.path} className="block px-4 py-3 text-sm font-semibold text-p rounded-xl hover:bg-a transition-colors">
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link to="/appointments" className="flex items-center justify-center gap-2 w-full bg-s text-white text-sm font-semibold py-3 rounded-full">
                <Calendar size={14} /> Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
