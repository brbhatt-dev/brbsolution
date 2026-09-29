// @ts-ignore
import NepaliDate from 'nepali-date-converter';
import { toNepaliDigits, nepaliMonths, nepaliDays } from './nepaliDate';

export type HolidayCategory = 'festival' | 'public_holiday' | 'national_day' | 'observance';

export interface NepaliHolidayItem {
  id: string;
  nameNepali: string;
  nameEn: string;
  bsYear: number;
  bsMonth: number; // 1-12 (1: Baisakh, 6: Ashwin, 7: Kartik, etc.)
  bsDay: number;
  isPublicHoliday: boolean;
  category: HolidayCategory;
  icon: string; // Emoji or theme icon
  description: string;
  // Computed fields at runtime:
  daysRemaining?: number;
  adDateString?: string;
  dayOfWeek?: string;
  formattedBsDate?: string;
}

// Comprehensive Nepali Festivals & Public Holidays Database for 2081, 2082, 2083, 2084 BS
export const NEPALI_HOLIDAYS_DATA: Omit<NepaliHolidayItem, 'daysRemaining' | 'adDateString' | 'dayOfWeek' | 'formattedBsDate'>[] = [
  // ==========================================
  // YEAR 2081 BS (2024-2025 AD)
  // ==========================================
  { id: '2081-new-year', nameNepali: 'नयाँ वर्ष २०८१', nameEn: 'Nepali New Year 2081', bsYear: 2081, bsMonth: 1, bsDay: 1, isPublicHoliday: true, category: 'national_day', icon: '🎉', description: 'नेपाली नयाँ वर्ष तथा मेष संक्रान्ति' },
  { id: '2081-matatirtha', nameNepali: 'मातातीर्थ औंसी', nameEn: 'Mothers Day', bsYear: 2081, bsMonth: 1, bsDay: 26, isPublicHoliday: false, category: 'festival', icon: '🌸', description: 'आमाको मुख हेर्ने पावन दिन' },
  { id: '2081-labour-day', nameNepali: 'विश्व मजदुर दिवस', nameEn: 'Labour Day', bsYear: 2081, bsMonth: 1, bsDay: 19, isPublicHoliday: true, category: 'national_day', icon: '⚒️', description: 'अन्तर्राष्ट्रिय श्रमिक दिवस' },
  { id: '2081-buddha-jayanti', nameNepali: 'बुद्ध जयन्ती / उभौली पर्व', nameEn: 'Buddha Jayanti / Ubhauli', bsYear: 2081, bsMonth: 2, bsDay: 10, isPublicHoliday: true, category: 'festival', icon: '☸️', description: 'भगवान बुद्धको २५६८ औं जन्मजयन्ती' },
  { id: '2081-republic-day', nameNepali: 'गणतन्त्र दिवस', nameEn: 'Republic Day', bsYear: 2081, bsMonth: 2, bsDay: 15, isPublicHoliday: true, category: 'national_day', icon: '🇳🇵', description: 'नेपाल गणतन्त्र दिवस' },
  { id: '2081-dhan-diwas', nameNepali: 'राष्ट्रिय धान दिवस', nameEn: 'National Paddy Day', bsYear: 2081, bsMonth: 3, bsDay: 15, isPublicHoliday: false, category: 'observance', icon: '🌾', description: 'दही चिउरा खाने दिन तथा रोपाइँ महोत्सव' },
  { id: '2081-janai-purnima', nameNepali: 'जनैपूर्णिमा / रक्षाबन्धन', nameEn: 'Janai Purnima / Raksha Bandhan', bsYear: 2081, bsMonth: 5, bsDay: 3, isPublicHoliday: true, category: 'festival', icon: '🧵', description: 'क्वाँटी खाने तथा पवित्र रक्षाबन्धन डोरो बाँध्ने दिन' },
  { id: '2081-gai-jatra', nameNepali: 'गाईजात्रा', nameEn: 'Gai Jatra', bsYear: 2081, bsMonth: 5, bsDay: 4, isPublicHoliday: false, category: 'festival', icon: '🎭', description: 'काठमाडौं उपत्यकामा मनाइने परम्परागत हास्यव्यङ्ग्य जात्रा' },
  { id: '2081-krishna-janmashtami', nameNepali: 'श्रीकृष्ण जन्माष्टमी', nameEn: 'Krishna Janmashtami', bsYear: 2081, bsMonth: 5, bsDay: 10, isPublicHoliday: true, category: 'festival', icon: '🦚', description: 'भगवान श्रीकृष्णको जन्मोत्सव' },
  { id: '2081-kushe-aunsi', nameNepali: 'कुशे औंसी (बुबाको मुख हेर्ने)', nameEn: 'Fathers Day (Kushe Aunsi)', bsYear: 2081, bsMonth: 5, bsDay: 18, isPublicHoliday: false, category: 'festival', icon: '🌿', description: 'कुश भित्र्याउने तथा पिताको सम्मान गर्ने दिन' },
  { id: '2081-teej', nameNepali: 'हरितालिका तीज', nameEn: 'Haritalika Teej', bsYear: 2081, bsMonth: 5, bsDay: 21, isPublicHoliday: true, category: 'festival', icon: '💃', description: 'महिलाहरूको महान् पर्व हरितालिका तीज' },
  { id: '2081-rishi-panchami', nameNepali: 'ऋषिपञ्चमी', nameEn: 'Rishi Panchami', bsYear: 2081, bsMonth: 5, bsDay: 23, isPublicHoliday: false, category: 'festival', icon: '🕉️', description: 'सप्तर्षिको पूजाआजा तथा अपामार्ग स्नान' },
  { id: '2081-indra-jatra', nameNepali: 'इन्द्रजात्रा', nameEn: 'Indra Jatra', bsYear: 2081, bsMonth: 6, bsDay: 1, isPublicHoliday: false, category: 'festival', icon: '🚩', description: 'वर्षा र सहकालका देवता इन्द्रको रथयात्रा' },
  { id: '2081-constitution-day', nameNepali: 'संविधान दिवस', nameEn: 'Constitution Day', bsYear: 2081, bsMonth: 6, bsDay: 3, isPublicHoliday: true, category: 'national_day', icon: '📜', description: 'राष्ट्रिय दिवस तथा संविधान जारी भएको दिन' },
  { id: '2081-ghatasthapana', nameNepali: 'घटस्थापना (बडा दशैं प्रारम्भ)', nameEn: 'Ghatasthapana', bsYear: 2081, bsMonth: 6, bsDay: 17, isPublicHoliday: true, category: 'festival', icon: '🌱', description: 'जमरा राखी नवरात्रिको पहिलो दिन आरम्भ' },
  { id: '2081-phulpati', nameNepali: 'फूलपाती', nameEn: 'Phulpati (Dashain)', bsYear: 2081, bsMonth: 6, bsDay: 24, isPublicHoliday: true, category: 'festival', icon: '🍃', description: 'बडा दशैंको सातौं दिन फूलपाती भित्र्याउने दिन' },
  { id: '2081-maha-ashtami', nameNepali: 'महाअष्टमी (कालरात्रि)', nameEn: 'Maha Ashtami', bsYear: 2081, bsMonth: 6, bsDay: 25, isPublicHoliday: true, category: 'festival', icon: '⚔️', description: 'दुर्गा भवानीको विशेष पूजा तथा कालरात्रि' },
  { id: '2081-maha-navami', nameNepali: 'महानवमी', nameEn: 'Maha Navami', bsYear: 2081, bsMonth: 6, bsDay: 26, isPublicHoliday: true, category: 'festival', icon: '🛡️', description: 'शस्त्र पूजा, कुभिन्डो बलि तथा नवदुर्गा पूजा' },
  { id: '2081-vijaya-dashami', nameNepali: 'विजयादशमी (बडा दशैं टिका)', nameEn: 'Vijaya Dashami', bsYear: 2081, bsMonth: 6, bsDay: 27, isPublicHoliday: true, category: 'festival', icon: '🌾', description: 'रातो टिका र समृद्धिको जमरा लगाउने मुख्य दिन' },
  { id: '2081-kojagrat-purnima', nameNepali: 'कोजाग्रत पूर्णिमा', nameEn: 'Kojagrat Purnima', bsYear: 2081, bsMonth: 7, bsDay: 1, isPublicHoliday: true, category: 'festival', icon: '🌕', description: 'बडा दशैंको औपचारिक समापन' },
  { id: '2081-kaag-tihar', nameNepali: 'काग तिहार / धनतेरस', nameEn: 'Kaag Tihar / Dhanteras', bsYear: 2081, bsMonth: 7, bsDay: 13, isPublicHoliday: false, category: 'festival', icon: '🪙', description: 'यमराजको दूत कागको पूजा तथा धनतेरस' },
  { id: '2081-kukur-tihar', nameNepali: 'कुकुर तिहार / नरक चतुर्दशी', nameEn: 'Kukur Tihar', bsYear: 2081, bsMonth: 7, bsDay: 14, isPublicHoliday: false, category: 'festival', icon: '🐕', description: 'मानवको वफादार मित्र कुकुरको पूजा' },
  { id: '2081-laxmi-puja', nameNepali: 'लक्ष्मीपूजा (दीपावली)', nameEn: 'Laxmi Puja (Diwali)', bsYear: 2081, bsMonth: 7, bsDay: 15, isPublicHoliday: true, category: 'festival', icon: '🪔', description: 'धनधान्यकी देवी महालक्ष्मीको भव्य पूजा' },
  { id: '2081-govardhan-puja', nameNepali: 'गोवर्धन पूजा / म्ह: पूजा', nameEn: 'Govardhan / Mha Puja', bsYear: 2081, bsMonth: 7, bsDay: 16, isPublicHoliday: true, category: 'festival', icon: '🐂', description: 'गोवर्धन पर्वत, गाई-गोरु पूजा तथा नेपाल संवत् ११४५' },
  { id: '2081-bhai-tika', nameNepali: 'भाइटीका (किजापूजा)', nameEn: 'Bhai Tika', bsYear: 2081, bsMonth: 7, bsDay: 18, isPublicHoliday: true, category: 'festival', icon: '✨', description: 'दिदीबहिनी र दाजुभाइबीचको आत्मीय सप्तरङ्गी टिका' },
  { id: '2081-chhath', nameNepali: 'छठ पर्व', nameEn: 'Chhath Parva', bsYear: 2081, bsMonth: 7, bsDay: 22, isPublicHoliday: true, category: 'festival', icon: '🌅', description: 'अस्ताउँदो र उदाउँदो सूर्यदेवलाई अर्घ्य दिने महापर्व' },
  { id: '2081-udhauli', nameNepali: 'उधौली पर्व / योमरी पुन्ही', nameEn: 'Udhauli / Yomari Punhi', bsYear: 2081, bsMonth: 8, bsDay: 30, isPublicHoliday: true, category: 'festival', icon: '🥟', description: 'किराँत समुदायको उधौली तथा नेवार समुदायको योमरी पुन्ही' },
  { id: '2081-tamu-lhosar', nameNepali: 'तमु ल्होसार', nameEn: 'Tamu Lhosar', bsYear: 2081, bsMonth: 9, bsDay: 15, isPublicHoliday: true, category: 'festival', icon: '🎊', description: 'गुरुङ समुदायको महान् नयाँ वर्ष पर्व' },
  { id: '2081-prithvi-jayanti', nameNepali: 'पृथ्वी जयन्ती / राष्ट्रिय एकता दिवस', nameEn: 'National Unity Day', bsYear: 2081, bsMonth: 9, bsDay: 27, isPublicHoliday: true, category: 'national_day', icon: '👑', description: 'नेपाल एकीकरणकर्ता पृथ्वीनारायण शाहको जन्मजयन्ती' },
  { id: '2081-maghe-sankranti', nameNepali: 'माघे संक्रान्ति / मकर संक्रान्ति', nameEn: 'Maghe Sankranti', bsYear: 2081, bsMonth: 10, bsDay: 1, isPublicHoliday: true, category: 'festival', icon: '🍠', description: 'घिउ, चाकु, तरुल, तिलको लड्डु खाने संक्रान्ति' },
  { id: '2081-sahid-diwas', nameNepali: 'सहिद दिवस', nameEn: 'Martyrs Day', bsYear: 2081, bsMonth: 10, bsDay: 16, isPublicHoliday: false, category: 'national_day', icon: '🕯️', description: 'अमर सहिदहरूको त्यागको स्मरण' },
  { id: '2081-sonam-lhosar', nameNepali: 'सोनाम ल्होसार', nameEn: 'Sonam Lhosar', bsYear: 2081, bsMonth: 10, bsDay: 16, isPublicHoliday: true, category: 'festival', icon: '🐉', description: 'तामाङ समुदायको नयाँ वर्ष ल्होसार' },
  { id: '2081-saraswati-puja', nameNepali: 'सरस्वती पूजा (श्रीपञ्चमी)', nameEn: 'Saraswati Puja', bsYear: 2081, bsMonth: 10, bsDay: 21, isPublicHoliday: false, category: 'festival', icon: '📚', description: 'विद्याकी देवी सरस्वतीको पूजा तथा अक्षरारम्भ' },
  { id: '2081-prajatantra-diwas', nameNepali: 'राष्ट्रिय प्रजातन्त्र दिवस', nameEn: 'Democracy Day', bsYear: 2081, bsMonth: 11, bsDay: 7, isPublicHoliday: true, category: 'national_day', icon: '🗽', description: 'वि.सं. २००७ को ऐतिहासिक प्रजातन्त्र दिवस' },
  { id: '2081-maha-shivaratri', nameNepali: 'महाशिवरात्रि', nameEn: 'Maha Shivaratri', bsYear: 2081, bsMonth: 11, bsDay: 14, isPublicHoliday: true, category: 'festival', icon: '🔱', description: 'भगवान् शिवको पावन रात्रि तथा पशुपतिनाथमा महामेला' },
  { id: '2081-gyalpo-lhosar', nameNepali: 'ग्याल्पो ल्होसार', nameEn: 'Gyalpo Lhosar', bsYear: 2081, bsMonth: 11, bsDay: 16, isPublicHoliday: true, category: 'festival', icon: '🏔️', description: 'शेर्पा समुदायको परम्परागत नयाँ वर्ष' },
  { id: '2081-holi-pahad', nameNepali: 'फागु पूर्णिमा (होली पहाड)', nameEn: 'Holi Festival (Hills)', bsYear: 2081, bsMonth: 11, bsDay: 29, isPublicHoliday: true, category: 'festival', icon: '🎨', description: 'रङ्गहरूको पर्व फागु पूर्णिमा पहाडी जिल्ला' },
  { id: '2081-holi-terai', nameNepali: 'होली (तराई/मधेश)', nameEn: 'Holi Festival (Terai)', bsYear: 2081, bsMonth: 11, bsDay: 30, isPublicHoliday: true, category: 'festival', icon: '🌈', description: 'तराई तथा मधेशका जिल्लाहरूमा रङ्गोत्सव' },
  { id: '2081-ghode-jatra', nameNepali: 'घोडे जात्रा', nameEn: 'Ghode Jatra', bsYear: 2081, bsMonth: 12, bsDay: 15, isPublicHoliday: false, category: 'festival', icon: '🐎', description: 'काठमाडौंको टुँडिखेलमा मनाइने परम्परागत घोडे जात्रा' },
  { id: '2081-chaite-dashain', nameNepali: 'चैते दशैं', nameEn: 'Chaite Dashain', bsYear: 2081, bsMonth: 12, bsDay: 23, isPublicHoliday: false, category: 'festival', icon: '🌾', description: 'चैत्र शुक्ल अष्टमीको सानो दशैं' },
  { id: '2081-ram-navami', nameNepali: 'राम नवमी', nameEn: 'Ram Navami', bsYear: 2081, bsMonth: 12, bsDay: 24, isPublicHoliday: true, category: 'festival', icon: '🏹', description: 'मर्यादा पुरुषोत्तम भगवान श्री रामको जन्मोत्सव' },

  // ==========================================
  // YEAR 2082 BS (2025-2026 AD)
  // ==========================================
  { id: '2082-new-year', nameNepali: 'नयाँ वर्ष २०८२', nameEn: 'Nepali New Year 2082', bsYear: 2082, bsMonth: 1, bsDay: 1, isPublicHoliday: true, category: 'national_day', icon: '🎉', description: 'वि.सं. २०८२ को पहिलो दिन नयाँ वर्ष' },
  { id: '2082-matatirtha', nameNepali: 'मातातीर्थ औंसी', nameEn: 'Mothers Day', bsYear: 2082, bsMonth: 1, bsDay: 12, isPublicHoliday: false, category: 'festival', icon: '🌸', description: 'आमाप्रति श्रद्धा र सम्मान व्यक्त गर्ने दिन' },
  { id: '2082-labour-day', nameNepali: 'अन्तर्राष्ट्रिय मजदुर दिवस', nameEn: 'Labour Day', bsYear: 2082, bsMonth: 1, bsDay: 18, isPublicHoliday: true, category: 'national_day', icon: '⚒️', description: 'श्रमिक अधिकार दिवस' },
  { id: '2082-buddha-jayanti', nameNepali: 'बुद्ध जयन्ती / उभौली पर्व', nameEn: 'Buddha Jayanti / Ubhauli', bsYear: 2082, bsMonth: 1, bsDay: 29, isPublicHoliday: true, category: 'festival', icon: '☸️', description: 'भगवान् बुद्धको २५६९ औं जन्मजयन्ती' },
  { id: '2082-republic-day', nameNepali: 'गणतन्त्र दिवस', nameEn: 'Republic Day', bsYear: 2082, bsMonth: 2, bsDay: 15, isPublicHoliday: true, category: 'national_day', icon: '🇳🇵', description: 'नेपालको १७ औं गणतन्त्र दिवस' },
  { id: '2082-dhan-diwas', nameNepali: 'राष्ट्रिय धान दिवस', nameEn: 'National Paddy Day', bsYear: 2082, bsMonth: 3, bsDay: 15, isPublicHoliday: false, category: 'observance', icon: '🌾', description: 'असार १५, दही चिउरा खाने दिन' },
  { id: '2082-janai-purnima', nameNepali: 'जनैपूर्णिमा / रक्षाबन्धन', nameEn: 'Janai Purnima', bsYear: 2082, bsMonth: 4, bsDay: 24, isPublicHoliday: true, category: 'festival', icon: '🧵', description: 'रक्षाबन्धन तथा क्वाँटी खाने चाड' },
  { id: '2082-gai-jatra', nameNepali: 'गाईजात्रा', nameEn: 'Gai Jatra', bsYear: 2082, bsMonth: 4, bsDay: 25, isPublicHoliday: false, category: 'festival', icon: '🎭', description: 'काठमाडौं उपत्यकामा मनाइने ऐतिहासिक जात्रा' },
  { id: '2082-krishna-janmashtami', nameNepali: 'श्रीकृष्ण जन्माष्टमी', nameEn: 'Krishna Janmashtami', bsYear: 2082, bsMonth: 4, bsDay: 31, isPublicHoliday: true, category: 'festival', icon: '🦚', description: 'श्रीकृष्ण जन्मोत्सव' },
  { id: '2082-kushe-aunsi', nameNepali: 'कुशे औंसी (बुबाको मुख हेर्ने)', nameEn: 'Fathers Day', bsYear: 2082, bsMonth: 5, bsDay: 6, isPublicHoliday: false, category: 'festival', icon: '🌿', description: 'पिताको सम्मान तथा कुश भित्र्याउने दिन' },
  { id: '2082-teej', nameNepali: 'हरितालिका तीज', nameEn: 'Haritalika Teej', bsYear: 2082, bsMonth: 5, bsDay: 10, isPublicHoliday: true, category: 'festival', icon: '💃', description: 'महिलाहरूको महान् व्रत तथा उत्सव' },
  { id: '2082-rishi-panchami', nameNepali: 'ऋषिपञ्चमी', nameEn: 'Rishi Panchami', bsYear: 2082, bsMonth: 5, bsDay: 12, isPublicHoliday: false, category: 'festival', icon: '🕉️', description: 'ऋषि पूजन' },
  { id: '2082-constitution-day', nameNepali: 'संविधान दिवस', nameEn: 'Constitution Day', bsYear: 2082, bsMonth: 6, bsDay: 3, isPublicHoliday: true, category: 'national_day', icon: '📜', description: 'नेपालको राष्ट्रिय दिवस' },
  { id: '2082-ghatasthapana', nameNepali: 'घटस्थापना (बडा दशैं सुरु)', nameEn: 'Ghatasthapana', bsYear: 2082, bsMonth: 6, bsDay: 6, isPublicHoliday: true, category: 'festival', icon: '🌱', description: 'जमरा राखी नवरात्रिको आरम्भ' },
  { id: '2082-phulpati', nameNepali: 'फूलपाती', nameEn: 'Phulpati', bsYear: 2082, bsMonth: 6, bsDay: 13, isPublicHoliday: true, category: 'festival', icon: '🍃', description: 'बडा दशैंको फूलपाती' },
  { id: '2082-maha-ashtami', nameNepali: 'महाअष्टमी', nameEn: 'Maha Ashtami', bsYear: 2082, bsMonth: 6, bsDay: 14, isPublicHoliday: true, category: 'festival', icon: '⚔️', description: 'महाअष्टमी कालरात्रि पूजा' },
  { id: '2082-maha-navami', nameNepali: 'महानवमी', nameEn: 'Maha Navami', bsYear: 2082, bsMonth: 6, bsDay: 15, isPublicHoliday: true, category: 'festival', icon: '🛡️', description: 'शस्त्र पूजा तथा महानवमी' },
  { id: '2082-vijaya-dashami', nameNepali: 'विजयादशमी (बडा दशैं)', nameEn: 'Vijaya Dashami', bsYear: 2082, bsMonth: 6, bsDay: 16, isPublicHoliday: true, category: 'festival', icon: '🌾', description: 'मान्यजनबाट रातो टिका र जमरा ग्रहण गर्ने मुख्य दिन' },
  { id: '2082-kojagrat-purnima', nameNepali: 'कोजाग्रत पूर्णिमा', nameEn: 'Kojagrat Purnima', bsYear: 2082, bsMonth: 6, bsDay: 21, isPublicHoliday: true, category: 'festival', icon: '🌕', description: 'दशैंको समापन पूर्णिमा' },
  { id: '2082-kaag-tihar', nameNepali: 'काग तिहार / धनतेरस', nameEn: 'Kaag Tihar / Dhanteras', bsYear: 2082, bsMonth: 7, bsDay: 1, isPublicHoliday: false, category: 'festival', icon: '🪙', description: 'यमपञ्चक प्रारम्भ तथा धनतेरस' },
  { id: '2082-kukur-tihar', nameNepali: 'कुकुर तिहार', nameEn: 'Kukur Tihar', bsYear: 2082, bsMonth: 7, bsDay: 2, isPublicHoliday: false, category: 'festival', icon: '🐕', description: 'कुकुर पूजा' },
  { id: '2082-laxmi-puja', nameNepali: 'लक्ष्मीपूजा (दीपावली)', nameEn: 'Laxmi Puja (Diwali)', bsYear: 2082, bsMonth: 7, bsDay: 3, isPublicHoliday: true, category: 'festival', icon: '🪔', description: 'धनकी देवी महालक्ष्मीको भव्य पूजा' },
  { id: '2082-govardhan-puja', nameNepali: 'गोवर्धन पूजा / म्ह: पूजा', nameEn: 'Govardhan / Mha Puja', bsYear: 2082, bsMonth: 7, bsDay: 4, isPublicHoliday: true, category: 'festival', icon: '🐂', description: 'गोवर्धन पूजा तथा नेपाल संवत् ११४६' },
  { id: '2082-bhai-tika', nameNepali: 'भाइटीका (यमद्वितीया)', nameEn: 'Bhai Tika', bsYear: 2082, bsMonth: 7, bsDay: 6, isPublicHoliday: true, category: 'festival', icon: '✨', description: 'दाजुभाइ र दिदीबहिनीको महान् स्नेह पर्व' },
  { id: '2082-chhath', nameNepali: 'छठ पर्व', nameEn: 'Chhath Parva', bsYear: 2082, bsMonth: 7, bsDay: 10, isPublicHoliday: true, category: 'festival', icon: '🌅', description: 'सूर्य उपासनाको महापर्व' },
  { id: '2082-udhauli', nameNepali: 'उधौली पर्व / योमरी पुन्ही', nameEn: 'Udhauli / Yomari Punhi', bsYear: 2082, bsMonth: 8, bsDay: 19, isPublicHoliday: true, category: 'festival', icon: '🥟', description: 'उधौली तथा योमरी पुन्ही' },
  { id: '2082-tamu-lhosar', nameNepali: 'तमु ल्होसार', nameEn: 'Tamu Lhosar', bsYear: 2082, bsMonth: 9, bsDay: 15, isPublicHoliday: true, category: 'festival', icon: '🎊', description: 'गुरुङ ल्होसार' },
  { id: '2082-prithvi-jayanti', nameNepali: 'पृथ्वी जयन्ती / राष्ट्रिय एकता दिवस', nameEn: 'National Unity Day', bsYear: 2082, bsMonth: 9, bsDay: 27, isPublicHoliday: true, category: 'national_day', icon: '👑', description: 'राष्ट्रिय एकता दिवस' },
  { id: '2082-maghe-sankranti', nameNepali: 'माघे संक्रान्ति', nameEn: 'Maghe Sankranti', bsYear: 2082, bsMonth: 10, bsDay: 1, isPublicHoliday: true, category: 'festival', icon: '🍠', description: 'मकर संक्रान्ति तथा माघी' },
  { id: '2082-sonam-lhosar', nameNepali: 'सोनाम ल्होसार', nameEn: 'Sonam Lhosar', bsYear: 2082, bsMonth: 10, bsDay: 5, isPublicHoliday: true, category: 'festival', icon: '🐉', description: 'तामाङ नयाँ वर्ष' },
  { id: '2082-saraswati-puja', nameNepali: 'सरस्वती पूजा (श्रीपञ्चमी)', nameEn: 'Saraswati Puja', bsYear: 2082, bsMonth: 10, bsDay: 9, isPublicHoliday: false, category: 'festival', icon: '📚', description: 'विद्याकी देवी सरस्वती पूजा' },
  { id: '2082-prajatantra-diwas', nameNepali: 'प्रजातन्त्र दिवस', nameEn: 'Democracy Day', bsYear: 2082, bsMonth: 11, bsDay: 7, isPublicHoliday: true, category: 'national_day', icon: '🗽', description: 'राष्ट्रिय प्रजातन्त्र दिवस' },
  { id: '2082-maha-shivaratri', nameNepali: 'महाशिवरात्रि', nameEn: 'Maha Shivaratri', bsYear: 2082, bsMonth: 11, bsDay: 4, isPublicHoliday: true, category: 'festival', icon: '🔱', description: 'पशुपतिनाथमा महाशिवरात्रि मेला' },
  { id: '2082-gyalpo-lhosar', nameNepali: 'ग्याल्पो ल्होसार', nameEn: 'Gyalpo Lhosar', bsYear: 2082, bsMonth: 11, bsDay: 6, isPublicHoliday: true, category: 'festival', icon: '🏔️', description: 'शेर्पा समुदायको नयाँ वर्ष' },
  { id: '2082-holi-pahad', nameNepali: 'फागु पूर्णिमा (होली पहाड)', nameEn: 'Holi Festival (Hills)', bsYear: 2082, bsMonth: 11, bsDay: 17, isPublicHoliday: true, category: 'festival', icon: '🎨', description: 'रङ्गहरूको उत्सव होली' },
  { id: '2082-holi-terai', nameNepali: 'होली (तराई/मधेश)', nameEn: 'Holi Festival (Terai)', bsYear: 2082, bsMonth: 11, bsDay: 18, isPublicHoliday: true, category: 'festival', icon: '🌈', description: 'तराई होली' },
  { id: '2082-ghode-jatra', nameNepali: 'घोडे जात्रा', nameEn: 'Ghode Jatra', bsYear: 2082, bsMonth: 12, bsDay: 4, isPublicHoliday: false, category: 'festival', icon: '🐎', description: 'काठमाडौंमा घोडे जात्रा' },
  { id: '2082-ram-navami', nameNepali: 'राम नवमी / चैते दशैं', nameEn: 'Ram Navami', bsYear: 2082, bsMonth: 12, bsDay: 13, isPublicHoliday: true, category: 'festival', icon: '🏹', description: 'राम नवमी तथा चैते दशैं' },

  // ==========================================
  // YEAR 2083 BS (2026-2027 AD) - CURRENT YEAR
  // ==========================================
  { id: '2083-new-year', nameNepali: 'नयाँ वर्ष २०८३', nameEn: 'Nepali New Year 2083', bsYear: 2083, bsMonth: 1, bsDay: 1, isPublicHoliday: true, category: 'national_day', icon: '🎉', description: 'वि.सं. २०८३ नयाँ वर्षको शुभकामना' },
  { id: '2083-matatirtha', nameNepali: 'मातातीर्थ औंसी', nameEn: 'Mothers Day', bsYear: 2083, bsMonth: 1, bsDay: 1, isPublicHoliday: false, category: 'festival', icon: '🌸', description: 'आमाको मुख हेर्ने पावन दिन' },
  { id: '2083-labour-day', nameNepali: 'मजदुर दिवस', nameEn: 'Labour Day', bsYear: 2083, bsMonth: 1, bsDay: 18, isPublicHoliday: true, category: 'national_day', icon: '⚒️', description: 'अन्तर्राष्ट्रिय श्रमिक दिवस' },
  { id: '2083-buddha-jayanti', nameNepali: 'बुद्ध जयन्ती / उभौली पर्व', nameEn: 'Buddha Jayanti / Ubhauli', bsYear: 2083, bsMonth: 1, bsDay: 18, isPublicHoliday: true, category: 'festival', icon: '☸️', description: 'भगवान् बुद्धको पावन जन्मोत्सव' },
  { id: '2083-republic-day', nameNepali: 'गणतन्त्र दिवस', nameEn: 'Republic Day', bsYear: 2083, bsMonth: 2, bsDay: 15, isPublicHoliday: true, category: 'national_day', icon: '🇳🇵', description: 'नेपाल गणतन्त्र दिवस' },
  { id: '2083-dhan-diwas', nameNepali: 'राष्ट्रिय धान दिवस', nameEn: 'National Paddy Day', bsYear: 2083, bsMonth: 3, bsDay: 15, isPublicHoliday: false, category: 'observance', icon: '🌾', description: 'दही चिउरा खाने दिन तथा रोपाइँ महोत्सव' },
  { id: '2083-janai-purnima', nameNepali: 'जनैपूर्णिमा / रक्षाबन्धन', nameEn: 'Janai Purnima / Raksha Bandhan', bsYear: 2083, bsMonth: 4, bsDay: 12, isPublicHoliday: true, category: 'festival', icon: '🧵', description: 'पवित्र रक्षाबन्धन डोरो तथा क्वाँटी खाने दिन' },
  { id: '2083-gai-jatra', nameNepali: 'गाईजात्रा', nameEn: 'Gai Jatra', bsYear: 2083, bsMonth: 4, bsDay: 13, isPublicHoliday: false, category: 'festival', icon: '🎭', description: 'काठमाडौं उपत्यकाको ऐतिहासिक गाईजात्रा' },
  { id: '2083-krishna-janmashtami', nameNepali: 'श्रीकृष्ण जन्माष्टमी', nameEn: 'Krishna Janmashtami', bsYear: 2083, bsMonth: 4, bsDay: 20, isPublicHoliday: true, category: 'festival', icon: '🦚', description: 'भगवान श्रीकृष्णको पावन जन्मोत्सव' },
  { id: '2083-kushe-aunsi', nameNepali: 'कुशे औंसी (बुबाको मुख हेर्ने)', nameEn: 'Fathers Day (Kushe Aunsi)', bsYear: 2083, bsMonth: 5, bsDay: 24, isPublicHoliday: false, category: 'festival', icon: '🌿', description: 'कुश भित्र्याउने तथा बुबाको मुख हेर्ने दिन' },
  { id: '2083-teej', nameNepali: 'हरितालिका तीज', nameEn: 'Haritalika Teej', bsYear: 2083, bsMonth: 5, bsDay: 28, isPublicHoliday: true, category: 'festival', icon: '💃', description: 'महिलाहरूको महान् पर्व हरितालिका तीज व्रत' },
  { id: '2083-rishi-panchami', nameNepali: 'ऋषिपञ्चमी', nameEn: 'Rishi Panchami', bsYear: 2083, bsMonth: 5, bsDay: 30, isPublicHoliday: false, category: 'festival', icon: '🕉️', description: 'सप्तर्षिको पूजाआजा तथा पावन स्नान' },
  { id: '2083-constitution-day', nameNepali: 'संविधान दिवस', nameEn: 'Constitution Day', bsYear: 2083, bsMonth: 6, bsDay: 3, isPublicHoliday: true, category: 'national_day', icon: '📜', description: 'राष्ट्रिय दिवस तथा संविधान जारी भएको दिन' },
  { id: '2083-indra-jatra', nameNepali: 'इन्द्रजात्रा', nameEn: 'Indra Jatra', bsYear: 2083, bsMonth: 6, bsDay: 9, isPublicHoliday: false, category: 'festival', icon: '🚩', description: 'काठमाडौंको जीवित देवी कुमारी तथा इन्द्र रथयात्रा' },
  { id: '2083-ghatasthapana', nameNepali: 'घटस्थापना (बडा दशैं आरम्भ)', nameEn: 'Ghatasthapana (Navaratri Starts)', bsYear: 2083, bsMonth: 6, bsDay: 26, isPublicHoliday: true, category: 'festival', icon: '🌱', description: 'जमरा राखी नवरात्रिको पहिलो दिन आरम्भ' },
  { id: '2083-phulpati', nameNepali: 'फूलपाती', nameEn: 'Phulpati (Dashain)', bsYear: 2083, bsMonth: 7, bsDay: 1, isPublicHoliday: true, category: 'festival', icon: '🍃', description: 'बडा दशैंको सातौं दिन फूलपाती भित्र्याउने दिन' },
  { id: '2083-maha-ashtami', nameNepali: 'महाअष्टमी (कालरात्रि)', nameEn: 'Maha Ashtami', bsYear: 2083, bsMonth: 7, bsDay: 2, isPublicHoliday: true, category: 'festival', icon: '⚔️', description: 'दुर्गा भवानीको विशेष पूजा तथा कालरात्रि' },
  { id: '2083-maha-navami', nameNepali: 'महानवमी', nameEn: 'Maha Navami', bsYear: 2083, bsMonth: 7, bsDay: 3, isPublicHoliday: true, category: 'festival', icon: '🛡️', description: 'शस्त्र पूजा, कुभिन्डो बलि तथा नवदुर्गा पूजा' },
  { id: '2083-vijaya-dashami', nameNepali: 'विजयादशमी (बडा दशैं टिका)', nameEn: 'Vijaya Dashami (Bada Dashain)', bsYear: 2083, bsMonth: 7, bsDay: 4, isPublicHoliday: true, category: 'festival', icon: '🌾', description: 'रातो टिका र समृद्धिको पहेँलो जमरा लगाउने मुख्य दिन' },
  { id: '2083-kojagrat-purnima', nameNepali: 'कोजाग्रत पूर्णिमा', nameEn: 'Kojagrat Purnima', bsYear: 2083, bsMonth: 7, bsDay: 9, isPublicHoliday: true, category: 'festival', icon: '🌕', description: 'बडा दशैंको औपचारिक समापन' },
  { id: '2083-kaag-tihar', nameNepali: 'काग तिहार / धनतेरस', nameEn: 'Kaag Tihar / Dhanteras', bsYear: 2083, bsMonth: 7, bsDay: 21, isPublicHoliday: false, category: 'festival', icon: '🪙', description: 'यमपञ्चक प्रारम्भ, काग पूजा तथा धनतेरस' },
  { id: '2083-kukur-tihar', nameNepali: 'कुकुर तिहार / नरक चतुर्दशी', nameEn: 'Kukur Tihar', bsYear: 2083, bsMonth: 7, bsDay: 22, isPublicHoliday: false, category: 'festival', icon: '🐕', description: 'इमान्दार मित्र कुकुरको पूजा' },
  { id: '2083-laxmi-puja', nameNepali: 'लक्ष्मीपूजा (दीपावली)', nameEn: 'Laxmi Puja (Diwali)', bsYear: 2083, bsMonth: 7, bsDay: 23, isPublicHoliday: true, category: 'festival', icon: '🪔', description: 'धनधान्यकी देवी महालक्ष्मीको भव्य पूजा तथा दीपमालिका' },
  { id: '2083-govardhan-puja', nameNepali: 'गोवर्धन पूजा / म्ह: पूजा', nameEn: 'Govardhan / Mha Puja', bsYear: 2083, bsMonth: 7, bsDay: 24, isPublicHoliday: true, category: 'festival', icon: '🐂', description: 'गोवर्धन पर्वत, गाई-गोरु पूजा तथा नेपाल संवत् ११४७ प्रारम्भ' },
  { id: '2083-bhai-tika', nameNepali: 'भाइटीका (किजापूजा)', nameEn: 'Bhai Tika', bsYear: 2083, bsMonth: 7, bsDay: 25, isPublicHoliday: true, category: 'festival', icon: '✨', description: 'दिदीबहिनी र दाजुभाइबीचको आत्मीय सप्तरङ्गी टिका' },
  { id: '2083-chhath', nameNepali: 'छठ पर्व', nameEn: 'Chhath Parva', bsYear: 2083, bsMonth: 7, bsDay: 29, isPublicHoliday: true, category: 'festival', icon: '🌅', description: 'अस्ताउँदो र उदाउँदो सूर्यदेवलाई अर्घ्य दिने महापर्व' },
  { id: '2083-udhauli', nameNepali: 'उधौली पर्व / योमरी पुन्ही', nameEn: 'Udhauli / Yomari Punhi', bsYear: 2083, bsMonth: 8, bsDay: 8, isPublicHoliday: true, category: 'festival', icon: '🥟', description: 'किराँत समुदायको उधौली तथा नेवार समुदायको योमरी पुन्ही' },
  { id: '2083-tamu-lhosar', nameNepali: 'तमु ल्होसार', nameEn: 'Tamu Lhosar', bsYear: 2083, bsMonth: 9, bsDay: 15, isPublicHoliday: true, category: 'festival', icon: '🎊', description: 'गुरुङ समुदायको महान् नयाँ वर्ष पर्व' },
  { id: '2083-prithvi-jayanti', nameNepali: 'पृथ्वी जयन्ती / राष्ट्रिय एकता दिवस', nameEn: 'National Unity Day', bsYear: 2083, bsMonth: 9, bsDay: 27, isPublicHoliday: true, category: 'national_day', icon: '👑', description: 'नेपाल एकीकरणकर्ता पृथ्वीनारायण शाहको जन्मजयन्ती' },
  { id: '2083-maghe-sankranti', nameNepali: 'माघे संक्रान्ति / मकर संक्रान्ति', nameEn: 'Maghe Sankranti', bsYear: 2083, bsMonth: 10, bsDay: 1, isPublicHoliday: true, category: 'festival', icon: '🍠', description: 'घिउ, चाकु, तरुल, तिलको लड्डु खाने संक्रान्ति' },
  { id: '2083-sahid-diwas', nameNepali: 'सहिद दिवस', nameEn: 'Martyrs Day', bsYear: 2083, bsMonth: 10, bsDay: 16, isPublicHoliday: false, category: 'national_day', icon: '🕯️', description: 'अमर सहिदहरूको त्यागको स्मरण' },
  { id: '2083-sonam-lhosar', nameNepali: 'सोनाम ल्होसार', nameEn: 'Sonam Lhosar', bsYear: 2083, bsMonth: 10, bsDay: 26, isPublicHoliday: true, category: 'festival', icon: '🐉', description: 'तामाङ समुदायको नयाँ वर्ष ल्होसार' },
  { id: '2083-saraswati-puja', nameNepali: 'सरस्वती पूजा (श्रीपञ्चमी)', nameEn: 'Saraswati Puja', bsYear: 2083, bsMonth: 11, bsDay: 1, isPublicHoliday: false, category: 'festival', icon: '📚', description: 'विद्याकी देवी सरस्वतीको पूजा तथा अक्षरारम्भ' },
  { id: '2083-prajatantra-diwas', nameNepali: 'राष्ट्रिय प्रजातन्त्र दिवस', nameEn: 'Democracy Day', bsYear: 2083, bsMonth: 11, bsDay: 7, isPublicHoliday: true, category: 'national_day', icon: '🗽', description: 'वि.सं. २००७ को ऐतिहासिक प्रजातन्त्र दिवस' },
  { id: '2083-maha-shivaratri', nameNepali: 'महाशिवरात्रि', nameEn: 'Maha Shivaratri', bsYear: 2083, bsMonth: 11, bsDay: 22, isPublicHoliday: true, category: 'festival', icon: '🔱', description: 'भगवान् शिवको पावन रात्रि तथा पशुपतिनाथमा महामेला' },
  { id: '2083-mahila-diwas', nameNepali: 'अन्तर्राष्ट्रिय महिला दिवस', nameEn: 'International Womens Day', bsYear: 2083, bsMonth: 11, bsDay: 24, isPublicHoliday: true, category: 'national_day', icon: '🌸', description: 'नारी अधिकार तथा महिला सशक्तिकरण दिवस' },
  { id: '2083-gyalpo-lhosar', nameNepali: 'ग्याल्पो ल्होसार', nameEn: 'Gyalpo Lhosar', bsYear: 2083, bsMonth: 11, bsDay: 24, isPublicHoliday: true, category: 'festival', icon: '🏔️', description: 'शेर्पा समुदायको परम्परागत नयाँ वर्ष' },
  { id: '2083-holi-pahad', nameNepali: 'फागु पूर्णिमा (होली पहाड)', nameEn: 'Holi Festival (Hills)', bsYear: 2083, bsMonth: 12, bsDay: 8, isPublicHoliday: true, category: 'festival', icon: '🎨', description: 'रङ्गहरूको पर्व फागु पूर्णिमा पहाडी जिल्ला' },
  { id: '2083-holi-terai', nameNepali: 'होली (तराई/मधेश)', nameEn: 'Holi Festival (Terai)', bsYear: 2083, bsMonth: 12, bsDay: 9, isPublicHoliday: true, category: 'festival', icon: '🌈', description: 'तराई तथा मधेशका जिल्लाहरूमा रङ्गोत्सव' },
  { id: '2083-ghode-jatra', nameNepali: 'घोडे जात्रा', nameEn: 'Ghode Jatra', bsYear: 2083, bsMonth: 12, bsDay: 23, isPublicHoliday: false, category: 'festival', icon: '🐎', description: 'काठमाडौंको टुँडिखेलमा मनाइने परम्परागत घोडे जात्रा' },
  { id: '2083-chaite-dashain', nameNepali: 'चैते दशैं / राम नवमी', nameEn: 'Chaite Dashain & Ram Navami', bsYear: 2083, bsMonth: 12, bsDay: 31, isPublicHoliday: true, category: 'festival', icon: '🏹', description: 'चैते दशैं तथा मर्यादा पुरुषोत्तम श्री रामको जन्मोत्सव' },

  // ==========================================
  // YEAR 2084 BS (2027-2028 AD)
  // ==========================================
  { id: '2084-new-year', nameNepali: 'नयाँ वर्ष २०८४', nameEn: 'Nepali New Year 2084', bsYear: 2084, bsMonth: 1, bsDay: 1, isPublicHoliday: true, category: 'national_day', icon: '🎉', description: 'वि.सं. २०८४ नयाँ वर्षको मंगलमय शुभकामना' },
  { id: '2084-labour-day', nameNepali: 'मजदुर दिवस', nameEn: 'Labour Day', bsYear: 2084, bsMonth: 1, bsDay: 18, isPublicHoliday: true, category: 'national_day', icon: '⚒️', description: 'अन्तर्राष्ट्रिय श्रमिक दिवस' },
  { id: '2084-buddha-jayanti', nameNepali: 'बुद्ध जयन्ती / उभौली पर्व', nameEn: 'Buddha Jayanti / Ubhauli', bsYear: 2084, bsMonth: 1, bsDay: 25, isPublicHoliday: true, category: 'festival', icon: '☸️', description: 'भगवान् बुद्धको पावन जन्मोत्सव' },
  { id: '2084-republic-day', nameNepali: 'गणतन्त्र दिवस', nameEn: 'Republic Day', bsYear: 2084, bsMonth: 2, bsDay: 15, isPublicHoliday: true, category: 'national_day', icon: '🇳🇵', description: 'नेपाल गणतन्त्र दिवस' }
];

