"use client"

import * as React from "react"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className = "", ...props }, ref) {
    return (
      <input ref={ref} {...props} className={"w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-black " + className} />
    )
  }
)
