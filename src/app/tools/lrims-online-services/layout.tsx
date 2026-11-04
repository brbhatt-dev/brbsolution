import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LRIMS अनलाइन जग्गा सेवा, रोक्का/फुकुवा तथा न्यूनतम मूल्याङ्कन हब | DOLRM Nepal | BR Bhatta",
  description: "भूमिसुधार तथा मालपोत विभाग (dolrm.gov.np) को LRIMS अनलाइन टोकन लिने तरिका, बैंक रोक्का/फुकुवा अनलाइन जाँच, ७७ वटै जिल्लाको सरकारी न्यूनतम मूल्याङ्कन दररेट र लेखापढी व्यवसायी सेवा शुल्क मापदण्ड।",
  keywords: [
    "lrims online token nepal",
    "lrims dolrm gov np",
    "jagga rokka phukuwa check online nepal",
    "malpot minimum valuation rates 77 district",
    "lekhapadi dastur dar nepal",
    "dolrm online services",
    "lrims citizen portal",
    "मालपोत अनलाइन टोकन",
    "जग्गा रोक्का फुकुवा अनलाइन",
    "लेखापढी सेवा शुल्क"
  ],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/lrims-online-services",
  },
  openGraph: {
    title: "LRIMS अनलाइन जग्गा सेवा, रोक्का/फुकुवा तथा न्यूनतम मूल्याङ्कन हब | DOLRM Nepal",
    description: "मालपोत अनलाइन टोकन प्रणाली, जग्गा रोक्का/फुकुवा स्टाटस, ७७ जिल्ला न्यूनतम दररेट भल्ट र लेखापढी सेवा शुल्क निर्देशिका।",
    url: "https://www.brbhatta.com/tools/lrims-online-services",
    siteName: 'BR Bhatta | Land & Citizen Services',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LRIMS अनलाइन जग्गा सेवा, रोक्का/फुकुवा तथा न्यूनतम दररेट हब",
    description: "मालपोत अनलाइन टोकन, बैंक रोक्का/फुकुवा ट्र्याकर, ७७ जिल्ला दररेट र लेखापढी सेवा शुल्क।",
  },
};

export default function LrimsOnlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
