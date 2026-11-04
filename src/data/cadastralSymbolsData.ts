// Official Cadastral Map Symbols & Legend Data for Nepal Survey Department (नापी विभाग)
// Compiled from official Department of Survey (DOS) cartographic standards, Cadastral Survey Regulations 2058, and Survey Operations Manual.

export interface CadastralSymbol {
  id: string;
  nameNp: string;
  nameEn: string;
  category: 'boundary' | 'roads' | 'water' | 'buildings' | 'public' | 'utilities' | 'topography' | 'lines';
  svgType: string;
  colorCode: string;
  descriptionNp: string;
  legalSignificance: string;
  fieldTips: string;
  cadastralCode?: string;
}

export interface MapScaleOption {
  scaleRatio: number; // e.g. 500 for 1:500
  nameNp: string;
  nameEn: string;
  commonUsage: string;
  unitMmInMeters: number; // 1 mm on paper = X meters on ground
  unitMmInFeet: number;   // 1 mm on paper = X feet on ground
  precision: string;
}

export const MAP_SCALES: MapScaleOption[] = [
  {
    scaleRatio: 500,
    nameNp: '१:५०० (ठूलो स्केल / घडेरी नाप)',
    nameEn: '1:500 (Detailed Urban / Plotting)',
    commonUsage: 'काठमाडौँ उपत्यका, मुख्य सहरी क्षेत्र, प्लटिङ घडेरी तथा ससाना टुक्रा जग्गा',
    unitMmInMeters: 0.5, // 1 mm = 0.5 meter (50 cm)
    unitMmInFeet: 1.64042, // 1 mm = ~1.64 ft
    precision: 'अत्यन्त उच्च (सटीकता ±१० सेमी)'
  },
  {
    scaleRatio: 1250,
    nameNp: '१:१२५० (सहरी तथा विकासोन्मुख क्षेत्र)',
    nameEn: '1:1250 (Semi-Urban / Municipality)',
    commonUsage: 'नगरपालिका, बजार क्षेत्र, सडक छेउका जग्गा तथा मध्यम सघन बस्ती',
    unitMmInMeters: 1.25, // 1 mm = 1.25 meters
    unitMmInFeet: 4.10105, // 1 mm = ~4.1 ft
    precision: 'उच्च (सटीकता ±२५ सेमी)'
  },
  {
    scaleRatio: 2500,
    nameNp: '१:२५०० (तराई तथा ग्रामीण खेतीयोग्य जग्गा)',
    nameEn: '1:2500 (Terai & Agricultural Cadastral)',
    commonUsage: 'तराईका फाँट, गाउँपालिका, ठूला कित्ता भएका कृषि जग्गा तथा चक्लाबन्दी',
    unitMmInMeters: 2.5, // 1 mm = 2.5 meters
    unitMmInFeet: 8.2021, // 1 mm = ~8.2 ft
    precision: 'मध्यम (सटीकता ±५० सेमी)'
  },
  {
    scaleRatio: 4000,
    nameNp: '१:४००० (पहाडी तथा डाँडाकाँडा क्षेत्र)',
    nameEn: '1:4000 (Hilly & Mountain Slopes)',
    commonUsage: 'पहाडी जिल्लाका पाखा, कान्ला, ठूला खरबारी तथा जंगल जोडिएका कित्ता',
    unitMmInMeters: 4.0, // 1 mm = 4 meters
    unitMmInFeet: 13.1234, // 1 mm = ~13.12 ft
    precision: 'सामान्य (सटीकता ±१ मिटर)'
  },
  {
    scaleRatio: 5000,
    nameNp: '१:५००० (हिमाली तथा दुर्गम वन क्षेत्र)',
    nameEn: '1:5000 (Remote & High Mountain)',
    commonUsage: 'उच्च हिमाली भेग, खर्क, सरकारी वन तथा दुर्गम क्षेत्र',
    unitMmInMeters: 5.0, // 1 mm = 5 meters
    unitMmInFeet: 16.4042, // 1 mm = ~16.4 ft
    precision: 'क्षेत्रीय (सटीकता ±१.५ मिटर)'
  }
];

