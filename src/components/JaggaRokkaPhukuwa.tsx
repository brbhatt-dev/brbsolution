'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Landmark, 
  FileText, 
  CheckCircle2, 
  Circle, 
  Copy, 
  Check, 
  Printer, 
  RotateCcw, 
  AlertTriangle, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Scale
} from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

type RokkaType = 'bank' | 'cooperative' | 'court_gov' | 'personal';
type TemplateKey = 'malpot_phukuwa_app' | 'bank_letter_format';

export default function JaggaRokkaPhukuwa() {
  const [rokkaType, setRokkaType] = useState<RokkaType>('bank');
  const [activeTemplate, setActiveTemplate] = useState<TemplateKey>('malpot_phukuwa_app');
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  const stepsList = [
    {
      id: 'step_repay',
      title: '१. कर्जा चुक्ता (Loan Clearance)',
      desc: 'बैंक वा वित्तीय संस्थाको सम्पूर्ण सावाँ, ब्याज र हर्जाना भुक्तानी गरी हिसाब शून्य बनाउनुहोस्।',
      institution: 'सम्बन्धित बैंक/सहकारी',
    },
    {
      id: 'step_noc',
      title: '२. चुक्ता प्रमाणपत्र (NOC) र फुकुवा पत्र',
      desc: 'बैंकबाट ऋण चुक्ता प्रमाणपत्र (No Objection Certificate) र मालपोत कार्यालयलाई सम्बोधन गरिएको आधिकारिक फुकुवा पत्र लिनुहोस्।',
      institution: 'सम्बन्धित बैंक/सहकारी',
    },
    {
      id: 'step_lalpurja',
      title: '३. सक्कल लालपुर्जा फिर्ता बुझ्ने',
      desc: 'बैंकको लकरमा सुरक्षित राखिएको जग्गाको सक्कल लालपुर्जा भरपाई गरी फिर्ता बुझिलिनुहोस्।',
      institution: 'बैंक शाखा',
    },
    {
      id: 'step_malpot_reg',
      title: '४. मालपोत कार्यालयमा निवेदन दर्ता',
      desc: 'बैंकको फुकुवा पत्र, लालपुर्जा र नागरिकता सहित मालपोतको दर्ता फाँटमा फुकुवा निवेदन दर्ता गर्नुहोस्।',
      institution: 'सम्बन्धित मालपोत कार्यालय',
    },
    {
      id: 'step_moth_clear',
      title: '५. मोठ तथा रोक्का श्रेस्ता कट्टा (DLIS)',
      desc: 'मालपोतको मोठ र रोक्का फाँटले कम्प्युटर प्रणाली (DLIS) र ढड्डाबाट रोक्का कट्टा गरी लालपुर्जामा फुकुवाको छाप लगाउँछ।',
      institution: 'मालपोत मोठ/रोक्का फाँट',
    },
  ];

  const completedCount = stepsList.filter((s) => checkedSteps[s.id]).length;
  const progressPercent = Math.round((completedCount / stepsList.length) * 100);

  const toggleStep = (id: string) => {
    setCheckedSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const templates: Record<TemplateKey, { title: string; content: string }> = {
    malpot_phukuwa_app: {
      title: 'मालपोत कार्यालयमा जग्गा फुकुवा गरी पाऊँ भन्ने निवेदन ढाँचा',
      content: `श्रीमान् प्रमुख मालपोत अधिकृतज्यू,
भूमिसुधार तथा मालपोत कार्यालय,
........................, ........................।

विषय: रोक्का रहेको जग्गा फुकुवा गरी पाऊँ।

महोदय,
उपरोक्त विषयमा मेरो/हाम्रो नाममा दर्ता कायम रहेको तपसिल बमोजिमको जग्गा ........................................ बैंक/वित्तीय संस्थाबाट कर्जा लिनका लागि यस कार्यालयको च.नं. ............ मिति २०...../...../..... को पत्रानुसार धितो रोक्का राखिएको थियो।

हाल उक्त बैंक/वित्तीय संस्थाको सम्पूर्ण कर्जा चुक्ता भइसकेकोले बैंकले मिति २०...../...../..... को पत्र च.नं. ............ बाट जग्गा फुकुवा गरिदिनुहुन यस कार्यालयलाई लेखी पठाएको सक्कल पत्र तथा जग्गाको सक्कल जग्गाधनी प्रमाणपुर्जा यसै निवेदन साथ संलग्न राखी पेश गरेको छु। 

अतः तपसिल बमोजिमको जग्गा कम्प्युटर श्रेस्ता (DLIS) तथा मोठ ढड्डाबाट रोक्का कट्टा गरी फुकुवा जनाई जग्गाधनी प्रमाणपुर्जामा फुकुवा प्रमाणित गरी पाउन सादर अनुरोध गर्दछु।

तपसिल (जग्गाको विवरण):
१. जिल्ला: ....................  पालिका: ........................  वडा नं.: ......
२. कित्ता नं.: ................  क्षेत्रफल: ....................
३. रोक्का राख्ने संस्था: ................................................................

संलग्न कागजातहरू:
१. बैंक/वित्तीय संस्थाको सक्कल फुकुवा पत्र - १ प्रति
२. ऋण चुक्ता प्रमाणपत्र (NOC) को प्रतिलिपि - १ प्रति
३. जग्गाको सक्कल लालपुर्जा - १ थान
४. जग्गाधनीको नागरिकता प्रमाणपत्रको प्रतिलिपि - १ प्रति

निवेदक:
दस्तखत: ........................................
नाम, थर: ........................................
स्थायी ठेगाना: ................................
सम्पर्क फोन नं.: ............................
मिति: २०...../...../.....`,
    },
    bank_letter_format: {
      title: 'बैंक/वित्तीय संस्थाले मालपोतलाई पठाउने फुकुवा पत्रको ढाँचा',
      content: `........................................ बैंक लिमिटेड
(केन्द्रीय कार्यालय वा सम्बन्धित शाखा कार्यालय)
पत्र संख्या: ....................
चलानी नं.: ....................                    मिति: २०...../...../.....

श्रीमान् प्रमुख मालपोत अधिकृतज्यू,
भूमिसुधार तथा मालपोत कार्यालय,
........................, ........................।

विषय: धितो रोक्का रहेको जग्गा फुकुवा गरिदिने सम्बन्धमा।

महोदय,
उपरोक्त विषयमा त्यस कार्यालयको रोक्का च.नं. ............ मिति २०...../...../..... अनुसार यस बैंकको कर्जा धितो सुरक्षण बापत रोक्का राखिएको तपसिल बमोजिमको घर/जग्गाको ऋणी श्री ........................................ ले बैंकलाई तिर्नु-बुझाउनुपर्ने सम्पूर्ण कर्जा रकम चुक्ता गरिसक्नुभएको हुँदा उक्त जग्गाको रोक्का फुकुवा गरिदिनुहुन अनुरोध छ।

तपसिल (जग्गाको विवरण):
१. जग्गाधनीको नाम: ................................................................
२. जिल्ला: ....................  पालिका: ........................  वडा नं.: ......
३. कित्ता नं.: ................  क्षेत्रफल: ....................

भवदीय,
(आधिकारिक हस्ताक्षर)
नाम: ........................................
पद: शाखा प्रबन्धक / कर्जा अधिकृत
बैंकको छाप:`,
    },
  };

  const handleCopy = async () => {
    const text = templates[activeTemplate].content;
    const ok = await copyToClipboard(text);
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
      {/* Intro Configuration Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" /> बैंक तथा वित्तीय संस्था ऐन र मालपोत नियम अनुकूल
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          जग्गा रोक्का तथा फुकुवा (Rokka & Phukuwa) सम्पूर्ण गाइड तथा ढाँचा
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
          बैंक, वित्तीय संस्था, सहकारी वा अदालतमा धितो रोक्का रहेको जग्गा ऋण चुक्तापछि मालपोतबाट कसरी फुकुवा गर्ने? चरणबद्ध प्रक्रिया, चाहिने कागजात र तयारी निवेदन ढाँचा यहाँ उपलब्ध छन्।
        </p>

        {/* Rokka Type Selector */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
            रोक्काको प्रकार छान्नुहोस्:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              type="button"
              onClick={() => setRokkaType('bank')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                rokkaType === 'bank'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                🏦 १. बैंक तथा वित्तीय संस्था
              </p>
              <p className="text-[11px] text-slate-500 mt-1">क, ख, ग वर्गका वाणिज्य तथा विकास बैंक</p>
            </button>

            <button
              type="button"
              onClick={() => setRokkaType('cooperative')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                rokkaType === 'cooperative'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                🤝 २. सहकारी संस्था
              </p>
              <p className="text-[11px] text-slate-500 mt-1">बचत तथा ऋण सहकारी कर्जा धितो</p>
            </button>

            <button
              type="button"
              onClick={() => setRokkaType('court_gov')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                rokkaType === 'court_gov'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                ⚖️ ३. अदालत वा सरकारी निकाय
              </p>
              <p className="text-[11px] text-slate-500 mt-1">अदालतको मुद्दा, कर कार्यालय, अख्तियार</p>
            </button>

            <button
              type="button"
              onClick={() => setRokkaType('personal')}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                rokkaType === 'personal'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                📜 ४. व्यक्तिगत लेनदेन/तमसुक
              </p>
              <p className="text-[11px] text-slate-500 mt-1">कपाली तमसुक वा लेनदेन रोक्का</p>
            </button>
          </div>
        </div>
      </div>

      {/* 5-Step Release Progress Checklist */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              फुकुवा प्रक्रियाका ५ अनिवार्य चरणहरू ({completedCount}/{stepsList.length} सम्पन्न)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              ऋण चुक्तादेखि मालपोतबाट लालपुर्जामा फुकुवा छाप लगाउनेसम्मका चरणहरूमा टिक लगाउनुहोस्।
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCheckedSteps({})}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> रिसेट
          </button>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {stepsList.map((step, idx) => {
            const isDone = !!checkedSteps[step.id];
            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                className={`p-4 sm:p-5 flex items-start gap-4 cursor-pointer transition-colors ${
                  isDone
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20'
                    : 'hover:bg-slate-50/80 dark:hover:bg-slate-850'
                }`}
              >
                <div className="mt-0.5 flex-shrink-0 text-slate-400 dark:text-slate-600 hover:text-emerald-600">
                  {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-slate-400">चरण {idx + 1}</span>
                    <span className={`text-base font-bold ${isDone ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                      {step.title}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      📍 {step.institution}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official Ready-to-Use Templates */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-6 bg-slate-50/80 dark:bg-slate-850 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              आधिकारिक फुकुवा निवेदन तथा बैंक पत्र ढाँचा
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              मालपोतमा पेश गर्ने निवेदन वा बैंकले दिने पत्रको नमुना हेर्नुहोस् र कपी वा प्रिन्ट गर्नुहोस्।
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'कपी भयो!' : 'ढाँचा कपी'}
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm"
            >
              <Printer className="w-4 h-4" /> प्रिन्ट
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div className="border-b border-slate-100 dark:border-slate-800 flex bg-slate-50/40 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setActiveTemplate('malpot_phukuwa_app')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTemplate === 'malpot_phukuwa_app'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            १. मालपोत कार्यालयमा दिइने फुकुवा निवेदन ढाँचा
          </button>
          <button
            type="button"
            onClick={() => setActiveTemplate('bank_letter_format')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 transition-all ${
              activeTemplate === 'bank_letter_format'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            २. बैंकले मालपोतलाई लेख्ने आधिकारिक पत्र ढाँचा
          </button>
        </div>

        <div className="p-6">
          <div className="bg-slate-50 dark:bg-slate-950 p-5 sm:p-7 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed select-all">
            {templates[activeTemplate].content}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            💡 खाली ठाउँमा आफ्नो सम्बन्धित मालपोत कार्यालय, बैंकको नाम, कित्ता नम्बर, क्षेत्रफल र ठेगाना भरेर पेश गर्नुहोस्।
          </p>
        </div>
      </div>

      {/* Critical Legal Rules & Cautions */}
      <div className="bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-6">
        <h4 className="text-base font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          जग्गा रोक्का तथा फुकुवा सम्बन्धी ध्यान दिनुपर्ने कानुनी बुँदाहरू
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          <li>• <strong>रोक्का जग्गा बिक्री वा कित्ताकाट:</strong> मालपोतमा रोक्का जनाइएको जग्गा फुकुवा नभएसम्म अन्य कसैलाई बिक्री (राजीनामा), दान, बकस वा कित्ताकाट गर्न कानुनी रूपमा पाइँदैन।</li>
          <li>• <strong>बैंकको पत्र मात्रले पुग्दैन:</strong> बैंकबाट ऋण चुक्ता पत्र हात पर्दैमा जग्गा फुकुवा हुँदैन। उक्त पत्र मालपोत कार्यालयको दर्ता फाँटमा दर्ता गराई मोठ श्रेस्ताबाट कट्टा गराउनै पर्छ।</li>
          <li>• <strong>लालपुर्जामा फुकुवाको छाप:</strong> फुकुवा कार्य सम्पन्न भएपछि लालपुर्जाको पछिल्लो भागमा मालपोत अधिकृतको हस्ताक्षर र फुकुवाको रातो छाप लागेको सुनिश्चित गर्नुहोस्।</li>
          <li>• <strong>समस्याग्रस्त बैंक/सहकारी भएमा:</strong> संस्था बन्द भएमा वा समस्याग्रस्त घोषणा भएमा राष्ट्र बैंक वा सहकारी विभाग/समस्याग्रस्त सहकारी व्यवस्थापन समितिबाट फुकुवा सिफारिस लिनुपर्छ।</li>
        </ul>
      </div>

      {/* Connected Links */}
      <div className="bg-slate-50 dark:bg-slate-850 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
          🔗 थप सहयोगी वित्तीय तथा जग्गा टूल्स
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/tools/loan-emi-calculator"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                बैंक ऋण EMI क्यालकुलेटर
              </p>
              <p className="text-[11px] text-slate-500">घरजग्गा कर्जा किस्ता हिसाब</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/jagga-pass-checklist"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                जग्गा पास चेकलिस्ट
              </p>
              <p className="text-[11px] text-slate-500">वडा, नापी र मालपोत कागजात</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/legal-templates"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                कानुनी लिखत डाउनलोड
              </p>
              <p className="text-[11px] text-slate-500">तमसुक, कपाली र मञ्जुरीनामा</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
