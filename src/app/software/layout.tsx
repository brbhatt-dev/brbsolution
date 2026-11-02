import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'नापी तथा इन्जिनियरिङ सफ्टवेयर हब (Software & CAD Tools) | BR Bhatta',
  description: 'Land Solution Nepal, Hamro Kosh तथा AutoCAD LISP स्क्रिप्टहरूको आधिकारिक डाउनलोड तथा प्रयोग केन्द्र।',
  alternates: {
    canonical: 'https://www.brbhatta.com/software',
  },
  openGraph: {
    title: 'नापी तथा इन्जिनियरिङ सफ्टवेयर हब (Software & CAD Tools) | BR Bhatta',
    description: 'Land Solution Nepal, Hamro Kosh तथा AutoCAD LISP स्क्रिप्टहरूको आधिकारिक डाउनलोड तथा प्रयोग केन्द्र।',
    url: 'https://www.brbhatta.com/software',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'नापी तथा इन्जिनियरिङ सफ्टवेयर हब (Software & CAD Tools) | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'नापी तथा इन्जिनियरिङ सफ्टवेयर हब (Software & CAD Tools) | BR Bhatta',
    description: 'Land Solution Nepal, Hamro Kosh तथा AutoCAD LISP स्क्रिप्टहरूको आधिकारिक डाउनलोड तथा प्रयोग केन्द्र।',
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
