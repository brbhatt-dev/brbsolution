interface Env {
  POSTS_KV: {
    get: (key: string) => Promise<string | null>;
    getWithMetadata: <T = Record<string, any>>(key: string) => Promise<{ value: string | null; metadata: T | null }>;
    put: (key: string, value: string, options?: { expirationTtl?: number; metadata?: Record<string, any> }) => Promise<void>;
    list: (options?: { prefix?: string; limit?: number; cursor?: string }) => Promise<{
      keys: Array<{ name: string; expiration?: number; metadata?: Record<string, any> }>;
      list_complete: boolean;
      cursor?: string;
    }>;
  };
}

interface DeviceMetadata {
  v?: string;
  b?: number;
  p?: string;
  c?: string;
  fs?: number;
  ls?: number;
}

const corsHeaders: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Auth',
};

const TTL_180_DAYS = 15552000;
const DAY_MS = 86400000;
const NPT_OFFSET_MS = 20700000; // UTC+5:45

async function verifySession(request: Request, env: Env): Promise<boolean> {
  const cookieHeader = request.headers.get('Cookie') || '';
  let token = '';
  const match = cookieHeader.match(/brb_admin_session=([^;]+)/);
  if (match) {
    token = match[1];
  } else {
    const authHeader = request.headers.get('Authorization') || request.headers.get('X-Admin-Auth') || '';
    token = authHeader.replace(/^Bearer\s+/i, '').trim();
  }
  if (!token) return false;
  const session = await env.POSTS_KV.get(`session:${token}`);
  return !!session;
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (!env.POSTS_KV) {
    return new Response(JSON.stringify({ error: 'POSTS_KV not bound' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const id = typeof body.id === 'string' ? body.id.trim() : '';
  if (!/^[a-zA-Z0-9_-]{12,64}$/.test(id)) {
    return new Response(JSON.stringify({ error: 'Invalid anonymous device id' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const version = String(body.version || 'unknown').trim().slice(0, 24) || 'unknown';
  const buildRaw = Number(body.build);
  const build = Number.isFinite(buildRaw) && buildRaw > 0 ? Math.floor(buildRaw) : 0;
  const platform = String(body.platform || 'android_apk').trim().slice(0, 24) || 'android_apk';
  const cfCountry = (request as Request & { cf?: { country?: string } }).cf?.country;
  const country = String(cfCountry || 'NP').trim().toUpperCase().slice(0, 8) || 'NP';

  const kvKey = `patro_dev:${id}`;
  const now = Date.now();

  let firstSeen = now;
  try {
    const existing = await env.POSTS_KV.getWithMetadata<DeviceMetadata>(kvKey);
    if (existing?.metadata?.fs && typeof existing.metadata.fs === 'number') {
      firstSeen = existing.metadata.fs;
    }
  } catch {
    firstSeen = now;
  }

  const metadata: DeviceMetadata = {
    v: version,
    b: build,
    p: platform,
    c: country,
    fs: firstSeen,
    ls: now,
  };

  await env.POSTS_KV.put(kvKey, '1', {
    expirationTtl: TTL_180_DAYS,
    metadata,
  });

  return new Response(JSON.stringify({ success: true, counted: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...corsHeaders },
  });
}

export async function onRequestGet(context: { request: Request; env: Env }) {
  const { request, env } = context;

  if (!env.POSTS_KV) {
    return new Response(JSON.stringify({ error: 'POSTS_KV not bound' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const isAuthed = await verifySession(request, env);
  if (!isAuthed) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  const now = Date.now();
  const nptStartOfTodayMs =
    Math.floor((now + NPT_OFFSET_MS) / DAY_MS) * DAY_MS - NPT_OFFSET_MS;

  let totalDevices = 0;
  let active24h = 0;
  let active7d = 0;
  let active30d = 0;
  let newToday = 0;

  const versionMap = new Map<string, { version: string; build: number; count: number }>();
  const countryMap = new Map<string, number>();
  const byPlatform: Record<string, number> = {};

  let cursor: string | undefined;
  let listComplete = false;

  while (!listComplete) {
    const page = await env.POSTS_KV.list({ prefix: 'patro_dev:', limit: 1000, cursor });
    for (const key of page.keys) {
      totalDevices += 1;
      const meta = (key.metadata || {}) as DeviceMetadata;
      const ls = typeof meta.ls === 'number' ? meta.ls : 0;
      const fs = typeof meta.fs === 'number' ? meta.fs : ls;

      if (ls >= now - DAY_MS) active24h += 1;
      if (ls >= now - 7 * DAY_MS) active7d += 1;
      if (ls >= now - 30 * DAY_MS) active30d += 1;
      if (fs >= nptStartOfTodayMs) newToday += 1;

      const v = String(meta.v || 'unknown');
      const b = typeof meta.b === 'number' ? meta.b : 0;
      const vKey = `${v}__${b}`;
      const existingVer = versionMap.get(vKey);
      if (existingVer) {
        existingVer.count += 1;
      } else {
        versionMap.set(vKey, { version: v, build: b, count: 1 });
      }

      const c = String(meta.c || 'NP');
      countryMap.set(c, (countryMap.get(c) || 0) + 1);

      const p = String(meta.p || 'android_apk');
      byPlatform[p] = (byPlatform[p] || 0) + 1;
    }

    listComplete = page.list_complete;
    cursor = page.cursor;
    if (!cursor && !listComplete) break;
  }

  const byVersion = Array.from(versionMap.values()).sort(
    (a, b) => b.build - a.build || b.count - a.count
  );
  const byCountry = Array.from(countryMap.entries())
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count);

  return new Response(
    JSON.stringify({
      success: true,
      totalDevices,
      active24h,
      active7d,
      active30d,
      newToday,
      byVersion,
      byCountry,
      byPlatform,
      generatedAt: new Date(now).toISOString(),
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        ...corsHeaders,
      },
    }
  );
}
