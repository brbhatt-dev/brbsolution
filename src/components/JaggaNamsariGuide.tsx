'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  FileText, 
  CheckCircle2, 
  Circle, 
  Copy, 
  Check, 
  Printer, 
  RotateCcw, 
  AlertTriangle, 
  Building2, 
  ShieldCheck, 
  ChevronRight,
  Info,
  Scale,
  Download
} from 'lucide-react';
import { copyToClipboard } from '@/lib/clipboard';

type NamsariType = 'joint' | 'single_consent' | 'partition_decree';
type TemplateKey = 'ward_app' | 'malpot_app' | 'consent_deed';

interface ChecklistDoc {
  id: string;
  nameNp: string;
  descNp: string;
  authority: string;
}

export default function JaggaNamsariGuide() {
  const [namsariType, setNamsariType] = useState<NamsariType>('joint');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [activeTemplate, setActiveTemplate] = useState<TemplateKey>('malpot_app');
  const [copied, setCopied] = useState<boolean>(false);

  const docsList: ChecklistDoc[] = [
    {
      id: 'death_cert',
      nameNp: 'मृतकको मृत्यु दर्ता प्रमाणपत्र (सक्कल र प्रतिलिपि)',
      descNp: 'स्थानीय वडा कार्यालयका पञ्जिकाधिकारीबाट जारी भएको आधिकारिक मृत्यु दर्ता प्रमाणपत्र।',
      authority: 'सम्बन्धित वडा कार्यालय',
    },
    {
      id: 'relation_cert',
      nameNp: 'पारिवारिक नाता प्रमाणित प्रमाणपत्र',
      descNp: 'मृतकसँग हकवालाहरूको नाता सम्बन्ध स्पष्ट खुल्ने स्थानीय वडा कार्यालयको आधिकारिक सिफारिस।',
      authority: 'सम्बन्धित वडा कार्यालय',
    },
    {
      id: 'sarjamin_muchulka',
      nameNp: 'वडा स्तरीय सर्जमिन मुचुल्का (सँधियार तथा जनप्रतिनिधि रोहवर)',
      descNp: 'मृतकका अन्य हकवाला भए नभएको यकिन गर्न वडाले स्थानीय सँधियार र साक्षीहरूको रोहवरमा तयार पारेको स्थलगत मुचुल्का।',
      authority: 'सम्बन्धित वडा कार्यालय',
    },
    {
      id: 'citizenship',
      nameNp: 'सबै हकवालाहरूको नागरिकता प्रमाणपत्रको सक्कल र प्रतिलिपि',
      descNp: 'नामसारी माग गर्ने सबै अंशियार हकवालाहरूको सक्कल नागरिकता र स्पष्ट देखिने फोटोकपीहरू।',
      authority: 'हकवालाहरू आफैंसँग',
    },
    {
      id: 'lalpurja',
      nameNp: 'मृतकको नाममा रहेको सक्कल जग्गाधनी प्रमाणपुर्जा (लालपुर्जा)',
      descNp: 'नामसारी गर्नुपर्ने जग्गाको सक्कल पुर्जा। धितो रोक्का भए फुकुवा पत्र अनिवार्य हुन्छ।',
      authority: 'परिवारसँग',
    },
    {
      id: 'tax_clearance',
      nameNp: 'चालु आर्थिक वर्षसम्मको स्थानीय तह मालपोत/सम्पत्ति कर चुक्ता रसिद',
      descNp: 'वडा कार्यालयमा चालु आ.व. सम्मको सम्पूर्ण तिरो/कर भुक्तानी गरेको आधिकारिक रसिद।',
      authority: 'सम्बन्धित वडा कार्यालय',
    },
    {
      id: 'napi_trace',
      nameNp: 'नापी शाखाबाट प्रमाणित नक्सा ट्रेस (ब्लुप्रिन्ट) र फिल्डबुक उतार',
      descNp: 'कित्ताको क्षेत्रफल, आकार र चार किल्ला यकिन गर्न नापी कार्यालयबाट जारी प्रमाणित नक्सा।',
      authority: 'सम्बन्धित नापी कार्यालय',
    },
  ];

  if (namsariType === 'single_consent') {
    docsList.push({
      id: 'consent_paper',
      nameNp: 'अन्य सम्पूर्ण हकवालाहरूको लिखित मञ्जुरीनामा / सहमति लिखत',
      descNp: 'एकजनाको नाममा नामसारी गर्न बाँकी हकवालाहरू आफैं मालपोत उपस्थित भएर वा प्रमाणित मञ्जुरीनामा पत्र बुझाउनुपर्ने।',
      authority: 'मालपोत कार्यालय / वडा',
    });
  }

  if (namsariType === 'partition_decree') {
    docsList.push({
      id: 'court_decree',
      nameNp: 'अंशबण्डाको प्रमाणित लिखत वा अदालतको फैसला/मिलापत्रको प्रतिलिपि',
      descNp: 'अंशबण्डा भइसकेको वा अदालतबाट मिलापत्र/फैसला भएको आधिकारिक प्रमाण।',
      authority: 'सम्बन्धित अदालत / मालपोत',
    });
  }

  const completedCount = docsList.filter((d) => checkedDocs[d.id]).length;
  const progressPercent = Math.round((completedCount / docsList.length) * 100);

  const toggleDoc = (id: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Templates
  const templates: Record<TemplateKey, { title: string; content: string }> = {
    malpot_app: {
      title: 'मालपोत कार्यालयमा जग्गा नामसारी (दाखिल खारेज) निवेदन ढाँचा',
      content: `श्रीमान् प्रमुख मालपोत अधिकृतज्यू,
भूमिसुधार तथा मालपोत कार्यालय,
........................, ........................।

विषय: जग्गा नामसारी (दाखिल खारेज) गरी पाऊँ।

महोदय,
उपरोक्त विषयमा मेरो/हाम्रो .................... (नाता) श्री ........................................ (मृतकको नाम) को मिति २०...../...../..... मा मृत्यु भएको हुँदा निजको नाममा दर्ता कायम रहेको तपसिल बमोजिमको जग्गा मुलुकी देवानी संहिता २०७४ तथा प्रचलित भूमिसुधार तथा मालपोत नियमावली अनुसार म/हामी हकवालाहरूको नाममा नामसारी (दाखिल खारेज) गरी नयाँ जग्गाधनी प्रमाणपुर्जा पाउन निम्न कागजातहरू संलग्न राखी यो निवेदन पेश गरेको छु/गरेका छौं।

तपसिल (जग्गाको विवरण):
१. जिल्ला: ....................  पालिका: ........................  वडा नं.: ......
२. कित्ता नं.: ................  क्षेत्रफल: ....................  सिट नं.: .........

हकवालाहरूको विवरण:
१. नाम, थर: ........................................  नाता: ....................  ना.प्र.नं.: ....................
२. नाम, थर: ........................................  नाता: ....................  ना.प्र.नं.: ....................

संलग्न कागजातहरू:
१. मृतकको मृत्यु दर्ता प्रमाणपत्रको प्रतिलिपि - १ प्रति
२. स्थानीय वडा कार्यालयको नाता प्रमाणित प्रमाणपत्र - १ प्रति
३. स्थानीय वडा कार्यालयको सर्जमिन मुचुल्का - १ प्रति
४. जग्गाको सक्कल जग्गाधनी प्रमाणपुर्जा (लालपुर्जा) - १ थान
५. चालु आ.व. को सम्पत्ति तथा मालपोत कर चुक्ता रसिद - १ प्रति
६. हकवालाहरूको नागरिकता प्रमाणपत्रको प्रतिलिपिहरू
७. नापी शाखाबाट प्रमाणित नक्सा ट्रेस (ब्लुप्रिन्ट) - १ प्रति

व्यहोरा ठीक साँचो हो, फरक ठहरे कानुन बमोजिम सहुँला बुझाउँला।

निवेदक:
दस्तखत: ........................................
नाम, थर: ........................................
स्थायी ठेगाना: ................................
सम्पर्क फोन नं.: ............................
मिति: २०...../...../.....`,
    },
    ward_app: {
      title: 'वडा कार्यालयमा नाता प्रमाणित तथा सर्जमिन मुचुल्का निवेदन ढाँचा',
      content: `श्रीमान् वडा अध्यक्षज्यू,
........................ गाउँपालिका / नगरपालिका,
वडा नं. ...... को कार्यालय, ........................।

विषय: मृत्युपश्चात नाता प्रमाणित तथा सर्जमिन मुचुल्का गरी पाऊँ।

महोदय,
उपरोक्त विषयमा यस वडा नं. ...... स्थायी निवासी मेरो/हाम्रो .................... (नाता) श्री ........................................ को मिति २०...../...../..... मा मृत्यु भएको हुँदा निजको नाममा रहेको अचल सम्पत्ति (जग्गा) नामसारी प्रयोजनका लागि निज मृतक र म/हामी हकवालाहरू बीचको नाता प्रमाणित प्रमाणपत्र तथा स्थलगत सर्जमिन मुचुल्का गरी सिफारिस उपलब्ध गराई पाउन निम्न विवरण सहित यो निवेदन पेश गरेको छु/गरेका छौं।

मृतकको विवरण:
नाम, थर: ........................................
नागरिकता नं.: ................................
मृत्यु भएको मिति: २०...../...../.....

जीवित हकवालाहरूको विवरण:
१. ........................................ (नाता: ............, ना.प्र.नं.: ............)
२. ........................................ (नाता: ............, ना.प्र.नं.: ............)

संलग्न कागजातहरू:
१. मृतकको मृत्यु दर्ता प्रमाणपत्रको प्रतिलिपि
२. हकवाला सबैको नागरिकता प्रमाणपत्रको प्रतिलिपि
३. जग्गाको लालपुर्जाको प्रतिलिपि
४. चालु आ.व. सम्मको सम्पत्ति कर तिरेको रसिद

व्यहोरा साँचो हो, झुठ्ठा ठहरे कानुन बमोजिम बुझाउँला।

निवेदक:
दस्तखत: ................................
नाम: ....................................
ठेगाना: ................................
मिति: २०...../...../.....`,
    },
    consent_deed: {
      title: 'अन्य हकवालाहरूको मञ्जुरीनामा / सहमति लिखतको ढाँचा',
      content: `लिखितम् मञ्जुरीनामा / सहमति पत्र

लिखितम् हामी तपसिलका मानिसहरू आगे हाम्रा .................... (नाता) श्री ........................................ (मृतकको नाम) को मिति २०...../...../..... मा मृत्यु भएको हुँदा निज मृतकका नाममा दर्ता कायम रहेको तपसिल बमोजिमको जग्गा हामी सबै हकवालाहरूको आपसी सरसल्लाह र राजीखुसीले तपसिलमा उल्लिखित हाम्रा .................... (नाता) श्री ........................................ का एकल नाममा मात्र जग्गा नामसारी (दाखिल खारेज) गरिदिन हाम्रो पूर्ण मञ्जुरी र सहमति छ। 

उक्त जग्गा निजको एकल नाममा नामसारी हुँदा हाम्रो कुनै पनि दाबी-विरोध, किचलो वा उजुरबाजुर हुने छैन। पछि हामी वा हाम्रा सन्तानले कुनै किचलो गरेमा यो मञ्जुरीनामा पत्रबाटै बदर हुनेछ भनी हामीले आफ्नो होस-हवासमा यो मञ्जुरीनामा लिखत गरिदियौं।

जग्गाको विवरण:
जिल्ला: ....................  पालिका: ........................  वडा नं.: ......
कित्ता नं.: ................  क्षेत्रफल: ....................

एकल नामसारी पाउने व्यक्तिको विवरण:
नाम, थर: ........................................
नाता: ....................  ना.प्र.नं.: ....................

मञ्जुरी दिने अन्य हकवालाहरू (सहीछाप):
१. नाम: ........................................ नाता: ................ दस्तखत/औंठाछाप: ................
२. नाम: ........................................ नाता: ................ दस्तखत/औंठाछाप: ................
३. नाम: ........................................ नाता: ................ दस्तखत/औंठाछाप: ................

रोहवरका साक्षीहरू:
१. नाम: ........................................ ठेगाना: ........................ दस्तखत: ................
२. नाम: ........................................ ठेगाना: ........................ दस्तखत: ................

इति संवत् २०..... साल ..... महिना ..... गते रोज ..... शुभम्।`,
    },
  };

  const handleCopyTemplate = async () => {
    const text = templates[activeTemplate].content;
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrintTemplate = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Intro Configuration Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" /> मुलुकी देवानी संहिता २०७४ अपूताली कानुन अनुकूल
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          जग्गा नामसारी (दाखिल खारेज) इन्टरएक्टिभ गाइड तथा ढाँचा
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
          परिवारका सदस्य (बुबा, आमा वा पति/पत्नी) को मृत्युपछि उहाँको नामको जग्गा हकवालाको नाममा ल्याउने (दाखिल खारेज) सम्पूर्ण कानुनी प्रक्रिया, चाहिने कागजात र मालपोत/वडामा दिने आधिकारिक निवेदन ढाँचाहरू यहाँ उपलब्ध छन्।
        </p>

        {/* Namsari Type Selector */}
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
            नामसारीको अवस्था छान्नुहोस्:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setNamsariType('joint')}
              className={`p-4 rounded-xl border text-left transition-all ${
                namsariType === 'joint'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-sm text-slate-900 dark:text-white">
                १. सबै हकवालाहरूको संयुक्त नामसारी
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                मृतकका सबै छोराछोरी/पति-पत्नीको नाममा बराबर हिस्सा रहने गरी संयुक्त पुर्जा बनाउने।
              </p>
            </button>

            <button
              type="button"
              onClick={() => setNamsariType('single_consent')}
              className={`p-4 rounded-xl border text-left transition-all ${
                namsariType === 'single_consent'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-sm text-slate-900 dark:text-white">
                २. मञ्जुरीनामा सहित एकल नामसारी
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                अन्य हकवालाहरूले सहमति जनाएर कुनै एकजना (जस्तै: आमा वा एक छोरा) को नाममा गर्ने।
              </p>
            </button>

            <button
              type="button"
              onClick={() => setNamsariType('partition_decree')}
              className={`p-4 rounded-xl border text-left transition-all ${
                namsariType === 'partition_decree'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <p className="font-bold text-sm text-slate-900 dark:text-white">
                ३. अंशबण्डा वा फैसलापछिको नामसारी
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                पारिवारिक अंशबण्डा लिखत वा अदालतको मिलापत्र/फैसला बमोजिम छुट्टाछुट्टै पुर्जा बनाउने।
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Document Checklist Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              नामसारी गर्न चाहिने अनिवार्य कागजातहरू ({completedCount}/{docsList.length} तयार)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              तयार भएका कागजातमा टिक लगाउनुहोस् ताकि वडा वा मालपोतमा कुनै समस्या नआओस्।
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCheckedDocs({})}
            className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> रिसेट
          </button>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {docsList.map((doc, idx) => {
            const isChecked = !!checkedDocs[doc.id];
            return (
              <div
                key={doc.id}
                onClick={() => toggleDoc(doc.id)}
                className={`p-4 sm:p-5 flex items-start gap-4 cursor-pointer transition-colors ${
                  isChecked
                    ? 'bg-emerald-50/40 dark:bg-emerald-950/20'
                    : 'hover:bg-slate-50/80 dark:hover:bg-slate-850'
                }`}
              >
                <div className="mt-0.5 flex-shrink-0 text-slate-400 dark:text-slate-600 hover:text-emerald-600">
                  {isChecked ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-slate-400">#{idx + 1}</span>
                    <span className={`text-base font-bold ${isChecked ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                      {doc.nameNp}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      📍 {doc.authority}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {doc.descNp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step by Step Flowchart */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-emerald-600" />
          मृत्युपश्चात नामसारी हुने ४ चरणबद्ध प्रक्रिया
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          नामसारीको फाइल यसरी वडादेखि मालपोतसम्म अघि बढ्छ:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="inline-block w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-3">
              १
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">वडा कार्यालय</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              मृत्यु दर्ता, नाता प्रमाणित, सर्जमिन मुचुल्का, सम्पत्ति कर चुक्ता र नामसारी सिफारिस पत्र लिनुहोस्।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="inline-block w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-3">
              २
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">नापी कार्यालय</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              कित्ताको नापी नक्सा ट्रेस (ब्लुप्रिन्ट) र फिल्डबुक उतार प्रमाणीकरण गराउनुहोस्।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="inline-block w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-3">
              ३
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">मालपोत दाखिला खारेज</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              मालपोतमा निवेदन दर्ता गरी मोठ श्रेस्ता भिडाउने। शंका भए १५ दिने हकदाबी सूचना जारी हुन्छ।
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="inline-block w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-3">
              ४
            </span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">नयाँ लालपुर्जा प्राप्ति</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              अधिकृतबाट निर्णय पारित भएपछि मृतकको नाम कट्टा भई हकवालाको नाममा नयाँ डिजिटल कम्प्युटर पुर्जा प्राप्त हुन्छ।
            </p>
          </div>
        </div>
      </div>

      {/* Official Legal Application Templates */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-6 bg-slate-50/80 dark:bg-slate-850 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              तयारी कानुनी निवेदन तथा मञ्जुरीनामा ढाँचा (Editable Templates)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              तपाईंलाई चाहिने निवेदन छान्नुहोस् र एक क्लिकमा कपी वा प्रिन्ट गरी विवरण भरेर पेश गर्नुहोस्।
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyTemplate}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-semibold shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'कपी भयो!' : 'ढाँचा कपी'}
            </button>
            <button
              type="button"
              onClick={handlePrintTemplate}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm"
            >
              <Printer className="w-4 h-4" /> प्रिन्ट
            </button>
          </div>
        </div>

        {/* Template Selector Tabs */}
        <div className="border-b border-slate-100 dark:border-slate-800 flex overflow-x-auto bg-slate-50/40 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setActiveTemplate('malpot_app')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTemplate === 'malpot_app'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            १. मालपोत नामसारी निवेदन
          </button>
          <button
            type="button"
            onClick={() => setActiveTemplate('ward_app')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTemplate === 'ward_app'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            २. वडा नाता प्रमाणित/सर्जमिन निवेदन
          </button>
          <button
            type="button"
            onClick={() => setActiveTemplate('consent_deed')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTemplate === 'consent_deed'
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-800'
                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            ३. हकवालाहरूको मञ्जुरीनामा लिखत
          </button>
        </div>

        {/* Template Content Box */}
        <div className="p-6">
          <div className="bg-slate-50 dark:bg-slate-950 p-5 sm:p-7 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed select-all">
            {templates[activeTemplate].content}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            💡 टिप: डट डट (....) भएको ठाउँमा आफ्नो सम्बन्धित जिल्ला, वडा, मृतकको नाम, कित्ता नम्बर र हकवालाको विवरण भरेर पेश गर्नुहोस्।
          </p>
        </div>
      </div>

      {/* Muluki Dewani Samhita Key Provisions */}
      <div className="bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-6">
        <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-2 mb-2">
          <Scale className="w-5 h-5 text-emerald-600" />
          मुलुकी देवानी संहिता, २०७४ बमोजिम अपूताली (नामसारी) सम्बन्धी मुख्य कानुनी व्यवस्था
        </h4>
        <ul className="space-y-2 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
          <li>• <strong>पहिलो हक:</strong> मृतकको सम्पत्तिमा पहिलो हक सँगै बसेका पति वा पत्नीको हुन्छ।</li>
          <li>• <strong>छोरा र छोरीको समान हक:</strong> विवाहित वा अविवाहित दुवै छोरी र छोराको बाबु-आमाको अपूताली (सम्पत्ति) मा समान हक लाग्दछ।</li>
          <li>• <strong>नाता प्रमाणितको अनिवार्यता:</strong> नामसारी गर्दा मृतकका सबै जीवित अंशियारहरूको नाम वडाको नाता प्रमाणितमा अनिवार्य खुल्नुपर्छ। कुनै अंशियारलाई लुकाएमा पछि जालसाजी मुद्दा लाग्न सक्छ।</li>
          <li>• <strong>विदेशमा रहेका हकवाला:</strong> विदेशमा रहेका हकवालाले नेपाल आउन नसके सम्बन्धित देशको नेपाली राजदूतावासमार्फत कन्सुलर वारिसनामा पठाएर आफ्नो भाग लिने वा मञ्जुरीनामा दिन सक्छन्।</li>
        </ul>
      </div>

      {/* Useful Links */}
      <div className="bg-slate-50 dark:bg-slate-850 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-4">
          🔗 थप सहयोगी लिङ्कहरू
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/tools/anshabanda-calculator"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                अंशबण्डा क्यालकुलेटर
              </p>
              <p className="text-[11px] text-slate-500">कानुनी हिस्सा भागबण्डा</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/jagga-pass-checklist"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                जग्गा पास चेकलिस्ट
              </p>
              <p className="text-[11px] text-slate-500">वडा, नापी र मालपोत कागजात</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <Link
            href="/tools/property-dispute-wizard"
            className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600">
                घरजग्गा विवाद समाधान
              </p>
              <p className="text-[11px] text-slate-500">सँधियार, बाटो, मोहियानी समाधान</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
