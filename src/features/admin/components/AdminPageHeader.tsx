import cn from "@/lib/cn"
import { ReactNode } from "react"

const AdminPageHeader = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={cn("flex flex-col md:flex-row gap-8 justify-between md:items-end p-4", className)}>{children}</div>
    )
}

function Content({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>{children}</div>
    )
}

function Meta({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn("uppercase text-[9px] text-primary font-medium mb-2 tracking-[0.22em]", className)}>{children}</p>
    )
}

function Title({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <h1 className={cn("text-5xl font-semibold font-serif italic tracking-tight", className)}>{children}</h1>
    )
}

function Description({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
    )
}

function Actions({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={cn("flex items-end space-x-2", className)}>{children}</div>
    )
}

AdminPageHeader.Meta = Meta
AdminPageHeader.Content = Content
AdminPageHeader.Title = Title
AdminPageHeader.Description = Description
AdminPageHeader.Actions = Actions

export default AdminPageHeader