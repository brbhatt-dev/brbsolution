import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Number to Nepali Words Converter (अंकबाट नेपाली अक्षरमा रूपान्तरण) | BR Bhatta",
  description: "चेक, भौचर, बैनाबट्टा र तमसुक लेख्नका लागि कुनै पनि रकमलाई शुद्ध नेपाली अक्षर (शब्दहरू) मा रूपान्तरण गर्नुहोस्।",
  keywords: ["Number to words Nepali","अंकबाट अक्षरमा रूपान्तरण","Nepali Cheque writing helper","Rakam Aksharama Nepal","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/number-to-words",
  },
  openGraph: {
    title: "Number to Nepali Words Converter (अंकबाट नेपाली अक्षरमा रूपान्तरण) | BR Bhatta",
    description: "चेक, भौचर, बैनाबट्टा र तमसुक लेख्नका लागि कुनै पनि रकमलाई शुद्ध नेपाली अक्षर (शब्दहरू) मा रूपान्तरण गर्नुहोस्।",
    url: "https://www.brbhatta.com/tools/number-to-words",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Number to Nepali Words Converter (अंकबाट नेपाली अक्षरमा रूपान्तरण) | BR Bhatta",
    description: "चेक, भौचर, बैनाबट्टा र तमसुक लेख्नका लागि कुनै पनि रकमलाई शुद्ध नेपाली अक्षर (शब्दहरू) मा रूपान्तरण गर्नुहोस्।",
  },
};

export default function numbertowordsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