/**
 * Calculates remaining days between today's local date and target BS date
 */
export function calculateDaysRemaining(
  today: Date,
  bsYear: number,
  bsMonth: number,
  bsDay: number
): { daysRemaining: number; jsDate: Date } {
  try {
    const NepaliDateConstructor = (NepaliDate as any).default || NepaliDate;
    const targetBS = new NepaliDateConstructor(bsYear, bsMonth - 1, bsDay);
    const targetJS = targetBS.toJsDate();

    // Normalize to midnight UTC/Local
    const todayZero = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const targetZero = new Date(targetJS.getFullYear(), targetJS.getMonth(), targetJS.getDate());

    const diffMs = targetZero.getTime() - todayZero.getTime();
    const daysRemaining = Math.round(diffMs / (1000 * 60 * 60 * 24));
    return { daysRemaining, jsDate: targetJS };
  } catch (err) {
    return { daysRemaining: -999, jsDate: new Date() };
  }
}

/**
 * Formats days remaining into natural Nepali text
 */
export function formatDaysRemaining(days: number): string {
  if (days < 0) return 'सकियो (Past)';
  if (days === 0) return 'आजै हो! (Today)';
  if (days === 1) return 'भोलि (Tomorrow)';
  if (days === 2) return 'पर्सि (In 2 days)';
  return `${toNepaliDigits(days)} दिन बाँकी`;
}

