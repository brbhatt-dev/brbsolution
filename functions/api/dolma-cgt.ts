export async function onRequestPost(context: any) {
  try {
    const { request } = context;
    const contentType = request.headers.get('content-type') || '';
    
    let body: any;
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData();
      const params = new URLSearchParams();
      for (const [key, value] of formData.entries()) {
        params.append(key, value.toString());
      }
      body = params;
    } else if (contentType.includes('application/json')) {
      const json = await request.json();
      const params = new URLSearchParams();
      for (const key of Object.keys(json)) {
        if (Array.isArray(json[key])) {
          json[key].forEach((val: any) => params.append(key, val.toString()));
        } else {
          params.append(key, json[key]?.toString() || '');
        }
      }
      body = params;
    } else {
      const formData = await request.formData();
      body = formData;
    }

    const dolmaCgtUrl = 'https://www.dolma.gov.np/public/api/utilities/api/cgt_calculate.php';
    const response = await fetch(dolmaCgtUrl, {
      method: 'POST',
      body: body,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Referer': 'https://www.dolma.gov.np/public/api/utilities/cgt.php',
        'Origin': 'https://www.dolma.gov.np'
      },
    });

    const html = await response.text();
    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
      },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
