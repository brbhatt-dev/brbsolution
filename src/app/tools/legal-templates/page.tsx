'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowLeft,
  ScrollText,
  FileCheck2,
  Building2,
  Download
} from 'lucide-react';

type TemplateType = 'bayana' | 'boundary' | 'fieldbook';

export default function LegalTemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>('bayana');
  const [copied, setCopied] = useState(false);

  // Bayana Paper Form State
  const [sellerName, setSellerName] = useState('राम बहादुर श्रेष्ठ');
  const [sellerAddress, setSellerAddress] = useState('काठमाडौँ महानगरपालिका वडा नं. ४');
  const [sellerCitizenNo, setSellerCitizenNo] = useState('२७-०१-७५-१२३४५');
  
  const [buyerName, setBuyerName] = useState('श्याम कुमार अधिकारी');
  const [buyerAddress, setBuyerAddress] = useState('ललितपुर महानगरपालिका वडा नं. २');
  const [buyerCitizenNo, setBuyerCitizenNo] = useState('२८-०२-७६-६७८९०');

  const [district, setDistrict] = useState('काठमाडौँ');
  const [localGov, setLocalGov] = useState('टोखा नगरपालिका वडा नं. ३');
  const [kittaNo, setKittaNo] = useState('४५६');
  const [area, setArea] = useState('०-४-२-० (चार आना दुई पैसा)');
  
  const [totalPrice, setTotalPrice] = useState('५०,००,०००');
  const [advanceAmount, setAdvanceAmount] = useState('५,००,०००');
  const [dueDate, setDueDate] = useState('२०८२ असार मसान्तभित्र');

  const handleCopy = () => {
    const el = document.getElementById('printable-document');
    if (el) {
      navigator.clipboard.writeText(el.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Breadcrumb (hidden on print) */}
        <div className="print:hidden flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (All Tools)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">कानुनी तथा नापी निवेदन टेम्प्लेट</span>
        </div>

        {/* Hero Header (hidden on print) */}
        <div className="print:hidden text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>प्रिन्ट गर्न तयार आधिकारिक नेपाली ढाँचाहरू</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            जग्गा बैनापट्टा तथा नापी निवेदन टेम्प्लेट जेनेरेटर
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            जग्गाको विवरण भर्नुहोस् र तुरुन्तै कानुनी मान्यता प्राप्त बैनापट्टा कागज वा नापी कार्यालयको निवेदन A4 ढाँचामा प्रिन्ट गर्नुहोस्।
          </p>
        </div>

        {/* Template Selector Tabs (hidden on print) */}
        <div className="print:hidden flex justify-center">
          <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs gap-1">
            <button
              onClick={() => setActiveTemplate('bayana')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'bayana'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:white'
              }`}
            >
              <ScrollText className="w-4 h-4" />
              <span>जग्गा बैनापट्टा कागज (Bayana Paper)</span>
            </button>

            <button
              onClick={() => setActiveTemplate('boundary')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'boundary'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>नापी सीमांकन निवेदन (Boundary Demarcation)</span>
            </button>

            <button
              onClick={() => setActiveTemplate('fieldbook')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'fieldbook'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:white'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>नक्सा तथा फिल्डबुक उतार निवेदन</span>
            </button>
          </div>
        </div>

        {/* Input Details Form (hidden on print) */}
        <div className="print:hidden p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-3">
            विवरण भर्नुहोस् (Fill Details):
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">जग्गाधनी / बिक्रेताको नाम:</label>
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">बिक्रेताको ठेगाना:</label>
              <input
                type="text"
                value={sellerAddress}
                onChange={(e) => setSellerAddress(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">बिक्रेताको नागरिकता नं:</label>
              <input
                type="text"
                value={sellerCitizenNo}
                onChange={(e) => setSellerCitizenNo(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">खरिदकर्ताको नाम:</label>
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">खरिदकर्ताको ठेगाना:</label>
              <input
                type="text"
                value={buyerAddress}
                onChange={(e) => setBuyerAddress(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">खरिदकर्ताको नागरिकता नं:</label>
              <input
                type="text"
                value={buyerCitizenNo}
                onChange={(e) => setBuyerCitizenNo(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">जिल्ला तथा स्थानीय तह:</label>
              <input
                type="text"
                value={`${district}, ${localGov}`}
                onChange={(e) => setLocalGov(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">कित्ता नम्बर:</label>
              <input
                type="text"
                value={kittaNo}
                onChange={(e) => setKittaNo(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-emerald-600"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">क्षेत्रफल:</label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            {activeTemplate === 'bayana' && (
              <>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">जम्मा कबुल रकम (रु.):</label>
                  <input
                    type="text"
                    value={totalPrice}
                    onChange={(e) => setTotalPrice(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">बैना बुझाएको रकम (रु.):</label>
                  <input
                    type="text"
                    value={advanceAmount}
                    onChange={(e) => setAdvanceAmount(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">बाँकी चुक्ता गरी रजिष्ट्रेसन गर्ने भाका:</label>
                  <input
                    type="text"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        {/* Printable Document Box */}
        <div className="space-y-4">
          <div className="print:hidden flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              आधिकारिक A4 कागज पूर्वावलोकन (Official Document Preview):
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'कपी भयो!' : 'पाठ कपी गर्नुहोस्'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>A4 प्रिन्ट गर्नुहोस् (Print)</span>
              </button>
            </div>
          </div>

          {/* Actual Document Sheet */}
          <div
            id="printable-document"
            className="p-8 sm:p-14 bg-white text-slate-900 border border-slate-300 rounded-3xl shadow-sm space-y-6 font-serif text-sm sm:text-base leading-relaxed print:p-0 print:border-none print:shadow-none print:text-black"
          >
            {activeTemplate === 'bayana' && (
              <>
                <div className="text-center space-y-1 border-b pb-4">
                  <h2 className="text-xl sm:text-2xl font-black tracking-wide">
                    जग्गा खरिद-बिक्री बैनापट्टाको लिखित कागज
                  </h2>
                  <p className="text-xs text-slate-500">
                    (मुलुकी देवानी संहिता २०७४ तथा करार कानुन बमोजिम)
                  </p>
                </div>

                <div className="space-y-4 text-justify">
                  <p>
                    लिखितम् हामी <strong>प्रथम पक्ष (जग्गा बिक्रीकर्ता)</strong> {sellerAddress} बस्ने नागरिकता प्रमाणपत्र नं. {sellerCitizenNo} भएको श्री <strong>{sellerName}</strong> (यसपछि "बिक्रीकर्ता" भनिएको) तथा <strong>दोस्रो पक्ष (जग्गा खरिदकर्ता)</strong> {buyerAddress} बस्ने नागरिकता प्रमाणपत्र नं. {buyerCitizenNo} भएको श्री <strong>{buyerName}</strong> (यसपछि "खरिदकर्ता" भनिएको) का बीचमा तपसिलको जग्गा खरिद-बिक्री गर्ने सम्बन्धमा आपसी मञ्जुरीले यो बैनापट्टा कागज गरिदियौँ, लियौँ।
                  </p>

                  <div className="p-4 bg-slate-50 border rounded-xl space-y-1.5 font-sans text-xs sm:text-sm">
                    <p className="font-bold text-slate-800">तपसिल (जग्गाको विवरण):</p>
                    <p>• जिल्ला: {district}, स्थानीय तह: {localGov}</p>
                    <p>• कित्ता नम्बर: <strong>{kittaNo}</strong>, क्षेत्रफल: <strong>{area}</strong></p>
                    <p>• जम्मा कबुल मूल्य: <strong>रु. {totalPrice} /-</strong></p>
                    <p>• आज बैनाबापत बुझाएको रकम: <strong>रु. {advanceAmount} /-</strong></p>
                    <p>• बाँकी चुक्ता गरी रजिष्ट्रेसन पास गर्ने भाका: <strong>{dueDate}</strong></p>
                  </div>

                  <p>
                    माथि उल्लिखित म्यादभित्र खरिदकर्ताले बाँकी रकम चुक्ता गर्न आएमा बिक्रीकर्ताले मालपोत कार्यालयमा उपस्थित भई कुनै झन्झट बिना रजिष्ट्रेसन पास गरिदिनुपर्नेछ। यदि बिक्रीकर्ताले पास गरिदिन आनाकानी गरेमा बैना रकम फिर्ता गरी प्रचलित कानुन बमोजिम क्षतिपूर्ति तिर्नुपर्नेछ। खरिदकर्ताले तोकिएको भाकामा बाँकी रकम नबुझाएमा बैना रकम जफत हुनेछ।
                  </p>

                  <p className="pt-2">
                    यो कागज हामी दुवै पक्षले होस-हवासमा, कसैको दबाब वा प्रलोभनमा नपरी, साक्षीहरूको रोहबरमा सहीछाप गरी एक-एक प्रति लियौँ, दियौँ।
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-10 border-t mt-8">
                  <div className="space-y-6">
                    <p className="font-bold">बिक्रीकर्ता (प्रथम पक्ष):</p>
                    <div className="h-14 border-b border-dashed border-slate-400"></div>
                    <p className="text-xs">दस्तखत: ................................<br/>नाम: {sellerName}<br/>मिति: ................................</p>
                  </div>

                  <div className="space-y-6">
                    <p className="font-bold">खरिदकर्ता (दोस्रो पक्ष):</p>
                    <div className="h-14 border-b border-dashed border-slate-400"></div>
                    <p className="text-xs">दस्तखत: ................................<br/>नाम: {buyerName}<br/>मिति: ................................</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <p className="font-bold text-xs">रोहबर / साक्षीहरू:</p>
                  <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                    <p>१) नाम: ................................... ठेगाना: ................................... सही: ............</p>
                    <p>२) नाम: ................................... ठेगाना: ................................... सही: ............</p>
                  </div>
                </div>
              </>
            )}

            {activeTemplate === 'boundary' && (
              <>
                <div className="text-right text-xs">
                  मिति: {new Date().toISOString().split('T')[0]}
                </div>

                <div className="space-y-1">
                  <p className="font-bold">श्रीमान् प्रमुख नापी अधिकृतज्यू,</p>
                  <p>नापी कार्यालय, {district}।</p>
                </div>

                <div className="text-center font-bold underline py-2 text-base">
                  विषय: जग्गाको साँध-सिमाना छुट्याई (सीमांकन) पाऊँ।
                </div>

                <div className="space-y-4 text-justify">
                  <p>
                    महोदय,<br/>
                    उपरोक्त विषयमा मेरो/हाम्रो नाममा मालपोत कार्यालयमा दर्ता श्रेस्ता कायम रहेको जिल्ला {district}, {localGov} स्थित कित्ता नं. <strong>{kittaNo}</strong>, क्षेत्रफल <strong>{area}</strong> भएको जग्गाको साँध-सिमानामा छिमेकीसँग अस्पष्टता भएको हुँदा नापी अमिन खटाई साँध-सिमाना यकिन छुट्याई दिनुहुन सादर अनुरोध गर्दछु।
                  </p>

                  <p>
                    यसका लागि लाग्ने आवश्यक सरकारी दस्तुर बुझाउन तयार छु। साथै मेरो जग्गाधनी प्रमाणपुर्जा र चालु आर्थिक वर्षको मालपोत तिरो तिरेको रसिद यसै निवेदनसाथ संलग्न गरेको छु।
                  </p>
                </div>

                <div className="pt-10 text-right space-y-1">
                  <p className="font-bold">निवेदक:</p>
                  <p>नाम: {sellerName}</p>
                  <p>ठेगाना: {sellerAddress}</p>
                  <p>नागरिकता नं: {sellerCitizenNo}</p>
                  <p>सम्पर्क नं: .....................................</p>
                </div>
              </>
            )}

            {activeTemplate === 'fieldbook' && (
              <>
                <div className="text-right text-xs">
                  मिति: {new Date().toISOString().split('T')[0]}
                </div>

                <div className="space-y-1">
                  <p className="font-bold">श्रीमान् कार्यालय प्रमुखज्यू,</p>
                  <p>नापी कार्यालय, {district}।</p>
                </div>

                <div className="text-center font-bold underline py-2 text-base">
                  विषय: नक्सा ट्रेस तथा फिल्डबुक उतार उपलब्ध गराई पाऊँ।
                </div>

                <div className="space-y-4 text-justify">
                  <p>
                    महोदय,<br/>
                    उपरोक्त विषयमा जिल्ला {district}, {localGov} मा अवस्थित मेरो नामको कित्ता नं. <strong>{kittaNo}</strong> को जग्गा बैंक प्रयोजन / कित्ताकाट / निर्माण सम्पन्नका लागि नक्सा ट्रेस (Trace Map) तथा फिल्डबुक उतार (Field Book Copy) आवश्यक परेको हुँदा नियमानुसारको दस्तुर लिई उपलब्ध गराइदिनुहुन सादर अनुरोध गर्दछु।
                  </p>
                </div>

                <div className="pt-10 text-right space-y-1">
                  <p className="font-bold">निवेदक:</p>
                  <p>नाम: {sellerName}</p>
                  <p>ठेगाना: {sellerAddress}</p>
                  <p>नागरिकता नं: {sellerCitizenNo}</p>
                  <p>दस्तखत: .....................................</p>
                </div>
              </>
            )}
          </div>
        </div>

      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
