"use client"

import * as React from "react"

type SwitchProps = { checked?: boolean; onCheckedChange?: (v: boolean) => void }

export const Switch: React.FC<SwitchProps> = ({ checked = false, onCheckedChange }) => (
  <label className="inline-flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className="h-4 w-8"
    />
  </label>
)
