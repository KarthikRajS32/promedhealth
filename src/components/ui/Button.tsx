import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "pill";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-brand-accent text-white hover:bg-[#0088B8] shadow-lg shadow-brand-accent/25 hover:-translate-y-0.5 active:translate-y-0",
      secondary: "bg-brand-secondary text-white hover:bg-[#0E9F6E] shadow-lg shadow-brand-secondary/20 hover:-translate-y-0.5 active:translate-y-0",
      outline: "border-2 border-brand-accent/30 text-brand-primary hover:border-brand-accent hover:bg-brand-accent/5 hover:-translate-y-0.5 active:translate-y-0",
      ghost: "text-brand-primary hover:bg-brand-accent/10",
      dark: "bg-brand-primary text-white hover:bg-black shadow-xl shadow-black/10 hover:-translate-y-0.5 active:translate-y-0",
      pill: "bg-white text-brand-primary border border-slate-200 hover:border-brand-accent hover:text-brand-accent shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    };
    
    const sizes = {
      sm: "h-10 px-6 text-xs font-bold uppercase tracking-wider rounded-2xl",
      md: "h-12 px-8 text-sm font-bold rounded-2xl",
      lg: "h-14 px-10 text-base font-bold rounded-[1.25rem]",
      xl: "h-16 px-12 text-lg font-extrabold rounded-3xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export { Button };
