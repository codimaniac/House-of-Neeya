import cn from "@/lib/cn";
import React from "react"

type ButtonVariant = "primary" | "secondary"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({children, className, variant = "primary", size = "md", ...props}) => {
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-foreground text-background hover:bg-primary-dark",
    secondary: "border border-foreground/30",
  }
  const sizes: Record<ButtonSize, string> = {
    sm: "py-2 px-4.5 text-[9px]",
    md: "py-3.5 px-8 text-[11px]",
    lg: "py-5 px-11.5 text-[14px]",
  }

  return (
    <button className={cn("inline-flex justify-center items-center gap-2 font-sans tracking-[0.2em] uppercase rounded-xs cursor-pointer", variants[variant], sizes[size], className)} {...props}>{children}</button>
  )
}

export default Button