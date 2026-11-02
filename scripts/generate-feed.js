const fs = require('fs');
const path = require('path');
const NepaliDate = require('nepali-date-converter').default || require('nepali-date-converter');

// Path to articles
const articlesFilePath = path.join(__dirname, '..', 'src', 'data', 'articles.ts');
const articlesContent = fs.readFileSync(articlesFilePath, 'utf8');

// Parse articles roughly or import if possible
function parseNepaliDigits(str) {
  if (!str) return '';
  const devanagariDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return String(str).replace(/[०-९]/g, (d) => devanagariDigits.indexOf(d));
}

const NEP_MONTHS = {
  'बैशाख': 1, 'वैशाख': 1,
  'जेठ': 2, 'ज्येष्ठ': 2,
  'असार': 3, 'आषाढ': 3,
  'साउन': 4, 'श्रावण': 4,
  'भदौ': 5, 'भाद्र': 5,
  'असोज': 6, 'आश्विन': 6,
  'कार्तिक': 7, 'कात्तिक': 7,
  'मंसिर': 8, 'मङ्गसिर': 8, 'मङ्सिर': 8,
  'पुस': 9, 'पौष': 9,
  'माघ': 10,
  'फागुन': 11, 'फाल्गुन': 11,
  'चैत': 12, 'चैत्र': 12
};

function getArticleDate(article) {
  if (article.createdAt) {
    const d = new Date(article.createdAt);
    if (!isNaN(d.getTime())) return d;
  }
  const dateStr = article.updatedDate || article.publishedDate || '';
  if (/^\d{4}-\d{2}/.test(dateStr)) {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d;
  }
  try {
    const clean = parseNepaliDigits(dateStr);
    const yearMatch = clean.match(/(20\d{2})/);
    const year = yearMatch ? parseInt(yearMatch[1], 10) : 2083;
    let month = 1;
    for (const [mName, mNum] of Object.entries(NEP_MONTHS)) {
      if (dateStr.includes(mName)) {
        month = mNum;
        break;
      }
    }
    let day = 1;
    const dayMatch = clean.match(/\s+(\d{1,2})\b/);
    if (dayMatch) {
      day = Math.min(Math.max(parseInt(dayMatch[1], 10), 1), 32);
    }
    const nepDate = new NepaliDate(year, month - 1, day);
    return nepDate.toJsDate();
  } catch (e) {
    return new Date();
  }
}

// Extract article objects from articles.ts
function extractArticles() {
  const blocks = articlesContent.split(/\{\s*slug:\s*['"]/);
  const list = [];

  blocks.slice(1).forEach((b) => {
    const slugM = b.match(/^([^'"]+)/);
    const titleM = b.match(/title:\s*['"]([^'"]+)['"]/);
    const summaryM = b.match(/summary:\s*['"]([^'"]+)['"]/);
    const catM = b.match(/categoryNepali:\s*['"]([^'"]+)['"]/);
    const pubM = b.match(/publishedDate:\s*['"]([^'"]+)['"]/);
    const updM = b.match(/updatedDate:\s*['"]([^'"]+)['"]/);
    const createdM = b.match(/createdAt:\s*['"]([^'"]+)['"]/);

    if (slugM && titleM) {
      list.push({
        slug: slugM[1],
        title: titleM[1],
        summary: summaryM ? summaryM[1] : '',
        category: catM ? catM[1] : 'जग्गा कानुन',
        publishedDate: pubM ? pubM[1] : '',
        updatedDate: updM ? updM[1] : '',
        createdAt: createdM ? createdM[1] : undefined
      });
    }
  });

  return list;
}

const articles = extractArticles();

// Sort descending by date (newest first)
articles.sort((a, b) => getArticleDate(b).getTime() - getArticleDate(a).getTime());

const baseUrl = 'https://www.brbhatta.com';
const buildDate = new Date().toUTCString();

const itemsXml = articles.map(a => {
  const pubDate = getArticleDate(a).toUTCString();
  const url = `${baseUrl}/articles/${a.slug}`;
  return `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${a.category}]]></category>
      <description><![CDATA[${a.summary}]]></description>
      <author>brbhatta@brbhatta.com (BR Bhatta)</author>
    </item>`;
}).join('\n');

const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>BR Bhatta &amp; Land Solution Nepal — नापी, मालपोत तथा प्राविधिक ज्ञान केन्द्र</title>
    <link>${baseUrl}</link>
    <description>नेपालमा जग्गा नापजाँच, कित्ताकाट कानुन, मालपोत दस्तुर, अंशबन्डा, र AutoCAD LSP सम्बन्धी आधिकारिक तथा विस्तृत गाइडहरू।</description>
    <language>ne</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${baseUrl}/logo.png</url>
      <title>BR Bhatta</title>
      <link>${baseUrl}</link>
    </image>
    <copyright>Copyright 2026 BR Bhatta. All rights reserved.</copyright>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <generator>BR Bhatta Custom Feed Engine</generator>
${itemsXml}
  </channel>
</rss>
`;

const publicDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(publicDir, 'feed.xml'), rssXml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml, 'utf8');

console.log(`✅ SUCCESS: Generated public/feed.xml and public/rss.xml with ${articles.length} articles!`);
