'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, 
  Circle, 
  Printer, 
  Copy, 
  Check, 
  AlertTriangle, 
  Building2, 
  FileText, 
  ShieldCheck, 
  RotateCcw, 
  ChevronRight,
  Info
} from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

type TransactionType = 'rajinama' | 'namsari' | 'bakaspatra' | 'anshabanda' | 'chhodpatra';
type RoadStatus = 'napi_road' | 'ward_certified' | 'goreto_only';
type OwnerPresence = 'self' | 'waris';
type LoanStatus = 'clear' | 'bank_clearance';

interface ChecklistItem {
  id: string;
  category: 'ward' | 'napi' | 'malpot' | 'special';
  titleNp: string;
  descNp: string;
  source: string;
  required: boolean;
}

export default function JaggaPassChecklist() {
  const [transactionType, setTransactionType] = useState<TransactionType>('rajinama');
  const [hasBuilding, setHasBuilding] = useState<boolean>(false);
  const [roadStatus, setRoadStatus] = useState<RoadStatus>('napi_road');
  const [ownerPresence, setOwnerPresence] = useState<OwnerPresence>('self');
  const [loanStatus, setLoanStatus] = useState<LoanStatus>('clear');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  // Generate dynamic checklist
  const getItems = (): ChecklistItem[] => {
    const items: ChecklistItem[] = [
      {
        id: 'nagrikta',
        category: 'malpot',
        titleNp: 'क्रेता र विक्रेता (दुवै पक्ष) को सक्कल नागरिकता र प्रतिलिपि',
        descNp: 'दुवै पक्षको सक्कल नागरिकता र स्पष्ट देखिने कम्तीमा २/२ प्रति फोटोकपी। नाबालक भए जन्मदर्ता र संरक्षकको नागरिकता।',
        source: 'सेवाग्राही आफैंसँग',
        required: true,
      },
      {
        id: 'lalpurja',
        category: 'malpot',
        titleNp: 'सक्कल जग्गाधनी प्रमाणपुर्जा (लालपुर्जा)',
        descNp: 'जग्गाको सक्कल लालपुर्जा (डिजिटल कम्प्युटर पुर्जा वा पुरानो ढड्डा पुर्जा)। कुनै च्यातिएको वा धमिलो नभएको हुनुपर्ने।',
        source: 'जग्गाधनीसँग',
        required: true,
      },
      {
        id: 'ward_tax',
        category: 'ward',
        titleNp: 'स्थानीय वडा/नगरपालिकाको चालु आ.व. को सम्पत्ति कर चुक्ता रसिद',
        descNp: 'जग्गा अवस्थित स्थानीय तह (वडा कार्यालय) मा चालु आर्थिक वर्षसम्मको सम्पूर्ण सम्पत्ति तथा मालपोत कर तिरेको सक्कल रसिद।',
        source: 'सम्बन्धित वडा कार्यालय',
        required: true,
      },
      {
        id: 'ward_charkilla',
        category: 'ward',
        titleNp: 'चार किल्ला प्रमाणित सिफारिस पत्र (३५ दिनभित्रको)',
        descNp: 'पूर्व, पश्चिम, उत्तर, दक्षिण सँधियारहरूको कित्ता नम्बर र नाम उल्लेख भएको वडा कार्यालयको आधिकारिक सिफारिस। जारी भएको ३५ दिनभित्र मालपोत पेश गर्नुपर्छ।',
        source: 'सम्बन्धित वडा कार्यालय',
        required: true,
      },
      {
        id: 'napi_trace',
        category: 'napi',
        titleNp: 'नापी कार्यालयबाट प्रमाणित कित्ता नक्सा (ब्लुप्रिन्ट / ट्रेस)',
        descNp: 'सम्बन्धित नापी शाखाबाट जारी गरिएको प्रमाणित नक्सा ट्रेस। जग्गाको कित्ता नम्बर, आकार र बाटोको रेखांकन स्पष्ट देखिनुपर्छ।',
        source: 'सम्बन्धित नापी कार्यालय',
        required: true,
      },
      {
        id: 'photos',
        category: 'malpot',
        titleNp: 'हालसालै खिचिएको २/२ प्रति पासपोर्ट साइज फोटो',
        descNp: 'क्रेता र विक्रेता दुवैको कान र मुखाकृति स्पष्ट बुझिने रंगीन पासपोर्ट साइज फोटो (मालपोत लिखत र ढड्डामा टाँस्नका लागि)।',
        source: 'सेवाग्राही आफैंसँग',
        required: true,
      },
    ];

    // Transaction specific
    if (transactionType === 'namsari') {
      items.push(
        {
          id: 'death_cert',
          category: 'ward',
          titleNp: 'मृतक जग्गाधनीको मृत्यु दर्ता प्रमाणपत्र (सक्कल र प्रतिलिपि)',
          descNp: 'स्थानीय पञ्जिकाधिकारी (वडा कार्यालय) बाट जारी भएको आधिकारिक मृत्यु दर्ता प्रमाणपत्र।',
          source: 'स्थानीय पञ्जिकाधिकारी (वडा)',
          required: true,
        },
        {
          id: 'relation_cert',
          category: 'ward',
          titleNp: 'पारिवारिक नाता प्रमाणित प्रमाणपत्र',
          descNp: 'मृतकसँग नामसारी माग गर्ने हकवालाहरूको नाता सम्बन्ध खुल्ने वडा कार्यालयको आधिकारिक नाता प्रमाणित सिफारिस पत्र।',
          source: 'सम्बन्धित वडा कार्यालय',
          required: true,
        },
        {
          id: 'sarjamin_muchulka',
          category: 'ward',
          titleNp: 'वडा स्तरीय सर्जमिन मुचुल्का (सँधियार तथा जनप्रतिनिधि रोहवर)',
          descNp: 'मृतकका अन्य कुनै हकवाला भए नभएको यकिन गर्न वडाले स्थानीय सँधियार र साक्षीहरूको रोहवरमा तयार गरेको सर्जमिन मुचुल्का।',
          source: 'सम्बन्धित वडा कार्यालय',
          required: true,
        }
      );
    }

    if (transactionType === 'bakaspatra') {
      items.push({
        id: 'bakas_relation',
        category: 'ward',
        titleNp: 'बकसपत्र दिने र लिने बीचको नाता प्रमाणित सिफारिस',
        descNp: 'रक्तनाता (तीन पुस्ताभित्र) का नातेदारलाई बकस दिँदा कम दस्तुर लाग्ने भएकाले नाता प्रमाणित अनिवार्य हुन्छ।',
        source: 'सम्बन्धित वडा कार्यालय',
        required: true,
      });
    }

    if (transactionType === 'anshabanda') {
      items.push({
        id: 'ansha_bharpai',
        category: 'special',
        titleNp: 'अंशबण्डाको लिखत तथा अंशियारहरूको नागरिकता र नाता प्रमाणित',
        descNp: 'सबै अंशियारहरूको आपसी सहमतिमा तयार गरिएको अंशबण्डाको लिखत र सबै अंशियारहरूको उपस्थिति वा मञ्जुरीनामा।',
        source: 'अंशियार पक्षहरू',
        required: true,
      });
    }

    // Building condition
    if (hasBuilding) {
      items.push(
        {
          id: 'naksa_pass',
          category: 'special',
          titleNp: 'घर नक्सा पास प्रमाणपत्र तथा स्वीकृत नक्सा (Building Permit)',
          descNp: 'स्थानीय तह (नगरपालिका/गाउँपालिका) बाट स्वीकृत भएको घरको नक्सा पास प्रमाणपत्र। २०५८ सालपछि बनेका पक्की भवनहरूलाई अनिवार्य।',
          source: 'सम्बन्धित पालिका/वडा कार्यालय',
          required: true,
        },
        {
          id: 'nirman_sampanna',
          category: 'special',
          titleNp: 'भवन निर्माण सम्पन्न प्रमाणपत्र (Construction Completion Certificate)',
          descNp: 'नगरपालिकाबाट घर निर्माण कार्य सम्पन्न भएको भनी जारी गरिएको आधिकारिक प्रमाणपत्र।',
          source: 'सम्बन्धित नगरपालिका/उपमहानगर',
          required: true,
        }
      );
    }

    // Road status
    if (roadStatus === 'ward_certified') {
      items.push({
        id: 'road_cert',
        category: 'ward',
        titleNp: 'बाटोको चौडाइ तथा निकास सम्बन्धी वडा सिफारिस पत्र',
        descNp: 'नापी नक्सामा बाटो नकोरिएको तर फिल्डमा बाटो भएको अवस्थामा वडा कार्यालयले बाटोको चौडाइ (कति फिट/मिटर) र निकास प्रमाणित गरेको पत्र।',
        source: 'सम्बन्धित वडा कार्यालय',
        required: true,
      });
    }

    // Owner presence
    if (ownerPresence === 'waris') {
      items.push({
        id: 'warisnama',
        category: 'special',
        titleNp: 'अधिकृत वारिसनामा (Power of Attorney) को सक्कल लिखत',
        descNp: 'जग्गाधनी स्वयं उपस्थित हुन नसक्दा अदालतबाट प्रमाणित (नेपालमा भए) वा विदेशमा भए सम्बन्धित नेपाली राजदूतावास (Embassy) बाट प्रमाणित कन्सुलर वारिसनामा।',
        source: 'अदालत / नेपाली दूतावास',
        required: true,
      });
    }

    // Loan status
    if (loanStatus === 'bank_clearance') {
      items.push({
        id: 'loan_noc',
        category: 'special',
        titleNp: 'बैंक/वित्तीय संस्थाको ऋण चुक्ता पत्र (NOC) र फुकुवा पत्र',
        descNp: 'जग्गा बैंकमा धितो रोक्का रहेको भए बैंकले मालपोत कार्यालयलाई सम्बोधन गरेको आधिकारिक फुकुवा पत्र र ऋण चुक्ता प्रमाणपत्र।',
        source: 'सम्बन्धित बैंक/वित्तीय संस्था',
        required: true,
      });
    }

    return items;
  };

  const items = getItems();
  const totalCount = items.length;
  const completedCount = items.filter((item) => checkedItems[item.id]).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = async () => {
    const txMap: Record<TransactionType, string> = {
      rajinama: 'राजीनामा (जग्गा खरिद / बिक्री)',
      namsari: 'मृत्युपश्चात जग्गा नामसारी (दाखिल खारेज)',
      bakaspatra: 'हालैको / शेषपछिको बकसपत्र',
      anshabanda: 'अंशबण्डा लिखत',
      chhodpatra: 'हकछोड / मिलापत्र लिखत',
    };

    let text = `जग्गा पास आवश्यक कागजात चेकलिस्ट - BR Bhatta (brbhatta.com)\n`;
    text += `कारोबारको प्रकार: ${txMap[transactionType]}\n`;
    text += `तयारी अवस्था: ${completedCount} / ${totalCount} कागजात तयार (${progressPercent}%)\n`;
    text += `घर/भवन: ${hasBuilding ? 'छ (नक्सा पास आवश्यक)' : 'छैन (खाली जग्गा)'}\n`;
    text += `बाटो: ${roadStatus === 'napi_road' ? 'नापी नक्सामा बाटो' : roadStatus === 'ward_certified' ? 'वडाले प्रमाणित गरेको बाटो' : 'गोरेटो मात्र'}\n\n`;
    text += `आवश्यक कागजातहरूको सूची:\n`;

    items.forEach((item, idx) => {
      const mark = checkedItems[item.id] ? '[✓ तयार]' : '[ ] बाँकी';
      text += `${idx + 1}. ${mark} ${item.titleNp} (${item.source})\n   विवरण: ${item.descNp}\n`;
    });

    text += `\nपूर्ण तयारी तथा मालपोत सेवा: https://www.brbhatta.com/tools/jagga-pass-checklist`;

    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="space-y-8">
      {/* Configuration Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            नेपाल मालपोत तथा नापी नियम अनुकूल
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            जग्गा पास इन्टरएक्टिभ कागजात तयारी टुल
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
            तपाईंले गर्न लाग्नुभएको कारोबार र जग्गाको अवस्था छान्नुहोस्। यो टुलले तपाईंलाई वडा कार्यालय, नापी कार्यालय र मालपोतमा चाहिने सम्पूर्ण आधिकारिक कागजातहरूको अनुकूलित चेकलिस्ट तयार गरिदिनेछ।
          </p>
        </div>

        {/* Filters Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-6 border-t border-slate-100 dark:border-slate-800">
          {/* 1. Transaction Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              १. कारोबारको प्रकार (Transaction)
            </label>
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value as TransactionType)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="rajinama">खरिद-बिक्री (राजीनामा लिखत)</option>
              <option value="namsari">मृत्युपछि नामसारी (दाखिल खारेज)</option>
              <option value="bakaspatra">हालैको / शेषपछिको बकसपत्र</option>
              <option value="anshabanda">पारिवारिक अंशबण्डा लिखत</option>
              <option value="chhodpatra">हकछोड / मिलापत्र लिखत</option>
            </select>
          </div>

          {/* 2. Building Status */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              २. घर / भवनको स्थिति
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setHasBuilding(false)}
                className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  !hasBuilding
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                खाली जग्गा
              </button>
              <button
                type="button"
                onClick={() => setHasBuilding(true)}
                className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  hasBuilding
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                घर/भवन भएको
              </button>
            </div>
          </div>

          {/* 3. Road Status */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              ३. बाटोको स्थिति (Road Access)
            </label>
            <select
              value={roadStatus}
              onChange={(e) => setRoadStatus(e.target.value as RoadStatus)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="napi_road">नापी नक्सामा बाटो कायम भएको</option>
              <option value="ward_certified">नक्सामा नभएको (वडा सिफारिस चाहिने)</option>
              <option value="goreto_only">गोरेटो वा साझा निकास मात्र</option>
            </select>
          </div>

          {/* 4. Presence / Power of Attorney */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              ४. जग्गाधनीको उपस्थिति
            </label>
            <select
              value={ownerPresence}
              onChange={(e) => setOwnerPresence(e.target.value as OwnerPresence)}
              className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="self">जग्गाधनी स्वयं उपस्थित हुने</option>
              <option value="waris">अधिकृत वारिसनामा (Power of Attorney)</option>
            </select>
          </div>
        </div>

        {/* Loan status mini toggle */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <Info className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>बैंक वा वित्तीय संस्थाको कर्जा/रोक्का छ?</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLoanStatus('clear')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                loanStatus === 'clear'
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 border-transparent'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              कुनै कर्जा छैन (फुकुवा)
            </button>
            <button
              type="button"
              onClick={() => setLoanStatus('bank_clearance')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                loanStatus === 'bank_clearance'
                  ? 'bg-amber-600 text-white border-transparent'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              ऋण चुक्ता पत्र (NOC) सहित फुकुवा गर्ने
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Actions Bar */}
      <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="w-full sm:w-auto flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              तपाईंको तयारी प्रगति: {completedCount} / {totalCount} कागजात तयार ({progressPercent}%)
            </span>
            <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              {progressPercent === 100 ? '✅ पूर्ण तयार' : 'बाँकी कागजात जुटाउनुहोस्'}
            </span>
          </div>
          <div className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            {copied ? 'कपी भयो!' : 'सूची कपी'}
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <Printer className="w-4 h-4" />
            चेकलिस्ट प्रिन्ट / PDF
          </button>
        </div>
      </div>

      {/* Main Checklist View */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-5 sm:p-6 bg-slate-50/80 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              आवश्यक कागजातहरूको चेकलिस्ट (Checklist)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              तयार भएका कागजातमा टिक (✓) लगाउँदै जानुहोस्। मालपोत जानुअघि सबै बुँदा पूरा भएको सुनिश्चित गर्नुहोस्।
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCheckedItems({})}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> रिसेट
          </button>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
          {items.map((item, idx) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className={`p-4 sm:p-5 flex items-start gap-4 cursor-pointer transition-colors ${
                  isChecked 
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20' 
                    : 'hover:bg-slate-50/80 dark:hover:bg-slate-850'
                }`}
              >
                <div
                  className="mt-0.5 flex-shrink-0 text-slate-400 dark:text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500">
                      #{idx + 1}
                    </span>
                    <span className={`text-base font-bold transition-all ${
                      isChecked 
                        ? 'line-through text-slate-400 dark:text-slate-500' 
                        : 'text-slate-900 dark:text-white'
                    }`}>
                      {item.titleNp}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      📍 {item.source}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.descNp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step by Step Flowchart Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-emerald-600" />
          मालपोतमा जग्गा पास हुने ५ चरणबद्ध प्रक्रिया (Step-by-Step Flow)
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          कागजात तयार भइसकेपछि मालपोत कार्यालयमा यो क्रममा काम सम्पन्न हुन्छ:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-3">
              १
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">वडा कार्यालय</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              सम्पत्ति कर चुक्ता र चार किल्ला सिफारिस पत्र लिनुहोस्। घर भए नक्सा/सम्पन्नता प्रमाणित गराउनुहोस्।
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-3">
              २
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">नापी कार्यालय</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              कित्ता नम्बरको आधिकारिक प्रमाणित नक्सा (ट्रेस ब्लुप्रिन्ट) र फिल्डबुक उतार लिनुहोस्।
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-3">
              ३
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">लिखत फारम तयारी</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              प्रमाणित लेखापढी व्यवसायी वा कानुनी मस्यौदाकारबाट राजीनामा लिखत फारम भरी सहीछाप गर्नुहोस्।
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-3">
              ४
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">टोकन र बायोमेट्रिक</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              मालपोतमा टोकन लिएर दर्ता, बायोमेट्रिक औंठाछाप, डिजिटल फोटो र रजिष्ट्रेशन राजस्व दाखिला गर्नुहोस्।
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
            <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs mb-3">
              ५
            </div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">लिखत पारित र पुर्जा</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              मालपोत अधिकृतको इजलासमा सनाखत गरी नयाँ जग्गाधनी प्रमाणपुर्जा (लालपुर्जा) बुझ्नुहोस्।
            </p>
          </div>
        </div>
      </div>

      {/* Warning Alert: 5 Common Rejection Mistakes */}
      <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 rounded-2xl p-6">
        <div className="flex items-start gap-3.5">
          <AlertTriangle className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-base font-bold text-rose-900 dark:text-rose-200">
              ⚠️ मालपोतमा फाइल रोकिने वा अस्वीकृत हुने मुख्य ५ गल्तीहरू (सतर्कता)
            </h4>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-rose-800 dark:text-rose-300">
              <li>• <strong>नाम वा थरको हिज्जे फरक:</strong> नागरिकता र लालपुर्जामा नाम, थर वा बाबुको नामको हिज्जे एउटा अक्षर मात्र फरक भएमा पनि वडाको &apos;एउटै व्यक्ति भएको&apos; सिफारिस नभई फाइल रोकिन्छ।</li>
              <li>• <strong>म्याद नाघेको चार किल्ला:</strong> वडा कार्यालयले जारी गरेको चार किल्ला सिफारिस ३५ दिनभन्दा पुरानो भए मालपोतले मान्दैन।</li>
              <li>• <strong>अघोषित रोक्का वा कर्जा:</strong> बैंक, वित्तीय संस्था वा अदालतको पुरानो रोक्का कम्प्युटर श्रेस्ता (DLIS) मा बाँकी रहेमा फुकुवा पत्र विना पास हुँदैन।</li>
              <li>• <strong>बाटोको मापदण्ड नपुगेको:</strong> नगर विकास वा पालिकाको मापदण्ड अनुसार बाटोको चौडाइ नमिलेमा कित्ताकाट तथा पास दुवै रोकिन्छ।</li>
              <li>• <strong>अंशियारको असहमति वा उजुरी:</strong> परिवारका हकवाला अंशियारलाई थाहा नदिई गरिएको कारोबारमा मालपोतमा दाबी विरोध परे लिखत रोकिन्छ।</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Useful Linked Tools Grid */}
      <div className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
          🔗 जग्गा पास गर्दा थप सहयोगी टूल्स
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Link
            href="/tools/malpot-valuation-rates"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                मालपोत मूल्यांकन दर
              </p>
              <p className="text-[11px] text-slate-500">जिल्लागत सरकारी न्यूनतम दर</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/malpot-calculator"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                रजिष्ट्रेशन दस्तुर क्यालकुलेटर
              </p>
              <p className="text-[11px] text-slate-500">पास गर्दा लाग्ने सरकारी राजस्व</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/construction-cost-calculator"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                घर निर्माण लागत क्यालकुलेटर
              </p>
              <p className="text-[11px] text-slate-500">भवनको सरकारी मूल्यांकन</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/legal-templates"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                कानुनी लिखत ढाँचा डाउनलोड
              </p>
              <p className="text-[11px] text-slate-500">तमसुक, कपाली, मञ्जुरीनामा</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
