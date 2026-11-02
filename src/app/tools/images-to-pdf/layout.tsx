import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'तस्विरबाट A4 PDF बनाउने टुल (Images to PDF Converter) | BR Bhatta',
  description: 'लालपुर्जा, ट्रेस नक्सा, नागरिकता तथा जग्गा कागजातका तस्विरहरूलाई स्तरीय A4 PDF मा बदल्नुहोस्।',
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/images-to-pdf',
  },
  openGraph: {
    title: 'तस्विरबाट A4 PDF बनाउने टुल (Images to PDF Converter) | BR Bhatta',
    description: 'लालपुर्जा, ट्रेस नक्सा, नागरिकता तथा जग्गा कागजातका तस्विरहरूलाई स्तरीय A4 PDF मा बदल्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/images-to-pdf',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'तस्विरबाट A4 PDF बनाउने टुल (Images to PDF Converter) | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'तस्विरबाट A4 PDF बनाउने टुल (Images to PDF Converter) | BR Bhatta',
    description: 'लालपुर्जा, ट्रेस नक्सा, नागरिकता तथा जग्गा कागजातका तस्विरहरूलाई स्तरीय A4 PDF मा बदल्नुहोस्।',
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
