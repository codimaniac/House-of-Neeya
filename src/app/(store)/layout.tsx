import { ReactNode } from 'react'
import { FooterLayout, NavBar } from "@/components"

const StoreLayout = ({children}:{children: ReactNode}) => {
  return (
    <>
        <NavBar />
        {children}
        <FooterLayout />
    </>
  )
}

export default StoreLayout