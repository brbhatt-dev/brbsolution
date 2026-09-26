'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Compass,
  MessageSquare
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  link?: {
    label: string;
    href: string;
  };
}

const PRESET_QUESTIONS = [
  'मेरो बाटो ८ फिट छ, कित्ताकाट हुन्छ?',
  'लालपुर्जा हरायो, के गर्ने?',
  'महिला छुट कति प्रतिशत पाइन्छ?',
  'पुँजीगत लाभकर (CGT) कति लाग्छ?',
  '१ रोपनीमा कति आना र वर्गफिट हुन्छ?',
  'साँधियारले सिमाना मिचे के गर्ने?'
];

export default function AiLandAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'नमस्ते! म BR Bhatta नेपाल जग्गा तथा कानुनी एआई सहायक (Land AI) हुँ। \n\nजग्गा नापजाँच, कित्ताकाट मापदण्ड, मालपोत कर वा कानुन सम्बन्धी कुनै पनि जिज्ञासा तल सोध्नुहोस् वा द्रुत प्रश्न रोज्नुहोस्।'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Knowledge base answer matcher
  const generateAnswer = (query: string): { text: string; link?: { label: string; href: string } } => {
    const q = query.toLowerCase().trim();

    // 1. Units conversion: Ropani / Aana / Paisa / Daam / Bigha / Kattha / Dhur / Sqft / Sqm
    // Check this FIRST with high priority so questions like "१ रोपनीमा कति आना र वर्गफिट हुन्छ?" get exact answers!
    const isUnitQuery = 
      q.includes('रोपनी') || q.includes('आना') || q.includes('पैसा') || q.includes('दाम') ||
      q.includes('बिघा') || q.includes('कठ्ठा') || q.includes('कट्ठा') || q.includes('धुर') ||
      q.includes('कन्वा') || q.includes('कान्भा') || q.includes('वर्गफिट') || q.includes('वर्ग मिटर') ||
      q.includes('वर्गमिटर') || q.includes('sqft') || q.includes('sq.ft') || q.includes('sqm') ||
      q.includes('कति आना') || q.includes('कति रोपनी') || q.includes('कति वर्गफिट') || q.includes('इकाइ रूपान्तरण');

    if (isUnitQuery && !q.includes('कित्ताकाट') && !q.includes('बाटो') && !q.includes('अंशबन्डा') && !q.includes('मापदण्ड')) {
      if (q.includes('बिघा') || q.includes('कठ्ठा') || q.includes('कट्ठा') || q.includes('धुर') || q.includes('कन्वा') || q.includes('कान्भा')) {
        return {
          text: 'नेपाल तराई जग्गा नापजाँच प्रणाली (बिघा-कठ्ठा-धुर सूत्र):\n\n• १ बिघा = २० कट्ठा = ४०० धुर = ६,४०० कान्भा\n• १ बिघा = ७२,९०० वर्गफिट (वा ६,७७२.६३ वर्गमिटर)\n• १ कट्ठा = २० धुर (३,६४५ वर्गफिट वा ३३८.६३ वर्गमिटर)\n• १ धुर = १६ कान्भा (१८२.२५ वर्गफिट वा १६.९३ वर्गमिटर)\n• १ कान्भा = ११.३९ वर्गफिट (१.०६ वर्गमिटर)\n\n(१ बिघा बराबर करिब १३.३१ रोपनी अर्थात् १३ रोपनी ४ आना ३ पैसा २ दाम हुन्छ।)',
          link: {
            label: 'अनलाइन जग्गा क्षेत्रफल क्यालकुलेटर चलाउनुहोस्',
            href: '/tools/land-calculator'
          }
        };
      }

      return {
        text: 'नेपाल पहाडी जग्गा नापजाँच प्रणाली (रोपनी-आना-पैसा-दाम सूत्र):\n\n• १ रोपनी = १६ आना = ६४ पैसा = २५६ दाम\n• १ रोपनी = ५,४७६ वर्गफिट (वा ५०८.७२ वर्गमिटर)\n• १ आना = ४ पैसा = १६ दाम (३४२.२५ वर्गफिट वा ३१.८० वर्गमिटर)\n• १ पैसा = ४ दाम (८५.५६ वर्गफिट वा ७.९५ वर्गमिटर)\n• १ दाम = २१.३९ वर्गफिट (वा १.९९ वर्गमिटर)\n\n(१ रोपनी बराबर करिब ०.०७५ बिघा अर्थात् करिब १ कट्ठा १० धुर हुन्छ।)',
        link: {
          label: 'अनलाइन जग्गा क्यालकुलेटर चलाउनुहोस् (स्लिप प्रिन्ट)',
          href: '/tools/land-calculator'
        }
      };
    }

    // 2. Multi-Kitta / जोडफल / धेरै कित्ता
    if (q.includes('धेरै कित्ता') || q.includes('बहु कित्ता') || q.includes('multi') || q.includes('जोडफल') || q.includes('कित्ता जोड्न')) {
      return {
        text: 'एकभन्दा बढी कित्ताहरूको क्षेत्रफल जोड्न हाम्रो "बहु-कित्ता (Multi-Kitta) क्षेत्रफल योग क्यालकुलेटर" प्रयोग गर्न सक्नुहुन्छ। यसले पहाडी (R-A-P-D) र तराई (B-K-D-K) दुवै ढाँचाको क्यारी-ओभर सही हिसाब गर्छ र प्रिन्ट गर्न मिल्ने औपचारिक स्लिप दिन्छ।',
        link: {
          label: 'बहु-कित्ता क्यालकुलेटर खोल्नुहोस्',
          href: '/tools/multi-kitta-calculator'
        }
      };
    }

    // 3. Kitta Kat / बाटो मापदण्ड / सडक चौडाइ
    // Ensure we don't accidentally match 'वर्गफिट' or 'वर्गमिटर' as road width
    const isRoadOrKittaKat = 
      q.includes('कित्ताकाट') || q.includes('टुक्रा') || q.includes('कित्ता काट') ||
      (q.includes('बाटो') && !q.includes('हिँड्ने')) ||
      (q.includes('सडक') && (q.includes('चौडाइ') || q.includes('नियम') || q.includes('मापदण्ड'))) ||
      ((q.includes('फिट') || q.includes('fit') || q.includes('मिटर')) && (q.includes('बाटो') || q.includes('सडक') || q.includes('मोहडा')));

    if (isRoadOrKittaKat) {
      return {
        text: 'भू-उपयोग नियमावली २०७९ (संशोधन २०८१) अनुसार कित्ताकाट मापदण्ड:\n\n• आवासीय क्षेत्र: न्यूनतम १३० वर्गमिटर (करिब ४ आना वा ०-३-३-३) क्षेत्रफल चाहिन्छ।\n• बाटोको न्यूनतम मोहडा (Frontage): कम्तीमा ८ मिटर हुनुपर्छ।\n• कृषि क्षेत्र: काठमाडौँ उपत्यकामा ५०० वर्गमिटर (करिब १ रोपनी), तराईमा ६७५ वर्गमिटर (करिब २ कट्ठा) भन्दा कम कित्ताकाट रोक्का हुन्छ।\n• यदि बाटो ८ मिटरभन्दा साँघुरो छ भने सामान्यतया कित्ताकाट गर्न पाइँदैन।',
        link: {
          label: 'अनलाइन कित्ताकाट योग्यता परीक्षक चलाउनुहोस्',
          href: '/tools/kitta-kat-checker'
        }
      };
    }

    // 4. Lalpurja Lost / Duplicate Copy
    if (q.includes('लालपुर्जा') || q.includes('हरायो') || q.includes('प्रतिलिपि') || q.includes('स्रेस्ता')) {
      return {
        text: 'लालपुर्जा हराएमा नयाँ प्रतिलिपि (Duplicate Copy) निकाल्ने कानुनी प्रक्रिया:\n\n१. सम्बन्धित वडा कार्यालयबाट सिफारिस लिने।\n२. स्थानीय वा राष्ट्रिय पत्रिकामा १५ दिने सार्वजनिक सूचना प्रकाशन गर्ने।\n३. पत्रिकाको सक्कल कटिङ, नागरिकता, तिरो तिरेको रसिद सहित सम्बन्धित मालपोत कार्यालयमा निवेदन दिने।\n४. मालपोतले मोठ स्रेस्ता भिडाएर नयाँ प्रतिलिपि लालपुर्जा जारी गर्दछ।',
        link: {
          label: 'लालपुर्जा प्रतिलिपि निकाल्ने पूर्ण गाइड पढ्नुहोस्',
          href: '/articles/lost-lalpurja-duplicate-process-nepal'
        }
      };
    }

    // 5. Female Rebate / महिला छुट
    if (q.includes('महिला') || q.includes('छुट') || q.includes('सहुलियत')) {
      return {
        text: 'नेपाल प्रदेश आर्थिक ऐन अनुसार महिलाको एकल नाममा जग्गा रजिस्ट्रेसन पारित गर्दा:\n\n• महानगरपालिका तथा उपमहानगरपालिकामा २५% राजस्व छुट पाइन्छ।\n• नगरपालिका क्षेत्रमा ३५% सम्म र दुर्गम वा हिमाली गाउँपालिकामा ५०% सम्म छुट प्राप्त हुन्छ।\n• श्रीमान्-श्रीमती संयुक्त नामसारी गर्दा मात्र रु. १०० को टोकन शुल्क लाग्दछ।',
        link: {
          label: 'मालपोत रजिस्ट्रेसन तथा कर क्यालकुलेटर चलाउनुहोस्',
          href: '/tools/malpot-calculator'
        }
      };
    }

    // 6. Capital Gains Tax / लाभकर / CGT
    if (q.includes('लाभकर') || q.includes('cgt') || q.includes('पुँजीगत') || q.includes('कर')) {
      return {
        text: 'पुँजीगत लाभकर (Capital Gains Tax - CGT) बिक्रेताले खुद नाफामा तिर्नुपर्छ:\n\n• ५ वर्षभन्दा बढी स्वामित्व रहेको घरजग्गा: ५.०%\n• ५ वर्षभन्दा कम स्वामित्व रहेको घरजग्गा: ७.५%\n• कम्तीमा १० वर्ष लगातार बसोबास गरेको १ रोपनी (उपत्यका) वा १० कट्ठा (तराई) सम्मको निजी आवासीय घरजग्गा बिक्रीमा पूर्ण कर छुट हुन्छ।',
        link: {
          label: 'पुँजीगत लाभकर हिसाब क्यालकुलेटर चलाउनुहोस्',
          href: '/tools/malpot-calculator'
        }
      };
    }

    // 7. Sandhiyar dispute / सिमाना विवाद
    if (q.includes('साँधियार') || q.includes('सिमाना') || q.includes('विवाद') || q.includes('मिच्यो') || q.includes('किला')) {
      return {
        text: 'साँधियारले सिमाना मिचेमा वा विवाद भएमा समाधानका उपायहरू:\n\n१. पहिले वडा कार्यालयको न्यायिक समितिमा सिमाना छुट्याइपाउँ भनी निवेदन दिनुपर्छ।\n२. न्यायिक समितिले नापी कार्यालयबाट अमिन खटाई सक्कल नक्सा (Trace) अनुसार सिमानामा किला ठोक्ने काम गर्छ।\n३. चित्त नबुझेमा जग्गा (नाप जाँच) ऐन २०१९ अनुसार सम्बन्धित जिल्ला अदालतमा फिरादपत्र दर्ता गर्न सकिन्छ।',
        link: {
          label: 'साँधियार सिमाना विवाद कानुनी समाधान गाइड पढ्नुहोस्',
          href: '/articles/land-boundary-sandhiyar-dispute-resolution-nepal'
        }
      };
    }

    // 8. Building Setback / Naksa Pas
    if (q.includes('घर') || q.includes('नक्सा') || q.includes('सेतब्याक') || q.includes('setback') || q.includes('तला') || q.includes('झ्याल')) {
      return {
        text: 'भवन निर्माण आचारसंहिता (Building Code) र पालिका मापदण्ड अनुसार:\n\n• बाटोतर्फ सडकको केन्द्र (Centerline) बाट तोकिएको दूरी (उदा: ५ वा ६ मिटर) सेतब्याक छोड्नुपर्छ।\n• साँधियारको सिमानातर्फ झ्याल राख्दा न्यूनतम ५ फिट र झ्याल नराख्दा न्यूनतम ३ फिट सेतब्याक अनिवार्य हुन्छ।\n• अनुमतिबिना मापदण्ड मिचेर बनाएको घरको नक्सा पास हुँदैन र बैंक धितोमा रोक्का हुन सक्दैन।',
        link: {
          label: 'घर नक्सा पास र सेतब्याक नियम विस्तृत पढ्नुहोस्',
          href: '/articles/building-code-naksa-pas-setback-rules-nepal'
        }
      };
    }

    // 9. Lok Sewa Aamin / Syllabus / Past Questions
    if (q.includes('अमिन') || q.includes('सर्भेक्षक') || q.includes('लोकसेवा') || q.includes('पाठ्यक्रम') || q.includes('syllabus') || q.includes('क्विज') || q.includes('quiz')) {
      return {
        text: 'लोकसेवा आयोगको नापी अमिन तथा सर्भेक्षक परीक्षाका लागि हाम्रो विशेष हबहरू उपलब्ध छन्:\n\n• प्रथम र द्वितीय पत्रको पूर्ण पाठ्यक्रम तथा विगतका प्रश्नोत्तरहरू हेर्न सकिन्छ।\n• ५० वस्तुगत प्रश्नहरूको समयबद्ध अनलाइन मक टेस्ट (Mock Exam) अभ्यास गर्न सकिन्छ।',
        link: {
          label: 'अमिन पाठ्यक्रम तथा पुराना प्रश्नहरू हेर्नुहोस्',
          href: '/tools/aamin-syllabus'
        }
      };
    }

    // 10. AutoCAD / LISP Scripts
    if (q.includes('autocad') || q.includes('cad') || q.includes('लस्प') || q.includes('lsp') || q.includes('स्क्रिप्ट') || q.includes('अटोक्याड') || q.includes('lisp')) {
      return {
        text: 'AutoCAD मा नापी नक्सा तथा जग्गाको क्षेत्रफल (रोपनी-आना / बिघा-कठ्ठा) निकाल्न र कोअर्डिनेट्स निर्यात गर्न हाम्रा ४ वटा प्रमाणीकृत LISP (.lsp) स्क्रिप्टहरू नि:शुल्क डाउनलोड गर्न सक्नुहुन्छ।',
        link: {
          label: 'AutoCAD LSP स्क्रिप्ट्स हब खोल्नुहोस्',
          href: '/tools/autocad-scripts'
        }
      };
    }

    // 11. Survey & Malpot Directory
    if (q.includes('नापी कार्यालय') || q.includes('मालपोत कार्यालय') || q.includes('फोन') || q.includes('कार्यालय') || q.includes('सम्पर्क') || q.includes('निर्देशिका')) {
      return {
        text: 'नेपालका ७ वटै प्रदेशका ७७ वटै जिल्लाका नापी तथा मालपोत कार्यालयहरूको फोन नम्बर, इमेल र कार्यक्षेत्र विवरण हाम्रो निर्देशिकामा उपलब्ध छ।',
        link: {
          label: '७७ जिल्ला नापी तथा मालपोत निर्देशिका हेर्नुहोस्',
          href: '/tools/survey-offices'
        }
      };
    }

    // 12. Smart Kitta QR / Land Sale
    if (q.includes('qr') || q.includes('क्युआर') || q.includes('बिक्री') || q.includes('पोष्टर') || q.includes('विज्ञापन')) {
      return {
        text: 'आफ्नो जग्गा बिक्री गर्न वा कित्ताको गुगल म्याप्स लोकेसन सेयर गर्न "कित्ता स्मार्ट QR कोड जेनेरेटर" प्रयोग गरी आकर्षक "जग्गा बिक्रीमा" A4 पोष्टर प्रिन्ट गर्न सक्नुहुन्छ।',
        link: {
          label: 'कित्ता स्मार्ट QR कोड बनाउनुहोस्',
          href: '/tools/kitta-qr'
        }
      };
    }

    // Default fallback answer
    return {
      text: 'तपाईंको जिज्ञासा प्राप्त भयो। नेपालको जग्गा नापजाँच, कित्ताकाट, रजिस्ट्रेसन शुल्क र कानुनी प्रक्रिया बारे विस्तृत जानकारी तथा उपकरणहरूको लागि हाम्रो ज्ञान केन्द्र र क्यालकुलेटरहरू प्रयोग गर्न सक्नुहुन्छ।',
      link: {
        label: 'सम्पूर्ण डिजिटल उपकरणहरू हेर्नुहोस्',
        href: '/tools'
      }
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        link: response.link
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 notranslate no-print" translate="no">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 border-2 border-white/30 cursor-pointer group"
            aria-label="Open Nepal Land AI Assistant"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <Bot className="w-4 h-4 text-emerald-100" />
            </div>
            <span>नेपाल जग्गा AI सहायक</span>
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
          </button>
        </div>
      )}

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[410px] h-[540px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 notranslate no-print" translate="no">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-800 to-slate-900 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-black text-sm text-white flex items-center gap-1.5">
                  <span>BR Bhatta • Land AI</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </h3>
                <p className="text-[10px] text-emerald-200">
                  नेपाल जग्गा तथा कानुनी एआई सहायक (२४/७)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([{
                  id: 'welcome',
                  sender: 'bot',
                  text: 'च्याट रिसेट भयो! जग्गा नापजाँच वा कानुन सम्बन्धी कुनै पनि प्रश्न सोध्नुहोस्।'
                }])}
                title="च्याट रिसेट"
                className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-slate-50/60 dark:bg-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-xs shadow-xs font-medium'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-xs border border-slate-200 dark:border-slate-700 shadow-2xs'
                  }`}
                >
                  {msg.text}

                  {/* Optional Suggestion Link */}
                  {msg.link && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700">
                      <Link
                        href={msg.link.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 font-bold text-emerald-600 dark:text-emerald-400 hover:underline text-[11px]"
                      >
                        <span>{msg.link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 w-24">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Preset Prompts */}
          <div className="p-2.5 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
            {PRESET_QUESTIONS.map((pq, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(pq)}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 whitespace-nowrap transition-colors"
              >
                {pq}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="जग्गा सम्बन्धी प्रश्न लेख्नुहोस्..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500/20 focus:outline-emerald-600"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 shadow-xs cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