/**
 * Returns formatted BS date string like "असोज २६ गते"
 */
export function formatEventBsDate(bsMonth: number, bsDay: number): string {
  const mName = nepaliMonths[bsMonth - 1] || 'महिना';
  const dFormatted = bsDay < 10 ? `०${toNepaliDigits(bsDay)}` : toNepaliDigits(bsDay);
  return `${mName} ${dFormatted} गते`;
}

/**
 * Returns upcoming holidays and festivals starting from today
 */
export function getUpcomingHolidays(today = new Date(), limit = 6): NepaliHolidayItem[] {
  let bsYear = 2083;
  try {
    const NepaliDateConstructor = (NepaliDate as any).default || NepaliDate;
    const currentBS = new NepaliDateConstructor(today);
    bsYear = currentBS.getYear();
  } catch {
    bsYear = 2083;
  }

  // Filter events of current year and next year
  const candidateEvents = NEPALI_HOLIDAYS_DATA.filter(
    (item) => item.bsYear === bsYear || item.bsYear === bsYear + 1
  );

  const enrichedEvents: NepaliHolidayItem[] = candidateEvents
    .map((item) => {
      const { daysRemaining, jsDate } = calculateDaysRemaining(
        today,
        item.bsYear,
        item.bsMonth,
        item.bsDay
      );
      const dayIndex = jsDate.getDay();
      const dayOfWeek = nepaliDays[dayIndex] || '';
      const adDateString = jsDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
      const formattedBsDate = formatEventBsDate(item.bsMonth, item.bsDay);

      return {
        ...item,
        daysRemaining,
        adDateString,
        dayOfWeek,
        formattedBsDate
      };
    })
    .filter((item) => (item.daysRemaining !== undefined ? item.daysRemaining >= 0 : false))
    .sort((a, b) => (a.daysRemaining ?? 0) - (b.daysRemaining ?? 0));

  return enrichedEvents.slice(0, limit);
}

/**
 * Returns all holidays for a given BS Year (e.g. 2081, 2082, 2083) with enriched days countdown
 */
export function getAllHolidaysForYear(bsYear: number, today = new Date()): NepaliHolidayItem[] {
  const events = NEPALI_HOLIDAYS_DATA.filter((item) => item.bsYear === bsYear);

  return events.map((item) => {
    const { daysRemaining, jsDate } = calculateDaysRemaining(
      today,
      item.bsYear,
      item.bsMonth,
      item.bsDay
    );
    const dayIndex = jsDate.getDay();
    const dayOfWeek = nepaliDays[dayIndex] || '';
    const adDateString = jsDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    const formattedBsDate = formatEventBsDate(item.bsMonth, item.bsDay);

    return {
      ...item,
      daysRemaining,
      adDateString,
      dayOfWeek,
      formattedBsDate
    };
  });
}
