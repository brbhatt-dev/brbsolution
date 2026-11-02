const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Paths
const projectRoot = path.resolve(__dirname, '..');
const possibleKeyPaths = [
  path.join(projectRoot, 'google index.json'),
  path.join(projectRoot, '..', 'IMTECHBOSS', 'google index.json'),
  path.join(__dirname, 'google index.json')
];

let keyPath = null;
for (const p of possibleKeyPaths) {
  if (fs.existsSync(p)) {
    keyPath = p;
    break;
  }
}

if (!keyPath) {
  console.error('❌ Error: "google index.json" service account key file not found!');
  process.exit(1);
}

const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
const localSitemapPath = path.join(projectRoot, 'out', 'sitemap.xml');

function base64Url(str) {
  return Buffer.from(str).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

// Generate Google OAuth2 Bearer token using Service Account private key
async function getAccessToken() {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: key.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
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
    body: 'grant_type=' + encodeURIComponent('urn:ietf:params:oauth:grant-type:jwt-bearer') + '&assertion=' + encodeURIComponent(jwt)
  });

  const data = await res.json();
  if (!data.access_token) {
    throw new Error('Failed to obtain Google access token: ' + JSON.stringify(data));
  }
  return data.access_token;
}

// Submit a single URL to Google Indexing API
async function publishUrl(token, url, type = 'URL_UPDATED') {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ url, type })
  });

  const body = await res.json();
  return { status: res.status, ok: res.ok, body };
}

// Extract URLs from live or local sitemap.xml
async function getSitemapUrls() {
  let content = '';
  try {
    const res = await fetch('https://www.brbhatta.com/sitemap.xml');
    if (res.ok) {
      content = await res.text();
    }
  } catch (e) {
    // fallback to local
  }

  if (!content && fs.existsSync(localSitemapPath)) {
    content = fs.readFileSync(localSitemapPath, 'utf8');
  }

  const urls = [];
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function main() {
  console.log('======================================================================');
  console.log('   GOOGLE OFFICIAL INSTANT INDEXING API — BR BHATTA (brbhatta.com)');
  console.log('======================================================================');
  console.log(`🔑 Service Account: ${key.client_email}`);
  console.log(`📁 Project ID:       ${key.project_id}`);
  console.log('----------------------------------------------------------------------\n');

  console.log('Authenticating with Google OAuth2...');
  let token;
  try {
    token = await getAccessToken();
    console.log('✅ Google OAuth2 Token acquired successfully!\n');
  } catch (err) {
    console.error('❌ Authentication failed:', err.message);
    process.exit(1);
  }

  // Check CLI arguments for specific URL or mode
  const args = process.argv.slice(2);
  let targetUrls = [];

  if (args.length > 0 && args[0].startsWith('http')) {
    targetUrls = [args[0]];
    console.log(`Targeting single URL: ${args[0]}`);
  } else {
    const allUrls = await getSitemapUrls();
    console.log(`Found ${allUrls.length} URLs in sitemap.xml.`);

    if (args.includes('--all')) {
      targetUrls = allUrls;
      console.log(`Mode: Indexing ALL ${targetUrls.length} URLs in sitemap...`);
    } else {
      targetUrls = allUrls.slice(0, 25);
      console.log(`Mode: Indexing TOP ${targetUrls.length} priority URLs (use --all to index all 91+ URLs)...`);
    }
  }

  console.log('----------------------------------------------------------------------\n');

  let successCount = 0;
  let permissionDenied = false;

  for (let i = 0; i < targetUrls.length; i++) {
    const u = targetUrls[i];
    process.stdout.write(`[${i + 1}/${targetUrls.length}] Publishing: ${u}... `);

    try {
      const res = await publishUrl(token, u);
      if (res.ok) {
        successCount++;
        const notifyTime = res.body?.urlNotificationMetadata?.latestUpdate?.notifyTime || 'Done';
        console.log(`✅ 200 OK (${notifyTime})`);
      } else if (res.status === 403 && res.body?.error?.message?.includes('Permission denied')) {
        permissionDenied = true;
        console.log('❌ 403 Permission Denied (Search Console Ownership needed)');
        break;
      } else {
        console.log(`❌ HTTP ${res.status}: ${res.body?.error?.message || JSON.stringify(res.body)}`);
      }
    } catch (e) {
      console.log(`❌ Network Error: ${e.message}`);
    }

    // Google API quota pace (600 requests / minute)
    await new Promise(r => setTimeout(r, 200));
  }

  console.log('\n======================================================================');
  if (permissionDenied) {
    console.log('⚠️  STEP REQUIRED IN GOOGLE SEARCH CONSOLE:');
    console.log('----------------------------------------------------------------------');
    console.log('Google Indexing API rejected the request because the service account');
    console.log('email is not yet added as an OWNER in your Search Console property.');
    console.log('');
    console.log('Follow these 4 simple steps:');
    console.log('1. Open: https://search.google.com/search-console');
    console.log('2. Select property: "brbhatta.com" or "https://www.brbhatta.com/"');
    console.log('3. Go to: Settings (बायाँ मेनूमा तल) > Users and permissions > "Add user"');
    console.log('4. Email Address: ' + key.client_email);
    console.log('5. Permission: "Owner"');
    console.log('6. Click "Add"');
    console.log('');
    console.log('Once added, run this tool again to instantly push all URLs to Google!');
    console.log('======================================================================');
  } else {
    console.log(`🎉 SUCCESS: ${successCount} URLs submitted to Google Instant Indexing API!`);
    console.log('======================================================================');
  }
}

main().catch(err => console.error('Fatal error:', err));
