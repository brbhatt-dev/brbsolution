import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'जग्गा बैना तथा कानुनी लिखत ढाँचाहरू (Legal Deed Templates Nepal) | BR Bhatta',
  description: 'नेपालमा जग्गा खरिदबिक्री बैना कागज, घरभाडा सम्झौता, र मञ्जुरीनामाको आधिकारिक कानुनी ढाँचा।',
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/legal-templates',
  },
  openGraph: {
    title: 'जग्गा बैना तथा कानुनी लिखत ढाँचाहरू (Legal Deed Templates Nepal) | BR Bhatta',
    description: 'नेपालमा जग्गा खरिदबिक्री बैना कागज, घरभाडा सम्झौता, र मञ्जुरीनामाको आधिकारिक कानुनी ढाँचा।',
    url: 'https://www.brbhatta.com/tools/legal-templates',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'जग्गा बैना तथा कानुनी लिखत ढाँचाहरू (Legal Deed Templates Nepal) | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'जग्गा बैना तथा कानुनी लिखत ढाँचाहरू (Legal Deed Templates Nepal) | BR Bhatta',
    description: 'नेपालमा जग्गा खरिदबिक्री बैना कागज, घरभाडा सम्झौता, र मञ्जुरीनामाको आधिकारिक कानुनी ढाँचा।',
    images: ['https://www.brbhatta.com/og-image.png'],
  },
};

export default function ToolRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <React.Fragment>{children}</React.Fragment>;
}
