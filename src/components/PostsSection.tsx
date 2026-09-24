import React from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export default function PostsSection() {
  const posts = [
    {
      id: 1,
      title: 'ल्याण्ड सोलुसन (Land Solution): नेपालमा डिजिटल कित्ताकाट र नापजाँचको आधुनिक माध्यम',
      category: 'Land Survey',
      date: '२०८१ भदौ',
      readTime: '४ मिनेट',
      summary:
        'परम्परागत रूपमा गरिने जग्गा नापजाँच र कित्ताकाटमा हुने समय र त्रुटिलाई घटाउन ल्याण्ड सोलुसन कसरी उपयोगी छ? यसका मुख्य विशेषताहरू, क्षेत्रफल गणना र नक्सा समन्वय सम्बन्धी सम्पूर्ण जानकारी।',
      link: '#land-solution',
      tag: 'Land Solution',
    },
    {
      id: 2,
      title: 'हाम्रो कोष (Hamro Kosh): व्यक्तिगत तथा समूह बचत-ऋण व्यवस्थापन कसरी गर्ने?',
      category: 'Finance App',
      date: '२०८१ भदौ',
      readTime: '३ मिनेट',
      summary:
        'परिवार, साथीभाइ, समूह वा सहकारीको मासिक बचत संकलन, ऋण लगानी, र ब्याज हिसाब खातापातामा नभई मोबाइलमै सहजै राख्ने तरिका र हाम्रो कोष एपका फाइदाहरू।',
      link: '#hamro-kosh',
      tag: 'Hamro Kosh',
    },
    {
      id: 3,
      title: 'AutoCAD मा जग्गाको रोपनी-आना र बिघा-कट्ठा क्षेत्रफल छिटो निकाल्ने AutoLISP विधि',
      category: 'Technical / CAD',
      date: '२०८१ भदौ',
      readTime: '५ मिनेट',
      summary:
        'अमिन तथा इन्जिनियरहरूका लागि क्याड नक्सामा पोलिलाइनको एरियालाई एक क्लिकमै रोपनी-आना-पैसा-दाम वा बिघा-कट्ठा-धुरमा कन्भर्ट गर्ने LSP स्क्रिप्टहरूको प्रयोग र फाइदाहरू।',
      link: '#autocad-lsp',
      tag: 'AutoCAD LISP',
    },
  ];

  return (
    <section id="articles" className="py-12 sm:py-20 md:py-24 border-t border-slate-100 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold mb-3 border border-blue-100">
            <Newspaper className="w-4 h-4 text-blue-600" />
            <span>ARTICLES & KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            महत्वपूर्ण लेख तथा जानकारीहरू (Posts & Guides)
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            ल्याण्ड सोलुसन, हाम्रो कोष, र प्राविधिक टुल्स सम्बन्धी उपयोगी जानकारी तथा प्रयोग विधिहरू।
          </p>
        </div>

        {/* 3 Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-xl transition-all duration-200 flex flex-col justify-between p-5 sm:p-7"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors leading-snug">
                  <a href={post.link}>{post.title}</a>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </span>

                <a
                  href={post.link}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>थप हेर्नुहोस्</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
