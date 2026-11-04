import { MetadataRoute } from 'next';
import { ARTICLES_DATA } from '@/data/articles';
import { sortArticlesDescending } from '@/lib/articlesSort';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.brbhatta.com';
  const currentDate = new Date();

  const sortedArticles = sortArticlesDescending(ARTICLES_DATA);
  const articleEntries: MetadataRoute.Sitemap = sortedArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/land-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/malpot-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/aamin-quiz`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/virtual-amin-game`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/tools/kitta-kat-checker`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/anshabanda-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/setback-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/construction-cost-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/loan-emi-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/real-estate-saait-calendar`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/property-dispute-wizard`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/malpot-valuation-rates`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/municipal-bye-laws`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/jagga-pass-checklist`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/tools/jagga-namsari-guide`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/tools/jagga-rokka-phukuwa`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/tools/lalpurja-pratilipi-guide`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.96,
    },
    {
      url: `${baseUrl}/tools/multi-kitta-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/survey-offices`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/lrims-online-services`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    {
      url: `${baseUrl}/tools/cadastral-map-symbols`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    {
      url: `${baseUrl}/tools/driving-license-quiz`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },

    {
      url: `${baseUrl}/tools/merokitta-online-naksa`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/aamin-syllabus`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/kitta-qr`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/autocad-scripts`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/software`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/notices`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.98,
    },
    {
      url: `${baseUrl}/land-solution`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/excel-to-kml`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/image-compressor`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/images-to-pdf`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/legal-templates`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/number-to-words`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/pdf-tools`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/plot-visualizer`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/preeti-to-unicode`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tools/tax-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/laws`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];

  return [...corePages, ...articleEntries];
}
