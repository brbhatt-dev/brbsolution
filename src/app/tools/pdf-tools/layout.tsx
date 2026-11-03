import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Free PDF Tools (PDF Merge, Split & Compress) | BR Bhatta",
  description: "लालपुर्जा, नक्सा ट्रेस र सरकारी कागजातका पीडीएफ फाइलहरूलाई सुरक्षित रूपमा जोड्नुहोस् (Merge), टुक्राउनुहोस् (Split) वा साइज घटाउनुहोस्।",
  keywords: ["PDF Merge Nepal","Free PDF tools online","Combine PDF documents","Lalpurja PDF resize","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/pdf-tools",
  },
  openGraph: {
    title: "Free PDF Tools (PDF Merge, Split & Compress) | BR Bhatta",
    description: "लालपुर्जा, नक्सा ट्रेस र सरकारी कागजातका पीडीएफ फाइलहरूलाई सुरक्षित रूपमा जोड्नुहोस् (Merge), टुक्राउनुहोस् (Split) वा साइज घटाउनुहोस्।",
    url: "https://www.brbhatta.com/tools/pdf-tools",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Free PDF Tools (PDF Merge, Split & Compress) | BR Bhatta",
    description: "लालपुर्जा, नक्सा ट्रेस र सरकारी कागजातका पीडीएफ फाइलहरूलाई सुरक्षित रूपमा जोड्नुहोस् (Merge), टुक्राउनुहोस् (Split) वा साइज घटाउनुहोस्।",
  },
};

export default function pdftoolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
