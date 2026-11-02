export interface SaaitItem {
  id: string;
  yearBs: number;
  monthBs: string;
  dateBs: string;
  dayOfWeek: string;
  dateAd: string;
  category: 'registry' | 'foundation' | 'casting' | 'grihaprabesh';
  categoryTitle: string;
  tithi: string;
  nakshatra: string;
  muhuratTime: string;
  description: string;
}

export const SHUBH_SAAIT_DATA: SaaitItem[] = [
  // Registry Pass Saait 2081/2082
  {
    id: 'reg-81-01',
    yearBs: 2081,
    monthBs: 'मंसिर',
    dateBs: '२०८१ मंसिर ६ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Nov 21, 2024',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'पञ्चमी तिथि',
    nakshatra: 'पुष्य नक्षत्र',
    muhuratTime: 'बिहान १०:१५ देखि दिउँसो १:३० सम्म (अमृत बेला)',
    description: 'मालपोत कार्यालयमा जग्गा रजिष्ट्रेसन पास, राजीनामा लिखत तथा सम्पत्ति नामसारीका लागि उत्तम शुभ योग।'
  },
  {
    id: 'reg-81-02',
    yearBs: 2081,
    monthBs: 'मंसिर',
    dateBs: '२०८१ मंसिर १२ गते',
    dayOfWeek: 'बुधबार',
    dateAd: 'Nov 27, 2024',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'एकादशी तिथि',
    nakshatra: 'हस्त नक्षत्र',
    muhuratTime: 'बिहान ११:०० देखि दिउँसो २:१५ सम्म (शुभ बेला)',
    description: 'अचल सम्पत्ति खरिद तथा बैनापट्टा अनुमोदनका लागि सर्वार्थसिद्धि योग।'
  },
  {
    id: 'reg-81-03',
    yearBs: 2081,
    monthBs: 'मंसिर',
    dateBs: '२०८१ मंसिर २० गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Dec 05, 2024',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'तृतीया तिथि',
    nakshatra: 'उत्तराषाढा नक्षत्र',
    muhuratTime: 'दिउँसो १२:०० देखि ३:०० सम्म (लाभ बेला)',
    description: 'व्यावसायिक भवन तथा जग्गा खरिदबिक्री सम्झौताका लागि शुभ समय।'
  },
  {
    id: 'reg-81-04',
    yearBs: 2081,
    monthBs: 'माघ',
    dateBs: '२०८१ माघ १० गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Jan 23, 2025',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'दशमी तिथि',
    nakshatra: 'रोहिणी नक्षत्र',
    muhuratTime: 'बिहान १०:४५ देखि दिउँसो १:१५ सम्म',
    description: 'उत्तरायण सूर्य प्रवेशपछिको पहिलो श्रेष्ठ जग्गा रजिष्ट्रेसन लगन।'
  },
  {
    id: 'reg-81-05',
    yearBs: 2081,
    monthBs: 'माघ',
    dateBs: '२०८१ माघ २४ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Feb 06, 2025',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'अष्टमी तिथि',
    nakshatra: 'मृगशिरा नक्षत्र',
    muhuratTime: 'बिहान ११:३० देखि दिउँसो २:०० सम्म',
    description: 'पारिवारिक सम्पत्ति अंशबन्डा तथा राजिनामा पासका लागि उत्तम।'
  },
  {
    id: 'reg-81-06',
    yearBs: 2081,
    monthBs: 'फागुन',
    dateBs: '२०८१ फागुन ८ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Feb 20, 2025',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'सप्तमी तिथि',
    nakshatra: 'अनुराधा नक्षत्र',
    muhuratTime: 'बिहान १०:३० देखि दिउँसो १:४५ सम्म',
    description: 'वसन्त ऋतुको जग्गा खरिदबिक्री तथा बैंक रोक्का-फुकुवाको शुभ लगन।'
  },
  {
    id: 'reg-81-07',
    yearBs: 2081,
    monthBs: 'फागुन',
    dateBs: '२०८१ फागुन २२ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Mar 06, 2025',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'द्वादशी तिथि',
    nakshatra: 'श्रवण नक्षत्र',
    muhuratTime: 'दिउँसो १२:१५ देखि ३:३० सम्म',
    description: 'जग्गा पास तथा दृष्टिबन्धक लिखत पारित गर्न उपयुक्त समय।'
  },

  // Jag Puja / Foundation Saait
  {
    id: 'fnd-81-01',
    yearBs: 2081,
    monthBs: 'मंसिर',
    dateBs: '२०८१ मंसिर १२ गते',
    dayOfWeek: 'बुधबार',
    dateAd: 'Nov 27, 2024',
    category: 'foundation',
    categoryTitle: 'घरको जग पूजा / शिलान्यास',
    tithi: 'एकादशी तिथि',
    nakshatra: 'हस्त नक्षत्र',
    muhuratTime: 'बिहान ८:१५ देखि १०:३० सम्म (अमृत बेला)',
    description: 'नयाँ घर निर्माण सुरु गर्न भूमि पूजन, नाग प्रतिष्ठा र पहिलो इँटा/ढुङ्गा राख्ने सर्वोत्तम साइत।'
  },
  {
    id: 'fnd-81-02',
    yearBs: 2081,
    monthBs: 'माघ',
    dateBs: '२०८१ माघ १० गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Jan 23, 2025',
    category: 'foundation',
    categoryTitle: 'घरको जग पूजा / शिलान्यास',
    tithi: 'दशमी तिथि',
    nakshatra: 'रोहिणी नक्षत्र',
    muhuratTime: 'बिहान ९:०० देखि ११:१५ सम्म',
    description: 'स्थिर लग्न (वृष लग्न) मा शिलान्यास गर्दा घर दीर्घायु र धनधान्यले भरिपूर्ण हुने शास्त्रवचन।'
  },
  {
    id: 'fnd-81-03',
    yearBs: 2081,
    monthBs: 'फागुन',
    dateBs: '२०८१ फागुन ८ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Feb 20, 2025',
    category: 'foundation',
    categoryTitle: 'घरको जग पूजा / शिलान्यास',
    tithi: 'सप्तमी तिथि',
    nakshatra: 'अनुराधा नक्षत्र',
    muhuratTime: 'बिहान ८:४५ देखि ११:०० सम्म',
    description: 'वास्तु पुरुषको मुख ईशान कोणमा रहने बेला जग खन्ने र शिलान्यास गर्ने उत्तम साइत।'
  },
  {
    id: 'fnd-81-04',
    yearBs: 2081,
    monthBs: 'फागुन',
    dateBs: '२०८१ फागुन २८ गते',
    dayOfWeek: 'बुधबार',
    dateAd: 'Mar 12, 2025',
    category: 'foundation',
    categoryTitle: 'घरको जग पूजा / शिलान्यास',
    tithi: 'चतुर्दशी तिथि',
    nakshatra: 'मघा नक्षत्र',
    muhuratTime: 'बिहान ९:३० देखि ११:४५ सम्म',
    description: 'व्यावसायिक भवन तथा आवासीय अपार्टमेन्टको जग शिलान्यासका लागि उपयुक्त।'
  },

  // Roof Casting / Dhalan Saait
  {
    id: 'cst-81-01',
    yearBs: 2081,
    monthBs: 'मंसिर',
    dateBs: '२०८१ मंसिर १९ गते',
    dayOfWeek: 'बुधबार',
    dateAd: 'Dec 04, 2024',
    category: 'casting',
    categoryTitle: 'छाना तथा छत ढलान',
    tithi: 'द्वितीया तिथि',
    nakshatra: 'मूल नक्षत्र',
    muhuratTime: 'बिहान ७:३० देखि दिउँसो १:०० सम्म',
    description: 'आरसीसी छत ढलान (Slab Casting) सुरु गर्न पञ्चक दोषरहित शुभ योग।'
  },
  {
    id: 'cst-81-02',
    yearBs: 2081,
    monthBs: 'माघ',
    dateBs: '२०८१ माघ १७ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Jan 30, 2025',
    category: 'casting',
    categoryTitle: 'छाना तथा छत ढलान',
    tithi: 'प्रतिपदा तिथि',
    nakshatra: 'धनिष्ठा नक्षत्र',
    muhuratTime: 'बिहान ८:०० देखि दिउँसो २:०० सम्म',
    description: 'पिलर तथा पहिलो/दोस्रो तल्लाको छत ढलान कार्य प्रारम्भ गर्न उपयुक्त।'
  },
  {
    id: 'cst-81-03',
    yearBs: 2081,
    monthBs: 'फागुन',
    dateBs: '२०८१ फागुन १५ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Feb 27, 2025',
    category: 'casting',
    categoryTitle: 'छाना तथा छत ढलान',
    tithi: 'अमावस्या उप्रान्त',
    nakshatra: 'शतभिषा नक्षत्र',
    muhuratTime: 'बिहान ७:०० देखि दिउँसो १२:३० सम्म',
    description: 'अन्तिम तल्लाको छत ढलान तथा वाटरप्रुफिङ कार्यका लागि अनुकूल साइत।'
  },

  // Griha Prabesh / Housewarming Saait
  {
    id: 'grp-81-01',
    yearBs: 2081,
    monthBs: 'मंसिर',
    dateBs: '२०८१ मंसिर १२ गते',
    dayOfWeek: 'बुधबार',
    dateAd: 'Nov 27, 2024',
    category: 'grihaprabesh',
    categoryTitle: 'नयाँ घर गृहप्रवेश',
    tithi: 'एकादशी तिथि',
    nakshatra: 'हस्त नक्षत्र',
    muhuratTime: 'बिहान १०:१५ देखि दिउँसो १२:४५ सम्म (शुभ कुम्भ लग्न)',
    description: 'नवनिर्मित घरमा वास्तु पूजा, कलश यात्रा र गृहप्रवेशका लागि वर्षकै उत्कृष्ट साइत।'
  },
  {
    id: 'grp-81-02',
    yearBs: 2081,
    monthBs: 'माघ',
    dateBs: '२०८१ माघ १० गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Jan 23, 2025',
    category: 'grihaprabesh',
    categoryTitle: 'नयाँ घर गृहप्रवेश',
    tithi: 'दशमी तिथि',
    nakshatra: 'रोहिणी नक्षत्र',
    muhuratTime: 'बिहान ९:४५ देखि दिउँसो १:०० सम्म',
    description: 'नयाँ घरमा कुल देवता स्थापना, वास्तु होम तथा परिवारसहित पहिलो प्रवेशका लागि उत्तम।'
  },
  {
    id: 'grp-81-03',
    yearBs: 2081,
    monthBs: 'माघ',
    dateBs: '२०८१ माघ २४ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Feb 06, 2025',
    category: 'grihaprabesh',
    categoryTitle: 'नयाँ घर गृहप्रवेश',
    tithi: 'अष्टमी तिथि',
    nakshatra: 'मृगशिरा नक्षत्र',
    muhuratTime: 'बिहान १०:३० देखि दिउँसो १२:३० सम्म',
    description: 'नयाँ आवासमा दूध उमाल्ने, गणेश पूजा गर्ने र बसोबास थाल्ने शुभ समय।'
  },
  {
    id: 'grp-81-04',
    yearBs: 2081,
    monthBs: 'फागुन',
    dateBs: '२०८१ फागुन ८ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Feb 20, 2025',
    category: 'grihaprabesh',
    categoryTitle: 'नयाँ घर गृहप्रवेश',
    tithi: 'सप्तमी तिथि',
    nakshatra: 'अनुराधा नक्षत्र',
    muhuratTime: 'बिहान ९:१५ देखि दिउँसो १२:०० सम्म',
    description: 'अपूर्व गृहप्रवेश (नयाँ बनेको घरमा पहिलोपटक प्रवेश) का लागि शुभ लगन।'
  },

  // 2082 Major Dates
  {
    id: 'reg-82-01',
    yearBs: 2082,
    monthBs: 'वैशाख',
    dateBs: '२०८२ वैशाख ११ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Apr 24, 2025',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'एकादशी तिथि',
    nakshatra: 'उत्तराफाल्गुनी नक्षत्र',
    muhuratTime: 'बिहान १०:३० देखि दिउँसो २:०० सम्म',
    description: 'नयाँ वर्ष २०८२ को पहिलो वैशाख महिनाको श्रेष्ठ जग्गा खरिदबिक्री साइत।'
  },
  {
    id: 'fnd-82-01',
    yearBs: 2082,
    monthBs: 'वैशाख',
    dateBs: '२०८२ वैशाख १८ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'May 01, 2025',
    category: 'foundation',
    categoryTitle: 'घरको जग पूजा / शिलान्यास',
    tithi: 'पञ्चमी तिथि',
    nakshatra: 'पुनर्वसु नक्षत्र',
    muhuratTime: 'बिहान ८:३० देखि १०:४५ सम्म',
    description: '२०८२ सालमा नयाँ घर निर्माण सुरु गर्न जग पूजा र शिलान्यासको शुभ दिन।'
  },
  {
    id: 'grp-82-01',
    yearBs: 2082,
    monthBs: 'वैशाख',
    dateBs: '२०८२ वैशाख २५ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'May 08, 2025',
    category: 'grihaprabesh',
    categoryTitle: 'नयाँ घर गृहप्रवेश',
    tithi: 'द्वादशी तिथि',
    nakshatra: 'हस्त नक्षत्र',
    muhuratTime: 'बिहान ९:३० देखि दिउँसो १२:१५ सम्म',
    description: '२०८२ वैशाख महिनाको पहिलो भव्य गृहप्रवेश तथा वास्तु शान्ति साइत।'
  },
  {
    id: 'reg-82-02',
    yearBs: 2082,
    monthBs: 'जेठ',
    dateBs: '२०८२ जेठ ८ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'May 22, 2025',
    category: 'registry',
    categoryTitle: 'जग्गा रजिष्ट्रेसन पास',
    tithi: 'दशमी तिथि',
    nakshatra: 'चित्रा नक्षत्र',
    muhuratTime: 'बिहान ११:०० देखि दिउँसो २:३० सम्म',
    description: 'आर्थिक वर्ष २०८१/८२ को अन्त्य नजिकिँदा जग्गा रजिस्ट्रेसन पास गर्ने शुभ समय।'
  },
  {
    id: 'fnd-82-02',
    yearBs: 2082,
    monthBs: 'जेठ',
    dateBs: '२०८२ जेठ १५ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'May 29, 2025',
    category: 'foundation',
    categoryTitle: 'घरको जग पूजा / शिलान्यास',
    tithi: 'तृतीया तिथि',
    nakshatra: 'पुष्य नक्षत्र',
    muhuratTime: 'बिहान ८:०० देखि १०:१५ सम्म',
    description: 'वर्षायाम सुरु हुनु अगावै जग र डीपीसी सम्पन्न गर्न शिलान्यासको उत्तम साइत।'
  },
  {
    id: 'grp-82-02',
    yearBs: 2082,
    monthBs: 'असार',
    dateBs: '२०८२ असार ५ गते',
    dayOfWeek: 'बिहीबार',
    dateAd: 'Jun 19, 2025',
    category: 'grihaprabesh',
    categoryTitle: 'नयाँ घर गृहप्रवेश',
    tithi: 'नवमी तिथि',
    nakshatra: 'रेवती नक्षत्र',
    muhuratTime: 'बिहान १०:०० देखि दिउँसो १२:३० सम्म',
    description: 'चातुर्मास (हरिशयनी एकादशी) सुरु हुनु अगावै नयाँ घर सर्ने अन्तिम शुभ साइत।'
  }
];

