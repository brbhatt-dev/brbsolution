import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Images to PDF Converter (फोटोहरूबाट पीडीएफ बनाउनुहोस्) | BR Bhatta",
  description: "मोबाइलबाट खिचेका लालपुर्जा, नागरिकता र जग्गा कागजातका फोटोहरूलाई उच्च गुणस्तरको एकल पीडीएफ फाइलमा रूपान्तरण गर्नुहोस्।",
  keywords: ["Images to PDF converter Nepal","JPG to PDF online","Photo to PDF document","Lalpurja scan to PDF","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/images-to-pdf",
  },
  openGraph: {
    title: "Images to PDF Converter (फोटोहरूबाट पीडीएफ बनाउनुहोस्) | BR Bhatta",
    description: "मोबाइलबाट खिचेका लालपुर्जा, नागरिकता र जग्गा कागजातका फोटोहरूलाई उच्च गुणस्तरको एकल पीडीएफ फाइलमा रूपान्तरण गर्नुहोस्।",
    url: "https://www.brbhatta.com/tools/images-to-pdf",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Images to PDF Converter (फोटोहरूबाट पीडीएफ बनाउनुहोस्) | BR Bhatta",
    description: "मोबाइलबाट खिचेका लालपुर्जा, नागरिकता र जग्गा कागजातका फोटोहरूलाई उच्च गुणस्तरको एकल पीडीएफ फाइलमा रूपान्तरण गर्नुहोस्।",
  },
};

export default function imagestopdfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
