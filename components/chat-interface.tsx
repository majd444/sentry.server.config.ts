"use client"

import React, { useState, useRef, useEffect } from "react";

interface ChatInterfaceProps {
  assistantName: string;
  profileImage?: string;
  welcomeMessage: string;
  headerColor?: string;
  accentColor?: string;
  onSendMessage: (message: string) => Promise<void> | void;
  onClose: () => void;
  className?: string;
}

export default function ChatInterface({
  assistantName,
  profileImage,
  welcomeMessage,
  headerColor = "#3B82F6",
  accentColor = "#00D4FF",
  onSendMessage,
  onClose,
  className,
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<{ role: "system" | "user" | "assistant"; content: string }[]>([
    { role: "system", content: welcomeMessage || `👋 Hi there! I'm ${assistantName}. How can I help you today?` },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    try {
      await onSendMessage(text);
      // Placeholder assistant echo for preview-only usage
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: "Thanks! I received your message." }]);
      }, 400);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I had trouble sending that." }]);
    }
  };

  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ background: headerColor, color: "#fff", padding: "8px 12px", display: "flex", alignItems: "center", gap: 8 }}>
        {profileImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={profileImage} alt="avatar" width={24} height={24} style={{ borderRadius: 9999 }} />
        ) : (
          <div style={{ width: 24, height: 24, borderRadius: 9999, background: "#fff3", display: "grid", placeItems: "center", fontSize: 12 }}>
            {assistantName?.charAt(0) || "A"}
          </div>
        )}
        <div style={{ fontWeight: 600 }}>{assistantName || "AI Assistant"}</div>
        <button onClick={onClose} style={{ marginLeft: "auto", color: "#fff" }}>×</button>
      </div>

      <div ref={listRef} style={{ flex: 1, overflow: "auto", padding: 12, background: "#fafafa" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 8, display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div
              style={{
                maxWidth: "85%",
                padding: "8px 10px",
                borderRadius: 10,
                background: m.role === "user" ? accentColor : "#fff",
                color: m.role === "user" ? "#111" : "#111",
                border: m.role === "assistant" ? "1px solid #e5e7eb" : "none",
                whiteSpace: "pre-wrap",
              }}
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={send} style={{ display: "flex", gap: 8, padding: 12, borderTop: "1px solid #e5e7eb" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, border: "1px solid #e5e7eb", borderRadius: 8, padding: "10px 12px" }}
        />
        <button
          type="submit"
          style={{ background: accentColor, color: "#111", fontWeight: 600, borderRadius: 8, padding: "0 14px" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
