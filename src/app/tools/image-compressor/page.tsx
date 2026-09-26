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
  Zap
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

            if (currentKb <= targetKbVal || attempts >= 7) {
              bestBlob = blob;
              finish(blob);
            } else {
              maxQuality = quality;
              const nextQuality = (minQuality + maxQuality) / 2;
              testQuality(nextQuality);
            }
          },
          'image/jpeg',
          quality
        );
      };

      const finish = (finalBlob: Blob) => {
        setCompressedBlob(finalBlob);
        setCompressedSize(finalBlob.size);
        const url = URL.createObjectURL(finalBlob);
        setCompressedPreview(url);
        setIsCompressing(false);
      };

      testQuality(0.85);
    };
  };

  const handleDownload = () => {
    if (!compressedBlob) return;
    const url = URL.createObjectURL(compressedBlob);
    const link = document.createElement('a');
    link.href = url;
    const originalName = selectedFile?.name.replace(/\.[^/.]+$/, '') || 'document';
    link.download = `${originalName}-compressed-under-${targetKb}kb.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const setTargetPreset = (kb: number) => {
    setTargetKb(kb);
    if (originalPreview) {
      compressToTarget(originalPreview, kb, maxDimension);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 KB';
    return (bytes / 1024).toFixed(1) + ' KB';
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (All Tools)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">कागजात तथा फोटो कम्प्रेसर</span>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>लोक सेवा, नागरिक एप तथा अनलाइन मालपोत विशेष</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नागरिकता, लालपुर्जा तथा फोटो कम्प्रेसर (Compress under 200KB)
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            मोबाइलबाट खिचेका ठूला (५–१० MB) फोटोहरूलाई गुणस्तर नघटाई तुरुन्त २०० KB वा १०० KB भन्दा सानो बनाउनुहोस्। कुनै पनि सरकारी फारममा सजिलै अपलोड हुन्छ।
          </p>
        </div>

        {/* Upload Box / Drag & Drop Area */}
        {!selectedFile ? (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className="p-10 sm:p-14 rounded-3xl border-2 border-dashed border-emerald-400/80 hover:border-emerald-600 bg-white dark:bg-slate-900 text-center cursor-pointer transition-all shadow-xs hover:shadow-md group"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/jpeg,image/png,image/webp,image/jpg"
              className="hidden"
            />
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xs">
                <Upload className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  यहाँ फोटो तान्नुहोस् वा छान्नुहोस् (Browse Photo)
                </h3>
                <p className="text-xs text-slate-500">
                  नागरिकता, लालपुर्जा, पासपोर्ट फोटो, वा शैक्षिक प्रमाणपत्र (JPG, PNG, WebP)
                </p>
              </div>
              <button
                type="button"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
              >
                फोटो छान्नुहोस् (Choose File)
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Target Settings Bar */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Sliders className="w-4 h-4 text-emerald-600" />
                    <span>लक्षित साइज छान्नुहोस् (Select Target Limit):</span>
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { label: '५० KB', val: 50 },
                      { label: '१०० KB (लोकसेवा)', val: 95 },
                      { label: '१५० KB (नागरिक एप)', val: 145 },
                      { label: '२०० KB (मालपोत/राहदानी)', val: 190 },
                      { label: '३०० KB', val: 290 },
                      { label: '५०० KB', val: 490 },
                    ].map((p) => (
                      <button
                        key={p.val}
                        onClick={() => setTargetPreset(p.val)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          targetKb === p.val
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCcw className="w-3.5 h-3.5" />
                    <span>अर्को फोटो छान्नुहोस्</span>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* Comparison Grid (Original vs Compressed) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Original Photo */}
              <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                  <span className="text-xs font-bold text-slate-500">पहिलाको मूल फोटो (Original)</span>
                  <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-900">
                    {formatBytes(originalSize)}
                  </span>
                </div>

                <div className="h-64 rounded-2xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-800">
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
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-40"
                >
                  <Download className="w-4 h-4" />
                  <span>कम्प्रेस गरिएको फोटो डाउनलोड गर्नुहोस् ({formatBytes(compressedSize)})</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              १००% गोपनीयता (Safe & Secure)
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

      </main>

      <Footer />
    </div>
  );
}
