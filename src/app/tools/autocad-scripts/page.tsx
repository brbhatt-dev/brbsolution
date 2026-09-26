'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShareBar from '@/components/SocialShareBar';
import AdSenseSlot from '@/components/AdSenseSlot';
import { 
  FileCode, 
  Download, 
  Copy, 
  Check, 
  ArrowLeft, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  BookOpen,
  FolderArchive
} from 'lucide-react';

interface ScriptItem {
  id: string;
  name: string;
  command: string;
  filename: string;
  badge: string;
  description: string;
  unitSystem: string;
  code: string;
}

const SCRIPTS: ScriptItem[] = [
  {
    id: 'ropani',
    name: 'AutoCAD Area to Ropani (पहाडी प्रणाली)',
    command: 'AROP वा AREAROPANI',
    filename: 'area_ropani.lsp',
    badge: 'सर्वाधिक प्रयोग हुने',
    description: 'क्याड नक्सामा कुनै पनि बन्द पोलिलाइन (Closed Polyline) वा कित्ता छान्दा सिधै वर्गफिट, वर्गमिटर र रोपनी-आना-पैसा-दाममा क्षेत्रफल गणना गरी नक्सामा अटोमेटिक टेक्स्ट लेख्ने स्क्रिप्ट।',
    unitSystem: '१ रोपनी = १६ आना = ६४ पैसा = २५६ दाम (५४७६ वर्गफिट)',
    code: `;;; ==========================================================================
;;; Program: AREA_ROPANI.LSP (AutoCAD AutoLISP Script for Nepal Land Survey)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: AROP or AREAROPANI
;;; Description: Select any closed polyline or parcel boundary to get the area
;;;              in Sq. Feet, Sq. Metres, and Ropani-Aana-Paisa-Daam.
;;; ==========================================================================

(defun c:AROP ( / ent obj area_sqft area_sqm ropani aana paisa daam rem_sqft txt_pos)
  (vl-load-com)
  (setq ent (car (entsel "\\nSelect closed Parcel Polyline / Boundary: ")))
  (if ent
    (progn
      (setq obj (vlax-ename->vla-object ent))
      (if (vlax-property-available-p obj 'Area)
        (progn
          ;; Assuming drawing unit is in Feet (or adjust if in Metres)
          (setq area_sqft (vlax-get-property obj 'Area))
          (setq area_sqm (/ area_sqft 10.7639))
          
          ;; Ropani Calculation (1 Ropani = 5476 Sq Ft)
          (setq ropani (fix (/ area_sqft 5476.0)))
          (setq rem_sqft (rem area_sqft 5476.0))
          
          ;; Aana Calculation (1 Aana = 342.25 Sq Ft)
          (setq aana (fix (/ rem_sqft 342.25)))
          (setq rem_sqft (rem rem_sqft 342.25))
          
          ;; Paisa Calculation (1 Paisa = 85.5625 Sq Ft)
          (setq paisa (fix (/ rem_sqft 85.5625)))
          (setq rem_sqft (rem rem_sqft 85.5625))
          
          ;; Daam Calculation (1 Daam = 21.390625 Sq Ft)
          (setq daam (/ rem_sqft 21.390625))

          (princ (strcat "\\n--- LAND AREA (BRBHATTA.COM) ---"
                         "\\nArea: " (rtos area_sqft 2 2) " Sq.Ft. | " (rtos area_sqm 2 2) " Sq.M."
                         "\\nRopani-Aana-Paisa-Daam: "
                         (itoa ropani) "-" (itoa aana) "-" (itoa paisa) "-" (rtos daam 2 2)))

          ;; Place Text on drawing
          (setq txt_pos (getpoint "\\nClick insertion point to place text in drawing (or Enter to skip): "))
          (if txt_pos
            (command "_.TEXT" txt_pos "" "0"
                     (strcat "Area: " (itoa ropani) "-" (itoa aana) "-" (itoa paisa) "-" (rtos daam 2 1) " (" (rtos area_sqft 2 1) " Sq.Ft.)"))
          )
        )
        (princ "\\nSelected object has no area property.")
      )
    )
    (princ "\\nNo object selected.")
  )
  (princ)
)

(defun c:AREAROPANI () (c:AROP))
(princ "\\n[BRBhatta.com] AREA_ROPANI loaded! Type 'AROP' to calculate area.")
(princ)`
  },
  {
    id: 'bigha',
    name: 'AutoCAD Area to Bigha (तराई प्रणाली)',
    command: 'ABIG वा AREABIGHA',
    filename: 'area_bigha.lsp',
    badge: 'तराई तथा भित्री मधेस',
    description: 'तराईको कित्ता नापी नक्सामा बन्द पोलिलाइन छान्दा तत्काल बिघा-कट्ठा-धुर (B-K-D) र वर्गफिट/वर्गमिटरमा क्षेत्रफल निकालेर ड्रइङमा टेक्स्ट राख्ने स्क्रिप्ट।',
    unitSystem: '१ बिघा = २० कट्ठा = ४०० धुर (७२९०० वर्गफिट)',
    code: `;;; ==========================================================================
;;; Program: AREA_BIGHA.LSP (AutoCAD AutoLISP Script for Nepal Land Survey)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: ABIG or AREABIGHA
;;; Description: Select closed Parcel boundary to get Area in Bigha-Katha-Dhur.
;;; ==========================================================================

(defun c:ABIG ( / ent obj area_sqft area_sqm bigha katha dhur rem_sqft txt_pos)
  (vl-load-com)
  (setq ent (car (entsel "\\nSelect closed Parcel Polyline / Boundary: ")))
  (if ent
    (progn
      (setq obj (vlax-ename->vla-object ent))
      (if (vlax-property-available-p obj 'Area)
        (progn
          (setq area_sqft (vlax-get-property obj 'Area))
          (setq area_sqm (/ area_sqft 10.7639))
          
          ;; Bigha Calculation (1 Bigha = 72900 Sq Ft)
          (setq bigha (fix (/ area_sqft 72900.0)))
          (setq rem_sqft (rem area_sqft 72900.0))
          
          ;; Katha Calculation (1 Katha = 3645 Sq Ft)
          (setq katha (fix (/ rem_sqft 3645.0)))
          (setq rem_sqft (rem rem_sqft 3645.0))
          
          ;; Dhur Calculation (1 Dhur = 182.25 Sq Ft)
          (setq dhur (/ rem_sqft 182.25))

          (princ (strcat "\\n--- LAND AREA (TERAI REGION) ---"
                         "\\nArea: " (rtos area_sqft 2 2) " Sq.Ft. | " (rtos area_sqm 2 2) " Sq.M."
                         "\\nBigha-Katha-Dhur: "
                         (itoa bigha) "-" (itoa katha) "-" (rtos dhur 2 2)))

          (setq txt_pos (getpoint "\\nClick insertion point to place text in drawing (or Enter to skip): "))
          (if txt_pos
            (command "_.TEXT" txt_pos "" "0"
                     (strcat "Area: " (itoa bigha) "-" (itoa katha) "-" (rtos dhur 2 1) " (" (rtos area_sqft 2 1) " Sq.Ft.)"))
          )
        )
        (princ "\\nSelected object has no area property.")
      )
    )
    (princ "\\nNo object selected.")
  )
  (princ)
)

(defun c:AREABIGHA () (c:ABIG))
(princ "\\n[BRBhatta.com] AREA_BIGHA loaded! Type 'ABIG' to calculate area.")
(princ)`
  },
  {
    id: 'coord',
    name: 'AutoCAD Coordinate Export to CSV (कोअर्डिनेट एक्सपोर्ट)',
    command: 'EXCOORD वा EXPORTCOORDS',
    filename: 'coord_export.lsp',
    badge: 'फिल्ड सर्भे तथा जीपीएस',
    description: 'नक्सामा भएका बिन्दुहरू (Points/Blocks) को Easting, Northing र Elevation (X, Y, Z) सिधै एक्सेल वा CSV फाइलमा एक्सपोर्ट गर्ने स्क्रिप्ट।',
    unitSystem: 'Easting (X), Northing (Y), Reduced Level (Z)',
    code: `;;; ==========================================================================
;;; Program: COORD_EXPORT.LSP (AutoCAD AutoLISP Script for Nepal Survey)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: EXCOORD
;;; Description: Select survey points to export Easting, Northing, Elevation to CSV
;;; ==========================================================================

(defun c:EXCOORD ( / ss i ent pt fname f)
  (prompt "\\nSelect Points to Export: ")
  (setq ss (ssget '((0 . "POINT"))))
  (if ss
    (progn
      (setq fname (getfiled "Save Coordinates As CSV" "survey_points.csv" "csv" 1))
      (if fname
        (progn
          (setq f (open fname "w"))
          (write-line "Point_No,Easting_X,Northing_Y,Elevation_Z" f)
          (setq i 0)
          (while (< i (sslength ss))
            (setq ent (entget (ssname ss i)))
            (setq pt (cdr (assoc 10 ent)))
            (write-line (strcat (itoa (1+ i)) ","
                                (rtos (car pt) 2 4) ","
                                (rtos (cadr pt) 2 4) ","
                                (rtos (caddr pt) 2 4)) f)
            (setq i (1+ i))
          )
          (close f)
          (princ (strcat "\\nSuccessfully exported " (itoa (sslength ss)) " points to: " fname))
        )
      )
    )
    (prompt "\\nNo points selected.")
  )
  (princ)
)

(defun c:EXPORTCOORDS () (c:EXCOORD))
(princ "\\n[BRBhatta.com] COORD_EXPORT loaded! Type 'EXCOORD' to export coordinates.")
(princ)`
  },
  {
    id: 'kittano',
    name: 'AutoCAD Sequential Kitta Numbering (कित्ता नम्बर अटो-लेबलिङ)',
    command: 'KITTANO',
    filename: 'kittano.lsp',
    badge: 'नापी नक्सांकन',
    description: 'कित्ताकाट गर्दा नक्सामा १, २, ३... क्रमशः कित्ता नम्बर क्लिक गर्दै फटाफट अटो-इन्क्रिमेन्ट टेक्स्ट राख्ने सुविधाजनक स्क्रिप्ट।',
    unitSystem: 'Sequential Kitta Numbering with Custom Prefix',
    code: `;;; ==========================================================================
;;; Program: KITTANO.LSP (Auto Parcel Numbering AutoLISP)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: KITTANO
;;; Description: Click inside parcels to insert sequential kitta numbers (1, 2, 3...)
;;; ==========================================================================

(defun c:KITTANO ( / start_no prefix h pt current_val)
  (setq start_no (getint "\\nEnter Starting Kitta Number <1>: "))
  (if (null start_no) (setq start_no 1))
  
  (setq prefix (getstring "\\nEnter Prefix (or press Enter for none): "))
  (setq h (getdist "\\nSpecify Text Height <2.5>: "))
  (if (null h) (setq h 2.5))
  
  (setq current_val start_no)
  (while (setq pt (getpoint (strcat "\\nClick inside parcel to place Kitta " prefix (itoa current_val) " (Press ESC to stop): ")))
    (command "_.TEXT" "_MC" pt h "0" (strcat prefix (itoa current_val)))
    (setq current_val (1+ current_val))
  )
  (princ)
)

(princ "\\n[BRBhatta.com] KITTANO loaded! Type 'KITTANO' to start auto-numbering.")
(princ)`
  }
];

