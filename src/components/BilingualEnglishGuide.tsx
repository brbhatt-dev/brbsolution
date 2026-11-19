import React from 'react';
import Link from 'next/link';
import { BookOpen, Globe, Calculator, Scale, Compass, FileCheck2, Landmark, ShieldCheck } from 'lucide-react';

export function HomeEnglishDocumentation() {
  return (
    <section
      aria-label="Platform Overview and Technical Documentation in English"
      className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
            <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>OFFICIAL ENGLISH TECHNICAL DOCUMENTATION &amp; CADASTRAL REFERENCE</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
            Nepal Land Surveying, Cadastral Regulations, Property Taxation &amp; Civil Engineering Utilities — Complete English Guide
          </h2>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/en"
            className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
          >
            English Portal (/en) &rarr;
          </Link>
          <Link
            href="/about"
            className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            About Creator
          </Link>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <strong>BR Bhatta (www.brbhatta.com)</strong> is an independent civil geomatics, cadastral surveying, and legal-tech software platform developed in Kathmandu, Nepal by licensed surveyor and software engineer <strong>Bhakta Raj Bhatt</strong>. Our suite of browser-based calculators, AutoCAD AutoLISP (<code className="font-mono">.LSP</code>) automation scripts, and the <strong>Land Solution</strong> &amp; <strong>BR Patro</strong> Android applications provide verified computational tools for property buyers, civil engineers, licensed surveyors (Amin), real estate valuers, commercial bankers, and Non-Resident Nepalis (NRNs) worldwide.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <Calculator className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>1. Standard Nepal Land Measurement &amp; Area Conversion</span>
          </h3>
          <p>
            Land administration and cadastral mapping in Nepal rely on two primary traditional measurement systems alongside the metric system (Square Meters) and Imperial units (Square Feet):
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Hilly &amp; Kathmandu Valley System (Ropani–Aana–Paisa–Daam):</strong> 1 Ropani equals <strong>16 Aana</strong>, <strong>64 Paisa</strong>, <strong>256 Daam</strong>, <strong>5,476 sq. ft.</strong>, or <strong>508.737 sq. meters</strong> (74 ft &times; 74 ft standard plot). Similarly, 1 Aana equals <strong>342.25 sq. ft.</strong> (31.796 sq. meters) or 4 Paisa, 1 Paisa equals <strong>85.56 sq. ft.</strong> (7.95 sq. meters), and 1 Daam equals <strong>21.39 sq. ft.</strong> (1.99 sq. meters).
            </li>
            <li>
              <strong>Terai &amp; Inner Madhesh System (Bigha–Katha–Dhur–Kanwa):</strong> 1 Bigha equals <strong>20 Katha</strong>, <strong>400 Dhur</strong>, <strong>72,900 sq. ft.</strong>, or <strong>6,772.63 sq. meters</strong> (approx. 13.31 Ropani). One Katha equals <strong>20 Dhur</strong> or <strong>3,645 sq. ft.</strong> (338.63 sq. meters / 10.65 Aana), and 1 Dhur equals <strong>182.25 sq. ft.</strong> (16.93 sq. meters).
            </li>
          </ul>
          <p>
            Our interactive <Link href="/en/tools/land-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">English Nepal Land Unit Converter</Link> and the <strong>Land Solution Android Application</strong> execute instant, floating-point verified conversions across all cadastral units, irregular triangle parcels (Heron&apos;s Formula), and multi-vertex polygons.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <Scale className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>2. Land Use Regulation 2079/2081 &amp; Plotting (Kitta-Kat) Standards</span>
          </h3>
          <p>
            Under the amended <strong>Land Use Regulation (Bhu-Upayog Niyamawali)</strong> enforced by the Ministry of Land Management, Cooperatives and Poverty Alleviation in Nepal, land parcels are classified into 10 distinct zones, primarily Residential (Awasiya) and Agricultural (Krishi):
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Residential Land Subdivision (Awasiya Kitta-Kat):</strong> Requires a minimum plot area of <strong>130 sq. meters</strong> (approx. 4 Aana 0.38 Paisa in hills or 7.67 Dhur in Terai), with exceptions allowing down to 80 sq. meters for plots smaller than 500 sq. meters meeting municipal road right-of-way (ROW) criteria.
            </li>
            <li>
              <strong>Agricultural Land Subdivision (Krishi Kitta-Kat):</strong> Requires at least <strong>500 sq. meters</strong> in Kathmandu Valley, <strong>675 sq. meters</strong> in Terai and Inner Madhesh, and <strong>1,000 sq. meters</strong> across other hilly and mountainous districts.
            </li>
            <li>
              <strong>NEA High-Tension &amp; Road Setback Rules:</strong> Permanent building construction requires a 1.5 m (5 ft) neighbor window setback, municipal road ROW clearance, and strict Nepal Electricity Authority (NEA) High-Tension corridor setbacks (3m–6m for 11kV/33kV, 18m corridor for 66kV/132kV, 30m for 220kV, and 46m for 400kV lines).
            </li>
          </ul>
          <p>
            Verify plot eligibility instantly using our <Link href="/en/tools/kitta-kat-checker" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">English Kitta-Kat Eligibility Checker</Link> and <Link href="/en/tools/setback-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">High-Tension &amp; Road Setback Calculator</Link>.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>3. Property Registration Tax, Capital Gains &amp; 77-District Valuation</span>
          </h3>
          <p>
            Real estate transactions at Land Revenue Offices (Malpot Karyalaya) in Nepal involve statutory registration fees (Rajinama Thaili Dastur), Capital Gains Tax (Labhkar), and minimum valuation thresholds fixed annually by each district&apos;s CDO-chaired Valuation Committee:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Deed Registration Fees (FY 2083/84):</strong> Typically <strong>5%</strong> in Metropolitan cities, <strong>4.5%</strong> in Sub-Metropolitan and Municipal areas, and <strong>4%</strong> in Rural Municipalities, calculated on whichever is higher between the declared deed price (Thaili) and the official <Link href="/en/tools/malpot-valuation-rates" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Government Minimum Land Valuation Rate</Link>.
            </li>
            <li>
              <strong>Capital Gains Tax (CGT / Labhkar):</strong> Levied on property transfers exceeding NPR 10 Lakhs where sale value exceeds acquisition cost. For individuals under the Income Tax Act 2058, the rate is <strong>5%</strong> for properties held for 5 years or more, and <strong>7.5%</strong> for properties held for less than 5 years.
            </li>
            <li>
              <strong>Women &amp; Target Group Rebates:</strong> Female citizens receive a statutory <strong>25% to 50% discount</strong> on registration fees depending on municipality, single-woman status, or joint spouse ownership (NPR 100 flat fee for co-registration with spouse).
            </li>
          </ul>
          <p>
            Estimate total deed transfer expenses with the <Link href="/en/tools/malpot-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">English Malpot Registration &amp; CGT Calculator</Link> and <Link href="/en/tools/number-to-words" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Nepali Rupees Cheque Number-to-Words Converter</Link>.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>4. Cadastral AutoCAD Automation, 185+ Office Directory &amp; Vedic Panchanga</span>
          </h3>
          <p>
            Created by surveyor and software developer <strong>BR Bhatta</strong>, this portal provides free civil engineering and citizen utilities tailored for Nepal:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>77-District Survey &amp; Malpot Directory:</strong> Our <Link href="/en/tools/survey-offices" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">English Survey (Napi) &amp; Malpot Office Directory</Link> indexes verified phone numbers, emails, ward jurisdictions, and MeroKitta online trace map links for 185+ government offices across all 7 provinces.
            </li>
            <li>
              <strong>AutoCAD AutoLISP (.LSP) Suite:</strong> Automated coordinate table generation, polygon area annotation in Ropani/Bigha, parcel splitting, and traverse plotting scripts for licensed surveyors and civil engineers.
            </li>
            <li>
              <strong>100-Year Bikram Sambat Calendar (2000–2099 BS):</strong> Our <Link href="/en/patro" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">English Nepali Patro &amp; BS-AD Date Converter</Link> computes daily Tithi, Nakshatra, Yoga, Karana, BS-to-AD date conversions, and 36-Point Ashtakoot Kundali matching using astronomical Surya Siddhanta algorithms.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

interface ArticleEnglishReferenceProps {
  title: string;
  slug: string;
  category: string;
  categoryNepali: string;
  publishedDate: string;
  summary?: string;
  sections?: Array<{ id: string; heading: string; content: string }>;
  faqs?: Array<{ question?: string; q?: string; answer?: string; a?: string }>;
}

function getTopicSpecificEnglishModule(slug: string, category: string) {
  const s = slug.toLowerCase();
  if (s.includes('valuation') || s.includes('malpot') || s.includes('tax') || s.includes('women') || s.includes('loan') || s.includes('emi')) {
    return {
      moduleTitle: 'Statutory Land Valuation, Malpot Registration Tax & Capital Gains Framework in Nepal',
      paragraphs: [
        'In Nepal, every real estate conveyance (Rajinama Likhat Pass) registered at a District Land Revenue Office (Malpot Karyalaya) under the Department of Land Management and Archive (dolrm.gov.np) is subject to a dual-valuation rule established by the Land Revenue Act 2034 (1978 AD) and the annual provincial Finance Acts. Each district maintains a statutory District Valuation Committee chaired by the Chief District Officer (CDO), which publishes minimum per-Aana (in hilly districts) or per-Kattha (in Terai districts) land rates every Shrawan 1 based on road width and surface classification (National Highway, Pitched Urban Road, Graveled Feeder Road, Earthen Track, or Foot Trail / Goreto Bato).',
        'When calculating deed registration tax (Rajinama Dastur), the Malpot Officer compares the buyer and seller’s declared transaction price (Thaili Rakam) against the official Government Minimum Valuation Rate (Sarkari Mulyankan). Under Nepalese property law, registration fees and Capital Gains Tax (Labhkar) are always assessed on whichever value is higher. Standard deed registration rates stand at 5.0% in Metropolitan Cities (such as Kathmandu, Lalitpur, Pokhara, Bharatpur, Biratnagar, and Birgunj), 4.5% in Sub-Metropolitan and Municipal areas, and 4.0% in Rural Municipalities (Gaupalika).',
        'To promote women’s property ownership and financial inclusion, the Government of Nepal grants a statutory 25% registration tax exemption in urban municipalities and up to 50% exemption in rural/mountainous municipalities when land is registered solely in the name of a female citizen (with an additional 35% discount for single women/widows and a flat NPR 100 registration fee for joint husband-wife Dampati Kayam registration), provided the parcel is not resold within 3 years. For sellers, individual Capital Gains Tax (CGT) under the Income Tax Act 2058 applies to transactions exceeding NPR 10,00,000 (1 Million NPR / 10 Lakhs) at 5% for long-term ownership (5 years or more) and 7.5% for short-term ownership (under 5 years). Commercial banks in Nepal further blend 70% prevailing market price with 30% government Malpot valuation to establish Fair Market Value (FMV) for home and business mortgage loans.'
      ]
    };
  }
  if (s.includes('kitta-kat') || s.includes('plotting') || s.includes('bato') || s.includes('setback') || s.includes('boundary') || s.includes('bye-law')) {
    return {
      moduleTitle: 'Cadastral Parcel Subdivision (Kitta-Kat), Land Use Regulation 2079 & Municipal Building Setback Standards',
      paragraphs: [
        'Parcel subdivision (Kitta-Kat) and building permit approval (Naksa Pas) in Nepal are strictly governed by the Land Use Act 2076, the Land Use Regulation 2079 (including the First Amendment 2080/2081), and the Basic Bylaws on Settlement Development, Urban Planning and Building Construction 2072. Every local municipality (Palika) is mandated to classify land into 10 statutory Land Use Zones—primarily Residential (Awasiya Kshetra) and Agricultural (Krishi Kshetra)—before the Survey Office (Napi Karyalaya) approves any cadastral map split.',
        'For Residential Zone parcels (Awasiya Jagga), the minimum allowed plot area after subdivision is 130 square meters (equivalent to 4 Aana 0.38 Paisa or 1,399.31 sq. ft. in the hilly Ropani system, and 7.68 Dhur in the Terai Bigha system). A conditional relaxation down to 80 square meters (approx. 2.5 Aana) is permitted for existing parent parcels smaller than 500 square meters that have adequate road frontage. For Agricultural Zone parcels (Krishi Jagga), minimum subdivision thresholds are significantly higher to prevent farmland fragmentation: 500 sq. meters in Kathmandu Valley, 675 sq. meters (approx. 2 Kattha) in Terai and Inner Madhesh districts, and 1,000 sq. meters (approx. 2 Ropani) across hilly and mountainous districts.',
        'In addition to minimum plot area, landowners and civil engineers must observe mandatory Right-of-Way (ROW) and setback clearances: a minimum 6-meter (20 ft) access road width for new residential subdivisions, a 1.5-meter (5 ft) setback from the road edge, a strict 1.5-meter (5 ft) clearance from neighbor boundaries wherever windows, doors, or balconies are placed (under the National Civil Code 2074), and Nepal Electricity Authority (NEA) High-Tension electrical corridor setbacks (3m–6m for 11kV/33kV lines, 18m total corridor for 66kV/132kV lines, 30m for 220kV lines, and 46m for 400kV transmission lines).'
      ]
    };
  }
  if (s.includes('survey') || s.includes('napi') || s.includes('merokitta') || s.includes('cadastral') || s.includes('naksa') || s.includes('autocad') || s.includes('scale') || s.includes('area')) {
    return {
      moduleTitle: 'Cadastral Surveying (Napi), MeroKitta Digital Maps & Civil Geomatics Standards in Nepal',
      paragraphs: [
        'The Department of Survey (Napi Bibhag — dos.gov.np) under the Ministry of Land Management, Cooperatives and Poverty Alleviation serves as Nepal’s national mapping and cadastral authority. Operating across 77 districts through 130+ Survey Offices (Napi Karyalaya), the Department maintains trigonometric geodetic control networks, cadastral parcel maps (Kitta Naksa) drawn at standard scales of 1:500 (dense urban cores), 1:1250 (municipal settlements), and 1:2500 (open agricultural terrain), as well as official Field Books (Fieldbook उतार) and Plot Registers.',
        'Through the Nepal Land Information System (NELIS) and the MeroKitta online portal (merokitta.dos.gov.np), registered landowners can digitally apply for cadastral trace maps (Naksa Print), Field Book extracts, and plot information reports by authenticating their citizenship details, selecting their jurisdiction Survey Office, Ward No., Map Sheet No., and Parcel (Kitta) No., and paying statutory revenue fees via ConnectIPS, eSewa, or Khalti without visiting the physical office.',
        'For field engineering and geometric verification, licensed surveyors (Amin) and civil engineers convert raw tape, total station, or DGPS measurements into Nepal’s two statutory unit systems: the Hilly System (1 Ropani = 16 Aana = 64 Paisa = 256 Daam = 508.737 sq. meters = 5,476 sq. ft.) and the Terai System (1 Bigha = 20 Kattha = 400 Dhur = 6,772.63 sq. meters = 72,900 sq. ft.). Irregular four-sided or multi-vertex polygons are subdivided into triangles and solved using Heron’s semi-perimeter formula S = (a + b + c)/2 and Area = √[S(S − a)(S − b)(S − c)] or Cartesian coordinate cross-multiplication (Shoelace Algorithm) inside AutoCAD using automated AutoLISP (.LSP) scripts.'
      ]
    };
  }
  if (s.includes('patro') || s.includes('calendar') || s.includes('saait') || s.includes('kundali') || s.includes('festival')) {
    return {
      moduleTitle: 'Bikram Sambat (BS) Luni-Solar Astronomy, Vedic Panchanga & Gregorian (AD) Chronology',
      paragraphs: [
        'The Bikram Sambat (BS) calendar serves as the official constitutional and administrative calendar of Nepal, operating approximately 56 years, 8 months, and 15 days ahead of the international Gregorian (AD) calendar. Unlike the fixed solar month lengths of the Gregorian system, Bikram Sambat is an astronomical solar-sidereal and luni-solar calendar governed by Surya Siddhanta equations and officially regulated each year by the Nepal Panchanga Nirnayak Bikash Samiti.',
        'In the Bikram Sambat system, solar months (Baisakh through Chaitra) correspond to the Sun’s actual transit (Sankranti) across the 12 sidereal zodiac constellations (Rashi) from Mesha (Aries) to Meena (Pisces), causing individual month lengths to vary dynamically between 29 and 32 days. Meanwhile, civil and religious festivals, auspicious marriage ceremonies (Bibaha Lagan), housewarming dates (Griha Pravesh), and real estate foundation rituals (Silanyas / Jag Puja) are determined by the five limbs of the Vedic Panchanga: Tithi (12° lunar-solar elongation steps across Shukla Paksha and Krishna Paksha), Vara (solar weekday), Nakshatra (27 lunar mansions of 13°20′ each), Yoga, and Karana.',
        'Our 100-Year Bikram Sambat Engine (2000 BS to 2099 BS / 1943 AD to 2043 AD) and the BR Patro mobile application provide verified BS-to-AD and AD-to-BS date conversions, daily sunrise/sunset timings for Kathmandu (NPT UTC+05:45), public holiday schedules, and 36-Point Ashtakoot Guna Milan compatibility calculations.'
      ]
    };
  }
  return {
    moduleTitle: 'Property Law, Title Succession (Namsari), Partition (Anshabanda), Encumbrance (Rokka) & Tenancy (Mohi) Rules under Nepal National Civil Code 2074',
    paragraphs: [
      'Property ownership, family inheritance, contract enforcement, and land dispute adjudication in Nepal are codified under the National Civil Code 2074 (Muluki Dewani Samhita 2074), the Land Act 2021 (Bhumi Sambandhi Ain), and the Land Revenue Act 2034. Every legal transfer—whether by sale deed (Rajinama), ancestral partition (Anshabanda), posthumous succession (Jagga Namsari / Aputali), gift deed (Bakaspatra), or mortgage collateral registration (Drishti Bandhaki / Rokka)—must be authenticated across three institutional tiers: the Local Ward Office (Wada Karyalaya), the Survey Office (Napi Karyalaya), and the Land Revenue Office (Malpot Karyalaya).',
      'Before any transfer or bank mortgage is executed, the local Ward Office issues mandatory verification certificates including the Road & House Recommendation (Ghar Bato Sifaris), Four-Boundary Certificate (Char Killa Pramanit), Relationship Verification (Nata Pramanit for inheritance Namsari), and Property Tax Clearance (Tiro Rasid). At the Malpot Office, clerks verify the central LRIMS digital ledger to confirm the parcel is free from judicial freezes, bank mortgage locks (Rokka), dual-ownership tenancy claims (Mohi Lagat), or public/Guthi trust restrictions.',
      'For bilateral earnest-money agreements (Bayana / Bainapatta), the National Civil Code 2074 requires clear specification of the parcel Kitta number, agreed total consideration, advance amount paid via banking channels, transfer deadline, and default penalty clauses. For dual-ownership parcels involving registered tenants (Mohi), statutory Mohi Lagat Katta and 50–50 parcel division procedures permanently separate landowner (Talsing) and tenant (Mohi) shares into independent, unencumbered Lalpurja certificates.'
    ]
  };
}

export function ArticleEnglishReference({
  title,
  slug,
  category,
  categoryNepali,
  publishedDate,
  summary,
  sections = [],
  faqs = [],
}: ArticleEnglishReferenceProps) {
  const readableTopic = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const topicModule = getTopicSpecificEnglishModule(slug, category);

  return (
    <section
      aria-label="Comprehensive English Technical Documentation and Regulatory Guide"
      className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold uppercase">
            <Globe className="w-3 h-3" />
            <span>Official English Editorial &amp; Legal Reference ({category})</span>
          </div>
          <h2 className="font-black text-slate-900 dark:text-white text-base sm:text-lg">
            English Technical &amp; Regulatory Analysis: {readableTopic}
          </h2>
        </div>
        <Link
          href="/en"
          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0"
        >
          Open English Portal (/en) &rarr;
        </Link>
      </div>

      {/* 1. Article Executive Summary in English */}
      <div className="space-y-3">
        <p>
          <strong>1. Executive Overview &amp; Scope:</strong> This in-depth editorial guide (<em className="text-slate-900 dark:text-slate-100">{title}</em>), authored by licensed surveyor and geomatics developer <strong>BR Bhatta (Bhakta Raj Bhatt)</strong> under the <strong>{category} ({categoryNepali})</strong> research series ({publishedDate}), provides an authoritative reference for property owners, legal practitioners, civil engineers, and real estate stakeholders across all 77 districts of Nepal.
          {summary ? ` (${summary})` : ''}
        </p>
      </div>

      {/* 2. Deep Topic-Specific English Legal & Engineering Analysis */}
      <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
        <h3 className="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
          <Landmark className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>2. {topicModule.moduleTitle}</span>
        </h3>
        {topicModule.paragraphs.map((p, idx) => (
          <p key={idx} className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* 3. Section-by-Section Structural Breakdown */}
      {sections.length > 0 && (
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h3 className="font-black text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>3. Chapter-by-Chapter Technical Outline Covered in This Guide ({sections.length} Core Sections)</span>
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Below is the structured outline of statutory rules, administrative checklists, and empirical calculations analyzed in this publication for <strong>{readableTopic}</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sections.map((sec, idx) => (
              <div
                key={sec.id || idx}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70 space-y-1"
              >
                <div className="font-bold text-slate-900 dark:text-white text-xs">
                  Chapter {idx + 1}: {sec.heading}
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-3">
                  {sec.content.replace(/[*#_`]/g, '').slice(0, 220)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Standard Regulatory & Companion English Utilities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>4. Statutory &amp; Cadastral Constants Reference</span>
          </h3>
          <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            <li>
              <strong>Hilly Cadastral System:</strong> 1 Ropani = 16 Aana = 64 Paisa = 256 Daam = 5,476 sq. ft. (508.74 m&sup2;); 1 Aana = 342.25 sq. ft. (31.80 m&sup2;).
            </li>
            <li>
              <strong>Terai Cadastral System:</strong> 1 Bigha = 20 Kattha = 400 Dhur = 72,900 sq. ft. (6,772.63 m&sup2;); 1 Kattha = 3,645 sq. ft. (338.63 m&sup2;); 1 Dhur = 182.25 sq. ft. (16.93 m&sup2;).
            </li>
            <li>
              <strong>Governing Legislation:</strong> Land Act 2021, Land Revenue Act 2034, Land Use Act 2076, Land Use Regulation 2079/2081, and National Civil Code 2074 of Nepal.
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>5. Interactive English Verification Calculators</span>
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Cross-check every rate, area threshold, and tax formula from this article in real time using our pure-English engineering tools:
          </p>
          <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/en/tools/land-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">English Land Unit Converter (Ropani/Bigha/Sq.Ft)</Link>
            </li>
            <li>
              <Link href="/en/tools/malpot-valuation-rates" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">77-District Government Land Valuation Finder (FY 2083/84)</Link>
            </li>
            <li>
              <Link href="/en/tools/malpot-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Malpot Registration Fee &amp; Capital Gains Tax (CGT) Calculator</Link>
            </li>
            <li>
              <Link href="/en/tools/kitta-kat-checker" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Kitta-Kat Subdivision Checker</Link> &amp; <Link href="/en/tools/setback-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">High-Tension Setback Calculator</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
