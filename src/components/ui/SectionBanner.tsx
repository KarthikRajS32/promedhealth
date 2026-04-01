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
    <section className={cn("pt-[88px] bg-brand-warm border-b border-slate-200", className)}>
      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
          <Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <div key={crumb.path} className="flex items-center gap-1.5">
              <ChevronRight size={11} />
              {i === breadcrumbs.length - 1 ? (
                <span className="text-brand-primary font-medium">{crumb.name}</span>
              ) : (
                <Link to={crumb.path} className="hover:text-brand-secondary transition-colors">{crumb.name}</Link>
              )}
            </div>
          ))}
        </nav>

        <div className="max-w-2xl space-y-3 animate-slide-left">
          <h1 className="text-3xl sm:text-4xl text-brand-primary">{title}</h1>
          {subtitle && <p className="text-sm text-slate-500 leading-relaxed">{subtitle}</p>}
          <div className="w-10 h-0.5 bg-brand-secondary" />
        </div>
      </div>
    </section>
  );
}
