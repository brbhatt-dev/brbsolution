import type { Metadata } from 'next';
import LandSolutionFullApp from '@/components/LandSolutionFullApp';

export const metadata: Metadata = {
  title: 'Land Solution App (पूर्ण संस्करण) - आधिकारिक वेब एप',
  description: 'Land Solution आधिकारिक पूर्ण संस्करण। ७५३ स्थानीय तह, वडा नक्सा, कित्ताकाट तथा सम्पूर्ण जग्गा नापजाँच प्रणाली। iPhone, iPad, Android र PC मा १००% चल्ने।',
  appleWebApp: {
    capable: true,
    title: 'Land Solution',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function AppPage() {
  return <LandSolutionFullApp />;
}
