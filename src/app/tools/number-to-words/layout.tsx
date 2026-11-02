import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'अंकलाई नेपाली तथा अंग्रेजी अक्षरमा बदल्ने टुल (Number to Words Nepal) | BR Bhatta',
  description: 'जग्गाको थैली अंक, बैना रकम, चेक तथा भौचरका लागि रकमलाई नेपाली (लाख, करोड) र अंग्रेजी शब्दमा रूपान्तरण गर्नुहोस्।',
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/number-to-words',
  },
  openGraph: {
    title: 'अंकलाई नेपाली तथा अंग्रेजी अक्षरमा बदल्ने टुल (Number to Words Nepal) | BR Bhatta',
    description: 'जग्गाको थैली अंक, बैना रकम, चेक तथा भौचरका लागि रकमलाई नेपाली (लाख, करोड) र अंग्रेजी शब्दमा रूपान्तरण गर्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/number-to-words',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'अंकलाई नेपाली तथा अंग्रेजी अक्षरमा बदल्ने टुल (Number to Words Nepal) | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'अंकलाई नेपाली तथा अंग्रेजी अक्षरमा बदल्ने टुल (Number to Words Nepal) | BR Bhatta',
    description: 'जग्गाको थैली अंक, बैना रकम, चेक तथा भौचरका लागि रकमलाई नेपाली (लाख, करोड) र अंग्रेजी शब्दमा रूपान्तरण गर्नुहोस्।',
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
