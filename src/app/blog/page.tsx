import ArticlesHubPage, { metadata as articlesMetadata } from '../articles/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...articlesMetadata,
  title: 'ब्लग तथा आधिकारिक लेखहरू (Blog & Articles) | BR Bhatta',
  description: 'नेपालमा जग्गा नापजाँच, कित्ताकाट कानुन, मालपोत दस्तुर, अंशबन्डा, र AutoCAD सम्बन्धी आधिकारिक तथा विस्तृत ब्लग र प्राविधिक गाइडहरू।',
  alternates: {
    canonical: 'https://www.brbhatta.com/blog',
  },
};

export default ArticlesHubPage;
