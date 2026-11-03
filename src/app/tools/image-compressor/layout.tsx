import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Image & Photo Compressor (लोकसेवा तथा अनलाइन फारम फोटो) | BR Bhatta",
  description: "सरकारी अनलाइन फारम, लोकसेवा आयोग, र मालपोत सिस्टमका लागि फोटो तथा हस्ताक्षरको साइज तुरुन्त २०० KB मुनि घटाउनुहोस्।",
  keywords: ["Image compressor Nepal","Loksewa photo compressor 200kb","Online photo resize Nepal","Signature photo compress","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/image-compressor",
  },
  openGraph: {
    title: "Online Image & Photo Compressor (लोकसेवा तथा अनलाइन फारम फोटो) | BR Bhatta",
    description: "सरकारी अनलाइन फारम, लोकसेवा आयोग, र मालपोत सिस्टमका लागि फोटो तथा हस्ताक्षरको साइज तुरुन्त २०० KB मुनि घटाउनुहोस्।",
    url: "https://www.brbhatta.com/tools/image-compressor",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Online Image & Photo Compressor (लोकसेवा तथा अनलाइन फारम फोटो) | BR Bhatta",
    description: "सरकारी अनलाइन फारम, लोकसेवा आयोग, र मालपोत सिस्टमका लागि फोटो तथा हस्ताक्षरको साइज तुरुन्त २०० KB मुनि घटाउनुहोस्।",
  },
};

export default function imagecompressorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
