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

async function queryAnalytics(token, siteUrl, requestBody) {
  const encSite = encodeURIComponent(siteUrl);
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encSite}/searchAnalytics/query`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });
  return res.json();
}

async function main() {
  const token = await getAccessToken([
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/webmasters.readonly'
  ]);

  const siteUrl = 'sc-domain:brbhatta.com';

  const today = new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() - 2);
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 28);

  const startStr = startDate.toISOString().split('T')[0];
  const endStr = endDate.toISOString().split('T')[0];

  // 1. Overall Summary
  const overall = await queryAnalytics(token, siteUrl, {
    startDate: startStr,
    endDate: endStr
  });

  // 2. Top Queries (Sorted by clicks)
  const topQueries = await queryAnalytics(token, siteUrl, {
    startDate: startStr,
    endDate: endStr,
    dimensions: ['query'],
    rowLimit: 20
  });

  // 3. Top Pages
  const topPages = await queryAnalytics(token, siteUrl, {
    startDate: startStr,
    endDate: endStr,
    dimensions: ['page'],
    rowLimit: 15
  });

  // 4. Devices
  const devices = await queryAnalytics(token, siteUrl, {
    startDate: startStr,
    endDate: endStr,
    dimensions: ['device']
  });

  // 5. Countries
  const countries = await queryAnalytics(token, siteUrl, {
    startDate: startStr,
    endDate: endStr,
    dimensions: ['country'],
    rowLimit: 5
  });

  // 6. Recent Daily Trend (Past 7 available days)
  const dailyTrend = await queryAnalytics(token, siteUrl, {
    startDate: startStr,
    endDate: endStr,
    dimensions: ['date']
  });

  const stats = {
    period: `${startStr} to ${endStr}`,
    overall: overall.rows ? overall.rows[0] : null,
    devices: devices.rows || [],
    countries: countries.rows || [],
    topQueries: (topQueries.rows || []).sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions),
    topPages: (topPages.rows || []).sort((a, b) => b.clicks - a.clicks),
    dailyTrend: (dailyTrend.rows || []).slice(-7)
  };

  console.log(JSON.stringify(stats, null, 2));
}

main().catch(err => console.error('Error:', err));
