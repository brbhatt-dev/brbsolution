export async function onRequest(context: any) {
  const { env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'public, max-age=60, s-maxage=300'
  };

  if (!env.POSTS_KV) {
    return new Response(JSON.stringify({ posts: [] }), { status: 200, headers: corsHeaders });
  }

  try {
    const slugsJson = await env.POSTS_KV.get('index:slugs');
    const slugs: string[] = slugsJson ? JSON.parse(slugsJson) : [];
    const posts: any[] = [];

    for (const slug of slugs) {
      const raw = await env.POSTS_KV.get(`post:${slug}`);
      if (raw) {
        try {
          const p = JSON.parse(raw);
          // Return concise summary for list
          const timestamp = Number(p.timestamp) || (p.createdAt ? new Date(p.createdAt).getTime() : 0) || (p.updatedDate ? new Date(p.updatedDate).getTime() : 0) || Date.now();
          posts.push({
            slug: p.slug,
            title: p.title,
            tag: p.tag,
            category: p.category,
            categoryNepali: p.categoryNepali,
            readTime: p.readTime,
            publishedDate: p.publishedDate,
            updatedDate: p.updatedDate,
            createdAt: p.createdAt || p.updatedDate,
            timestamp,
            summary: p.summary,
            isCustom: true
          });
        } catch (e) {}
      }
    }

    // Sort posts in descending order based on timestamp / creation date (newest first)
    posts.sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));

    return new Response(JSON.stringify({ success: true, count: posts.length, posts }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ posts: [], error: err.message }), { status: 200, headers: corsHeaders });
  }
}
