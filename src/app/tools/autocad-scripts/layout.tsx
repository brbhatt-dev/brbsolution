import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AutoCAD LISP Scripts for Surveyors Nepal | BR Bhatta',
  description: 'नेपाल नापी तथा इन्जिनियरिङका लागि कित्ता एरिया, पार्सल डिभिजन र ग्रिड अटोमेशन लिसप कोडहरू।',
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/autocad-scripts',
  },
  openGraph: {
    title: 'Free AutoCAD LISP Scripts for Surveyors Nepal | BR Bhatta',
    description: 'नेपाल नापी तथा इन्जिनियरिङका लागि कित्ता एरिया, पार्सल डिभिजन र ग्रिड अटोमेशन लिसप कोडहरू।',
    url: 'https://www.brbhatta.com/tools/autocad-scripts',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free AutoCAD LISP Scripts for Surveyors Nepal | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AutoCAD LISP Scripts for Surveyors Nepal | BR Bhatta',
    description: 'नेपाल नापी तथा इन्जिनियरिङका लागि कित्ता एरिया, पार्सल डिभिजन र ग्रिड अटोमेशन लिसप कोडहरू।',
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
