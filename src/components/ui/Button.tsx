import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "pill";
  size?: "sm" | "md" | "lg" | "xl";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-brand-secondary text-white hover:bg-[#267a7a] shadow-sm hover:-translate-y-0.5 active:translate-y-0",
      secondary: "bg-brand-primary text-white hover:bg-[#142e3b] shadow-sm hover:-translate-y-0.5 active:translate-y-0",
      outline: "border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white hover:-translate-y-0.5 active:translate-y-0",
      ghost: "text-brand-primary hover:bg-brand-accent",
      dark: "bg-brand-primary text-white hover:bg-[#142e3b] shadow-sm hover:-translate-y-0.5 active:translate-y-0",
      pill: "bg-white text-brand-primary border border-slate-200 hover:border-brand-secondary hover:text-brand-secondary shadow-sm hover:-translate-y-0.5 active:translate-y-0",
    };

    const sizes = {
      sm:  "h-9  px-5  text-xs  font-medium rounded-md",
      md:  "h-11 px-6  text-sm  font-medium rounded-md",
      lg:  "h-12 px-8  text-sm  font-medium rounded-md",
      xl:  "h-14 px-10 text-base font-medium rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary/40 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
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
