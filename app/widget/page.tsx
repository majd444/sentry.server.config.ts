"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL

type Agent = {
  id: string
  name: string
  welcomeMessage: string
  systemPrompt: string
  temperature: number
  headerColor?: string
  accentColor?: string
  backgroundColor?: string
  profileImage?: string
}

export default function WidgetPage() {
  const search = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const rawBotId = (search?.get('botId') || search?.get('agentId') || '').trim()
  const botId = rawBotId
  const isValidConvexId = (s: string) => /^[a-z0-9]{32}$/.test(s)
  const debug = search?.get('debug') === '1'

  const [agent, setAgent] = useState<Agent | null>(null)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [messages, setMessages] = useState<Array<{ role: 'user'|'assistant'; content: string }>>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const initialized = useRef(false)
  const [initError, setInitError] = useState<string | null>(null)
  const cacheKey = botId ? `widget:${botId}` : ''

  const theme = useMemo(() => ({
    header: agent?.headerColor || '#3B82F6',
    accent: agent?.accentColor || '#00D4FF',
    background: agent?.backgroundColor || '#FFFFFF',
  }), [agent])

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    if (!botId) return
    if (!isValidConvexId(botId)) {
      const msg = 'Invalid botId format. Expected a 32-char lowercase id.'
      console.error(msg, { botId })
      setInitError(msg)
      return
    }
    if (!CONVEX_URL) {
      const msg = 'NEXT_PUBLIC_CONVEX_URL not set'
      console.error(msg)
      setInitError(msg)
      return
    }

    // 1) Try cache first for instant render
    try {
      if (cacheKey && typeof window !== 'undefined') {
        const cached = sessionStorage.getItem(cacheKey)
        if (cached) {
          const parsed = JSON.parse(cached) as { sessionId: string; agent: Agent; ts: number; messages?: Array<{ role: 'user'|'assistant'; content: string }> }
          if (parsed?.agent && parsed?.sessionId) {
            setAgent(parsed.agent)
            setSessionId(parsed.sessionId)
            if (parsed.messages && parsed.messages.length) {
              setMessages(parsed.messages)
            } else if (parsed.agent.welcomeMessage) {
              setMessages([{ role: 'assistant', content: parsed.agent.welcomeMessage }])
            }
            // Preload avatar for instant display
            if (parsed.agent.profileImage) {
              const img = new Image()
              img.src = parsed.agent.profileImage
            }
          }
        }
      }
    } catch {}

    // 2) Always refresh from network in background
    async function init() {
      try {
        const res = await fetch(`${CONVEX_URL}/http/chat/widget/session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ agentId: botId })
        })

        let data: unknown = null
        try {
          data = await res.json()
        } catch {
          data = null
        }

        const okShape = (
          typeof data === 'object' && data !== null &&
          'sessionId' in data && 'agent' in data &&
          typeof (data as any).sessionId === 'string' && typeof (data as any).agent === 'object'
        )

        if (res.ok && okShape) {
          const d = data as { sessionId: string; agent: Agent }
          setSessionId(d.sessionId)
          setAgent(d.agent)
          if (d.agent?.welcomeMessage) {
            setMessages([{ role: 'assistant', content: d.agent.welcomeMessage }])
          }
          // Persist fresh data to cache
          if (cacheKey && typeof window !== 'undefined') {
            try {
              sessionStorage.setItem(cacheKey, JSON.stringify({ sessionId: d.sessionId, agent: d.agent, ts: Date.now() }))
            } catch {}
          }
          // Preload avatar
          if (d.agent.profileImage) {
            const img = new Image()
            img.src = d.agent.profileImage
          }
        } else {
          const errText = (typeof data === 'object' && data !== null && 'error' in data && typeof (data as any).error === 'string') ? (data as any).error : (res.statusText || 'Unknown error')
          const msg = `Init error ${res.status}: ${errText}`
          console.error(msg)
          setInitError(msg)
        }
      } catch (e) {
        const msg = 'Failed to init widget'
        console.error(msg, e)
        setInitError(msg)
      }
    }

    init()
  }, [botId, cacheKey])

  async function sendMessage() {
    if (!input.trim() || !sessionId || !agent || !CONVEX_URL) return
    const userMsg = input.trim()
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${CONVEX_URL}/http/chat/widget/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          agentId: agent.id,
          message: userMsg,
          history: messages.map(m => ({ role: m.role, content: m.content }))
        })
      })
      const data = await res.json()
      if (res.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong.' }])
        console.error('Chat error', data)
      }
    } catch (e) {
      console.error('Chat request failed', e)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Network error.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleClose() {
    if (typeof window !== 'undefined' && window.parent) {
      window.parent.postMessage('widget:close', '*')
    }
  }

  const ready = Boolean(agent)

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      background: ready ? theme.background : 'transparent',
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
      color: '#111827'
    }}>
      {initError && (
        <div style={{ background: '#FEF2F2', color: '#991B1B', padding: '8px 12px', borderBottom: '1px solid #FEE2E2' }}>
          {initError}
        </div>
      )}

      {!ready && !initError && (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontSize: 14, color: '#6B7280' }}>Loading…</div>
        </div>
      )}

      {ready && (
        <>
          {/* Header */}
          <div style={{
            background: theme.header,
            color: '#fff',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {agent?.profileImage ? (
                <img
                  src={agent.profileImage}
                  alt={agent.name || 'Agent avatar'}
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 14,
                    objectFit: 'cover',
                    display: 'block',
                    border: '1px solid rgba(0,0,0,0.06)'
                  }}
                />
              ) : (
                <div style={{
                  height: 28, width: 28, borderRadius: 14,
                  background: theme.accent,
                  color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700
                }}>AI</div>
              )}
              <div style={{ lineHeight: 1 }}>
                <div style={{ fontWeight: 600 }}>{agent?.name}</div>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Online</div>
              </div>
            </div>
            <button onClick={handleClose} aria-label="Close" style={{
              background: 'transparent', color: '#fff', border: '0', cursor: 'pointer', fontSize: 18
            }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', marginBottom: 8, justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '8px 12px',
                  borderRadius: 12,
                  background: m.role === 'user' ? theme.accent : '#F3F4F6',
                  color: m.role === 'user' ? '#000' : '#111827',
                  whiteSpace: 'pre-wrap'
                }}>
                  {m.content}
                </div>
              </div>
            ))}

            {debug && (
              <pre style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: 12, fontSize: 12, color: '#111827' }}>
                {JSON.stringify({ botId, agent, sessionId, CONVEX_URL }, null, 2)}
              </pre>
            )}
          </div>

          {/* Input */}
          <div style={{ display: 'flex', gap: 8, padding: 12, borderTop: '1px solid #E5E7EB' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
              placeholder={loading ? 'Waiting for response...' : 'Type your message'}
              disabled={loading}
              style={{ flex: 1, border: '1px solid #D1D5DB', borderRadius: 10, padding: '10px 12px', outline: 'none' }}
            />
            <button onClick={sendMessage} disabled={loading || !input.trim()} style={{
              background: theme.header,
              color: '#fff', border: 0, padding: '10px 14px', borderRadius: 10, cursor: 'pointer'
            }}>
              Send
            </button>
          </div>
        </>
      )}
    </div>
  )
}
