// DOLRM (भूमिसुधार तथा मालपोत विभाग) Official LRIMS Services & Regulations Data
// Source: dolrm.gov.np, Land Revenue Act 2034, LRIMS Operational Directives, Nepal Lekhapadi Byawasayi Sangh

export interface LrimsStep {
  stepNumber: number;
  titleNp: string;
  titleEn: string;
  descriptionNp: string;
  portalActionUrl?: string;
  requiredDocs: string[];
  tipsNp: string;
}

export interface LekhapadiFeeItem {
  id: string;
  deedTypeNp: string;
  deedTypeEn: string;
  officialGovRate: string;
  marketRateAvg: string;
  descriptionNp: string;
  stampDutyRule: string;
}

export interface ValuationDistrictItem {
  districtNameNp: string;
  districtNameEn: string;
  provinceNp: string;
  malpotOfficesCount: number;
  committeeChair: string;
  sourceUrl: string;
}

export const LRIMS_ONLINE_STEPS: LrimsStep[] = [
  {
    stepNumber: 1,
    titleNp: 'सिटिजन पोर्टलमा मोबाइल नम्बर दर्ता र OTP लगइन',
    titleEn: 'Register Mobile Number & OTP Verification',
    descriptionNp: 'आधिकारिक पोर्टल (lrims.dolrm.gov.np) मा गएर आफ्नो मोबाइल नम्बर हाल्नुहोस् र SMS मा आएको ६ अङ्कको OTP कोड प्रविष्ट गरी व्यक्तिगत खाता बनाउनुहोस्।',
    portalActionUrl: 'https://lrims.dolrm.gov.np',
    requiredDocs: ['सक्रिय नेपाली मोबाइल नम्बर (NTC/Ncell)', 'नागरिकता नम्बर र जारी जिल्ला'],
    tipsNp: 'जग्गाधनीकै नाममा दर्ता भएको सिमकार्ड प्रयोग गर्दा भविष्यमा रोक्का, फुकुवा र नामसारीको SMS अलर्ट स्वतः प्राप्त हुन्छ।'
  },
  {
    stepNumber: 2,
    titleNp: 'जिल्ला र सम्बन्धित मालपोत कार्यालय छनोट',
    titleEn: 'Select District & Respective Land Revenue Office',
    descriptionNp: 'जग्गा रहेको जिल्ला, सम्बन्धित मालपोत कार्यालय (जस्तै: डिल्लीबजार, कलंकी, चाबहिल, भक्तपुर, ललितपुर, पोखरा, चितवन) र फाँट छान्नुहोस्।',
    portalActionUrl: 'https://lrims.dolrm.gov.np',
    requiredDocs: ['जग्गाधनी प्रमाणपुर्जा (लालपुर्जा) को सिट नम्बर र कित्ता नम्बर'],
    tipsNp: 'आफ्नो कित्ता कुन मालपोत कार्यालयको कार्यक्षेत्रभित्र पर्छ थाहा नभए हाम्रो "७७ जिल्ला नापी तथा मालपोत निर्देशिका" बाट हेर्नुहोस्।'
  },
  {
    stepNumber: 3,
    titleNp: 'कारोबारको प्रकार तथा अनलाइन विवरण प्रविष्टि (Entry)',
    titleEn: 'Enter Transaction Details & Upload Docs',
    descriptionNp: 'राजीनामा (बिक्री), बकसपत्र, अंशबन्डा, वा दृष्टिबन्धक (बैंक धितो) मध्ये कारोबार छानेर जग्गाधनी, क्रेता, साक्षी र जग्गाको कित्ता विवरण इन्ट्री गर्नुहोस्।',
    portalActionUrl: 'https://lrims.dolrm.gov.np',
    requiredDocs: [
      'क्रेता र बिक्रेताको सक्कल नागरिकता प्रतिलिपि',
      'वडा कार्यालयको घरबाटो तथा चालु आ.व. को सम्पत्ति कर चुक्ता रसिद',
      'विवाहित भए नाता प्रमाणित (विवाह दर्ता वा सम्बन्धित प्रमाण)'
    ],
    tipsNp: 'सबै विवरण पहिले नै अनलाइन भरिएमा मालपोत कार्यालयमा कम्प्युटर इन्ट्री फाँटमा घण्टौँ लाइन बस्नुपर्दैन।'
  },
  {
    stepNumber: 4,
    titleNp: 'अनलाइन टोकन र बारकोड प्रिन्ट (Token Booking)',
    titleEn: 'Generate Online Barcode Token & Appointment',
    descriptionNp: 'कारोबार सुरक्षित रूपमा सबमिट भएपछि प्रणालीले विशिष्ट टोकन नम्बर (Token ID) र बारकोड भएको पीडीएफ स्लिप दिन्छ। यसलाई प्रिन्ट वा मोबाइलमा सेभ गर्नुहोस्।',
    portalActionUrl: 'https://lrims.dolrm.gov.np',
    requiredDocs: ['टोकन प्रिन्ट स्लिप (Barcode Token Slip)'],
    tipsNp: 'तोकिएको समयभन्दा १५ मिनेट अगावै मालपोत कार्यालय पुग्नुहोस् र हेल्पडेस्कमा सिधै टोकन स्क्यान गराउनुहोस्।'
  }
];

