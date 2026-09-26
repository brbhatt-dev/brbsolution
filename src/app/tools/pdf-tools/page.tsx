'use client';

import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  FileStack, 
  Split, 
  Upload, 
  Download, 
  Sparkles, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  Zap,
  Layers
} from 'lucide-react';
import { PDFDocument } from 'pdf-lib';

interface MergeFileItem {
  id: string;
  file: File;
  name: string;
  size: number;
}

export default function PdfToolsPage() {
  const [activeTab, setActiveTab] = useState<'merge' | 'split'>('merge');

  // MERGE STATE
  const [mergeFiles, setMergeFiles] = useState<MergeFileItem[]>([]);
  const [mergedBlob, setMergedBlob] = useState<Blob | null>(null);
  const [isMerging, setIsMerging] = useState<boolean>(false);
  const mergeInputRef = useRef<HTMLInputElement>(null);

  // SPLIT STATE
  const [splitFile, setSplitFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pageRange, setPageRange] = useState<string>('1-2');
  const [splitBlob, setSplitBlob] = useState<Blob | null>(null);
  const [isSplitting, setIsSplitting] = useState<boolean>(false);
  const splitInputRef = useRef<HTMLInputElement>(null);

  // Handle files for merge
  const handleMergeFiles = (files: FileList | null) => {
    if (!files) return;
    const newItems: MergeFileItem[] = [];
    Array.from(files).forEach((file) => {
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        newItems.push({
          id: Math.random().toString(36).substring(2, 9),
          file,
          name: file.name,
          size: file.size,
        });
      }
    });
    setMergeFiles((prev) => [...prev, ...newItems]);
    setMergedBlob(null);
  };

  const removeMergeFile = (id: string) => {
    setMergeFiles((prev) => prev.filter((f) => f.id !== id));
    setMergedBlob(null);
  };

  const moveMergeUp = (index: number) => {
    if (index === 0) return;
    setMergeFiles((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[index - 1];
      next[index - 1] = temp;
      return next;
    });
    setMergedBlob(null);
  };

  const moveMergeDown = (index: number) => {
    if (index === mergeFiles.length - 1) return;
    setMergeFiles((prev) => {
      const next = [...prev];
      const temp = next[index];
      next[index] = next[index + 1];
      next[index + 1] = temp;
      return next;
    });
    setMergedBlob(null);
  };

  const executeMerge = async () => {
    if (mergeFiles.length < 2) {
      alert('कृपया कम्तीमा २ वटा PDF फाइलहरू थप्नुहोस्।');
      return;
    }
    setIsMerging(true);

    try {
      const mergedPdf = await PDFDocument.create();

      for (const item of mergeFiles) {
        const bytes = await item.file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([mergedPdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      setMergedBlob(blob);
    } catch (err) {
      console.error('Merge failed:', err);
      alert('PDF जोड्दा समस्या आयो। कृपया फाइलहरू सुरक्षित छन् कि छैनन् जाँच्नुहोस्।');
    } finally {
      setIsMerging(false);
    }
  };

  // Handle file for split
  const handleSplitFile = async (file: File) => {
    setSplitFile(file);
    setSplitBlob(null);
    try {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const count = pdf.getPageCount();
      setTotalPages(count);
      setPageRange(count > 1 ? `1-${Math.min(2, count)}` : '1');
    } catch (err) {
      console.error('Failed to load PDF for split:', err);
      alert('PDF लोड गर्न सकिएन।');
    }
  };

  const executeSplit = async () => {
    if (!splitFile) return;
    setIsSplitting(true);

    try {
      const bytes = await splitFile.arrayBuffer();
      const srcDoc = await PDFDocument.load(bytes);
      const destDoc = await PDFDocument.create();
      const count = srcDoc.getPageCount();

      // Parse page ranges e.g. "1-3, 5, 7-8"
      const pagesToExtract = new Set<number>();
      const parts = pageRange.split(',');

      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
          const [startStr, endStr] = trimmed.split('-');
          const start = parseInt(startStr, 10);
          const end = parseInt(endStr, 10);
          if (!isNaN(start) && !isNaN(end)) {
            for (let i = Math.max(1, start); i <= Math.min(count, end); i++) {
              pagesToExtract.add(i - 1);
            }
          }
        } else {
          const pageNum = parseInt(trimmed, 10);
          if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= count) {
            pagesToExtract.add(pageNum - 1);
          }
        }
      }

      const indices = Array.from(pagesToExtract).sort((a, b) => a - b);
      if (indices.length === 0) {
        alert('कृपया मान्य पाना नम्बर प्रविष्ट गर्नुहोस् (उदा: 1-3 वा 1, 2)');
        setIsSplitting(false);
        return;
      }

      const copiedPages = await destDoc.copyPages(srcDoc, indices);
      copiedPages.forEach((p) => destDoc.addPage(p));

      const splitBytes = await destDoc.save();
      const blob = new Blob([splitBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      setSplitBlob(blob);
    } catch (err) {
      console.error('Split failed:', err);
      alert('पाना छुट्टाउँदा त्रुटि भयो।');
    } finally {
      setIsSplitting(false);
    }
  };

  const downloadBlob = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
          <span className="text-slate-800 dark:text-slate-200 font-semibold">PDF Merge & Split Tools</span>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>निःशुल्क र सुरक्षित PDF स्टुडियो</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            PDF Merge & Split (जोड्ने र छुट्टाउने टूल)
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            धेरै वटा PDF फाइलहरूलाई एउटैमा जोड्नुहोस् (Merge) वा ठूलो फाइलबाट आफूलाई चाहिएको पानाहरू मात्र अलग गर्नुहोस् (Split)।
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
            <button
              onClick={() => setActiveTab('merge')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'merge'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileStack className="w-4 h-4" />
              <span>PDF जोड्नुहोस् (PDF Merge)</span>
            </button>

            <button
              onClick={() => setActiveTab('split')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'split'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Split className="w-4 h-4" />
              <span>पाना छुट्टाउनुहोस् (PDF Split)</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PDF MERGE */}
        {activeTab === 'merge' && (
          <div className="space-y-6">
            
            {/* Upload Area */}
            <div
              onClick={() => mergeInputRef.current?.click()}
              className="p-8 sm:p-10 rounded-3xl border-2 border-dashed border-emerald-400 hover:border-emerald-600 bg-white dark:bg-slate-900 text-center cursor-pointer transition-all shadow-xs hover:shadow-md group"
            >
              <input
                type="file"
                ref={mergeInputRef}
                onChange={(e) => handleMergeFiles(e.target.files)}
                multiple
                accept="application/pdf"
                className="hidden"
              />
              <div className="max-w-md mx-auto space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xs">
                  <Upload className="w-7 h-7" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  PDF फाइलहरू छान्नुहोस् वा तान्नुहोस्
                </h3>
                <p className="text-xs text-slate-500">
                  २ वा सोभन्दा बढी PDF फाइलहरू एकैपटक चयन गर्नुहोस्
                </p>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
                >
                  PDF फाइलहरू थप्नुहोस् (Add PDFs)
                </button>
              </div>
            </div>

            {/* Merge File List */}
            {mergeFiles.length > 0 && (
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    क्रम मिलाउनुहोस् (Files to Merge - {mergeFiles.length})
                  </span>
                  <button
                    onClick={() => setMergeFiles([])}
                    className="text-xs text-rose-500 hover:text-rose-600 font-semibold"
                  >
                    सबै हटाउनुहोस्
                  </button>
                </div>

                <div className="space-y-2">
                  {mergeFiles.map((item, index) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3 overflow-hidden">
                        <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <div className="truncate">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block truncate">
                            {item.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {(item.size / 1024).toFixed(1)} KB
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => moveMergeUp(index)}
                          disabled={index === 0}
                          className="p-1.5 rounded-lg bg-white dark:bg-slate-700 hover:bg-slate-100 text-slate-600 dark:text-slate-200 disabled:opacity-30"
                          title="माथि सार्नुहोस्"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => moveMergeDown(index)}
                          disabled={index === mergeFiles.length - 1}
                          className="p-1.5 rounded-lg bg-white dark:bg-slate-700 hover:bg-slate-100 text-slate-600 dark:text-slate-200 disabled:opacity-30"
                          title="तल सार्नुहोस्"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => removeMergeFile(item.id)}
                          className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/60"
                          title="हटाउनुहोस्"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={executeMerge}
                    disabled={isMerging || mergeFiles.length < 2}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50"
                  >
                    {isMerging ? (
                      <>
                        <Zap className="w-4 h-4 animate-spin text-white" />
                        <span>PDF जोडिँदैछ...</span>
                      </>
                    ) : (
                      <>
                        <FileStack className="w-4 h-4" />
                        <span>सबै PDF लाई एउटैमा जोड्नुहोस् (Merge PDFs)</span>
                      </>
                    )}
                  </button>
                </div>

                {mergedBlob && (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>PDF सफलतापूर्वक जोडिएको छ ({(mergedBlob.size / 1024).toFixed(1)} KB)</span>
                    </div>

                    <button
                      onClick={() => downloadBlob(mergedBlob, 'merged-land-documents.pdf')}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Merged PDF</span>
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* TAB 2: PDF SPLIT */}
        {activeTab === 'split' && (
          <div className="space-y-6">
            {!splitFile ? (
              <div
                onClick={() => splitInputRef.current?.click()}
                className="p-8 sm:p-10 rounded-3xl border-2 border-dashed border-emerald-400 hover:border-emerald-600 bg-white dark:bg-slate-900 text-center cursor-pointer transition-all shadow-xs hover:shadow-md group"
              >
                <input
                  type="file"
                  ref={splitInputRef}
                  onChange={(e) => e.target.files?.[0] && handleSplitFile(e.target.files[0])}
                  accept="application/pdf"
                  className="hidden"
                />
                <div className="max-w-md mx-auto space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xs">
                    <Split className="w-7 h-7" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    छुट्टाउनुपर्ने PDF फाइल छान्नुहोस्
                  </h3>
                  <p className="text-xs text-slate-500">
                    कुनै पनि PDF फाइल अपलोड गरी चाहेको पानाहरू मात्र निकाल्नुहोस्
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-all"
                  >
                    फाइल छान्नुहोस् (Select PDF)
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-slate-900 dark:text-white block">
                      {splitFile.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      कुल पाना: <strong className="text-emerald-600">{totalPages} पाना</strong> • साइज: {(splitFile.size / 1024).toFixed(1)} KB
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSplitFile(null);
                      setSplitBlob(null);
                    }}
                    className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white font-bold"
                  >
                    अर्को फाइल छान्नुहोस्
                  </button>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    निकाल्न चाहेको पाना नम्बर वा रेन्ज (Page Range):
                  </label>
                  <input
                    type="text"
                    value={pageRange}
                    onChange={(e) => setPageRange(e.target.value)}
                    placeholder="उदा: 1-3, 5"
                    className="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-mono font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <p className="text-[11px] text-slate-500">
                    💡 ढाँचा उदाहरण: <strong>1-3</strong> (पाना १ देखि ३ सम्म), वा <strong>1, 4, 7</strong> (पाना १, ४, र ७)
                  </p>
                </div>

                <button
                  onClick={executeSplit}
                  disabled={isSplitting}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50"
                >
                  {isSplitting ? (
                    <>
                      <Zap className="w-4 h-4 animate-spin text-white" />
                      <span>पाना अलग गरिँदैछ...</span>
                    </>
                  ) : (
                    <>
                      <Split className="w-4 h-4" />
                      <span>छानिएका पानाहरू निकाल्नुहोस् (Extract Pages)</span>
                    </>
                  )}
                </button>

                {splitBlob && (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>पानाहरू सफलतापूर्वक निकालियो ({(splitBlob.size / 1024).toFixed(1)} KB)</span>
                    </div>

                    <button
                      onClick={() => downloadBlob(splitBlob, `extracted-pages-${pageRange.replace(/[^0-9-]/g, '')}.pdf`)}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Split PDF</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              १००% व्यक्तिगत र गोप्य
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              कुनै पनि PDF फाइल हाम्रो वा बाहिरी सर्भरमा अपलोड हुँदैन। तपाईंको ब्राउजरमै प्रोसेस हुने भएकाले गोपनीयता पूर्ण सुनिश्चित छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-teal-600" />
              कुनै फाइल साइज सीमा छैन
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              ब्राउजरमै तीव्र गतिमा चल्ने भएकाले जतिसुकै ठूलो फाइल पनि तुरुन्त मर्ज वा स्प्लिट गर्न सकिन्छ।
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-indigo-600" />
              अमिन तथा कार्यालय विशेष
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              नापी नक्सा, टिप्पणी आदेश, लालपुर्जा र नागरिकताका अलग-अलग फाइललाई एउटै मिसिल बनाउन अति उपयोगी।
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
