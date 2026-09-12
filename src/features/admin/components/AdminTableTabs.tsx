import { ReactNode } from "react"

const AdminTableTabs = ({children}: {children: ReactNode}) => {
  return (
    <div className="flex flex-wrap gap-1 p-1 text-xs border-foreground/20 border rounded-md bg-background">
      {children}
    </div>
  )
}

export function Tab({children, active}: {children: ReactNode, active?: boolean}) {
  return (
    <div className={`px-4 py-2 ${active ? 'bg-foreground text-background' : 'bg-transparent'} hover:bg-foreground hover:text-background rounded-md cursor-pointer transition-all duration-200`}>
      {children}
    </div>
  )
}

export default AdminTableTabs