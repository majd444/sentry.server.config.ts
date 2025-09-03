=== Vaste Chatbot ===
Contributors: vaste
Tags: chatbot, ai, support, widget, embed
Requires at least: 5.6
Tested up to: 6.6
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/licenses/MIT

A simple plugin to inject your Vaste (or any SaaS) chatbot on a WordPress site. Install, add your Chatbot Key and Script URL, done.

== Description ==
Vaste Chatbot makes it dead-simple to add your SaaS chatbot widget to any WordPress site.

- Add your Script URL (e.g., a CDN link to your widget.js)
- Add your Chatbot Key / Agent ID
- Optionally enable site-wide injection or use the shortcode `[vaste_chatbot]`
- Optionally add extra data-* attributes

== Installation ==
1. Download/clone the plugin folder `vaste-chatbot`.
2. Zip the folder so you have `vaste-chatbot.zip`.
3. In WordPress Admin, go to Plugins → Add New → Upload Plugin and upload the ZIP.
4. Activate the plugin.
5. Go to Settings → Vaste Chatbot and configure:
   - Script URL: e.g. `https://cdn.example.com/widget.js`
   - Chatbot Key / Agent ID
   - (Optional) Extra attributes as lines of `key=value` which become `data-key="value"`
   - Enable site‑wide injection if you want it on all pages.

== Usage ==
- Site‑wide injection: enable it in Settings → Vaste Chatbot.
- Per page/post: use the shortcode `[vaste_chatbot]` anywhere in your content.
- Shortcode attributes:
  - `script_url` – overrides the global script URL
  - `key` – overrides the global Chatbot Key / Agent ID

Example:
`[vaste_chatbot script_url="https://cdn.your-saas.com/widget.js" key="public_123"]`

== Frequently Asked Questions ==
= Will this load on every page? =
Only if you enable site‑wide injection. Otherwise, include the `[vaste_chatbot]` shortcode on specific pages.

= How are extra attributes added? =
Each `key=value` line becomes a `data-key="value"` attribute on the script tag. Example:
```
position=bottom-right
color=#1f2937
api_base=https://api.example.com
```

== Changelog ==
= 1.0.0 =
- Initial release

== Uninstall ==
On uninstall, the saved option `vaste_chatbot_options` is removed.
