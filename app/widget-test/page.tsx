"use client"

import React from "react"
import { useSearchParams } from "next/navigation"

export default function WidgetTestPage() {
  const search = useSearchParams()
  const [botId, setBotId] = React.useState<string>(
    (search?.get("botId") as string) || "j57bhry59qnwq197tbne32gk617pa37q"
  )
  const [mounted, setMounted] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const injectScript = React.useCallback(() => {
    try {
      setError(null)
      // Clean any previous instance
      const existing = document.getElementById("test-widget-script")
      if (existing) existing.remove()

      const s = document.createElement("script") as HTMLScriptElement
      s.id = "test-widget-script"
      s.src = `${window.location.origin}/widget.js`
      s.async = true
      s.dataset.botId = botId
      s.setAttribute("data-bot-id", botId)
      document.body.appendChild(s)
      setMounted(true)
    } catch (e: any) {
      setError(e?.message || "Failed to inject widget script")
    }
  }, [botId])

  const removeWidget = React.useCallback(() => {
    setError(null)
    setMounted(false)
    const script = document.getElementById("test-widget-script")
    if (script) script.remove()
    const iframe = document.getElementById("ycw-iframe")
    if (iframe) iframe.remove()
    const toggle = document.getElementById("ycw-toggle")
    if (toggle) toggle.remove()
  }, [])

  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-4">
      <h1 className="text-2xl font-bold">Widget Test Page</h1>
      <p className="text-sm">
        This page helps you test the embed script locally. It will inject:
      </p>
      <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
        {`<script src="${typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"}/widget.js" data-bot-id="${botId}"></script>`}
      </pre>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Bot ID</label>
        <input
          className="border rounded px-3 py-2 w-full max-w-lg"
          value={botId}
          onChange={(e) => setBotId(e.target.value)}
          placeholder="Your bot ID"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={injectScript}
          className="px-4 py-2 rounded bg-black text-white disabled:opacity-50"
          disabled={!botId}
        >
          {mounted ? "Re-inject" : "Inject Widget"}
        </button>
        <button
          onClick={removeWidget}
          className="px-4 py-2 rounded border"
        >
          Remove Widget
        </button>
      </div>

      {error && (
        <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-3 max-w-lg">
          {error}
        </div>
      )}

      <hr className="my-6" />
      <div className="text-sm space-y-2">
        <p>
          Alternatively, you can paste this directly into any HTML page to embed:
        </p>
        <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
          {`<script src="http://localhost:3000/widget.js" data-bot-id="${botId}"></script>`}
        </pre>
        <p>
          The widget renders a floating button on the bottom-right. Click it to open the chat iframe.
        </p>
      </div>
    </div>
  )
}
