'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  LRIMS_ONLINE_STEPS, 
  ROKKA_PHUKUWA_GUIDE, 
  LEKHAPADI_FEE_STANDARDS, 
  VALUATION_VAULT_INFO, 
  LRIMS_FAQS,
  LrimsStep,
  LekhapadiFeeItem
} from '@/data/lrimsServicesData';
import { 
  Landmark, 
  Ticket, 
  Lock, 
  Unlock, 
  FileText, 
  Scale, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Building2, 
  MapPin, 
  Search, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Calculator,
  Download
} from 'lucide-react';

export default function LrimsOnlineHub() {
  const [activeTab, setActiveTab] = useState<'token' | 'rokka' | 'valuation' | 'lekhapadi'>('token');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedProvince, setSelectedProvince] = useState<string>('सबै प्रदेश');

  const provincesList = [
    'सबै प्रदेश',
    'कोशी प्रदेश',
    'मधेश प्रदेश',
    'बागमती प्रदेश',
    'गण्डकी प्रदेश',
    'लुम्बिनी प्रदेश',
    'कर्णाली प्रदेश',
    'सुदूरपश्चिम प्रदेश'
  ];

  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 md:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <Sparkles className="w-4 h-4" />
            <span>भूमिसुधार तथा मालपोत विभाग (DOLRM) नागरिक सेवा केन्द्र</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            LRIMS अनलाइन जग्गा सेवा, रोक्का/फुकुवा तथा न्यूनतम मूल्याङ्कन हब
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            मालपोत कार्यालयमा लाइन नबसी घरबाटै अनलाइन टोकन लिने तरिका, बैंकको ऋण चुक्ता भएपछि रोक्का/फुकुवा अनलाइन जाँच्ने कार्यविधि, ७७ वटै जिल्लाको आधिकारिक सरकारी न्यूनतम मूल्याङ्कन दररेट र लेखापढी व्यवसायी सेवा शुल्क मापदण्ड।
          </p>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="bg-white/10 rounded-xl p-3 border border-white/10">
              <div className="text-blue-300 font-medium">सञ्चालित कार्यालय</div>
              <div className="text-xl font-extrabold text-white">१२६+ मालपोत</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 border border-white/10">
              <div className="text-blue-300 font-medium">कभरेज</div>
              <div className="text-xl font-extrabold text-white">७७ वटै जिल्ला</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 border border-white/10">
              <div className="text-blue-300 font-medium">अनलाइन टोकन</div>
              <div className="text-xl font-extrabold text-white">२४/७ उपलब्ध</div>
            </div>
            <div className="bg-white/10 rounded-xl p-3 border border-white/10">
              <div className="text-blue-300 font-medium">आधिकारिक पोर्टल</div>
              <div className="text-xl font-extrabold text-white">lrims.dolrm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar gap-2">
        <button
          onClick={() => setActiveTab('token')}
          className={`flex items-center gap-2 px-5 py-3.5 border-b-2 font-bold text-sm whitespace-nowrap transition-all ${
            activeTab === 'token'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Ticket className="w-4 h-4" />
          <span>१. अनलाइन टोकन & सिटिजन पोर्टल</span>
        </button>

        <button
          onClick={() => setActiveTab('rokka')}
          className={`flex items-center gap-2 px-5 py-3.5 border-b-2 font-bold text-sm whitespace-nowrap transition-all ${
            activeTab === 'rokka'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>२. जग्गा रोक्का & फुकुवा ट्र्याकर</span>
        </button>

        <button
          onClick={() => setActiveTab('valuation')}
          className={`flex items-center gap-2 px-5 py-3.5 border-b-2 font-bold text-sm whitespace-nowrap transition-all ${
            activeTab === 'valuation'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Landmark className="w-4 h-4" />
          <span>३. ७७ जिल्ला न्यूनतम दररेट भल्ट</span>
        </button>

        <button
          onClick={() => setActiveTab('lekhapadi')}
          className={`flex items-center gap-2 px-5 py-3.5 border-b-2 font-bold text-sm whitespace-nowrap transition-all ${
            activeTab === 'lekhapadi'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/20 rounded-t-xl'
              : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>४. लेखापढी व्यवसायी शुल्क मापदण्ड</span>
        </button>
      </div>

      {/* TAB 1: ONLINE TOKEN & CITIZEN PORTAL */}
      {activeTab === 'token' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  DOLRM Official Workflow
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  मालपोतमा लाइन नबसी घरबाटै अनलाइन टोकन लिने ४ सहज चरणहरू
                </h3>
              </div>

              <a
                href="https://lrims.dolrm.gov.np"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md flex-shrink-0"
              >
                <span>LRIMS पोर्टल खोल्नुहोस्</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Steps Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LRIMS_ONLINE_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm">
                      {step.stepNumber}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {step.titleNp}
                      </h4>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {step.titleEn}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.descriptionNp}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-700 text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 block">
                      अनिवार्य कागजात:
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-400">
                      {step.requiredDocs.map((doc, dIdx) => (
                        <li key={dIdx}>{doc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50/70 dark:bg-blue-950/30 p-2.5 rounded-lg border border-blue-200/50 dark:border-blue-900/30 text-xs text-blue-900 dark:text-blue-200">
                    <span className="font-bold">विशेष टिप: </span>
                    <span>{step.tipsNp}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Caution Callout */}
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-xl p-4 text-xs text-amber-900 dark:text-amber-200 space-y-1">
              <div className="font-bold flex items-center gap-2 text-sm text-amber-800 dark:text-amber-300">
                <AlertTriangle className="w-4 h-4" />
                <span>महत्वपूर्ण जानकारी (LRIMS Token Rules):</span>
              </div>
              <p className="leading-relaxed">
                टोकन प्राप्त गरेपछि मालपोत कार्यालयको सम्बन्धित फाँटमा तोकिएको समय सीमाभित्र उपस्थित हुनुपर्छ। यदि तोकिएको मितिमा उपस्थित हुन नसकिएमा सोही पोर्टलबाट टोकन रि-सेड्युल (Reschedule) गर्न मिल्छ।
              </p>
            </div>
          </div>
        </section>
      )}

      {/* TAB 2: ROKKA & PHUKUWA TRACKER */}
      {activeTab === 'rokka' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Banking API & Land Encumbrance
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {ROKKA_PHUKUWA_GUIDE.titleNp}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                {ROKKA_PHUKUWA_GUIDE.descriptionNp}
              </p>
            </div>

            {/* How to Check Online */}
            <div className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-blue-600" />
                <span>जग्गा रोक्का छ कि छैन अनलाइनबाटै जाँच्ने तरिका:</span>
              </h4>
              <div className="space-y-2">
                {ROKKA_PHUKUWA_GUIDE.howToCheckOnline.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow steps */}
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">
                बैंक धितो रोक्कादेखि ऋण चुक्ता फुकुवासम्मको ४ चरण:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {ROKKA_PHUKUWA_GUIDE.bankRokkaSteps.map((s, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-extrabold flex items-center justify-center">
                      {idx + 1}
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">
                      {s.titleNp}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {s.descNp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Docs for Phukuwa + Template Link */}
            <div className="bg-emerald-50/60 dark:bg-emerald-950/20 rounded-xl p-5 border border-emerald-200 dark:border-emerald-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Unlock className="w-4 h-4 text-emerald-600" />
                  <span>फुकुवा गर्दा मालपोतमा पेश गर्नुपर्ने कागजातहरू:</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                  {ROKKA_PHUKUWA_GUIDE.requiredDocsPhukuwa.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>

              <Link
                href="/tools/legal-templates"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-sm flex-shrink-0"
              >
                <Download className="w-4 h-4" />
                <span>फुकुवा निवेदन ढाँचा डाउनलोड</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* TAB 3: 77 DISTRICT VALUATION VAULT */}
      {activeTab === 'valuation' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  आ.व. {VALUATION_VAULT_INFO.fiscalYear} सरकारी दररेट
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  ७७ वटै जिल्लाको न्यूनतम मूल्याङ्कन दररेट तथा मापदण्ड
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {VALUATION_VAULT_INFO.authorityNp} द्वारा स्वीकृत। {VALUATION_VAULT_INFO.lawReference} अनुसार लागू।
                </p>
              </div>

              <Link
                href="/tools/malpot-valuation-rates"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md flex-shrink-0"
              >
                <Search className="w-4 h-4" />
                <span>जिल्ला अनुसार दररेट खोज्नुहोस्</span>
              </Link>
            </div>

            {/* Province Directory Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VALUATION_VAULT_INFO.provinces.map((prov, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-4 border border-slate-200 dark:border-slate-700 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      {prov.nameNp}
                    </h4>
                    <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[10px] font-bold">
                      {prov.districtsCount} जिल्लाहरू
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">प्रमुख जिल्लाहरू: </span>
                    <span>{prov.highlight}</span>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/tools/malpot-valuation-rates"
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>आधिकारिक न्यूनतम दररेट हेर्नुहोस्</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Road Classification Rates Table */}
            <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-3">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>सडकको पहुँचका आधारमा मूल्याङ्कनको वर्गीकरण:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                {VALUATION_VAULT_INFO.roadCategories.map((rc, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-slate-900 dark:text-white mb-1">{rc.typeNp}</div>
                    <div className="text-slate-500 dark:text-slate-400">{rc.factor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 4: LEKHAPADI FEE STANDARDS */}
      {activeTab === 'lekhapadi' && (
        <section className="space-y-8 animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Consumer Protection & Standard Fees
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                लेखापढी व्यवसायी (Lekhapadi) सेवा शुल्क मापदण्ड तथा आचारसंहिता
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                मालपोतमा लिखत लेख्दा बिचौलिया तथा लेखापढीले अनावश्यक रकम नठगून् भन्नाका लागि सरकारी आधिकारिक शुल्क मापदण्ड।
              </p>
            </div>

            {/* Fee Items Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {LEKHAPADI_FEE_STANDARDS.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50 dark:bg-slate-800/40 rounded-xl p-5 border border-slate-200 dark:border-slate-700 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {item.deedTypeNp}
                      </h4>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {item.deedTypeEn}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.descriptionNp}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="text-slate-500 text-[10px]">आधिकारिक सरकारी शुल्क</div>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{item.officialGovRate}</div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="text-slate-500 text-[10px]">बजारको औसत शुल्क</div>
                      <div className="font-bold text-blue-600 dark:text-blue-400 mt-0.5">{item.marketRateAvg}</div>
                    </div>
                  </div>

                  <div className="bg-blue-50/60 dark:bg-blue-950/20 p-2.5 rounded-lg border border-blue-200/50 dark:border-blue-900/30 text-xs text-blue-900 dark:text-blue-200">
                    <span className="font-bold">नियम: </span>
                    <span>{item.stampDutyRule}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Licensing Exam Guide */}
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl p-5 border border-indigo-900 space-y-3 text-xs md:text-sm">
              <div className="font-bold text-base text-indigo-300 flex items-center gap-2">
                <Scale className="w-5 h-5" />
                <span>लेखापढी व्यवसायी इजाजतपत्र (License) परीक्षा योग्यता तथा पाठ्यक्रम:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                भूमिसुधार तथा मालपोत विभागले मालपोत ऐन २०३४ बमोजिम खुलाउने इजाजतपत्र परीक्षाका लागि:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                  <div className="font-bold text-white mb-1">न्यूनतम योग्यता:</div>
                  <div className="text-slate-300">एसईई / १० कक्षा उत्तीर्ण (प्रमाणपत्र अनिवार्य)</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                  <div className="font-bold text-white mb-1">लिखित परीक्षा विषय:</div>
                  <div className="text-slate-300">मुलुकी देवानी संहिता (सम्पत्ति खण्ड), मालपोत ऐन २०३४, जग्गा नापजाँच ऐन २०१९</div>
                </div>
                <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                  <div className="font-bold text-white mb-1">प्रयोगात्मक परीक्षा:</div>
                  <div className="text-slate-300">राजीनामा, बकसपत्र, र अंशबन्डा लिखतको कानुनी ड्राफ्टिङ</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: FAQS */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            LRIMS र मालपोत सेवा सम्बन्धी बारम्बार सोधिने प्रश्नहरू (FAQs)
          </h3>
        </div>

        <div className="space-y-3">
          {LRIMS_FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100/50 dark:hover:bg-slate-800/80 transition-colors"
              >
                <span className="font-semibold text-slate-900 dark:text-white text-sm">
                  {faq.qNp}
                </span>
                {activeFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {activeFaq === idx && (
                <div className="p-4 bg-white dark:bg-slate-900 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800">
                  {faq.aNp}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
