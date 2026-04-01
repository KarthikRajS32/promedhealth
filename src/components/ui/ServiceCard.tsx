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
        "group relative p-8 bg-brand-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2",
        className
      )}
    >
      <div className="flex flex-col h-full space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-accent flex items-center justify-center text-brand-secondary transition-all duration-500 group-hover:bg-brand-primary group-hover:text-brand-white group-hover:rotate-6">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-brand-primary tracking-tight md:text-3xl leading-tight transition-colors group-hover:text-brand-secondary">
            {service.title}
          </h3>
          
          <p className="text-[15px] font-medium text-slate-600 leading-relaxed max-w-sm">
            {service.shortDescription}
          </p>
        </div>

        <div className="mt-auto pt-6 flex items-center gap-3 text-brand-primary font-black text-sm uppercase tracking-widest transition-all group-hover:gap-5">
          <span>Read More</span>
          <ArrowRight size={18} className="transition-transform" />
        </div>
      </div>
      
      {/* Subtle border bottom line */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-brand-secondary rounded-full transition-all duration-500 w-0 group-hover:w-full opacity-30" />
    </Link>
  );
}