export const ROKKA_PHUKUWA_GUIDE = {
  titleNp: 'जग्गा रोक्का तथा फुकुवा अनलाइन जाँच र कार्यविधि',
  descriptionNp: 'नेपाल राष्ट्र बैंक र भूमिसुधार तथा मालपोत विभागबीचको एकीकृत API प्रणाली मार्फत बैंक तथा वित्तीय संस्थाहरूले अनलाइनबाटै रोक्का र फुकुवा गर्दछन्।',
  howToCheckOnline: [
    'LRIMS पोर्टल (lrims.dolrm.gov.np) मा लगइन गरी "मेरो सम्पत्ति विवरण" (My Land Assets) मा जानुहोस्।',
    'आफ्नो नागरिकता र लालपुर्जाको कित्ता नम्बर प्रविष्ट गर्दा जग्गाको स्थिति "रोक्का (Frozen)" वा "फुकुवा (Released)" स्पष्ट देखिन्छ।',
    'यदि वाणिज्य बैंकमा कर्जा चुक्ता भइसकेको छ भने सम्बन्धित बैंकको कर्जा शाखाबाट "फुकुवा पत्र" (Release Clearance Letter) मालपोतलाई सम्बोधन गरी अनलाइन सिस्टममा अपलोड गराउनुपर्छ।'
  ],
  bankRokkaSteps: [
    { titleNp: 'ऋण स्वीकृति (Loan Sanction)', descNp: 'बैंकले जग्गाको धितो मूल्याङ्कन (Valuation) पास गरी कर्जा स्वीकृत गर्दछ।' },
    { titleNp: 'अनलाइन रोक्का अनुरोध (LRIMS Bank Portal)', descNp: 'बैंकका आधिकारिक प्रतिनिधिले LRIMS बैंकिङ लगइनबाट कित्ता रोक्का अनुरोध पठाउँछन्।' },
    { titleNp: 'मालपोत रोक्का फाँट प्रमाणीकरण', descNp: 'मालपोत कार्यालयका अधिकृतले हस्ताक्षर गरी लालपुर्जाको रोक्का दर्ता किताब र डिजिटल डाटाबेसमा रोक्का जनाउँछन्।' },
    { titleNp: 'फुकुवा (Debt Paid Off)', descNp: 'कर्जा चुक्ता भएपछि बैंकले फुकुवा पत्र जारी गर्दछ र मालपोतमा पेश गरी ३० मिनेटभित्र फुकुवा हुन्छ।' }
  ],
  requiredDocsPhukuwa: [
    'बैंक तथा वित्तीय संस्थाको आधिकारिक छाप र दस्तखत भएको फुकुवा पत्र (सक्कल)',
    'ऋणीको नागरिकताको प्रतिलिपि',
    'सक्कल लालपुर्जा',
    'मालपोत कार्यालयमा दिइने फुकुवा निवेदन (हाम्रो लिगल टेम्प्लेटबाट १-क्लिक डाउनलोड)'
  ]
};

