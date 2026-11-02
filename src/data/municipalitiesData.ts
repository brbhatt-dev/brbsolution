export interface MunicipalityByeLaw {
  id: string;
  name: string;
  type: 'महानगरपालिका' | 'उपमहानगरपालिका' | 'नगरपालिका';
  district: string;
  province: string;
  roadWidthMinMeters: number;
  roadWidthMinFeet: number;
  frontSetbackM: number;
  sideSetbackM: number;
  rearSetbackM: number;
  maxGroundCoveragePercent: number;
  maxFar: number;
  highTensionSetbackM: string;
  gharBatoFee: string;
  ebpsPortal: string;
  specialRules: string[];
}

export const MUNICIPALITIES_BYELAWS: MunicipalityByeLaw[] = [
  {
    id: 'kathmandu',
    name: 'काठमाडौँ महानगरपालिका',
    type: 'महानगरपालिका',
    district: 'काठमाडौँ',
    province: 'बागमती प्रदेश',
    roadWidthMinMeters: 6,
    roadWidthMinFeet: 19.7,
    frontSetbackM: 1.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 70,
    maxFar: 3.0,
    highTensionSetbackM: '६६ KV: ६ मिटर, १३२ KV: ९ मिटर, २२० KV: १५ मिटर',
    gharBatoFee: 'प्रति निवेदन रु. १,५०० देखि ३,००० (सडकको प्रकृति अनुसार)',
    ebpsPortal: 'ebps.kathmandu.gov.np',
    specialRules: [
      'साँधतर्फ झ्याल वा भेन्टिलेटर राख्न कम्तीमा १.५ मिटर (५ फिट) सेतब्याक अनिवार्य',
      '८ मिटर भन्दा कम बाटोमा ३ तला भन्दा अग्लो आवासीय घर बनाउन नपाइने',
      'पुरातात्विक तथा कोर सिटी क्षेत्रमा परम्परागत नेपाली नेवारी वास्तुकला अनिवार्य'
    ]
  },
  {
    id: 'pokhara',
    name: 'पोखरा महानगरपालिका',
    type: 'महानगरपालिका',
    district: 'कास्की',
    province: 'गण्डकी प्रदेश',
    roadWidthMinMeters: 6,
    roadWidthMinFeet: 19.7,
    frontSetbackM: 2.0,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 60,
    maxFar: 2.5,
    highTensionSetbackM: '१३२ KV: ९ मिटर',
    gharBatoFee: 'रु. १,००० देखि २,५००',
    ebpsPortal: 'ebps.pokharamun.gov.np',
    specialRules: [
      'फेवाताल किनारबाट ६५ मिटर मापदण्डभित्र कुनै पनि स्थायी संरचना बनाउन निषेध',
      'सेती नदी खोँच (Gorge) बाट कम्तीमा ५० मिटर सेतब्याक अनिवार्य',
      'लेकसाइड पर्यटकीय क्षेत्रमा होटेल तथा रिसोर्टका लागि छुट्टै मापदण्ड'
    ]
  },
  {
    id: 'lalitpur',
    name: 'ललितपुर महानगरपालिका',
    type: 'महानगरपालिका',
    district: 'ललितपुर',
    province: 'बागमती प्रदेश',
    roadWidthMinMeters: 6,
    roadWidthMinFeet: 19.7,
    frontSetbackM: 1.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 70,
    maxFar: 2.75,
    highTensionSetbackM: '६६ KV: ६ मिटर, १३२ KV: ९ मिटर',
    gharBatoFee: 'रु. १,५०० देखि ३,०००',
    ebpsPortal: 'ebps.lalitpurmun.gov.np',
    specialRules: [
      'पाटन दरबार क्षेत्र वरपर ३ तला भन्दा अग्लो भवन निर्माण गर्न निषेध',
      'ढल निकास र बर्खाको पानी संकलन (Rainwater Harvesting) अनिवार्य'
    ]
  },
  {
    id: 'bharatpur',
    name: 'भरतपुर महानगरपालिका',
    type: 'महानगरपालिका',
    district: 'चितवन',
    province: 'बागमती प्रदेश',
    roadWidthMinMeters: 8,
    roadWidthMinFeet: 26.2,
    frontSetbackM: 3.0,
    sideSetbackM: 1.5,
    rearSetbackM: 2.0,
    maxGroundCoveragePercent: 60,
    maxFar: 2.5,
    highTensionSetbackM: '१३२ KV: ९ मिटर',
    gharBatoFee: 'रु. १,००० देखि २,०००',
    ebpsPortal: 'ebps.bharatpurmun.gov.np',
    specialRules: [
      'तराईको सहरी क्षेत्र भएकाले नयाँ प्लटिङमा न्यूनतम बाटो चौडाइ ८ मिटर अनिवार्य',
      'नारायणी नदी तटीय क्षेत्रमा बाढी नियन्त्रण सेतब्याक कायम गर्नुपर्ने'
    ]
  },
  {
    id: 'butwal',
    name: 'बुटवल उपमहानगरपालिका',
    type: 'उपमहानगरपालिका',
    district: 'रूपन्देही',
    province: 'लुम्बिनी प्रदेश',
    roadWidthMinMeters: 8,
    roadWidthMinFeet: 26.2,
    frontSetbackM: 3.0,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 65,
    maxFar: 2.5,
    highTensionSetbackM: '१३२ KV: ९ मिटर',
    gharBatoFee: 'रु. १,००० देखि २,०००',
    ebpsPortal: 'ebps.butwalmun.gov.np',
    specialRules: [
      'सिद्धार्थ राजमार्ग ६ लेन छेउमा भवन निर्माण गर्दा ३१ मिटर सेन्टरलाइन सेतब्याक',
      'तिनाउ नदी किनारमा ग्रिनबेल्ट र भू-क्षय नियन्त्रण मापदण्ड लागू'
    ]
  },
  {
    id: 'birgunj',
    name: 'वीरगञ्ज महानगरपालिका',
    type: 'महानगरपालिका',
    district: 'पर्सा',
    province: 'मधेश प्रदेश',
    roadWidthMinMeters: 8,
    roadWidthMinFeet: 26.2,
    frontSetbackM: 2.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 70,
    maxFar: 3.0,
    highTensionSetbackM: '१३२ KV: ९ मिटर',
    gharBatoFee: 'रु. १,२०० देखि २,०००',
    ebpsPortal: 'ebps.birgunjmun.gov.np',
    specialRules: [
      'व्यापारिक तथा औद्योगिक करिडोरमा बेसमेन्ट पार्किङ अनिवार्य',
      'सुक्खा बन्दरगाह (Dry Port) लिंक सडकमा विशेष सेतब्याक'
    ]
  },
  {
    id: 'biratnagar',
    name: 'विराटनगर महानगरपालिका',
    type: 'महानगरपालिका',
    district: 'मोरङ',
    province: 'कोशी प्रदेश',
    roadWidthMinMeters: 8,
    roadWidthMinFeet: 26.2,
    frontSetbackM: 2.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 65,
    maxFar: 2.75,
    highTensionSetbackM: '१३२ KV: ९ मिटर',
    gharBatoFee: 'रु. १,००० देखि २,०००',
    ebpsPortal: 'ebps.biratnagarmun.gov.np',
    specialRules: [
      'मुख्य ६ लेन व्यापारिक मार्गमा अगाडिको सेतब्याक ५ मिटर अनिवार्य',
      'आवासीय बस्तीमा ढल निकास संरचना पूर्वशर्त'
    ]
  },
  {
    id: 'dharan',
    name: 'धरान उपमहानगरपालिका',
    type: 'उपमहानगरपालिका',
    district: 'सुनसरी',
    province: 'कोशी प्रदेश',
    roadWidthMinMeters: 6,
    roadWidthMinFeet: 19.7,
    frontSetbackM: 2.0,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 60,
    maxFar: 2.5,
    highTensionSetbackM: '६६ KV: ६ मिटर',
    gharBatoFee: 'रु. १,००० देखि १,५००',
    ebpsPortal: 'ebps.dharan.gov.np',
    specialRules: [
      'भिरालो पहाडी जमिनमा रिटेनिङ वाल र माटो स्थिरीकरण अनिवार्य',
      'सर्दु र सेउती जलाधार क्षेत्रमा विशेष निर्माण प्रतिबन्ध'
    ]
  },
  {
    id: 'bhaktapur',
    name: 'भक्तपुर नगरपालिका',
    type: 'नगरपालिका',
    district: 'भक्तपुर',
    province: 'बागमती प्रदेश',
    roadWidthMinMeters: 6,
    roadWidthMinFeet: 19.7,
    frontSetbackM: 1.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 70,
    maxFar: 2.5,
    highTensionSetbackM: '६६ KV: ६ मिटर',
    gharBatoFee: 'रु. १,००० देखि २,०००',
    ebpsPortal: 'ebps.bhaktapurmun.gov.np',
    specialRules: [
      'विश्व सम्पदा सूची क्षेत्रमा घरको बाहिरी मोहोडामा दाँची अप्पा (झिँगटी इँटा) र काठका बुट्टेदार झ्याल अनिवार्य',
      '३५ फिट (करिब ४ तला) भन्दा अग्लो भवन बनाउन पूर्ण प्रतिबन्ध'
    ]
  },
  {
    id: 'hetauda',
    name: 'हेटौँडा उपमहानगरपालिका',
    type: 'उपमहानगरपालिका',
    district: 'मकवानपुर',
    province: 'बागमती प्रदेश',
    roadWidthMinMeters: 8,
    roadWidthMinFeet: 26.2,
    frontSetbackM: 2.5,
    sideSetbackM: 1.5,
    rearSetbackM: 1.5,
    maxGroundCoveragePercent: 65,
    maxFar: 2.5,
    highTensionSetbackM: '१३२ KV: ९ मिटर, २२० KV: १५ मिटर',
    gharBatoFee: 'रु. १,००० देखि २,०००',
    ebpsPortal: 'ebps.hetaudamun.gov.np',
    specialRules: [
      'हेटौँडा औद्योगिक क्षेत्र वरपर ध्वनि र वातावरणीय मापदण्ड',
      'त्रिभुवन तथा कान्ति लोकपथ राजमार्ग छेउमा अनिवार्य निर्माण सीमा'
    ]
  }
];
