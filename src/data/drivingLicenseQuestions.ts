export interface LicenseQuestion {
  id: number;
  question: string;
  category: 'rules' | 'mechanical' | 'safety' | 'signs' | 'pollution';
  categoryNp: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  vehicleType: 'both' | 'car' | 'bike';
}

export const DRIVING_LICENSE_QUESTIONS: LicenseQuestion[] = [
  // १. सवारी ऐन तथा ट्राफिक नियम
  {
    id: 1,
    question: 'सवारी चलाउँदा चालकले अनिवार्य रूपमा साथमा राख्नुपर्ने कागजातहरू के-के हुन्?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'नागरिकता र राहदानी मात्र',
      'सवारी चालक अनुमतिपत्र (लाइसेन्स) र सवारी दर्ता किताब (ब्लुबुक)',
      'बैंक पासबुक र कर चुक्ता प्रमाणपत्र',
      'घरजग्गा लालपुर्जा'
    ],
    correctIndex: 1,
    explanation: 'सवारी तथा यातायात व्यवस्था ऐन २०४९ अनुसार सवारी चलाउँदा सक्कल लाइसेन्स, ब्लुबुक र बिमा प्रमाणपत्र अनिवार्य साथमा हुनुपर्छ।',
    vehicleType: 'both'
  },
  {
    id: 2,
    question: 'जेब्रा क्रसिङमा कसलाई पहिलो प्राथमिकता (Right of Way) दिनुपर्दछ?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'द्रुत गतिमा आइरहेको ठूलो गाडीलाई',
      'बाटो काट्न उभिएका वा काटिरहेका पैदल यात्रुलाई',
      'ट्राफिक प्रहरीलाई',
      'हर्न बजाउने मोटरसाइकललाई'
    ],
    correctIndex: 1,
    explanation: 'जेब्रा क्रसिङमा सडक पार गर्ने पैदल यात्रुको पहिलो कानुनी अधिकार हुन्छ। चालकले गाडी पूर्ण रोकेर पैदल यात्रुलाई बाटो दिनुपर्छ।',
    vehicleType: 'both'
  },
  {
    id: 3,
    question: 'सवारी साधनको गति नियन्त्रण गर्न कुन रेखाले संकेत गर्दछ?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'पहेँलो रङको सिधा रेखा',
      'टुक्रिएको सेतो रेखा',
      'सडकमा बनाइएको स्पीड ब्रेकर (Road Hump / Rumble Strips)',
      'जेब्रा क्रसिङ'
    ],
    correctIndex: 2,
    explanation: 'सडकमा राखिएका रम्बल स्ट्रिप्स वा स्पिड ब्रेकरले चालकलाई सवारीको गति घटाउन सचेत गराउँछन्।',
    vehicleType: 'both'
  },
  {
    id: 4,
    question: 'अगाडिको सवारी साधनलाई ओभरटेक (Over取ke) कुन दिशाबाट गर्नुपर्छ?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'दायाँ तर्फबाट (Right side)',
      'बायाँ तर्फबाट (Left side)',
      'जुनसुकै साइडबाट जहाँ खाली छ',
      'फूटपाथबाट'
    ],
    correctIndex: 0,
    explanation: 'नेपालमा सवारी सधैं अगाडिको गाडीको दायाँ तर्फबाट मात्र ओभरटेक गर्नुपर्ने कानुनी व्यवस्था छ।',
    vehicleType: 'both'
  },
  {
    id: 5,
    question: 'कस्तो अवस्थामा ओभरटेक गर्न सख्त मनाही छ?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'खुला र सिधा राजमार्गमा',
      'घुमाउरो मोड, साँघुरो पुल, उकालो र जेब्रा क्रसिङ नजिक',
      'दिउँसोको समयमा',
      'गाडीको गति २० कि.मि. प्रतिघण्टा हुँदा'
    ],
    correctIndex: 1,
    explanation: 'दृश्यात्मकता नहुने घुमाउरो मोड, साँघुरो पुल, जक्सन तथा जेब्रा क्रसिङमा ओभरटेक गर्दा गम्भीर दुर्घटना हुने सम्भावना हुन्छ।',
    vehicleType: 'both'
  },
  {
    id: 6,
    question: 'सवारी चलाउँदा मोबाइल फोन प्रयोग गरेमा के हुन्छ?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'चालकको ध्यान भङ्ग भई दुर्घटना हुने जोखिम उच्च हुन्छ र कानुनतः दण्डनीय छ',
      'सवारीको पेट्रोल खपत कम हुन्छ',
      'गाडी छिटो गुड्छ',
      'कुनै असर पर्दैन'
    ],
    correctIndex: 0,
    explanation: 'सवारी चलाउँदा मोबाइल प्रयोग गर्नु नेपालको सवारी कानुन अनुसार गैरकानुनी हो र जरिवाना तथा लाइसेन्स प्वाल पार्ने कारबाही हुन सक्छ।',
    vehicleType: 'both'
  },
  {
    id: 7,
    question: 'सवारी चालक अनुमतिपत्र (Driving License) को नवीकरण कति वर्षमा गर्नुपर्छ?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'प्रत्येक २ वर्षमा',
      'प्रत्येक ५ वर्षमा',
      'प्रत्येक १० वर्षमा',
      'नवीकरण गर्नै पर्दैन'
    ],
    correctIndex: 1,
    explanation: 'सवारी तथा यातायात व्यवस्था ऐन अनुसार सामान्य चालक अनुमतिपत्र प्रत्येक ५ वर्षमा नवीकरण गराउनु पर्दछ।',
    vehicleType: 'both'
  },
  {
    id: 8,
    question: 'नेपालमा आपतकालीन सवारी साधन (Emergency Vehicles) भन्नाले के बुझिन्छ?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'निजी लक्जरी कार',
      'एम्बुलेन्स, दमकल (Fire Brigade) र शववाहन',
      'सार्वजनिक माइक्रोबस',
      'निर्माण सामग्री बोक्ने टिपर'
    ],
    correctIndex: 1,
    explanation: 'एम्बुलेन्स, दमकल र शववाहन साइरन बजाएर आउँदा अन्य सबै सवारीले तुरुन्त बाटो छाडिदिनुपर्छ।',
    vehicleType: 'both'
  },
  {
    id: 9,
    question: 'रातो ट्राफिक बत्ती (Red Light) ले के संकेत गर्दछ?',
    category: 'signs',
    categoryNp: 'ट्राफिक संकेत',
    options: [
      'सावधानीपूर्वक अगाडि बढ्नुहोस्',
      'सवारी पूर्ण रूपमा रोक्नुहोस् (Stop)',
      'गति बढाएर छिटो निस्कनुहोस्',
      'हर्न बजाएर बाटो काट्नुहोस्'
    ],
    correctIndex: 1,
    explanation: 'रातो बत्तीले सवारीलाई स्टप लाइन अगाडि नै पूर्ण रूपमा रोक्ने अनिवार्य आदेश दिन्छ।',
    vehicleType: 'both'
  },
  {
    id: 10,
    question: 'पहेँलो ट्राफिक बत्ती (Yellow/Amber Light) बल्दा के गर्नुपर्छ?',
    category: 'signs',
    categoryNp: 'ट्राफिक संकेत',
    options: [
      'सवारी रोक्न तयारी गर्नुहोस् वा रोकिने सुरक्षित ठाउँ नभए सावधानीपूर्वक पास हुनुहोस्',
      'एक्सिलेटर दबाएर छिटो कुदाउनुहोस्',
      'ब्याक गर्नुहोस्',
      'गाडी बन्द गर्नुहोस्'
    ],
    correctIndex: 0,
    explanation: 'पहेँलो बत्तीले रातो बत्ती बल्न लागेको संकेत गर्दछ। स्टप लाइन अगाडि नै रोकिनुपर्छ।',
    vehicleType: 'both'
  },
  {
    id: 11,
    question: 'हरियो ट्राफिक बत्ती (Green Light) ले के संकेत गर्छ?',
    category: 'signs',
    categoryNp: 'ट्राफिक संकेत',
    options: [
      'गाडी रोक्नुहोस्',
      'सवारी अगाडि बढाउनुहोस् (Go)',
      'दायाँ फर्कन मनाही',
      'गाडी पार्किङ गर्नुहोस्'
    ],
    correctIndex: 1,
    explanation: 'हरियो बत्तीले बाटो खुला रहेको र सावधानीपूर्वक अगाडि बढ्न अनुमति दिन्छ।',
    vehicleType: 'both'
  },
  {
    id: 12,
    question: 'गोलाकार ट्राफिक चिन्हहरू (Circular Signs) ले कस्तो संकेत गर्छन्?',
    category: 'signs',
    categoryNp: 'ट्राफिक संकेत',
    options: [
      'अनिवार्य वा निषेधात्मक आदेश (Mandatory / Prohibitory Signs)',
      'चेतावनीमूलक संकेत (Cautionary Signs)',
      'सूचनामूलक संकेत (Informatory Signs)',
      'पर्यटकीय क्षेत्र'
    ],
    correctIndex: 0,
    explanation: 'रातो घेरा भएको गोलाकार चिन्हले निषेध (जस्तै: प्रवेश निषेध, गति सीमा) र निलो पृष्ठभूमिले अनिवार्य आदेश बुझाउँछ।',
    vehicleType: 'both'
  },
  {
    id: 13,
    question: 'त्रिकोणात्मक ट्राफिक चिन्हहरू (Triangular Signs) ले के बुझाउँछन्?',
    category: 'signs',
    categoryNp: 'ट्राफिक संकेत',
    options: [
      'चेतावनीमूलक संकेतहरू (Warning / Cautionary Signs)',
      'पार्किङ स्थल',
      'गति सीमा',
      'सवारी कर काउन्टर'
    ],
    correctIndex: 0,
    explanation: 'रातो किनारा भएको त्रिकोण चिन्हले अगाडिको जोखिम (जस्तै: घुमाउरो मोड, उकालो, स्कुल क्षेत्र) बारे सचेत गराउँछ।',
    vehicleType: 'both'
  },
  {
    id: 14,
    question: 'चौतर्फी ट्राफिक चोक (Roundabout) मा घुम्दा कुन सवारीलाई प्राथमिकता दिनुपर्छ?',
    category: 'rules',
    categoryNp: 'सवारी ऐन तथा नियम',
    options: [
      'चोकभित्र पहिले नै प्रवेश गरिसकेको दायाँ तर्फको सवारीलाई',
      'चोक बाहिरबाट छिटो आउने सवारीलाई',
      'ठूलो ट्रक वा बसलाई',
      'जसले धेरै हर्न बजाउँछ उसलाई'
    ],
    correctIndex: 0,
    explanation: 'राउन्डअबाउटमा दायाँबाट घुमिरहेका सवारीको पहिलो हक हुन्छ, नयाँ प्रवेश गर्नेले रोकेर पालो पर्खनुपर्छ।',
    vehicleType: 'both'
  },
  {
    id: 15,
    question: 'मोटरसाइकल वा स्कुटर चलाउँदा हेल्मेट लगाउनु किन अनिवार्य छ?',
    category: 'safety',
    categoryNp: 'सडक सुरक्षा',
    options: [
      'ट्राफिक प्रहरीको जरिवानाबाट बच्न मात्र',
      'दुर्घटना हुँदा टाउकोमा लाग्ने घातक चोटबाट ज्यान जोगाउन',
      'घाम र धुलोबाट अनुहार बचाउन',
      'कपाल नबिग्रियोस् भनेर'
    ],
    correctIndex: 1,
    explanation: 'हेल्मेटले दुर्घटनाको समयमा ८०% सम्म टाउकोको घातक चोट (Head Injury) रोक्दछ। आइएसओ वा नेपाल गुणस्तर प्रमाणित हेल्मेट लगाउनुपर्छ।',
    vehicleType: 'bike'
  },
  {
    id: 16,
    question: 'कार चलाउँदा सिटबेल्ट (Seat Belt) किन बाँध्नुपर्छ?',
    category: 'safety',
    categoryNp: 'सडक सुरक्षा',
    options: [
      'अचानक ब्रेक लगाउँदा वा ठोक्किँदा चालक र यात्रु अगाडि हुत्तिएर घाइते हुनबाट जोगाउन',
      'आरामसँग बस्नका लागि',
      'गाडीको इन्जिन राम्रो चल्नका लागि',
      'सिटको कभर नफोहोरियोस् भनेर'
    ],
    correctIndex: 0,
    explanation: 'सिटबेल्टले तीव्र गतिको ठोक्काइमा शरीरलाई सिटमा बाँधेर राखी स्टेयरिङ र विन्डसिल्डमा ठोक्किनबाट बचाउँछ।',
    vehicleType: 'car'
  },
  {
    id: 17,
    question: 'मादक पदार्थ सेवन (मदिरा/रक्सी - MaPaSe) गरेर सवारी चलाउन किन पाइँदैन?',
    category: 'safety',
    categoryNp: 'सडक सुरक्षा',
    options: [
      'मापसे गर्दा मस्तिष्कको निर्णय लिने क्षमता, दृष्टि र प्रतिक्रिया समय कमजोर भई दुर्घटना हुन्छ',
      'पेट्रोल धेरै खर्च हुन्छ',
      'गाडी विस्तारै गुड्छ',
      'ट्राफिक जाम हुन्छ'
    ],
    correctIndex: 0,
    explanation: 'मापसे गरी सवारी चलाउनु कानुनतः पूर्ण निषेध छ। यसमा सवारी जफत, जरिवाना, कक्षा र लाइसेन्स रद्दसम्मको कारबाही हुन्छ।',
    vehicleType: 'both'
  },
  {
    id: 18,
    question: 'सवारी साधनको इन्जिन आयल (Engine Oil) को मुख्य काम के हो?',
    category: 'mechanical',
    categoryNp: 'यान्त्रिक ज्ञान',
    options: [
      'इन्जिनका भित्री पाटपुर्जालाई चिल्लो बनाउने, घर्षण कम गर्ने र चिसो राख्ने',
      'गाडीको रङ चम्काउने',
      'हर्न ठूलो बजाउने',
      'ब्याट्री चार्ज गर्ने'
    ],
    correctIndex: 0,
    explanation: 'मोबिल/इन्जिन आयलले धातुका पाटपुर्जाबीच घर्षण घटाउँछ र इन्जिनलाई अत्यधिक तात्न (Overheating) बाट जोगाउँछ।',
    vehicleType: 'both'
  },
  {
    id: 19,
    question: 'सवारी साधनमा ब्रेक आयल (Brake Fluid) कम भएमा के असर पर्छ?',
    category: 'mechanical',
    categoryNp: 'यान्त्रिक ज्ञान',
    options: [
      'गाडीको ब्रेक नलाग्ने वा कमजोर हुने जोखिम हुन्छ',
      'गाडीको गति आफैँ बढ्छ',
      'हेडलाइट बल्दैन',
      'रेडियो बज्दैन'
    ],
    correctIndex: 0,
    explanation: 'हाइड्रोलिक ब्रेक प्रणाली पूर्ण रूपमा ब्रेक आयलको चापमा निर्भर हुन्छ, आयल सकिएमा ब्रेक फेल हुन्छ।',
    vehicleType: 'both'
  },
  {
    id: 20,
    question: 'सवारी साधनबाट कालो धुवाँ आउनुको मुख्य कारण के हो?',
    category: 'pollution',
    categoryNp: 'वातावरण प्रदूषण',
    options: [
      'इन्जिनमा इन्धन (पेट्रोल/डिजेल) पूर्ण रूपमा नबलेर (Incomplete Combustion)',
      'गाडीमा धेरै हावा भरिएर',
      'इन्जिन नयाँ भएर',
      'साइलेन्सर सफा भएर'
    ],
    correctIndex: 0,
    explanation: 'इन्जिनको ट्युनिङ नमिलेमा वा एयर फिल्टर फोहोर भएमा इन्धन अपूर्ण रूपमा दहन भई वातावरणमा विषाक्त कालो धुवाँ निस्कन्छ।',
    vehicleType: 'both'
  },
  {
    id: 21,
    question: 'कुहिरो वा हुस्सु लागेको समयमा सवारी चलाउँदा के बाल्नुपर्छ?',
    category: 'safety',
    categoryNp: 'सडक सुरक्षा',
    options: [
      'फग लाइट (Fog Light) र लो बिम हेडलाइट',
      'हाई बिम हेडलाइट मात्र',
      'गाडीको क्याबिन भित्रको बत्ती',
      'कुनै बत्ती बाल्नु पर्दैन'
    ],
    correctIndex: 0,
    explanation: 'कुहिरोमा हाई-बिम बाल्दा उज्यालो परावर्तन भएर अगाडि केही देखिँदैन। त्यसैले लो-बिम र फग लाइट बाल्नुपर्छ।',
    vehicleType: 'both'
  },
  {
    id: 22,
    question: 'सवारी चलाउँदा अनावश्यक रूपमा हर्न बजाउनु किन हुँदैन?',
    category: 'pollution',
    categoryNp: 'वातावरण प्रदूषण',
    options: [
      'ध्वनि प्रदूषण हुन्छ र अस्पताल, विद्यालय क्षेत्रमा बिरामी तथा विद्यार्थीलाई असर गर्छ',
      'गाडीको ब्याट्री तुरुन्तै सकिन्छ',
      'हर्नको आवाज बिग्रिन्छ',
      'हर्न बजाउँदा जरिवाना तिर्नुपर्दैन'
    ],
    correctIndex: 0,
    explanation: 'काठमाडौँ उपत्यका लगायत नेपालका प्रमुख शहरहरूमा हर्न-निषेधित क्षेत्र (No Horn Zone) लागु गरिएको छ।',
    vehicleType: 'both'
  },
  {
    id: 23,
    question: 'मोटरसाइकलको क्लच (Clutch) को मुख्य कार्य के हो?',
    category: 'mechanical',
    categoryNp: 'यान्त्रिक ज्ञान',
    options: [
      'इन्जिन र गियर बक्सबीचको शक्ति सम्बन्ध जोड्ने र विच्छेद गर्ने',
      'गाडीको गति बढाउने',
      'गाडीलाई तुरुन्तै रोक्ने',
      'इन्धन जोगाउने'
    ],
    correctIndex: 0,
    explanation: 'क्लच थिचेर गियर परिवर्तन गरिन्छ वा इन्जिन नबन्द भई सवारीलाई रोक्न सकिन्छ।',
    vehicleType: 'bike'
  },
  {
    id: 24,
    question: 'सडकको बीचमा कोरिएको निरन्तर पहेंलो रेखा (Solid Yellow Line) ले के जनाउँछ?',
    category: 'signs',
    categoryNp: 'ट्राफिक संकेत',
    options: [
      'उक्त रेखा क्रस गरेर ओभरटेक गर्न वा यु-टर्न गर्न कडा निषेध छ',
      'जुनसुकै बेला ओभरटेक गर्न पाइन्छ',
      'सवारी पार्किङ स्थल हो',
      'पैदल यात्रु हिँड्ने बाटो'
    ],
    correctIndex: 0,
    explanation: 'सडकको निरन्तर सिधा पहेँलो रेखा क्रस गर्नु ट्राफिक नियमको गम्भीर उल्लङ्घन मानिन्छ।',
    vehicleType: 'both'
  },
  {
    id: 25,
    question: 'टायरमा हावाको चाप (Tyre Pressure) ठिक नभएमा के हुन्छ?',
    category: 'mechanical',
    categoryNp: 'यान्त्रिक ज्ञान',
    options: [
      'इन्धन धेरै खपत हुन्छ, टायर चाँडै खिइन्छ र गाडी अनियन्त्रित हुन सक्छ',
      'गाडी उड्छ',
      'इन्जिन नयाँ बन्छ',
      'कुनै असर पर्दैन'
    ],
    correctIndex: 0,
    explanation: 'टायरको सही हावा चापले सवारीलाई सन्तुलित, सुरक्षित र इन्धन किफायती राख्दछ।',
    vehicleType: 'both'
  }
];

