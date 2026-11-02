'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Compass, 
  Receipt, 
  Filter, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Navigation,
  Copy,
  Check,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SURVEY_OFFICES, SurveyOffice } from '@/data/surveyOffices';
import AdSenseSlot from '@/components/AdSenseSlot';

export default function SurveyOfficesDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('सबै प्रदेश');
  const [selectedDistrict, setSelectedDistrict] = useState('सबै जिल्ला');
  const [selectedType, setSelectedType] = useState<'all' | 'survey' | 'malpot'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const provinces = [
    'सबै प्रदेश',
    'बागमती प्रदेश',
    'कोशी प्रदेश',
    'मधेश प्रदेश',
    'गण्डकी प्रदेश',
    'लुम्बिनी प्रदेश',
    'कर्णाली प्रदेश',
    'सुदूरपश्चिम प्रदेश',
  ];

  // Popular districts for 1-click filter
  const popularDistricts = [
    'सबै जिल्ला',
    'काठमाडौँ',
    'ललितपुर',
    'भक्तपुर',
    'कास्की',
    'रुपन्देही',
    'चितवन',
    'मोरङ',
    'झापा',
    'सुनसरी',
    'बाँके',
    'कैलाली',
    'पर्सा',
    'धनुषा'
  ];

  // All unique districts for select dropdown
  const allDistricts = useMemo(() => {
    const set = new Set<string>();
    SURVEY_OFFICES.forEach(o => set.add(o.district));
    return ['सबै जिल्ला', ...Array.from(set).sort((a, b) => a.localeCompare(b, 'ne'))];
  }, []);

  const handleCopyPhone = (officeId: string, phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedId(officeId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredOffices = useMemo(() => {
    return SURVEY_OFFICES.filter((office) => {
      // Province match
      if (selectedProvince !== 'सबै प्रदेश' && office.province !== selectedProvince) {
        return false;
      }
      // District match
      if (selectedDistrict !== 'सबै जिल्ला' && office.district !== selectedDistrict) {
        return false;
      }
      // Type match
      if (selectedType !== 'all' && office.type !== selectedType) {
        return false;
      }
      // Search match
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchNameNp = office.nameNp.toLowerCase().includes(term);
        const matchNameEn = office.nameEn.toLowerCase().includes(term);
        const matchDistrict = office.district.toLowerCase().includes(term);
        const matchLocation = office.location.toLowerCase().includes(term);
        const matchJurisdiction = office.jurisdiction.toLowerCase().includes(term);
        return matchNameNp || matchNameEn || matchDistrict || matchLocation || matchJurisdiction;
      }
      return true;
    });
  }, [searchTerm, selectedProvince, selectedDistrict, selectedType]);

  return (
    <div className="space-y-6">
      
      {/* MeroKitta Online Portal Alert Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-emerald-500/30 shadow-lg relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>अनलाइन डिजिटल नापी सेवा</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white">
              नापी कार्यालय नगई घरमै बसेर नक्सा (Trace) र फिल्डबुक निकाल्न चाहनुहुन्छ?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
              नापी विभागको आधिकारिक <strong className="text-emerald-300">मेरोकित्ता (MeroKitta DLIS)</strong> पोर्टलबाट ३ मिनेटमा नक्सा प्रिन्ट गर्ने सम्पूर्ण कानुनी प्रक्रिया र गाइड हेर्नुहोस्।
            </p>
          </div>

          <Link
            href="/tools/merokitta-online-naksa"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm shrink-0 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>मेरोकित्ता गाइड हेर्नुहोस्</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="जिल्ला, कार्यालयको नाम वा ठाउँ खोज्नुहोस् (उदा: डिल्लीबजार, कलंकी, पोखरा, बुटवल, चितवन, झापा...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-24 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600 transition-all shadow-inner"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-4" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-3.5 px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 transition-colors"
            >
              मेटाउनुहोस्
            </button>
          )}
        </div>

        {/* Office Type Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedType === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              सबै कार्यालयहरू ({SURVEY_OFFICES.length})
            </button>
            <button
              onClick={() => setSelectedType('survey')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                selectedType === 'survey'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>नापी कार्यालय</span>
            </button>
            <button
              onClick={() => setSelectedType('malpot')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1.5 ${
                selectedType === 'malpot'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>मालपोत कार्यालय</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-semibold">
              फेला परेका: <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{filteredOffices.length}</strong> कार्यालय
            </span>
            {(selectedProvince !== 'सबै प्रदेश' || selectedDistrict !== 'सबै जिल्ला' || searchTerm !== '' || selectedType !== 'all') && (
              <button
                onClick={() => {
                  setSelectedProvince('सबै प्रदेश');
                  setSelectedDistrict('सबै जिल्ला');
                  setSelectedType('all');
                  setSearchTerm('');
                }}
                className="text-xs font-bold text-rose-500 hover:underline"
              >
                (फिल्टर रिसेट)
              </button>
            )}
          </div>
        </div>

        {/* Province Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs font-semibold">
          <span className="text-slate-400 text-[11px] uppercase mr-1 shrink-0">प्रदेश:</span>
          {provinces.map((prov) => (
            <button
              key={prov}
              onClick={() => {
                setSelectedProvince(prov);
                setSelectedDistrict('सबै जिल्ला');
              }}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-colors ${
                selectedProvince === prov
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {prov}
            </button>
          ))}
        </div>

        {/* Popular District Quick Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
          <span className="text-slate-400 text-[11px] uppercase mr-1 shrink-0">प्रमुख जिल्ला:</span>
          {popularDistricts.map((dist) => (
            <button
              key={dist}
              onClick={() => setSelectedDistrict(dist)}
              className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                selectedDistrict === dist
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {dist}
            </button>
          ))}

          {/* All Districts Dropdown Selector */}
          <div className="ml-auto flex items-center gap-1.5">
            <span className="text-[11px] text-slate-400">अन्य जिल्ला:</span>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="text-xs py-1 px-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium focus:ring-1 focus:ring-emerald-500"
            >
              {allDistricts.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filteredOffices.length > 0 ? (
          filteredOffices.map((office) => {
            const isSurvey = office.type === 'survey';
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.nameNp + ' ' + office.location)}`;
            const isCopied = copiedId === office.id;

            return (
              <div
                key={office.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5 transition-all hover:border-emerald-500/50 hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Top Badges & Type */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full ${
                          isSurvey 
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' 
                            : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                        }`}>
                          {isSurvey ? 'नापी कार्यालय (Survey)' : 'मालपोत कार्यालय (Malpot)'}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {office.district}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium">
                          {office.province}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white pt-1 leading-snug">
                        {office.nameNp}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans">
                        {office.nameEn}
                      </p>
                    </div>

                    <div className={`p-3 rounded-2xl shrink-0 ${
                      isSurvey 
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600' 
                        : 'bg-amber-50 dark:bg-amber-950/60 text-amber-600'
                    }`}>
                      {isSurvey ? <Compass className="w-5 h-5" /> : <Receipt className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Details (Location, Phone, Email) */}
                  <div className="space-y-2 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-medium">{office.location}</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                        <a 
                          href={`tel:${office.phone}`}
                          className="font-mono font-black text-sm text-emerald-700 dark:text-emerald-400 hover:underline"
                          title="कल गर्न थिच्नुहोस्"
                        >
                          {office.phone}
                        </a>
                      </div>

                      <button
                        onClick={() => handleCopyPhone(office.id, office.phone)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 text-[11px] font-semibold transition-colors"
                        title="फोन नम्बर कपी गर्नुहोस्"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 font-bold">कपी भयो!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>नम्बर कपी</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <a 
                        href={`mailto:${office.email}`}
                        className="font-mono text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:underline truncate"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* Jurisdiction Note */}
                  <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed border border-slate-100 dark:border-slate-800">
                    <strong className="text-slate-800 dark:text-slate-200 font-bold">कार्यक्षेत्र (Jurisdiction):</strong> {office.jurisdiction}
                  </div>
                </div>

                {/* Bottom Action Buttons (Call & Google Maps) */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-bold">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>सिधै कल गर्नुहोस्</span>
                  </a>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-blue-600" />
                    <span>Google Maps दिशा</span>
                  </a>
                </div>

              </div>
            );
          })
        ) : (
          <div className="col-span-1 md:col-span-2 p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <Building2 className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">कुनै कार्यालय फेला परेन</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              तपाईंले खोज्नुभएको शब्द वा फिल्टर अनुसार कुनै नतिजा आएन। कृपया जिल्ला वा प्रदेश फिल्टर रिसेट गर्नुहोस्।
            </p>
            <button
              onClick={() => {
                setSelectedProvince('सबै प्रदेश');
                setSelectedDistrict('सबै जिल्ला');
                setSelectedType('all');
                setSearchTerm('');
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs"
            >
              सबै फिल्टर रिसेट गर्नुहोस्
            </button>
          </div>
        )}
      </div>

      {/* In-feed AdSense Slot */}
      <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

      {/* Official Government Portals Reference */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="font-black text-slate-900 dark:text-white text-base flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>आधिकारिक सरकारी निकायहरूको वेबसाइट लिङ्क (Official Government Links)</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
          <a
            href="https://merokitta.dos.gov.np"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 flex items-center justify-between group hover:border-teal-500 transition-all"
          >
            <div>
              <span className="font-bold text-teal-950 dark:text-teal-200 block">
                मेरोकित्ता अनलाइन सेवा (MeroKitta)
              </span>
              <span className="text-[11px] text-teal-700 dark:text-teal-400 font-mono">
                merokitta.dos.gov.np • अनलाइन नक्सा
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-teal-600 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="http://dos.gov.np"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between group hover:border-emerald-500 transition-all"
          >
            <div>
              <span className="font-bold text-emerald-950 dark:text-emerald-200 block">
                नापी विभाग (Department of Survey)
              </span>
              <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono">
                dos.gov.np • मीनभवन, काठमाडौँ
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="https://dolrm.gov.np"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 flex items-center justify-between group hover:border-amber-500 transition-all"
          >
            <div>
              <span className="font-bold text-amber-950 dark:text-amber-200 block">
                भूमि व्यवस्था तथा अभिलेख विभाग (DOLRM)
              </span>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-mono">
                dolrm.gov.np • बबरमहल, काठमाडौँ
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

    </div>
  );
}
