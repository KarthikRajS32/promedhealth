import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { type ServiceDetail } from '../../data/services';
import { cn } from '../../lib/utils';

export function ServiceCard({ service, className }: { service: ServiceDetail; className?: string }) {
  const Icon = service.icon;
  return (
    <Link to={`/services/${service.id}`}
      className={cn(
        "group flex gap-4 p-5 bg-warm border border-border rounded-2xl hover:border-s/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300",
        className
      )}>
      <div className="w-10 h-10 rounded-xl bg-a flex items-center justify-center text-s group-hover:bg-s group-hover:text-white transition-all shrink-0">
        <Icon size={18} strokeWidth={1.8} />
      </div>
      <div className="flex-1 min-w-0 space-y-1">
        <p className="text-sm font-semibold text-p group-hover:text-s transition-colors">{service.title}</p>
        <p className="text-xs text-muted leading-relaxed line-clamp-2">{service.shortDescription}</p>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-s mt-1">
          Learn more <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
