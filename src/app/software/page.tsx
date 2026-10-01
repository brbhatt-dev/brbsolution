'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import HomeFooter from '@/components/HomeFooter';
import AdSenseSlot from '@/components/AdSenseSlot';
import SocialShareBar from '@/components/SocialShareBar';
import IosInstallGuideModal from '@/components/IosInstallGuideModal';
import { copyToClipboard } from '@/lib/clipboard';
import { 
  Play, 
  Download, 
  ExternalLink, 
  Copy, 
  Check, 
  FileCode, 
  Compass, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Split, 
  Database, 
  Smartphone, 
  Laptop, 
  Apple, 
  Terminal, 
  HelpCircle, 
  FolderArchive, 
  Wallet, 
  ArrowRight, 
  Share2, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Box
} from 'lucide-react';

interface LspScript {
  id: string;
  name: string;
  command: string;
  filename: string;
  badge: string;
  description: string;
  unitSystem: string;
  code: string;
}

const LSP_SCRIPTS: LspScript[] = [
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

          ;; Optional: Place Text on drawing
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
(princ "\\n[Loaded] AREA_ROPANI.LSP by BR Bhatta. Type 'AROP' to run.")
(princ)`
  },
  {
    id: 'bigha',
    name: 'AutoCAD Area to Bigha (तराई प्रणाली)',
    command: 'ABIG वा AREABIGHA',
    filename: 'area_bigha.lsp',
    badge: 'तराई क्षेत्र विशेष',
    description: 'क्याड नक्सामा बन्द कित्ता छान्दा सिधै बिघा-कट्ठा-धुर (Bigha-Katha-Dhur) तथा कनवा मा क्षेत्रफल निकालेर नक्सामा लेख्ने उपयोगी AutoLISP स्क्रिप्ट।',
    unitSystem: '१ बिघा = २० कट्ठा = ४०० धुर (७२,९०० वर्गफिट / ६७७२.६३ वर्गमिटर)',
    code: `;;; ==========================================================================
;;; Program: AREA_BIGHA.LSP (AutoCAD AutoLISP Script for Terai Land Survey)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: ABIG or AREABIGHA
;;; Description: Select any closed polyline or parcel boundary to get the area
;;;              in Sq. Feet, Sq. Metres, and Bigha-Katha-Dhur.
;;; ==========================================================================

(defun c:ABIG ( / ent obj area_sqft area_sqm bigha katha dhur kanwa rem_sqft txt_pos)
  (vl-load-com)
  (setq ent (car (entsel "\\nSelect closed Parcel Polyline / Boundary (Terai System): ")))
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
          (setq dhur (fix (/ rem_sqft 182.25)))
          (setq rem_sqft (rem rem_sqft 182.25))
          
          ;; Kanwa Calculation (1 Kanwa = 11.390625 Sq Ft / 16 Kanwa per Dhur)
          (setq kanwa (/ rem_sqft 11.390625))

          (princ (strcat "\\n--- TERAI LAND AREA (BRBHATTA.COM) ---"
                         "\\nArea: " (rtos area_sqft 2 2) " Sq.Ft. | " (rtos area_sqm 2 2) " Sq.M."
                         "\\nBigha-Katha-Dhur: "
                         (itoa bigha) " Bigha - " (itoa katha) " Katha - " (itoa dhur) " Dhur - " (rtos kanwa 2 1) " Kanwa"))

          ;; Optional: Place Text on drawing
          (setq txt_pos (getpoint "\\nClick insertion point to place text in drawing (or Enter to skip): "))
          (if txt_pos
            (command "_.TEXT" txt_pos "" "0"
                     (strcat "Area: " (itoa bigha) "-" (itoa katha) "-" (itoa dhur) " (" (rtos area_sqft 2 1) " Sq.Ft.)"))
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
(princ "\\n[Loaded] AREA_BIGHA.LSP by BR Bhatta. Type 'ABIG' to run.")
(princ)`
  },
  {
    id: 'kitta_number',
    name: 'AutoCAD Auto Kitta Numbering (कित्ता नम्बरिङ)',
    command: 'KN वा KITTANUM',
    filename: 'kitta_number.lsp',
    badge: 'अटो इन्क्रिमेन्ट',
    description: 'कित्ताकाट गर्दा वा ठूला प्लटिङमा कित्ता नम्बरहरू १, २, ३... क्रमशः क्लिक गर्दै जाँदा स्वचालित रूपमा सेन्टर टेक्स्ट लेख्ने स्मार्ट कमाण्ड।',
    unitSystem: 'कुनै पनि स्केल र युनिटमा काम गर्ने स्वचालित नम्बरिङ',
    code: `;;; ==========================================================================
;;; Program: KITTA_NUMBER.LSP (AutoCAD AutoLISP Script for Nepal Cadastral Survey)
;;; Author: BR Bhatta | www.brbhatta.com | infobrbhatta@gmail.com
;;; Command: KN or KITTANUM
;;; Description: Sequentially numbers land parcels / kittas with auto-increment.
;;; ==========================================================================

(defun c:KN ( / start_num text_height pt cur_str)
  (vl-load-com)
  (setq start_num (getint "\\nEnter Starting Kitta Number (उदा. 101): "))
  (if (null start_num) (setq start_num 1))
  
  (setq text_height (getdist "\\nEnter Text Height (उदा. 1.5 or click 2 points): "))
  (if (null text_height) (setq text_height 1.5))
  
  (princ (strcat "\\n--- AUTO KITTA NUMBERING ACTIVATED (Current: " (itoa start_num) ") ---"))
  (princ "\\nClick inside parcels sequentially. Press Enter or Esc to Finish.")
  
  (while (setq pt (getpoint (strcat "\\nClick point for Kitta No. " (itoa start_num) ": ")))
    (setq cur_str (itoa start_num))
    (command "_.TEXT" "J" "MC" pt text_height "0" cur_str)
    (setq start_num (1+ start_num))
  )
  (princ "\\nKitta Numbering Complete! www.brbhatta.com")
  (princ)
)

(defun c:KITTANUM () (c:KN))
(princ "\\n[Loaded] KITTA_NUMBER.LSP by BR Bhatta. Type 'KN' to run.")
(princ)`
  },
  {
    id: 'coord_export',
    name: 'AutoCAD Coordinate Export to Excel / CSV',
    command: 'CEXP वा EXPORTCOORD',
    filename: 'coord_export.lsp',
    badge: 'टोटल स्टेसन & जीपीएस',
    description: 'क्याडमा छानिएका बिन्दु वा कित्ताका कुनाहरूको Easting, Northing र Elevation (X, Y, Z) कोअर्डिनेट सिधै Excel मा मिल्ने गरी CSV फाइलमा एक्सपोर्ट गर्ने।',
    unitSystem: 'MUTM / Everest 1830 वा WGS84 कोअर्डिनेट अनुकूल',
    code: `;;; ==========================================================================
;;; Program: COORD_EXPORT.LSP (AutoCAD Coordinate Export to CSV)
;;; Author: BR Bhatta | www.brbhatta.com
;;; Command: CEXP or EXPORTCOORD
;;; Description: Pick points or polyline vertices and export coordinates to CSV.
;;; ==========================================================================

(defun c:CEXP ( / file fname pt pt_num pt_name)
  (setq fname (getfiled "Save Coordinates CSV File" "" "csv" 1))
  (if fname
    (progn
      (setq file (open fname "w"))
      (write-line "Point_ID,Easting_X,Northing_Y,Elevation_Z,Description" file)
      (setq pt_num 1)
      
      (princ "\\nPick parcel corner points sequentially. Press Enter or Esc to finish.")
      (while (setq pt (getpoint (strcat "\\nPick Corner Point #" (itoa pt_num) ": ")))
        (setq pt_name (strcat "P" (itoa pt_num)))
        (write-line (strcat pt_name ","
                            (rtos (car pt) 2 4) ","
                            (rtos (cadr pt) 2 4) ","
                            (rtos (caddr pt) 2 4) ","
                            "CORNER") file)
        ;; Draw small circle indicator
        (command "_.POINT" pt)
        (setq pt_num (1+ pt_num))
      )
      (close file)
      (princ (strcat "\\nSuccessfully exported coordinates to: " fname))
    )
  )
  (princ)
)

(defun c:EXPORTCOORD () (c:CEXP))
(princ "\\n[Loaded] COORD_EXPORT.LSP by BR Bhatta. Type 'CEXP' to run.")
(princ)`
  },
  {
    id: 'boundary_offset',
    name: 'AutoCAD Building & Road Setback Tool',
    command: 'SETBACK वा BSET',
    filename: 'boundary_offset.lsp',
    badge: 'नगरपालिका मापदण्ड',
    description: 'जग्गाको सिमानाबाट बाटोको ५ फिट, १० फिट वा १.५ मिटरको भवन निर्माण सेटब्याक रेखांकन छुट्टै लेयरमा स्वचालित रूपमा कोर्ने स्क्रिप्ट।',
    unitSystem: 'फिट र मिटर दुवै युनिटमा काम गर्ने',
    code: `;;; ==========================================================================
;;; Program: BOUNDARY_OFFSET.LSP (Building & Road Setback Tool for Nepal CAD)
;;; Author: BR Bhatta | www.brbhatta.com | infobrbhatta@gmail.com
;;; Command: SETBACK or BSET
;;; Description: Creates standard municipal setbacks from parcel boundary line.
;;; ==========================================================================

(defun c:SETBACK ( / ent dist pt)
  (vl-load-com)
  (if (null (tblsearch "LAYER" "SETBACK_LINE"))
    (command "_.LAYER" "M" "SETBACK_LINE" "C" "1" "" "L" "DASHED" "" "")
  )
  (setq dist (getdist "\\nEnter Setback Distance (उदा. 5 for 5ft or 1.5 for 1.5m): "))
  (if (null dist) (setq dist 5.0))
  
  (princ "\\nSelect boundary lines to offset. Press Enter to exit.")
  (while (setq ent (entsel "\\nSelect Boundary Line/Polyline to Offset: "))
    (setq pt (getpoint "\\nClick inside for setback side: "))
    (if pt
      (progn
        (command "_.OFFSET" dist ent pt "")
        (command "_.CHPROP" (entlast) "" "LA" "SETBACK_LINE" "")
      )
    )
  )
  (princ "\\nSetback Generation Finished! www.brbhatta.com")
  (princ)
)

(defun c:BSET () (c:SETBACK))
(princ "\\n[Loaded] BOUNDARY_OFFSET.LSP by BR Bhatta. Type 'SETBACK' to run.")
(princ)`
  }
];

export default function SoftwareHubPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'land' | 'lsp' | 'cad' | 'apps'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showIosGuide, setShowIosGuide] = useState(false);

  const handleCopy = (id: string, text: string) => {
    copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownload = (filename: string, code: string) => {
    const blob = new Blob([code], { type: 'text/plain;charset=utf-8' });
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
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-14 w-full">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 shadow-xs">
            <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>BR BHATTA OFFICIAL SOFTWARE & CAD LISP SUITE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
            आधिकारिक सफ्टवेयर, AutoLISP तथा क्याड टुल्स
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            नेपालका अमिन, नापी सर्भेयर, सिभिल इन्जिनियर, ड्राफ्टसम्यान र जग्गाधनीका लागि विकास गरिएका आधुनिक सफ्टवेयर, अटोक्याड नापी स्क्रिप्टहरू तथा क्याड टेम्प्लेटहरू।
          </p>

          {/* Quick Filter Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'all' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
              }`}
            >
              सबै सफ्टवेयर तथा टुल्स ({1 + LSP_SCRIPTS.length + 3})
            </button>
            <button
              onClick={() => setActiveTab('land')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'land' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Land Solution (नापी एप)</span>
            </button>
            <button
              onClick={() => setActiveTab('lsp')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'lsp' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
              }`}
            >
              <FileCode className="w-4 h-4" />
              <span>AutoCAD LISP (.LSP)</span>
            </button>
            <button
              onClick={() => setActiveTab('cad')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'cad' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>CAD टेम्प्लेट & एक्स्टेन्सन</span>
            </button>
            <button
              onClick={() => setActiveTab('apps')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'apps' 
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
              }`}
            >
              <Wallet className="w-4 h-4" />
              <span>अन्य वित्तीय & GIS एप्स</span>
            </button>
          </div>
        </section>

        {/* 1. FLAGSHIP: LAND SOLUTION MASTER SUITE */}
        {(activeTab === 'all' || activeTab === 'land') && (
          <section id="land-solution" className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-6 rounded-full bg-emerald-500"></div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                १. फ्ल्यागसिप सफ्टवेयर: Land Solution (ल्याण्ड सोलुसन)
              </h2>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white p-6 sm:p-10 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Information */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Version 2.4 (Full Master Build)</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-sky-400" />
                      <span>७५३ स्थानीय तह डेटाबेस</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-bold">
                      iOS, Android & Web
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                    Land Solution: नेपाल जग्गा नापजाँच, कित्ताकाट तथा ३D नक्सा प्रणाली
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    नेपालको सरकारी नापी विभागका मापदण्ड, ऐन-नियम तथा फिल्ड आवश्यकता अनुसार तयार गरिएको पूर्ण सफ्टवेयर। यसबाट फिल्डमा जीपीएस/स्याटेलाइटमार्फत कित्ताको रेखांकन, चारकिल्ला, क्षेत्रफल (रोपनी-आना-पैसा-दाम / बिघा-कट्ठा-धुर), कित्ताकाट विभाजन र ३D घर नक्साको ब्लुप्रिन्ट तयार गर्न सकिन्छ।
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>७५३ स्थानीय तह:</strong> नेपालका सबै पालिका र वडाको आधिकारिक न्यूनतम कित्ताकाट मापदण्ड।</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>फिल्ड GPS & Satellites:</strong> वास्तविक समयमा स्याटेलाइट सङ्ख्या र मिटर एक्युरेसी ट्र्याकिङ।</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>३D Architectural Blueprints:</strong> दुई/तीन कोठा तथा तलाको घर नक्सा र नापी नक्सा प्रतिवेदन।</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>अफलाइन र १००% सुरक्षित:</strong> इन्टरनेट नभए पनि फिल्डमा डेटा सुरक्षित रहने प्रणाली।</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4">
                    <Link
                      href="/land-solution"
                      className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-white" />
                      <span>पूर्ण संस्करण सिधै चलाउनुहोस् (Launch App)</span>
                    </Link>

                    <a
                      href="/land-solution-demo/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3.5 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-sm flex items-center gap-2 border border-slate-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-sky-400" />
                      <span>सफारी/क्रोममा सिधै खोल्नुहोस्</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setShowIosGuide(true)}
                      className="px-4 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-emerald-300 font-bold text-sm flex items-center gap-2 border border-emerald-500/30 transition-colors cursor-pointer"
                    >
                      <Apple className="w-4 h-4" />
                      <span>iPhone मा सेभ गर्ने तरिका</span>
                    </button>
                  </div>
                </div>

                {/* Right Interactive Preview Badge */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 text-center space-y-4 shadow-inner">
                  <div className="w-24 h-24 rounded-3xl bg-white p-2 shadow-xl shadow-emerald-950 flex items-center justify-center">
                    <img src="/logo.png" alt="Land Solution Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">Land Solution Nepal</h4>
                    <p className="text-xs text-emerald-400 font-bold">Survey & Cadastre Master Suite</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Designed & Architected by BR Bhatta
                    </p>
                  </div>
                  <div className="w-full pt-3 border-t border-slate-800/80 flex items-center justify-around text-xs text-slate-300">
                    <div className="text-center">
                      <div className="font-extrabold text-white">७५३</div>
                      <div className="text-[10px] text-slate-400">स्थानीय तह</div>
                    </div>
                    <div className="h-6 w-px bg-slate-800"></div>
                    <div className="text-center">
                      <div className="font-extrabold text-white">100%</div>
                      <div className="text-[10px] text-slate-400">नेपाली मापदण्ड</div>
                    </div>
                    <div className="h-6 w-px bg-slate-800"></div>
                    <div className="text-center">
                      <div className="font-extrabold text-white">3D / 2D</div>
                      <div className="text-[10px] text-slate-400">क्याड ब्लुप्रिन्ट</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* 2. AUTOCAD AUTOLISP (.LSP) SCRIPTS SECTION */}
        {(activeTab === 'all' || activeTab === 'lsp') && (
          <section id="autocad-lsp" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-6 rounded-full bg-indigo-500"></div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                    २. AutoCAD AutoLISP (.LSP) नापी स्क्रिप्टहरू
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    अटोक्याडमा जग्गा नापी, कित्ताकाट, क्षेत्रफल रूपान्तरण र कोअर्डिनेट एक्सपोर्टलाई १-क्लिकमा सम्पन्न गर्ने कोडहरू।
                  </p>
                </div>
              </div>

              {/* Master ZIP Download Button */}
              <a
                href="/autocad-lsp/AutoCAD_LSP_Pack_BRBhatta.zip"
                download="AutoCAD_LSP_Pack_BRBhatta.zip"
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-indigo-600/20 transition-all shrink-0 cursor-pointer"
              >
                <FolderArchive className="w-4 h-4" />
                <span>सबै AutoLISP प्याक डाउनलोड (.ZIP)</span>
              </a>
            </div>

            {/* Scripts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LSP_SCRIPTS.map((script) => (
                <div 
                  key={script.id}
                  className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-500/50 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                          <FileCode className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                            {script.name}
                          </h3>
                          <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold">
                            कमाण्ड: {script.command}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {script.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {script.description}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      📐 {script.unitSystem}
                    </div>

                    {/* Code Snippet Box */}
                    <div className="relative rounded-2xl bg-slate-950 text-slate-300 p-3.5 font-mono text-[11px] overflow-x-auto max-h-36 border border-slate-800 select-all">
                      <pre>{script.code.slice(0, 320)}...</pre>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => handleCopy(script.id, script.code)}
                      className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedId === script.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">कपी भयो!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>कोड कपी गर्नुहोस्</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDownload(script.filename, script.code)}
                      className="py-2 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{script.filename}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* How to Load LSP Guide */}
            <div className="p-5 sm:p-7 rounded-3xl bg-indigo-50/70 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-slate-800 dark:text-slate-200 space-y-3">
              <div className="flex items-center gap-2 font-black text-indigo-900 dark:text-indigo-300 text-sm sm:text-base">
                <HelpCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>AutoCAD मा AutoLISP (.lsp) फाइल कसरी चलाउने? (३ सरल चरण)</span>
              </div>
              <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>माथिको बटनबाट <strong>.lsp</strong> फाइल डाउनलोड गर्नुहोस् वा कोड कपी गर्नुहोस्।</li>
                <li>AutoCAD खोलेर कमाण्ड लाइनमा <strong>APPLOAD</strong> टाइप गरी इन्टर गर्नुहोस्।</li>
                <li>डाउनलोड भएको <strong>.lsp</strong> फाइल छानेर <strong>Load</strong> बटन थिच्नुहोस्, अनि कमाण्ड लाइनमा सम्बन्धित कमाण्ड (उदा. <strong>AROP</strong>, <strong>ABIG</strong> वा <strong>KN</strong>) टाइप गरी नक्सामा क्लिक गर्नुहोस्।</li>
              </ol>
            </div>
          </section>
        )}

        {/* 3. AUTOCAD TEMPLATES & EXTENSIONS (.DWG, .DWT, .LIN, .SCR) */}
        {(activeTab === 'all' || activeTab === 'cad') && (
          <section id="cad-extensions" className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-6 rounded-full bg-amber-500"></div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  ३. AutoCAD टेम्प्लेट, लाइनस्टाइल तथा एक्स्टेन्सन फाइल्स
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  नेपालको नापी तथा नगरपालिका नक्सा पास मापदण्ड अनुसारका प्रि-कन्फिगर्ड क्याड रिसोर्सहरू।
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Item 1: Cadastral Survey Template */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      नेपाल नापी क्याड टेम्प्लेट (.DWT)
                    </h3>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-bold">Standard Cadastral Layers</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    कित्ता सिमाना (BOUNDARY), बाटो (ROAD), कुलो (CANAL), सेटब्याक र १:५००, १:१२५० का आधिकारिक नापी लेयर तथा फन्ट सेटिङ भएको टेम्प्लेट।
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/autocad-lsp/AutoCAD_LSP_Pack_BRBhatta.zip"
                    download
                    className="w-full py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>टेम्प्लेट प्याक डाउनलोड (.ZIP)</span>
                  </a>
                </div>
              </div>

              {/* Item 2: Custom Survey LineTypes */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <Box className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      कित्ताकाट लाइनस्टाइल फाइल (.LIN)
                    </h3>
                    <p className="text-xs text-teal-600 dark:text-teal-400 font-bold">Custom Survey Linestyles</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    AutoCAD मा कित्ता सिमाना, राइट अफ वे (Right of Way), खोला सेटब्याक र हाइटेन्सन लाइन देखाउन मिल्ने आधिकारिक लाइनस्टाइल परिभाषा।
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/autocad-lsp/nepal_survey.lin"
                    download="nepal_survey.lin"
                    className="w-full py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>nepal_survey.lin डाउनलोड</span>
                  </a>
                </div>
              </div>

              {/* Item 3: Coordinate Batch Script Generator */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white">
                      AutoCAD Script Generator (.SCR)
                    </h3>
                    <p className="text-xs text-sky-600 dark:text-sky-400 font-bold">Total Station Coordinate Importer</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    एक्सेलमा रहेका हजारौँ कोअर्डिनेट (East, North, Elevation) लाई एकै क्लिकमा क्याडमा प्वाइन्ट र पोलिलाइन बनाउने स्क्रिप्ट फाइल।
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="/tools/autocad-scripts"
                    className="w-full py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>अनलाइन स्क्रिप्ट जेनेरेटर हेर्नुहोस् ↗</span>
                  </Link>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* 4. OTHER APPS: FINANCIAL & GIS UTILITIES */}
        {(activeTab === 'all' || activeTab === 'apps') && (
          <section id="other-apps" className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-6 rounded-full bg-purple-500"></div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white">
                  ४. वित्तीय तथा GIS उपयोगिता सफ्टवेयर
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  सहकारी, वित्तीय संस्था तथा जीआईएस नक्साङ्कनका लागि उपयोगी प्रणालीहरू।
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* App 1: Hamro Kosh */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white border border-indigo-800/40 shadow-md space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                      <Wallet className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                      वित्तीय बचत सफ्टवेयर
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">हाम्रो कोष (Hamro Kosh)</h3>
                    <p className="text-xs text-indigo-400 font-semibold">Community Fund & Saving Account System</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    सहकारी, बचत समूह, गुठी तथा व्यक्तिगत कोषको दैनिक बचत, ऋण हिसाब, ब्याज गणना र पारदर्शी वित्तीय स्टेटमेन्ट निकाल्ने प्रणाली।
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>बचत र ऋणको स्वचालित ब्याज हिसाब</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>सदस्य खाता र पारदर्शी रिपोर्टिङ</span></div>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/contact"
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>सफ्टवेयर सोधपुछ वा डेमो माग गर्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* App 2: Excel to KML & GIS */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 text-white border border-teal-800/40 shadow-md space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                      <Compass className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40">
                      GIS & Google Earth
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">Excel to KML Converter</h3>
                    <p className="text-xs text-teal-400 font-semibold">Survey Boundary Google Earth Overlay</p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    एक्सेलमा नापिएका कोअर्डिनेटहरूलाई १ क्लिकमा गुगल अर्थ (KML/KMZ) फाइलमा रूपान्तरण गरी उपग्रह नक्सामा जग्गाको सीमाना हेर्ने वेब टूल।
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>MUTM & WGS84 दुवै समर्थन</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Google Earth मा ३D अवलोकन</span></div>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/tools/excel-to-kml"
                    className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Excel to KML टूल प्रयोग गर्नुहोस्</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* CUSTOM SOFTWARE INQUIRY BANNER */}
        <section className="rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-emerald-900 via-slate-900 to-indigo-950 text-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black">
              तपाईंको कार्यालय वा व्यवसायका लागि कस्टम सफ्टवेयर आवश्यक छ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              जग्गा नापजाँच, सहकारी, वित्तीय संस्था वा अटोक्याड अटोमेसनका लागि विशेष आवश्यकता अनुसारका वेब तथा मोबाइल सफ्टवेयर निर्माणका लागि हामीलाई सम्पर्क गर्न सक्नुहुन्छ।
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 hover:bg-emerald-50 text-sm font-black transition-colors shrink-0 shadow-md flex items-center gap-2"
          >
            <span>सम्पर्क गर्नुहोस् (Contact Us)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Social Share & AdSense */}
        <div className="space-y-6">
          <SocialShareBar 
            title="BR Bhatta आधिकारिक सफ्टवेयर, AutoLISP (.LSP) र क्याड टुल्स"
            url="https://brbhatta.com/software"
          />
          <AdSenseSlot slotId="4829104928" />
        </div>

      </main>

      <HomeFooter />

      {/* iOS Installation Guide Modal */}
      <IosInstallGuideModal 
        isOpen={showIosGuide} 
        onClose={() => setShowIosGuide(false)} 
      />
    </div>
  );
}
