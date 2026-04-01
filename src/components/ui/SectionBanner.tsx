import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SectionBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { name: string; path: string }[];
  className?: string;
}

export function SectionBanner({ title, subtitle, breadcrumbs, className }: SectionBannerProps) {
  return (
    <section className={cn(
      "relative pt-56 pb-24 bg-brand-primary overflow-hidden",
      className
    )}>
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-brand-secondary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-brand-accent/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-bold text-brand-accent/60">
            <Link to="/" className="hover:text-brand-white flex items-center gap-1 transition-colors">
              <Home size={14} /> Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.path} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-brand-white">{crumb.name}</span>
                ) : (
                  <Link to={crumb.path} className="hover:text-brand-white transition-colors">
                    {crumb.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <h1 className="text-2xl lg:text-4xl font-black text-brand-white tracking-tight leading-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="max-w-2xl text-lg lg:text-lg font-medium text-brand-accent/80 leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="w-20 h-1.5 bg-brand-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
}
