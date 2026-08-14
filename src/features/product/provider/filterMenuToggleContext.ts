"use client"

import { createContext, createElement, ReactNode, useContext, useState } from "react"

type FilterToggleContextType = {
  isOpen: boolean
  openFilter: () => void
  closeFilter: () => void
  toggleFilter: () => void
}

const FilterToggleContext = createContext<FilterToggleContextType>({
  isOpen: false,
  openFilter: () => {},
  closeFilter: () => {},
  toggleFilter: () => {},
})

export const FilterToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openFilter = () => setIsOpen(true)
  const closeFilter = () => setIsOpen(false)
  const toggleFilter = () => setIsOpen((prev) => !prev)

  return createElement(
    FilterToggleContext.Provider,
    { value: { isOpen, openFilter, closeFilter, toggleFilter } },
    children,
  )
}

export const useFilterToggle = () => useContext(FilterToggleContext)