export default function AutoCadScriptsPage() {
  const [activeTab, setActiveTab] = useState<string>('ropani');
  const [copiedScriptId, setCopiedScriptId] = useState<string | null>(null);

  const currentScript = SCRIPTS.find((s) => s.id === activeTab) || SCRIPTS[0];

  const handleCopy = (scriptId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedScriptId(scriptId);
    setTimeout(() => setCopiedScriptId(null), 2500);
  };

  const handleDownload = (filename: string, code: string) => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
        
        {/* Breadcrumb Nav */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>उपकरणहरू (Tools Hub)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200">AutoCAD LISP स्क्रिप्ट्स</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 text-xs font-bold">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            <span>AutoCAD 2018 - 2026 Compatible</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            नेपाल नापी तथा सिभिल इन्जिनियरिङ AutoCAD LSP स्क्रिप्ट्स
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            AutoCAD मा जग्गाको पोलिलाइन छान्नासाथ सिधै रोपनी-आना, बिघा-कट्ठा, र कोअर्डिनेट एक्सपोर्ट गर्ने आधिकारिक AutoLISP कोडहरू।
          </p>
        </div>

        {/* All-in-One Download Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-5 sm:p-7 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <FolderArchive className="w-6 h-6 text-blue-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black">
                सबै AutoLISP स्क्रिप्ट्सको Complete ZIP प्याक डाउनलोड गर्नुहोस्
              </h2>
              <p className="text-xs text-blue-200">
                area_ropani.lsp, area_bigha.lsp, coord_export.lsp, र पूर्ण प्रयोगकर्ता गाइड सहित।
              </p>
            </div>
          </div>

          <a
            href="/autocad-lsp/AutoCAD_LSP_Pack_BRBhatta.zip"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Complete ZIP डाउनलोड (2.7 KB)</span>
          </a>
        </div>

        {/* Interactive Script Viewer */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          
          {/* Script Tabs */}
          <div className="flex items-center gap-1.5 p-3 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none text-xs font-bold">
            {SCRIPTS.map((script) => (
              <button
                key={script.id}
                onClick={() => setActiveTab(script.id)}
                className={`px-3.5 py-2 rounded-xl flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === script.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{script.filename}</span>
              </button>
            ))}
          </div>

          {/* Active Script Details */}
          <div className="p-5 sm:p-7 space-y-5">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    {currentScript.name}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                    {currentScript.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {currentScript.description}
                </p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono mt-0.5">
                  मापदण्ड: {currentScript.unitSystem}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopy(currentScript.id, currentScript.code)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all active:scale-95"
                >
                  {copiedScriptId === currentScript.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">कपी भयो!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>कोड कपी</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDownload(currentScript.filename, currentScript.code)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{currentScript.filename} डाउनलोड</span>
                </button>
              </div>
            </div>

            {/* Terminal Command Callout */}
            <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-mono">
              <span className="text-slate-500">AutoCAD Command:</span>
              <span className="px-2 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded font-bold text-blue-600 dark:text-blue-400">
                {currentScript.command}
              </span>
            </div>

            {/* Code Block with Syntax Styling */}
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
              <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{currentScript.filename} (AutoLISP Source)</span>
                <span>UTF-8</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs font-mono text-emerald-300 overflow-x-auto max-h-96 leading-relaxed">
                <code>{currentScript.code}</code>
              </pre>
            </div>

          </div>

        </div>

        {/* Visual Guide: How to load LSP in AutoCAD */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
              AutoCAD मा AutoLISP (.lsp) स्क्रिप्ट लोड गर्ने सजिलो तरिका
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">१</span>
              <h3 className="font-bold text-slate-900 dark:text-white">स्क्रिप्ट डाउनलोड गर्नुहोस्</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                माथि दिइएको डाउनलोड बटनबाट <code className="text-blue-600">.lsp</code> फाइल आफ्नो कम्प्युटरको सुरक्षित फोल्डरमा सेभ गर्नुहोस्।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">२</span>
              <h3 className="font-bold text-slate-900 dark:text-white">APPLOAD कमान्ड हान्नुहोस्</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                AutoCAD खोलेर कमान्ड बारमा <code className="font-mono font-bold text-blue-600">APPLOAD</code> टाइप गरी इन्टर गर्नुहोस्। डाउनलोड भएको फाइल छानेर <strong>Load</strong> क्लिक गर्नुहोस्।
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">३</span>
              <h3 className="font-bold text-slate-900 dark:text-white">कमान्ड चलाउनुहोस्</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                पहाडको लागि <code className="font-mono font-bold text-emerald-600">AROP</code> र तराईको लागि <code className="font-mono font-bold text-teal-600">ABIG</code> हानेर कित्ताको पोलिलाइनमा क्लिक गर्नुहोस्।
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>सधैँ अटोमेटिक लोड गर्न (Startup Suite):</strong> बारम्बार लोड गर्न नपरोस् भन्नका लागि <code className="font-mono font-bold">APPLOAD</code> डाइलग बक्सको दायाँपट्टि रहेको <em>Startup Suite (ब्रिफकेस आइकन)</em> मा क्लिक गरी यो फाइल थप्नुहोस्। अब प्रत्येक पटक क्याड खोल्दा यो आफैँ लोड हुनेछ।
            </span>
          </div>
        </div>

        {/* In-feed AdSense Slot */}
        <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

        {/* Social Share Bar */}
        <SocialShareBar 
          title="नेपाल नापी तथा सिभिल इन्जिनियरिङ AutoCAD LSP स्क्रिप्ट्स (निःशुल्क डाउनलोड)" 
          url="/tools/autocad-scripts" 
        />

      </main>

      <Footer />
    </div>
  );
}
