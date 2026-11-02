export interface MalpotRateEntry {
  id: string;
  district: string;
  officeName: string;
  municipality: string;
  areaName: string;
  unit: 'प्रति आना' | 'प्रति कट्ठा';
  rates: {
    roadType: string;
    govRate: number;
    marketRateEstimate: number;
    description: string;
  }[];
}

export const MALPOT_VALUATION_DATA: MalpotRateEntry[] = [
  // Kathmandu - Kalanki
  {
    id: 'ktm-kalanki-01',
    district: 'काठमाडौँ',
    officeName: 'मालपोत कार्यालय कलंकी',
    municipality: 'काठमाडौँ महानगरपालिका वडा नं. १४ (कलंकी, बाफल, खसीबजार)',
    areaName: 'कलंकी चोक तथा कलंकी-थानकोट मुख्य सडक खण्ड',
    unit: 'प्रति आना',
    rates: [
      {
        roadType: 'चक्रपथ तथा मूल त्रिभुवन राजमार्ग (Main Highway)',
        govRate: 5000000,
        marketRateEstimate: 9000000,
        description: 'मूल सडकसँग प्रत्यक्ष जोडिएको व्यापारिक जग्गा (प्रति आना रु. ५० लाख सरकारी दर)'
      },
      {
        roadType: 'सहायक कालोपत्रे सडक (२० देखि ३० फिट बाटो)',
        govRate: 3500000,
        marketRateEstimate: 6000000,
        description: 'पक्की कालोपत्रे बाटो जोडिएको आवासीय तथा मिश्रित जग्गा'
      },
      {
        roadType: 'शाखा ग्राभेल सडक (१३ देखि २० फिट बाटो)',
        govRate: 2500000,
        marketRateEstimate: 4500000,
        description: 'भित्री बस्तीका ग्राभेल वा ढलान गरिएका बाटोहरू'
      },
      {
        roadType: '१० देखि १३ फिटको कच्ची वा साघुँरो बाटो',
        govRate: 1800000,
        marketRateEstimate: 3200000,
        description: 'साधारण आवासीय क्षेत्रको भित्री जग्गा'
      },
      {
        roadType: 'गोरेटो वा बाटो नभएको जग्गा (Landlocked/Footpath)',
        govRate: 1200000,
        marketRateEstimate: 2200000,
        description: 'मोटर बाटो नपुगेको पैदल निकास मात्र भएको जग्गा'
      }
    ]
  },
  {
    id: 'ktm-kalanki-02',
    district: 'काठमाडौँ',
    officeName: 'मालपोत कार्यालय कलंकी',
    municipality: 'चन्द्रागिरि नगरपालिका (थानकोट, दहचोक, बलम्बु, गुर्जुधारा)',
    areaName: 'चन्द्रागिरि नगर क्षेत्र',
    unit: 'प्रति आना',
    rates: [
      {
        roadType: 'मूल सडक (त्रिभुवन राजपथ/चन्द्रागिरि केबलकार सडक)',
        govRate: 2800000,
        marketRateEstimate: 4500000,
        description: 'मुख्य राजमार्ग तथा पर्यटकीय बाटो'
      },
      {
        roadType: 'नगरस्तरीय पक्की सडक (१६ देखि २२ फिट)',
        govRate: 1800000,
        marketRateEstimate: 3000000,
        description: 'वडा जोड्ने मुख्य पिच सडकहरू'
      },
      {
        roadType: '१२ देखि १६ फिट ग्राभेल बाटो',
        govRate: 1200000,
        marketRateEstimate: 2200000,
        description: 'प्लटिङ तथा नयाँ आवासीय बस्ती'
      },
      {
        roadType: '१० फिटभन्दा मुनि वा गोरेटो',
        govRate: 700000,
        marketRateEstimate: 1400000,
        description: 'खेतीयोग्य वा भित्री कान्लो जग्गा'
      }
    ]
  },

  // Kathmandu - Dillibazar
  {
    id: 'ktm-dillibazar-01',
    district: 'काठमाडौँ',
    officeName: 'मालपोत कार्यालय डिल्लीबजार',
    municipality: 'काठमाडौँ महानगरपालिका (न्यूरोड, पुतलीसडक, माइतीघर, बानेश्वर)',
    areaName: 'काठमाडौँ कोर सिटी व्यापारिक क्षेत्र',
    unit: 'प्रति आना',
    rates: [
      {
        roadType: 'अति विशिष्ट व्यापारिक मूल सडक (New Road, Durbar Marg, Putalisadak)',
        govRate: 8500000,
        marketRateEstimate: 25000000,
        description: 'नेपालकै सर्वाधिक महँगो व्यापारिक केन्द्र'
      },
      {
        roadType: 'नयाँ बानेश्वर तथा माइतीघर मुख्य सडक खण्ड',
        govRate: 7000000,
        marketRateEstimate: 18000000,
        description: 'संसद् भवन वरपर तथा मुख्य राजमार्ग'
      },
      {
        roadType: '१६ देखि २४ फिट सहायक कालोपत्रे सडक',
        govRate: 4500000,
        marketRateEstimate: 10000000,
        description: 'बानेश्वर, घट्टेकुलो, डिल्लीबजार भित्री आवासीय'
      },
      {
        roadType: '१० देखि १३ फिट गल्ली बाटो',
        govRate: 3000000,
        marketRateEstimate: 6500000,
        description: 'सहरिया भित्री गल्लीहरू'
      }
    ]
  },

  // Kathmandu - Chabahil
  {
    id: 'ktm-chabahil-01',
    district: 'काठमाडौँ',
    officeName: 'मालपोत कार्यालय चाबहिल',
    municipality: 'काठमाडौँ तथा बूढानीलकण्ठ (चाबहिल, बौद्ध, कपन, हात्तीगौँडा)',
    areaName: 'चाबहिल-बौद्ध-कपन करिडोर',
    unit: 'प्रति आना',
    rates: [
      {
        roadType: 'चाबहिल-जोरपाटी-साँखु मूल सडक खण्ड',
        govRate: 4800000,
        marketRateEstimate: 8500000,
        description: 'बौद्ध स्तुपा क्षेत्र तथा मुख्य सडक'
      },
      {
        roadType: 'कपन तथा बूढानीलकण्ठ मुख्य २० फिट पिच बाटो',
        govRate: 3000000,
        marketRateEstimate: 5500000,
        description: 'प्रमुख आवासीय तथा पर्यटकीय क्षेत्र'
      },
      {
        roadType: '१३ देखि १६ फिट ग्राभेल तथा ढलान बाटो',
        govRate: 2000000,
        marketRateEstimate: 3800000,
        description: 'कपन, चुनिखेल, मण्डिखाटार भित्री प्लटहरू'
      },
      {
        roadType: '१० देखि १२ फिट कच्ची बाटो',
        govRate: 1400000,
        marketRateEstimate: 2600000,
        description: 'नयाँ विकासोन्मुख क्षेत्र'
      }
    ]
  },

  // Lalitpur - Lagankhel
  {
    id: 'lalitpur-01',
    district: 'ललितपुर',
    officeName: 'मालपोत कार्यालय ललितपुर (लगनखेल)',
    municipality: 'ललितपुर महानगरपालिका (जावलाखेल, कुपण्डोल, पुल्चोक, सातदोबाटो)',
    areaName: 'ललितपुर कोर सिटी क्षेत्र',
    unit: 'प्रति आना',
    rates: [
      {
        roadType: 'कुपण्डोल-पुल्चोक-जावलाखेल मुख्य सडक',
        govRate: 7500000,
        marketRateEstimate: 16000000,
        description: 'ललितपुरको प्रमुख व्यापारिक तथा डिप्लोम्याटिक क्षेत्र'
      },
      {
        roadType: 'सातदोबाटो चक्रपथ तथा कुमारीपाटी सडक',
        govRate: 5500000,
        marketRateEstimate: 11000000,
        description: 'चक्रपथ जोडिएको प्राइम कमर्सियल'
      },
      {
        roadType: '१६ देखि २२ फिट पिच सडक (आवासीय)',
        govRate: 3800000,
        marketRateEstimate: 7000000,
        description: 'झम्सीखेल, सानेपा, इमाडोल मुख्य'
      },
      {
        roadType: '१३ देखि १६ फिट ग्राभेल बाटो',
        govRate: 2500000,
        marketRateEstimate: 4500000,
        description: 'इमाडोल, धापाखेल, भैँसेपाटी भित्री'
      },
      {
        roadType: '१० फिट बाटो वा गोरेटो',
        govRate: 1500000,
        marketRateEstimate: 2800000,
        description: 'भित्री बस्ती'
      }
    ]
  },

  // Bhaktapur
  {
    id: 'bhaktapur-01',
    district: 'भक्तपुर',
    officeName: 'मालपोत कार्यालय भक्तपुर',
    municipality: 'मध्यपुर थिमी तथा सूर्यविनायक (कौशल्टार, लोकन्थली, कटुञ्जे)',
    areaName: 'भक्तपुर अरनिको राजमार्ग करिडोर',
    unit: 'प्रति आना',
    rates: [
      {
        roadType: 'अरनिको ६ लेन राजमार्ग (Araniko 6-Lane Highway)',
        govRate: 5000000,
        marketRateEstimate: 9500000,
        description: 'लोकन्थली देखि सूर्यविनायक ६ लेन सडक जोडिएको'
      },
      {
        roadType: '१६ देखि २० फिट पक्की नगर सडक',
        govRate: 3000000,
        marketRateEstimate: 5500000,
        description: 'कौशल्टार, थिमी, सल्लाघारी भित्री पिच'
      },
      {
        roadType: '१३ देखि १६ फिट ग्राभेल बाटो',
        govRate: 2000000,
        marketRateEstimate: 3800000,
        description: 'चाँगुनारायण, दधिकोट, सिरुटार'
      },
      {
        roadType: '१० देखि १२ फिट कच्ची बाटो',
        govRate: 1200000,
        marketRateEstimate: 2400000,
        description: 'नयाँ प्लटिङ तथा ग्रामीण क्षेत्र'
      }
    ]
  },

  // Kaski / Pokhara
  {
    id: 'kaski-pokhara-01',
    district: 'कास्की',
    officeName: 'मालपोत कार्यालय कास्की (पोखरा)',
    municipality: 'पोखरा महानगरपालिका (लेकसाइड, न्यु रोड, महेन्द्रपुल, पृथ्वीचोक)',
    areaName: 'पोखरा नगर केन्द्र तथा पर्यटकीय क्षेत्र',
    unit: 'प्रति आना',
    rates: [
      {
        roadType: 'लेकसाइड मुख्य पर्यटकीय सडक (Lakeside Main Road)',
        govRate: 6000000,
        marketRateEstimate: 18000000,
        description: 'लेकसाइड फेवाताल किनार तथा होटेल जोन'
      },
      {
        roadType: 'न्यू रोड तथा महेन्द्रपुल मुख्य बजार',
        govRate: 5000000,
        marketRateEstimate: 14000000,
        description: 'पोखराको मुख्य व्यापारिक केन्द्र'
      },
      {
        roadType: '२० देखि ३० फिट नगर पिच बाटो',
        govRate: 3000000,
        marketRateEstimate: 6500000,
        description: 'बगर, रानीपौवा, नदीपुर, बिरौटा'
      },
      {
        roadType: '१४ देखि २० फिट ग्राभेल तथा ढलान',
        govRate: 1800000,
        marketRateEstimate: 4000000,
        description: 'आवासीय प्लटिङ क्षेत्रहरू'
      },
      {
        roadType: '१० फिट बाटो वा गोरेटो',
        govRate: 1000000,
        marketRateEstimate: 2200000,
        description: 'लेकाली तथा भित्री जग्गा'
      }
    ]
  },

  // Chitwan - Bharatpur
  {
    id: 'chitwan-bharatpur-01',
    district: 'चितवन',
    officeName: 'मालपोत कार्यालय चितवन (भरतपुर)',
    municipality: 'भरतपुर महानगरपालिका (चौबिसकोठी, नारायणगढ, लायन्सचोक)',
    areaName: 'भरतपुर-नारायणगढ सहरी क्षेत्र',
    unit: 'प्रति कट्ठा',
    rates: [
      {
        roadType: 'पूर्व-पश्चिम राजमार्ग तथा नारायणगढ बजार (Highway Commercial)',
        govRate: 35000000,
        marketRateEstimate: 70000000,
        description: 'नारायणगढ मुख्य बजार तथा चौबिसकोठी (प्रति कट्ठा रु. ३.५ करोड सरकारी दर)'
      },
      {
        roadType: 'भरतपुर नगरस्तरीय मुख्य पिच बाटो (३० देखि ५० फिट)',
        govRate: 18000000,
        marketRateEstimate: 35000000,
        description: 'हाकिमचोक, क्यान्सर अस्पताल रोड'
      },
      {
        roadType: '२० देखि ३० फिट पक्की बाटो (आवासीय)',
        govRate: 10000000,
        marketRateEstimate: 20000000,
        description: 'भरतपुर १०, ११, १२ का आवासीय बस्ती'
      },
      {
        roadType: '१६ देखि २० फिट ग्राभेल बाटो',
        govRate: 6000000,
        marketRateEstimate: 12000000,
        description: 'नयाँ प्लटिङ तथा उपमहानगर जोडिएका क्षेत्र'
      },
      {
        roadType: 'खेतीयोग्य नम्बरी जग्गा (कच्ची बाटो वा बाटो नभएको)',
        govRate: 3000000,
        marketRateEstimate: 6000000,
        description: 'कृषि क्षेत्रको नम्बरी जग्गा'
      }
    ]
  },

  // Rupandehi - Butwal
  {
    id: 'rupandehi-butwal-01',
    district: 'रूपन्देही',
    officeName: 'मालपोत कार्यालय बुटवल',
    municipality: 'बुटवल उपमहानगरपालिका (ट्राफिक चोक, राजमार्ग चौराहा, मिलनचोक)',
    areaName: 'बुटवल-तिलोत्तमा करिडोर',
    unit: 'प्रति कट्ठा',
    rates: [
      {
        roadType: 'सिद्धार्थ ६ लेन राजमार्ग (Siddhartha 6-Lane Highway)',
        govRate: 30000000,
        marketRateEstimate: 60000000,
        description: 'चौराहा देखि तिलोत्तमा ६ लेन सडक मोहोडा'
      },
      {
        roadType: 'नगरस्तरीय ३० देखि ४० फिट पिच सडक',
        govRate: 15000000,
        marketRateEstimate: 28000000,
        description: 'कालीका नगर, दीपनगर मुख्य सडक'
      },
      {
        roadType: '२० देखि २४ फिट आवासीय पिच बाटो',
        govRate: 9000000,
        marketRateEstimate: 16000000,
        description: 'बुटवल भित्री नगर'
      },
      {
        roadType: '१६ देखि २० फिट ग्राभेल बाटो',
        govRate: 5000000,
        marketRateEstimate: 10000000,
        description: 'नयाँ आवासीय प्लटिङ'
      }
    ]
  }
];
