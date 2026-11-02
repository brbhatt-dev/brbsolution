import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Excel to KML / Google Earth Converter (नापी सर्भे टुल) | BR Bhatta',
  description: 'Total Station र GPS का कोअर्डिनेट्स (X, Y, Z / Easting, Northing) लाई सिधै Google Earth KML फाइलमा बदल्नुहोस्।',
  alternates: {
    canonical: 'https://www.brbhatta.com/tools/excel-to-kml',
  },
  openGraph: {
    title: 'Excel to KML / Google Earth Converter (नापी सर्भे टुल) | BR Bhatta',
    description: 'Total Station र GPS का कोअर्डिनेट्स (X, Y, Z / Easting, Northing) लाई सिधै Google Earth KML फाइलमा बदल्नुहोस्।',
    url: 'https://www.brbhatta.com/tools/excel-to-kml',
    siteName: 'BR Bhatta',
    locale: 'ne_NP',
    type: 'website',
    images: [
      {
        url: 'https://www.brbhatta.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Excel to KML / Google Earth Converter (नापी सर्भे टुल) | BR Bhatta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Excel to KML / Google Earth Converter (नापी सर्भे टुल) | BR Bhatta',
    description: 'Total Station र GPS का कोअर्डिनेट्स (X, Y, Z / Easting, Northing) लाई सिधै Google Earth KML फाइलमा बदल्नुहोस्।',
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
