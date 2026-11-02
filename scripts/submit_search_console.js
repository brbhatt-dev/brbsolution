const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const key = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'google index.json'), 'utf8'));

function base64Url(str) {
  return Buffer.from(str).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getAccessToken(scopes) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: key.client_email,
    scope: scopes.join(' '),
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const encodedHeader = base64Url(JSON.stringify(header));
  const encodedClaim = base64Url(JSON.stringify(claim));
  const signInput = `${encodedHeader}.${encodedClaim}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  const signature = signer.sign(key.private_key, 'base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const jwt = `${signInput}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Token error: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function run() {
  console.log('======================================================================');
  console.log('   GOOGLE SEARCH CONSOLE & INDEXING API FULL SUBMISSION');
  console.log('======================================================================');
  console.log('Service Account:', key.client_email);

  const token = await getAccessToken([
    'https://www.googleapis.com/auth/indexing',
    'https://www.googleapis.com/auth/webmasters'
  ]);
  console.log('✅ Acquired OAuth2 Token with Search Console & Indexing Scopes!');

  // 1. Check Search Console Sites
  console.log('\n--- 1. Querying Google Search Console Sites ---');
  try {
    const sitesRes = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const sitesData = await sitesRes.json();
    console.log('Search Console Sites Response Status:', sitesRes.status);
    console.log('Sites found:', JSON.stringify(sitesData, null, 2));

    // Try submitting sitemaps to detected sites or standard URLs
    const siteUrlsToTry = [];
    if (sitesData.siteEntry && Array.isArray(sitesData.siteEntry)) {
      sitesData.siteEntry.forEach(s => siteUrlsToTry.push(s.siteUrl));
    }
    // Also include default variants
    ['https://www.brbhatta.com/', 'sc-domain:brbhatta.com'].forEach(u => {
      if (!siteUrlsToTry.includes(u)) siteUrlsToTry.push(u);
    });

    const sitemaps = [
      'https://www.brbhatta.com/sitemap.xml',
      'https://www.brbhatta.com/feed.xml',
      'https://www.brbhatta.com/rss.xml'
    ];

    console.log('\n--- 2. Submitting Sitemaps & Feeds to Google Search Console ---');
    for (const siteUrl of siteUrlsToTry) {
      console.log(`\nTarget Site: ${siteUrl}`);
      for (const sm of sitemaps) {
        const encSite = encodeURIComponent(siteUrl);
        const encSm = encodeURIComponent(sm);
        const smUrl = `https://www.googleapis.com/webmasters/v3/sites/${encSite}/sitemaps/${encSm}`;
        try {
          const putRes = await fetch(smUrl, {
            method: 'PUT',
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log(`  Submit [${sm}]: Status ${putRes.status} ${putRes.status === 204 || putRes.status === 200 ? '✅ SUCCESS' : '❌'}`);
          if (!putRes.ok && putRes.status !== 204) {
            const errText = await putRes.text();
            console.log(`    Detail: ${errText}`);
          }
        } catch (e) {
          console.log(`  Error submitting ${sm}: ${e.message}`);
        }
      }
    }
  } catch (err) {
    console.log('Error querying Search Console:', err.message);
  }

  // 3. Submit Top and Feed URLs to Google Indexing API
  console.log('\n--- 3. Submitting to Google Official Indexing API ---');
  const urlsToPublish = [
    'https://www.brbhatta.com',
    'https://www.brbhatta.com/articles',
    'https://www.brbhatta.com/feed.xml',
    'https://www.brbhatta.com/rss.xml',
    'https://www.brbhatta.com/sitemap.xml',
    'https://www.brbhatta.com/articles/bank-land-loan-valuation-rules-process-nepal',
    'https://www.brbhatta.com/articles/foreign-country-land-buying-power-of-attorney-nepal-embassy',
    'https://www.brbhatta.com/articles/river-high-tension-wire-forest-boundary-land-setback-rules-nepal',
    'https://www.brbhatta.com/articles/kitta-kat-process-rules-nepal-land-reform',
    'https://www.brbhatta.com/articles/malpot-land-registration-fee-tax-calculator-nepal'
  ];

  for (let i = 0; i < urlsToPublish.length; i++) {
    const u = urlsToPublish[i];
    try {
      const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          url: u,
          type: 'URL_UPDATED'
        })
      });
      const d = await res.json();
      if (res.ok) {
        console.log(`[${i + 1}/${urlsToPublish.length}] Indexing API: ${u} -> ✅ 200 OK`);
      } else {
        console.log(`[${i + 1}/${urlsToPublish.length}] Indexing API: ${u} -> ❌ ${res.status}: ${JSON.stringify(d)}`);
      }
    } catch (e) {
      console.log(`Error indexing ${u}: ${e.message}`);
    }
  }

  console.log('\n======================================================================');
  console.log('🎉 SUBMISSION PROCESS COMPLETE!');
  console.log('======================================================================');
}

run();
