export async function onRequest(context: any) {
  const { request, env } = context;
  const method = request.method.toUpperCase();

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Auth',
    'Content-Type': 'application/json; charset=utf-8'
  };

  if (method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (!env.POSTS_KV) {
    return new Response(JSON.stringify({ error: 'POSTS_KV binding not found' }), {
      status: 500,
      headers: corsHeaders
    });
  }

  // Cryptographic Session Verification
  async function verifySession(): Promise<boolean> {
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

    // Check if token exists in KV
    const session = await env.POSTS_KV.get(`session:${token}`);
    return !!session;
  }

  // 1. GET: List all custom posts OR fetch cloud draft
  if (method === 'GET') {
    try {
      const url = new URL(request.url);
      
      // If requesting cloud draft
      if (url.searchParams.get('type') === 'draft') {
        const isAuth = await verifySession();
        if (!isAuth) {
          return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders });
        }
        const draftJson = await env.POSTS_KV.get('draft:current');
        const draft = draftJson ? JSON.parse(draftJson) : null;
        return new Response(JSON.stringify({ success: true, draft }), {
          status: 200,
          headers: corsHeaders
        });
      }

      const slugsJson = await env.POSTS_KV.get('index:slugs');
      const slugs: string[] = slugsJson ? JSON.parse(slugsJson) : [];
      const posts: any[] = [];

      for (const slug of slugs) {
        const raw = await env.POSTS_KV.get(`post:${slug}`);
        if (raw) {
          try {
            posts.push(JSON.parse(raw));
          } catch (e) {}
        }
      }

      // Sort posts in descending order based on timestamp / creation date (newest first)
      posts.sort((a, b) => {
        const timeB = Number(b.timestamp) || (b.createdAt ? new Date(b.createdAt).getTime() : 0) || 0;
        const timeA = Number(a.timestamp) || (a.createdAt ? new Date(a.createdAt).getTime() : 0) || 0;
        return timeB - timeA;
      });

      return new Response(JSON.stringify({ success: true, count: posts.length, posts }), {
        status: 200,
        headers: corsHeaders
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
    }
  }

  // 2. POST: Create or Update an article (Requires valid session)
  if (method === 'POST') {
    const isAuth = await verifySession();
    if (!isAuth) {
      return new Response(JSON.stringify({ error: 'Unauthorized: Session invalid or expired' }), {
        status: 401,
        headers: corsHeaders
      });
    }

    try {
      const data = await request.json();

      // If this is a Cloud Draft save
      if (data.isDraft) {
        const draftPayload = {
          ...data,
          savedAt: new Date().toISOString()
        };
        await env.POSTS_KV.put('draft:current', JSON.stringify(draftPayload));
        return new Response(JSON.stringify({ 
          success: true, 
          message: 'Draft saved to cloud successfully' 
        }), {
          status: 200,
          headers: corsHeaders
        });
      }

      if (!data.title || !data.slug || !data.summary) {
        return new Response(JSON.stringify({ error: 'Title, slug, and summary are required' }), {
          status: 400,
          headers: corsHeaders
        });
      }

      const slug = data.slug.toLowerCase().trim().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-');
      const nowIso = new Date().toISOString();
      const nowMs = Date.now();
      const postData = {
        ...data,
        slug,
        isCustom: true,
        createdAt: data.createdAt || nowIso,
        timestamp: Number(data.timestamp) || nowMs,
        updatedDate: data.updatedDate || nowIso.split('T')[0]
      };

      // Save the post
      await env.POSTS_KV.put(`post:${slug}`, JSON.stringify(postData));

      // Clean up cloud draft since it is now published
      await env.POSTS_KV.delete('draft:current').catch(() => {});

      // Update index of slugs
      const slugsJson = await env.POSTS_KV.get('index:slugs');
      const slugs: string[] = slugsJson ? JSON.parse(slugsJson) : [];
      if (!slugs.includes(slug)) {
        slugs.unshift(slug);
        await env.POSTS_KV.put('index:slugs', JSON.stringify(slugs));
      }

      // Automatically trigger IndexNow ping
      try {
        const indexNowPayload = {
          host: 'www.brbhatta.com',
          key: 'c7d1e89b4f2a41d08e92a11b6d98c57e',
          keyLocation: 'https://www.brbhatta.com/c7d1e89b4f2a41d08e92a11b6d98c57e.txt',
          urlList: [`https://www.brbhatta.com/articles/${slug}`]
        };
        fetch('https://api.indexnow.org/indexnow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(indexNowPayload)
        }).catch(() => {});
      } catch (e) {}

      return new Response(JSON.stringify({ success: true, message: 'Article published successfully', slug }), {
        status: 200,
        headers: corsHeaders
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
    }
  }

  // 3. DELETE: Remove custom article (Requires valid session)
  if (method === 'DELETE') {
    const isAuth = await verifySession();
    if (!isAuth) {
      return new Response(JSON.stringify({ error: 'Unauthorized: Session invalid or expired' }), {
        status: 401,
        headers: corsHeaders
      });
    }

    try {
      const url = new URL(request.url);
      
      // Delete cloud draft
      if (url.searchParams.get('type') === 'draft') {
        await env.POSTS_KV.delete('draft:current');
        return new Response(JSON.stringify({ success: true, message: 'Cloud draft deleted' }), {
          status: 200,
          headers: corsHeaders
        });
      }

      const slug = url.searchParams.get('slug');
      if (!slug) {
        return new Response(JSON.stringify({ error: 'Slug parameter is required' }), { status: 400, headers: corsHeaders });
      }

      await env.POSTS_KV.delete(`post:${slug}`);

      const slugsJson = await env.POSTS_KV.get('index:slugs');
      let slugs: string[] = slugsJson ? JSON.parse(slugsJson) : [];
      slugs = slugs.filter((s) => s !== slug);
      await env.POSTS_KV.put('index:slugs', JSON.stringify(slugs));

      return new Response(JSON.stringify({ success: true, message: 'Article deleted successfully' }), {
        status: 200,
        headers: corsHeaders
      });
    } catch (err: any) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
    }
  }

  return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: corsHeaders });
}
