"use client"

import { Button } from '@/components'
import cn from '@/lib/cn'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

const SummaryTable = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("rounded-md bg-foreground/5 p-6", className)}>{children}</div>
  )
}

function Header({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("flex items-center justify-between", className)}>{ children }</div>
    )
}

function Title({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h2 className={cn("font-serif italic text-xl", className)}>{ children }</h2>
    )
}

function Action({ children, href, className }: { children: ReactNode, href: string, className?: string }) {
    const router = useRouter();

    return (
        <Button variant="link" className={cn("flex items-center gap-2 text-[10px] text-foreground/40 font-semibold tracking-[0.22em] w-fit normal-case", className)} onClick={() => router.push(href)}>{ children }</Button>
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