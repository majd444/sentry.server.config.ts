"use client"

import * as React from "react"

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className = "", ...props }, ref) {
    return (
      <textarea ref={ref} {...props} className={"w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-black " + className} />
    )
  }
)
