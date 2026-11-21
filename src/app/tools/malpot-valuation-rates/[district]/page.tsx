import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShareBar from '@/components/SocialShareBar';
import PatroAppPromoBanner from '@/components/PatroAppPromoBanner';
import DistrictQuickTaxEstimator from '@/components/DistrictQuickTaxEstimator';
import DistrictEnglishDocumentation from '@/components/DistrictEnglishDocumentation';
import {
  ArrowLeft,
  Building2,
  Calculator,
  Coins,
  ExternalLink,
  HelpCircle,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { SURVEY_OFFICES } from '@/data/surveyOffices';
import { MALPOT_VALUATION_DATA } from '@/data/malpotRates';
import {
  DISTRICT_SLUGS,
  getDistrictBySlug,
  getDistrictSlugByNp,
  normalizeDistrictNp,
} from '@/lib/districtSlugs';

interface DistrictValuationPageProps {
  params: Promise<{
    district: string;
  }>;
}

export async function generateStaticParams() {
  return DISTRICT_SLUGS.map((d) => ({
    district: d.slug,
  }));
}

export async function generateMetadata({ params }: DistrictValuationPageProps): Promise<Metadata> {
  const { district: slug } = await params;
  const info = getDistrictBySlug(slug);

  if (!info) {
    return {
      title: 'जिल्ला मालपोत मूल्याङ्कन फेला परेन | BR Bhatta',
    };
  }

  const malpotOffices = SURVEY_OFFICES.filter(
    (o) => o.type === 'malpot' && normalizeDistrictNp(o.district) === normalizeDistrictNp(info.districtNp)
  );
  const cityTextNp = info.cityAliasesNp ? ` (${info.cityAliasesNp})` : '';
  const cityTextEn = info.cityAliasesEn ? ` (${info.cityAliasesEn})` : '';
  const canonicalUrl = `https://www.brbhatta.com/tools/malpot-valuation-rates/${info.slug}`;

  const title = `${info.districtNp}${cityTextNp} जग्गाको सरकारी न्यूनतम मूल्याङ्कन दर २०८३/८४ र मालपोत कार्यालय | ${info.districtEn}${cityTextEn} Malpot Valuation Rate 2083/84`;
  const description = `${info.districtNp} (${info.districtEn}) जिल्लाको आ.व. २०८३/८४ को सडक वर्गीकरण अनुसार सरकारी न्यूनतम जग्गा मूल्याङ्कन दररेट, थैली रकम, रजिष्ट्रेसन दस्तुर क्यालकुलेटर र ${malpotOffices.length} मालपोत कार्यालयको आधिकारिक फोन नम्बर।`;

  return {
    title,
    description,
    keywords: [
      `${info.districtEn} Malpot Land Valuation Rate`,
      `${info.districtEn} Malpot Office Phone Number`,
      `${info.districtNp} जग्गा सरकारी मूल्याङ्कन`,
      `${info.districtNp} मालपोत कार्यालय दररेट`,
      ...(info.cityAliasesEn ? info.cityAliasesEn.split(',').map((c) => `${c.trim()} Malpot Land Rate`) : []),
      ...(info.cityAliasesNp ? info.cityAliasesNp.split(',').map((c) => `${c.trim()} मालपोत दर`) : []),
      'dolrm.gov.np',
      'Land Valuation Rate Nepal',
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
      locale: 'en_US',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'BR Bhatta | Land Solution & Nepal Tools' }],
    },
  };
}

