import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 space-y-4",
      centered ? "text-center mx-auto max-w-2xl" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-16 bg-medical-teal rounded-full",
        centered ? "mx-auto" : "mr-auto"
      )} />
    </div>
  );
}
