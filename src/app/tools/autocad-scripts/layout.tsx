import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AutoCAD LISP (LSP) Scripts for Nepal Surveying & Land Cadastre | BR Bhatta",
  description: "नेपालको नापी नक्सा तथा क्याड अटोमेसनका लागि निःशुल्क AutoCAD AutoLISP (.lsp) स्क्रिप्टहरू। पोलिलाइन क्षेत्रफललाई एकै क्लिकमा रोपनी-आना र बिघा-कट्ठामा बदल्नुहोस्।",
  keywords: ["AutoCAD LSP scripts Nepal","AutoLISP land area survey","Ropani Bigha CAD script","Polyline area label LISP","Nepal Survey CAD automation","BR Bhatta"],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/autocad-scripts",
  },
  openGraph: {
    title: "AutoCAD LISP (LSP) Scripts for Nepal Surveying & Land Cadastre | BR Bhatta",
    description: "नेपालको नापी नक्सा तथा क्याड अटोमेसनका लागि निःशुल्क AutoCAD AutoLISP (.lsp) स्क्रिप्टहरू। पोलिलाइन क्षेत्रफललाई एकै क्लिकमा रोपनी-आना र बिघा-कट्ठामा बदल्नुहोस्।",
    url: "https://www.brbhatta.com/tools/autocad-scripts",
    siteName: 'BR Bhatta | Land Solution',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AutoCAD LISP (LSP) Scripts for Nepal Surveying & Land Cadastre | BR Bhatta",
    description: "नेपालको नापी नक्सा तथा क्याड अटोमेसनका लागि निःशुल्क AutoCAD AutoLISP (.lsp) स्क्रिप्टहरू। पोलिलाइन क्षेत्रफललाई एकै क्लिकमा रोपनी-आना र बिघा-कट्ठामा बदल्नुहोस्।",
  },
};

export default function autocadscriptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
