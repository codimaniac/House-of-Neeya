import cn from "@/lib/cn"
import { ReactNode } from "react"

const StatCard = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("flex flex-col md:aspect-video rounded-md bg-foreground/5 gap-2 p-6", className)}>{ children }</div>
  )
}

function Label({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn("uppercase text-[10px] text-foreground/40 font-semibold tracking-[0.22em]", className)}>{ children }</p>
    )
}

function Value({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn("font-serif font-semibold text-[clamp(24px,7vw,36px)]", className)}>{ children }</p>
    )    
}

function Progress({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn("flex items-center gap-2 text-xs font-light", className)}>{ children }</p>
    )    
}

StatCard.Label = Label
StatCard.Value = Value
StatCard.Progress = Progress

export default StatCard