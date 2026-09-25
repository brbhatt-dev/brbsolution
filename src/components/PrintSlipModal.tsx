'use client';

import React, { useState } from 'react';
import { Printer, X, FileText, CheckCircle2, ShieldCheck, Calendar, User, MapPin, Hash, Sparkles } from 'lucide-react';

interface PrintSlipModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Calculation data
  data: {
    totalSqft: number;
    outSqm: string;
    // Pahadi
    outRopani: number;
    outAana: number;
    outPaisa: number;
    outDaam: string;
    // Terai
    outBigha: number;
    outKatha: number;
    outDhur: number;
    outKanwa: string;
    // Price
    pricePerUnit?: number;
    estimatedPrice?: number;
    priceUnitLabel?: string;
  };
}

export default function PrintSlipModal({ isOpen, onClose, data }: PrintSlipModalProps) {
  const [clientName, setClientName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [kittaNo, setKittaNo] = useState('');
  const [location, setLocation] = useState('');
  const [surveyorName, setSurveyorName] = useState('BR Bhatta / प्राविधिक अमिन');
  const [remarks, setRemarks] = useState('डिजिटल नापजाँच प्रणाली अनुसार प्रमाणित क्षेत्रफल।');
  
  // Format current date
  const todayDate = new Date().toLocaleDateString('ne-NP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const slipId = `BRB-${Math.floor(100000 + Math.random() * 900000)}`;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Toolbar (Screen Only - Hidden in Print) */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex items-center justify-between shrink-0 no-print">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 dark:text-white text-base sm:text-lg">
                आधिकारिक जग्गा हिसाब स्लिप (Print Land Slip)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                तपाईंको आवश्यकता अनुसार विवरण थप गरी सिधै A4 साइजमा प्रिन्ट वा PDF सेभ गर्नुहोस्।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>स्लिप प्रिन्ट गर्नुहोस्</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Custom Details Form (Screen Only) */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-3 no-print">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
              स्लिपमा देखाउने विवरणहरू भर्नुहोस् (वैकल्पिक):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">ग्राहक / क्रेताको नाम:</label>
                <input
                  type="text"
                  placeholder="उदा: राम प्रसाद शर्मा"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">जग्गाधनीको नाम:</label>
                <input
                  type="text"
                  placeholder="उदा: सीता देवी पौडेल"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">कित्ता नम्बर:</label>
                <input
                  type="text"
                  placeholder="उदा: १२४५, १२४६"
                  value={kittaNo}
                  onChange={(e) => setKittaNo(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">जग्गाको ठेगाना / स्थान:</label>
                <input
                  type="text"
                  placeholder="उदा: काठमाडौँ-१०, बानेश्वर"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* OFFICIAL PRINTABLE SLIP (This renders on screen as a realistic paper preview and prints cleanly) */}
          <div 
            id="printable-land-slip"
            className="p-6 sm:p-10 bg-white text-slate-900 border border-slate-300 rounded-2xl shadow-sm space-y-6 font-sans mx-auto max-w-[210mm] print:border-none print:shadow-none print:p-0 print:m-0"
          >
            {/* Header with Logo & Title */}
            <div className="border-b-2 border-emerald-800 pb-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="BR Bhatta Logo" 
                  className="w-14 h-14 object-contain rounded-xl border border-slate-200 p-0.5" 
                />
                <div>
                  <h1 className="text-xl font-black text-emerald-900 tracking-tight">
                    BR BHATTA • LAND SOLUTION
                  </h1>
                  <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    नेपाल डिजिटल जग्गा व्यवस्थापन तथा नापजाँच प्रणाली
                  </p>
                  <p className="text-[10px] text-slate-500">
                    वेबसाइट: www.brbhatta.com • प्राविधिक जग्गा सेवा
                  </p>
                </div>
              </div>

              <div className="text-right text-xs space-y-1">
                <div className="inline-block px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded font-bold text-emerald-900 text-[11px]">
                  प्रमाणीकरण स्लिप
                </div>
                <p className="text-slate-600 text-[11px]"><strong>स्लिप नं:</strong> {slipId}</p>
                <p className="text-slate-600 text-[11px]"><strong>जारी मिति:</strong> {todayDate}</p>
              </div>
            </div>

            {/* Document Title Banner */}
            <div className="text-center py-2 bg-slate-50 border border-slate-200 rounded-xl">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                जग्गा क्षेत्रफल रूपान्तरण तथा मूल्याङ्कन विवरण पत्र
              </h2>
              <p className="text-[11px] text-slate-600">
                Official Land Area Conversion & Valuation Summary Slip
              </p>
            </div>

            {/* Client & Land Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50/60 p-3.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500 block text-[10px]">ग्राहक / क्रेताको नाम:</span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">{clientName || '—'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">जग्गाधनीको नाम:</span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">{ownerName || '—'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">कित्ता नम्बर:</span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">{kittaNo || '—'}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">स्थान / ठेगाना:</span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">{location || 'नेपाल'}</span>
              </div>
            </div>

            {/* Area Conversion Summary Table */}
            <div className="space-y-2">
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5 border-b pb-1">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>१. नापजाँच तथा क्षेत्रफल विवरण (Area Breakdown)</span>
              </h3>

              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-3">मापन प्रणाली (System)</th>
                      <th className="py-2.5 px-3">क्षेत्रफल एकाइ (Unit Breakdown)</th>
                      <th className="py-2.5 px-3 text-right">समतुल्य वर्गफिट</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-medium">
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-emerald-900">
                        पहाडी नाप (काठमाडौँ तथा पहाड)
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 text-sm">
                        {data.outRopani} रोपनी - {data.outAana} आना - {data.outPaisa} पैसा - {data.outDaam} दाम
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-700">
                        {data.totalSqft.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Sq.Ft
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-bold text-teal-900">
                        तराई नाप (तराई तथा भित्री मधेस)
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 text-sm">
                        {data.outBigha} बिघा - {data.outKatha} कट्ठा - {data.outDhur} धुर - {data.outKanwa} कन्वा
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-700">
                        {data.totalSqft.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Sq.Ft
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-slate-50/50">
                      <td className="py-2.5 px-3 font-bold text-indigo-900">
                        मिट्रिक प्रणाली (नापी विभाग आधिकारिक)
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900">
                        {data.outSqm} वर्गमिटर (Sq. Metres)
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-bold text-slate-700">
                        {data.totalSqft.toLocaleString('en-IN', { maximumFractionDigits: 2 })} Sq.Ft
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Financial Valuation (If provided) */}
            {data.estimatedPrice && data.estimatedPrice > 0 ? (
              <div className="space-y-2">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5 border-b pb-1">
                  <span>२. अनुमानित जग्गा मूल्याङ्कन (Financial Valuation)</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-xs">
                  <div>
                    <span className="text-amber-800 text-[10px] block">दर (Rate):</span>
                    <span className="font-bold text-slate-900">
                      रु. {(data.pricePerUnit || 0).toLocaleString('en-IN')} {data.priceUnitLabel || 'प्रति एकाइ'}
                    </span>
                  </div>
                  <div>
                    <span className="text-amber-800 text-[10px] block">कुल क्षेत्रफल:</span>
                    <span className="font-bold text-slate-900">
                      {data.totalSqft.toFixed(2)} वर्गफिट ({data.outSqm} व.मि.)
                    </span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-amber-800 text-[10px] block">कुल अनुमानित मूल्य (Total Value):</span>
                    <span className="font-black text-amber-900 text-base sm:text-lg font-mono">
                      रु. {data.estimatedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Technical Verification Note */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 leading-relaxed space-y-1">
              <p><strong>प्रमाणीकरण टिपोट:</strong> १ रोपनी = १६ आना = ६४ पैसा = २५६ दाम (५४७६ वर्गफिट)। १ बिघा = २० कट्ठा = ४०० धुर (७२९०० वर्गफिट)।</p>
              <p className="italic text-[10px] text-slate-500">
                * यो हिसाब कम्प्युटराइज्ड रूपमा Land Solution (BR Bhatta) प्रणालीद्वारा तयार पारिएको हो। जग्गाको कानुनी लिखत, रजिस्ट्रेसन र कित्ताकाटका लागि आधिकारिक नापी नक्सा र फिल्डबुक अनिवार्य हुन्छ।
              </p>
            </div>

            {/* Signature Blocks */}
            <div className="pt-8 grid grid-cols-2 gap-8 text-xs text-center border-t border-slate-200">
              <div className="space-y-1">
                <div className="w-40 border-b border-slate-400 mx-auto mb-2"></div>
                <p className="font-bold text-slate-900">{surveyorName || 'अमिन / प्राविधिक'}</p>
                <p className="text-[10px] text-slate-500">तयार गर्ने (नापी प्राविधिक / आधिकारिक)</p>
              </div>

              <div className="space-y-1">
                <div className="w-40 border-b border-slate-400 mx-auto mb-2"></div>
                <p className="font-bold text-slate-900">{clientName || ownerName || 'जग्गाधनी / सेवाग्राही'}</p>
                <p className="text-[10px] text-slate-500">बुझिलिने (जग्गाधनी वा अधिकृत प्रतिनिधि)</p>
              </div>
            </div>

            {/* Watermark / Footer */}
            <div className="text-center text-[9px] text-slate-400 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span>BR Bhatta • Technology & Land Information Portal</span>
              <span>www.brbhatta.com</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
