import type { ReactNode } from "react"

type SectionLayoutProps = {
    children: ReactNode
    className?: string
    
}

const SectionLayout = ({children, className}: SectionLayoutProps) => {
  return (
    <div className={`px-5 md:px-15 lg:px-25 ${className}`}>
        {children}
    </div>
  )
}

export default SectionLayout