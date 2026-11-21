import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'Mediapartners-Google',
          'AdsBot-Google',
          'AdsBot-Google-Mobile',
        ],
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/builder',
          '/notices',
          '/demo/',
          '/demo',
          '/test',
          '/tools/test',
          '/app-privacy.html',
          '/brpatro-privacy.html',
          '/privacy.html',
          '/cdn-cgi/',
          '/*?q=*',
          '/*?s=*',
        ],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'Google-Extended',
          'PerplexityBot',
          'ClaudeBot',
          'Applebot-Extended',
        ],
        allow: '/',
        disallow: ['/admin', '/admin/', '/builder', '/cdn-cgi/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/',
          '/demo/',
          '/demo',
          '/test',
          '/tools/test',
          '/cdn-cgi/',
          '/*?q=*',
          '/*?s=*',
        ],
      },
    ],
    sitemap: 'https://www.brbhatta.com/sitemap.xml',
    host: 'https://www.brbhatta.com',
  };
}
