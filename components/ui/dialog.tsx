"use client"

import * as React from "react"

export const Dialog: React.FC<{ children: React.ReactNode }> = ({ children }) => <div>{children}</div>
export const DialogContent: React.FC<{ children: React.ReactNode; className?: string }>= ({ children, className }) => (
  <div className={"fixed inset-0 grid place-items-center bg-black/20 " + (className ?? "")}>
    <div className="bg-white p-4 rounded-md max-w-lg w-full">{children}</div>
  </div>
)
export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="mb-2">{children}</div>
export const DialogTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="font-bold">{children}</h3>
export const DialogDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => <p>{children}</p>
