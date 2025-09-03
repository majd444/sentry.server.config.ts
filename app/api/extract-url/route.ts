import { NextRequest, NextResponse } from 'next/server';

// CORS headers (keep behavior stable for callers already using this route)
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

// Legacy endpoint proxy. Forwards to unified /api/extract to avoid duplication.
export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const origin = req.nextUrl.origin;
    const targetUrl = `${origin}/api/extract`;

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      // Keep server-to-server fetch characteristics simple
    });

    const text = await res.text();
    return new NextResponse(text, {
      status: res.status,
      headers: {
        'Content-Type': res.headers.get('Content-Type') || 'application/json',
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new NextResponse(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

export const config = { runtime: 'edge' };