export const LEKHAPADI_FEE_STANDARDS: LekhapadiFeeItem[] = [
  {
    id: 'rajinama-deed',
    deedTypeNp: 'घरजग्गा राजीनामा लिखत (Sale Deed)',
    deedTypeEn: 'Deed of Absolute Sale (Rajinama)',
    officialGovRate: 'रु. १,००० देखि रु. २,५०० (मूल्याङ्कन अनुसार)',
    marketRateAvg: 'रु. ३,००० देखि रु. ५,०००',
    descriptionNp: 'जग्गा खरिदबिक्री गर्दा क्रेता र बिक्रेताबीच तयार गरिने कानुनी लिखत। चारकिल्ला, कित्ता, क्षेत्रफल र थैली अंक स्पष्ट खुलाउनुपर्छ।',
    stampDutyRule: 'सरकारी स्टाम्प तथा रजिस्ट्रेसन शुल्क मालपोतको राजस्व खातामा मात्र बुझाउनुपर्छ, लेखापढीलाई अतिरिक्त दस्तुर तिर्नु पर्दैन।'
  },
  {
    id: 'bakaspatra-deed',
    deedTypeNp: 'बकसपत्र लिखत (Gift / Deed of Donation)',
    deedTypeEn: 'Gift Deed / Halikobakas',
    officialGovRate: 'रु. १,००० देखि रु. २,०००',
    marketRateAvg: 'रु. २,५०० देखि रु. ४,०००',
    descriptionNp: 'नाताभित्र माया-ममता वा दानस्वरूप गरिने हालैको बकसपत्र वा शेषपछिको बकसपत्र लिखत।',
    stampDutyRule: 'नजिकको नाता (बाबु-छोरा, पति-पत्नी) मा रजिस्ट्रेसन दस्तुरमा उच्च सरकारी छुट (०.५% देखि १%) पाइन्छ।'
  },
  {
    id: 'anshabanda-deed',
    deedTypeNp: 'पारिवारिक अंशबन्डा लिखत (Partition Deed)',
    deedTypeEn: 'Family Partition Deed (Anshabanda)',
    officialGovRate: 'रु. १,५०० देखि रु. ३,५००',
    marketRateAvg: 'रु. ४,००० देखि रु. ८,००० (अंशियार संख्या अनुसार)',
    descriptionNp: 'अंशियारहरू बीच बराबर भाग लगाई तयार गरिने पूर्ण कानुनी अंशबन्डा लिखत र नक्सा कित्ताकाट स्केच।',
    stampDutyRule: 'सबै अंशियारको अनिवार्य सक्कल नागरिकता र एकाघरका साक्षीहरूको औँठाछाप आवश्यक पर्छ।'
  },
  {
    id: 'dristibandhak-deed',
    deedTypeNp: 'दृष्टिबन्धक / बैंक धितो लिखत (Mortgage Deed)',
    deedTypeEn: 'Mortgage Deed (Dristibandhak)',
    officialGovRate: 'रु. ८०० देखि रु. १,५००',
    marketRateAvg: 'रु. २,००० देखि रु. ३,५००',
    descriptionNp: 'बैंक वा व्यक्तिको ऋण सुरक्षाका लागि जग्गा रोक्का राख्न तयार गरिने धितो लिखत।',
    stampDutyRule: 'बैंक कर्जाको हकमा बैंककै लिगल डिपार्टमेन्टले स्वीकृत गरेको ढाँचा अनिवार्य हुन्छ।'
  },
  {
    id: 'namsari-petition',
    deedTypeNp: 'मृत्युपश्चात हकदार नामसारी निवेदन (Namsari Application)',
    deedTypeEn: 'Inheritance Transfer (Namsari)',
    officialGovRate: 'रु. ५०० देखि रु. १,०००',
    marketRateAvg: 'रु. १,५०० देखि रु. २,५००',
    descriptionNp: 'जग्गाधनीको देहावसानपछि जीवित हकवालाहरूको नाममा जग्गा दाखिल खारेज गराउन दिइने आधिकारिक निवेदन।',
    stampDutyRule: 'मृत्यु दर्ता, नाता प्रमाणित र वडा कार्यालयको ३५ दिने हकदाबी सूचना मुचुल्का अनिवार्य हुन्छ।'
  }
];

export const VALUATION_VAULT_INFO = {
  fiscalYear: '२०८१/२०८२',
  authorityNp: 'जिल्ला दररेट निर्धारण समिति (प्रमुख जिल्ला अधिकारी - CDO को अध्यक्षतामा)',
  lawReference: 'मालपोत ऐन २०३४ को दफा ९ र मालपोत नियमावली २०३६',
  effectiveDate: 'प्रत्येक वर्ष साउन १ गतेदेखि नयाँ दररेट लागू हुने',
  provinces: [
    { nameNp: 'कोशी प्रदेश', districtsCount: 14, highlight: 'झापा, मोरङ, सुनसरी, इलाम' },
    { nameNp: 'मधेश प्रदेश', districtsCount: 8, highlight: 'पर्सा, धनुषा, महोत्तरी, सिरहा' },
    { nameNp: 'बागमती प्रदेश', districtsCount: 13, highlight: 'काठमाडौँ, ललितपुर, भक्तपुर, चितवन, काभ्रे' },
    { nameNp: 'गण्डकी प्रदेश', districtsCount: 11, highlight: 'कास्की (पोखरा), तनहुँ, स्याङ्जा, गोरखा' },
    { nameNp: 'लुम्बिनी प्रदेश', districtsCount: 12, highlight: 'रुपन्देही (बुटवल), बाँके, दाङ, पाल्पा' },
    { nameNp: 'कर्णाली प्रदेश', districtsCount: 10, highlight: 'सुर्खेत, दैलेख, जुम्ला, सल्यान' },
    { nameNp: 'सुदूरपश्चिम प्रदेश', districtsCount: 9, highlight: 'कैलाली (धनगढी), कञ्चनपुर, डोटी, बैतडी' }
  ],
  roadCategories: [
    { typeNp: 'पक्की कालोपत्रे मूल सडक (Highway / Main Road)', factor: 'उच्चतम सरकारी मूल्याङ्कन दर' },
    { typeNp: 'सहायक कालोपत्रे / नगर सडक (Feeder / Secondary Road)', factor: 'मध्यम-उच्च दर' },
    { typeNp: 'ग्राभेल सडक (Gravel Road)', factor: 'मध्यम दर' },
    { typeNp: 'कच्ची मोटरबाटो (Earthen Track)', factor: 'न्यून-मध्यम दर' },
    { typeNp: 'गोरेटो / बाटो नभएको जग्गा (Footpath / Landlocked)', factor: 'सबैभन्दा न्यूनतम सरकारी दररेट' }
  ]
};

