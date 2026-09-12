import { ReactNode } from "react"

const AdminPageContent = ({children}: {children: ReactNode}) => {
  return (
      <div className="flex flex-1 flex-col gap-4 p-8">
        {children}
      </div>
  )
}

export default AdminPageContent