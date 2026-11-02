import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preeti to Unicode Converter Nepal (प्रीति युनिकोड रूपान्तरण) | BR Bhatta',
  description: 'नेपाली प्रीति फन्टलाई युनिकोडमा तुरुन्त रूपान्तरण गर्ने आधिकारिक अनलाइन टुल। 100% सटीक, छिटो र निःशुल्क।',
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/preeti-to-unicode',
  },
  openGraph: {
    title: 'Preeti to Unicode Converter Nepal (प्रीति युनिकोड रूपान्तरण) | BR Bhatta',
    description: 'नेपाली प्रीति फन्टलाई युनिकोडमा तुरुन्त रूपान्तरण गर्ने आधिकारिक अनलाइन टुल। 100% सटीक, छिटो र निःशुल्क।',
    url: 'https://www.brbhatta.com/tools/preeti-to-unicode',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Preeti to Unicode Converter Nepal (प्रीति युनिकोड रूपान्तरण) | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preeti to Unicode Converter Nepal (प्रीति युनिकोड रूपान्तरण) | BR Bhatta',
    description: 'नेपाली प्रीति फन्टलाई युनिकोडमा तुरुन्त रूपान्तरण गर्ने आधिकारिक अनलाइन टुल। 100% सटीक, छिटो र निःशुल्क।',
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
