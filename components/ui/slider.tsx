"use client"

import * as React from "react"

type SliderProps = {
  value: number[]
  onValueChange?: (val: number[]) => void
  max?: number
  step?: number
}

export const Slider: React.FC<SliderProps> = ({ value, onValueChange, max = 100, step = 1 }) => {
  const [internal, setInternal] = React.useState(value?.[0] ?? 0)
  React.useEffect(() => { setInternal(value?.[0] ?? 0) }, [value?.[0]])
  return (
    <input
      type="range"
      value={internal}
      onChange={(e) => { const v = Number(e.target.value); setInternal(v); onValueChange?.([v]) }}
      min={0}
      max={max}
      step={step}
      className="w-full"
    />
  )
}
