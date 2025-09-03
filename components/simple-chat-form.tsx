"use client"

import React, { useState } from "react";

type FormField = {
  id: string;
  label: string;
  type: string;
  required: boolean;
  value?: string;
};

interface SimpleChatFormProps {
  formFields: FormField[];
  onFormSubmitAction: (formData: Record<string, string>) => Promise<void> | void;
  _assistantName?: string;
  _welcomeMessage?: string;
  _headerColor?: string;
  _accentColor?: string;
  _backgroundColor?: string;
  _profileImage?: string;
  className?: string;
}

export default function SimpleChatForm(props: SimpleChatFormProps) {
  const {
    formFields,
    onFormSubmitAction,
    _assistantName,
    _welcomeMessage,
    _headerColor = "#3B82F6",
    _accentColor = "#00D4FF",
    _backgroundColor = "#FFFFFF",
    className,
  } = props;

  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(formFields.map(f => [f.id, f.value ?? ""]))
  );
  const [submitting, setSubmitting] = useState(false);

  const onChange = (id: string, val: string) => {
    setValues(prev => ({ ...prev, [id]: val }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await onFormSubmitAction(values);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={className} style={{ backgroundColor: _backgroundColor, display: "flex", flexDirection: "column" }}>
      <div style={{ background: _headerColor, color: "white", padding: "8px 12px", fontWeight: 600 }}>
        {(_assistantName ?? "AI Assistant")} – Pre-Chat Form
      </div>
      {(_welcomeMessage ?? "") && (
        <div style={{ padding: 12, color: "#111" }}>{_welcomeMessage}</div>
      )}
      <form onSubmit={onSubmit} style={{ padding: 12, display: "grid", gap: 8 }}>
        {formFields.map((f) => (
          <label key={f.id} style={{ display: "grid", gap: 4 }}>
            <span style={{ fontSize: 12, color: "#111" }}>
              {f.label}{f.required ? " *" : ""}
            </span>
            <input
              value={values[f.id] ?? ""}
              onChange={(e) => onChange(f.id, e.target.value)}
              required={f.required}
              type={f.type === "email" ? "email" : f.type === "phone" ? "tel" : "text"}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 6,
                padding: "8px 10px",
                outlineColor: _accentColor,
              }}
            />
          </label>
        ))}
        <button
          type="submit"
          disabled={submitting}
          style={{
            marginTop: 8,
            background: _accentColor,
            color: "#111",
            fontWeight: 600,
            borderRadius: 6,
            padding: "10px 12px",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "Submitting..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
