"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";

interface CopyButtonProps {
  value: string;
  className?: string;
  ariaLabel?: string;
}

export default function CopyButton({ value, className, ariaLabel }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // Swallow copy errors silently
      console.error("Copy failed", e);
    }
  };

  return (
    <Button
      type="button"
      variant="secondary"
      size="sm"
      onClick={onCopy}
      aria-label={ariaLabel || "Copy to clipboard"}
      className={className}
    >
      {copied ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Copied
        </>
      ) : (
        <>
          <Copy className="mr-2 h-4 w-4" /> Copy
        </>
      )}
    </Button>
  );
}
