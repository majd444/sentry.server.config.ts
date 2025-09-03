"use client";

import CopyButton from "./CopyButton";

interface CodeSnippetProps {
  code: string;
  language?: string;
  className?: string;
}

export default function CodeSnippet({ code, language = "text", className }: CodeSnippetProps) {
  return (
    <div className={`relative rounded-md border bg-muted ${className || ""}`}>
      <pre className="overflow-auto p-3 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <div className="absolute right-2 top-2">
        <CopyButton value={code} ariaLabel="Copy code" />
      </div>
    </div>
  );
}