// Trial Rules Data
export interface TrialCriteria {
  id: string;
  nameNp: string;
  nameEn: string;
  totalMarks: number;
  passMarks: number;
  rules: {
    description: string;
    penalty: number;
    isDisqualified?: boolean;
  }[];
}

export const TRIAL_RULES_CATEGORY_A: TrialCriteria[] = [
  {
    id: 'eight',
    nameNp: '१. घुमाउरो ८ (Eight Track)',
    nameEn: 'Figure-8 Track',
    totalMarks: 20,
    passMarks: 15,
    rules: [
      { description: 'पहिलो पटक खुट्टा भुइँमा टेकेमा', penalty: 5 },
      { description: 'दोस्रो पटक खुट्टा भुइँमा टेकेमा', penalty: 20, isDisqualified: true },
      { description: '८ को बाहिरी वा भित्री पहेंलो रेखा छोएमा', penalty: 20, isDisqualified: true },
      { description: '८ भित्र सवारी रोकेमा वा बन्द भएमा', penalty: 20, isDisqualified: true }
    ]
  },
  {
    id: 'narrow_plank',
    nameNp: '२. साँघुरो फल्याक (Narrow Plank)',
    nameEn: 'Narrow Plank Balance',
    totalMarks: 10,
    passMarks: 10,
    rules: [
      { description: 'फल्याकबाट चक्का तल झरेमा', penalty: 10, isDisqualified: true },
      { description: 'फल्याकमा खुट्टा टेकेमा', penalty: 10, isDisqualified: true }
    ]
  },
  {
    id: 'traffic_light',
    nameNp: '३. ट्राफिक बत्ती (Traffic Signal)',
    nameEn: 'Traffic Light Test',
    totalMarks: 15,
    passMarks: 0,
    rules: [
      { description: 'रातो बत्ती बल्दा सवारी नरोकी पार गरेमा', penalty: 15 }
    ]
  },
  {
    id: 'speed_breaker',
    nameNp: '४. स्पीड ब्रेकर / बम्प (Speed Breaker)',
    nameEn: 'Speed Breaker Test',
    totalMarks: 15,
    passMarks: 10,
    rules: [
      { description: 'एक पटक खुट्टा भुइँमा टेकेमा', penalty: 5 },
      { description: 'सवारीको इन्जिन बन्द भएमा', penalty: 5 }
    ]
  },
  {
    id: 'ramp_hill',
    nameNp: '५. उकालो तथा ओरालो (Ramp Hill)',
    nameEn: 'Ramp Stop & Start',
    totalMarks: 20,
    passMarks: 20,
    rules: [
      { description: 'उकालोमा तोकिएको रेखा नाघेमा वा नछोएमा', penalty: 20, isDisqualified: true },
      { description: 'उठाउँदा ६ इन्चभन्दा बढी सवारी पछाडि सरेमा', penalty: 20, isDisqualified: true },
      { description: 'इन्जिन एक पटकभन्दा बढी बन्द भएमा', penalty: 20, isDisqualified: true }
    ]
  },
  {
    id: 'behaviors',
    nameNp: '६. व्यवहारगत तथा सुरक्षा जाँच (Safety Check & Turn Signals)',
    nameEn: 'Behavioral & Safety Signs',
    totalMarks: 20,
    passMarks: 10,
    rules: [
      { description: 'मोड्दा साइड इन्डिकेटर लाइट नबालेमा', penalty: 10 },
      { description: 'हेल्मेटको लक राम्रोसँग नलगाएमा', penalty: 5 },
      { description: 'साइड मिरर (Side Mirror) नहेरेमा वा नएडजस्ट गरेमा', penalty: 5 }
    ]
  }
];

