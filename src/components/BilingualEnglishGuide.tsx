import React from 'react';
import Link from 'next/link';
import { BookOpen, Globe, Calculator, Scale, Compass, FileCheck2 } from 'lucide-react';

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
            <span>OFFICIAL BILINGUAL TECHNICAL REFERENCE (ENGLISH &amp; NEPALI)</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
            Nepal Land Surveying, Cadastral Regulations &amp; Engineering Utilities — Technical Overview
          </h2>
        </div>
        <Link
          href="/about"
          className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline shrink-0"
        >
          Read Full Platform Documentation &rarr;
        </Link>
      </div>

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
              <strong>Hilly &amp; Kathmandu Valley System (Ropani–Aana–Paisa–Daam):</strong> 1 Ropani equals <strong>16 Aana</strong>, <strong>64 Paisa</strong>, <strong>256 Daam</strong>, <strong>5,476 sq. ft.</strong>, or <strong>508.737 sq. meters</strong> (74 ft &times; 74 ft standard plot). Similarly, 1 Aana equals <strong>342.25 sq. ft.</strong> (31.796 sq. meters) or 4 Paisa.
            </li>
            <li>
              <strong>Terai &amp; Inner Madhesh System (Bigha–Katha–Dhur–Kanwa):</strong> 1 Bigha equals <strong>20 Katha</strong>, <strong>400 Dhur</strong>, <strong>72,900 sq. ft.</strong>, or <strong>6,772.63 sq. meters</strong>. One Katha equals <strong>20 Dhur</strong> or <strong>3,645 sq. ft.</strong> (338.63 sq. meters), and 1 Dhur equals <strong>182.25 sq. ft.</strong> (16.93 sq. meters).
            </li>
          </ul>
          <p>
            Our interactive <Link href="/tools/land-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Nepal Land Unit Converter</Link> and the <strong>Land Solution Android Application</strong> execute instant, floating-point verified conversions across all cadastral units, irregular triangle parcels (Heron&apos;s Formula), and multi-vertex polygons.
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
          </ul>
          <p>
            Verify plot eligibility instantly using our <Link href="/tools/kitta-kat-checker" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Kitta-Kat Eligibility Checker</Link> and <Link href="/tools/road-setback" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Road Right-of-Way &amp; Setback Calculator</Link>.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>3. Property Registration Tax, Capital Gains &amp; Valuation Guide</span>
          </h3>
          <p>
            Real estate transactions at Land Revenue Offices (Malpot Karyalaya) in Nepal involve statutory registration fees (Rajinama Thaili Dastur), Capital Gains Tax (Labhkar), and targeted tax exemptions:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Capital Gains Tax (CGT):</strong> Levied on property transfers exceeding NPR 10 Lakhs where sale value exceeds acquisition cost. For individuals, the rate is <strong>5%</strong> for properties held for 5 years or more, and <strong>7.5%</strong> for properties held for less than 5 years.
            </li>
            <li>
              <strong>Women &amp; Target Group Rebates:</strong> Female citizens receive a statutory <strong>25% to 50% discount</strong> on registration fees depending on municipality, single-woman status, or joint spouse ownership (NPR 100 flat fee for co-registration with spouse).
            </li>
          </ul>
          <p>
            Estimate total deed transfer expenses with the <Link href="/tools/malpot-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Malpot Registration &amp; Capital Gains Tax Calculator</Link>.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
            <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>4. Cadastral AutoCAD Automation &amp; Bikram Sambat Panchanga</span>
          </h3>
          <p>
            Created by surveyor and software developer <strong>BR Bhatta</strong>, this portal provides free civil engineering and citizen utilities tailored for Nepal:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>AutoCAD AutoLISP (.LSP) Suite:</strong> Automated coordinate table generation, polygon area annotation in Ropani/Bigha, parcel splitting, and traverse plotting scripts for licensed surveyors and civil engineers.
            </li>
            <li>
              <strong>100-Year Bikram Sambat Calendar (2000–2099 BS):</strong> Our <Link href="/patro" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Nepali Patro &amp; Vedic Panchanga</Link> computes daily Tithi, Nakshatra, Yoga, Karana, BS-to-AD date conversions, and 36-Point Ashtakoot Kundali matching using astronomical Surya Siddhanta algorithms.
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
}

export function ArticleEnglishReference({
  title,
  slug,
  category,
  categoryNepali,
  publishedDate,
}: ArticleEnglishReferenceProps) {
  const readableTopic = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section
      aria-label="English Executive Summary and Technical Reference"
      className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <h2 className="font-black text-slate-900 dark:text-white text-sm sm:text-base">
            English Executive Summary &amp; Technical Reference: {readableTopic}
          </h2>
        </div>
        <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
          {category}
        </span>
      </div>

      <p>
        <strong>Overview:</strong> This comprehensive technical guide (<em className="text-slate-900 dark:text-slate-100">{title}</em>) published under the <strong>{category} ({categoryNepali})</strong> documentation series on <strong>BR Bhatta &amp; Land Solution Nepal</strong> provides verified regulatory procedures, mathematical conversion formulas, and practical guidelines applicable across all 77 districts of Nepal as of {publishedDate}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            Key Regulatory &amp; Technical Highlights
          </h3>
          <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-400">
            <li>
              <strong>Standard Measurement Reference:</strong> 1 Ropani = 16 Aana = 64 Paisa = 256 Daam = 5,476 sq. ft. (508.74 m&sup2;); 1 Bigha = 20 Katha = 400 Dhur = 72,900 sq. ft. (6,772.63 m&sup2;).
            </li>
            <li>
              <strong>Statutory Framework:</strong> Aligned with the Land Act 2021, Land Use Act 2076, Land Use Regulation 2079 (First Amendment 2080/2081), and National Civil Code (Muluki Dewani Samhita) 2074 of Nepal.
            </li>
            <li>
              <strong>Institutional Compliance:</strong> Procedures reflect standard workflows at the Survey Office (Napi Karyalaya), Land Revenue Office (Malpot Karyalaya), and Local Ward Offices.
            </li>
          </ul>
        </div>

        <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
          <h3 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider">
            How to Use This Guide &amp; Companion Tools
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Readers, property owners, civil engineers, and licensed surveyors (Amin) can cross-verify the calculations and legal requirements discussed in this article using our free browser-based utilities:
          </p>
          <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600 dark:text-slate-400">
            <li>
              <Link href="/tools/land-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Nepal Land Area Converter</Link> for instant Ropani/Bigha/Sq.Ft. conversions.
            </li>
            <li>
              <Link href="/tools/kitta-kat-checker" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Land Subdivision (Kitta-Kat) Checker</Link> for 2081 plot size compliance.
            </li>
            <li>
              <Link href="/tools/malpot-calculator" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Malpot &amp; Capital Gains Tax Calculator</Link> and <Link href="/patro" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Nepali Patro 2081/2082</Link>.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
