"use client"

import * as React from "react"

export const Alert: React.FC<{ variant?: string; className?: string; children: React.ReactNode }>
= ({ className = "", children }) => (
  <div className={"border rounded-md p-3 " + className}>{children}</div>
)

export const AlertDescription: React.FC<{ className?: string; children: React.ReactNode }>
= ({ className = "", children }) => (
  <div className={className}>{children}</div>
)
