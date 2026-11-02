import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'नापी तथा लोकसेवा फोटो कम्प्रेसर (<200KB Image Compressor) | BR Bhatta',
  description: 'नेपाल लोकसेवा आयोग, मालपोत र नापी अनलाइन फारमका लागि फोटो र हस्ताक्षर २००KB भन्दा कम बनाउने टुल।',
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/image-compressor',
  },
  openGraph: {
    title: 'नापी तथा लोकसेवा फोटो कम्प्रेसर (<200KB Image Compressor) | BR Bhatta',
    description: 'नेपाल लोकसेवा आयोग, मालपोत र नापी अनलाइन फारमका लागि फोटो र हस्ताक्षर २००KB भन्दा कम बनाउने टुल।',
    url: 'https://www.brbhatta.com/tools/image-compressor',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'नापी तथा लोकसेवा फोटो कम्प्रेसर (<200KB Image Compressor) | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'नापी तथा लोकसेवा फोटो कम्प्रेसर (<200KB Image Compressor) | BR Bhatta',
    description: 'नेपाल लोकसेवा आयोग, मालपोत र नापी अनलाइन फारमका लागि फोटो र हस्ताक्षर २००KB भन्दा कम बनाउने टुल।',
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
