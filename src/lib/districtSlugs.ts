export interface DistrictSlugInfo {
  slug: string;
  districtNp: string;
  districtEn: string;
  cityAliasesEn?: string;
  cityAliasesNp?: string;
}

export const DISTRICT_SLUGS: DistrictSlugInfo[] = [
  { slug: 'kathmandu', districtNp: 'काठमाडौँ', districtEn: 'Kathmandu', cityAliasesEn: 'Dillibazar, Kalanki, Chabahil, Tokha, Sankhu, Manamaiju', cityAliasesNp: 'डिल्लीबजार, कलंकी, चाबहिल, टोखा, साँखु' },
  { slug: 'lalitpur', districtNp: 'ललितपुर', districtEn: 'Lalitpur', cityAliasesEn: 'Lagankhel, Gotikhel', cityAliasesNp: 'लगनखेल, गोटीखेल' },
  { slug: 'bhaktapur', districtNp: 'भक्तपुर', districtEn: 'Bhaktapur' },
  { slug: 'kavrepalanchok', districtNp: 'काभ्रेपलाञ्चोक', districtEn: 'Kavrepalanchok', cityAliasesEn: 'Dhulikhel, Banepa', cityAliasesNp: 'धुलिखेल, बनेपा' },
  { slug: 'chitwan', districtNp: 'चितवन', districtEn: 'Chitwan', cityAliasesEn: 'Bharatpur, Ratnanagar, Khairahani, Madi', cityAliasesNp: 'भरतपुर, रत्ननगर, चनौली' },
  { slug: 'makwanpur', districtNp: 'मकवानपुर', districtEn: 'Makwanpur', cityAliasesEn: 'Hetauda', cityAliasesNp: 'हेटौँडा' },
  { slug: 'dhading', districtNp: 'धादिङ', districtEn: 'Dhading', cityAliasesEn: 'Dhading Besi', cityAliasesNp: 'धादिङबेसी' },
  { slug: 'nuwakot', districtNp: 'नुवाकोट', districtEn: 'Nuwakot', cityAliasesEn: 'Bidur', cityAliasesNp: 'बिदुर' },
  { slug: 'sindhupalchok', districtNp: 'सिन्धुपाल्चोक', districtEn: 'Sindhupalchok', cityAliasesEn: 'Chautara, Melamchi', cityAliasesNp: 'चौतारा, मेलम्ची' },
  { slug: 'dolakha', districtNp: 'दोलखा', districtEn: 'Dolakha', cityAliasesEn: 'Charikot', cityAliasesNp: 'चरिकोट' },
  { slug: 'ramechhap', districtNp: 'रामेछाप', districtEn: 'Ramechhap', cityAliasesEn: 'Manthali', cityAliasesNp: 'मन्थली' },
  { slug: 'sindhuli', districtNp: 'सिन्धुली', districtEn: 'Sindhuli', cityAliasesEn: 'Kamalamai', cityAliasesNp: 'सिन्धुलीमाढी' },
  { slug: 'rasuwa', districtNp: 'रसुवा', districtEn: 'Rasuwa', cityAliasesEn: 'Dhunche', cityAliasesNp: 'धुन्चे' },

  { slug: 'morang', districtNp: 'मोरङ', districtEn: 'Morang', cityAliasesEn: 'Biratnagar, Belbari, Rangeli, Urlabari', cityAliasesNp: 'विराटनगर, बेलबारी, रंगेली' },
  { slug: 'jhapa', districtNp: 'झापा', districtEn: 'Jhapa', cityAliasesEn: 'Bhadrapur, Damak, Birtamode', cityAliasesNp: 'भद्रपुर, दमक, बिर्तामोड' },
  { slug: 'sunsari', districtNp: 'सुनसरी', districtEn: 'Sunsari', cityAliasesEn: 'Inaruwa, Dharan, Itahari', cityAliasesNp: 'इनरुवा, धरान, इटहरी' },
  { slug: 'ilam', districtNp: 'इलाम', districtEn: 'Ilam', cityAliasesEn: 'Mangalbare', cityAliasesNp: 'मङ्गलबारे' },
  { slug: 'udayapur', districtNp: 'उदयपुर', districtEn: 'Udayapur', cityAliasesEn: 'Gaighat, Katari', cityAliasesNp: 'गाईघाट, कटारी' },
  { slug: 'dhankuta', districtNp: 'धनकुटा', districtEn: 'Dhankuta' },
  { slug: 'taplejung', districtNp: 'ताप्लेजुङ', districtEn: 'Taplejung', cityAliasesEn: 'Phungling', cityAliasesNp: 'फुङलिङ' },
  { slug: 'panchthar', districtNp: 'पाँचथर', districtEn: 'Panchthar', cityAliasesEn: 'Phidim', cityAliasesNp: 'फिदिम' },
  { slug: 'sankhuwasabha', districtNp: 'संखुवासभा', districtEn: 'Sankhuwasabha', cityAliasesEn: 'Khandbari, Chainpur', cityAliasesNp: 'खाँदबारी, चैनपुर' },
  { slug: 'bhojpur', districtNp: 'भोजपुर', districtEn: 'Bhojpur' },
  { slug: 'terhathum', districtNp: 'तेह्रथुम', districtEn: 'Terhathum', cityAliasesEn: 'Myanglung', cityAliasesNp: 'म्याङलुङ' },
  { slug: 'solukhumbu', districtNp: 'सोलुखुम्बु', districtEn: 'Solukhumbu', cityAliasesEn: 'Salleri', cityAliasesNp: 'सल्लेरी' },
  { slug: 'khotang', districtNp: 'खोटाङ', districtEn: 'Khotang', cityAliasesEn: 'Diktel', cityAliasesNp: 'दिक्तेल' },
  { slug: 'okhaldhunga', districtNp: 'ओखलढुङ्गा', districtEn: 'Okhaldhunga' },

  { slug: 'parsa', districtNp: 'पर्सा', districtEn: 'Parsa', cityAliasesEn: 'Birgunj, Pokhariya', cityAliasesNp: 'वीरगञ्ज, पोखरिया' },
  { slug: 'dhanusha', districtNp: 'धनुषा', districtEn: 'Dhanusha', cityAliasesEn: 'Janakpurdham, Janakpur', cityAliasesNp: 'जनकपुरधाम' },
  { slug: 'bara', districtNp: 'बारा', districtEn: 'Bara', cityAliasesEn: 'Kalaiya, Simraungadh', cityAliasesNp: 'कलैया, सिम्रौनगढ' },
  { slug: 'mahottari', districtNp: 'महोत्तरी', districtEn: 'Mahottari', cityAliasesEn: 'Jaleshwar, Bardibas, Gaushala', cityAliasesNp: 'जलेश्वर, बर्दिबास, गौशाला' },
  { slug: 'siraha', districtNp: 'सिरहा', districtEn: 'Siraha', cityAliasesEn: 'Lahan', cityAliasesNp: 'लहान' },
  { slug: 'saptari', districtNp: 'सप्तरी', districtEn: 'Saptari', cityAliasesEn: 'Rajbiraj, Bodebarsain, Kanchanpur', cityAliasesNp: 'राजविराज, कञ्चनपुर' },
  { slug: 'rautahat', districtNp: 'रौतहट', districtEn: 'Rautahat', cityAliasesEn: 'Gaur, Chandrapur, Garuda', cityAliasesNp: 'गौर, चन्द्रपुर, गरुडा' },
  { slug: 'sarlahi', districtNp: 'सर्लाही', districtEn: 'Sarlahi', cityAliasesEn: 'Malangwa, Harion, Barahathawa', cityAliasesNp: 'मलङ्गवा, हरिवन, बरहथवा' },

  { slug: 'kaski', districtNp: 'कास्की', districtEn: 'Kaski', cityAliasesEn: 'Pokhara, Lekhnath', cityAliasesNp: 'पोखरा, लेखनाथ' },
  { slug: 'tanahun', districtNp: 'तनहुँ', districtEn: 'Tanahun', cityAliasesEn: 'Damauli', cityAliasesNp: 'दमौली' },
  { slug: 'syangja', districtNp: 'स्याङ्जा', districtEn: 'Syangja', cityAliasesEn: 'Putalibazar, Waling, Chapakot', cityAliasesNp: 'पुतलीबजार, वालिङ, चापाकोट' },
  { slug: 'baglung', districtNp: 'बागलुङ', districtEn: 'Baglung', cityAliasesEn: 'Burtibang', cityAliasesNp: 'बुर्तिबाङ' },
  { slug: 'nawalparasi-east', districtNp: 'नवलपरासी (पूर्व)', districtEn: 'Nawalparasi East (Nawalpur)', cityAliasesEn: 'Kawasoti', cityAliasesNp: 'कावासोती, नवलपुर' },
  { slug: 'gorkha', districtNp: 'गोरखा', districtEn: 'Gorkha' },
  { slug: 'lamjung', districtNp: 'लमजुङ', districtEn: 'Lamjung', cityAliasesEn: 'Besisahar', cityAliasesNp: 'बेसीशहर' },
  { slug: 'parbat', districtNp: 'पर्वत', districtEn: 'Parbat', cityAliasesEn: 'Kusma', cityAliasesNp: 'कुश्मा' },
  { slug: 'myagdi', districtNp: 'म्याग्दी', districtEn: 'Myagdi', cityAliasesEn: 'Beni', cityAliasesNp: 'बेनी' },
  { slug: 'manang', districtNp: 'मनाङ', districtEn: 'Manang', cityAliasesEn: 'Chame', cityAliasesNp: 'चामे' },
  { slug: 'mustang', districtNp: 'मुस्ताङ', districtEn: 'Mustang', cityAliasesEn: 'Jomsom', cityAliasesNp: 'जोमसोम' },

  { slug: 'rupandehi', districtNp: 'रुपन्देही', districtEn: 'Rupandehi', cityAliasesEn: 'Butwal, Bhairahawa, Siddharthanagar', cityAliasesNp: 'बुटवल, भैरहवा' },
  { slug: 'banke', districtNp: 'बाँके', districtEn: 'Banke', cityAliasesEn: 'Nepalgunj', cityAliasesNp: 'नेपालगञ्ज' },
  { slug: 'dang', districtNp: 'दाङ', districtEn: 'Dang', cityAliasesEn: 'Ghorahi, Tulsipur, Lamahi', cityAliasesNp: 'घोराही, तुलसीपुर, लमही' },
  { slug: 'kapilvastu', districtNp: 'कपिलवस्तु', districtEn: 'Kapilvastu', cityAliasesEn: 'Taulihawa, Chandrauta', cityAliasesNp: 'तौलिहवा, चन्द्रौटा' },
  { slug: 'palpa', districtNp: 'पाल्पा', districtEn: 'Palpa', cityAliasesEn: 'Tansen, Rampur', cityAliasesNp: 'तानसेन, रामपुर' },
  { slug: 'nawalparasi-west', districtNp: 'नवलपरासी (पश्चिम)', districtEn: 'Nawalparasi West (Parasi)', cityAliasesEn: 'Parasi, Bardaghat', cityAliasesNp: 'परासी, बर्दघाट' },
  { slug: 'gulmi', districtNp: 'गुल्मी', districtEn: 'Gulmi', cityAliasesEn: 'Tamghas', cityAliasesNp: 'तम्घास' },
  { slug: 'arghakhanchi', districtNp: 'अर्घाखाँची', districtEn: 'Arghakhanchi', cityAliasesEn: 'Sandhikharka', cityAliasesNp: 'सन्धिखर्क' },
  { slug: 'pyuthan', districtNp: 'प्युठान', districtEn: 'Pyuthan', cityAliasesEn: 'Khalanga', cityAliasesNp: 'खलङ्गा' },
  { slug: 'rolpa', districtNp: 'रोल्पा', districtEn: 'Rolpa', cityAliasesEn: 'Liwang', cityAliasesNp: 'लिवाङ' },
  { slug: 'bardiya', districtNp: 'बर्दिया', districtEn: 'Bardiya', cityAliasesEn: 'Gulariya, Rajapur, Bansgadhi', cityAliasesNp: 'गुलरिया, राजापुर, बाँसगढी' },
  { slug: 'rukum-east', districtNp: 'रुकुम (पूर्व)', districtEn: 'Rukum East', cityAliasesEn: 'Rukumkot', cityAliasesNp: 'रुकुमकोट' },

  { slug: 'surkhet', districtNp: 'सुर्खेत', districtEn: 'Surkhet', cityAliasesEn: 'Birendranagar, Mehalkuna', cityAliasesNp: 'वीरेन्द्रनगर, मेहेलकुना' },
  { slug: 'dailekh', districtNp: 'दैलेख', districtEn: 'Dailekh' },
  { slug: 'jumla', districtNp: 'जुम्ला', districtEn: 'Jumla', cityAliasesEn: 'Chandannath', cityAliasesNp: 'चन्दननाथ' },
  { slug: 'salyan', districtNp: 'सल्यान', districtEn: 'Salyan', cityAliasesEn: 'Khalanga', cityAliasesNp: 'खलङ्गा' },
  { slug: 'dolpa', districtNp: 'डोल्पा', districtEn: 'Dolpa', cityAliasesEn: 'Dunai', cityAliasesNp: 'दुनै' },
  { slug: 'mugu', districtNp: 'मुगु', districtEn: 'Mugu', cityAliasesEn: 'Gamgadhi', cityAliasesNp: 'गमगढी' },
  { slug: 'kalikot', districtNp: 'कालिकोट', districtEn: 'Kalikot', cityAliasesEn: 'Manma', cityAliasesNp: 'मान्म' },
  { slug: 'humla', districtNp: 'हुम्ला', districtEn: 'Humla', cityAliasesEn: 'Simikot', cityAliasesNp: 'सिमकोट' },
  { slug: 'jajarkot', districtNp: 'जाजरकोट', districtEn: 'Jajarkot', cityAliasesEn: 'Khalanga', cityAliasesNp: 'खलङ्गा' },
  { slug: 'rukum-west', districtNp: 'रुकुम (पश्चिम)', districtEn: 'Rukum West', cityAliasesEn: 'Musikot', cityAliasesNp: 'मुसीकोट' },

  { slug: 'kailali', districtNp: 'कैलाली', districtEn: 'Kailali', cityAliasesEn: 'Dhangadhi, Tikapur, Lamki, Bhajani', cityAliasesNp: 'धनगढी, टीकापुर, लम्की' },
  { slug: 'kanchanpur', districtNp: 'कञ्चनपुर', districtEn: 'Kanchanpur', cityAliasesEn: 'Mahendranagar, Bhimdatta, Belauri', cityAliasesNp: 'महेन्द्रनगर, बेलौरी' },
  { slug: 'doti', districtNp: 'डोटी', districtEn: 'Doti', cityAliasesEn: 'Silgadhi, Dipayal', cityAliasesNp: 'सिलगढी, दिपायल' },
  { slug: 'dadeldhura', districtNp: 'डडेल्धुरा', districtEn: 'Dadeldhura', cityAliasesEn: 'Amargadhi, Jogbudha', cityAliasesNp: 'अमरगढी, जोगबुढा' },
  { slug: 'bajura', districtNp: 'बाजुरा', districtEn: 'Bajura', cityAliasesEn: 'Martadi', cityAliasesNp: 'मार्तडी' },
  { slug: 'achham', districtNp: 'अछाम', districtEn: 'Achham', cityAliasesEn: 'Mangalsen, Sanphebagar', cityAliasesNp: 'मंगलसेन, साँफेबगर' },
  { slug: 'bajhang', districtNp: 'बझाङ', districtEn: 'Bajhang', cityAliasesEn: 'Chainpur', cityAliasesNp: 'चैनपुर' },
  { slug: 'darchula', districtNp: 'दार्चुला', districtEn: 'Darchula', cityAliasesEn: 'Khalanga', cityAliasesNp: 'खलङ्गा' },
  { slug: 'baitadi', districtNp: 'बैतडी', districtEn: 'Baitadi', cityAliasesEn: 'Dasharathchand, Patan', cityAliasesNp: 'दशरथचन्द, पाटन' },
];

export function getDistrictSlugByNp(districtNp: string): DistrictSlugInfo | undefined {
  return DISTRICT_SLUGS.find((d) => d.districtNp === districtNp);
}

export function getDistrictBySlug(slug: string): DistrictSlugInfo | undefined {
  return DISTRICT_SLUGS.find((d) => d.slug === slug);
}
