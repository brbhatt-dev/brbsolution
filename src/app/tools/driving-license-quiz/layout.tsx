import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "सवारी चालक अनुमतिपत्र लिखित परीक्षा तथा ७० अंकको ट्रायल सिम्युलेटर | Driving License Exam Nepal | BR Bhatta",
  description: "यातायात व्यवस्था विभाग (DOTM) को ५०० आधिकारिक प्रश्नोत्तरबाट अनलाइन लिखित परीक्षा क्विज (वर्ग क र ख), ७० अंकको नयाँ ट्रायल नियम, स्मार्ट लाइसेन्स प्रिन्ट चेक र ब्लुबुक कर क्यालकुलेटर।",
  keywords: [
    "driving license exam nepal",
    "driving license written exam question 500",
    "nepal driving license quiz online",
    "dotm nepal written test practice",
    "70 marks trial system nepal",
    "smart license print check nepal",
    "vehicle tax rate bagmati province 2081",
    "सवारी चालक अनुमतिपत्र लिखित परीक्षा ५०० प्रश्न",
    "लाइसेन्स ट्रायल ७० अंक नियम",
    "BR Bhatta Driving License Hub"
  ],
  alternates: {
    canonical: "https://www.brbhatta.com/tools/driving-license-quiz",
  },
  openGraph: {
    title: "सवारी चालक अनुमतिपत्र लिखित परीक्षा तथा ७० अंकको ट्रायल सिम्युलेटर | Driving License Exam Nepal",
    description: "यातायात व्यवस्था विभाग (DOTM) को ५०० आधिकारिक प्रश्नोत्तरबाट अनलाइन लिखित परीक्षा क्विज (वर्ग क र ख), ७० अंकको नयाँ ट्रायल नियम, स्मार्ट लाइसेन्स प्रिन्ट चेक र ब्लुबुक कर क्यालकुलेटर।",
    url: "https://www.brbhatta.com/tools/driving-license-quiz",
    siteName: 'BR Bhatta | Land & Citizen Services',
    locale: 'ne_NP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "सवारी चालक अनुमतिपत्र लिखित परीक्षा तथा ७० अंकको ट्रायल सिम्युलेटर | Driving License Exam Nepal",
    description: "यातायात व्यवस्था विभागको ५०० आधिकारिक प्रश्नोत्तर, ७० अंकको ट्रायल सिम्युलेटर र सवारी कर क्यालकुलेटर।",
  },
};

export default function DrivingLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