export const CADASTRAL_SYMBOLS: CadastralSymbol[] = [
  // 1. Boundary Pillars & Markers
  {
    id: 'primary-pillar',
    nameNp: 'मुख्य सिमाना स्तम्भ (१ नम्बर पिल्लर)',
    nameEn: 'Primary / Main Boundary Pillar',
    category: 'boundary',
    svgType: 'pillar-main',
    colorCode: '#b91c1c',
    descriptionNp: 'जिल्ला, नगरपालिका वा प्रमुख ब्लक सिमाना छुट्याउन गाडिएको स्थायी सिमेन्ट वा ढुङ्गाको ठूलो स्तम्भ।',
    legalSignificance: 'यसलाई सार्न, भत्काउन वा मेटाउन मुलुकी अपराध संहिता २०७४ र नापजाँच ऐन २०१९ अनुसार कडा कानुनी दण्ड (कैद र जरिवाना) हुन्छ।',
    fieldTips: 'फिल्डमा नापजाँच गर्दा यस स्तम्भलाई बेस प्वाइन्ट (आधार बिन्दु) मानी अन्य कित्ताका साँध नापिन्छ।',
    cadastralCode: 'BP-01'
  },
  {
    id: 'intermediate-pillar',
    nameNp: 'मध्यवर्ती सिमाना स्तम्भ (सहायक पिल्लर)',
    nameEn: 'Intermediate / Secondary Pillar',
    category: 'boundary',
    svgType: 'pillar-secondary',
    colorCode: '#ea580c',
    descriptionNp: 'मुख्य पिल्लरहरूका बीचमा सिधा दृष्टिरेखा (Line of Sight) कायम गर्न गाडिएका मध्यम आकारका पिल्लर।',
    legalSignificance: 'वडा सिमाना वा ठूला सार्वजनिक जग्गाको बाउन्ड्री प्रमाणित गर्न प्रयोग हुन्छ।',
    fieldTips: 'टोटल स्टेसन वा फित्ताले नाप्दा मुख्य र सहायक पिल्लरको कोअर्डिनेट क्रस-भेरिफाइ गर्नुपर्छ।',
    cadastralCode: 'BP-02'
  },
  {
    id: 'kitta-peg-stone',
    nameNp: 'कित्ताको साँध ढुङ्गा / किलो (Peg / Boundary Corner)',
    nameEn: 'Cadastral Parcel Corner / Peg',
    category: 'boundary',
    svgType: 'parcel-corner',
    colorCode: '#0284c7',
    descriptionNp: 'व्यक्तिगत कित्ताको प्रत्येक कुना वा मोडमा अमिनले फिल्डमा गाड्ने काठको किला वा ढुङ्गाको संकेत।',
    legalSignificance: 'दुई कित्ताका जग्गाधनीबीच साँध-सिमाना विवाद पर्दा फिल्डबुक र नक्साको यही बिन्दु हेरिन्छ।',
    fieldTips: 'घर वा पर्खाल बनाउनुअघि अमिन बोलाएर यही साँध बिन्दुमा किला प्रमाणित गराउनु अनिवार्य हुन्छ।',
    cadastralCode: 'CK-01'
  },

  // 2. Roads & Ways
  {
    id: 'blacktopped-road',
    nameNp: 'कालोपत्रे मोटरबाटो (Metalled Road)',
    nameEn: 'Metalled / Paved Motor Road',
    category: 'roads',
    svgType: 'road-paved',
    colorCode: '#334155',
    descriptionNp: 'स्थानीय तह वा सडक विभाग मातहतको पक्की कालोपत्रे सडक। नक्सामा दुई समानान्तर सिधा रातो वा कालो रेखाले देखाइन्छ।',
    legalSignificance: 'सडक वर्गीकरण अनुसार राइट अफ वे (Right of Way) र सेटब्याक (Setback - ३ देखि ५ मिटर) छोड्नुपर्छ।',
    fieldTips: 'नक्सामा सडकको बीच भागबाट दुवैतर्फ बराबर दूरी छोडेर मात्र घर वा पर्खालको नक्सा पास हुन्छ।',
    cadastralCode: 'RD-01'
  },
  {
    id: 'gravel-earthen-road',
    nameNp: 'ग्राभेल / कच्ची धुले सडक (Gravel Road)',
    nameEn: 'Gravel / Earthen Road',
    category: 'roads',
    svgType: 'road-gravel',
    colorCode: '#d97706',
    descriptionNp: 'मोटर गुड्न मिल्ने तर कालोपत्रे नभएको ग्राभेल वा माटोको सार्वजनिक सडक।',
    legalSignificance: 'सार्वजनिक सडक भए पनि भविष्यमा स्तरोन्नति हुने भएकाले स्थानीय बाइ-लज बमोजिम न्यूनतम चौडाइ छोड्नुपर्छ।',
    fieldTips: 'मेरोकित्ताको नक्सामा सडकको कित्ता नम्बर छुट्टै सरकारी/सार्वजनिक छ कि व्यक्तिको नाममा छ जाँच्नुहोस्।',
    cadastralCode: 'RD-02'
  },
  {
    id: 'goreto-footpath',
    nameNp: 'गोरेटो / घोडेटो बाटो (Footpath)',
    nameEn: 'Footpath / Trail (Dashed Line)',
    category: 'roads',
    svgType: 'trail-dashed',
    colorCode: '#854d0e',
    descriptionNp: 'नक्सामा साना टुक्रा-टुक्रा ड्यास लाइन (---) ले देखाइने मानिस वा चौपाया हिँड्ने परम्परागत गोरेटो बाटो।',
    legalSignificance: 'मुलुकी देवानी संहिता अनुसार परापूर्व कालदेखि चलेको गोरेटो बाटो कसैले पनि रोक्न वा आफ्नो कम्पाउन्डभित्र पार्न पाउँदैन (भोगाधिकार / Easement)।',
    fieldTips: 'गोरेटो बाटो देखाएको जग्गामा नगरपालिकाले गाडी गुड्ने बाटोको मापदण्ड नपुग्दा घर नक्सा पास रोक्न सक्छ।',
    cadastralCode: 'RD-03'
  },
  {
    id: 'nikas-bato',
    nameNp: 'निकास बाटो (Right of Way / Private Access)',
    nameEn: 'Right of Way / Access Passage',
    category: 'roads',
    svgType: 'access-passage',
    colorCode: '#059669',
    descriptionNp: 'भित्री कित्तालाई सार्वजनिक सडकमा जोडिन जग्गाधनीहरू मिलेर छोडेको वा कित्ताकाट गर्दा राखिएको बाटो।',
    legalSignificance: 'कित्ताकाट गर्दा न्यूनतम ३ देखि ४ मिटर (उपत्यकामा १३ फिट/२० फिट) बाटो हुनुपर्ने सरकारी नियम छ।',
    fieldTips: 'जग्गा किन्दा यो निकास बाटो सरकारी लगतमा दर्ता भइसकेको छ कि निजी कित्तामै छ स्पष्ट हुनुपर्छ।',
    cadastralCode: 'RD-04'
  },

  // 3. Water bodies & Irrigation
  {
    id: 'khola-river',
    nameNp: 'नदी / खोला (River / Natural Stream)',
    nameEn: 'River / Natural Water Stream',
    category: 'water',
    svgType: 'water-river',
    colorCode: '#0284c7',
    descriptionNp: 'प्राकृतिक रूपमा बग्ने खोला वा नदी। नक्सामा निलो रङ्ग वा जलप्रवाह देखाउने दुई समानान्तर तरङ्गित रेखाहरू।',
    legalSignificance: 'नदी/खोलाको किनारबाट काठमाडौँमा २० मिटर र अन्य क्षेत्रमा प्रचलित ऐन अनुसार अनिवार्य मापदण्ड (Setback) छोड्नुपर्छ। दर्ता गर्न मिल्दैन।',
    fieldTips: 'बर्खामा खोलाले धार परिवर्तन गर्दा जग्गाको क्षेत्रफल घटेको भए पनि नक्साको वास्तविक सिमाना नै कानुनी मानिन्छ।',
    cadastralCode: 'WT-01'
  },
  {
    id: 'raj-kulo',
    nameNp: 'राजकुलो / सार्वजनिक सिँचाइ नहर (Main Canal)',
    nameEn: 'Public Irrigation Canal (Raj Kulo)',
    category: 'water',
    svgType: 'water-canal',
    colorCode: '#0891b2',
    descriptionNp: 'खेतमा पानी लैजान परापूर्व कालदेखि बनेको मुख्य राजकुलो। नक्सामा डट र लाइनले कुलो बगेको दिशासहित देखाइन्छ।',
    legalSignificance: 'राजकुलो पुर्ने, भत्काउने वा आफ्नो जग्गामा गाभ्ने कार्य मुलुकी देवानी संहिता अनुसार गैरकानुनी हो। ३ देखि ५ मिटर सेटब्याक लाग्न सक्छ।',
    fieldTips: 'प्लटिङ जग्गा किन्दा कुलो पुरेर प्लट बनाइएको छ कि छैन नापी नक्सा र फिल्ड भिडाएर हेर्नुहोस्।',
    cadastralCode: 'WT-02'
  },
  {
    id: 'public-pond',
    nameNp: 'सार्वजनिक पोखरी / इनार (Pond / Well)',
    nameEn: 'Public Pond / Community Well',
    category: 'water',
    svgType: 'water-pond',
    colorCode: '#0e7490',
    descriptionNp: 'सार्वजनिक प्रयोगको पोखरी वा इनार। नक्सामा गोलो वा अण्डाकार निलो घेराभित्र संकेत गरिन्छ।',
    legalSignificance: 'सार्वजनिक जलस्रोतको जग्गा कुनै पनि व्यक्तिको नाममा दर्ता गर्न मिल्दैन; दर्ता भएको पाइए सरकारले स्वतः बदर गर्दछ।',
    fieldTips: 'पोखरीको डिलमा जोडिएको जग्गा पास गर्दा स्थानीय सरकारको सिफारिस लिनु बुद्धिमानी हुन्छ।',
    cadastralCode: 'WT-03'
  },

  // 4. Buildings & Compounds
  {
    id: 'permanent-building',
    nameNp: 'पक्की घर / आरसीसी भवन (Permanent House)',
    nameEn: 'Permanent / RCC Building',
    category: 'buildings',
    svgType: 'building-permanent',
    colorCode: '#dc2626',
    descriptionNp: 'नापी हुँदाको बखत कित्ताभित्र रहेको इँटा, सिमेन्ट वा आरसीसी ढलान भएको पक्की भवन। प्रायः रातो वा क्रस-ह्याच (Hatched) ले देखाइन्छ।',
    legalSignificance: 'फिल्डबुकमा पक्की घर उल्लेख भएमा मालपोत रजिस्ट्रेसन पास गर्दा घरको समेत मूल्याङ्कन कर लाग्छ।',
    fieldTips: 'यदि पुरानो घर भत्किसकेको छ भने मालपोत जानुअघि वडा कार्यालयबाट "घर नभएको / खाली जग्गा" को सिफारिस बनाउनुपर्छ।',
    cadastralCode: 'BL-01'
  },
  {
    id: 'temporary-hut',
    nameNp: 'कच्ची घर / छाप्रो / गोठ (Temporary Shed)',
    nameEn: 'Temporary Shed / Thatched Hut',
    category: 'buildings',
    svgType: 'building-hut',
    colorCode: '#f97316',
    descriptionNp: 'काठ, बाँस, टिन वा खरले छाएको अस्थायी संरचना वा पशु गोठ। नक्सामा सादा आयताकार रेखाले देखाइन्छ।',
    legalSignificance: 'यस्तो संरचनालाई स्थायी सम्पत्ति मानिँदैन तर फिल्डबुकमा भोग चलनको प्रमाणको रूपमा लेखिन सक्छ।',
    fieldTips: 'कच्ची घर भत्काएर नयाँ पक्की घर बनाउन स्थानीय तहबाट अनिवार्य नयाँ नक्सा पास स्वीकृति लिनुपर्छ।',
    cadastralCode: 'BL-02'
  },
  {
    id: 'boundary-wall',
    nameNp: 'कम्पाउन्ड पर्खाल / गाह्रो (Compound Wall)',
    nameEn: 'Boundary Wall / Masonry Fence',
    category: 'buildings',
    svgType: 'wall-compound',
    colorCode: '#475569',
    descriptionNp: 'दुई कित्ता वा सडकको सिमानामा लगाइएको इँटा वा ढुङ्गाको स्थायी पर्खाल। नक्सामा बाक्लो कालो रेखाले कोरिएको हुन्छ।',
    legalSignificance: 'पर्खाल साँधको सिमानाभित्र हुनुपर्छ। छिमेकीको जग्गा १ इन्च पनि मिचेर पर्खाल लगाएको ठहरिए भत्काउनुपर्ने फैसला हुन्छ।',
    fieldTips: 'पर्खाल लगाउनुअघि अमिन बोलाएर दुवै छिमेकी साक्षी राखी सिमाना किटान गर्नु उत्तम हुन्छ।',
    cadastralCode: 'BL-03'
  },

  // 5. Public & Religious Places
  {
    id: 'temple-mandir',
    nameNp: 'मन्दिर / देवल (Hindu Temple)',
    nameEn: 'Temple / Shrine (Religious)',
    category: 'public',
    svgType: 'religious-temple',
    colorCode: '#b45309',
    descriptionNp: 'नक्सामा गजुर वा झण्डाको सानो चिन्हसहित देखाइने सार्वजनिक मन्दिर वा देउराली।',
    legalSignificance: 'मन्दिर तथा गुठी जग्गाको स्वामित्व गुठी संस्थान वा सरकारको हुन्छ; व्यक्तिगत नाममा दर्ता गर्न पूर्ण निषेध छ।',
    fieldTips: 'मन्दिर छेउको जग्गा किन्दा मन्दिरको प्रवेशद्वार वा बाटो अवरोध नहुने गरी कित्ता छुट्याउनु पर्छ।',
    cadastralCode: 'RL-01'
  },
  {
    id: 'monastery-gumba',
    nameNp: 'गुम्बा / चैत्य / स्तुप (Buddhist Monastery)',
    nameEn: 'Monastery / Stupa',
    category: 'public',
    svgType: 'religious-gumba',
    colorCode: '#d97706',
    descriptionNp: 'बौद्ध धर्मावलम्बीहरूको गुम्बा वा माने/चैत्यको संकेत चिन्ह।',
    legalSignificance: 'धार्मिक तथा पुरातात्विक महत्वको जग्गा कानुनतः संरक्षित हुन्छ।',
    fieldTips: 'प्राचीन स्मारक संरक्षण ऐन २०१३ अनुसार सम्पदा क्षेत्र वरपर भवन निर्माणको विशेष उचाइ मापदण्ड हुन्छ।',
    cadastralCode: 'RL-02'
  },
  {
    id: 'school-public',
    nameNp: 'सार्वजनिक विद्यालय / अस्पताल (School / Public Asset)',
    nameEn: 'School / College / Hospital',
    category: 'public',
    svgType: 'public-school',
    colorCode: '#2563eb',
    descriptionNp: 'सरकारी वा सामुदायिक विद्यालय, क्याम्पस वा स्वास्थ्य संस्था। नक्सामा झण्डा वा क्रस चिन्हसहित रेखाङ्कन हुन्छ।',
    legalSignificance: 'सार्वजनिक संस्थाको जग्गा अतिक्रमण गरेमा भूमिसुधार तथा मालपोत विभागले तत्काल बदर गरी सार्वजनिक कायम गर्दछ।',
    fieldTips: 'विद्यालय छेउको जग्गामा बाटो वा खुला मैदान अतिक्रमण भएको छ कि नापी सिट नक्साबाट जाँच्नुहोस्।',
    cadastralCode: 'PB-01'
  },

  // 6. Utilities & Transmission
  {
    id: 'high-tension-line',
    nameNp: 'उच्च भोल्टेज विद्युत प्रसारण लाइन (High Tension Line)',
    nameEn: 'High Tension Electricity Grid (132kV/66kV)',
    category: 'utilities',
    svgType: 'utility-hightension',
    colorCode: '#7c3aed',
    descriptionNp: 'नेपाल विद्युत प्राधिकरणको मुख्य ट्रान्समिसन लाइन र ठूला टावरहरू। नक्सामा बिजुलीको झड्का चिन्ह र टावर पोल संकेत हुन्छ।',
    legalSignificance: 'विद्युत लाइनको तारमुनि र दुवैतर्फ ९ मिटरदेखि १५ मिटर (राइट अफ वे) भित्र घर वा भवन निर्माण गर्न कानुनतः निषेध छ। बैंकले धितो स्वीकार गर्दैन।',
    fieldTips: 'जग्गा किन्दा माथिबाट नाङ्गो हाइ-टेन्सन तार गएको छ कि छैन नक्सा र फिल्ड दुवैमा गम्भीरतापूर्वक हेर्नुहोस्।',
    cadastralCode: 'UT-01'
  },
  {
    id: 'electric-pole',
    nameNp: 'स्थानीय विद्युत पोल (Electricity Pole)',
    nameEn: 'Local Distribution Pole',
    category: 'utilities',
    svgType: 'utility-pole',
    colorCode: '#6d28d9',
    descriptionNp: 'सडक वा गल्लीमा गाडिएका काठ वा सिमेन्टको बत्तीको पोल। नक्सामा सानो कालो वृत्त वा वृत्तभित्र क्रस (⊕) चिन्ह।',
    legalSignificance: 'जग्गाको साँधमा पोल परेमा घर वा कम्पाउन्ड बनाउँदा विद्युत प्राधिकरणलाई दस्तुर तिरेर सार्न सकिन्छ।',
    fieldTips: 'पोल सार्वजनिक बाटोमा छ कि तपाईंको निजी कित्ताभित्र परेको छ, नापी नक्साबाट छुट्याउनुहोस्।',
    cadastralCode: 'UT-02'
  },

  // 7. Topography & Forest
  {
    id: 'national-forest',
    nameNp: 'सरकारी / सामुदायिक वन (Forest Boundary)',
    nameEn: 'National / Community Forest Land',
    category: 'topography',
    svgType: 'topo-forest',
    colorCode: '#15803d',
    descriptionNp: 'वन क्षेत्र छुट्याउने रेखा र रुखहरूको संकेत चिन्ह। हरियो रङ्ग वा साना रुखका चित्रले देखाइन्छ।',
    legalSignificance: 'वन ऐन २०७६ अनुसार वन सिमाना मिचेर १ बित्ता जग्गा पनि दर्ता गर्न पाइँदैन; त्यसो गरेमा वन मुद्दा (कैद) लाग्छ।',
    fieldTips: 'वन जोडिएको जग्गा किन्दा नापी कार्यालय र वन कार्यालय दुवैको संयुक्त सिमाना रेखा प्रमाणित हुनुपर्छ।',
    cadastralCode: 'TP-01'
  },
  {
    id: 'cliff-steep-slope',
    nameNp: 'भीर / पहरा / कान्लो (Cliff / Steep Slope / Terrace)',
    nameEn: 'Cliff / Steep Terrace Bund (Hachures)',
    category: 'topography',
    svgType: 'topo-cliff',
    colorCode: '#78350f',
    descriptionNp: 'अग्लो-होचो भू-भाग, कान्लो वा भीर देखाउने साना-साना ठाडो धर्साहरू (Hachures)।',
    legalSignificance: 'भिरालो जग्गामा पहिरोको जोखिम हुने भएकाले स्थानीय तहले निश्चित डिग्रीभन्दा बढी भिरालोमा घर बनाउन अनुमति दिँदैन।',
    fieldTips: 'नक्सामा कान्लाको धर्सा जता फर्केको छ, भिरालो ओरालो भाग त्यतै हुन्छ।',
    cadastralCode: 'TP-02'
  },

  // 8. Lines & Cadastral Symbols
  {
    id: 'kitta-boundary-line',
    nameNp: 'कित्ताको सिमाना रेखा (Parcel Boundary Line)',
    nameEn: 'Parcel Boundary Solid Line',
    category: 'lines',
    svgType: 'line-boundary',
    colorCode: '#0f172a',
    descriptionNp: 'दुई कित्ताहरूबीचको कानुनी सिमाना। नक्सामा कालो गाढा सिधा रेखाले कोरिएको हुन्छ।',
    legalSignificance: 'नापी विभागको प्रमाणित सिमाना रेखा नै जग्गाको स्वामित्वको अन्तिम सिमाना प्रमाण हो।',
    fieldTips: 'नाप्दा रेखाको केन्द्र बिन्दु (Center-to-Center) बाट दूरी हिसाब गरिन्छ।',
    cadastralCode: 'LN-01'
  },
  {
    id: 'amended-dotted-line',
    nameNp: 'संसोधित / नयाँ कित्ताकाट रेखा (Amended Dotted Line)',
    nameEn: 'Amended / Subdivided Dotted Line',
    category: 'lines',
    svgType: 'line-amended',
    colorCode: '#be185d',
    descriptionNp: 'अंशबन्डा वा बिक्री भई नयाँ कित्ताकाट हुँदा नापी अमिनले फिल्डबुक अनुसार कोरेको रातो वा थोप्ला-थोप्ला (dotted) रेखा।',
    legalSignificance: 'नयाँ कित्ता नम्बर नआउन्जेल यो रेखाले खण्डिकृत भएको भाग जनाउँछ।',
    fieldTips: 'मेरोकित्तामा नयाँ कित्ताकाट अपडेट हुन केही दिन लाग्न सक्छ।',
    cadastralCode: 'LN-02'
  }
];

