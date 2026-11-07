'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  Sparkles, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  ChevronRight, 
  ExternalLink,
  Users,
  MapPin,
  Coins,
  Scale,
  Calendar,
  Eye,
  Edit3
} from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

export default function BayanaAgreementGenerator() {
  const [activeView, setActiveView] = useState<'form' | 'preview'>('form');
  const [copied, setCopied] = useState(false);

  // Date
  const [agreementDate, setAgreementDate] = useState('२०८१ साल कात्तिक महिनाको २५ गते रोज');

  // Seller (बिक्रेता / पहिलो पक्ष)
  const [sellerName, setSellerName] = useState('राम बहादुर श्रेष्ठ');
  const [sellerFather, setSellerFather] = useState('हरि बहादुर श्रेष्ठ');
  const [sellerGrandfather, setSellerGrandfather] = useState('कृष्ण बहादुर श्रेष्ठ');
  const [sellerAge, setSellerAge] = useState('४८');
  const [sellerDistrict, setSellerDistrict] = useState('काठमाडौँ');
  const [sellerMunicipality, setSellerMunicipality] = useState('टोखा नगरपालिका');
  const [sellerWard, setSellerWard] = useState('३');
  const [sellerTole, setSellerTole] = useState('चण्डेश्वरी');
  const [sellerCitizenship, setSellerCitizenship] = useState('२७-०१-७५-१२३४५');
  const [sellerCitizenshipDist, setSellerCitizenshipDist] = useState('काठमाडौँ');
  const [sellerPhone, setSellerPhone] = useState('९८४१००००००');

  // Buyer (क्रेता / दोस्रो पक्ष)
  const [buyerName, setBuyerName] = useState('श्याम कुमार अधिकारी');
  const [buyerFather, setBuyerFather] = useState('माधव प्रसाद अधिकारी');
  const [buyerGrandfather, setBuyerGrandfather] = useState('गणेश प्रसाद अधिकारी');
  const [buyerAge, setBuyerAge] = useState('३६');
  const [buyerDistrict, setBuyerDistrict] = useState('ललितपुर');
  const [buyerMunicipality, setBuyerMunicipality] = useState('ललितपुर महानगरपालिका');
  const [buyerWard, setBuyerWard] = useState('२');
  const [buyerTole, setBuyerTole] = useState('सानेपा');
  const [buyerCitizenship, setBuyerCitizenship] = useState('२८-०२-७६-६७८९०');
  const [buyerCitizenshipDist, setBuyerCitizenshipDist] = useState('ललितपुर');
  const [buyerPhone, setBuyerPhone] = useState('९८५१००००००');

  // Land Details (जग्गाको विवरण)
  const [landDistrict, setLandDistrict] = useState('काठमाडौँ');
  const [landMunicipality, setLandMunicipality] = useState('टोखा नगरपालिका');
  const [landWard, setLandWard] = useState('३');
  const [landKittaNo, setLandKittaNo] = useState('४५६');
  const [landArea, setLandArea] = useState('०-४-२-० (चार आना दुई पैसा)');
  const [landAreaSqM, setLandAreaSqM] = useState('१४३.१२ वर्गमिटर');
  
  // Four Boundaries (चारकिल्ला)
  const [boundEast, setBoundEast] = useState('हरि प्रसादको कित्ता नं. ४५५ को जग्गा');
  const [boundWest, setBoundWest] = useState('१३ फिट चौडा ग्राभेल मोटरबाटो');
  const [boundNorth, setBoundNorth] = useState('सीता देवीको कित्ता नं. ४५०');
  const [boundSouth, setBoundSouth] = useState('गोविन्द महर्जनको कित्ता नं. ४५७');

  // Financials & Terms (आर्थिक विवरण तथा सर्तहरू)
  const [totalPriceNumber, setTotalPriceNumber] = useState('५०,००,०००');
  const [totalPriceWords, setTotalPriceWords] = useState('पचास लाख रुपैयाँ मात्र');
  const [advanceAmountNumber, setAdvanceAmountNumber] = useState('५,००,०००');
  const [advanceAmountWords, setAdvanceAmountWords] = useState('पाँच लाख रुपैयाँ मात्र');
  const [remainingAmountNumber, setRemainingAmountNumber] = useState('४५,००,०००');
  const [remainingAmountWords, setRemainingAmountWords] = useState('पैंतालीस लाख रुपैयाँ मात्र');
  const [paymentMethod, setPaymentMethod] = useState('बैंकको एकाउन्टपेयी चेक / कनेक्ट आईपीएस (ConnectIPS) मार्फत');
  const [deadlineDate, setDeadlineDate] = useState('२०८१ साल चैत मसान्तभित्र');
  const [malpotExpBearer, setMalpotExpBearer] = useState('क्रेता (दोस्रो पक्ष) ले');
  const [penaltyTerms, setPenaltyTerms] = useState('दोब्बर हर्जाना (बिक्रेता पछि हटे बैनाको दोब्बर रकम तिर्नुपर्ने)');

  // Witnesses (साक्षीहरू)
  const [witness1Name, setWitness1Name] = useState('ईश्वर थापा');
  const [witness1Address, setWitness1Address] = useState('टोखा न.पा. वडा नं. ३, काठमाडौँ');
  const [witness2Name, setWitness2Name] = useState('सन्तोष खड्का');
  const [witness2Address, setWitness2Address] = useState('ललितपुर म.न.पा. वडा नं. २, ललितपुर');

  // Load sample default
  const handleResetSample = () => {
    setSellerName('राम बहादुर श्रेष्ठ');
    setBuyerName('श्याम कुमार अधिकारी');
    setLandKittaNo('४५६');
    setTotalPriceNumber('५०,००,०००');
    setAdvanceAmountNumber('५,००,०००');
    setRemainingAmountNumber('४५,००,०००');
    setDeadlineDate('२०८१ साल चैत मसान्तभित्र');
  };

  const handlePrint = () => {
    setActiveView('preview');
    setTimeout(() => {
      window.print();
    }, 300);
  };

  const legalDocumentText = `
घरजग्गा खरिदबिक्री बैनापट्टाको लिखित सम्झौतापत्र
(मुलुकी देवानी संहिता, २०७४ को भाग ५, करार तथा अन्य दायित्व सम्बन्धी व्यवस्था अन्तर्गत)

लिखितम् प्रथम पक्ष (जग्गा बिक्रेता):
जिल्ला ${sellerDistrict}, ${sellerMunicipality} वडा नं. ${sellerWard}, ${sellerTole} बस्ने, ${sellerGrandfather} को नाति, ${sellerFather} को छोरा/छोरी, वर्ष ${sellerAge} को, नागरिकता प्रमाणपत्र नं. ${sellerCitizenship} (जारी जिल्ला ${sellerCitizenshipDist}), फोन नं. ${sellerPhone} भएको श्री ${sellerName} (यसपछि "प्रथम पक्ष वा बिक्रेता" भनिनेछ)।

लिखितम् दोस्रो पक्ष (जग्गा खरिदकर्ता/क्रेता):
जिल्ला ${buyerDistrict}, ${buyerMunicipality} वडा नं. ${buyerWard}, ${buyerTole} बस्ने, ${buyerGrandfather} को नाति, ${buyerFather} को छोरा/छोरी, वर्ष ${buyerAge} को, नागरिकता प्रमाणपत्र नं. ${buyerCitizenship} (जारी जिल्ला ${buyerCitizenshipDist}), फोन नं. ${buyerPhone} भएको श्री ${buyerName} (यसपछि "दोस्रो पक्ष वा क्रेता" भनिनेछ)।

हामी दुवै पक्षहरू स्वस्थ चित्त, होस-हवासमा रही कुनै दबाब वा करकाप बिना एकापसमा निम्न सर्तहरूका आधारमा घरजग्गा खरिदबिक्री गर्न मञ्जुर भई यो बैनापट्टा लिखत तयार गरी सहिछाप गरिदिएका छौँ:

१. जग्गाको विवरण तथा चारकिल्ला:
प्रथम पक्ष (बिक्रेता) को एकल नाम दर्ता स्वामित्वमा रहेको जिल्ला ${landDistrict}, ${landMunicipality} वडा नं. ${landWard} स्थित साविक/हाल कित्ता नं. ${landKittaNo} को क्षेत्रफल ${landArea} (${landAreaSqM}) जग्गा, जसको चारकिल्ला:
• पूर्व: ${boundEast}
• पश्चिम: ${boundWest}
• उत्तर: ${boundNorth}
• दक्षिण: ${boundSouth}
उक्त चारकिल्ला भित्रको सम्पूर्ण हक, अधिकार र भोगचलन सहितको जग्गा दोस्रो पक्षलाई बिक्री गर्न प्रथम पक्ष पूर्ण मञ्जुर हुनुभएको छ।

२. कुल मूल्य तथा बैना रकम सम्बन्धी सर्त:
उक्त कित्ता जग्गाको कुल खरिदबिक्री मूल्य (थैली अंक) आपसी सहमतिमा रु. ${totalPriceNumber}/- (अक्षरेपी ${totalPriceWords}) कायम गरिएको छ। सोमध्ये आजका मितिमा दोस्रो पक्षले प्रथम पक्षलाई पेश्की बैना स्वरूप रु. ${advanceAmountNumber}/- (अक्षरेपी ${advanceAmountWords}) ${paymentMethod} मार्फत भुक्तानी गरी प्रथम पक्षले बुझिलिनुभएको छ। बाँकी भुक्तानी गर्नुपर्ने रकम रु. ${remainingAmountNumber}/- (अक्षरेपी ${remainingAmountWords}) रहेको छ।

३. रजिस्ट्रेसन पास गर्ने म्याद तथा बाँकी भुक्तानी:
दोस्रो पक्षले बाँकी रकम रु. ${remainingAmountNumber}/- मिति ${deadlineDate} भित्र सम्बन्धित मालपोत कार्यालयमा जग्गा रजिस्ट्रेसन पास गर्दाका बखत प्रथम पक्षलाई पूर्ण रूपमा भुक्तानी गर्नुपर्नेछ र सोही दिन प्रथम पक्षले उक्त जग्गा दोस्रो पक्षको नाममा रजिस्ट्रेसन पास (दाखिल खारेज) गरिदिनुपर्नेछ।

४. हर्जाना तथा उल्लङ्घन सम्बन्धी कडा कानुनी सर्त:
क) यदि तोकिएको मितिभित्र दोस्रो पक्ष (क्रेता) ले बाँकी रकम भुक्तानी गर्न नसकेमा वा जग्गा खरिद गर्न इन्कार गरेमा प्रथम पक्षले बुझिलिएको बैना रकम पूर्ण रूपमा जफत हुनेछ।
ख) यदि दोस्रो पक्ष बाँकी रकम बुझाउन तयार रहँदारहँदै पनि प्रथम पक्ष (बिक्रेता) ले जग्गा पास गरिदिन इन्कार गरेमा, मूल्य बढाउन खोजेमा वा अन्यत्र बिक्री गर्न खोजेमा, प्रथम पक्षले दोस्रो पक्षबाट बुझेको बैना रकम र सोको दोब्बर हर्जाना सहित फिर्ता गर्नुपर्नेछ वा दोस्रो पक्षले मुलुकी देवानी संहिता अनुसार अदालतमा मुद्दा दायर गरी अदालतको आदेशबाटै जग्गा पास गराउन पाउनेछ।

५. दायित्व, रोक्का र राजस्व खर्च:
उक्त जग्गा कुनै बैंक, वित्तीय संस्था वा अदालतबाट रोक्का नरहेको र कुनै हकदाबी नभएको प्रथम पक्षले कबुल गर्दछ। मालपोत कार्यालयमा लाग्ने रजिस्ट्रेसन दस्तुर तथा अन्य सरकारी राजस्व ${malpotExpBearer} व्यहोर्नेछ।

६. वडा प्रमाणीकरण सम्बन्धी व्यवस्था:
मुलुकी देवानी संहिता, २०७४ को दफा ३६ को उपदफा (२) बमोजिम रु. १ लाखभन्दा बढी थैली अंक भएको अचल सम्पत्ति कारोबारको यो सम्झौतापत्र स्थानीय तह (वडा कार्यालय) मा दर्ता वा प्रमाणित गराउन दुवै पक्ष मञ्जुर छौँ।

यसमा लेखिएको व्यहोरा सत्य साँचो हो, फरक परे कानुन बमोजिम सहुँला बुझाउँला भनी साक्षीहरूको रोहबरमा आज मिति ${agreementDate} मा यो बैनापट्टामा सहिछाप गरिदियौँ।
`.trim();

  const handleCopyText = async () => {
    const ok = await copyToClipboard(legalDocumentText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Top Toggle & Action Header */}
      <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <span className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
            <Scale className="w-6 h-6" />
          </span>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              आधिकारिक घरजग्गा बैनापट्टा (A4 PDF) जेनेरेटर
            </h2>
            <p className="text-xs text-slate-500">
              मुलुकी देवानी संहिता २०७४ अनुसार अदालत तथा वडामा मान्य हुने औपचारिक ढाँचा
            </p>
          </div>
        </div>

        {/* View Switcher & Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setActiveView('form')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeView === 'form' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>१. विवरण भर्नुहोस्</span>
            </button>
            <button
              onClick={() => setActiveView('preview')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeView === 'preview' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>२. A4 प्रिन्ट / PDF हेर्नुहोस्</span>
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-transform active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>A4 PDF प्रिन्ट</span>
          </button>

          <button
            onClick={handleCopyText}
            className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'कपी भयो!' : 'Word कपी'}</span>
          </button>
        </div>

      </div>

      {/* ==================================================== */}
      {/* VIEW 1: INTERACTIVE FORM INPUTS */}
      {/* ==================================================== */}
      {activeView === 'form' && (
        <div className="space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* SELLER (बिक्रेता विवरण) */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-black text-sm text-slate-900 dark:text-white">
                    १. प्रथम पक्ष (जग्गा बिक्रेता / जग्गाधनी)
                  </h3>
                </div>
                <span className="text-2xs font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                  बिक्रेता
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">जग्गाधनीको पूरा नाम:</label>
                  <input
                    type="text"
                    value={sellerName}
                    onChange={e => setSellerName(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">उमेर:</label>
                  <input
                    type="text"
                    value={sellerAge}
                    onChange={e => setSellerAge(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">बाबुको नाम:</label>
                  <input
                    type="text"
                    value={sellerFather}
                    onChange={e => setSellerFather(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">बाजेको नाम:</label>
                  <input
                    type="text"
                    value={sellerGrandfather}
                    onChange={e => setSellerGrandfather(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">नागरिकता नं.:</label>
                  <input
                    type="text"
                    value={sellerCitizenship}
                    onChange={e => setSellerCitizenship(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">नागरिकता जारी जिल्ला:</label>
                  <input
                    type="text"
                    value={sellerCitizenshipDist}
                    onChange={e => setSellerCitizenshipDist(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">पालिका र वडा नं.:</label>
                  <input
                    type="text"
                    value={`${sellerMunicipality} - ${sellerWard}`}
                    onChange={e => setSellerMunicipality(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">सम्पर्क फोन नं.:</label>
                  <input
                    type="text"
                    value={sellerPhone}
                    onChange={e => setSellerPhone(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* BUYER (क्रेता विवरण) */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <h3 className="font-black text-sm text-slate-900 dark:text-white">
                    २. दोस्रो पक्ष (जग्गा खरिदकर्ता / क्रेता)
                  </h3>
                </div>
                <span className="text-2xs font-bold px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                  क्रेता
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">क्रेताको पूरा नाम:</label>
                  <input
                    type="text"
                    value={buyerName}
                    onChange={e => setBuyerName(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">उमेर:</label>
                  <input
                    type="text"
                    value={buyerAge}
                    onChange={e => setBuyerAge(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">बाबुको नाम:</label>
                  <input
                    type="text"
                    value={buyerFather}
                    onChange={e => setBuyerFather(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">बाजेको नाम:</label>
                  <input
                    type="text"
                    value={buyerGrandfather}
                    onChange={e => setBuyerGrandfather(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">नागरिकता नं.:</label>
                  <input
                    type="text"
                    value={buyerCitizenship}
                    onChange={e => setBuyerCitizenship(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">नागरिकता जारी जिल्ला:</label>
                  <input
                    type="text"
                    value={buyerCitizenshipDist}
                    onChange={e => setBuyerCitizenshipDist(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">पालिका र वडा नं.:</label>
                  <input
                    type="text"
                    value={`${buyerMunicipality} - ${buyerWard}`}
                    onChange={e => setBuyerMunicipality(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-600 dark:text-slate-400">सम्पर्क फोन नं.:</label>
                  <input
                    type="text"
                    value={buyerPhone}
                    onChange={e => setBuyerPhone(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* LAND DETAILS & BOUNDARIES (जग्गाको विवरण र चारकिल्ला) */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <MapPin className="w-4 h-4 text-amber-600" />
              <h3 className="font-black text-sm text-slate-900 dark:text-white">
                ३. जग्गाको ठेगाना, कित्ता नं. र चारकिल्ला विवरण
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">जिल्ला:</label>
                <input
                  type="text"
                  value={landDistrict}
                  onChange={e => setLandDistrict(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                />
              </div>
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">स्थानीय तह / वडा:</label>
                <input
                  type="text"
                  value={`${landMunicipality} वडा नं. ${landWard}`}
                  onChange={e => setLandMunicipality(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                />
              </div>
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">कित्ता नम्बर (Kitta No):</label>
                <input
                  type="text"
                  value={landKittaNo}
                  onChange={e => setLandKittaNo(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-black text-emerald-600"
                />
              </div>
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">क्षेत्रफल (रोपनी-आना वा बिघा):</label>
                <input
                  type="text"
                  value={landArea}
                  onChange={e => setLandArea(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <label className="font-bold text-xs text-slate-600 dark:text-slate-400 block mb-2">
                चारकिल्ला (Boundaries):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-2xs font-bold text-slate-400 uppercase">पूर्व (East):</span>
                  <input
                    type="text"
                    value={boundEast}
                    onChange={e => setBoundEast(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
                  />
                </div>
                <div>
                  <span className="text-2xs font-bold text-slate-400 uppercase">पश्चिम (West):</span>
                  <input
                    type="text"
                    value={boundWest}
                    onChange={e => setBoundWest(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
                  />
                </div>
                <div>
                  <span className="text-2xs font-bold text-slate-400 uppercase">उत्तर (North):</span>
                  <input
                    type="text"
                    value={boundNorth}
                    onChange={e => setBoundNorth(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
                  />
                </div>
                <div>
                  <span className="text-2xs font-bold text-slate-400 uppercase">दक्षिण (South):</span>
                  <input
                    type="text"
                    value={boundSouth}
                    onChange={e => setBoundSouth(e.target.value)}
                    className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FINANCIALS & LEGAL TERMS (थैली अंक, म्याद र सर्त) */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <Coins className="w-4 h-4 text-emerald-600" />
              <h3 className="font-black text-sm text-slate-900 dark:text-white">
                ४. थैली अंक, बैना रकम र रजिस्ट्रेसन पास गर्ने म्याद
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <label className="font-bold text-slate-500 uppercase text-2xs">१. कुल खरिदबिक्री मूल्य (रु.):</label>
                <input
                  type="text"
                  value={totalPriceNumber}
                  onChange={e => setTotalPriceNumber(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-base font-black text-slate-900 dark:text-white"
                />
                <input
                  type="text"
                  value={totalPriceWords}
                  onChange={e => setTotalPriceWords(e.target.value)}
                  placeholder="अक्षरमा..."
                  className="w-full p-1.5 text-2xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 space-y-1">
                <label className="font-bold text-emerald-700 dark:text-emerald-300 uppercase text-2xs">२. आज बुझाएको बैना रकम (रु.):</label>
                <input
                  type="text"
                  value={advanceAmountNumber}
                  onChange={e => setAdvanceAmountNumber(e.target.value)}
                  className="w-full p-2 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-slate-900 text-base font-black text-emerald-600"
                />
                <input
                  type="text"
                  value={advanceAmountWords}
                  onChange={e => setAdvanceAmountWords(e.target.value)}
                  placeholder="अक्षरमा..."
                  className="w-full p-1.5 text-2xs rounded-lg border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-slate-900"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <label className="font-bold text-slate-500 uppercase text-2xs">३. बाँकी भुक्तानी गर्नुपर्ने रकम (रु.):</label>
                <input
                  type="text"
                  value={remainingAmountNumber}
                  onChange={e => setRemainingAmountNumber(e.target.value)}
                  className="w-full p-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-base font-black text-slate-900 dark:text-white"
                />
                <input
                  type="text"
                  value={remainingAmountWords}
                  onChange={e => setRemainingAmountWords(e.target.value)}
                  placeholder="अक्षरमा..."
                  className="w-full p-1.5 text-2xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs pt-2">
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">जग्गा पास गर्ने अन्तिम म्याद:</label>
                <input
                  type="text"
                  value={deadlineDate}
                  onChange={e => setDeadlineDate(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
                />
              </div>
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">बैना भुक्तानी माध्यम:</label>
                <input
                  type="text"
                  value={paymentMethod}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                />
              </div>
              <div>
                <label className="font-bold text-slate-600 dark:text-slate-400">मालपोत रजिस्ट्रेसन खर्च:</label>
                <input
                  type="text"
                  value={malpotExpBearer}
                  onChange={e => setMalpotExpBearer(e.target.value)}
                  className="w-full mt-1 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                />
              </div>
            </div>
          </div>

          {/* WITNESSES (साक्षीहरू) */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <Users className="w-4 h-4 text-slate-600" />
              <h3 className="font-black text-sm text-slate-900 dark:text-white">
                ५. रोहबरमा बस्ने साक्षीहरूको विवरण
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <label className="font-bold text-slate-600 dark:text-slate-400">साक्षी १ (बिक्रेतातर्फ वा स्थानीय):</label>
                <input
                  type="text"
                  value={witness1Name}
                  onChange={e => setWitness1Name(e.target.value)}
                  placeholder="साक्षीको नाम..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                />
                <input
                  type="text"
                  value={witness1Address}
                  onChange={e => setWitness1Address(e.target.value)}
                  placeholder="ठेगाना..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-2xs"
                />
              </div>

              <div className="space-y-2">
                <label className="font-bold text-slate-600 dark:text-slate-400">साक्षी २ (क्रेतातर्फ वा स्थानीय):</label>
                <input
                  type="text"
                  value={witness2Name}
                  onChange={e => setWitness2Name(e.target.value)}
                  placeholder="साक्षीको नाम..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-medium"
                />
                <input
                  type="text"
                  value={witness2Address}
                  onChange={e => setWitness2Address(e.target.value)}
                  placeholder="ठेगाना..."
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-2xs"
                />
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
            <button
              onClick={handleResetSample}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>नमुना डेटा रिसेट</span>
            </button>

            <button
              onClick={() => setActiveView('preview')}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-transform active:scale-95"
            >
              <span>पूर्ण बैनापट्टा हेर्नुहोस् (Preview Agreement)</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* ==================================================== */}
      {/* VIEW 2: FORMAL A4 PRINTABLE DOCUMENT */}
      {/* ==================================================== */}
      {activeView === 'preview' && (
        <div className="space-y-6">
          
          {/* Printable Document Sheet */}
          <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-3xl border-2 border-slate-300 shadow-xl max-w-4xl mx-auto space-y-6 font-serif leading-relaxed print:m-0 print:p-8 print:shadow-none print:border-none print:rounded-none">
            
            {/* Header / Watermark style title */}
            <div className="text-center border-b-2 border-slate-800 pb-4 space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black tracking-wide">
                घरजग्गा खरिदबिक्री बैनापट्टाको लिखित सम्झौतापत्र
              </h1>
              <p className="text-xs font-sans text-slate-600">
                (मुलुकी देवानी संहिता, २०७४ को भाग ५, करार तथा अन्य दायित्व सम्बन्धी कानुनी व्यवस्था अन्तर्गत)
              </p>
            </div>

            {/* Parties Details */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-sm text-slate-900 underline font-sans">
                  लिखितम् प्रथम पक्ष (जग्गा बिक्रेता):
                </h4>
                <p className="text-justify leading-relaxed">
                  जिल्ला <strong>{sellerDistrict}</strong>, {sellerMunicipality} वडा नं. <strong>{sellerWard}</strong>, {sellerTole} बस्ने, श्री <strong>{sellerGrandfather}</strong> को नाति, श्री <strong>{sellerFather}</strong> को छोरा/छोरी, वर्ष <strong>{sellerAge}</strong> को, नागरिकता प्रमाणपत्र नं. <strong>{sellerCitizenship}</strong> (जारी जिल्ला {sellerCitizenshipDist}), सम्पर्क फोन नं. <strong>{sellerPhone}</strong> भएको श्री <strong>{sellerName}</strong> (यसपछि यस लिखतमा <em>"प्रथम पक्ष वा बिक्रेता"</em> भनिनेछ)।
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 className="font-bold text-sm text-slate-900 underline font-sans">
                  लिखितम् दोस्रो पक्ष (जग्गा खरिदकर्ता / क्रेता):
                </h4>
                <p className="text-justify leading-relaxed">
                  जिल्ला <strong>{buyerDistrict}</strong>, {buyerMunicipality} वडा नं. <strong>{buyerWard}</strong>, {buyerTole} बस्ने, श्री <strong>{buyerGrandfather}</strong> को नाति, श्री <strong>{buyerFather}</strong> को छोरा/छोरी, वर्ष <strong>{buyerAge}</strong> को, नागरिकता प्रमाणपत्र नं. <strong>{buyerCitizenship}</strong> (जारी जिल्ला {buyerCitizenshipDist}), सम्पर्क फोन नं. <strong>{buyerPhone}</strong> भएको श्री <strong>{buyerName}</strong> (यसपछि यस लिखतमा <em>"दोस्रो पक्ष वा क्रेता"</em> भनिनेछ)।
                </p>
              </div>

              <p className="text-justify leading-relaxed">
                हामी दुवै पक्षहरू पूर्ण होस-हवासमा, कसैको डर, धाक, धम्की वा करकापमा नपरी एकापसमा राजीखुसी भई निम्नबमोजिमका सर्तहरूको अधिनमा रही अचल सम्पत्ति (घर/जग्गा) खरिदबिक्री गर्न मञ्जुर भई यो बैनापट्टा लिखत तयार गरी साक्षीहरूको रोहबरमा सहिछाप गरिदिएका छौँ:
              </p>

              {/* Clauses */}
              <div className="space-y-3">
                <p className="text-justify leading-relaxed">
                  <strong>१. जग्गाको विवरण तथा चारकिल्ला:</strong> प्रथम पक्षको एकल नाम दर्ता भोगचलनमा रहेको जिल्ला {landDistrict}, {landMunicipality} वडा नं. {landWard} स्थित साविक/हाल कित्ता नं. <strong>{landKittaNo}</strong> को क्षेत्रफल <strong>{landArea}</strong> ({landAreaSqM}) जग्गा, जसको चारकिल्ला— पूर्व: {boundEast}, पश्चिम: {boundWest}, उत्तर: {boundNorth}, र दक्षिण: {boundSouth} भित्रको सम्पूर्ण हक, अधिकार र साविक भोगचलन सहितको जग्गा दोस्रो पक्षलाई बिक्री गर्न प्रथम पक्ष पूर्ण मञ्जुर हुनुभएको छ।
                </p>

                <p className="text-justify leading-relaxed">
                  <strong>२. कुल मूल्य तथा बैना रकम:</strong> उक्त जग्गाको कुल खरिदबिक्री मूल्य (थैली अंक) आपसी समझदारीमा रु. <strong>{totalPriceNumber}/-</strong> (अक्षरेपी {totalPriceWords}) कायम गरिएको छ। सोमध्ये आजका मितिमा दोस्रो पक्षले प्रथम पक्षलाई पेश्की बैना स्वरूप रु. <strong>{advanceAmountNumber}/-</strong> (अक्षरेपी {advanceAmountWords}) {paymentMethod} बुझाई प्रथम पक्षले सो रकम भरपाई गरी बुझिलिनुभएको छ। अब दोस्रो पक्षले प्रथम पक्षलाई बाँकी भुक्तानी गर्नुपर्ने रकम रु. <strong>{remainingAmountNumber}/-</strong> (अक्षरेपी {remainingAmountWords}) मात्र बाँकी रहेको छ।
                </p>

                <p className="text-justify leading-relaxed">
                  <strong>३. रजिस्ट्रेसन पास गर्ने अन्तिम म्याद:</strong> दोस्रो पक्षले बाँकी रकम रु. {remainingAmountNumber}/- मिति <strong>{deadlineDate}</strong> भित्र सम्बन्धित मालपोत कार्यालयमा जग्गा रजिस्ट्रेसन पास गर्दाका बखत प्रथम पक्षलाई पूर्ण रूपमा भुक्तानी गर्नुपर्नेछ र सोही दिन प्रथम पक्षले उक्त कित्ता जग्गा दोस्रो पक्षको नाममा मालपोत कार्यालयबाट रजिस्ट्रेसन पास (दाखिल खारेज) गरिदिनुपर्नेछ।
                </p>

                <p className="text-justify leading-relaxed">
                  <strong>४. हर्जाना तथा उल्लङ्घन सम्बन्धी कडा कानुनी सर्त:</strong>
                  <br />
                  क) यदि तोकिएको म्यादभित्र दोस्रो पक्ष (क्रेता) ले बाँकी रकम भुक्तानी गर्न नसकेमा वा जग्गा लिन अस्वीकार गरेमा प्रथम पक्षले बुझिलिएको बैना रकम पूर्ण रूपमा जफत हुनेछ।
                  <br />
                  ख) यदि दोस्रो पक्ष तोकिएको म्यादभित्र बाँकी रकम बुझाउन तयार रहँदारहँदै पनि प्रथम पक्ष (बिक्रेता) ले जग्गा पास गरिदिन आलटाल गरेमा, भाउ बढाउन खोजेमा वा अन्य कसैलाई बिक्री गरेमा, प्रथम पक्षले दोस्रो पक्षबाट बुझिलिएको बैना रकम र सोको <strong>दोब्बर हर्जाना</strong> तुरुन्त फिर्ता गर्नुपर्नेछ वा दोस्रो पक्षले मुलुकी देवानी संहिता अनुसार अदालतमा मुद्दा दायर गरी अदालतको आदेशबाटै जग्गा पास गराउन पाउनेछ।
                </p>

                <p className="text-justify leading-relaxed">
                  <strong>५. स्वामित्व तथा रोक्का फुकुवा:</strong> उक्त जग्गा कुनै बैंक, वित्तीय संस्था, अदालत वा सरकारी निकायबाट रोक्का नरहेको र कुनै पारिवारिक हकदाबी नभएको प्रथम पक्षले कबुल गर्दछ। मालपोत कार्यालयमा लाग्ने रजिस्ट्रेसन दस्तुर तथा अन्य सरकारी राजस्व <strong>{malpotExpBearer}</strong> व्यहोर्नेछ।
                </p>

                <p className="text-justify leading-relaxed">
                  <strong>६. वडा प्रमाणीकरण:</strong> मुलुकी देवानी संहिता, २०७४ को दफा ३६ को उपदफा (२) बमोजिम रु. १ लाखभन्दा बढी थैली अंक भएको अचल सम्पत्ति कारोबारको यो सम्झौतापत्र सम्बन्धित स्थानीय तह (वडा कार्यालय) मा दर्ता वा प्रमाणित गराउन दुवै पक्ष मञ्जुर छौँ।
                </p>
              </div>

              <p className="text-justify leading-relaxed pt-2">
                यसमा लेखिएको सम्पूर्ण व्यहोरा ठीक साँचो हो, फरक ठहरे कानुन बमोजिम सहुँला बुझाउँला भनी हामी दुवै पक्ष र साक्षीहरूको रोहबरमा आज मिति <strong>{agreementDate}</strong> मा यो बैनापट्टा लिखतमा खुसीराजीका साथ सहिछाप गरिदियौँ।
              </p>
            </div>

            {/* Signature & Thumbprint Blocks */}
            <div className="pt-8 border-t-2 border-slate-300 grid grid-cols-2 gap-8 text-xs font-sans">
              
              {/* Seller Box */}
              <div className="border border-slate-400 p-4 rounded-xl space-y-4">
                <span className="font-bold block underline">प्रथम पक्ष (बिक्रेता):</span>
                <div className="flex items-center justify-around pt-2">
                  <div className="w-16 h-20 border border-dashed border-slate-400 rounded flex items-center justify-center text-2xs text-slate-400 text-center">
                    दायाँ ल्याप्चे
                  </div>
                  <div className="w-16 h-20 border border-dashed border-slate-400 rounded flex items-center justify-center text-2xs text-slate-400 text-center">
                    बायाँ ल्याप्चे
                  </div>
                </div>
                <div className="pt-2 text-2xs space-y-1">
                  <p>दस्तखत: .......................................</p>
                  <p>नाम: <strong>{sellerName}</strong></p>
                  <p>ना.प्र.नं.: {sellerCitizenship}</p>
                </div>
              </div>

              {/* Buyer Box */}
              <div className="border border-slate-400 p-4 rounded-xl space-y-4">
                <span className="font-bold block underline">दोस्रो पक्ष (क्रेता):</span>
                <div className="flex items-center justify-around pt-2">
                  <div className="w-16 h-20 border border-dashed border-slate-400 rounded flex items-center justify-center text-2xs text-slate-400 text-center">
                    दायाँ ल्याप्चे
                  </div>
                  <div className="w-16 h-20 border border-dashed border-slate-400 rounded flex items-center justify-center text-2xs text-slate-400 text-center">
                    बायाँ ल्याप्चे
                  </div>
                </div>
                <div className="pt-2 text-2xs space-y-1">
                  <p>दस्तखत: .......................................</p>
                  <p>नाम: <strong>{buyerName}</strong></p>
                  <p>ना.प्र.नं.: {buyerCitizenship}</p>
                </div>
              </div>

            </div>

            {/* Witnesses Block */}
            <div className="pt-4 border-t border-slate-200 text-xs font-sans">
              <span className="font-bold block mb-2 underline">रोहबरमा बस्ने साक्षीहरू:</span>
              <div className="grid grid-cols-2 gap-4 text-2xs">
                <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
                  <p>१. नाम: <strong>{witness1Name}</strong></p>
                  <p>ठेगाना: {witness1Address}</p>
                  <p>दस्तखत: .........................................</p>
                </div>
                <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
                  <p>२. नाम: <strong>{witness2Name}</strong></p>
                  <p>ठेगाना: {witness2Address}</p>
                  <p>दस्तखत: .........................................</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Floating Print CTA */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handlePrint}
              className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold flex items-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <Printer className="w-5 h-5" />
              <span>A4 साइजमा तुरुन्त प्रिन्ट वा PDF सेभ गर्नुहोस्</span>
            </button>
            <button
              onClick={() => setActiveView('form')}
              className="px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs font-bold"
            >
              विवरण फेरि सम्पादन गर्नुहोस्
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
