import { NextRequest, NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { z } from 'zod';

// Helper function to set CORS headers (safe for public or cross-origin use)
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Block private/internal URLs
const PRIVATE_IP_REGEX = /^(127\.0\.0\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2[0-9]|3[0-1])\.\d{1,3}\.\d{1,3})$/;

// URL validation schema
const urlSchema = z.object({
  url: z.string().url('Invalid URL format').refine(
    (url) => {
      try {
        const parsedUrl = new URL(url);
        return !parsedUrl.hostname.match(PRIVATE_IP_REGEX) && 
               ['http:', 'https:'].includes(parsedUrl.protocol);
      } catch {
        return false;
      }
    },
    { message: 'Access to local/private networks or invalid protocol' }
  )
});

// Normalize whitespace helper
function normalizeWhitespace(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

// Extract plain text from HTML using cheerio
function extractPlainText(html: string): { text: string; title: string; headings: string[] } {
  const $ = cheerio.load(html);
  $('script, style, noscript').remove();
  const title = normalizeWhitespace($('title').first().text() || '');
  const headings = $('h1, h2, h3')
    .map((_i, el) => normalizeWhitespace($(el).text()))
    .get()
    .filter(Boolean);
  const bodyText = normalizeWhitespace($('body').text());
  return { text: bodyText, title, headings };
}

// Simple chunking with optional overlap
function chunkText(text: string, chunkSize = 5000, overlap = 200) {
  const chunks: { index: number; start: number; end: number; text: string }[] = [];
  let i = 0;
  let idx = 0;
  while (i < text.length) {
    const end = Math.min(i + chunkSize, text.length);
    chunks.push({ index: idx, start: i, end, text: text.slice(i, end) });
    if (end === text.length) break;
    i = end - overlap;
    if (i < 0) i = 0;
    idx += 1;
  }
  return chunks;
}

// Build a lightweight summary from title, headings, and first paragraphs
function buildSummary(html: string, plainText: string): string {
  const $ = cheerio.load(html);
  const title = normalizeWhitespace($('title').first().text() || '');
  const h = $('h1, h2, h3')
    .map((_i, el) => normalizeWhitespace($(el).text()))
    .get()
    .filter(Boolean)
    .slice(0, 10);
  const p = $('p')
    .map((_i, el) => normalizeWhitespace($(el).text()))
    .get()
    .filter(Boolean)
    .slice(0, 5);
  const intro = normalizeWhitespace(plainText.slice(0, 1200));
  const parts = [title && `Title: ${title}`, h.length && `Headings: ${h.join(' | ')}`, p.length && `Intro: ${p.join(' ')}`, intro]
    .filter(Boolean)
    .join('\n\n');
  return parts.slice(0, 2000);
}

// Helper function to extract links from HTML
function extractLinksFromHtml(html: string, baseUrl: string): string[] {
  const $ = cheerio.load(html);
  const links = new Set<string>();
  const base = new URL(baseUrl);

  $('a').each((_index: number, element: cheerio.Element) => {
    const href = $(element).attr('href') || '';
    try {
      // Handle relative URLs
      const linkUrl = new URL(href, base);
      // Only keep HTTP/HTTPS links
      if (['http:', 'https:'].includes(linkUrl.protocol)) {
        // Remove hash and query parameters for cleaner URLs
        linkUrl.hash = '';
        linkUrl.search = '';
        links.add(linkUrl.toString());
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      console.warn(`Skipping invalid URL (${href}): ${errorMessage}`);
    }
  });

  return Array.from(links);
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = urlSchema.parse(body);

    // Validate URL
    const parsedUrl = new URL(url);
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      throw new Error('Only http and https protocols are supported');
    }

    // Fetch the HTML content with timeout
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      },
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const { text: plainText, title, headings } = extractPlainText(html);
    const links = extractLinksFromHtml(html, url);
    const chunks = chunkText(plainText);
    const summary = buildSummary(html, plainText);

    return new NextResponse(
      JSON.stringify({
        success: true,
        text: plainText,
        structured: {
          title,
          headings,
          length: plainText.length,
          summary,
          chunkCount: chunks.length,
          // limit preview of chunks to keep payload small
          chunks: chunks.slice(0, 10).map((c) => ({ index: c.index, start: c.start, end: c.end, text: c.text })),
          links: links.map((link) => ({ url: link, text: new URL(link).hostname })),
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Extraction failed:', errorMessage);

    return new NextResponse(
      JSON.stringify({
        success: false,
        error: errorMessage,
        ...(process.env.NODE_ENV === 'development' && error instanceof Error ? { details: error.stack } : {}),
      }),
      {
        status: error instanceof Error && error.message.includes('Failed to fetch') ? 400 : 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
}

export const config = {
  runtime: 'edge',
  api: {
    bodyParser: false,
  },
};
