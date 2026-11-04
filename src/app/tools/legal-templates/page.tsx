'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { copyToClipboard } from '@/lib/clipboard';
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
  Download,
  Home,
  FileSignature,
  FileSpreadsheet,
  Lock,
  Unlock,
  MapPin,
  Users,
  Compass,
  FileBadge2
} from 'lucide-react';

export type TemplateType = 
  | 'bayana' 
  | 'ghar_bato' 
  | 'namsari' 
  | 'rokka_phukuwa' 
  | 'boundary' 
  | 'fieldbook' 
  | 'rent';

export default function LegalTemplatesPage() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateType>('bayana');
  const [copied, setCopied] = useState(false);

  // Today's date helper in BS (approx default for Nepali context)
  const todayDateNep = '२०८१/०७/१९';

  // Common Party 1 (बिक्रेता / घरधनी / निवेदक / जग्गाधनी)
  const [sellerName, setSellerName] = useState('राम बहादुर श्रेष्ठ');
  const [sellerAddress, setSellerAddress] = useState('काठमाडौँ महानगरपालिका वडा नं. ४');
  const [sellerCitizenNo, setSellerCitizenNo] = useState('२७-०१-७५-१२३४५');
  const [sellerPhone, setSellerPhone] = useState('९८४१००००००');

  // Common Party 2 (खरिदकर्ता / बहालवाला / ऋणी)
  const [buyerName, setBuyerName] = useState('श्याम कुमार अधिकारी');
  const [buyerAddress, setBuyerAddress] = useState('ललितपुर महानगरपालिका वडा नं. २');
  const [buyerCitizenNo, setBuyerCitizenNo] = useState('२८-०२-७६-६७८९०');

  // Land / Property Location & Parcel
  const [district, setDistrict] = useState('काठमाडौँ');
  const [localGov, setLocalGov] = useState('टोखा नगरपालिका वडा नं. ३');
  const [kittaNo, setKittaNo] = useState('४५६');
  const [area, setArea] = useState('०-४-२-० (चार आना दुई पैसा)');

  // Bayana Paper Specific State
  const [totalPrice, setTotalPrice] = useState('५०,००,०००');
  const [advanceAmount, setAdvanceAmount] = useState('५,००,०००');
  const [dueDate, setDueDate] = useState('२०८२ असार मसान्तभित्र');
  const [paymentMode, setPaymentMode] = useState('एभरेष्ट बैंकको एकाउन्टपेयी चेक नं. CHQ-998822 मार्फत');

  // Ghar Bato Specific State
  const [wardOffice, setWardOffice] = useState('टोखा नगरपालिका, ३ नं. वडा कार्यालय, काठमाडौँ');
  const [roadType, setRoadType] = useState('८ मिटर चौडा कालोपत्रे सडक');
  const [sifarisPurpose, setSifarisPurpose] = useState('वाणिज्य बैंकबाट घरजग्गा धितो कर्जा (Bank Loan) प्रयोजनार्थ');

  // Namsari Specific State
  const [malpotOffice, setMalpotOffice] = useState('मालपोत कार्यालय, डिल्लीबजार, काठमाडौँ');
  const [deceasedName, setDeceasedName] = useState('स्वर्गीय हरि बहादुर श्रेष्ठ');
  const [deceasedDate, setDeceasedDate] = useState('२०८० साल माघ १५ गते');
  const [relation, setRelation] = useState('जेठो छोरा (एकल हकदार)');
  const [namsariReason, setNamsariReason] = useState('प्राकृतिक मृत्यु भएकोले हकदारको नाममा एकलौटी नामसारी');

  // Rokka / Phukuwa Specific State
  const [rokkaAction, setRokkaAction] = useState<'rokka' | 'phukuwa'>('rokka');
  const [bankOrgName, setBankOrgName] = useState('नबिल बैंक लिमिटेड, शाखा कार्यालय महाराजगञ्ज');
  const [loanAccountNo, setLoanAccountNo] = useState('गृह कर्जा खाता नं. HL-44992 / च.नं. ५६७');
  const [loanAmount, setLoanAmount] = useState('४०,००,०००');

  // Rent Agreement Specific State
  const [rentUnitType, setRentUnitType] = useState('२ कोठा, १ भान्सा र १ बाथरुम (पहिलो तल्ला)');
  const [monthlyRent, setMonthlyRent] = useState('२५,०००');
  const [securityDeposit, setSecurityDeposit] = useState('५०,०००');
  const [electricityUnitRate, setElectricityUnitRate] = useState('रु. १५ प्रति युनिट (सब-मिटर अनुसार)');
  const [waterWasteRate, setWaterWasteRate] = useState('रु. १,००० मासिक एकमुष्ट');
  const [leaseDuration, setLeaseDuration] = useState('१ वर्ष (२०८१ मंसिर १ देखि २०८२ कात्तिक मसान्तसम्म)');
  const [paymentDay, setPaymentDay] = useState('प्रत्येक महिनाको ७ गतेभित्र');
  const [rentPurpose, setRentPurpose] = useState('पारिवारिक बसोबास (Residential)');
  const [noticePeriod, setNoticePeriod] = useState('३५ दिन (एक महिना अगावै)');

  const handleCopy = async () => {
    const el = document.getElementById('printable-document');
    if (el) {
      const ok = await copyToClipboard(el.innerText);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
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
            <span>सबै टुल्सहरू (All Tools)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">कानुनी तथा नापी निवेदन टेम्प्लेट</span>
        </div>

        {/* Hero Header (hidden on print) */}
        <div className="print:hidden text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>प्रिन्ट तथा PDF सेभ गर्न तयार आधिकारिक नेपाली लिखत ढाँचाहरू</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            जग्गा बैनापट्टा, घरबाटो, नामसारी तथा नापी निवेदन जेनेरेटर
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            जग्गाको विवरण भर्नुहोस् र १-क्लिकमा कानुनी मान्यता प्राप्त <strong>बैनापट्टा कागज, घरबाटो सिफारिस, नामसारी, रोक्का/फुकुवा वा नापी कार्यालयको निवेदन</strong> A4 ढाँचामा तयार गरी <strong>PDF डाउनलोड / प्रिन्ट</strong> गर्नुहोस्।
          </p>
        </div>

        {/* Template Selector Tabs (hidden on print) */}
        <div className="print:hidden flex justify-center">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs gap-1">
            
            {/* 1. Bayana */}
            <button
              onClick={() => setActiveTemplate('bayana')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'bayana'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ScrollText className="w-4 h-4" />
              <span>१. जग्गा बैनापट्टा (Bayana Paper)</span>
            </button>

            {/* 2. Ghar Bato */}
            <button
              onClick={() => setActiveTemplate('ghar_bato')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'ghar_bato'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileSignature className="w-4 h-4" />
              <span>२. घरबाटो सिफारिस माग</span>
            </button>

            {/* 3. Namsari */}
            <button
              onClick={() => setActiveTemplate('namsari')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'namsari'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>३. जग्गा नामसारी निवेदन</span>
            </button>

            {/* 4. Rokka / Phukuwa */}
            <button
              onClick={() => setActiveTemplate('rokka_phukuwa')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'rokka_phukuwa'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Lock className="w-4 h-4" />
              <span>४. रोक्का / फुकुवा निवेदन</span>
            </button>

            {/* 5. Boundary */}
            <button
              onClick={() => setActiveTemplate('boundary')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'boundary'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>५. नापी सीमांकन निवेदन</span>
            </button>

            {/* 6. Fieldbook / Trace */}
            <button
              onClick={() => setActiveTemplate('fieldbook')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'fieldbook'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>६. नक्सा तथा फिल्डबुक उतार</span>
            </button>

            {/* 7. Rent */}
            <button
              onClick={() => setActiveTemplate('rent')}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTemplate === 'rent'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>७. घर/सटर बहाल सम्झौता</span>
            </button>
          </div>
        </div>

        {/* Input Details Form (hidden on print) */}
        <div className="print:hidden p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>विवरण भर्नुहोस् (Fill Details for Real-Time Preview):</span>
            </h2>
            <span className="text-2xs text-slate-400 font-medium">तपाईंले परिवर्तन गर्दा तलको कागज स्वतः अपडेट हुन्छ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            
            {/* Primary Person Name */}
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">
                {activeTemplate === 'rent' ? 'घरधनीको नाम (प्रथम पक्ष):' :
                 activeTemplate === 'ghar_bato' || activeTemplate === 'namsari' || activeTemplate === 'boundary' || activeTemplate === 'fieldbook' ? 'निवेदक / जग्गाधनीको नाम:' :
                 activeTemplate === 'rokka_phukuwa' ? 'जग्गाधनीको नाम:' :
                 'जग्गाधनी / बिक्रेताको नाम (प्रथम पक्ष):'}
              </label>
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
              />
            </div>

            {/* Primary Person Address */}
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">
                {activeTemplate === 'rent' ? 'घरधनीको स्थायी ठेगाना:' : 'निवेदक/बिक्रेताको स्थायी ठेगाना:'}
              </label>
              <input
                type="text"
                value={sellerAddress}
                onChange={(e) => setSellerAddress(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
              />
            </div>

            {/* Primary Person Citizen No */}
            <div className="space-y-1">
              <label className="font-bold text-slate-700 dark:text-slate-300">
                नागरिकता प्रमाणपत्र नम्बर:
              </label>
              <input
                type="text"
                value={sellerCitizenNo}
                onChange={(e) => setSellerCitizenNo(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono"
              />
            </div>

            {/* Conditional Party 2 for Bayana and Rent */}
            {(activeTemplate === 'bayana' || activeTemplate === 'rent') && (
              <>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">
                    {activeTemplate === 'rent' ? 'बहालमा लिने व्यक्तिको नाम (दोस्रो पक्ष):' : 'खरिदकर्ताको नाम (दोस्रो पक्ष):'}
                  </label>
                  <input
                    type="text"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">
                    {activeTemplate === 'rent' ? 'बहालवालाको स्थायी ठेगाना:' : 'खरिदकर्ताको स्थायी ठेगाना:'}
                  </label>
                  <input
                    type="text"
                    value={buyerAddress}
                    onChange={(e) => setBuyerAddress(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">
                    {activeTemplate === 'rent' ? 'बहालवालाको नागरिकता / प्यान नं:' : 'खरिदकर्ताको नागरिकता नं:'}
                  </label>
                  <input
                    type="text"
                    value={buyerCitizenNo}
                    onChange={(e) => setBuyerCitizenNo(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono"
                  />
                </div>
              </>
            )}

            {/* Land Address (Common to almost all except Rent) */}
            {activeTemplate !== 'rent' && (
              <>
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
              </>
            )}

            {/* Specific Fields for Bayana */}
            {activeTemplate === 'bayana' && (
              <>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">जम्मा कबुल मूल्य (रु.):</label>
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

                <div className="space-y-1 sm:col-span-2 md:col-span-3">
                  <label className="font-bold text-slate-700 dark:text-slate-300">भुक्तानीको माध्यम (चेक वा नगद विवरण):</label>
                  <input
                    type="text"
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </>
            )}

            {/* Specific Fields for Ghar Bato */}
            {activeTemplate === 'ghar_bato' && (
              <>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">सम्बन्धित वडा कार्यालयको नाम:</label>
                  <input
                    type="text"
                    value={wardOffice}
                    onChange={(e) => setWardOffice(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">बाटोको किसिम र चौडाइ:</label>
                  <input
                    type="text"
                    value={roadType}
                    onChange={(e) => setRoadType(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">सिफारिसको प्रयोजन:</label>
                  <input
                    type="text"
                    value={sifarisPurpose}
                    onChange={(e) => setSifarisPurpose(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </>
            )}

            {/* Specific Fields for Namsari */}
            {activeTemplate === 'namsari' && (
              <>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">सम्बन्धित मालपोत कार्यालय:</label>
                  <input
                    type="text"
                    value={malpotOffice}
                    onChange={(e) => setMalpotOffice(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">स्वर्गीय जग्गाधनीको नाम:</label>
                  <input
                    type="text"
                    value={deceasedName}
                    onChange={(e) => setDeceasedName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">मृत्यु भएको मिति:</label>
                  <input
                    type="text"
                    value={deceasedDate}
                    onChange={(e) => setDeceasedDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">निवेदकको नाता सम्बन्ध:</label>
                  <input
                    type="text"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-emerald-600"
                  />
                </div>
              </>
            )}

            {/* Specific Fields for Rokka / Phukuwa */}
            {activeTemplate === 'rokka_phukuwa' && (
              <>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">निवेदनको प्रकार:</label>
                  <select
                    value={rokkaAction}
                    onChange={(e) => setRokkaAction(e.target.value as 'rokka' | 'phukuwa')}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-emerald-600"
                  >
                    <option value="rokka">जग्गा रोक्का निवेदन (Rokka Application)</option>
                    <option value="phukuwa">जग्गा फुकुवा निवेदन (Phukuwa Application)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">रोक्का/फुकुवा माग गर्ने बैंक/संस्था:</label>
                  <input
                    type="text"
                    value={bankOrgName}
                    onChange={(e) => setBankOrgName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">कर्जा खाता / रोक्का पत्र चलानी नं:</label>
                  <input
                    type="text"
                    value={loanAccountNo}
                    onChange={(e) => setLoanAccountNo(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </>
            )}

            {/* Specific Fields for Rent */}
            {activeTemplate === 'rent' && (
              <>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">भाडामा दिइएको कोठा/सटर विवरण:</label>
                  <input
                    type="text"
                    value={rentUnitType}
                    onChange={(e) => setRentUnitType(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">मासिक बहाल रकम (रु.):</label>
                  <input
                    type="text"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">अग्रिम सुरक्षण धरौटी (रु.):</label>
                  <input
                    type="text"
                    value={securityDeposit}
                    onChange={(e) => setSecurityDeposit(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">सम्झौता अवधि:</label>
                  <input
                    type="text"
                    value={leaseDuration}
                    onChange={(e) => setLeaseDuration(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">भाडा भुक्तानी भाका:</label>
                  <input
                    type="text"
                    value={paymentDay}
                    onChange={(e) => setPaymentDay(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">बिजुली महसुल दर:</label>
                  <input
                    type="text"
                    value={electricityUnitRate}
                    onChange={(e) => setElectricityUnitRate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>
              </>
            )}

          </div>
        </div>

        {/* Printable Document Box */}
        <div className="space-y-4">
          <div className="print:hidden flex flex-wrap items-center justify-between gap-3 bg-slate-100 dark:bg-slate-800/80 p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
                आधिकारिक A4 कागज पूर्वावलोकन (Official Document Preview):
              </span>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              {/* Copy Text */}
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-200 dark:border-slate-600 shadow-2xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'कपी भयो!' : 'पाठ कपी गर्नुहोस्'}</span>
              </button>

              {/* Print / Save as PDF */}
              <button
                onClick={handlePrint}
                className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>A4 प्रिन्ट / PDF सेभ (Print / Save as PDF)</span>
              </button>

              {/* Word Download */}
              <a
                href={
                  activeTemplate === 'bayana' ? '/downloads/bayanapatta-paper-format.docx' :
                  activeTemplate === 'rent' ? '/downloads/house-rent-agreement-format.docx' :
                  activeTemplate === 'boundary' ? '/downloads/boundary-demarcation-application.docx' :
                  '/downloads/fieldbook-trace-application.docx'
                }
                download
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Word (.docx)</span>
              </a>
            </div>
          </div>

          {/* Actual Document Sheet */}
          <div
            id="printable-document"
            className="p-8 sm:p-14 bg-white text-slate-900 border border-slate-300 rounded-3xl shadow-sm space-y-6 font-serif text-sm sm:text-base leading-relaxed print:p-0 print:border-none print:shadow-none print:text-black print:text-[14px] print:leading-normal"
          >
            
            {/* 1. BAYANA PAPER */}
            {activeTemplate === 'bayana' && (
              <>
                <div className="text-center space-y-1 border-b pb-4">
                  <h2 className="text-xl sm:text-2xl font-black tracking-wide">
                    जग्गा खरिद-बिक्री बैनापट्टाको लिखित कागज
                  </h2>
                  <p className="text-xs text-slate-500">
                    (मुलुकी देवानी संहिता, २०७४ तथा प्रचलित करार कानुन बमोजिम)
                  </p>
                </div>

                <div className="space-y-4 text-justify">
                  <p>
                    लिखितम् हामी <strong>प्रथम पक्ष (जग्गा बिक्रीकर्ता)</strong> {sellerAddress} बस्ने नागरिकता प्रमाणपत्र नं. {sellerCitizenNo} भएको श्री <strong>{sellerName}</strong> (यसपछि "बिक्रीकर्ता" भनिएको) तथा <strong>दोस्रो पक्ष (जग्गा खरिदकर्ता)</strong> {buyerAddress} बस्ने नागरिकता प्रमाणपत्र नं. {buyerCitizenNo} भएको श्री <strong>{buyerName}</strong> (यसपछि "खरिदकर्ता" भनिएको) का बीचमा तपसिलको जग्गा खरिद-बिक्री गर्ने सम्बन्धमा आपसी मञ्जुरीले यो बैनापट्टा कागज गरिदियौँ, लियौँ।
                  </p>

                  <div className="p-4 bg-slate-50 border rounded-xl space-y-1.5 font-sans text-xs sm:text-sm print:bg-white print:border-slate-800">
                    <p className="font-bold text-slate-800">तपसिल (जग्गाको विवरण तथा भुक्तानी सर्तहरू):</p>
                    <p>• जिल्ला: {district}, स्थानीय तह: {localGov}</p>
                    <p>• कित्ता नम्बर: <strong>{kittaNo}</strong>, क्षेत्रफल: <strong>{area}</strong></p>
                    <p>• जम्मा कबुल मूल्य: <strong>रु. {totalPrice} /-</strong></p>
                    <p>• आज बैनाबापत बुझाएको रकम: <strong>रु. {advanceAmount} /-</strong></p>
                    <p>• भुक्तानी माध्यम: <strong>{paymentMode}</strong></p>
                    <p>• बाँकी चुक्ता गरी रजिष्ट्रेसन पास गर्ने अन्तिम भाका: <strong>{dueDate}</strong></p>
                  </div>

                  <p>
                    माथि उल्लिखित म्यादभित्र खरिदकर्ताले बाँकी रकम चुक्ता गर्न आएमा बिक्रीकर्ताले मालपोत कार्यालयमा उपस्थित भई कुनै झन्झट बिना रजिष्ट्रेसन पास गरिदिनुपर्नेछ। यदि बिक्रीकर्ताले पास गरिदिन आनाकानी गरेमा बैना रकम फिर्ता गरी प्रचलित कानुन बमोजिम क्षतिपूर्ति तिर्नुपर्नेछ। खरिदकर्ताले तोकिएको भाकामा बाँकी रकम नबुझाएमा बैना रकम जफत हुनेछ। उक्त जग्गा कसैलाई धितो, बन्धकी वा हकदाबी नरहेको पूर्ण सत्य साँचो हो, कुनै दाबी परेमा बिक्रीकर्ता स्वयंले व्यहोर्नेछ।
                  </p>

                  <p className="pt-2">
                    यो कागज हामी दुवै पक्षले होस-हवासमा, कसैको दबाब वा प्रलोभनमा नपरी, साक्षीहरूको रोहबरमा सहीछाप गरी एक-एक प्रति लियौँ, दियौँ।
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t mt-6">
                  <div className="space-y-4">
                    <p className="font-bold">बिक्रीकर्ता (प्रथम पक्ष):</p>
                    <div className="h-12 border-b border-dashed border-slate-400"></div>
                    <p className="text-xs">दस्तखत: ................................<br/>नाम: {sellerName}<br/>ना.प्र.नं.: {sellerCitizenNo}<br/>मिति: {todayDateNep}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold">खरिदकर्ता (दोस्रो पक्ष):</p>
                    <div className="h-12 border-b border-dashed border-slate-400"></div>
                    <p className="text-xs">दस्तखत: ................................<br/>नाम: {buyerName}<br/>ना.प्र.नं.: {buyerCitizenNo}<br/>मिति: {todayDateNep}</p>
                  </div>
                </div>

                <div className="pt-6 border-t mt-4">
                  <p className="font-bold text-xs">रोहबर / साक्षीहरू:</p>
                  <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                    <p>१) नाम: ................................... ठेगाना: ................................... सही: ............</p>
                    <p>२) नाम: ................................... ठेगाना: ................................... सही: ............</p>
                  </div>
                </div>
              </>
            )}

            {/* 2. GHAR BATO SIFARIS APPLICATION */}
            {activeTemplate === 'ghar_bato' && (
              <>
                <div className="text-right text-xs">
                  मिति: {todayDateNep}
                </div>

                <div className="space-y-1">
                  <p className="font-bold">श्रीमान् वडा अध्यक्षज्यू,</p>
                  <p>{wardOffice}।</p>
                </div>

                <div className="text-center font-bold underline py-2 text-base">
                  विषय: घरबाटो सिफारिस उपलब्ध गराई पाऊँ।
                </div>

                <div className="space-y-4 text-justify">
                  <p>
                    महोदय,<br/>
                    उपरोक्त विषयमा मेरो/हाम्रो नाममा मालपोत कार्यालयको स्रेस्तामा एकलौटी/संयुक्त दर्ता कायम रहेको जिल्ला {district}, {localGov} स्थित कित्ता नं. <strong>{kittaNo}</strong>, क्षेत्रफल <strong>{area}</strong> भएको जग्गामा <strong>{roadType}</strong> को पहुँच कायम रहेको हुँदा <strong>{sifarisPurpose}</strong> का लागि घरबाटो सिफारिस आवश्यक परेको छ।
                  </p>

                  <p>
                    उक्त जग्गाको स्थलगत सर्जमिन गरी बाटोको चौडाइ, प्रकार तथा मापदण्ड यकिन गरी नियमानुसारको सरकारी दस्तुर लिई घरबाटो प्रमाणित सिफारिस पत्र प्रदान गरिदिनुहुन सादर अनुरोध गर्दछु।
                  </p>

                  <div className="p-3 bg-slate-50 border rounded-xl space-y-1 text-xs font-sans print:bg-white print:border-slate-800">
                    <p className="font-bold text-slate-800">संलग्न कागजातहरू:</p>
                    <p>१. जग्गाधनी प्रमाणपुर्जाको प्रमाणित प्रतिलिपि - १ प्रति</p>
                    <p>२. चालु आर्थिक वर्षको एकीकृत सम्पत्ति कर / मालपोत तिरो तिरेको रसिद - १ प्रति</p>
                    <p>३. निवेदकको नागरिकता प्रमाणपत्रको प्रतिलिपि - १ प्रति</p>
                    <p>४. नापी कार्यालयबाट जारी भएको आधिकारिक नक्सा ट्रेस (Trace Map) - १ प्रति</p>
                  </div>
                </div>

                <div className="pt-10 text-right space-y-1">
                  <p className="font-bold">निवेदक:</p>
                  <p>नाम: {sellerName}</p>
                  <p>ठेगाना: {sellerAddress}</p>
                  <p>नागरिकता नं: {sellerCitizenNo}</p>
                  <p>सम्पर्क फोन: {sellerPhone}</p>
                  <p className="pt-4">दस्तखत: .....................................</p>
                </div>
              </>
            )}

            {/* 3. NAMSARI APPLICATION */}
            {activeTemplate === 'namsari' && (
              <>
                <div className="text-right text-xs">
                  मिति: {todayDateNep}
                </div>

                <div className="space-y-1">
                  <p className="font-bold">श्रीमान् प्रमुख मालपोत अधिकृतज्यू,</p>
                  <p>{malpotOffice}।</p>
                </div>

                <div className="text-center font-bold underline py-2 text-base">
                  विषय: हकदाबी तथा जग्गा नामसारी दर्ता गरी पाऊँ।
                </div>

                <div className="space-y-4 text-justify">
                  <p>
                    महोदय,<br/>
                    उपरोक्त सम्बन्धमा तपसिलको जग्गा मेरो <strong>{relation}</strong> नाता पर्ने <strong>{deceasedName}</strong> को नाममा एकलौटी दर्ता स्रेस्ता कायम रहेकोमा निजको मिति <strong>{deceasedDate}</strong> मा स्वर्गारोहण भएको हुँदा उक्त जग्गाको हकदार म निवेदक मात्र भएकोले मेरो नाममा नामसारी दर्ता गरी नयाँ जग्गाधनी दर्ता प्रमाणपुर्जा पाउन यो निवेदन पेश गरेको छु।
                  </p>

                  <div className="p-3 bg-slate-50 border rounded-xl space-y-1 text-xs font-sans print:bg-white print:border-slate-800">
                    <p className="font-bold text-slate-800">तपसिल (नामसारी हुने जग्गाको विवरण):</p>
                    <p>• स्थान: जिल्ला {district}, स्थानीय तह: {localGov}</p>
                    <p>• कित्ता नम्बर: <strong>{kittaNo}</strong>, क्षेत्रफल: <strong>{area}</strong></p>
                    <p>• साबिक जग्गाधनी: {deceasedName}</p>
                    <p>• नामसारी माग गर्ने हकदार: {sellerName} (नाता: {relation})</p>
                  </div>

                  <p>
                    यसमा अन्य कुनै हकदारहरूको हकदाबी नरहेको, भए गरेमा कानुन बमोजिम म निवेदक स्वयं जिम्मेवार हुनेछु। वडा कार्यालयबाट जारी भएको मृत्यु दर्ता, नाता प्रमाणित तथा सर्जमिन मुचुल्का यसै निवेदनसाथ संलग्न गरी पेश गरेको छु।
                  </p>
                </div>

                <div className="pt-8 text-right space-y-1">
                  <p className="font-bold">निवेदक (हकदार):</p>
                  <p>नाम: {sellerName}</p>
                  <p>ठेगाना: {sellerAddress}</p>
                  <p>नागरिकता नं: {sellerCitizenNo}</p>
                  <p>सम्पर्क नं: {sellerPhone}</p>
                  <p className="pt-4">दस्तखत: .....................................</p>
                </div>
              </>
            )}

            {/* 4. ROKKA / PHUKUWA APPLICATION */}
            {activeTemplate === 'rokka_phukuwa' && (
              <>
                <div className="text-right text-xs">
                  मिति: {todayDateNep}
                </div>

                <div className="space-y-1">
                  <p className="font-bold">श्रीमान् प्रमुख मालपोत अधिकृतज्यू,</p>
                  <p>मालपोत कार्यालय, {district}।</p>
                </div>

                <div className="text-center font-bold underline py-2 text-base">
                  विषय: जग्गा {rokkaAction === 'rokka' ? 'रोक्का राखी' : 'फुकुवा गरी'} पाऊँ।
                </div>

                <div className="space-y-4 text-justify">
                  <p>
                    महोदय,<br/>
                    {bankOrgName} को <strong>{loanAccountNo}</strong> बमोजिम ऋणी <strong>{buyerName}</strong> तथा जग्गाधनी <strong>{sellerName}</strong> को नाममा दर्ता कायम रहेको तपसिल बमोजिमको घरजग्गा प्रचलित कानुन अनुसार <strong>{rokkaAction === 'rokka' ? 'धितो सुरक्षणबापत रोक्का राखी' : 'कर्जा चुक्ता भइसकेकोले रोक्का फुकुवा गरी'}</strong> पत्र उपलब्ध गराइदिनुहुन अनुरोध गरिन्छ।
                  </p>

                  <div className="p-3 bg-slate-50 border rounded-xl space-y-1 text-xs font-sans print:bg-white print:border-slate-800">
                    <p className="font-bold text-slate-800">तपसिल (रोक्का/फुकुवा हुने सम्पत्ति):</p>
                    <p>• जग्गाधनीको नाम: {sellerName}</p>
                    <p>• स्थान: {district}, {localGov}</p>
                    <p>• कित्ता नं: <strong>{kittaNo}</strong>, क्षेत्रफल: <strong>{area}</strong></p>
                    <p>• संस्थाको आधिकारिक पत्र/चलानी नं: {loanAccountNo}</p>
                  </div>
                </div>

                <div className="pt-10 text-right space-y-1">
                  <p className="font-bold">आधिकारिक हस्ताक्षरकर्ता:</p>
                  <p>संस्थाको नाम: {bankOrgName}</p>
                  <p>दस्तखत / छाप: .....................................</p>
                </div>
              </>
            )}

            {/* 5. BOUNDARY DEMARCATION */}
            {activeTemplate === 'boundary' && (
              <>
                <div className="text-right text-xs">
                  मिति: {todayDateNep}
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
                  <p>सम्पर्क नं: {sellerPhone}</p>
                  <p className="pt-4">दस्तखत: .....................................</p>
                </div>
              </>
            )}

            {/* 6. FIELDBOOK / TRACE */}
            {activeTemplate === 'fieldbook' && (
              <>
                <div className="text-right text-xs">
                  मिति: {todayDateNep}
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
                  <p>सम्पर्क नं: {sellerPhone}</p>
                  <p className="pt-4">दस्तखत: .....................................</p>
                </div>
              </>
            )}

            {/* 7. RENT AGREEMENT */}
            {activeTemplate === 'rent' && (
              <>
                <div className="text-center space-y-1 border-b pb-4">
                  <h2 className="text-xl sm:text-2xl font-black tracking-wide">
                    घर तथा सटर बहाल सम्झौता पत्र
                  </h2>
                  <p className="text-xs text-slate-500">
                    (मुलुकी देवानी संहिता, २०७४ को परिच्छेद ९ 'घर बहाल सम्बन्धी व्यवस्था' बमोजिम)
                  </p>
                </div>

                <div className="space-y-4 text-justify">
                  <p>
                    लिखितम् हामी <strong>प्रथम पक्ष (घरधनी)</strong> {sellerAddress} स्थायी ठेगाना भई हाल {district}, {localGov} बस्ने नागरिकता प्रमाणपत्र नं. {sellerCitizenNo} भएको श्री <strong>{sellerName}</strong> (यसपछि "प्रथम पक्ष" भनिएको) तथा <strong>दोस्रो पक्ष (बहालमा लिने)</strong> स्थायी ठेगाना {buyerAddress} भई हाल {district} बस्ने नागरिकता/प्यान प्रमाणपत्र नं. {buyerCitizenNo} भएको श्री <strong>{buyerName}</strong> (यसपछि "दोस्रो पक्ष" भनिएको) का बीचमा तपसिलमा उल्लिखित घर/सटर आपसी मञ्जुरीले बहाल (भाडा) मा लिने-दिने गरी यो सम्झौता पत्र सम्पन्न गरियो।
                  </p>

                  <div className="p-4 bg-slate-50 border rounded-xl space-y-1.5 font-sans text-xs sm:text-sm print:bg-white print:border-slate-800">
                    <p className="font-bold text-slate-800">तपसिल (बहाल सम्पत्ति तथा आर्थिक सर्तहरू):</p>
                    <p>• सम्पत्तिको स्थान: <strong>{district}, {localGov}</strong></p>
                    <p>• बहालमा दिइएको एकाइ/विवरण: <strong>{rentUnitType}</strong></p>
                    <p>• प्रयोजन: <strong>{rentPurpose}</strong></p>
                    <p>• मासिक बहाल (भाडा) रकम: <strong>रु. {monthlyRent} /- (अक्षरेपी ........................................)</strong></p>
                    <p>• अग्रिम सुरक्षण धरौटी (Security Deposit): <strong>रु. {securityDeposit} /-</strong></p>
                    <p>• सम्झौता अवधि: <strong>{leaseDuration}</strong></p>
                    <p>• भाडा भुक्तानी भाका: <strong>{paymentDay}</strong></p>
                    <p>• बिजुली महसुल दर: <strong>{electricityUnitRate}</strong></p>
                    <p>• खानेपानी तथा फोहोर व्यवस्थापन: <strong>{waterWasteRate}</strong></p>
                  </div>

                  <div className="space-y-2 pt-2 text-xs sm:text-sm">
                    <p className="font-bold underline text-slate-800">करारका मुख्य सर्त तथा बन्देजहरू:</p>
                    <p>१. दोस्रो पक्षले प्रत्येक महिनाको बहाल रकम तोकिएको भाकाभित्र प्रथम पक्षलाई अनिवार्य रूपमा बुझाई भरपाई लिनुपर्नेछ।</p>
                    <p>२. उपभोग गरेको बिजुली (सब-मिटर अनुसार), खानेपानी तथा फोहोरमैला निष्कासन शुल्क दोस्रो पक्ष स्वयंले समयमै भुक्तानी गर्नुपर्नेछ।</p>
                    <p>३. बहालमा लिएको घर/सटरमा प्रचलित नेपाल कानुनले निषेध गरेको कुनै पनि गैरकानुनी वा समाजलाई असर पर्ने गतिविधि गर्न पाइने छैन।</p>
                    <p>४. प्रथम पक्षको पूर्व लिखित अनुमति बिना दोस्रो पक्षले उक्त सम्पत्ति तेस्रो व्यक्ति वा संस्थालाई उप-बहाल (Sub-lease) मा दिन पाउने छैन।</p>
                    <p>५. सामान्य दैनिक टुटफुट मर्मत दोस्रो पक्षले गर्नुपर्नेछ। भवनको मुख्य संरचनात्मक (Structural) मर्मत प्रथम पक्षको जिम्मेवारी हुनेछ।</p>
                    <p>६. सम्झौता अवधि समाप्त हुनु अगावै कुनै एक पक्षले बहाल खाली गर्न वा गराउन चाहेमा कम्तीमा <strong>{noticePeriod}</strong> लिखित पूर्वसूचना दिनुपर्नेछ।</p>
                    <p>७. सम्झौता समाप्त भई सम्पत्ति दुरुस्त अवस्थामा बुझाएपछि प्रथम पक्षले बाँकी बक्यौता कट्टा गरी अग्रिम सुरक्षण धरौटी रकम दोस्रो पक्षलाई फिर्ता गर्नुपर्नेछ।</p>
                  </div>

                  <p className="pt-2 text-xs">
                    माथि उल्लिखित सम्पूर्ण बेहोरा हामी दुवै पक्षले राम्ररी पढी, बुझी, पूर्ण होस-हवासमा कसैको दबाब वा प्रभावमा नपरी साक्षीहरूको रोहबरमा सहीछाप गरी एक-एक प्रति लियौँ, दियौँ।
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t mt-6">
                  <div className="space-y-4">
                    <p className="font-bold">प्रथम पक्ष (घरधनी):</p>
                    <div className="h-12 border-b border-dashed border-slate-400"></div>
                    <p className="text-xs">दस्तखत: ................................<br/>नाम: {sellerName}<br/>मिति: {todayDateNep}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-bold">दोस्रो पक्ष (बहालवाला):</p>
                    <div className="h-12 border-b border-dashed border-slate-400"></div>
                    <p className="text-xs">दस्तखत: ................................<br/>नाम: {buyerName}<br/>मिति: {todayDateNep}</p>
                  </div>
                </div>

                <div className="pt-6 border-t mt-4">
                  <p className="font-bold text-xs">रोहबर / साक्षीहरू:</p>
                  <div className="grid grid-cols-2 gap-4 text-xs pt-2">
                    <p>१) नाम: ................................... ठेगाना: ................................... सही: ............</p>
                    <p>२) नाम: ................................... ठेगाना: ................................... सही: ............</p>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>

        {/* Dedicated Free Word & Excel Download Vault (hidden on print) */}
        <div className="print:hidden bg-linear-to-br from-slate-900 via-slate-850 to-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
              <Download className="w-3.5 h-3.5" />
              <span>१००% निःशुल्क डाउनलोड भल्ट (Free Word & Excel Templates)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              सम्पादन गर्न मिल्ने आधिकारिक कानुनी तथा नापी डकुमेन्टहरू (.docx / .xlsx)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              कम्प्युटर वा मोबाइलमा एमएस वर्ड (Word) र एक्सेल (Excel) मा खोलेर नाम र विवरण तुरुन्त परिवर्तन गरी आफ्नै अफिसियल काममा प्रयोग गर्नुहोस्:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Download Card 1 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-2xs font-bold">Word (.docx)</span>
                <h4 className="font-bold text-sm text-white">जग्गा बैनापट्टा लिखित कागज</h4>
                <p className="text-2xs text-slate-400">मुलुकी देवानी संहिता अनुसार जग्गा खरिद-बिक्री बैना कागजको पूर्ण सम्पादनयोग्य ढाँचा।</p>
              </div>
              <a
                href="/downloads/bayanapatta-paper-format.docx"
                download
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Word फाइल डाउनलोड</span>
              </a>
            </div>

            {/* Download Card 2 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-2xs font-bold">Word (.docx)</span>
                <h4 className="font-bold text-sm text-white">घर तथा सटर बहाल सम्झौता</h4>
                <p className="text-2xs text-slate-400">आवासीय फ्ल्याट तथा व्यावसायिक सटर भाडामा दिँदा गरिने आधिकारिक कानुनी सम्झौता पत्र।</p>
              </div>
              <a
                href="/downloads/house-rent-agreement-format.docx"
                download
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Word सम्झौता डाउनलोड</span>
              </a>
            </div>

            {/* Download Card 3 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-2xs font-bold">Word (.docx)</span>
                <h4 className="font-bold text-sm text-white">घरबाटो सिफारिस माग निवेदन</h4>
                <p className="text-2xs text-slate-400">वडा कार्यालयबाट बैंक कर्जा तथा घर निर्माणका लागि घरबाटो प्रमाणित सिफारिस माग्ने आधिकारिक निवेदन।</p>
              </div>
              <button
                onClick={() => { setActiveTemplate('ghar_bato'); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <FileSignature className="w-3.5 h-3.5" />
                <span>फारम भरी A4 प्रिन्ट / PDF</span>
              </button>
            </div>

            {/* Download Card 4 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-2xs font-bold">Word (.docx)</span>
                <h4 className="font-bold text-sm text-white">जग्गा नामसारी तथा हकदाबी निवेदन</h4>
                <p className="text-2xs text-slate-400">मृतक जग्गाधनीको जग्गा आफ्ना हकदारको नाममा नामसारी गर्न मालपोत कार्यालयमा दिइने निवेदन।</p>
              </div>
              <button
                onClick={() => { setActiveTemplate('namsari'); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Users className="w-3.5 h-3.5" />
                <span>फारम भरी A4 प्रिन्ट / PDF</span>
              </button>
            </div>

            {/* Download Card 5 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-2xs font-bold">Word (.docx)</span>
                <h4 className="font-bold text-sm text-white">नापी सीमांकन निवेदन पत्र</h4>
                <p className="text-2xs text-slate-400">नापी कार्यालयमा अमिन खटाई साँध-सिमाना छुट्याउन पेश गरिने आधिकारिक सरकारी निवेदन।</p>
              </div>
              <a
                href="/downloads/boundary-demarcation-application.docx"
                download
                className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Word निवेदन डाउनलोड</span>
              </a>
            </div>

            {/* Download Card 6 */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-2xs font-bold">Excel (.xlsx)</span>
                <h4 className="font-bold text-sm text-white">जग्गा नापजाँच स्वचालित एक्सेल सिट</h4>
                <p className="text-2xs text-slate-400">रोपनी-आना र बिघा-कट्ठा हाल्नासाथ स्वतः वर्गफिट, वर्गमिटर र कुल मूल्य निकाल्ने फर्मुला सिट।</p>
              </div>
              <a
                href="/downloads/nepal-land-area-calculator.xlsx"
                download
                className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Excel सिट डाउनलोड</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}
