"use client";

import { useEffect, useMemo, useState } from "react";
import type { Metadata } from "next";
import { useSearchParams } from "next/navigation";

export const metadata: Metadata = {
  title: "Chat | Vaste",
  description: "Public chat page that embeds the Vaste chatbot widget.",
};

export default function ChatPage() {
  const searchParams = useSearchParams();
  const agentId = useMemo(() => searchParams.get("agent") || searchParams.get("id") || "", [searchParams]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Remove any previous script to avoid duplicates during client-side nav
    const existing = document.querySelector<HTMLScriptElement>('script[data-vaste-chatbot="true"]');
    if (existing) existing.remove();

    if (!agentId) {
      setError("Missing agent parameter. Append ?agent=YOUR_AGENT_ID to the URL.");
      return;
    }

    setError(null);
    const script = document.createElement("script");
    script.src = "/widget.js"; // ensure this is served from /public/widget.js
    script.defer = true;
    script.setAttribute("data-vaste-chatbot", "true");
    script.setAttribute("data-bot-id", agentId);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [agentId]);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-black">Chat</h1>
      <p className="mt-2 text-sm text-black">This page embeds your Vaste chatbot widget.</p>

      {error ? (
        <div className="mt-4 rounded border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      ) : (
        <div className="mt-4 rounded border bg-gray-50 p-4 text-sm text-black">
          The chatbot widget should appear once the script loads. If you do not see it, verify your Agent ID and that /widget.js is reachable.
        </div>
      )}

      <section className="mt-8">
        <h2 className="text-lg font-medium text-black">Linking from WordPress.com (Free)</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-black">
          <li>Add a Button block or Menu link to this URL:</li>
          <li>
            <code className="rounded bg-gray-100 px-2 py-1 text-sm text-black">
              {typeof window !== "undefined" ? `${window.location.origin}/chat?agent=YOUR_AGENT_ID` : "/chat?agent=YOUR_AGENT_ID"}
            </code>
          </li>
          <li>Replace YOUR_AGENT_ID with your actual agent ID.</li>
          <li>Set target to open in a new tab (optional).</li>
        </ol>
      </section>
    </main>
  );
}
