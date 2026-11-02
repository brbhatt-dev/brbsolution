export async function onRequest(context: any) {
  const { request, env, params } = context;
  const slug = params.slug;

  // 1. Try static pre-rendered assets first
  let response = await env.ASSETS.fetch(request);
  if (response.status !== 404) {
    return response;
  }

  // 2. If 404 in static files, check if it was published dynamically to Cloudflare KV!
  if (env.POSTS_KV) {
    try {
      const rawPost = await env.POSTS_KV.get(`post:${slug}`);
      if (rawPost) {
        const post = JSON.parse(rawPost);
        return new Response(renderDynamicPostHtml(post), {
          status: 200,
          headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=60, s-maxage=3600',
            'X-Content-Type-Options': 'nosniff'
          }
        });
      }
    } catch (e) {}
  }

  return response;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderDynamicPostHtml(post: any): string {
  const title = escapeHtml(post.title || '');
  const summary = escapeHtml(post.summary || '');
  const category = escapeHtml(post.categoryNepali || post.category || 'नापी तथा मालपोत');
  const tag = escapeHtml(post.tag || 'गाइड');
  const readTime = escapeHtml(post.readTime || '५ मिनेट');
  const publishedDate = escapeHtml(post.publishedDate || '२०८१');
  const authorName = escapeHtml(post.author?.name || 'BR Bhatta');
  const authorRole = escapeHtml(post.author?.role || 'सफ्टवेयर विकासकर्ता तथा नापी प्रविधि विशेषज्ञ');
  const slug = escapeHtml(post.slug || '');
  const url = `https://www.brbhatta.com/articles/${slug}`;

  const sectionsHtml = (post.sections || []).map((sec: any, idx: number) => {
    const heading = escapeHtml(sec.heading || '');
    const content = (sec.content || '').split('\n').map((para: string) => {
      const p = para.trim();
      if (!p) return '';
      return `<p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 text-base sm:text-lg">${escapeHtml(p)}</p>`;
    }).join('');

    let alertHtml = '';
    if (sec.alert) {
      alertHtml = `
        <div class="my-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
          <div class="p-2 rounded-xl bg-emerald-600 text-white font-bold text-xs">सुझाव</div>
          <div>
            <h4 class="font-bold text-emerald-950 dark:text-emerald-200 text-sm mb-1">${escapeHtml(sec.alert.title || 'स्मार्ट सुझाव')}</h4>
            <p class="text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">${escapeHtml(sec.alert.text || '')}</p>
          </div>
        </div>
      `;
    }

    return `
      <section class="mb-10 pt-4" id="section-${idx + 1}">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span class="w-1.5 h-6 rounded-full bg-emerald-600"></span>
          <span>${heading}</span>
        </h2>
        <div class="prose dark:prose-invert max-w-none">
          ${content}
        </div>
        ${alertHtml}
      </section>
    `;
  }).join('');

  const faqHtml = (post.faq || []).map((f: any) => `
    <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-4 shadow-sm">
      <h3 class="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-start gap-2">
        <span class="text-emerald-600 dark:text-emerald-400 font-bold">प्र:</span>
        <span>${escapeHtml(f.question)}</span>
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-6">
        ${escapeHtml(f.answer)}
      </p>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="ne" class="notranslate" translate="no">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title} | BR Bhatta & Land Solution</title>
  <meta name="description" content="${summary}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${title} | BR Bhatta" />
  <meta property="og:description" content="${summary}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ne_NP" />
  <meta property="og:site_name" content="Land Solution & BR Bhatta" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZEHZLLS88P"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZEHZLLS88P');
  </script>
  <style>
    body { font-family: 'Mukta', sans-serif; }
  </style>
</head>
<body class="bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 min-h-screen">
  
  <!-- Header -->
  <header class="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
    <div class="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/articles" class="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors">
        ← सबै लेखहरू
      </a>
      <a href="/" class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
        www.brbhatta.com
      </a>
    </div>
  </header>

  <!-- Article Container -->
  <main class="max-w-4xl mx-auto px-4 py-8 sm:py-12">
    
    <!-- Meta Info -->
    <div class="flex flex-wrap items-center gap-2 mb-4">
      <span class="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
        ${category}
      </span>
      <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">
        ${tag}
      </span>
      <span class="text-xs text-slate-500">• ${readTime} पढ्न लाग्ने • ${publishedDate}</span>
    </div>

    <!-- Title -->
    <h1 class="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-snug mb-4">
      ${title}
    </h1>

    <!-- Summary Box -->
    <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-8 shadow-sm">
      <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
        ${summary}
      </p>
    </div>

    <!-- Author Badge -->
    <div class="flex items-center gap-3 pb-8 mb-8 border-b border-slate-200 dark:border-slate-800">
      <div class="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white text-base">
        BR
      </div>
      <div>
        <h4 class="font-bold text-sm text-slate-900 dark:text-white">${authorName}</h4>
        <p class="text-xs text-slate-500">${authorRole}</p>
      </div>
    </div>

    <!-- Content Sections -->
    <article class="article-body">
      ${sectionsHtml}
    </article>

    <!-- FAQs -->
    ${faqHtml ? `
      <section class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
        <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <span>बारम्बार सोधिने प्रश्नहरू (FAQ)</span>
        </h2>
        <div class="faq-list">
          ${faqHtml}
        </div>
      </section>
    ` : ''}

    <!-- Bottom Actions -->
    <div class="mt-12 p-6 rounded-3xl bg-gradient-to-tr from-emerald-600 to-teal-700 text-white text-center space-y-3">
      <h3 class="text-lg font-bold">जग्गा नापजाँच वा मालपोत शुल्क तुरुन्त हिसाब गर्नुहोस्</h3>
      <p class="text-xs text-emerald-100 max-w-lg mx-auto">
        हाम्रो अनलाइन क्यालकुलेटर प्रयोग गरी १ सेकेन्डमै जग्गाको क्षेत्रफल, रजिस्ट्रेसन दस्तुर र पुँजीगत लाभकर हिसाब गर्नुहोस्।
      </p>
      <div class="pt-2 flex flex-wrap justify-center gap-3">
        <a href="/tools/malpot-calculator" class="px-4 py-2 rounded-xl bg-white text-emerald-800 font-bold text-xs shadow-md hover:bg-emerald-50 transition-all">
          मालपोत क्यालकुलेटर
        </a>
        <a href="/tools/land-calculator" class="px-4 py-2 rounded-xl bg-emerald-900/60 text-white font-bold text-xs border border-emerald-400 hover:bg-emerald-900 transition-all">
          जग्गा नापी कन्भर्टर
        </a>
      </div>
    </div>

  </main>

  <!-- Footer -->
  <footer class="mt-16 py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
    <p>© ${new Date().getFullYear()} BR Bhatta & Land Solution Nepal. All rights reserved.</p>
  </footer>

</body>
</html>`;
}