export default async function DistrictMalpotValuationPage({ params }: DistrictValuationPageProps) {
  const { district: slug } = await params;
  const info = getDistrictBySlug(slug);

  if (!info) {
    notFound();
  }

  const normalizedDistrict = normalizeDistrictNp(info.districtNp);
  const malpotOffices = SURVEY_OFFICES.filter(
    (o) => o.type === 'malpot' && normalizeDistrictNp(o.district) === normalizedDistrict
  );
  const allDistrictOffices = SURVEY_OFFICES.filter(
    (o) => normalizeDistrictNp(o.district) === normalizedDistrict
  );

  if (allDistrictOffices.length === 0) {
    notFound();
  }

  const provinceName = allDistrictOffices[0].province;
  const valuationEntries = MALPOT_VALUATION_DATA.filter(
    (m) => normalizeDistrictNp(m.district) === normalizedDistrict
  );

  const sameProvinceDistrictNames = Array.from(
    new Set(
      SURVEY_OFFICES.filter(
        (o) => o.province === provinceName && normalizeDistrictNp(o.district) !== normalizedDistrict
      ).map((o) => o.district)
    )
  );
  const siblingDistricts = sameProvinceDistrictNames
    .map((dNp) => getDistrictSlugByNp(dNp))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const canonicalUrl = `https://www.brbhatta.com/tools/malpot-valuation-rates/${info.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'गृहपृष्ठ (Home)', item: 'https://www.brbhatta.com/' },
          { '@type': 'ListItem', position: 2, name: 'उपकरणहरू (Tools)', item: 'https://www.brbhatta.com/tools' },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'जिल्ला मालपोत मूल्याङ्कन',
            item: 'https://www.brbhatta.com/tools/malpot-valuation-rates',
          },
          { '@type': 'ListItem', position: 4, name: `${info.districtNp} (${info.districtEn})`, item: canonicalUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `${info.districtNp} जिल्लाको जग्गाको सरकारी न्यूनतम मूल्याङ्कन कसले तय गर्छ?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `मालपोत ऐन, २०३४ अनुसार ${info.districtNp} का प्रमुख जिल्ला अधिकारी (CDO) को अध्यक्षतामा रहने जिल्ला मूल्याङ्कन समितिले हरेक आर्थिक वर्षको साउन १ गतेदेखि लागू हुने गरी सडकको प्रकार र क्षेत्र अनुसार प्रतिआना/प्रतिकट्ठा सरकारी न्यूनतम मूल्याङ्कन दर तोक्दछ।`,
            },
          },
          {
            '@type': 'Question',
            name: `${info.districtNp} मालपोत कार्यालयमा जग्गा पास गर्दा कति रजिष्ट्रेसन दस्तुर र लाभकर लाग्छ?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${info.districtNp} को स्थानीय तह (महानगर, उपमहानगर, नगरपालिका वा गाउँपालिका) अनुसार राजीनामा पासमा सामान्यतया २% देखि ५% सम्म रजिष्ट्रेसन दस्तुर लाग्छ। महिला, दलित वा अपाङ्गता भएका व्यक्तिको नाममा २५% देखि ५०% सम्म छुट पाइन्छ। ५ वर्षभित्र बेच्दा ७.५% र ५ वर्षपछि बेच्दा ५% पुँजीगत लाभकर (CGT) लाग्छ।`,
            },
          },
          {
            '@type': 'Question',
            name: `के ${info.districtNp} मा सरकारी दरभन्दा कम थैली राखेर जग्गा पास गर्न मिल्छ?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `मिल्दैन। ${info.districtNp} स्थित मालपोत कार्यालयमा लिखत पास गर्दा थैली रकम जिल्ला मूल्याङ्कन समितिले तोकेको न्यूनतम सरकारी दर बराबर वा सोभन्दा बढी हुनैपर्छ।`,
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
          <Link
            href="/tools/malpot-valuation-rates"
            className="hover:text-emerald-600 inline-flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै जिल्ला मालपोत मूल्याङ्कन</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 dark:text-slate-300">{provinceName}</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-bold">
            {info.districtNp} ({info.districtEn})
          </span>
        </nav>

        {/* Hero Section */}
        <header className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-bold">
              <Landmark className="w-3.5 h-3.5 text-emerald-600" />
              <span>{provinceName}</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold">
              मालपोत कार्यालय: {malpotOffices.length}
            </span>
            {valuationEntries.length > 0 && (
              <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-bold">
                नमुना दररेट उपलब्ध ({valuationEntries.length} क्षेत्र)
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-snug">
            {info.districtNp} जिल्ला जग्गाको सरकारी न्यूनतम मूल्याङ्कन र मालपोत कार्यालय
            <span className="block text-base sm:text-lg font-bold text-emerald-700 dark:text-emerald-400 mt-1">
              {info.districtEn} {info.cityAliasesEn ? `(${info.cityAliasesEn})` : ''} — Malpot Land Valuation Rate &amp; Office Directory
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <strong>{info.districtNp} ({info.districtEn})</strong> जिल्ला भित्र जग्गा रजिष्ट्रेसन पास, बैनाबट्टा, धितो रोक्का/फुकुवा र बैंक भ्यालुएसनका लागि आवश्यक सरकारी न्यूनतम मूल्याङ्कन आधार, मालपोत कार्यालय सम्पर्क विवरण, राजस्व दस्तुर र पुँजीगत लाभकर (CGT) नियमहरू यहाँ दिइएका छन्।
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <Link
              href="/tools/malpot-calculator"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>मालपोत शुल्क र लाभकर हिसाब गर्नुहोस्</span>
            </Link>
            <Link
              href={`/tools/survey-offices/${info.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>{info.districtNp} नापी तथा मालपोत निर्देशिका</span>
            </Link>
          </div>
        </header>

        {/* Detailed Rate Tables (When District Rate Data Exists) */}
        {valuationEntries.length > 0 ? (
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-emerald-600" />
              <span>{info.districtNp} जिल्लाका प्रमुख क्षेत्रहरूको सरकारी र बजार मूल्याङ्कन दर</span>
            </h2>

            <div className="space-y-4">
              {valuationEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">
                        {entry.officeName}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5">
                        {entry.areaName}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{entry.municipality}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                      इकाइ: {entry.unit}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                          <th className="py-2 pr-3 font-bold">सडकको प्रकार / वर्ग</th>
                          <th className="py-2 px-3 font-bold whitespace-nowrap">सरकारी न्यूनतम दर</th>
                          <th className="py-2 px-3 font-bold whitespace-nowrap">अनुमानित बजार मूल्य</th>
                          <th className="py-2 pl-3 font-bold whitespace-nowrap">अनुमानित बैंक भ्यालुएसन</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                        {entry.rates.map((r, idx) => {
                          const bankVal = Math.round(r.govRate * 0.3 + r.marketRateEstimate * 0.7);
                          return (
                            <tr key={idx}>
                              <td className="py-2.5 pr-3">
                                <div className="font-bold text-slate-900 dark:text-white">{r.roadType}</div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400">{r.description}</div>
                              </td>
                              <td className="py-2.5 px-3 font-extrabold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">
                                रु. {r.govRate.toLocaleString('en-IN')}
                              </td>
                              <td className="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                                रु. {r.marketRateEstimate.toLocaleString('en-IN')}
                              </td>
                              <td className="py-2.5 pl-3 font-bold text-blue-700 dark:text-blue-400 whitespace-nowrap">
                                रु. {bankVal.toLocaleString('en-IN')}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Scale className="w-5 h-5 text-emerald-600" />
              <span>{info.districtNp} जिल्लाको सरकारी न्यूनतम मूल्याङ्कन हेर्ने आधिकारिक विधि</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {info.districtNp} जिल्लाका प्रत्येक नगरपालिका, गाउँपालिका र वडा अनुसार सटीक थैली मूल्याङ्कन दर जिल्ला मूल्याङ्कन समितिले हरेक आर्थिक वर्षमा प्रकाशन गर्ने <strong>"आर्थिक वर्ष न्यूनतम मूल्याङ्कन पुस्तिका"</strong> बाट तय हुन्छ। जग्गा पास गर्नुअघि सम्बन्धित मालपोत कार्यालय वा{' '}
              <a
                href="https://dolrm.gov.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-bold underline"
              >
                भूमि व्यवस्थापन तथा अभिलेख विभाग (dolrm.gov.np)
              </a>{' '}
              बाट आफ्नो कित्ता जोडिएको बाटोको चौडाइ (राजमार्ग, पक्की पिच, ग्राभेल वा गोरेटो) अनुसार दर यकिन गर्नुपर्दछ।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                <strong className="block text-slate-900 dark:text-white mb-1">१. थैली रकम नियम</strong>
                <span className="text-slate-600 dark:text-slate-300">
                  सरकारी न्यूनतम मूल्याङ्कन बराबर वा सोभन्दा कम थैली राखी राजीनामा पास गर्न पाइँदैन।
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                <strong className="block text-slate-900 dark:text-white mb-1">२. बैंक धितो मूल्याङ्कन</strong>
                <span className="text-slate-600 dark:text-slate-300">
                  बैंकहरूले सामान्यतया ३०% सरकारी मूल्याङ्कन र ७०% बजार मूल्यको भारित औसतबाट Fair Market Value निकाल्छन्।
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80">
                <strong className="block text-slate-900 dark:text-white mb-1">३. महिला रजिष्ट्रेसन छुट</strong>
                <span className="text-slate-600 dark:text-slate-300">
                  महानगरमा २५%, उपमहानगर/नगरमा ३५% र गाउँपालिकामा ५०% सम्म लिखत पास दस्तुर छुट उपलब्ध छ।
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Interactive In-Page District Registration Fee & Tax Estimator */}
        <DistrictQuickTaxEstimator
          districtNp={info.districtNp}
          districtEn={info.districtEn}
          districtSlug={info.slug}
          sampleRate={valuationEntries[0]?.rates[0]?.govRate || 1000000}
          sampleUnit={valuationEntries[0]?.unit || 'प्रति आना / कट्ठा'}
        />

        {/* Official Malpot Offices in This District */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-600" />
            <span>{info.districtNp} का मालपोत कार्यालयहरू (सम्पर्क तथा कार्यक्षेत्र)</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(malpotOffices.length > 0 ? malpotOffices : allDistrictOffices).map((office) => (
              <div
                key={office.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300">
                      {office.type === 'malpot' ? 'मालपोत कार्यालय (DOLRM)' : 'नापी कार्यालय (DOS)'}
                    </span>
                    <h3 className="text-base font-black text-slate-900 dark:text-white mt-1.5">{office.nameNp}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{office.nameEn}</p>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{office.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <a
                      href={`tel:${office.phone.split(',')[0].replace(/[^0-9+]/g, '')}`}
                      className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{office.email}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 text-[11px] leading-relaxed mt-2">
                    <strong className="text-slate-800 dark:text-slate-200">कार्यक्षेत्र: </strong>
                    {office.jurisdiction}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statutory Tools & District Links */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/tools/malpot-calculator"
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 transition-all space-y-1 shadow-sm"
          >
            <div className="flex items-center gap-2 font-black text-sm text-emerald-700 dark:text-emerald-400">
              <Calculator className="w-4 h-4" />
              <span>रजिष्ट्रेसन दस्तुर क्यालकुलेटर</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              थैली रकम हालेर पास खर्च, महिला छुट र पुँजीगत लाभकर तुरुन्त हिसाब गर्नुहोस्।
            </p>
          </Link>

          <Link
            href={`/tools/survey-offices/${info.slug}`}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 transition-all space-y-1 shadow-sm"
          >
            <div className="flex items-center gap-2 font-black text-sm text-blue-700 dark:text-blue-400">
              <Building2 className="w-4 h-4" />
              <span>{info.districtNp} नापी कार्यालय फोन</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              नापी कार्यालय, मेरोकित्ता ट्रेस नक्सा र वडा कार्यक्षेत्र हेर्नुहोस्।
            </p>
          </Link>

          <Link
            href="/tools/bayana-agreement-generator"
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 transition-all space-y-1 shadow-sm"
          >
            <div className="flex items-center gap-2 font-black text-sm text-amber-700 dark:text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>बैनापट्टा कागज जेनेरेटर</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              कानुनी मान्यता प्राप्त घरजग्गा बैना सम्झौता पत्र तयार गरी प्रिन्ट गर्नुहोस्।
            </p>
          </Link>
        </section>

        {/* FAQ */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-emerald-600" />
            <span>{info.districtNp} मालपोत मूल्याङ्कन सम्बन्धी प्रश्नोत्तर (FAQs)</span>
          </h2>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white">
                १. {info.districtNp} मा जग्गाको सरकारी दर किन हरेक वर्ष परिवर्तन हुन्छ?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                जिल्ला मूल्याङ्कन समितिले सडक स्तरोन्नति, बस्ती विस्तार र बजार कारोबारलाई ध्यानमा राखी हरेक आर्थिक वर्षको साउन १ गतेदेखि न्यूनतम मूल्याङ्कन दर पुनरावलोकन गर्दछ।
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
              <h3 className="font-bold text-slate-900 dark:text-white">
                २. अनलाइन LRIMS / MeroKitta र मालपोत कार्यालयको आधिकारिक पोर्टल कुन हो?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                भूमि व्यवस्थापन तथा अभिलेख विभागको आधिकारिक वेबसाइट{' '}
                <a
                  href="https://dolrm.gov.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 underline font-bold inline-flex items-center gap-0.5"
                >
                  dolrm.gov.np <ExternalLink className="w-3 h-3" />
                </a>{' '}
                र नापी विभागको नक्सा पोर्टल{' '}
                <a
                  href="https://merokitta.dos.gov.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 underline font-bold inline-flex items-center gap-0.5"
                >
                  merokitta.dos.gov.np <ExternalLink className="w-3 h-3" />
                </a>{' '}
                हुन्।
              </p>
            </div>
          </div>
        </section>

        {/* Same Province Links */}
        {siblingDistricts.length > 0 && (
          <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              {provinceName} का अन्य जिल्लाका मालपोत मूल्याङ्कन र कार्यालयहरू
            </h2>
            <div className="flex flex-wrap gap-2">
              {siblingDistricts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/tools/malpot-valuation-rates/${d.slug}`}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-700 transition-colors"
                >
                  {d.districtNp} ({d.districtEn})
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Official English District Cadastral & Valuation Report for AdSense & International Readers */}
        <DistrictEnglishDocumentation
          districtEn={info.districtEn}
          districtNp={info.districtNp}
          slug={info.slug}
          provinceName={provinceName}
          cityAliasesEn={info.cityAliasesEn}
          offices={allDistrictOffices}
          valuationEntries={valuationEntries}
          mode="malpot-valuation"
        />

        <PatroAppPromoBanner variant="inline" />

        <SocialShareBar
          title={`${info.districtNp} (${info.districtEn}) सरकारी मालपोत मूल्याङ्कन तथा कार्यालय विवरण`}
          url={`/tools/malpot-valuation-rates/${info.slug}`}
        />
      </main>

      <Footer />
    </div>
  );
}
