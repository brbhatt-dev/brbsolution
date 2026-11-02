const fs = require('fs');
const path = require('path');

const host = 'www.brbhatta.com';
const key = 'c7d1e89b4f2a41d08e92a11b6d98c57e';
const keyLocation = `https://${host}/${key}.txt`;

async function getSitemapUrls() {
  let content = '';
  try {
    const res = await fetch(`https://${host}/sitemap.xml`);
    if (res.ok) {
      content = await res.text();
    }
  } catch (e) {}

  if (!content) {
    const local = path.join(__dirname, '..', 'out', 'sitemap.xml');
    if (fs.existsSync(local)) content = fs.readFileSync(local, 'utf8');
  }

  const urls = [];
  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function submitIndexNow() {
  console.log('======================================================================');
  console.log('   INDEXNOW INSTANT SUBMISSION (Bing, Yandex, Seznam, Naver)');
  console.log('======================================================================');
  
  const urls = await getSitemapUrls();
  console.log(`Found ${urls.length} URLs to submit.`);

  const payload = {
    host: host,
    key: key,
    keyLocation: keyLocation,
    urlList: urls
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });

    console.log(`Status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log('🎉 SUCCESS: All URLs successfully submitted to IndexNow network!');
    } else {
      const text = await res.text();
      console.log('Response:', text);
    }
  } catch (err) {
    console.error('❌ Error submitting to IndexNow:', err.message);
  }
}

submitIndexNow();
