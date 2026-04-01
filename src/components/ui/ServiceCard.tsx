import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { type ServiceDetail } from '../../data/services';
import { cn } from '../../lib/utils';

interface ServiceCardProps {
  service: ServiceDetail;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Link
      to={`/services/${service.id}`}
      className={cn(
        "group flex flex-col gap-4 p-6 bg-white border border-slate-100 hover:border-brand-secondary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div className="w-10 h-10 bg-brand-accent flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div className="space-y-1.5 flex-1">
        <h3 className="text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors font-sans">
          {service.title}
        </h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>
      <div className="flex items-center gap-1.5 text-brand-secondary text-xs font-medium">
        Learn more <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </Link>
  );
}
