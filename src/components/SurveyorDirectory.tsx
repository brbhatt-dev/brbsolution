'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Star, 
  Award, 
  CheckCircle2, 
  Wrench, 
  MessageSquare, 
  UserPlus, 
  X, 
  Filter, 
  Clock, 
  Sparkles,
  Building,
  HardHat,
  Compass
} from 'lucide-react';
import { SURVEYOR_PROFILES, SurveyorProfile } from '@/data/surveyors';
import AdSenseSlot from '@/components/AdSenseSlot';

export default function SurveyorDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('सबै');
  const [selectedDistrict, setSelectedDistrict] = useState('सबै');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'amin' | 'engineer' | 'consultancy'>('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState('सबै');
  
  // Custom user registered profiles from localStorage
  const [customProfiles, setCustomProfiles] = useState<SurveyorProfile[]>([]);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  // Registration Form State
  const [regName, setRegName] = useState('');
  const [regTitle, setRegTitle] = useState('लाइसेन्सप्राप्त नापी अमिन');
  const [regCategory, setRegCategory] = useState<'amin' | 'engineer' | 'consultancy'>('amin');
  const [regProvince, setRegProvince] = useState('बागमती प्रदेश');
  const [regDistrict, setRegDistrict] = useState('काठमाडौँ');
  const [regCity, setRegCity] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regWhatsapp, setRegWhatsapp] = useState('');
  const [regExpYears, setRegExpYears] = useState('५');
  const [regLicense, setRegLicense] = useState('');
  const [regServices, setRegServices] = useState('कित्ताकाट, साँध सिमाना नाप, घर नक्सा पास');
  const [regBio, setRegBio] = useState('');

  // Load custom profiles from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ls_custom_surveyors');
      if (stored) {
        setCustomProfiles(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const allProfiles = useMemo(() => {
    return [...customProfiles, ...SURVEYOR_PROFILES];
  }, [customProfiles]);

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

  // Unique list of districts based on selected province
  const availableDistricts = useMemo(() => {
    const relevant = selectedProvince === 'सबै' 
      ? allProfiles 
      : allProfiles.filter(p => p.province === selectedProvince);
    const set = new Set(relevant.map(p => p.district));
    return ['सबै', ...Array.from(set)];
  }, [selectedProvince, allProfiles]);

  const popularSpecialties = [
    'सबै',
    'कित्ताकाट',
    'टोटल स्टेसन',
    'घर नक्सा पास',
    'DGPS',
    'अंशबण्डा',
    'सिमाना विवाद'
  ];

  // Filtered List
  const filteredSurveyors = useMemo(() => {
    return allProfiles.filter((item) => {
      // Province
      if (selectedProvince !== 'सबै' && item.province !== selectedProvince) return false;
      // District
      if (selectedDistrict !== 'सबै' && item.district !== selectedDistrict) return false;
      // Category
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      // Specialty Tag
      if (selectedSpecialty !== 'सबै') {
        const hasSpecialty = item.specialties.some(s => s.toLowerCase().includes(selectedSpecialty.toLowerCase()));
        if (!hasSpecialty) return false;
      }
      // Search Term
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchName = item.name.toLowerCase().includes(term);
        const matchTitle = item.title.toLowerCase().includes(term);
        const matchDistrict = item.district.toLowerCase().includes(term);
        const matchCity = item.city.toLowerCase().includes(term);
        const matchBio = item.bio.toLowerCase().includes(term);
        const matchSpecialty = item.specialties.some(s => s.toLowerCase().includes(term));
        return matchName || matchTitle || matchDistrict || matchCity || matchBio || matchSpecialty;
      }
      return true;
    });
  }, [allProfiles, selectedProvince, selectedDistrict, selectedCategory, selectedSpecialty, searchTerm]);

  // Handle Free Registration
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regPhone || !regCity) {
      alert('कृपया नाम, फोन नम्बर र कार्यक्षेत्र ठेगाना अनिवार्य भर्नुहोस्।');
      return;
    }

    const newProfile: SurveyorProfile = {
      id: `custom-surv-${Date.now()}`,
      name: regName,
      title: regTitle,
      category: regCategory,
      categoryLabelNp: regCategory === 'amin' ? 'नापी अमिन' : regCategory === 'engineer' ? 'इन्जिनियर' : 'सर्भे कन्सल्टेन्सी',
      district: regDistrict,
      province: regProvince,
      city: regCity,
      phone: regPhone,
      whatsapp: regWhatsapp || regPhone,
      experienceYears: parseInt(regExpYears, 10) || 3,
      licenseInfo: regLicense || 'नापी तथा इन्जिनियरिङ सेवा प्राविधिक',
      specialties: regServices.split(',').map(s => s.trim()).filter(Boolean),
      equipment: ['Total Station / EDM', 'Digital Measure Tape'],
      rating: 5.0,
      reviewCount: 1,
      verified: true,
      bio: regBio || `${regDistrict} जिल्लामा व्यावसायिक नापी, कित्ताकाट तथा नक्सांकन सेवा।`
    };

    const updated = [newProfile, ...customProfiles];
    setCustomProfiles(updated);
    try {
      localStorage.setItem('ls_custom_surveyors', JSON.stringify(updated));
    } catch (e) {}

    setRegisterSuccess(true);
    setTimeout(() => {
      setRegisterSuccess(false);
      setIsRegisterModalOpen(false);
      // Reset form
      setRegName('');
      setRegPhone('');
      setRegWhatsapp('');
      setRegCity('');
      setRegBio('');
    }, 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Search and Filters Header Card */}
      <div className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        
        {/* Top Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="अमिन वा इन्जिनियरको नाम, जिल्ला, नगरपालिका वा सेवा (उदा: काठमाडौँ, पोखरा, कित्ताकाट, DGPS)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              हटाउनुहोस्
            </button>
          )}
        </div>

        {/* Dropdowns Row: Province, District, Category */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          
          {/* Province */}
          <div>
            <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">प्रदेश छान्नुहोस्:</label>
            <select
              value={selectedProvince}
              onChange={(e) => {
                setSelectedProvince(e.target.value);
                setSelectedDistrict('सबै');
              }}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-emerald-500"
            >
              {provinces.map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">जिल्ला छान्नुहोस्:</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-emerald-500"
            >
              {availableDistricts.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          {/* Category Tabs */}
          <div>
            <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">विधा / पेशा:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">सबै प्राविधिकहरू (All)</option>
              <option value="amin">नापी अमिन (Licensed Surveyors)</option>
              <option value="engineer">जियोमेटिक्स / सिभिल इन्जिनियर</option>
              <option value="consultancy">सर्भे कन्सल्टेन्सी कम्पनीहरू</option>
            </select>
          </div>

        </div>

        {/* Popular Specialty Chips */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-emerald-600" />
              <span>मुख्य सेवा:</span>
            </span>
            {popularSpecialties.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-2.5 py-1 rounded-lg transition-all font-semibold cursor-pointer ${
                  selectedSpecialty === spec
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Register Action Button */}
          <button
            onClick={() => setIsRegisterModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>अमिन / इन्जिनियर दर्ता गर्नुहोस्</span>
          </button>
        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm sm:text-base font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-2">
          <span>निर्देशिका सूची</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black">
            {filteredSurveyors.length} प्राविधिक उपलब्ध
          </span>
        </h2>
        <span className="text-xs text-slate-500 hidden sm:inline">
          प्रत्यक्ष फोन र WhatsApp सम्पर्क (बिचौलिया रहित)
        </span>
      </div>

      {/* Surveyor Cards Grid */}
      {filteredSurveyors.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <Compass className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="font-bold text-slate-800 dark:text-white text-base">कुनै प्राविधिक फेला परेन</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            तपाईंले खोज्नुभएको स्थान वा विधामा प्राविधिक भेटिएन। कृपया अर्को जिल्ला वा 'सबै' फिल्टर छान्नुहोस्।
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedProvince('सबै');
              setSelectedDistrict('सबै');
              setSelectedCategory('all');
              setSelectedSpecialty('सबै');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-xs cursor-pointer"
          >
            सबै फिल्टर खाली गर्नुहोस्
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredSurveyors.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              
              {/* Card Top: Avatar, Name, Title, Badges */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-black text-lg shadow-sm shrink-0">
                      {item.category === 'consultancy' ? (
                        <Building className="w-6 h-6" />
                      ) : item.category === 'engineer' ? (
                        <HardHat className="w-6 h-6" />
                      ) : (
                        <Compass className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="font-black text-slate-900 dark:text-white text-base group-hover:text-emerald-600 transition-colors">
                          {item.name}
                        </h3>
                        {item.verified && (
                          <span title="प्रमाणित प्राविधिक">
                            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                        <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                          <MapPin className="w-3 h-3" />
                          <span>{item.city} ({item.district})</span>
                        </span>
                        <span>&bull;</span>
                        <span className="flex items-center gap-0.5 text-amber-600 font-bold">
                          <Star className="w-3 h-3 fill-amber-500" />
                          <span>{item.rating} ({item.reviewCount})</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300 shrink-0">
                    {item.experienceYears} वर्ष अनुभव
                  </span>
                </div>

                {/* License Tag */}
                <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{item.licenseInfo}</span>
                </div>

                {/* Bio / Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {item.bio}
                </p>

                {/* Services / Specialties */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {item.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 text-[10px] font-semibold border border-emerald-200/60 dark:border-emerald-800/50"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Equipment Tags */}
                {item.equipment && item.equipment.length > 0 && (
                  <div className="flex items-center gap-1 text-[10px] text-slate-500 pt-1">
                    <Wrench className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">प्रविधि: {item.equipment.join(', ')}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons: Phone & WhatsApp */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href={`tel:${item.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs transition-transform active:scale-95 cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>सिधै कल ({item.phone})</span>
                </a>

                <a
                  href={`https://wa.me/977${item.whatsapp || item.phone}?text=${encodeURIComponent(`नमस्ते ${item.name}ज्यू, मैले brbhatta.com (Land Solution) मार्फत तपाईंको प्रोफाइल देखेर जग्गा नापी/नक्सा सम्बन्धी सेवाका लागि सम्पर्क गरेको हुँ।`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xs transition-transform active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp च्याट</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* AdSense Slot */}
      <AdSenseSlot userFacingLabel="विज्ञापन (AdSense Slot)" />

      {/* Guidance Section: What to prepare before hiring a surveyor */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
        <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <span>जग्गाधनीका लागि उपयोगी जानकारी: नापी अमिनलाई बोलाउनुअघि के-के तयारी गर्ने?</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">१</span>
              <span>आधिकारिक लालपुर्जा र नक्सा ट्रेस</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              सम्बन्धित कित्ताको सक्कल लालपुर्जाको प्रतिलिपि र नापी कार्यालयबाट प्रमाणित गरिएको पछिल्लो नक्सा ट्रेस (Trace Map) अनिवार्य साथमा राख्नुहोस्।
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">२</span>
              <span>छिमेकी जग्गाधनीहरूलाई पूर्वजानकारी</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              साँध-सिमाना विवाद नहोस् भन्नका लागि चारैतर्फका साँध जोडिएका छिमेकीहरूलाई नापी हुने मिति र समयको पूर्वजानकारी गराउनु बुद्धिमानी हुन्छ।
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">३</span>
              <span>नापजाँच स्लिप र फिल्डबुक चेक</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              अमिनले नापजाँच सकेपछि क्षेत्रफल (रोपनी वा बिघा) र वर्गफिट स्पष्ट भएको आधिकारिक नापी स्लिप लिनुहोस् र दुवै पक्षले सहीछाप गर्नुहोस्।
            </p>
          </div>
        </div>
      </div>

      {/* Free Registration Modal for Local Amins & Engineers */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  <UserPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 dark:text-white text-base sm:text-lg">
                    अमिन / इन्जिनियर निःशुल्क दर्ता फाराम
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    नेपालभरिका सेवाग्राहीहरूसँग सिधै जोडिन आफ्नो व्यावसायिक प्रोफाइल दर्ता गर्नुहोस्।
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsRegisterModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form Body */}
            {registerSuccess ? (
              <div className="p-8 text-center space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-lg font-black text-slate-900 dark:text-white">
                  बधाई छ! तपाईंको प्रोफाइल सफलतापूर्वक दर्ता भयो।
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  तपाईंको विवरण निर्देशिकामा थपिएको छ। अब सेवाग्राहीहरूले तपाईंलाई सिधै फोन र WhatsApp मा सम्पर्क गर्न सक्नेछन्।
                </p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="p-5 sm:p-6 space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                      तपाईंको पूरा नाम / कन्सल्टेन्सीको नाम <span className="text-rose-500">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="उदा: अमिन कृष्ण प्रसाद शर्मा"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                      विधा (Category):
                    </label>
                    <select
                      value={regCategory}
                      onChange={(e) => {
                        const val = e.target.value as any;
                        setRegCategory(val);
                        setRegTitle(val === 'amin' ? 'लाइसेन्सप्राप्त नापी अमिन' : val === 'engineer' ? 'जियोमेटिक्स / सिभिल इन्जिनियर' : 'डिजिटल सर्भे कन्सल्टेन्सी');
                      }}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    >
                      <option value="amin">नापी अमिन (Surveyor)</option>
                      <option value="engineer">जियोमेटिक्स / सिभिल इन्जिनियर</option>
                      <option value="consultancy">सर्भे कन्सल्टेन्सी कम्पनी</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">प्रदेश:</label>
                    <select
                      value={regProvince}
                      onChange={(e) => setRegProvince(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    >
                      {provinces.filter(p => p !== 'सबै').map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">जिल्ला:</label>
                    <input
                      type="text"
                      placeholder="उदा: काठमाडौँ / कास्की"
                      value={regDistrict}
                      onChange={(e) => setRegDistrict(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                      कार्यक्षेत्र (ठाउँ / टोल) <span className="text-rose-500">*</span>:
                    </label>
                    <input
                      type="text"
                      placeholder="उदा: नयाँ बानेश्वर / कलंकी"
                      value={regCity}
                      onChange={(e) => setRegCity(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                      सम्पर्क फोन नम्बर <span className="text-rose-500">*</span>:
                    </label>
                    <input
                      type="tel"
                      placeholder="उदा: 98510XXXXX"
                      value={regPhone}
                      onChange={(e) => setRegPhone(e.target.value)}
                      required
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">WhatsApp नम्बर:</label>
                    <input
                      type="tel"
                      placeholder="फोन जस्तै वा फरक"
                      value={regWhatsapp}
                      onChange={(e) => setRegWhatsapp(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">अनुभव (वर्ष):</label>
                    <input
                      type="number"
                      min="1"
                      max="40"
                      value={regExpYears}
                      onChange={(e) => setRegExpYears(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    लाइसेन्स वा दर्ता विवरण (वैकल्पिक):
                  </label>
                  <input
                    type="text"
                    placeholder="उदा: नापी विभाग अनुमतिपत्र नं: ३४२/०७२ वा NEC Reg No"
                    value={regLicense}
                    onChange={(e) => setRegLicense(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    तपाईंले प्रदान गर्ने मुख्य सेवाहरू (कमाले छुट्याउनुहोस्):
                  </label>
                  <input
                    type="text"
                    placeholder="उदा: कित्ताकाट, साँध सिमाना नाप, टोटल स्टेसन, घर नक्सा पास, अंशबण्डा"
                    value={regServices}
                    onChange={(e) => setRegServices(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                    छोटो परिचय (Bio):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="तपाईंको अनुभव, प्रयोग गर्ने उपकरण (Total Station / DGPS आदि) र सेवा क्षेत्रबारे संक्षेपमा लेख्नुहोस्..."
                    value={regBio}
                    onChange={(e) => setRegBio(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsRegisterModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold"
                  >
                    रद्द गर्नुहोस्
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md cursor-pointer"
                  >
                    निःशुल्क प्रोफाइल सुरक्षित गर्नुहोस्
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
