'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Users,
  Coins,
  FileCheck2,
  HelpCircle
} from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

export default function GharBatoSifarisHub() {
  const [activeTab, setActiveTab] = useState<'gharbato_app' | 'charkilla_app' | 'rates' | 'checklist'>('gharbato_app');
  const [copied, setCopied] = useState(false);

  // Form State
  const [wardOffice, setWardOffice] = useState('काठमाडौँ महानगरपालिका, ४ नं. वडा कार्यालय, बालुवाटार, काठमाडौँ');
  const [applicantName, setApplicantName] = useState('हरि कृष्ण शर्मा');
  const [applicantFather, setApplicantFather] = useState('गोविन्द शर्मा');
  const [applicantGrandfather, setApplicantGrandfather] = useState('दामोदर शर्मा');
  const [applicantCitizenship, setApplicantCitizenship] = useState('२७-०१-७६-५४३२१');
  const [applicantCitizenshipDist, setApplicantCitizenshipDist] = useState('काठमाडौँ');
  const [applicantAddress, setApplicantAddress] = useState('काठमाडौँ म.न.पा. वडा नं. ४');
  const [applicantPhone, setApplicantPhone] = useState('९८४१२३४५६७');

  // Land Details
  const [district, setDistrict] = useState('काठमाडौँ');
  const [municipality, setMunicipality] = useState('काठमाडौँ महानगरपालिका');
  const [wardNo, setWardNo] = useState('४');
  const [kittaNo, setKittaNo] = useState('१२८');
  const [area, setArea] = useState('०-५-०-० (पाँच आना)');
  const [toleName, setToleName] = useState('विशालनगर');

  // Road Details
  const [roadWidth, setRoadWidth] = useState('१३ फिट (४ मिटर)');
  const [roadType, setRoadType] = useState('कालोपत्रे (Blacktopped Pitch)');
  const [purpose, setPurpose] = useState('बैंक धितो ऋण प्रयोजनका लागि (Bank Mortgage / Home Loan)');

  // Boundaries for Charkilla
  const [boundEast, setBoundEast] = useState('कित्ता नं. १२७ को जग्गा');
  const [boundWest, setBoundWest] = useState('१३ फिट चौडा कालोपत्रे बाटो');
  const [boundNorth, setBoundNorth] = useState('कित्ता नं. १२५ को जग्गा');
  const [boundSouth, setBoundSouth] = useState('कित्ता नं. १२९ को जग्गा');

  const todayDate = '२०८१ साल कात्तिक महिनाको २५ गते रोज';

  // Ghar Bato Application Text
  const gharBatoAppText = `
मिति: ${todayDate}

श्रीमान् वडा अध्यक्षज्यू,
${wardOffice}।

विषय: घरबाटो सिफारिस उपलब्ध गराइपाउँ।

महोदय,
उपरोक्त सम्बन्धमा मेरो/हाम्रो नाममा एकलौटी दर्ता स्रेस्ता कायम रहेको जिल्ला ${district}, ${municipality} वडा नं. ${wardNo} (साविक ${district} जिल्ला, ${toleName}) स्थित कित्ता नं. ${kittaNo} को क्षेत्रफल ${area} जग्गामा पुग्ने बाटोको वास्तविक अवस्था खुलाई घरबाटो सिफारिस आवश्यक परेको हुँदा तपसिलका कागजातहरू संलग्न राखी यो निवेदन पेस गरेको छु।

उक्त कित्ता जग्गामा जाने बाटो हाल ${roadType} रहेको र सोको चौडाइ करिब ${roadWidth} रहेको छ। सो जग्गामा पुग्ने बाटोको अवस्था खुलाई ${purpose} "घरबाटो सिफारिस पत्र" उपलब्ध गराइदिनुहुन सादर अनुरोध गर्दछु।

तपसिल:
१. जग्गाधनी दर्ता प्रमाण पुर्जा (लालपुर्जा) को प्रमाणित प्रतिलिपि - १ प्रति
२. नागरिकता प्रमाणपत्रको प्रमाणित प्रतिलिपि - १ प्रति
३. चालु आर्थिक वर्षको सम्पत्ति कर / मालपोत तिरो तिरेको रसिद - १ प्रति
४. सम्बन्धित नापी कार्यालयबाट जारी भएको डिजिटल ट्रेस नक्सा (नक्सा प्रिन्ट) - १ प्रति
५. स्थलगत फिल्ड बुकको प्रतिलिपि - १ प्रति

निवेदक:
दस्तखत: .......................................
नाम: ${applicantName}
बाबुको नाम: ${applicantFather}
बाजेको नाम: ${applicantGrandfather}
नागरिकता प्रमाणपत्र नं.: ${applicantCitizenship} (${applicantCitizenshipDist})
हालको ठेगाना: ${applicantAddress}
सम्पर्क फोन नं.: ${applicantPhone}
`.trim();

  // Charkilla Application Text
  const charkillaAppText = `
मिति: ${todayDate}

श्रीमान् वडा अध्यक्षज्यू,
${wardOffice}।

विषय: चारकिल्ला प्रमाणित गरिपाउँ।

महोदय,
उपरोक्त सम्बन्धमा मेरो/हाम्रो नाममा एकल दर्ता स्वामित्व रहेको जिल्ला ${district}, ${municipality} वडा नं. ${wardNo} स्थित कित्ता नं. ${kittaNo} को क्षेत्रफल ${area} जग्गाको चारकिल्ला तपसिल बमोजिम रहेको हुँदा स्थलगत सर्जमिन/नापजाँच गरी चारकिल्ला प्रमाणित सिफारिस पत्र उपलब्ध गराइपाउँ भनी यो निवेदन पेस गरेको छु।

उक्त कित्ता जग्गाको वास्तविक चारकिल्ला:
• पूर्व: ${boundEast}
• पश्चिम: ${boundWest}
• उत्तर: ${boundNorth}
• दक्षिण: ${boundSouth}

उपर्युक्त चारकिल्लाभित्र कुनै सार्वजनिक, सरकारी वा विवादित जग्गा नपरेको र साँध-सीमाना निर्विवाद रहेको व्यहोरा निवेदन गर्दछु। फरक परे कानुन बमोजिम सहुँला बुझाउँला।

निवेदक:
दस्तखत: .......................................
नाम: ${applicantName}
नागरिकता प्रमाणपत्र नं.: ${applicantCitizenship}
फोन नं.: ${applicantPhone}
`.trim();

  const activeText = activeTab === 'charkilla_app' ? charkillaAppText : gharBatoAppText;

  const handleCopy = async () => {
    const ok = await copyToClipboard(activeText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      
      {/* Tab Controls */}
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs gap-1">
          
          <button
            onClick={() => setActiveTab('gharbato_app')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'gharbato_app'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>१. घरबाटो सिफारिस निवेदन</span>
          </button>

          <button
            onClick={() => setActiveTab('charkilla_app')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'charkilla_app'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>२. चारकिल्ला प्रमाणित निवेदन</span>
          </button>

          <button
            onClick={() => setActiveTab('rates')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'rates'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Coins className="w-4 h-4" />
            <span>३. सडक चौडाइ र दस्तुर दररेट</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'checklist'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <FileCheck2 className="w-4 h-4" />
            <span>४. चाहिने ५ कागजात चेकलिस्ट</span>
          </button>

        </div>
      </div>

      {/* ==================================================== */}
      {/* TABS 1 & 2: APPLICATION GENERATOR FORMS & PREVIEWS */}
      {/* ==================================================== */}
      {(activeTab === 'gharbato_app' || activeTab === 'charkilla_app') && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Form: 5 Cols */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 print:hidden">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-black text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>निवेदनको विवरण भर्नुहोस्:</span>
              </h3>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">सम्बन्धित वडा कार्यालयको पूरा ठेगाना:</label>
                <input
                  type="text"
                  value={wardOffice}
                  onChange={e => setWardOffice(e.target.value)}
                  className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">निवेदकको पूरा नाम:</label>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={e => setApplicantName(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">नागरिकता नं.:</label>
                  <input
                    type="text"
                    value={applicantCitizenship}
                    onChange={e => setApplicantCitizenship(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">बाबुको नाम:</label>
                  <input
                    type="text"
                    value={applicantFather}
                    onChange={e => setApplicantFather(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">बाजेको नाम:</label>
                  <input
                    type="text"
                    value={applicantGrandfather}
                    onChange={e => setApplicantGrandfather(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">जिल्ला तथा पालिका:</label>
                  <input
                    type="text"
                    value={`${district}, ${municipality}`}
                    onChange={e => setMunicipality(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">वडा नं.:</label>
                  <input
                    type="text"
                    value={wardNo}
                    onChange={e => setWardNo(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">कित्ता नम्बर (Kitta No):</label>
                  <input
                    type="text"
                    value={kittaNo}
                    onChange={e => setKittaNo(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-black text-emerald-600"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">क्षेत्रफल:</label>
                  <input
                    type="text"
                    value={area}
                    onChange={e => setArea(e.target.value)}
                    className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
              </div>

              {activeTab === 'gharbato_app' ? (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-bold text-slate-600 dark:text-slate-400">बाटोको चौडाइ:</label>
                      <input
                        type="text"
                        value={roadWidth}
                        onChange={e => setRoadWidth(e.target.value)}
                        className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-600 dark:text-slate-400">बाटोको किसिम:</label>
                      <input
                        type="text"
                        value={roadType}
                        onChange={e => setRoadType(e.target.value)}
                        className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-600 dark:text-slate-400">सिफारिस लिनुको प्रयोजन:</label>
                    <input
                      type="text"
                      value={purpose}
                      onChange={e => setPurpose(e.target.value)}
                      className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                    />
                  </div>
                </>
              ) : (
                <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                  <label className="font-bold text-slate-600 dark:text-slate-400 block">चारकिल्ला विवरण:</label>
                  <div className="grid grid-cols-2 gap-2 text-2xs">
                    <div>
                      <span>पूर्व:</span>
                      <input type="text" value={boundEast} onChange={e => setBoundEast(e.target.value)} className="w-full mt-0.5 p-1.5 rounded-lg border bg-slate-50 dark:bg-slate-800" />
                    </div>
                    <div>
                      <span>पश्चिम:</span>
                      <input type="text" value={boundWest} onChange={e => setBoundWest(e.target.value)} className="w-full mt-0.5 p-1.5 rounded-lg border bg-slate-50 dark:bg-slate-800" />
                    </div>
                    <div>
                      <span>उत्तर:</span>
                      <input type="text" value={boundNorth} onChange={e => setBoundNorth(e.target.value)} className="w-full mt-0.5 p-1.5 rounded-lg border bg-slate-50 dark:bg-slate-800" />
                    </div>
                    <div>
                      <span>दक्षिण:</span>
                      <input type="text" value={boundSouth} onChange={e => setBoundSouth(e.target.value)} className="w-full mt-0.5 p-1.5 rounded-lg border bg-slate-50 dark:bg-slate-800" />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">सम्पर्क फोन नं.:</label>
                <input
                  type="text"
                  value={applicantPhone}
                  onChange={e => setApplicantPhone(e.target.value)}
                  className="w-full mt-1 p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                />
              </div>

            </div>
          </div>

          {/* Right Preview: 7 Cols */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Action Bar */}
            <div className="flex items-center justify-between gap-2 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs print:hidden">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                आधिकारिक निवेदन ढाँचा (A4 Printable Letter)
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>प्रिन्ट / PDF सेभ</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'कपी भयो!' : 'Word कपी'}</span>
                </button>
              </div>
            </div>

            {/* Letter Sheet */}
            <div className="bg-white text-slate-900 p-8 sm:p-10 rounded-3xl border-2 border-slate-300 shadow-lg font-serif leading-relaxed text-xs sm:text-sm whitespace-pre-line print:m-0 print:p-8 print:shadow-none print:border-none print:rounded-none">
              {activeText}
            </div>

          </div>

        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 3: ROAD WIDTH & WARD FEE MATRIX */}
      {/* ==================================================== */}
      {activeTab === 'rates' && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          
          <div className="space-y-1">
            <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              नगरपालिका तथा वडा मापदण्ड
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              घरबाटो सिफारिसका लागि सडक चौडाइ मापदण्ड तथा औसत वडा दस्तुर
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              नेपालका महानगरपालिका, उपमहानगरपालिका र नगरपालिकाहरूमा घरबाटो सिफारिस लिँदा लाग्ने औसत राजस्व दस्तुर दर
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold">
                <tr>
                  <th className="p-3.5">सडकको चौडाइ (Road Width)</th>
                  <th className="p-3.5">सडकको किसिम (Surface Type)</th>
                  <th className="p-3.5">नक्सा पास योग्यता</th>
                  <th className="p-3.5">औसत वडा सिफारिस दस्तुर</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="p-3.5 font-bold">२० फिट वा ६ मिटरभन्दा माथि</td>
                  <td className="p-3.5">कालोपत्रे (Pitch) / ढलान</td>
                  <td className="p-3.5 font-bold text-emerald-600">✓ आवासीय तथा व्यावसायिक भवन</td>
                  <td className="p-3.5 font-mono">रु. १,००० देखि २,००० सम्म</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">१३ फिटदेखि १६ फिट (४-५ मिटर)</td>
                  <td className="p-3.5">कालोपत्रे वा ग्राभेल</td>
                  <td className="p-3.5 font-bold text-emerald-600">✓ आवासीय भवन नक्सा पास</td>
                  <td className="p-3.5 font-mono">रु. ५०० देखि १,००० सम्म</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">८ फिटदेखि १० फिट (साँघुरो बाटो)</td>
                  <td className="p-3.5">कच्ची / गोरेटो</td>
                  <td className="p-3.5 font-bold text-amber-600">⚠️ सडक केन्द्रबाट सेटब्याक छोड्नुपर्ने</td>
                  <td className="p-3.5 font-mono">रु. ५०० सम्म</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">६ फिटभन्दा कम (मूल गोरेटो)</td>
                  <td className="p-3.5">गोरेटो बाटो</td>
                  <td className="p-3.5 font-bold text-rose-600">✕ ठूला भवन नक्सा पास नहुने</td>
                  <td className="p-3.5 font-mono">रु. ३०० देखि ५०० सम्म</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/80 text-xs sm:text-sm text-amber-950 dark:text-amber-200 space-y-1">
            <strong>⚠️ महत्वपूर्ण नियम:</strong> स्थानीय तह अनुसार दस्तुर दर केही फरक पर्न सक्छ। बैंक ऋणका लागि घरबाटो सिफारिस लिँदा बैंकले तोकेको आधिकारिक ढाँचा समेत साथमा संलग्न गर्नुपर्ने हुन सक्छ।
          </div>

        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 4: REQUIRED 5 DOCUMENTS CHECKLIST */}
      {/* ==================================================== */}
      {activeTab === 'checklist' && (
        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          
          <div className="space-y-1">
            <span className="text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
              वडा कार्यालय जाँदा चाहिने कागजातहरू
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              घरबाटो तथा चारकिल्ला सिफारिसका ५ अनिवार्य कागजात चेकलिस्ट
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              यी कागजातहरू तयार पारेर जाँदा वडा कार्यालयमा तपाईंको काम १ दिनमै सहजै सम्पन्न हुनेछ:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                step: '१',
                title: 'जग्गाधनी दर्ता प्रमाण पुर्जा (लालपुर्जा)',
                desc: 'जग्गाधनीको सक्कल लालपुर्जा र १ प्रति स्पष्ट फोटोकपी।'
              },
              {
                step: '२',
                title: 'जग्गाधनीको नागरिकता प्रमाणपत्र',
                desc: 'जग्गाधनी स्वयम् वा निवेदकको सक्कल नागरिकता र प्रमाणित फोटोकपी।'
              },
              {
                step: '३',
                title: 'चालु आ.व. को एकीकृत सम्पत्ति कर रसिद',
                desc: 'सम्बन्धित वडा कार्यालयमा चालु आर्थिक वर्षको सम्पत्ति कर वा मालपोत तिरो चुक्ता गरेको सक्कल रसिद।'
              },
              {
                step: '४',
                title: 'नापी कार्यालयको आधिकारिक ट्रेस नक्सा',
                desc: 'नापी शाखाबाट जारी भएको प्रमाणित डिजिटल ट्रेस नक्सा (नक्सा प्रिन्ट) जसमा कित्ता र बाटो स्पष्ट जनिएको होस्।'
              },
              {
                step: '५',
                title: 'स्थानीय सर्जमिन मुचुल्का (आवश्यक परेमा)',
                desc: 'यदि बाटो नयाँ खोलिएको वा चारकिल्लामा साँध-सीमाना विवाद हुन सक्ने सम्भावना भएमा वडाका कम्तीमा २ जना छिमेकीको सर्जमिन मुचुल्का।'
              }
            ].map(item => (
              <div 
                key={item.step}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}
