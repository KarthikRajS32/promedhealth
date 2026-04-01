import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-brand-primary text-brand-white hover:bg-brand-secondary shadow-lg shadow-brand-primary/10",
      secondary: "bg-brand-secondary text-brand-white hover:bg-brand-primary shadow-lg shadow-brand-secondary/10",
      outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-white",
      ghost: "text-slate-600 hover:bg-slate-100",
      link: "text-brand-primary underline-offset-4 hover:underline p-0 h-auto",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm font-bold rounded-lg",
      md: "h-12 px-6 text-[15px] font-bold rounded-xl",
      lg: "h-16 px-10 text-lg font-black rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
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
