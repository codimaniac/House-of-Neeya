import cn from "@/lib/cn";
import React from "react"

type TextareaVariant = "primary" | "secondary"
type TextareaSize = "sm" | "md" | "lg"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    variant?: TextareaVariant;
    textareaSize?: TextareaSize;
    label?: string;
    error?: string;
}

const Textarea: React.FC<TextareaProps> = ({className, label, id, error, variant = "primary", textareaSize = "md", ...props}) => {
  const variants: Record<TextareaVariant, string> = {
    primary: "bg-white text-foreground border border-foreground/30",
    secondary: "border border-foreground/30",
  }
  const sizes: Record<TextareaSize, string> = {
    sm: "py-2 px-2.5 text-[9px]",
    md: "py-3 px-4 text-sm",
    lg: "py-5 px-6.5 text-[23px]",
  }

  return (
    <div className="flex-1">
        {
            label && <label htmlFor={id} className={cn("text-[11px] tracking-widest uppercase text-foreground block mb-1.5", error && "text-red-600")}>
                {label}
            </label>
        }

        <textarea className={cn("font-sans rounded-xs cursor-pointer w-full min-h-30", variants[variant], sizes[textareaSize], className)} {...props}/>
    </div>
  )
}

export default Textarea