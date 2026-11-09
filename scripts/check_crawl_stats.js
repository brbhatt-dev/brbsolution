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
  if (!res.ok) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

// 1. Fetch Sitemaps Status
async function getSitemapsStatus(token, siteUrl) {
  const encSite = encodeURIComponent(siteUrl);
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encSite}/sitemaps`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

// 2. Inspect Single URL (Google URL Inspection API)
async function inspectUrl(token, siteUrl, inspectionUrl) {
  const url = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect';
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      inspectionUrl: inspectionUrl,
      siteUrl: siteUrl
    })
  });
  return res.json();
}

async function main() {
  console.log('Authenticating with Search Console API...');
  const token = await getAccessToken([
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/webmasters.readonly'
  ]);

  const siteUrl = 'sc-domain:brbhatta.com';

  console.log('\n--- 1. SITEMAPS CRAWL STATUS ---');
  const sitemaps = await getSitemapsStatus(token, siteUrl);
  console.log(JSON.stringify(sitemaps, null, 2));

  console.log('\n--- 2. URL INSPECTION (LIVE CRAWL & INDEX STATUS) ---');
  const testUrls = [
    'https://www.brbhatta.com/',
    'https://www.brbhatta.com/patro',
    'https://www.brbhatta.com/tools',
    'https://www.brbhatta.com/tools/survey-offices',
    'https://www.brbhatta.com/articles/government-land-valuation-minimum-rate-district-nepal'
  ];

  for (const u of testUrls) {
    console.log(`\nInspecting: ${u}`);
    try {
      const result = await inspectUrl(token, siteUrl, u);
      if (result.inspectionResult) {
        const idx = result.inspectionResult.indexStatusResult || {};
        console.log(`  Verdict:        ${idx.verdict || 'N/A'}`);
        console.log(`  Coverage State: ${idx.coverageState || 'N/A'}`);
        console.log(`  Last Crawl:     ${idx.lastCrawlTime || 'Not yet crawled'}`);
        console.log(`  Crawled As:     ${idx.crawledAs || 'N/A'}`);
        console.log(`  Page Fetch:     ${idx.pageFetchState || 'N/A'}`);
        console.log(`  Robots.txt:     ${idx.robotsTxtState || 'N/A'}`);
        console.log(`  Indexing:       ${idx.indexingState || 'N/A'}`);
        console.log(`  Google Canon:   ${idx.googleCanonical || 'N/A'}`);
      } else {
        console.log('  Result:', JSON.stringify(result));
      }
    } catch (e) {
      console.error(`  Error inspecting ${u}:`, e.message);
    }
    await new Promise(r => setTimeout(r, 300));
  }
}

main().catch(err => console.error('Error:', err));