export const VASTU_RULES_GUIDE = [
  {
    title: '१. घरजग्गा पास गर्दा बार्नुपर्ने समय (राहुकाल र भद्रा)',
    content: 'कुनै पनि दिन मालपोतमा सहिछाप गर्दा राहुकाल (दिनको करिब १.५ घण्टा) र भद्रा परेको समय बार्नुपर्छ। आइतबार साँझ ४:३०-६:००, सोमबार बिहान ७:३०-९:००, मंगलबार दिउँसो ३:००-४:३०, बुधबार दिउँसो १२:००-१:३०, बिहीबार दिउँसो १:३०-३:००, शुक्रबार बिहान १०:३०-१२:०० र शनिबार बिहान ९:००-१०:३० राहुकाल रहने गर्छ।'
  },
  {
    title: '२. घरको जग खन्ने दिशानिर्देश (वास्तु पुरुष विचार)',
    content: 'वास्तु शास्त्र अनुसार जग खन्दा सधैं उत्तर-पूर्व (ईशान कोण) बाट सुरु गरी दक्षिण-पश्चिम (नैऋत्य कोण) तर्फ जानुपर्छ। यसो गर्दा घरमा सुख, शान्ति र समृद्धि छाउने विश्वास छ।'
  },
  {
    title: '३. छाना ढलान गर्दा पञ्चक विचार',
    content: 'धनिष्ठाको उत्तरार्ध, शतभिषा, पूर्वाभाद्रपदा, उत्तराभाद्रपदा र रेवती नक्षत्रलाई पञ्चक भनिन्छ। पञ्चक परेको समयमा घरको काठको काम वा छाना हाल्ने काम गर्दा दुर्घटनाको भय रहने मानिन्छ, त्यसैले पञ्चक बाहिर ढलान गर्नु श्रेयस्कर हुन्छ।'
  },
  {
    title: '४. गृहप्रवेशका ३ प्रकार र पूजा विधि',
    content: '१) अपूर्व गृहप्रवेश: नयाँ बनेको घरमा पहिलोपटक प्रवेश गर्दा। २) सपूर्व गृहप्रवेश: पुराना घरमा पुनर्निर्माण वा लामो समयपछि प्रवेश गर्दा। ३) द्वन्द्व गृहप्रवेश: विपत्ति वा प्रवासबाट फर्केपछि। गृहप्रवेश गर्दा वास्तु पूजा, कुलदेवता पूजा र गाई तथा दूध उमाल्ने विधि अनिवार्य मानिन्छ।'
  }
];
