import cn from "@/lib/cn";
import React from "react"

type SelectInputVariant = "primary" | "secondary"
type SelectInputSize = "sm" | "md" | "lg"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    variant?: SelectInputVariant;
    selectSize?: SelectInputSize;
    label?: string;
    error?: string;
}

const Select: React.FC<SelectProps> = ({children, className, label, id, error, variant = "primary", selectSize = "md", ...props}) => {
  const variants: Record<SelectInputVariant, string> = {
    primary: "bg-white text-foreground border border-foreground/30",
    secondary: "border border-foreground/30",
  }
  const sizes: Record<SelectInputSize, string> = {
    sm: "py-2 px-2.5 text-[9px]",
    md: "py-3 px-4 text-sm",
    lg: "py-5 px-6.5 text-[14px]",
  }

  return (
    <div className="flex-1 max-w-60">
        {
            label && <label htmlFor={id} className={cn("text-[11px] tracking-widest uppercase text-foreground block mb-1.5", error && "text-red-600")}>
                {label}
            </label>
        }

        <select className={cn("font-sans rounded-xs cursor-pointer w-full", variants[variant], sizes[selectSize], className)} {...props}>{children}</select>
    </div>
  )
}

export default Select