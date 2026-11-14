import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShareBar from '@/components/SocialShareBar';
import PatroAppPromoBanner from '@/components/PatroAppPromoBanner';
import {
  ArrowLeft,
  Building2,
  Compass,
  ExternalLink,
  Globe,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  Receipt,
  Calculator,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react';
import { SURVEY_OFFICES } from '@/data/surveyOffices';
import { MALPOT_VALUATION_DATA } from '@/data/malpotRates';
import { DISTRICT_SLUGS, getDistrictBySlug, getDistrictSlugByNp } from '@/lib/districtSlugs';

interface DistrictPageProps {
  params: Promise<{
    district: string;
  }>;
}

export async function generateStaticParams() {
  return DISTRICT_SLUGS.map((d) => ({
    district: d.slug,
  }));
}

export async function generateMetadata({ params }: DistrictPageProps): Promise<Metadata> {
  const { district: slug } = await params;
  const info = getDistrictBySlug(slug);

  if (!info) {
    return {
      title: 'जिल्ला कार्यालय फेला परेन | BR Bhatta',
    };
  }

  const offices = SURVEY_OFFICES.filter((o) => o.district === info.districtNp);
  const cityTextNp = info.cityAliasesNp ? ` (${info.cityAliasesNp})` : '';
  const cityTextEn = info.cityAliasesEn ? ` (${info.cityAliasesEn})` : '';
  const canonicalUrl = `https://www.brbhatta.com/tools/survey-offices/${info.slug}`;

  const title = `${info.districtNp}${cityTextNp} नापी र मालपोत कार्यालय सम्पर्क नम्बर | ${info.districtEn}${cityTextEn} Malpot & Survey Office Nepal | BR Bhatta`;
  const description = `${info.districtNp} जिल्लाका ${offices.length} वटा नापी (dos.gov.np) र मालपोत (dolrm.gov.np) कार्यालयहरूको आधिकारिक फोन नम्बर, ठेगाना, इमेल, कार्यक्षेत्र (वडा/पालिका), सरकारी मूल्याङ्कन र मेरोकित्ता अनलाइन नक्सा सेवा।`;

  return {
    title,
    description,
    keywords: [
      `${info.districtEn} Malpot Office Phone Number`,
      `${info.districtEn} Survey Office Napi Karyalaya`,
      `${info.districtNp} मालपोत कार्यालय फोन नम्बर`,
      `${info.districtNp} नापी कार्यालय ठेगाना`,
      ...(info.cityAliasesEn ? info.cityAliasesEn.split(',').map((c) => `${c.trim()} Malpot & Survey Office`) : []),
      'dos.gov.np',
      'merokitta.dos.gov.np',
      'dolrm.gov.np',
      'BR Bhatta',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Land Solution & BR Bhatta',
      locale: 'ne_NP',
      type: 'website',
    },
  };
}

export default async function DistrictSurveyOfficePage({ params }: DistrictPageProps) {
  const { district: slug } = await params;
  const info = getDistrictBySlug(slug);

  if (!info) {
    notFound();
  }

  const offices = SURVEY_OFFICES.filter((o) => o.district === info.districtNp);
  if (offices.length === 0) {
    notFound();
  }

  const provinceName = offices[0].province;
  const surveyCount = offices.filter((o) => o.type === 'survey').length;
  const malpotCount = offices.filter((o) => o.type === 'malpot').length;
  const valuationEntries = MALPOT_VALUATION_DATA.filter((m) => m.district === info.districtNp);

  // Neighboring / same-province districts for internal linking
  const sameProvinceDistrictNames = Array.from(
    new Set(SURVEY_OFFICES.filter((o) => o.province === provinceName && o.district !== info.districtNp).map((o) => o.district))
  );
  const siblingDistricts = sameProvinceDistrictNames
    .map((dNp) => getDistrictSlugByNp(dNp))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const canonicalUrl = `https://www.brbhatta.com/tools/survey-offices/${info.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'गृहपृष्ठ (Home)', item: 'https://www.brbhatta.com/' },
          { '@type': 'ListItem', position: 2, name: 'उपकरणहरू (Tools)', item: 'https://www.brbhatta.com/tools' },
          { '@type': 'ListItem', position: 3, name: 'नापी तथा मालपोत निर्देशिका', item: 'https://www.brbhatta.com/tools/survey-offices' },
          { '@type': 'ListItem', position: 4, name: `${info.districtNp} (${info.districtEn})`, item: canonicalUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `${info.districtNp} जिल्लामा कति वटा नापी र मालपोत कार्यालयहरू छन्?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${info.districtNp} (${info.districtEn}) जिल्ला अन्तर्गत हाल ${surveyCount} वटा नापी कार्यालय र ${malpotCount} वटा भूमिसुधार तथा मालपोत कार्यालय गरी कुल ${offices.length} वटा कार्यालयहरू सेवामा छन्।`,
            },
          },
          {
            '@type': 'Question',
            name: `${info.districtNp} को जग्गाको नक्सा (Trace) र फिल्डबुक अनलाइनबाट कसरी लिने?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `तपाईंले नापी विभागको आधिकारिक पोर्टल merokitta.dos.gov.np मा गएर ${info.districtNp} जिल्ला तथा सम्बन्धित नापी कार्यालय छानी आफ्नो कित्ता नम्बर हालेर अनलाइन ट्रेस नक्सा र फिल्डबुक प्रिन्ट गर्न सक्नुहुन्छ।`,
            },
          },
          {
            '@type': 'Question',
            name: `${info.districtNp} मा जग्गा पास गर्दा लाग्ने दस्तुर र लाभकर कति हो?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${info.districtNp} जिल्लाको महानगर/उपमहानगर/नगर वा गाउँपालिका अनुसार सरकारी न्यूनतम मूल्याङ्कनमा २% देखि ५% सम्म रजिस्ट्रेसन दस्तुर लाग्छ (महिला नाममा २५% छुट)। जग्गा ५ वर्षभित्र बेच्दा ७.५% र ५ वर्षपछि बेच्दा ५% पुँजीगत लाभकर लाग्छ।`,
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 w-full">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/tools/survey-offices" className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सम्पूर्ण ७७ जिल्ला निर्देशिका</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-300">{provinceName}</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-bold">{info.districtNp} ({info.districtEn})</span>
        </nav>

        {/* District Hero */}
        <header className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{provinceName}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-bold">
              नापी: {surveyCount} • मालपोत: {malpotCount}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
            {info.districtNp} जिल्लाका नापी तथा मालपोत कार्यालयहरूको सम्पर्क निर्देशिका
            <span className="block text-base sm:text-lg font-bold text-emerald-700 dark:text-emerald-400 mt-1">
              {info.districtEn} {info.cityAliasesEn ? `(${info.cityAliasesEn})` : ''} — Survey Office (DOS) &amp; Malpot Office (DOLRM)
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>{info.districtNp} ({info.districtEn})</strong> जिल्ला भित्र जग्गा नापजाँच, कित्ताकाट, ट्रेस नक्सा, हालसाबिक, नामसारी, रोक्का/फुकुवा र राजीनामा पास सेवा प्रदान गर्ने सम्पूर्ण आधिकारिक नापी (`dos.gov.np`) तथा भूमिसुधार तथा मालपोत (`dolrm.gov.np`) कार्यालयहरूको फोन नम्बर, ठेगाना, इमेल र कार्यक्षेत्र (वडा/पालिका) विवरण:
          </p>

          {/* Official Quick Portals Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            <a
              href="https://merokitta.dos.gov.np"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs font-bold text-emerald-900 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-600" />
                मेरोकित्ता (Online Naksa)
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://dos.gov.np"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-xs font-bold text-blue-900 dark:text-blue-300 hover:bg-blue-100 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-600" />
                नापी विभाग (dos.gov.np)
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://dolrm.gov.np"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs font-bold text-amber-900 dark:text-amber-300 hover:bg-amber-100 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-amber-600" />
                मालपोत विभाग (dolrm.gov.np)
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* Office Cards List */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
            {info.districtNp} जिल्लाका कार्यालयहरूको सूची ({offices.length} कार्यालय)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-2 ${
                        office.type === 'survey'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300'
                      }`}
                    >
                      {office.type === 'survey' ? (
                        <>
                          <Compass className="w-3 h-3" /> नापी कार्यालय (Survey Office)
                        </>
                      ) : (
                        <>
                          <Receipt className="w-3 h-3" /> मालपोत कार्यालय (Land Revenue)
                        </>
                      )}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-snug">
                      {office.nameNp}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {office.nameEn}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>ठेगाना:</strong> {office.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>फोन:</strong>{' '}
                      <span className="font-mono font-bold text-slate-900 dark:text-white">{office.phone}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 break-all">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-emerald-700 dark:text-emerald-400 hover:underline font-medium">
                      {office.email}
                    </a>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                    <strong className="text-slate-900 dark:text-white block mb-0.5">कार्यक्षेत्र (Jurisdiction):</strong>
                    {office.jurisdiction}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* District Valuation Rates (if available in MALPOT_VALUATION_DATA) */}
        {valuationEntries.length > 0 && (
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-600" />
                <span>{info.districtNp} जिल्लाको सरकारी न्यूनतम मूल्याङ्कन (नमुना दररेट)</span>
              </h2>
              <Link
                href="/tools/malpot-valuation-rates"
                className="text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                पूर्ण दररेट हेर्नुहोस् →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {valuationEntries.slice(0, 4).map((entry) => (
                <div
                  key={entry.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      {entry.officeName}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                      {entry.unit}
                    </span>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white">{entry.areaName}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{entry.municipality}</p>
                  <div className="space-y-1 pt-1">
                    {entry.rates.slice(0, 2).map((r, i) => (
                      <div key={i} className="flex justify-between text-xs border-t border-slate-200/60 dark:border-slate-700/60 pt-1">
                        <span className="text-slate-600 dark:text-slate-300 truncate pr-2">{r.roadType}</span>
                        <span className="font-bold text-slate-900 dark:text-white shrink-0">
                          रु. {r.govRate.toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Essential Calculators & Checklist CTA */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/tools/malpot-calculator"
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 transition-all space-y-1 shadow-sm"
          >
            <div className="flex items-center gap-2 font-black text-sm text-emerald-700 dark:text-emerald-400">
              <Calculator className="w-4 h-4" />
              <span>मालपोत तथा लाभकर क्यालकुलेटर</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              {info.districtNp} मा जग्गा पास गर्दा लाग्ने दस्तुर र पुँजीगत लाभकर हिसाब गर्नुहोस्।
            </p>
          </Link>

          <Link
            href="/tools/jagga-pass-checklist"
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 transition-all space-y-1 shadow-sm"
          >
            <div className="flex items-center gap-2 font-black text-sm text-blue-700 dark:text-blue-400">
              <FileCheck2 className="w-4 h-4" />
              <span>जग्गा पास कागजात चेकलिस्ट</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              वडा, नापी र मालपोत कार्यालय जानुअघि अनिवार्य बोक्नुपर्ने कागजातहरूको सूची।
            </p>
          </Link>

          <Link
            href="/tools/bayana-agreement-generator"
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 transition-all space-y-1 shadow-sm"
          >
            <div className="flex items-center gap-2 font-black text-sm text-amber-700 dark:text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>बैनापट्टा PDF जेनेरेटर</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              मुलुकी देवानी संहिता बमोजिम आधिकारिक घरजग्गा बैना कागज प्रिन्ट गर्नुहोस्।
            </p>
          </Link>
        </section>

        {/* District FAQ Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>{info.districtNp} नापी तथा मालपोत सम्बन्धी प्रश्नोत्तर (FAQs)</span>
          </h2>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white">
                १. {info.districtNp} जिल्लामा कति वटा नापी र मालपोत कार्यालयहरू छन्?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {info.districtNp} ({info.districtEn}) जिल्ला अन्तर्गत {surveyCount} वटा नापी कार्यालय र {malpotCount} वटा मालपोत कार्यालय गरी कुल {offices.length} वटा सरकारी कार्यालयहरू सञ्चालनमा छन्।
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white">
                २. {info.districtNp} को जग्गाको ट्रेस नक्सा र फिल्डबुक अनलाइनबाट कसरी लिने?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                नापी विभागको अनलाइन पोर्टल <a href="https://merokitta.dos.gov.np" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline font-bold">merokitta.dos.gov.np</a> मा लगइन गरी {info.districtNp} र आफ्नो नापी कार्यालय छनोट गरेर अनलाइन राजस्व तिरी घरमै नक्सा प्रिन्ट गर्न सकिन्छ।
              </p>
            </div>
          </div>
        </section>

        {/* Same Province Sibling Districts Internal Links */}
        {siblingDistricts.length > 0 && (
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              {provinceName} भित्रका अन्य जिल्लाका कार्यालयहरू
            </h2>
            <div className="flex flex-wrap gap-2">
              {siblingDistricts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/tools/survey-offices/${d.slug}`}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-700 transition-colors"
                >
                  {d.districtNp} ({d.districtEn})
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* BR Patro Conversion Banner */}
        <PatroAppPromoBanner variant="inline" />

        {/* Share */}
        <SocialShareBar
          title={`${info.districtNp} (${info.districtEn}) नापी तथा मालपोत कार्यालय सम्पर्क निर्देशिका`}
          url={`/tools/survey-offices/${info.slug}`}
        />
      </main>

      <Footer />
    </div>
  );
}
