import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PDF मर्ज तथा कम्प्रेस टुल (PDF Tools Nepal) | BR Bhatta',
  description: 'नापी तथा मालपोत कागजातका PDF फाइलहरू सजिलै मर्ज, स्प्लिट र कम्प्रेस गर्नुहोस्।',
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/pdf-tools',
  },
  openGraph: {
    title: 'PDF मर्ज तथा कम्प्रेस टुल (PDF Tools Nepal) | BR Bhatta',
    description: 'नापी तथा मालपोत कागजातका PDF फाइलहरू सजिलै मर्ज, स्प्लिट र कम्प्रेस गर्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/pdf-tools',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PDF मर्ज तथा कम्प्रेस टुल (PDF Tools Nepal) | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF मर्ज तथा कम्प्रेस टुल (PDF Tools Nepal) | BR Bhatta',
    description: 'नापी तथा मालपोत कागजातका PDF फाइलहरू सजिलै मर्ज, स्प्लिट र कम्प्रेस गर्नुहोस्।',
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
