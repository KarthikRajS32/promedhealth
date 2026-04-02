import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SectionBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { name: string; path: string }[];
  className?: string;
}

export function SectionBanner({ title, subtitle, breadcrumbs, className }: SectionBannerProps) {
  return (
    <section className={cn("pt-[68px] bg-warm border-b border-border", className)}>
      <div className="wrap py-12">
        <nav className="flex items-center gap-1.5 text-xs text-muted mb-5 rv-fade">
          <Link to="/" className="hover:text-s transition-colors">Home</Link>
          {breadcrumbs.map((c, i) => (
            <div key={c.path} className="flex items-center gap-1.5">
              <ChevronRight size={11} className="text-border" />
              {i === breadcrumbs.length - 1
                ? <span className="text-p font-medium">{c.name}</span>
                : <Link to={c.path} className="hover:text-s transition-colors">{c.name}</Link>}
            </div>
          ))}
        </nav>
        <div className="max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-4xl rv-left">{title}</h1>
          {subtitle && <p className="text-sm text-muted leading-relaxed rv-up d1">{subtitle}</p>}
          <div className="w-10 h-0.5 bg-s rounded-full rv-pop d2" />
        </div>
      </div>
    </section>
  );
}