export interface SheetNumberExample {
  sheetNo: string;
  type: string;
  breakdown: string;
  explanation: string;
  scale: string;
}

export const SHEET_NUMBER_GUIDE: SheetNumberExample[] = [
  {
    sheetNo: '१०२-१२३४',
    type: 'MUTM ग्रिड सिट प्रणाली (Standard MUTM Grid Sheet)',
    breakdown: '१०२ = मुख्य ब्लक सिट (Primary 50k Block), १२३४ = उप-सिट नम्बर (Sub-quadrant Sheet)',
    explanation: 'नेपाल नापी विभागले MUTM (Modified Universal Transverse Mercator - 81°, 84°, 87°) प्रणालीमा आधारित बनाएको नयाँ डिजिटल सिट नम्बर।',
    scale: '१:५०० वा १:१२५०'
  },
  {
    sheetNo: '१६-क',
    type: 'परम्परागत गाउँ ब्लक सिट (Traditional Village Block Sheet)',
    breakdown: '१६ = वडा वा क्षेत्रको नम्बर, क = खण्ड/सिट उप-विभाजन',
    explanation: '२०२१/२०३० सालतिर बनेका पुराना नापी नक्साहरूमा प्रयोग भएको स्थानीय सिट नम्बर।',
    scale: '१:१२५० वा १:२५००'
  },
  {
    sheetNo: '२-ग (घडेरी)',
    type: 'सहरी विशेष घडेरी सिट (Urban Plotting Sheet)',
    breakdown: '२ = मुख्य सिट, ग = घडेरी ब्लक खण्ड',
    explanation: 'सहरका बाक्लो बस्ती र घडेरीहरू विस्तृत रूपमा देखाउन १:५०० को ठूलो स्केलमा बनाइएको सिट।',
    scale: '१:५००'
  }
];

