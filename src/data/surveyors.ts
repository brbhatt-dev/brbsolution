export interface SurveyorProfile {
  id: string;
  name: string;
  title: string;
  category: 'amin' | 'engineer' | 'consultancy';
  categoryLabelNp: string;
  district: string;
  province: string;
  city: string;
  phone: string;
  whatsapp?: string;
  email?: string;
  experienceYears: number;
  licenseInfo: string;
  specialties: string[];
  equipment: string[];
  rating: number;
  reviewCount: number;
  verified: boolean;
  bio: string;
  workingHours?: string;
}

export const SURVEYOR_PROFILES: SurveyorProfile[] = [
  // 1. बागमती प्रदेश - काठमाडौँ
  {
    id: 'surv-ktm-01',
    name: 'अमिन सुरेश कुमार श्रेष्ठ',
    title: 'लाइसेन्सप्राप्त वरिष्ठ नापी अमिन',
    category: 'amin',
    categoryLabelNp: 'नापी अमिन',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    city: 'डिल्लीबजार / चाबहिल',
    phone: '9851082341',
    whatsapp: '9851082341',
    email: 'suresh.surveyor@gmail.com',
    experienceYears: 14,
    licenseInfo: 'नापी विभाग अनुमतिपत्र दर्ता नं: ३१२/०६८',
    specialties: ['कित्ताकाट तथा साँध सिमाना नाप', 'फिल्डबुक नक्सा चेकजाँच', 'अंशबण्डा प्लटिङ', 'विवादित जग्गा निरुपण'],
    equipment: ['Total Station (South)', 'Electronic Distance Meter (EDM)', 'Steel Tape 50m'],
    rating: 4.9,
    reviewCount: 38,
    verified: true,
    bio: 'काठमाडौँ उपत्यकाभित्र १४ वर्षदेखि नापी, कित्ताकाट, साँध-सिमाना विवाद मिलाउने तथा सरकारी नक्सा अनुसार जग्गा यकिन गर्ने अनुभवी प्राविधिक।',
    workingHours: 'आइतबार - शुक्रबार (९:०० AM - ६:०० PM)'
  },
  {
    id: 'surv-ktm-02',
    name: 'सगरमाथा जियो-इन्जिनियरिङ कन्सल्टेन्सी',
    title: 'डिजिटल सर्भे तथा इन्जिनियरिङ कन्सल्ट्यान्सी',
    category: 'consultancy',
    categoryLabelNp: 'सर्भे कन्सल्टेन्सी',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    city: 'नयाँ बानेश्वर, काठमाडौँ',
    phone: '9841298450',
    whatsapp: '9841298450',
    email: 'sagarmartha.geo@gmail.com',
    experienceYears: 10,
    licenseInfo: 'कम्पनी दर्ता नं: १४२५५/०७२ • नापी विभाग सूचीकृत',
    specialties: ['टोटल स्टेसन सर्भे', 'टोपोग्राफिकल कन्टुर नाप', 'DGPS RTK कोर्डिनेट', 'घर नक्सा पास डिजाइन'],
    equipment: ['Topcon DGPS GNSS RTK', 'Total Station (Leica FlexLine)', 'AutoCAD Civil 3D', 'DJI Phantom 4 RTK Drone'],
    rating: 4.9,
    reviewCount: 52,
    verified: true,
    bio: 'ठूला रियल स्टेट प्लटिङ, सडक विस्तार, हाइड्रो तथा बस्ती विकासका लागि उच्च प्रविधियुक्त टोटल स्टेसन र ड्रोन सर्भे सेवा।',
    workingHours: 'दैनिक (२४/७ अन-कल सर्भे)'
  },
  {
    id: 'surv-ktm-03',
    name: 'इ. रबिन थापा मगर',
    title: 'जियोमेटिक्स इन्जिनियर (B.E. Geomatics)',
    category: 'engineer',
    categoryLabelNp: 'जियोमेटिक्स इन्जिनियर',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    city: 'कलंकी / सीतापाइला',
    phone: '9860155420',
    whatsapp: '9860155420',
    email: 'rabin.geomatics@outlook.com',
    experienceYears: 7,
    licenseInfo: 'नेपाल इन्जिनियरिङ काउन्सिल (NEC Reg: 14210 Geomatics)',
    specialties: ['GIS नक्साङ्कन', 'काठमाडौँ MUTM कोर्डिनेट', 'जग्गा प्लटिङ थ्री-डी लेआउट', 'ड्रोन सर्भे'],
    equipment: ['Trimble GNSS RTK', 'ArcGIS Pro / QGIS', 'Civil 3D LISP Automation'],
    rating: 4.8,
    reviewCount: 29,
    verified: true,
    bio: 'काठमाडौं विश्वविद्यालयबाट जियोमेटिक्स इन्जिनियरिङमा स्नातक। आधुनिक GIS प्रविधिद्वारा वैज्ञानिक भू-व्यवस्थापन र नक्सा सेवा।',
    workingHours: 'आइतबार - शनिबार (८:०० AM - ७:०० PM)'
  },

  // 2. बागमती प्रदेश - ललितपुर
  {
    id: 'surv-lalit-01',
    name: 'अमिन हरि गोविन्द महर्जन',
    title: 'लाइसेन्सप्राप्त अमिन तथा नापी प्राविधिक',
    category: 'amin',
    categoryLabelNp: 'नापी अमिन',
    district: 'ललितपुर',
    province: 'बागमती प्रदेश',
    city: 'लगनखेल / सातदोबाटो, ललितपुर',
    phone: '9841834912',
    whatsapp: '9841834912',
    experienceYears: 16,
    licenseInfo: 'नापी विभाग अनुमतिपत्र नं: २८८/०६६',
    specialties: ['कित्ताकाट सिमाना नाप', 'फिल्डबुक उतार', 'अंशबण्डा तथा साँध मिचिएको जाँच', 'गोदाम तथा घर जग रेखांकन'],
    equipment: ['Total Station (Sokkia)', 'Laser Distance Meter', 'Metric Land Chain & Tape'],
    rating: 4.9,
    reviewCount: 44,
    verified: true,
    bio: 'ललितपुर महानगर, गोदावरी र महालक्ष्मी नगरपालिका क्षेत्रमा १६ वर्षदेखि अनवरत नापी तथा जग्गा सेवा प्रदान गर्दै आउनुभएको अनुभवी अमिन।',
    workingHours: 'आइतबार - शुक्रबार (९:०० AM - ५:३० PM)'
  },
  {
    id: 'surv-lalit-02',
    name: 'इ. विनिता कार्की',
    title: 'सिभिल इन्जिनियर तथा घर नक्सा विज्ञ',
    category: 'engineer',
    categoryLabelNp: 'सिभिल इन्जिनियर',
    district: 'ललितपुर',
    province: 'बागमती प्रदेश',
    city: 'झम्सिखेल / कुपण्डोल',
    phone: '9849201455',
    whatsapp: '9849201455',
    email: 'binita.civileng@gmail.com',
    experienceYears: 6,
    licenseInfo: 'NEC Reg: 18450 Civil',
    specialties: ['घर नक्सा पास तथा नगरपालिका मापदण्ड', 'स्ट्रक्चरल डिजाइन', 'जग्गा उपयोग तथा Setback चेक', 'निर्माण सुपरभिजन'],
    equipment: ['AutoCAD Architecture', 'ETABS 20', 'Total Station'],
    rating: 4.8,
    reviewCount: 23,
    verified: true,
    bio: 'ललितपुर र काठमाडौं महानगरपालिकाको भवन निर्माण मापदण्ड (Building Bye-laws) अनुसार नक्सा पास तथा जग्गा क्षेत्रफल प्रमाणीकरण।',
    workingHours: 'आइतबार - शुक्रबार (१०:०० AM - ६:०० PM)'
  },

  // 3. बागमती प्रदेश - भक्तपुर
  {
    id: 'surv-bhak-01',
    name: 'भक्तपुर डिजिटल सर्भे एण्ड म्यापिङ',
    title: 'आधिकारिक नापी तथा नक्सा केन्द्र',
    category: 'consultancy',
    categoryLabelNp: 'सर्भे कन्सल्टेन्सी',
    district: 'भक्तपुर',
    province: 'बागमती प्रदेश',
    city: 'सूर्यविनायक / कमलविनायक',
    phone: '9851145620',
    whatsapp: '9851145620',
    email: 'bhaktapur.survey@gmail.com',
    experienceYears: 11,
    licenseInfo: 'कम्पनी दर्ता नं: १८२०५/०७३ • नापी विभाग मान्यताप्राप्त',
    specialties: ['जग्गा कित्ताकाट', 'टोटल स्टेसन सर्भे', 'स्मार्ट घडेरी प्लटिङ', 'नगरपालिका बाटो नाप'],
    equipment: ['South Total Station (2" accuracy)', 'GNSS Rover', 'AutoCAD Drafting Stations'],
    rating: 4.9,
    reviewCount: 36,
    verified: true,
    bio: 'भक्तपुर जिल्लाभरिका साना-ठूला सबै प्रकारका जग्गा नापजाँच, साँध-सिमाना यकिन र प्लटिङ नक्सांकनका लागि भरपर्दो प्राविधिक समूह।',
    workingHours: 'आइतबार - शुक्रबार (९:०० AM - ६:०० PM)'
  },

  // 4. गण्डकी प्रदेश - कास्की (पोखरा)
  {
    id: 'surv-kaski-01',
    name: 'अमिन दीपक राज बास्तोला',
    title: 'वरिष्ठ नापी प्राविधिक (पोखरा क्षेत्र)',
    category: 'amin',
    categoryLabelNp: 'नापी अमिन',
    district: 'कास्की',
    province: 'गण्डकी प्रदेश',
    city: 'न्यूरोड / पृथ्वीचोक, पोखरा',
    phone: '9856034112',
    whatsapp: '9856034112',
    experienceYears: 15,
    licenseInfo: 'नापी विभाग अनुमतिपत्र दर्ता नं: २४०/०६७',
    specialties: ['पोखरा महानगर कित्ताकाट', 'ताल छेउ मापदण्ड नाप', 'होटल तथा रिसोर्ट जग्गा रेखांकन', 'सिमाना विवाद समाधान'],
    equipment: ['Leica Total Station', 'DGPS Rover', 'Optical Plummet'],
    rating: 5.0,
    reviewCount: 47,
    verified: true,
    bio: 'पोखरा महानगरपालिका तथा कास्की जिल्लाका ग्रामीण क्षेत्रहरूमा विगत १५ वर्षदेखि निष्पक्ष, भरपर्दो र कम्प्युटर नक्सांकनसहित नापी सेवा।',
    workingHours: 'दैनिक (८:०० AM - ६:०० PM)'
  },
  {
    id: 'surv-kaski-02',
    name: 'अन्नपूर्ण सर्भे एण्ड इन्जिनियरिङ',
    title: 'डिजिटल क्याड तथा ल्याण्ड कन्सल्टेन्सी',
    category: 'consultancy',
    categoryLabelNp: 'सर्भे कन्सल्टेन्सी',
    district: 'कास्की',
    province: 'गण्डकी प्रदेश',
    city: 'सिर्जनाचोक, पोखरा',
    phone: '9846029871',
    whatsapp: '9846029871',
    email: 'annapurnasurvey.pkr@gmail.com',
    experienceYears: 9,
    licenseInfo: 'कम्पनी रजिस्ट्रार नं: १६७४१/०७४',
    specialties: ['टोपोग्राफिकल कन्टुर नाप', 'घडेरी प्लटिङ प्लानिङ', 'घर नक्सा पास', 'सडक एलाइन्मेन्ट सर्भे'],
    equipment: ['Kolida Total Station', 'DGPS RTK Station', 'Drone Mapping Setup'],
    rating: 4.8,
    reviewCount: 31,
    verified: true,
    bio: 'कास्की, तनहुँ र स्याङ्जा जिल्लामा आधुनिक डिजिटल सर्भे, हाइड्रोपावर सर्भे र व्यक्तिगत घडेरी कित्ताकाट सेवा।',
    workingHours: 'आइतबार - शुक्रबार (९:३० AM - ५:३० PM)'
  },

  // 5. बागमती प्रदेश - चितवन
  {
    id: 'surv-chitwan-01',
    name: 'अमिन रामेश्वर चौधरी',
    title: 'लाइसेन्सप्राप्त तराई नापी अमिन',
    category: 'amin',
    categoryLabelNp: 'नापी अमिन',
    district: 'चितवन',
    province: 'बागमती प्रदेश',
    city: 'भरतपुर (हाकिमचोक) / नारायणगढ',
    phone: '9855018240',
    whatsapp: '9855018240',
    experienceYears: 13,
    licenseInfo: 'नापी विभाग अनुमतिपत्र नं: ३६०/०६९',
    specialties: ['बिघा-कट्ठा-धुर तराई नापजाँच', 'भरतपुर महानगर कित्ताकाट', 'खेतीयोग्य जग्गा अंशबण्डा', 'नक्सा ट्रेस तालमेल'],
    equipment: ['Total Station (Sokkia iM-50)', 'Gunter Chain & Steel Tape', 'Field Compass'],
    rating: 4.9,
    reviewCount: 41,
    verified: true,
    bio: 'चितवन र नवलपुर क्षेत्रमा बिघा, कट्ठा र धुरको शुद्ध नाप, सरकारी नापी कार्यालयको नक्सासँग दुरुस्त कित्ता मिलाउने कार्यमा विश्वसनीय।',
    workingHours: 'आइतबार - शुक्रबार (८:०० AM - ६:०० PM)'
  },

  // 6. लुम्बिनी प्रदेश - रुपन्देही (बुटवल / भैरहवा)
  {
    id: 'surv-rup-01',
    name: 'लुम्बिनी डिजिटल सर्भे कन्सल्ट्यान्सी',
    title: 'आधुनिक भू-मापन तथा परामर्श केन्द्र',
    category: 'consultancy',
    categoryLabelNp: 'सर्भे कन्सल्टेन्सी',
    district: 'रुपन्देही',
    province: 'लुम्बिनी प्रदेश',
    city: 'ट्राफिकचोक, बुटवल / भैरहवा',
    phone: '9857024510',
    whatsapp: '9857024510',
    email: 'lumbini.survey@gmail.com',
    experienceYears: 12,
    licenseInfo: 'कम्पनी दर्ता नं: १५९४०/०७१ • उद्योग विभाग दर्ता',
    specialties: ['औद्योगिक क्षेत्र जग्गा नाप', 'बिघा कट्ठा कित्ताकाट', 'Total Station & DGPS', 'प्लटिङ डिजाइन'],
    equipment: ['Trimble R8 GNSS System', 'South Total Station', 'Cadastral GIS Stations'],
    rating: 4.9,
    reviewCount: 39,
    verified: true,
    bio: 'बुटवल, भैरहवा र कपिलवस्तु क्षेत्रमा औद्योगिक तथा आवासीय जग्गाको अत्याधुनिक DGPS तथा टोटल स्टेसनबाट शुद्ध नापजाँच सेवा।',
    workingHours: 'आइतबार - शुक्रबार (९:०० AM - ६:०० PM)'
  },
  {
    id: 'surv-rup-02',
    name: 'इ. सन्तोष ज्ञवाली',
    title: 'जियोमेटिक्स तथा सिभिल इन्जिनियर',
    category: 'engineer',
    categoryLabelNp: 'जियोमेटिक्स इन्जिनियर',
    district: 'रुपन्देही',
    province: 'लुम्बिनी प्रदेश',
    city: 'कालिका नगर, बुटवल',
    phone: '9847055921',
    whatsapp: '9847055921',
    email: 'santosh.surveyeng@gmail.com',
    experienceYears: 8,
    licenseInfo: 'NEC Reg: 16120 Civil/Geomatics',
    specialties: ['घर नक्सा पास', 'जग्गा मूल्याङ्कन (Bank Valuation)', 'टोपो सर्भे', 'सडक चौडाइ रेखांकन'],
    equipment: ['AutoCAD Civil 3D', 'Total Station', 'RTK Base & Rover'],
    rating: 4.8,
    reviewCount: 26,
    verified: true,
    bio: 'नगरपालिका मापदण्ड अनुसार घर नक्सा पास, जग्गाको वैधानिक सिमाना यकिन तथा डिजिटल थ्री-डी नक्सांकन विज्ञ।',
    workingHours: 'आइतबार - शुक्रबार (१०:०० AM - ५:०० PM)'
  },

  // 7. कोशी प्रदेश - झापा (विर्तामोड / दमक)
  {
    id: 'surv-jhapa-01',
    name: 'अमिन खड्ग बहादुर कटुवाल',
    title: 'वरिष्ठ नापी प्राविधिक तथा अमिन',
    category: 'amin',
    categoryLabelNp: 'नापी अमिन',
    district: 'झापा',
    province: 'कोशी प्रदेश',
    city: 'मुक्तिचोक, विर्तामोड / दमक',
    phone: '9852671140',
    whatsapp: '9852671140',
    experienceYears: 17,
    licenseInfo: 'नापी विभाग अनुमतिपत्र नं: २१५/०६५',
    specialties: ['झापा जिल्लाभरिका कित्ताकाट', 'चिया बगान तथा कृषि जग्गा नाप', 'सिमाना विवाद मिलाउने', 'अंशबण्डा प्लट'],
    equipment: ['Total Station (South N4)', 'Precision Steel Tape 100m', 'Prism Set'],
    rating: 4.9,
    reviewCount: 49,
    verified: true,
    bio: 'झापा, इलाम र मोरङ क्षेत्रमा १७ वर्षको लामो फिल्ड अनुभव। बिघा-कट्ठा र धुरको शुद्ध नापजाँच तथा मालपोत रजिस्ट्रेसन सहजीकरण।',
    workingHours: 'दैनिक (७:३० AM - ६:०० PM)'
  },

  // 8. कोशी प्रदेश - मोरङ (विराटनगर)
  {
    id: 'surv-morang-01',
    name: 'कोशी ल्याण्ड सर्भे एण्ड म्यापिङ',
    title: 'आधिकारिक डिजिटल सर्भे कन्सल्टेन्सी',
    category: 'consultancy',
    categoryLabelNp: 'सर्भे कन्सल्टेन्सी',
    district: 'मोरङ',
    province: 'कोशी प्रदेश',
    city: 'मेनरोड, विराटनगर',
    phone: '9852028410',
    whatsapp: '9852028410',
    email: 'koshi.landsurvey@gmail.com',
    experienceYears: 11,
    licenseInfo: 'कम्पनी दर्ता नं: १६९५०/०७२',
    specialties: ['विराटनगर महानगर कित्ताकाट', 'उद्योग कलकारखाना जग्गा नाप', 'DGPS सर्भे', 'डिजिटल नक्सा ट्रेस'],
    equipment: ['CHCNAV i73 GNSS RTK', 'Total Station', 'CAD Station'],
    rating: 4.8,
    reviewCount: 34,
    verified: true,
    bio: 'विराटनगर, इटहरी र धरान करिडोरमा डिजिटल प्रविधिबाट जग्गा नापजाँच, प्लटिङ र सिमाना प्रमाणिकरण गर्ने अनुभवी प्राविधिक समूह।',
    workingHours: 'आइतबार - शुक्रबार (९:०० AM - ६:०० PM)'
  },

  // 9. मधेश प्रदेश - धनुषा (जनकपुरधाम)
  {
    id: 'surv-dhanusha-01',
    name: 'अमिन सन्तोष कुमार यादव',
    title: 'लाइसेन्सप्राप्त नापी अमिन',
    category: 'amin',
    categoryLabelNp: 'नापी अमिन',
    district: 'धनुषा',
    province: 'मधेश प्रदेश',
    city: 'जनकपुरधाम (स्टेशन रोड)',
    phone: '9854028912',
    whatsapp: '9854028912',
    experienceYears: 12,
    licenseInfo: 'नापी विभाग दर्ता नं: ४०५/०७०',
    specialties: ['धनुषा-महोत्तरी कित्ताकाट', 'तराई बिघा कट्ठा धुर नाप', 'सडक विवाद सिमाना चेक', 'मालपोत लिखत सहयोग'],
    equipment: ['Total Station (Sokkia)', 'Gunter Land Chain', 'Steel Tape'],
    rating: 4.9,
    reviewCount: 37,
    verified: true,
    bio: 'जनकपुरधाम र धनुषा जिल्लामा १२ वर्षदेखि किसान, जग्गाधनी र व्यापारीहरूको जग्गा शुद्ध रूपमा नापी गर्दै आउनुभएको भरपर्दो अमिन।',
    workingHours: 'दैनिक (८:०० AM - ६:०० PM)'
  },

  // 10. मधेश प्रदेश - पर्सा (वीरगञ्ज)
  {
    id: 'surv-parsa-01',
    name: 'मध्य-तराई इन्जिनियरिङ एण्ड सर्भे',
    title: 'औद्योगिक तथा आवासिय सर्भे कन्सल्टेन्सी',
    category: 'consultancy',
    categoryLabelNp: 'सर्भे कन्सल्टेन्सी',
    district: 'पर्सा',
    province: 'मधेश प्रदेश',
    city: 'आदर्शनगर, वीरगञ्ज',
    phone: '9855021940',
    whatsapp: '9855021940',
    email: 'birgunj.survey@gmail.com',
    experienceYears: 10,
    licenseInfo: 'कम्पनी दर्ता नं: १७३२१/०७३',
    specialties: ['वीरगञ्ज भन्सार/औद्योगिक करिडोर नाप', 'DGPS RTK', 'व्यावसायिक प्लटिङ', 'कन्टुर सर्भे'],
    equipment: ['Trimble GNSS', 'South Total Station (Arc-5)', 'AutoCAD Land Desktop'],
    rating: 4.8,
    reviewCount: 30,
    verified: true,
    bio: 'पर्सा र बारा औद्योगिक क्षेत्रमा ठूला गोदाम, फ्याक्ट्री तथा घडेरी जग्गाको डिजिटल टोटल स्टेसनबाट शुद्ध मापन सेवा।',
    workingHours: 'आइतबार - शुक्रबार (९:०० AM - ६:०० PM)'
  },

  // 11. सुदूरपश्चिम प्रदेश - कैलाली (धनगढी)
  {
    id: 'surv-kailali-01',
    name: 'अमिन हर्क बहादुर साउद',
    title: 'लाइसेन्सप्राप्त नापी अमिन',
    category: 'amin',
    categoryLabelNp: 'नापी अमिन',
    district: 'कैलाली',
    province: 'सुदूरपश्चिम प्रदेश',
    city: 'एल.एन.चोक, धनगढी / अत्तरिया',
    phone: '9858421045',
    whatsapp: '9858421045',
    experienceYears: 13,
    licenseInfo: 'नापी विभाग अनुमतिपत्र नं: ३७५/०७०',
    specialties: ['धनगढी उपमहानगर कित्ताकाट', 'तराई कृषि जग्गा नाप', 'सिमाना साँध विवाद', 'अंशबण्डा प्लट'],
    equipment: ['Electronic Total Station', 'Field Measurement Chain', 'Precision Prisms'],
    rating: 4.9,
    reviewCount: 35,
    verified: true,
    bio: 'कैलाली र कञ्चनपुर जिल्लामा १३ वर्षदेखि नापी विभागको आधिकारिक नक्सा अनुसार निष्पक्ष र त्रुटिरहित जग्गा नापजाँच सेवा।',
    workingHours: 'दैनिक (८:०० AM - ५:३० PM)'
  },

  // 12. कर्णाली प्रदेश - सुर्खेत (वीरेन्द्रनगर)
  {
    id: 'surv-surkhet-01',
    name: 'कर्णाली जियो-सर्भे सोलुसन्स',
    title: 'डिजिटल सर्भे तथा इन्जिनियरिङ सेवा',
    category: 'consultancy',
    categoryLabelNp: 'सर्भे कन्सल्टेन्सी',
    district: 'सुर्खेत',
    province: 'कर्णाली प्रदेश',
    city: 'वीरेन्द्रनगर (धुलियाबिट / मंगलगढीचोक)',
    phone: '9858051280',
    whatsapp: '9858051280',
    email: 'karnali.geosurvey@gmail.com',
    experienceYears: 8,
    licenseInfo: 'कम्पनी दर्ता नं: १९४२०/०७४',
    specialties: ['सुर्खेत उपत्यका कित्ताकाट', 'पहाडी भिरालो जग्गा कन्टुर', 'सडक तथा सिँचाइ सर्भे', 'घर नक्सा'],
    equipment: ['South Total Station', 'Garmin GPS & RTK', 'Civil 3D'],
    rating: 4.8,
    reviewCount: 22,
    verified: true,
    bio: 'सुर्खेत उपत्यका र कर्णाली प्रदेशभर आधुनिक प्रविधिद्वारा नापी, कित्ताकाट र इन्जिनियरिङ ड्रइङ परामर्श सेवा।',
    workingHours: 'आइतबार - शुक्रबार (९:०० AM - ५:०० PM)'
  }
];
