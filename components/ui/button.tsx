"use client"

import * as React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: string
  size?: string
}

export const Button: React.FC<ButtonProps> = ({ className = "", variant, size, ...props }) => {
  return (
    <button
      {...props}
      className={"inline-flex items-center justify-center rounded-md px-3 py-2 border border-gray-300 bg-white text-black hover:bg-gray-100 " + className}
    />
  )
}
