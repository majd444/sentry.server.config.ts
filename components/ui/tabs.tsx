"use client"

import * as React from "react"

type TabsContextType = { value?: string; onValueChange?: (v: string) => void }
const TabsCtx = React.createContext<TabsContextType>({})

export const Tabs: React.FC<{ value?: string; onValueChange?: (v: string) => void; className?: string; children: React.ReactNode }>
= ({ value, onValueChange, className = "", children }) => (
  <TabsCtx.Provider value={{ value, onValueChange }}>
    <div className={className}>{children}</div>
  </TabsCtx.Provider>
)

export const TabsList: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <div className={"flex gap-2 " + className}>{children}</div>
)

export const TabsTrigger: React.FC<{ value: string; className?: string; children: React.ReactNode }>
= ({ value, className = "", children }) => {
  const ctx = React.useContext(TabsCtx)
  const active = ctx.value === value
  return (
    <button onClick={() => ctx.onValueChange?.(value)} className={(active ? "border-b-2 border-black " : "") + className}>
      {children}
    </button>
  )
}

export const TabsContent: React.FC<{ value: string; className?: string; children: React.ReactNode }>
= ({ value, className = "", children }) => {
  const ctx = React.useContext(TabsCtx)
  if (ctx.value !== value) return null
  return <div className={className}>{children}</div>
}
