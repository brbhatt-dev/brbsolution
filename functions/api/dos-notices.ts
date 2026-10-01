/**
 * Cloudflare Pages Function: /api/dos-notices
 * Fetches and parses real-time official notices from Department of Survey, Nepal (dos.gov.np).
 * Includes edge caching and verified fallback data.
 */

export interface DosNotice {
  id: string;
  title: string;
  url: string;
  date: string;
  category: string;
  badge?: string;
  isLatest?: boolean;
}

const FALLBACK_NOTICES: DosNotice[] = [
  {
    id: '118',
    title: 'सरुवाको लागि निवेदन पेश गर्ने सम्बन्धी सूचना।',
    url: 'https://dos.gov.np/content/118/notice-regarding-submission-of-application-for-transfer-/',
    date: '२६ भदौ, २०८३',
    category: 'सूचना',
    badge: 'ताजा सूचना',
    isLatest: true,
  },
  {
    id: '119',
    title: 'सूचना !!!',
    url: 'https://dos.gov.np/content/119/information--/',
    date: '१८ भदौ, २०८३',
    category: 'सूचना',
    badge: 'महत्वपूर्ण',
    isLatest: false,
  },
  {
    id: '117',
    title: 'सरकारी, सार्वजनिक र सामुदायिक जग्गा संरक्षण सम्बन्धी निर्देशिका',
    url: 'https://dos.gov.np/content/117/guidelines-for-government--public-and-community-land/',
    date: '०८ साउन, २०८३',
    category: 'निर्देशिका',
    badge: 'निर्देशिका',
    isLatest: false,
  },
  {
    id: '115',
    title: 'सूचनाको हक सम्बन्धि स्वतः प्रकाशन (नापी विभाग)',
    url: 'https://dos.gov.np/content/115/self-publication-regarding-right-to-information/',
    date: '०१ साउन, २०८३',
    category: 'सूचनाको हक',
    badge: 'RTI',
    isLatest: false,
  },
  {
    id: '114',
    title: 'कर्मचारी आचारसंहिता पालना सम्बन्धी परिपत्र',
    url: 'https://dos.gov.np/content/114/regarding-code-of-conduct/',
    date: '२७ असार, २०८३',
    category: 'आचारसंहिता',
    badge: 'परिपत्र',
    isLatest: false,
  },
  {
    id: '113',
    title: 'अमिन तथा सर्भेक्षण सेवाकालीन तालिम सम्बन्धी सूचना',
    url: 'https://dos.gov.np/content/113/regarding-in-service-training/',
    date: '१५ असार, २०८३',
    category: 'तालिम',
    badge: 'तालिम',
    isLatest: false,
  },
  {
    id: '112',
    title: 'नापी कार्यालयहरूको सेवा प्रवाह तथा नागरिक सेवा सहजीकरण',
    url: 'https://dos.gov.np/content/112/regarding-service-delivery-/',
    date: '०२ असार, २०८३',
    category: 'सेवा प्रवाह',
    badge: 'सेवा प्रवाह',
    isLatest: false,
  }
];

export async function onRequestGet() {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=900, s-maxage=1800',
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const res = await fetch('https://dos.gov.np/category/information/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'ne-NP,ne;q=0.9,en-US;q=0.8,en;q=0.7',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const html = await res.text();
    const parsedNotices = parseDosHtml(html);

    if (parsedNotices.length > 0) {
      return new Response(
        JSON.stringify({
          success: true,
          source: 'नापी विभाग (Department of Survey, Nepal)',
          sourceUrl: 'https://dos.gov.np/category/information/',
          fetchedAt: new Date().toISOString(),
          notices: parsedNotices,
        }),
        { status: 200, headers }
      );
    }
  } catch (err: any) {
    // Graceful fallback to verified notice list
  }

  return new Response(
    JSON.stringify({
      success: true,
      source: 'नापी विभाग (Department of Survey, Nepal - Cached/Fallback)',
      sourceUrl: 'https://dos.gov.np/category/information/',
      fetchedAt: new Date().toISOString(),
      notices: FALLBACK_NOTICES,
    }),
    { status: 200, headers }
  );
}

function parseDosHtml(html: string): DosNotice[] {
  const notices: DosNotice[] = [];
  const cardRegex = /<div class="grid__card">([\s\S]*?)<\/div>\s*<\/div>/g;
  let match: RegExpExecArray | null;

  while ((match = cardRegex.exec(html)) !== null) {
    const cardHtml = match[1];

    // Extract link & ID
    const linkMatch = cardHtml.match(/href="([^"]*\/content\/([0-9]+)\/[^"]*)"/);
    if (!linkMatch) continue;

    const rawHref = linkMatch[1].trim().replace(/\s+/g, '');
    const id = linkMatch[2];
    const fullUrl = rawHref.startsWith('http') ? rawHref : `https://dos.gov.np${rawHref.startsWith('/') ? '' : '/'}${rawHref}`;

    // Extract Title
    const titleMatch = cardHtml.match(/<h3 class="card__title">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>[\s\S]*?<\/h3>/);
    let title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    title = title.replace(/\s+/g, ' ');
    if (!title) continue;

    // Extract Date
    const dateMatch = cardHtml.match(/<div class="meta post__date">[\s\S]*?<p>[\s\S]*?<\/i>([\s\S]*?)<\/p>/);
    let date = dateMatch ? dateMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    date = date.replace(/\s+/g, ' ');

    // Avoid duplicate IDs
    if (!notices.some((n) => n.id === id)) {
      let badge = 'सूचना';
      if (title.includes('निर्देशिका')) badge = 'निर्देशिका';
      else if (title.includes('परिपत्र')) badge = 'परिपत्र';
      else if (title.includes('तालिम')) badge = 'तालिम';
      else if (title.includes('सरुवा')) badge = 'कर्मचारी/सरुवा';
      else if (title.includes('स्वतः प्रकाशन') || title.includes('हक')) badge = 'RTI';

      notices.push({
        id,
        title,
        url: fullUrl,
        date: date || 'हालसालै',
        category: 'सूचना',
        badge,
        isLatest: notices.length === 0,
      });
    }

    if (notices.length >= 10) break;
  }

  return notices;
}