export interface TrigControlPoint {
  orderNameNp: string;
  orderNameEn: string;
  accuracy: string;
  pillarDesign: string;
  usageNp: string;
  howToRequest: string;
}

export const TRIG_CONTROL_POINTS: TrigControlPoint[] = [
  {
    orderNameNp: 'प्रथम श्रेणी त्रिकोणमितीय बिन्दु (1st Order Trig Point)',
    orderNameEn: '1st Order Geodetic Station',
    accuracy: '±१ मिलिमिटरदेखि ±५ मिलिमिटर (अत्यन्त उच्च परिशुद्धता)',
    pillarDesign: 'ठूलो स्थायी कंक्रिट स्तम्भ, पित्तल वा स्टिलको केन्द्र बिन्दु (Brass Marker), डाँडाको टुप्पोमा अवस्थित।',
    usageNp: 'देशको राष्ट्रिय भूगणितीय नेटवर्क (Geodetic Network) को मेरुदण्ड। GPS कोर्डिनेटको उद्गम बिन्दु।',
    howToRequest: 'नापी विभाग, खगोल तथा भू-उपग्रह सर्भे शाखा (Geodetic Survey Branch, Baneshwor) बाट आधिकारिक निवेदन दिई लिन सकिन्छ।'
  },
  {
    orderNameNp: 'दोस्रो र तेस्रो श्रेणी बिन्दु (2nd & 3rd Order Trig Points)',
    orderNameEn: '2nd & 3rd Order Control Points',
    accuracy: '±१ सेन्टिमिटरदेखि ±२ सेन्टिमिटर',
    pillarDesign: 'मध्यम आकारको सिमेन्ट पिल्लर, केन्द्रमा क्रस (+) खोपिएको।',
    usageNp: 'जिल्लास्तरका नापी, सडक आयोजना, जलविद्युत बाँध र ठूला सिँचाइ नहर निर्माणको सर्भे बेस।',
    howToRequest: 'सम्बन्धित जिल्लाको नापी कार्यालय वा नापी विभागको आधिकारिक पोर्टलबाट कोर्डिनेट प्राप्त गर्न सकिन्छ।'
  },
  {
    orderNameNp: 'नापी बेन्चमार्क (Leveling Benchmark - BM)',
    orderNameEn: 'Geodetic Leveling Benchmark (BM)',
    accuracy: 'उचाइ परिशुद्धता (Elevation Accuracy) ±१ मिलिमिटर',
    pillarDesign: 'राजमार्ग वा स्थायी सरकारी भवनको पर्खालमा जडान गरिएको काँसको गोलो चक्का (Bronze Plate/Plug)।',
    usageNp: 'समुद्र सतहदेखिको वास्तविक उचाइ (MSL - Mean Sea Level) नाप्न प्रयोग गरिन्छ। बाढी मापन र ढल निकासमा अनिवार्य।',
    howToRequest: 'नापी विभागको लेभलिङ शाखाबाट आधिकारिक बेन्चमार्क लगत (BM Data Sheet) लिन सकिन्छ।'
  },
  {
    orderNameNp: 'नेपाल कन्टिन्युअस जीपीएस स्टेसन (CORS Nepal Network)',
    orderNameEn: 'CORS (Continuous Operating Reference Stations)',
    accuracy: 'रियल-टाइम RTK सर्भे (±१ सेन्टिमिटर शुद्धता)',
    pillarDesign: '२४ सै घण्टा सञ्चालन हुने स्याटेलाइट एन्टेना र सौर्य ऊर्जा जडित टावर।',
    usageNp: 'आधुनिक नापी इन्जिनियरहरूले Total Station र DGPS लिएर फिल्डमा जाँदा सिधै इन्टरनेटबाट RTK कोर्डिनेट करेक्सन पाउन।',
    howToRequest: 'नापी विभागको CORS सर्भर लगइन एकाउन्ट दर्ता गरी RTK NTRIP स्ट्रिम प्राप्त गर्न सकिन्छ।'
  }
];

