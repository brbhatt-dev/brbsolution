'use client';

import React, { useState } from 'react';
import { 
  QrCode, 
  Printer, 
  Download, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  Building2, 
  Compass,
  Coins
} from 'lucide-react';
import AdSenseSlot from '@/components/AdSenseSlot';

export default function KittaQrGenerator() {
  const [kittaNo, setKittaNo] = useState('२४५');
  const [location, setLocation] = useState('काठमाडौँ-४, सुकेधारा');
  const [area, setArea] = useState('०-४-२-१ (करिब साढे ४ आना)');
  const [roadWidth, setRoadWidth] = useState('१६ फिट पक्की कालोपत्रे');
  const [price, setPrice] = useState('रु. ४५ लाख प्रति आना (वार्ता गर्न सकिने)');
  const [contactName, setContactName] = useState('राम बहादुर थापा');
  const [contactPhone, setContactPhone] = useState('9851000000');
  const [mapsUrl, setMapsUrl] = useState('https://maps.google.com');
  const [flyerTitle, setFlyerTitle] = useState('आकर्षक घडेरी जग्गा तुरुन्त बिक्रीमा');

  // Generate QR Code URL
  // We encode property details or the Google Maps URL
  const qrTarget = mapsUrl && mapsUrl.startsWith('http') 
    ? mapsUrl 
    : `https://www.brbhatta.com/tools/land-calculator?kitta=${encodeURIComponent(kittaNo)}&loc=${encodeURIComponent(location)}`;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(qrTarget)}&margin=10`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-300 text-xs font-bold">
          <QrCode className="w-3.5 h-3.5 text-indigo-600" />
          <span>Real Estate Smart QR Signboard</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          कित्ता स्मार्ट QR कोड तथा जग्गा बिक्री फ्लायर जेनेरेटर
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          आफ्नो जग्गाको सम्पूर्ण विवरण र गुगल म्याप लोकेशन समेटिएको आधुनिक क्युआर कोड र सिधै प्रिन्ट गर्न मिल्ने आकर्षक बिक्री साइनबोर्ड फ्लायर बनाउनुहोस्।
        </p>
      </div>

      {/* Main Grid: Form Inputs on Left, Live Flyer Preview on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Input Form (Screen Only) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 no-print">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block border-b border-slate-100 dark:border-slate-800 pb-2">
            जग्गा तथा सम्पर्क विवरण भर्नुहोस्:
          </span>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                साइनबोर्ड / फ्लायर शीर्षक:
              </label>
              <input
                type="text"
                value={flyerTitle}
                onChange={(e) => setFlyerTitle(e.target.value)}
                placeholder="उदा: आकर्षक घडेरी बिक्रीमा"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  कित्ता नम्बर:
                </label>
                <input
                  type="text"
                  value={kittaNo}
                  onChange={(e) => setKittaNo(e.target.value)}
                  placeholder="उदा: २४५"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  क्षेत्रफल:
                </label>
                <input
                  type="text"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="उदा: ०-४-२-०"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                स्थान / ठेगाना:
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="उदा: काठमाडौँ-४, सुकेधारा"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  बाटोको चौडाइ:
                </label>
                <input
                  type="text"
                  value={roadWidth}
                  onChange={(e) => setRoadWidth(e.target.value)}
                  placeholder="उदा: १६ फिट कालोपत्रे"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  मूल्य / दर:
                </label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="उदा: रु. ४५ लाख प्रति आना"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                गुगल म्याप लिङ्क (QR कोडमा स्क्यान हुने लोकेशन):
              </label>
              <input
                type="url"
                value={mapsUrl}
                onChange={(e) => setMapsUrl(e.target.value)}
                placeholder="https://maps.app.goo.gl/..."
                className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
              />
              <p className="text-[10px] text-slate-400 mt-0.5">
                गुगल म्यापमा जग्गाको ठाउँ थिचेर सेयर (Share) लिङ्क यहाँ पेस्ट गर्नुहोस्।
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  सम्पर्क व्यक्ति:
                </label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="जग्गाधनीको नाम"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-slate-600 dark:text-slate-400 font-semibold mb-1">
                  सम्पर्क फोन / WhatsApp:
                </label>
                <input
                  type="tel"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="९८xxxxxxxx"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-mono"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handlePrint}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>साइनबोर्ड फ्लायर प्रिन्ट गर्नुहोस् (Print Signboard)</span>
              </button>
            </div>

          </div>
        </div>

        {/* Live Printable Signboard / Flyer Preview */}
        <div className="lg:col-span-7">
          <div 
            id="printable-land-slip"
            className="bg-white text-slate-950 p-6 sm:p-8 rounded-3xl border-2 border-indigo-900/40 shadow-xl space-y-6 mx-auto max-w-[210mm] print:border-none print:shadow-none print:p-0"
          >
            {/* Top Red/Indigo Bold Sale Banner */}
            <div className="text-center bg-gradient-to-r from-red-600 to-indigo-900 text-white py-3.5 px-4 rounded-2xl shadow-sm space-y-1">
              <span className="text-[11px] uppercase tracking-widest font-black text-amber-300 block">
                ★ जग्गा बिक्रीमा • LAND FOR SALE ★
              </span>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                {flyerTitle || 'आकर्षक घडेरी जग्गा तुरुन्त बिक्रीमा'}
              </h2>
            </div>

            {/* QR Code and Key Attributes Split */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              
              {/* QR Code Box */}
              <div className="flex flex-col items-center text-center space-y-2 shrink-0">
                <div className="w-44 h-44 bg-white p-2 rounded-2xl border-2 border-slate-900 shadow-sm flex items-center justify-center">
                  <img 
                    src={qrImageUrl} 
                    alt="Kitta QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-[10px] font-bold text-slate-700 leading-tight">
                  <span className="text-indigo-700 block">📱 क्यामराले स्क्यान गर्नुहोस्</span>
                  <span>गुगल म्यापमा सिधै लोकेशन हेर्नुहोस्</span>
                </div>
              </div>

              {/* Main Feature Bullet Points */}
              <div className="space-y-3 flex-1 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 text-[11px] block">स्थान / ठेगाना:</span>
                    <strong className="text-slate-900 text-sm sm:text-base">{location || 'काठमाडौँ'}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 text-[11px] block">कित्ता नम्बर र क्षेत्रफल:</span>
                    <strong className="text-slate-900 text-sm sm:text-base">
                      कित्ता नं. {kittaNo} ({area})
                    </strong>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 text-[11px] block">सडक / बाटोको पहुँच:</span>
                    <strong className="text-slate-900 text-sm sm:text-base">{roadWidth}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Coins className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 text-[11px] block">मूल्य / दर:</span>
                    <strong className="text-amber-800 text-sm sm:text-base font-black">{price}</strong>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Information Banner */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <span className="text-emerald-800 text-xs font-semibold block">प्रत्यक्ष सम्पर्क तथा सोधपुछ:</span>
                <p className="text-base sm:text-lg font-black text-slate-900">
                  {contactName || 'जग्गाधनी'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${contactPhone}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white font-mono font-bold text-sm shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contactPhone}</span>
                </a>
              </div>
            </div>

            {/* Official Branding Watermark */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
              <span>BR Bhatta • Nepal Digital Land Platform</span>
              <span>www.brbhatta.com</span>
            </div>

          </div>
        </div>

      </div>

      {/* AdSense Slot */}
      <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

    </div>
  );
}
