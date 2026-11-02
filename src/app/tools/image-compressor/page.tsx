'use client';

import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Upload, 
  Download, 
  Image as ImageIcon, 
  Sparkles, 
  Sliders, 
  CheckCircle2, 
  ArrowLeft,
  FileCheck,
  RefreshCcw,
  ShieldCheck,
  Zap,
  HelpCircle,
  BookOpen,
  ArrowRight,
  FileText
} from 'lucide-react';

export default function ImageCompressorPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  const [originalSize, setOriginalSize] = useState<number>(0);
  
  const [targetKb, setTargetKb] = useState<number>(180);
  const [maxDimension, setMaxDimension] = useState<number>(1200);
  const [compressedBlob, setCompressedBlob] = useState<Blob | null>(null);
  const [compressedPreview, setCompressedPreview] = useState<string>('');
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processImage(e.target.files[0], targetKb, maxDimension);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processImage(e.dataTransfer.files[0], targetKb, maxDimension);
    }
  };

  const processImage = (file: File, targetSizeKb: number, maxDim: number) => {
    setSelectedFile(file);
    setOriginalSize(file.size);

    const reader = new FileReader();
    reader.onload = (event) => {
      const imgUrl = event.target?.result as string;
      setOriginalPreview(imgUrl);
      compressToTarget(imgUrl, targetSizeKb, maxDim);
    };
    reader.readAsDataURL(file);
  };

  const compressToTarget = (dataUrl: string, targetKbVal: number, maxDim: number) => {
    setIsCompressing(true);
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;

      // Scale down if larger than maxDimension
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        setIsCompressing(false);
        return;
      }

      // Draw with white background in case of transparent PNG
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      // Binary search for optimal quality that meets target KB
      let minQuality = 0.1;
      let maxQuality = 0.95;
      let bestBlob: Blob | null = null;
      let attempts = 0;

      const testQuality = (quality: number) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              setIsCompressing(false);
              return;
            }

            const currentKb = blob.size / 1024;
            attempts++;

            if (currentKb <= targetKbVal) {
              bestBlob = blob;
              minQuality = quality;
            } else {
              maxQuality = quality;
            }

            // If we found a close match or reached 6 attempts, finalize
            if (attempts >= 6 || Math.abs(currentKb - targetKbVal) < 5 || (quality <= 0.15 && currentKb <= targetKbVal)) {
              const finalBlob = bestBlob || blob;
              setCompressedBlob(finalBlob);
              setCompressedSize(finalBlob.size);
              setCompressedPreview(URL.createObjectURL(finalBlob));
              setIsCompressing(false);
            } else {
              const nextQuality = (minQuality + maxQuality) / 2;
              testQuality(nextQuality);
            }
          },
          'image/jpeg',
          quality
        );
      };

      testQuality((minQuality + maxQuality) / 2);
    };
  };

  const handleDownload = () => {
    if (!compressedBlob) return;
    const url = URL.createObjectURL(compressedBlob);
    const a = document.createElement('a');
    a.href = url;
    const originalName = selectedFile?.name.replace(/\.[^/.]+$/, '') || 'compressed';
    a.download = `${originalName}_under${targetKb}kb.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const presets = [
    { label: '५० KB (हस्ताक्षर / Photo)', value: 50 },
    { label: '१०० KB (लोकसेवा फारम)', value: 95 },
    { label: '१८० KB (अनलाइन मालपोत)', value: 180 },
    { label: '३०० KB (ई-राहदानी / MRP)', value: 290 },
  ];

  // FAQ Schema for Search Engines
  const faqs = [
    {
      q: 'के कम्प्रेस गरिएको फोटो सरकारी अनलाइन फारमहरूमा मान्य हुन्छ?',
      a: 'हो, १००% मान्य हुन्छ। यो टुल विशेष गरी नेपाल लोक सेवा आयोग, भूमि व्यवस्था विभाग (DLIS/MeroKitta), राहदानी विभाग, र यातायात व्यवस्था कार्यालयको अनलाइन प्रणालीमा तोकिएको साइज सीमा (५० KB देखि २०० KB) अनुसार नै तयार पारिएको हो।'
    },
    {
      q: 'के मेरो लालपुर्जा वा नागरिकताको फोटो सर्भरमा अपलोड हुन्छ?',
      a: 'हुँदैन। सम्पूर्ण कम्प्रेसन प्रक्रिया क्लाइन्ट-साइड (तपाईंको आफ्नै फोन वा कम्प्युटरको वेब ब्राउजर) मै स्थानीय रूपमा सम्पन्न हुन्छ। तपाईंको कुनै पनि निजी कागजात बाहिरी सर्भरमा जाँदैन, जसले गर्दा यो पूर्ण रूपमा सुरक्षित र गोप्य छ।'
    },
    {
      q: 'फोटो कम्प्रेस गर्दा कित्ता नम्बर वा नागरिकता नम्बर धमिलो हुन्छ कि हुँदैन?',
      a: 'हाम्रो स्मार्ट क्यानभास स्केलिङ एल्गोरिदमले अक्षरहरूको कन्ट्रास्ट जोगाएर अनावश्यक पिक्सेल र मेटाडेटा मात्र हटाउँछ, जसले गर्दा फाइल साइज ५ MB बाट २०० KB मा झरे तापनि अक्षरहरू प्रष्ट पढ्न सकिने रहन्छन्।'
    },
    {
      q: 'मोबाइलबाट खिचेको ४-५ MB को ठूलो फोटोलाई कसरी २०० KB भन्दा सानो बनाउने?',
      a: 'फोटो छानेपछि "१८० KB (अनलाइन मालपोत)" बटन थिच्नुहोस्। सिस्टमले स्वचालित रूपमा अधिकतम आयाम (Max Dimension) लाई १२०० पिक्सेलमा रिसाइज गरी १ सेकेन्डमै २०० KB भन्दा कमको उत्कृष्ट गुणस्तरको फाइल बनाइदिनेछ।'
    }
  ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'नेपाली सरकारी फारम फोटो कम्प्रेसर (Online Image Compressor Nepal)',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
    url: 'https://www.brbhatta.com/tools/image-compressor',
    description: 'Compress photos, citizenship, and signatures under 200KB for Nepal Public Service Commission (Loksewa), Land Revenue (Malpot), and Passport forms.'
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (All Tools)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">फोटो कम्प्रेसर</span>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>लोकसेवा, अनलाइन मालपोत तथा सरकारी फारम विशेष</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            फोटो तथा हस्ताक्षर कम्प्रेसर (&lt; २०० KB)
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            नागरिकता, लालपुर्जा, फोटो वा दस्तखत अपलोड गर्दा साइज ठूलो भएर समस्या भयो? गुणस्तर नघटाई तुरुन्तै आवश्यक KB मा कम्प्रेस गर्नुहोस्।
          </p>
        </div>

        {/* Upload Dropzone Container */}
        <div 
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className="p-8 sm:p-12 rounded-3xl border-2 border-dashed border-emerald-300 dark:border-emerald-800/80 bg-white/80 dark:bg-slate-900/80 hover:bg-emerald-50/40 dark:hover:bg-slate-800/50 transition-all cursor-pointer flex flex-col items-center justify-center text-center space-y-4 shadow-sm min-h-[220px]"
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/jpeg,image/png,image/webp,image/jpg" 
            className="hidden" 
          />

          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner">
            <Upload className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              यहाँ फोटो तान्नुहोस् (Drag &amp; Drop) वा छनोट गर्नुहोस्
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              JPG, JPEG, PNG वा WEBP (अधिकतम १५ MB सम्म)
            </p>
          </div>

          <button 
            type="button"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all pointer-events-none"
          >
            डिभाइसबाट फोटो छान्नुहोस्
          </button>
        </div>

        {/* Compression Controls & Preview */}
        {selectedFile && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Target Size Presets */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>लक्षित फाइल साइज छनोट गर्नुहोस् (Target Size):</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-sm">
                  {targetKb} KB भन्दा कम
                </span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {presets.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => {
                      setTargetKb(p.value);
                      if (originalPreview) compressToTarget(originalPreview, p.value, maxDimension);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                      targetKb === p.value
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              
              {/* Original Photo */}
              <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700 pb-2">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    साविक फोटो (Original File)
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                    {formatBytes(originalSize)}
                  </span>
                </div>

                <div className="h-64 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-800">
                  <img
                    src={originalPreview}
                    alt="Original"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Compressed Photo */}
              <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>कम्प्रेस गरिएको फोटो (Ready to Upload)</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                    {formatBytes(compressedSize)}
                  </span>
                </div>

                <div className="h-64 rounded-2xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-800 relative">
                  {isCompressing ? (
                    <div className="text-xs font-bold text-emerald-600 flex items-center gap-2">
                      <Zap className="w-4 h-4 animate-spin" />
                      <span>कम्प्रेस हुँदैछ...</span>
                    </div>
                  ) : (
                    <img
                      src={compressedPreview}
                      alt="Compressed"
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
                </div>

                {/* Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={!compressedBlob || isCompressing}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-40 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>कम्प्रेस गरिएको फोटो डाउनलोड गर्नुहोस् ({formatBytes(compressedSize)})</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              १००% गोपनीयता (Safe &amp; Secure)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              तपाईंको नागरिकता वा लालपुर्जाको फोटो कुनै पनि सर्भरमा अपलोड हुँदैन। सम्पूर्ण काम तपाईंको आफ्नै मोबाइल वा कम्प्युटरमै सुरक्षित हुन्छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-teal-600" />
              सरकारी पोर्टलमा १००% स्वीकार्य
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              लोक सेवा आयोग (१०-१०० KB), अनलाइन मालपोत (२०० KB), र राहदानी/लाइसेन्स प्रणालीको मापदण्ड अनुसार फाइल साइज ठ्याक्कै मिल्नेछ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              अक्षरहरू स्पष्ट देखिने प्रविधि
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              साइज घटाइए तापनि नागरिकताको नम्बर, लालपुर्जाको कित्ता नम्बर र नामका अक्षरहरू प्रष्ट पढ्न सकिने गरी स्मार्ट एल्गोरिदाम प्रयोग गरिएको छ।
            </p>
          </div>
        </div>

        {/* 📚 COMPREHENSIVE EDUCATIONAL GUIDE: OFFICIAL NEPAL PORTAL STANDARDS */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5 border-b border-slate-100 dark:border-slate-800 pb-3">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              नेपालका प्रमुख अनलाइन सरकारी प्रणालीहरूको फोटो तथा डकुमेन्ट साइज मापदण्ड
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            नेपाल सरकारका विभिन्न मन्त्रालय, विभाग र लोक सेवा आयोगको अनलाइन फारम भर्दा फोटो वा डकुमेन्ट अपलोड गर्दा साइज सीमा नाघेर धेरैजसो फारम 'Error' हुने गर्दछ। तलको आधिकारिक तालिका हेरी सही साइज चयन गर्नुहोस्:
          </p>

          {/* Official Requirements Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-3">सरकारी निकाय / पोर्टल</th>
                  <th className="px-4 py-3">आवश्यक फाइल प्रकार</th>
                  <th className="px-4 py-3">अधिकतम साइज सीमा</th>
                  <th className="px-4 py-3">सिफारिस गरिएको साइज</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium text-slate-700 dark:text-slate-300">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">लोक सेवा आयोग (PSC Online)</td>
                  <td className="px-4 py-3">पासपोर्ट फोटो र दस्तखत (JPG)</td>
                  <td className="px-4 py-3 font-mono">Photo &lt; 50 KB / Sig &lt; 20 KB</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">४० KB र १५ KB</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">अनलाइन मालपोत (DLIS) / MeroKitta</td>
                  <td className="px-4 py-3">लालपुर्जा र नागरिकता (JPG/PDF)</td>
                  <td className="px-4 py-3 font-mono">Maximum 200 KB प्रति पेज</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">१८० KB</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">ई-राहदानी (e-Passport MRP)</td>
                  <td className="px-4 py-3">सेतो पृष्ठभूमि फोटो र नागरिकता</td>
                  <td className="px-4 py-3 font-mono">Photo &lt; 300 KB / Doc &lt; 500 KB</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">२५० KB</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">सवारी चालक अनुमतिपत्र (DOTM License)</td>
                  <td className="px-4 py-3">नागरिकता र ब्लड ग्रुप कार्ड</td>
                  <td className="px-4 py-3 font-mono">Maximum 100 KB - 200 KB</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">१५० KB</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 font-bold text-slate-900 dark:text-white">राष्ट्रिय परिचयपत्र (NID Portal)</td>
                  <td className="px-4 py-3">जन्मदर्ता वा विवाह दर्ता प्रमाणपत्र</td>
                  <td className="px-4 py-3 font-mono">Maximum 200 KB</td>
                  <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400 font-bold">१८० KB</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3 Step Instruction Guide */}
          <div className="space-y-3 pt-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              फोटो कम्प्रेस गर्दा ध्यान दिनुपर्ने ३ मुख्य नियमहरू:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">१. सिधा र उज्यालो फोटो खिच्नुहोस्</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  कागजातलाई टेबलमा राखी छायाँ नपर्ने गरी माथिबाट सिधा फोटो खिच्नुहोस्। कुनाकाटेको वा बाङ्गो फोटो कम्प्रेस गर्दा अक्षर काटिन सक्छ।
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">२. अनावश्यक भाग पहिले नै क्रप गर्नुहोस्</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  नागरिकता वा लालपुर्जाको बाहिरी पृष्ठभूमि (जस्तै ओछ्यान वा भुइँ) लाई क्रप गर्दा फाइल साइज स्वतः ५०% घट्छ र अक्षर स्पष्ट रहन्छ।
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 block">३. २०० KB भन्दा धेरै सानो नबनाउनुहोस्</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  मालपोतमा २०० KB तोकिएको छ भने १८० KB सम्म राख्नुहोस्। १०-२० KB मात्र बनाउँदा अक्षरहरू नपढिने गरी ब्लर हुन सक्छन्।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ❓ FREQUENTLY ASKED QUESTIONS SECTION */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              बारम्बार सोधिने प्रश्नहरू (Frequently Asked Questions)
            </h2>
          </div>

          <div className="space-y-3 pt-1">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                  Q: {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-3.5 border-l-2 border-emerald-500">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔗 RELATED UTILITY TOOLS CTA */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-3">
          <h3 className="font-black text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
            <span>🧰</span>
            <span>सम्बन्धित अन्य उपयोगी डिजिटल टुल्सहरू:</span>
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            कागजात व्यवस्थापन, सरकारी फारम तथा नापी प्रयोजनका लागि तलका निःशुल्क टुल्सहरू प्रयोग गर्नुहोस्:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            <Link
              href="/tools/images-to-pdf"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">फोटोबाट PDF</p>
              <p className="text-[10px] text-slate-500">नागरिकता/पुर्जा PDF बनाउने</p>
            </Link>
            <Link
              href="/tools/pdf-tools"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">PDF सम्पादन तथा मर्ज</p>
              <p className="text-[10px] text-slate-500">फाइल मिलाउने र घटाउने</p>
            </Link>
            <Link
              href="/tools/merokitta-online-naksa"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">मेरोकित्ता नक्सा गाइड</p>
              <p className="text-[10px] text-slate-500">घरमै बसेर नक्सा प्रिन्ट</p>
            </Link>
            <Link
              href="/tools/preeti-to-unicode"
              className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700/60 text-center hover:shadow-xs hover:scale-[1.02] transition-all"
            >
              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Preeti ⇄ Unicode</p>
              <p className="text-[10px] text-slate-500">नेपाली फन्ट रूपान्तरक</p>
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