export const CADASTRAL_SYMBOLS_FAQS = [
  {
    qNp: 'मेरोकित्ताबाट डाउनलोड गरेको कित्ता नक्सा (ट्रेस) मा घरको संकेत छ तर फिल्डमा घर छैन भने के गर्ने?',
    aNp: 'नापी हुँदाको समयमा घर भएको तर पछि भत्काइएको हुनसक्छ। मालपोतमा जग्गा पास गर्दा पुरानो घरको अनावश्यक कर नलागोस् भन्नका लागि सम्बन्धित वडा कार्यालयबाट "घर नरहेको / खाली जग्गा" को स्थलगत सर्जमिन मुचुल्का र सिफारिस बनाएर पेश गर्नुपर्छ।'
  },
  {
    qNp: 'नक्सामा गोरेटो बाटो (Dashed Line) छ तर छिमेकीले आफ्नो पर्खाल लगाएर बाटो बन्द गर्न पाउँछ?',
    aNp: 'पाउँदैन। मुलुकी देवानी संहिता २०७४ अनुसार परापूर्व कालदेखि चलेको गोरेटो, घोडेटो वा सार्वजनिक निकास कसैले पनि अवरोध गर्न पाउँदैन। यदि छिमेकीले अवरोध गरेमा स्थानीय तहको न्यायिक समिति वा सम्बन्धित अदालतमा परापूर्व बाटो खुलाउन उजुरी दिन सकिन्छ।'
  },
  {
    qNp: 'नक्साको १:५०० स्केलमा १ सेन्टिमिटरले जमिनमा कति मिटर जनाउँछ?',
    aNp: '१:५०० स्केलको नक्सामा नक्साको १ सेन्टिमिटर (१० मिलिमिटर) ले जमिनमा ठीक ५ मिटर (१६.४ फिट) जनाउँछ। यदि नक्सामा तपाईंको जग्गाको चौडाइ २ सेन्टिमिटर नापियो भने वास्तविक जमिनमा १० मिटर (३२.८ फिट) हुन्छ।'
  },
  {
    qNp: 'नक्सामा हाइ-टेन्सन बिजुलीको लाइन देखिएको जग्गा किन्दा के समस्या हुन्छ?',
    aNp: 'हाइ-टेन्सन लाइन (६६kV, १३२kV, २२०kV) मुनि र त्यसको राइट अफ वे (दुवैतर्फ ९ देखि १५ मिटर) भित्र कुनै पनि पक्की घर, भवन वा पर्खाल बनाउन नगरपालिकाले नक्सा पास गर्दैन। साथै कुनै पनि वाणिज्य बैंकले यस्तो जग्गा धितो राखेर ऋण प्रवाह गर्दैनन्।'
  },
  {
    qNp: 'नापी नक्सामा भएको कित्ता सिमाना र फिल्डको सिमाना फरक पर्यो भने कुन आधिकारिक मानिन्छ?',
    aNp: 'कानुनतः नापी विभागको प्रमाणित सिट नक्सा र फिल्डबुकको विवरण नै अन्तिम आधिकारिक प्रमाण मानिन्छ। यदि फिल्डमा साँध बिग्रिएको छ भने नापी कार्यालयमा "सिमाना यकिन / साँध छुट्याउने निवेदन" दिएर सरकारी अमिनमार्फत नक्सा अनुसार पुनः किला गाड्न लगाउनुपर्छ।'
  }
];
