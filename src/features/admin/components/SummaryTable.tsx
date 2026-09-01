import { Button } from '@/components'
import cn from '@/lib/cn'
import { ReactNode } from 'react'

const SummaryTable = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("flex-6 rounded-md bg-foreground/5 p-6", className)}>{children}</div>
  )
}

function Header({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn("flex items-center justify-between", className)}>{ children }</p>
    )
}

function Title({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn("font-serif italic text-xl", className)}>{ children }</p>
    )
}

function Action({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <Button variant="link" className={cn("flex items-center gap-2 text-[10px] text-foreground/40 font-semibold tracking-[0.22em] w-fit capitalize", className)}>{ children }</Button>
    )
}

function Content({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("flex min-h-50", className)}>{ children }</div>
    )
}

function Empty({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("flex flex-col items-center justify-center gap-2 w-full py-auto text-[10px] text-foreground/40 tracking-[0.22em] capitalize", className)}>{ children }</div>
    )
}

SummaryTable.Header = Header
SummaryTable.Title = Title
SummaryTable.Action = Action
SummaryTable.Content = Content
SummaryTable.Empty = Empty


export default SummaryTable