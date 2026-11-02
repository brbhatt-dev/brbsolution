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
