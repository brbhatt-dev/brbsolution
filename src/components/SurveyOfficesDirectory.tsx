'use client';

import React, { useState, useMemo } from 'react';
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
  ShieldCheck
} from 'lucide-react';
import { SURVEY_OFFICES, SurveyOffice } from '@/data/surveyOffices';
import AdSenseSlot from '@/components/AdSenseSlot';

export default function SurveyOfficesDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('सबै');
  const [selectedType, setSelectedType] = useState<'all' | 'survey' | 'malpot'>('all');

  const provinces = [
    'सबै',
    'बागमती प्रदेश',
    'गण्डकी प्रदेश',
    'कोशी प्रदेश',
    'लुम्बिनी प्रदेश',
    'मधेश प्रदेश',
    'सुदूरपश्चिम प्रदेश',
    'कर्णाली प्रदेश',
  ];

  const filteredOffices = useMemo(() => {
    return SURVEY_OFFICES.filter((office) => {
      // Province match
      if (selectedProvince !== 'सबै' && office.province !== selectedProvince) {
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
  }, [searchTerm, selectedProvince, selectedType]);

  return (
    <div className="space-y-6">
      
      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="जिल्ला, कार्यालयको नाम वा स्थान खोज्नुहोस् (उदा: डिल्लीबजार, पोखरा, मोरङ, कलंकी...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600 transition-all"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-3 text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              मेटाउनुहोस्
            </button>
          )}
        </div>

        {/* Office Type Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedType === 'all'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              सबै कार्यालयहरू ({SURVEY_OFFICES.length})
            </button>
            <button
              onClick={() => setSelectedType('survey')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                selectedType === 'survey'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>नापी कार्यालय मात्र</span>
            </button>
            <button
              onClick={() => setSelectedType('malpot')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                selectedType === 'malpot'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>मालपोत कार्यालय मात्र</span>
            </button>
          </div>

          <span className="text-xs text-slate-500 font-semibold">
            फेला परेका: <strong className="text-emerald-600 dark:text-emerald-400">{filteredOffices.length}</strong> कार्यालय
          </span>
        </div>

        {/* Province Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-semibold">
          <span className="text-slate-400 text-[11px] uppercase mr-1 shrink-0">प्रदेश:</span>
          {provinces.map((prov) => (
            <button
              key={prov}
              onClick={() => setSelectedProvince(prov)}
              className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
                selectedProvince === prov
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {prov}
            </button>
          ))}
        </div>

      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredOffices.length > 0 ? (
          filteredOffices.map((office) => {
            const isSurvey = office.type === 'survey';
            return (
              <div
                key={office.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5 transition-all hover:border-emerald-500/50 hover:shadow-md"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        isSurvey 
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' 
                          : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300'
                      }`}>
                        {isSurvey ? 'नापी कार्यालय' : 'मालपोत कार्यालय'}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {office.district}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white pt-1">
                      {office.nameNp}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">
                      {office.nameEn}
                    </p>
                  </div>

                  <div className={`p-2.5 rounded-2xl shrink-0 ${
                    isSurvey 
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600' 
                      : 'bg-amber-50 dark:bg-amber-950/60 text-amber-600'
                  }`}>
                    {isSurvey ? <Compass className="w-5 h-5" /> : <Receipt className="w-5 h-5" />}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs pt-1 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{office.location} ({office.province})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <a 
                      href={`tel:${office.phone}`}
                      className="font-mono font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      {office.phone}
                    </a>
                    <span className="text-[10px] text-slate-400">(कल गर्न क्लिक गर्नुहोस्)</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-600 hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                {/* Jurisdiction Note */}
                <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed border border-slate-100 dark:border-slate-800">
                  <strong className="text-slate-700 dark:text-slate-300">कार्यक्षेत्र (Jurisdiction):</strong> {office.jurisdiction}
                </div>

              </div>
            );
          })
        ) : (
          <div className="col-span-2 p-10 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
            <Building2 className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-900 dark:text-white">कुनै कार्यालय फेला परेन</h4>
            <p className="text-xs text-slate-500">
              कृपया फरक खोज शब्द टाइप गर्नुहोस् वा प्रदेश फिल्टर रिसेट गर्नुहोस्।
            </p>
          </div>
        )}
      </div>

      {/* In-feed AdSense Slot */}
      <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

      {/* Official Government Portals Reference */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="font-black text-slate-900 dark:text-white text-base flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>आधिकारिक सरकारी निकायहरूको वेबसाइट लिङ्क</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <a
            href="http://dos.gov.np"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between group hover:border-emerald-500 transition-all"
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
            className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 flex items-center justify-between group hover:border-amber-500 transition-all"
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
