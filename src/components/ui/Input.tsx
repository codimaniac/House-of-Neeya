import cn from "@/lib/cn";
import React from "react";

type InputVariant = "primary" | "secondary";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
  label?: string;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "primary", label, error, id, className, ...props }, ref) => {
    const variants: Record<InputVariant, string> = {
      primary:
        "border-foreground/20 bg-white text-foreground focus:border-primary",
      secondary: "border-primary bg-background/10 text-background",
    };
    return (
      <div className="flex-1">
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "text-[11px] tracking-widest uppercase text-foreground block mb-1.5",
              error && "text-red-600",
            )}
          >
            {label}
          </label>
        )}

        <input
          id={id}
          ref={ref}
          className={cn(
            "font-san text-sm border rounded-xs py-3 px-4 min-w-50 w-full outline-none transition-colors",
            variants[variant],
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
