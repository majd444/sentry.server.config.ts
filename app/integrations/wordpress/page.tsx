import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CodeSnippet from "@/components/CodeSnippet";

export const metadata: Metadata = {
  title: "WordPress Integration | Vaste",
  description: "Add the Vaste Chatbot to your WordPress site using our plugin in minutes.",
};

export default function WordPressIntegrationPage() {
  const shortcodeOverride = '[vaste_chatbot script_url="https://cdn.yourapp.com/widget.js" key="public_123"]';
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">WordPress Integration</h1>
      <p className="mt-3 text-muted-foreground">
        Add your Vaste Chatbot to WordPress in minutes using our plugin. Install, add your Chatbot Key and Script URL, done.
      </p>

      <div className="mt-6 rounded-md border p-4">
        <h2 className="text-xl font-medium">Download</h2>
        <p className="mt-2">Download the ready-made plugin ZIP and upload it in your WordPress admin.</p>
        <div className="mt-4">
          <Link
            href="/downloads/vaste-chatbot.zip"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
          >
            Download WordPress Plugin (ZIP)
          </Link>
        </div>
      </div>

      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-medium">Quick Setup</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>
              In WordPress: <em>Plugins → Add New → Upload Plugin</em>, choose the ZIP, then <strong>Install</strong> and <strong>Activate</strong>.
            </li>
            <li>
              Go to <em>Settings → Vaste Chatbot</em> and configure:
              <ul className="mt-2 list-disc pl-6">
                <li>
                  <strong>Script URL</strong>: your widget loader (e.g. https://cdn.yourapp.com/widget.js)
                </li>
                <li>
                  <strong>Chatbot Key / Agent ID</strong>: copy from your dashboard.
                </li>
                <li>
                  <strong>Extra data-* attributes (optional)</strong>: one per line in <code>key=value</code> format.
                </li>
                <li>
                  <strong>Enable site‑wide injection</strong> to load on all pages (or use the shortcode below).
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-medium">Plugin Settings (Preview)</h2>
          <div className="mt-3 rounded-md border overflow-hidden">
            <div className="relative w-full" style={{ height: 360 }}>
              <Image
                src="/screenshots/wordpress-settings.svg"
                alt="WordPress Vaste Chatbot settings screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain bg-white"
                priority
              />
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Replace this placeholder with a real screenshot when available.</p>
        </div>

        <div>
          <h2 className="text-xl font-medium">Per‑page Usage (Shortcode)</h2>
          <CodeSnippet code="[vaste_chatbot]" className="mt-2" />
          <p className="mt-2">Optional overrides:</p>
          <CodeSnippet code={shortcodeOverride} />
        </div>

        <div>
          <h2 className="text-xl font-medium">Theme/Template Usage (PHP)</h2>
          <CodeSnippet code={'<?php echo do_shortcode(\'[vaste_chatbot]\'); ?>'} language="php" className="mt-2" />
        </div>

        <div>
          <h2 className="text-xl font-medium">Troubleshooting</h2>
          <ul className="mt-2 list-disc pl-6">
            <li>Ensure Script URL and Key are set on the settings page.</li>
            <li>If not site‑wide, place the shortcode on the specific page or post.</li>
            <li>Check caching/minification plugins aren’t blocking the script URL.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
