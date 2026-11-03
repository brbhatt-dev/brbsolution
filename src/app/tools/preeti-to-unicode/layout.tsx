import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Preeti to Unicode Converter (प्रीतिबाट नेपाली युनिकोड रूपान्तरण) | BR Bhatta",
  description: "परम्परागत प्रीति वा कान्तिपुर फन्टलाई शुद्ध नेपाली युनिकोडमा तत्काल बदल्नुहोस्। सरकारी कामकाज, निवेदन तथा फारम भर्न १००% शुद्ध कन्भर्टर।",
  keywords: ["Preeti to Unicode","प्रीति युनिकोड कन्भर्टर","Nepali Unicode Converter","Kantipur to Unicode","Nepali typing converter","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/preeti-to-unicode",
  },
  openGraph: {
    title: "Preeti to Unicode Converter (प्रीतिबाट नेपाली युनिकोड रूपान्तरण) | BR Bhatta",
    description: "परम्परागत प्रीति वा कान्तिपुर फन्टलाई शुद्ध नेपाली युनिकोडमा तत्काल बदल्नुहोस्। सरकारी कामकाज, निवेदन तथा फारम भर्न १००% शुद्ध कन्भर्टर।",
    url: "https://www.brbhatta.com/tools/preeti-to-unicode",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Preeti to Unicode Converter (प्रीतिबाट नेपाली युनिकोड रूपान्तरण) | BR Bhatta",
    description: "परम्परागत प्रीति वा कान्तिपुर फन्टलाई शुद्ध नेपाली युनिकोडमा तत्काल बदल्नुहोस्। सरकारी कामकाज, निवेदन तथा फारम भर्न १००% शुद्ध कन्भर्टर।",
  },
};

export default function preetitounicodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
