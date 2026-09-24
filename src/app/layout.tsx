import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BR Bhatta | Tech Professional & Web Developer',
  description: 'Welcome to the personal website of BR Bhatta. Building clean, fast, and modern websites, software solutions, and providing IT services.',
  keywords: ['BR Bhatta', 'Web Developer', 'Tech Services', 'Software Developer', 'Nepal', 'brbhatta.com'],
  authors: [{ name: 'BR Bhatta', url: 'https://www.brbhatta.com' }],
  metadataBase: new URL('https://www.brbhatta.com'),
  openGraph: {
    title: 'BR Bhatta | Tech Professional & Web Developer',
    description: 'Personal tech website of BR Bhatta. Discover my services, recent projects, and get in touch.',
    url: 'https://www.brbhatta.com',
    siteName: 'BR Bhatta',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
