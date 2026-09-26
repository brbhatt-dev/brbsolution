export interface SurveyOffice {
  id: string;
  nameNp: string;
  nameEn: string;
  type: 'survey' | 'malpot';
  district: string;
  province: string;
  location: string;
  phone: string;
  email: string;
  jurisdiction: string;
}

export const SURVEY_OFFICES: SurveyOffice[] = [
  // 1. Kathmandu Valley (बागमती प्रदेश)
  {
    id: 'so-dillibazar',
    nameNp: 'नापी कार्यालय, डिल्लीबजार',
    nameEn: 'Survey Office, Dillibazar',
    type: 'survey',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    location: 'डिल्लीबजार, काठमाडौँ',
    phone: '०१-४४२३८६०',
    email: 'dillibazar@dos.gov.np',
    jurisdiction: 'काठमाडौँ महानगरपालिका वडा नं १, २, ३, ४, ५, १०, ११, २८, २९, ३०, ३१ र ३२'
  },
  {
    id: 'mo-dillibazar',
    nameNp: 'मालपोत कार्यालय, डिल्लीबजार',
    nameEn: 'Land Revenue Office, Dillibazar',
    type: 'malpot',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    location: 'डिल्लीबजार, काठमाडौँ',
    phone: '०१-४४११५४५',
    email: 'lro.dillibazar@dolrm.gov.np',
    jurisdiction: 'डिल्लीबजार नापी कार्यालय अन्तर्गतका सम्पूर्ण वडाहरूको रजिस्ट्रेसन'
  },
  {
    id: 'so-chabahil',
    nameNp: 'नापी कार्यालय, चाबहिल',
    nameEn: 'Survey Office, Chabahil',
    type: 'survey',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    location: 'चाबहिल, काठमाडौँ',
    phone: '०१-४४७४८९१',
    email: 'chabahil@dos.gov.np',
    jurisdiction: 'काठमाडौँ महानगर वडा नं ६, ७, ८, ९ र गोकर्णेश्वर, कागेश्वरी मनोहरा, शंखरापुर नगरपालिका'
  },
  {
    id: 'mo-chabahil',
    nameNp: 'मालपोत कार्यालय, चाबहिल',
    nameEn: 'Land Revenue Office, Chabahil',
    type: 'malpot',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    location: 'चाबहिल, काठमाडौँ',
    phone: '०१-४४७१२२०',
    email: 'lro.chabahil@dolrm.gov.np',
    jurisdiction: 'चाबहिल, गोकर्णेश्वर, कागेश्वरी मनोहरा क्षेत्रको रजिस्ट्रेसन तथा मोठ'
  },
  {
    id: 'so-kalanki',
    nameNp: 'नापी कार्यालय, कलंकी',
    nameEn: 'Survey Office, Kalanki',
    type: 'survey',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    location: 'कलंकी, काठमाडौँ',
    phone: '०१-५२१८२३०',
    email: 'kalanki@dos.gov.np',
    jurisdiction: 'काठमाडौँ महानगर वडा नं १२, १३, १४, १५ तथा चन्द्रागिरि, नागार्जुन, कीर्तिपुर नगरपालिका'
  },
  {
    id: 'mo-kalanki',
    nameNp: 'मालपोत कार्यालय, कलंकी',
    nameEn: 'Land Revenue Office, Kalanki',
    type: 'malpot',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    location: 'कलंकी, काठमाडौँ',
    phone: '०१-५२१८२४५',
    email: 'lro.kalanki@dolrm.gov.np',
    jurisdiction: 'कलंकी, चन्द्रागिरि, नागार्जुन र कीर्तिपुर क्षेत्र'
  },
  {
    id: 'so-manamaiju',
    nameNp: 'नापी कार्यालय, मनमैजु',
    nameEn: 'Survey Office, Manamaiju',
    type: 'survey',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    location: 'मनमैजु, तारकेश्वर, काठमाडौँ',
    phone: '०१-४०२६३५०',
    email: 'manamaiju@dos.gov.np',
    jurisdiction: 'तारकेश्वर नगरपालिका र टोखा नगरपालिका क्षेत्र'
  },
  {
    id: 'mo-manamaiju',
    nameNp: 'मालपोत कार्यालय, मनमैजु',
    nameEn: 'Land Revenue Office, Manamaiju',
    type: 'malpot',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    location: 'तारकेश्वर, काठमाडौँ',
    phone: '०१-४०२६३५५',
    email: 'lro.manamaiju@dolrm.gov.np',
    jurisdiction: 'तारकेश्वर तथा टोखा नगरपालिका'
  },
  {
    id: 'so-lalitpur',
    nameNp: 'नापी कार्यालय, लगनखेल (ललितपुर)',
    nameEn: 'Survey Office, Lagankhel (Lalitpur)',
    type: 'survey',
    district: 'ललितपुर',
    province: 'बागमती प्रदेश',
    location: 'लगनखेल, ललितपुर',
    phone: '०१-५५२१३४५',
    email: 'lalitpur@dos.gov.np',
    jurisdiction: 'ललितपुर महानगरपालिका, महालक्ष्मी, गोदावरी नगरपालिका र गाउँपालिकाहरू'
  },
  {
    id: 'mo-lalitpur',
    nameNp: 'मालपोत कार्यालय, लगनखेल (ललितपुर)',
    nameEn: 'Land Revenue Office, Lagankhel (Lalitpur)',
    type: 'malpot',
    district: 'ललितपुर',
    province: 'बागमती प्रदेश',
    location: 'लगनखेल, ललितपुर',
    phone: '०१-५५२२८९०',
    email: 'lro.lalitpur@dolrm.gov.np',
    jurisdiction: 'ललितपुर जिल्लाभरिको जग्गा रजिस्ट्रेसन तथा मोठ स्रेस्ता'
  },
  {
    id: 'so-bhaktapur',
    nameNp: 'नापी कार्यालय, भक्तपुर',
    nameEn: 'Survey Office, Bhaktapur',
    type: 'survey',
    district: 'भक्तपुर',
    province: 'बागमती प्रदेश',
    location: 'सूर्यविनायक, भक्तपुर',
    phone: '०१-६६११४५०',
    email: 'bhaktapur@dos.gov.np',
    jurisdiction: 'भक्तपुर, मध्यपुर थिमी, सूर्यविनायक र चाँगुनारायण नगरपालिका'
  },
  {
    id: 'mo-bhaktapur',
    nameNp: 'मालपोत कार्यालय, भक्तपुर',
    nameEn: 'Land Revenue Office, Bhaktapur',
    type: 'malpot',
    district: 'भक्तपुर',
    province: 'बागमती प्रदेश',
    location: 'सूर्यविनायक, भक्तपुर',
    phone: '०१-६६११४५२',
    email: 'lro.bhaktapur@dolrm.gov.np',
    jurisdiction: 'भक्तपुर जिल्ला सम्पूर्ण क्षेत्र'
  },

  // 2. Gandaki Province (गण्डकी प्रदेश)
  {
    id: 'so-kaski',
    nameNp: 'नापी कार्यालय, कास्की (पोखरा)',
    nameEn: 'Survey Office, Kaski (Pokhara)',
    type: 'survey',
    district: 'कास्की',
    province: 'गण्डकी प्रदेश',
    location: 'सहिदचोक, पोखरा',
    phone: '०६१-४६११२३',
    email: 'kaski@dos.gov.np',
    jurisdiction: 'पोखरा महानगरपालिका तथा कास्की जिल्लाभरि'
  },
  {
    id: 'mo-kaski',
    nameNp: 'मालपोत कार्यालय, कास्की (पोखरा)',
    nameEn: 'Land Revenue Office, Kaski (Pokhara)',
    type: 'malpot',
    district: 'कास्की',
    province: 'गण्डकी प्रदेश',
    location: 'सहिदचोक, पोखरा',
    phone: '०६१-४६११२५',
    email: 'lro.kaski@dolrm.gov.np',
    jurisdiction: 'पोखरा महानगरपालिका तथा कास्की जिल्ला'
  },
  {
    id: 'so-tanahun',
    nameNp: 'नापी कार्यालय, तनहुँ (दमौली)',
    nameEn: 'Survey Office, Tanahun (Damauli)',
    type: 'survey',
    district: 'तनहुँ',
    province: 'गण्डकी प्रदेश',
    location: 'दमौली, तनहुँ',
    phone: '०६५-५६०१४५',
    email: 'tanahun@dos.gov.np',
    jurisdiction: 'व्यास, भानु, शुक्लागण्डकी, भीमाद नगरपालिका र गाउँपालिकाहरू'
  },
  {
    id: 'mo-tanahun',
    nameNp: 'मालपोत कार्यालय, तनहुँ',
    nameEn: 'Land Revenue Office, Tanahun',
    type: 'malpot',
    district: 'तनहुँ',
    province: 'गण्डकी प्रदेश',
    location: 'दमौली, तनहुँ',
    phone: '०६५-५६०१४०',
    email: 'lro.tanahun@dolrm.gov.np',
    jurisdiction: 'तनहुँ जिल्लाभरि'
  },

  // 3. Koshi Province (कोशी प्रदेश)
  {
    id: 'so-morang',
    nameNp: 'नापी कार्यालय, मोरङ (विराटनगर)',
    nameEn: 'Survey Office, Morang (Biratnagar)',
    type: 'survey',
    district: 'मोरङ',
    province: 'कोशी प्रदेश',
    location: 'विराटनगर, मोरङ',
    phone: '०२१-५२२३३०',
    email: 'morang@dos.gov.np',
    jurisdiction: 'विराटनगर महानगरपालिका, सुन्दरहरैंचा, बेलबारी नगरपालिका र क्षेत्र'
  },
  {
    id: 'mo-morang',
    nameNp: 'मालपोत कार्यालय, मोरङ (विराटनगर)',
    nameEn: 'Land Revenue Office, Morang',
    type: 'malpot',
    district: 'मोरङ',
    province: 'कोशी प्रदेश',
    location: 'विराटनगर, मोरङ',
    phone: '०२१-५२२३३२',
    email: 'lro.morang@dolrm.gov.np',
    jurisdiction: 'विराटनगर महानगरपालिका तथा मोरङ'
  },
  {
    id: 'so-jhapa',
    nameNp: 'नापी कार्यालय, झापा (भद्रपुर)',
    nameEn: 'Survey Office, Jhapa (Bhadrapur)',
    type: 'survey',
    district: 'झापा',
    province: 'कोशी प्रदेश',
    location: 'भद्रपुर, झापा',
    phone: '०२३-५२११२०',
    email: 'jhapa@dos.gov.np',
    jurisdiction: 'भद्रपुर, मेचीनगर, दमक, बिर्तामोड नगरपालिका र क्षेत्र'
  },
  {
    id: 'mo-damak',
    nameNp: 'मालपोत कार्यालय, दमक (झापा)',
    nameEn: 'Land Revenue Office, Damak (Jhapa)',
    type: 'malpot',
    district: 'झापा',
    province: 'कोशी प्रदेश',
    location: 'दमक, झापा',
    phone: '०२३-५८०१४०',
    email: 'lro.damak@dolrm.gov.np',
    jurisdiction: 'दमक नगरपालिका, गौरादह, कमल गाउँपालिका क्षेत्र'
  },
  {
    id: 'mo-bhadrapur',
    nameNp: 'मालपोत कार्यालय, भद्रपुर (झापा)',
    nameEn: 'Land Revenue Office, Bhadrapur (Jhapa)',
    type: 'malpot',
    district: 'झापा',
    province: 'कोशी प्रदेश',
    location: 'भद्रपुर, झापा',
    phone: '०२३-५२११२५',
    email: 'lro.bhadrapur@dolrm.gov.np',
    jurisdiction: 'भद्रपुर, मेचीनगर, बिर्तामोड क्षेत्र'
  },

  // 4. Lumbini Province (लुम्बिनी प्रदेश)
  {
    id: 'so-rupandehi',
    nameNp: 'नापी कार्यालय, रुपन्देही (भैरहवा)',
    nameEn: 'Survey Office, Rupandehi (Bhairahawa)',
    type: 'survey',
    district: 'रुपन्देही',
    province: 'लुम्बिनी प्रदेश',
    location: 'भैरहवा, रुपन्देही',
    phone: '०७१-५२११४५',
    email: 'rupandehi@dos.gov.np',
    jurisdiction: 'सिद्धार्थनगर, बुटवल उपमहानगरपालिका, तिलोत्तमा नगरपालिका क्षेत्र'
  },
  {
    id: 'mo-butwal',
    nameNp: 'मालपोत कार्यालय, बुटवल (रुपन्देही)',
    nameEn: 'Land Revenue Office, Butwal (Rupandehi)',
    type: 'malpot',
    district: 'रुपन्देही',
    province: 'लुम्बिनी प्रदेश',
    location: 'बुटवल, रुपन्देही',
    phone: '०७१-५४०१५०',
    email: 'lro.butwal@dolrm.gov.np',
    jurisdiction: 'बुटवल उपमहानगरपालिका, तिलोत्तमा नगरपालिका र उत्तर क्षेत्र'
  },
  {
    id: 'so-banke',
    nameNp: 'नापी कार्यालय, बाँके (नेपालगन्ज)',
    nameEn: 'Survey Office, Banke (Nepalgunj)',
    type: 'survey',
    district: 'बाँके',
    province: 'लुम्बिनी प्रदेश',
    location: 'नेपालगन्ज, बाँके',
    phone: '०८१-५२१२४०',
    email: 'banke@dos.gov.np',
    jurisdiction: 'नेपालगन्ज उपमहानगरपालिका, कोहलपुर नगरपालिका क्षेत्र'
  },
  {
    id: 'mo-banke',
    nameNp: 'मालपोत कार्यालय, बाँके (नेपालगन्ज)',
    nameEn: 'Land Revenue Office, Banke (Nepalgunj)',
    type: 'malpot',
    district: 'बाँके',
    province: 'लुम्बिनी प्रदेश',
    location: 'नेपालगन्ज, बाँके',
    phone: '०८१-५२१२४२',
    email: 'lro.banke@dolrm.gov.np',
    jurisdiction: 'बाँके जिल्ला सम्पूर्ण क्षेत्र'
  },

  // 5. Madhesh Province (मधेश प्रदेश)
  {
    id: 'so-dhanusha',
    nameNp: 'नापी कार्यालय, धनुषा (जनकपुर)',
    nameEn: 'Survey Office, Dhanusha (Janakpur)',
    type: 'survey',
    district: 'धनुषा',
    province: 'मधेश प्रदेश',
    location: 'जनकपुरधाम, धनुषा',
    phone: '०४१-५२११३०',
    email: 'dhanusha@dos.gov.np',
    jurisdiction: 'जनकपुरधाम उपमहानगरपालिका तथा धनुषा जिल्ला'
  },
  {
    id: 'mo-dhanusha',
    nameNp: 'मालपोत कार्यालय, धनुषा (जनकपुर)',
    nameEn: 'Land Revenue Office, Dhanusha (Janakpur)',
    type: 'malpot',
    district: 'धनुषा',
    province: 'मधेश प्रदेश',
    location: 'जनकपुरधाम, धनुषा',
    phone: '०४१-५२११३५',
    email: 'lro.dhanusha@dolrm.gov.np',
    jurisdiction: 'धनुषा जिल्लाभरिको जग्गा रजिस्ट्रेसन'
  },
  {
    id: 'so-parsa',
    nameNp: 'नापी कार्यालय, पर्सा (वीरगन्ज)',
    nameEn: 'Survey Office, Parsa (Birgunj)',
    type: 'survey',
    district: 'पर्सा',
    province: 'मधेश प्रदेश',
    location: 'वीरगन्ज, पर्सा',
    phone: '०५१-५२२१५०',
    email: 'parsa@dos.gov.np',
    jurisdiction: 'वीरगन्ज महानगरपालिका, पोखरिया नगरपालिका क्षेत्र'
  },
  {
    id: 'mo-parsa',
    nameNp: 'मालपोत कार्यालय, पर्सा (वीरगन्ज)',
    nameEn: 'Land Revenue Office, Parsa (Birgunj)',
    type: 'malpot',
    district: 'पर्सा',
    province: 'मधेश प्रदेश',
    location: 'वीरगन्ज, पर्सा',
    phone: '०५१-५२२१५२',
    email: 'lro.parsa@dolrm.gov.np',
    jurisdiction: 'पर्सा जिल्लाभरि'
  },

  // 6. Sudurpashchim Province (सुदूरपश्चिम प्रदेश)
  {
    id: 'so-kailali',
    nameNp: 'नापी कार्यालय, कैलाली (धनगढी)',
    nameEn: 'Survey Office, Kailali (Dhangadhi)',
    type: 'survey',
    district: 'कैलाली',
    province: 'सुदूरपश्चिम प्रदेश',
    location: 'धनगढी, कैलाली',
    phone: '०९१-५२११६०',
    email: 'kailali@dos.gov.np',
    jurisdiction: 'धनगढी उपमहानगरपालिका, गोदावरी, घोडाघोडी, टीकापुर नगरपालिका'
  },
  {
    id: 'mo-kailali',
    nameNp: 'मालपोत कार्यालय, कैलाली (धनगढी)',
    nameEn: 'Land Revenue Office, Kailali (Dhangadhi)',
    type: 'malpot',
    district: 'कैलाली',
    province: 'सुदूरपश्चिम प्रदेश',
    location: 'धनगढी, कैलाली',
    phone: '०९१-५२११६२',
    email: 'lro.kailali@dolrm.gov.np',
    jurisdiction: 'कैलाली जिल्लाभरि'
  },
  {
    id: 'so-kanchanpur',
    nameNp: 'नापी कार्यालय, कञ्चनपुर (महेन्द्रनगर)',
    nameEn: 'Survey Office, Kanchanpur (Mahendranagar)',
    type: 'survey',
    district: 'कञ्चनपुर',
    province: 'सुदूरपश्चिम प्रदेश',
    location: 'भीमदत्त (महेन्द्रनगर), कञ्चनपुर',
    phone: '०९९-५२११४०',
    email: 'kanchanpur@dos.gov.np',
    jurisdiction: 'भीमदत्त, बेदकोट, शुक्लाफाँटा, कृष्णपुर नगरपालिका'
  },
  {
    id: 'mo-kanchanpur',
    nameNp: 'मालपोत कार्यालय, कञ्चनपुर',
    nameEn: 'Land Revenue Office, Kanchanpur',
    type: 'malpot',
    district: 'कञ्चनपुर',
    province: 'सुदूरपश्चिम प्रदेश',
    location: 'भीमदत्त, कञ्चनपुर',
    phone: '०९९-५२११४२',
    email: 'lro.kanchanpur@dolrm.gov.np',
    jurisdiction: 'कञ्चनपुर जिल्लाभरि'
  },

  // 7. Karnali Province (कर्णाली प्रदेश)
  {
    id: 'so-surkhet',
    nameNp: 'नापी कार्यालय, सुर्खेत (वीरेन्द्रनगर)',
    nameEn: 'Survey Office, Surkhet (Birendranagar)',
    type: 'survey',
    district: 'सुर्खेत',
    province: 'कर्णाली प्रदेश',
    location: 'वीरेन्द्रनगर, सुर्खेत',
    phone: '०८३-५२०१३०',
    email: 'surkhet@dos.gov.np',
    jurisdiction: 'वीरेन्द्रनगर नगरपालिका, भेरीगंगा, गुर्भाकोट नगरपालिका'
  },
  {
    id: 'mo-surkhet',
    nameNp: 'मालपोत कार्यालय, सुर्खेत',
    nameEn: 'Land Revenue Office, Surkhet',
    type: 'malpot',
    district: 'सुर्खेत',
    province: 'कर्णाली प्रदेश',
    location: 'वीरेन्द्रनगर, सुर्खेत',
    phone: '०८३-५२०१३२',
    email: 'lro.surkhet@dolrm.gov.np',
    jurisdiction: 'सुर्खेत जिल्लाभरि'
  }
];