// Vehicle Annual Tax Rates (Bagmati Province 2081/2082)
export const VEHICLE_TAX_RATES = {
  motorcycle: [
    { range: '१२५ सीसी (cc) सम्म', annualTax: 3000, insurance: 1550 },
    { range: '१२६ देखि १५० सीसी सम्म', annualTax: 5000, insurance: 1750 },
    { range: '१५१ देखि २२५ सीसी सम्म', annualTax: 6500, insurance: 1950 },
    { range: '२२६ देखि ४०० सीसी सम्म', annualTax: 11000, insurance: 2200 },
    { range: '४०१ सीसीभन्दा माथि', annualTax: 20000, insurance: 2500 }
  ],
  car_jeep: [
    { range: '१००० सीसी सम्म', annualTax: 22000, insurance: 7500 },
    { range: '१००१ देखि १५०० सीसी सम्म', annualTax: 25000, insurance: 8500 },
    { range: '१५०१ देखि २००० सीसी सम्म', annualTax: 31000, insurance: 9500 },
    { range: '२००१ देखि २५०० सीसी सम्म', annualTax: 37000, insurance: 11000 },
    { range: '२५०१ देखि २९०० सीसी सम्म', annualTax: 43000, insurance: 13000 },
    { range: '२९०१ सीसीभन्दा माथि', annualTax: 58000, insurance: 15000 }
  ],
  electric_bike: [
    { range: '३५० वाटदेखि १००० वाटसम्म', annualTax: 1500, insurance: 1500 },
    { range: '१००१ वाटदेखि १५०० वाटसम्म', annualTax: 2000, insurance: 1500 },
    { range: '१५०१ वाटभन्दा माथि', annualTax: 3000, insurance: 1500 }
  ],
  electric_car: [
    { range: '५० किलोवाट (kW) सम्म', annualTax: 10000, insurance: 6000 },
    { range: '५१ देखि १०० किलोवाट सम्म', annualTax: 15000, insurance: 7500 },
    { range: '१०१ देखि १२५ किलोवाट सम्म', annualTax: 20000, insurance: 8500 },
    { range: '१२६ देखि २०० किलोवाट सम्म', annualTax: 30000, insurance: 10000 },
    { range: '२०१ किलोवाटभन्दा माथि', annualTax: 45000, insurance: 12000 }
  ]
};