export const LRIMS_FAQS = [
  {
    qNp: 'LRIMS बाट अनलाइन टोकन नलिई मालपोत जाँदा काम हुन्छ कि हुँदैन?',
    aNp: 'काठमाडौँ उपत्यका (डिल्लीबजार, कलंकी, चाबहिल, भक्तपुर, ललितपुर) र देशभरका अधिकांश सहरी मालपोत कार्यालयहरूमा अनलाइन टोकन अनिवार्य गरिएको छ। बिना टोकन जाँदा कम्प्युटर फाँटमा टोकन लिएका सेवाग्राहीले प्राथमिकता पाउने हुँदा लामो लाइन बस्नुपर्छ वा काम नहुन सक्छ।'
  },
  {
    qNp: 'मेरो जग्गा बैंकमा रोक्का छ कि फुकुवा भयो, कसरी निश्चित गर्ने?',
    aNp: 'तपाईंले lrims.dolrm.gov.np को सिटिजन पोर्टलमा लगइन गरी आफ्नो लालपुर्जाको कित्ता नम्बर प्रविष्ट गरेर तत्काल स्टाटस हेर्न सक्नुहुन्छ। साथै सम्बन्धित मालपोत कार्यालयको रोक्का फाँटको ढड्डामा पनि फुकुवा पत्र दर्ता भई अधिकृतको दस्तखत भएपछि मात्र जग्गा पूर्ण फुकुवा भएको मानिन्छ।'
  },
  {
    qNp: 'मालपोतमा लेखापढी व्यवसायी (बिचौलिया) ले सरकारी दरभन्दा धेरै शुल्क मागे के गर्ने?',
    aNp: 'नेपाल लेखापढी व्यवसायी संघ र सरकारले निर्धारण गरेको अधिकतम शुल्क सीमाभन्दा बढी रकम तिर्न तपाईं बाध्य हुनुहुन्न। मालपोत कार्यालयको नागरिक वडापत्रमा आधिकारिक शुल्क सूची टाँसिएको हुन्छ। यदि अनावश्यक रकम मागिएमा मालपोत कार्यालय प्रमुख वा हेल्पडेस्कमा सिधै उजुरी गर्न सकिन्छ।'
  },
  {
    qNp: '७७ वटै जिल्लाको न्यूनतम मूल्याङ्कन दररेट किन महत्वपूर्ण हुन्छ?',
    aNp: 'जग्गा खरिदबिक्री गर्दा मालपोत कार्यालयमा बुझाउनुपर्ने रजिस्ट्रेसन दस्तुर (४% देखि ७.५%), पुँजीगत लाभकर (CGT - ५% देखि ७.५%), र बैंकले ऋण प्रवाह गर्दा दिने धितो मूल्याङ्कन यही सरकारी न्यूनतम दररेटभन्दा कममा गर्न पाइँदैन।'
  },
  {
    qNp: 'लेखापढी व्यवसायीको इजाजतपत्र (License) कसरी पाइन्छ?',
    aNp: 'भूमिसुधार तथा मालपोत विभागले समय-समयमा खुलाउने लेखापढी व्यवसायी इजाजतपत्र परीक्षा उत्तीर्ण गर्नुपर्छ। यसका लागि न्यूनतम एसईई / १० कक्षा उत्तीर्ण भएको र मुलुकी देवानी संहिता, मालपोत ऐन २०३४, जग्गा नापजाँच ऐन सम्बन्धी लिखित तथा प्रयोगात्मक परीक्षा दिनुपर्छ।'
  }
];
