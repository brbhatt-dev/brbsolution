import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import InteractiveLayoutBuilder from '@/components/builder/InteractiveLayoutBuilder';

export const metadata: Metadata = {
  title: 'दृष्य सम्पादक (Visual Layout Builder) | BR Bhatta',
  description: 'वेबसाइटका सबै भागहरूलाई आफ्नो इच्छाअनुसार Drag & Drop गरेर माथि/तल सार्नुहोस् र मनपर्ने लेआउट बनाउनुहोस्।',
};

export default function BuilderPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">
        <InteractiveLayoutBuilder />
      </main>

      <Footer />
    </div>
  );
}
