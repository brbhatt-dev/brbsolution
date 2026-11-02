export async function onRequest(context: any) {
  const { request, next } = context;
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();

  // 0. Canonical WWW Host Enforcement (Apex brbhatta.com & legacy domains -> www.brbhatta.com)
  if (host === 'brbhatta.com' || host === 'bhattbr.com.np' || host === 'www.bhattbr.com.np') {
    url.hostname = 'www.brbhatta.com';
    return Response.redirect(url.toString(), 301);
  }
  const pathname = url.pathname.toLowerCase();

  // 1. Edge Gatekeeper for /admin
  if (pathname === '/admin' || pathname === '/admin/' || pathname === '/admin.html') {
    const key = url.searchParams.get('key');
    const cookie = request.headers.get('Cookie') || '';
    const hasSession = cookie.includes('brb_admin_session=');

    // If key is valid or session exists, allow access to Admin Studio
    if (key === 'chanairaj' || key === 'brb_boss_2026' || hasSession) {
      return await next();
    }

    // For any unauthorized visitor, bot, or hacker: return DEAD 404 (No HTML, no JS bundles served!)
    return new Response('404 Not Found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow, noarchive'
      }
    });
  }

  // 2. Protect sensitive internal files
  if (
    pathname.startsWith('/scripts') ||
    pathname.includes('..') ||
    pathname.endsWith('.env') ||
    pathname.endsWith('.json.key')
  ) {
    return new Response('404 Not Found', { status: 404 });
  }

  return await next();
}
