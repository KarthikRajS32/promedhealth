import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const v = {
      primary:  "bg-s hover:bg-[#157a6a] text-white shadow-sm hover:-translate-y-px",
      secondary:"bg-p hover:bg-[#0a2a3a] text-white shadow-sm hover:-translate-y-px",
      outline:  "border border-s text-s hover:bg-s hover:text-white hover:-translate-y-px",
      ghost:    "text-p hover:bg-a",
      white:    "bg-white hover:bg-warm text-p shadow-sm hover:-translate-y-px",
    };
    const s = {
      sm: "h-9  px-4  text-xs  font-medium rounded-full gap-1.5",
      md: "h-10 px-5  text-sm  font-medium rounded-full gap-2",
      lg: "h-12 px-7  text-sm  font-semibold rounded-full gap-2",
    };
    return (
      <button ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-s/40 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]",
          v[variant], s[size], className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button };
