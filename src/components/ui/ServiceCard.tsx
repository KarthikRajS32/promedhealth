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
        "group flex flex-col gap-5 p-7 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-brand-secondary/30 hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all duration-300">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <div className="space-y-2 flex-1">
        <h3 className="text-base font-bold text-brand-primary group-hover:text-brand-secondary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>
      <div className="flex items-center gap-2 text-brand-secondary text-sm font-semibold">
        Learn more <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
