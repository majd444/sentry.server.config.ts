"use client"

import { toast as sonnerToast } from "sonner"

export type ToastOptions = { title?: string; description?: string; className?: string }

export function useToast() {
  return {
    toast: ({ title, description }: ToastOptions) => {
      const msg = [title, description].filter(Boolean).join(" – ") || ""
      sonnerToast(msg)
    },
  }
}
