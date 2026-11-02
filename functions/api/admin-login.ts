export async function onRequest(context: any) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json; charset=utf-8'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders });
  }

  // Get Client IP for Rate Limiting
  const clientIp = request.headers.get('CF-Connecting-IP') || 'unknown-ip';
  const rateLimitKey = `ratelimit:${clientIp}`;

  if (env.POSTS_KV) {
    const attempts = await env.POSTS_KV.get(rateLimitKey);
    if (attempts && parseInt(attempts, 10) >= 5) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'धेरै पटक गलत प्रयास भयो! सुरक्षाका लागि यो IP १५ मिनेटका लागि रोक्का गरिएको छ।' 
      }), {
        status: 429,
        headers: corsHeaders
      });
    }
  }

  try {
    const body = await request.json();
    const username = (body.username || '').trim();
    const password = (body.password || '').trim();

    // Verify on Server Side (Never exposed to client)
    const VALID_USER = 'chanairaj';
    const VALID_PASS = 'jayshreeram';

    if (username === VALID_USER && password === VALID_PASS) {
      // Clear rate limit
      if (env.POSTS_KV) {
        await env.POSTS_KV.delete(rateLimitKey);
      }

      // Generate Cryptographically Strong Session Token
      const sessionToken = crypto.randomUUID() + '-' + crypto.randomUUID();

      if (env.POSTS_KV) {
        // Save session in KV for 24 hours
        await env.POSTS_KV.put(`session:${sessionToken}`, JSON.stringify({
          user: username,
          createdAt: Date.now()
        }), { expirationTtl: 86400 });
      }

      const headers = new Headers(corsHeaders);
      // Set HttpOnly, Secure cookie that CANNOT be accessed by JavaScript/Inspect
      headers.set('Set-Cookie', `brb_admin_session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`);

      return new Response(JSON.stringify({ 
        success: true, 
        message: 'लगइन सफल भयो!',
        token: sessionToken
      }), {
        status: 200,
        headers
      });
    } else {
      // Record failed attempt
      if (env.POSTS_KV) {
        const attempts = await env.POSTS_KV.get(rateLimitKey);
        const count = attempts ? parseInt(attempts, 10) + 1 : 1;
        await env.POSTS_KV.put(rateLimitKey, count.toString(), { expirationTtl: 900 });
      }

      return new Response(JSON.stringify({ 
        success: false, 
        error: 'गलत प्रयोगकर्ता नाम वा पासवर्ड!' 
      }), {
        status: 401,
        headers: corsHeaders
      });
    }
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Invalid request payload' }), { status: 400, headers: corsHeaders });
  }
}
