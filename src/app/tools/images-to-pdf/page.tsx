'use client';

import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Upload, 
  Download, 
  FileText, 
  Sparkles, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  FilePlus,
  Zap
} from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

interface ImageItem {
  id: string;
  file: File;
  preview: string;
  name: string;
  size: number;
}

export default function ImagesToPdfPage() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [margin, setMargin] = useState<number>(20);
  const [pdfFileName, setPdfFileName] = useState<string>('nepal-land-documents.pdf');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedPdfBlob, setGeneratedPdfBlob] = useState<Blob | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newItems: ImageItem[] = [];

    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const preview = URL.createObjectURL(file);
        newItems.push({
          id: Math.random().toString(36).substring(2, 9),
          file,
          preview,
          name: file.name,
          size: file.size,
        });
      }
    });

    setImages((prev) => [...prev, ...newItems]);
    setGeneratedPdfBlob(null);
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
    setGeneratedPdfBlob(null);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setImages((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[index - 1];
      next[index - 1] = temp;
      return next;
    });
    setGeneratedPdfBlob(null);
  };

  const moveDown = (index: number) => {
    if (index === images.length - 1) return;
    setImages((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[index + 1];
      next[index + 1] = temp;
      return next;
    });
    setGeneratedPdfBlob(null);
  };

  const generatePdf = async () => {
    if (images.length === 0) return;
    setIsGenerating(true);

    try {
      const pdfDoc = await PDFDocument.create();

      // Standard A4 dimensions in points (72 points per inch)
      // Portrait: [595.28, 841.89]
      // Landscape: [841.89, 595.28]
      const pageWidth = orientation === 'portrait' ? 595.28 : 841.89;
      const pageHeight = orientation === 'portrait' ? 841.89 : 595.28;

      for (const item of images) {
        const imageBytes = await item.file.arrayBuffer();
        let pdfImage;

        // Try embedding based on type or fallback
        if (item.file.type === 'image/png') {
          try {
            pdfImage = await pdfDoc.embedPng(imageBytes);
          } catch {
            pdfImage = await pdfDoc.embedJpg(imageBytes);
          }
        } else {
          try {
            pdfImage = await pdfDoc.embedJpg(imageBytes);
          } catch {
            pdfImage = await pdfDoc.embedPng(imageBytes);
          }
        }

        const page = pdfDoc.addPage([pageWidth, pageHeight]);

        const availWidth = pageWidth - margin * 2;
        const availHeight = pageHeight - margin * 2;

        const imgWidth = pdfImage.width;
        const imgHeight = pdfImage.height;

        // Scale to fit available dimensions while preserving aspect ratio
        const scale = Math.min(availWidth / imgWidth, availHeight / imgHeight);
        const drawWidth = imgWidth * scale;
        const drawHeight = imgHeight * scale;

        // Center on the page
        const x = margin + (availWidth - drawWidth) / 2;
        const y = margin + (availHeight - drawHeight) / 2;

        page.drawImage(pdfImage, {
          x,
          y,
          width: drawWidth,
          height: drawHeight,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      setGeneratedPdfBlob(blob);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('PDF निर्माण गर्दा त्रुटि भयो। कृपया फोटोको ढाँचा जाँच गर्नुहोस्।');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedPdfBlob) return;
    const url = URL.createObjectURL(generatedPdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = pdfFileName.endsWith('.pdf') ? pdfFileName : `${pdfFileName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
          <span className="text-slate-800 dark:text-slate-200 font-semibold">तस्विरबाट PDF बनाउने टूल</span>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>१००% सुरक्षित र तत्काल A4 PDF जेनेरेटर</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            तस्विरहरूबाट A4 PDF बनाउनुहोस् (Images to PDF)
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            लालपुर्जा, फिल्ड नक्सा, नागरिकता वा कागजातका फोटोहरूलाई मिलाएर एउटै A4 साइजको आधिकारिक PDF फाइल निर्माण गर्नुहोस्।
          </p>
        </div>

        {/* Upload Zone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          className="p-8 sm:p-12 rounded-3xl border-2 border-dashed border-emerald-400 hover:border-emerald-600 bg-white dark:bg-slate-900 text-center cursor-pointer transition-all shadow-xs hover:shadow-md group"
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => handleFiles(e.target.files)}
            multiple
            accept="image/jpeg,image/png,image/jpg"
            className="hidden"
          />
          <div className="max-w-md mx-auto space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xs">
              <Upload className="w-7 h-7" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              फोटोहरू छान्नुहोस् वा तान्नुहोस् (Select Photos)
            </h3>
            <p className="text-xs text-slate-500">
              एकैपटक धेरै फोटोहरू (JPG, PNG) थप्न सक्नुहुन्छ
            </p>
            <button
              type="button"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all inline-flex items-center gap-1.5"
            >
              <FilePlus className="w-4 h-4" />
              <span>फोटोहरू थप्नुहोस् (Add Images)</span>
            </button>
          </div>
        </div>

        {/* Selected Images List & PDF Controls */}
        {images.length > 0 && (
          <div className="space-y-6">
            
            {/* Page Setup Settings */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                {/* Orientation */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">पानाको दिशा (Orientation):</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setOrientation('portrait')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        orientation === 'portrait'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      ठाडो (Portrait)
                    </button>
                    <button
                      onClick={() => setOrientation('landscape')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        orientation === 'landscape'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      तेर्सो (Landscape)
                    </button>
                  </div>
                </div>

                {/* Margin */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">किनारा (Margin):</span>
                  <div className="flex gap-1.5">
                    {[
                      { label: 'शून्य (0)', val: 0 },
                      { label: 'सानो (15)', val: 15 },
                      { label: 'मध्यम (25)', val: 25 },
                    ].map((m) => (
                      <button
                        key={m.val}
                        onClick={() => setMargin(m.val)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                          margin === m.val
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Total Images Count & Generate Action */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  कुल पानाहरू: <strong className="text-emerald-600">{images.length}</strong>
                </span>

                <button
                  onClick={generatePdf}
                  disabled={isGenerating}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs transition-all disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Zap className="w-4 h-4 animate-spin text-emerald-400" />
                      <span>PDF बन्दैछ...</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4 text-emerald-400" />
                      <span>PDF निर्माण गर्नुहोस्</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Success Download Banner */}
            {generatedPdfBlob && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black">तपाईंको A4 PDF तयार भयो!</h4>
                    <p className="text-xs text-emerald-100">
                      साइज: {(generatedPdfBlob.size / 1024).toFixed(1)} KB • {images.length} पाना
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={pdfFileName}
                    onChange={(e) => setPdfFileName(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-bold text-white focus:outline-none w-48"
                  />
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
                  >
                    <Download className="w-4 h-4 text-emerald-700" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            )}

            {/* Reorderable Image Cards */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                पानाहरूको क्रम (Reorder / Remove Pages):
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((item, index) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs flex flex-col justify-between space-y-3 group hover:border-emerald-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        पाना #{index + 1}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono truncate max-w-[120px]">
                        {item.name}
                      </span>
                    </div>

                    <div className="h-44 rounded-xl bg-slate-50 dark:bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-800">
                      <img
                        src={item.preview}
                        alt={`Page ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Bottom Action Controls */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => moveUp(index)}
                          disabled={index === 0}
                          title="अगाडि सार्नुहोस्"
                          className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30 transition-colors"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => moveDown(index)}
                          disabled={index === images.length - 1}
                          title="पछाडि सार्नुहोस्"
                          className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-30 transition-colors"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeImage(item.id)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition-colors"
                        title="हटाउनुहोस्"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              १००% स्थानीय र निजी (Client-Side)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              तपाईंको कुनै पनि फोटो सर्भरमा जाँदैन। सिधै तपाईंको डिभाइसको मेमोरीमै PDF तयार हुन्छ, जसले गर्दा लालपुर्जा वा कागजात पूर्ण सुरक्षित रहन्छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600" />
              A4 स्ट्यान्डर्ड प्रिन्ट साइज
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              तयार भएको PDF सिधै कुनै पनि प्रिन्टरबाट A4 साइजमा प्रिन्ट गर्न मिल्छ। पानाको अनुपात (Aspect Ratio) स्वतः मिलाइन्छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              क्रम मिलाउन र सम्पादन गर्न सजिलो
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              तपाईंले चाहेको पाना माथि वा तल सार्न सक्नुहुन्छ र नचाहिने पानालाई एक क्लिकमा हटाउन सक्नुहुन्छ।
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
