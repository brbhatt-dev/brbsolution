import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Excel to KML Converter (नेपाल नापी, GPS कोअर्डिनेट तथा Google Earth) | BR Bhatta",
  description: "एक्सेल फाइलमा भएका कोअर्डिनेट (Latitude/Longitude वा UTM) लाई Google Earth KML फाइलमा एकै क्लिकमा बदल्नुहोस्। नापी तथा जीआईएस फिल्ड वर्कको लागि उपयोगी।",
  keywords: ["Excel to KML converter Nepal","Google Earth KML survey coordinates","UTM to KML converter","GPS points to Google Earth","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/excel-to-kml",
  },
  openGraph: {
    title: "Excel to KML Converter (नेपाल नापी, GPS कोअर्डिनेट तथा Google Earth) | BR Bhatta",
    description: "एक्सेल फाइलमा भएका कोअर्डिनेट (Latitude/Longitude वा UTM) लाई Google Earth KML फाइलमा एकै क्लिकमा बदल्नुहोस्। नापी तथा जीआईएस फिल्ड वर्कको लागि उपयोगी।",
    url: "https://www.brbhatta.com/tools/excel-to-kml",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Excel to KML Converter (नेपाल नापी, GPS कोअर्डिनेट तथा Google Earth) | BR Bhatta",
    description: "एक्सेल फाइलमा भएका कोअर्डिनेट (Latitude/Longitude वा UTM) लाई Google Earth KML फाइलमा एकै क्लिकमा बदल्नुहोस्। नापी तथा जीआईएस फिल्ड वर्कको लागि उपयोगी।",
  },
};

export default function exceltokmlLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
