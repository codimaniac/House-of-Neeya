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
    secondary: "border border-foreground/30 hover:bg-foreground hover:text-background",
  }
  const sizes: Record<ButtonSize, string> = {
    sm: "py-2 px-4",
    md: "py-3 px-6",
    lg: "py-5 px-10",
  }

  return (
    <button className={cn("inline-flex justify-center items-center gap-2 font-sans tracking-[0.2em] uppercase rounded-xs cursor-pointer text-[9px] md:text-[11px] lg:text-[14px]", variants[variant], sizes[size], className)} {...props}>{children}</button>
  )
}

export default Button