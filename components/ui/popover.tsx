"use client"

import * as React from "react"

type PopoverProps = {
  children: React.ReactNode
}
export const Popover: React.FC<PopoverProps> = ({ children }) => <div>{children}</div>
export const PopoverTrigger: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button {...props} type={props.onClick ? "button" : undefined} className="inline-flex items-center">{children}</button>
)
export const PopoverContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div {...props} className={"border rounded-md bg-white p-2 shadow " + className}>{children}</div>
)
