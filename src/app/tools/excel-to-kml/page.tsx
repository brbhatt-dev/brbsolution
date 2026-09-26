'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Compass, 
  Download, 
  FileSpreadsheet, 
  Sparkles, 
  MapPin, 
  ArrowLeft,
  FileCheck2,
  Table,
  Upload,
  Layers,
  Globe
} from 'lucide-react';
import { SurveyPoint, generateKml, mutmToLatLong } from '@/lib/kmlGenerator';

const SAMPLE_CSV = `PointID,Easting,Northing,Elevation,Description
P1,632450.25,3065120.80,1350.20,Pillar 1
P2,632510.80,3065145.40,1351.10,Pillar 2
P3,632535.15,3065095.60,1349.80,Pillar 3
P4,632465.90,3065070.30,1349.50,Pillar 4`;

export default function ExcelToKmlPage() {
  const [inputText, setInputText] = useState<string>(SAMPLE_CSV);
  const [cm, setCm] = useState<81 | 84 | 87>(84);
  const [connectLine, setConnectLine] = useState<boolean>(true);
  const [layerName, setLayerName] = useState<string>('फिल्ड नापी कित्ता कोर्डिनेट');

  // Parse points from inputText
  const parsePoints = (text: string): SurveyPoint[] => {
    const lines = text.trim().split('\n');
    const points: SurveyPoint[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Skip header line if detected
      if (i === 0 && (line.toLowerCase().includes('east') || line.toLowerCase().includes('point') || line.toLowerCase().includes('x'))) {
        continue;
      }

      // Split by comma, tab, or spaces
      const cols = line.includes(',')
        ? line.split(',')
        : line.includes('\t')
        ? line.split('\t')
        : line.split(/\s+/);

      if (cols.length >= 3) {
        const id = cols[0].trim();
        const x = parseFloat(cols[1].trim());
        const y = parseFloat(cols[2].trim());
        const z = cols[3] ? parseFloat(cols[3].trim()) : 0;
        const desc = cols[4] ? cols.slice(4).join(' ').trim() : 'Point ' + id;

        if (!isNaN(x) && !isNaN(y)) {
          points.push({
            id,
            name: id,
            x,
            y,
            z: isNaN(z) ? 0 : z,
            description: desc,
          });
        }
      }
    }

    return points;
  };

  const points = parsePoints(inputText);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      setInputText(content);
    };
    reader.readAsText(file);
  };

  const handleDownloadKml = () => {
    if (points.length === 0) {
      alert('कृपया पहिले कम्तीमा एउटा कोर्डिनेट बिन्दु प्रविष्ट गर्नुहोस्।');
      return;
    }

    const kmlContent = generateKml(points, layerName, connectLine, cm);
    const blob = new Blob([kmlContent], { type: 'application/vnd.google-earth.kml+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${layerName.replace(/\s+/g, '_')}.kml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-emerald-600 flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>सबै टूल्सहरू (All Tools)</span>
          </Link>
          <span>/</span>
          <span className="text-slate-800 dark:text-slate-200 font-semibold">Survey Excel to Google Earth KML</span>
        </div>

        {/* Hero Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>नापी अमिन तथा इन्जिनियरिङ GIS टूल</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            सर्भे कोर्डिनेट Excel ➔ Google Earth (KML Generator)
          </h1>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Total Station वा GPS बाट टिपिएको Easting, Northing कोर्डिनेट तालिकालाई एक क्लिकमा Google Earth मा हेर्न मिल्ने `.kml` फाइल बनाउनुहोस्।
          </p>
        </div>

        {/* Configuration Bar */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Layer Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                नक्सा तहको नाम (KML Layer Name):
              </label>
              <input
                type="text"
                value={layerName}
                onChange={(e) => setLayerName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold focus:outline-none"
              />
            </div>

            {/* Central Meridian */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                नेपाल MUTM केन्द्रीय देशान्तर (Central Meridian):
              </label>
              <select
                value={cm}
                onChange={(e) => setCm(Number(e.target.value) as 81 | 84 | 87)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold focus:outline-none"
              >
                <option value={84}>८४° (मध्य नेपाल: बागमती, गण्डकी, नारायणी)</option>
                <option value={81}>८१° (पश्चिम नेपाल: कर्णाली, सुदूरपश्चिम, लुम्बिनी)</option>
                <option value={87}>८७° (पूर्व नेपाल: कोशी, मधेश पूर्व)</option>
              </select>
            </div>

            {/* Polygon Connect Checkbox */}
            <div className="flex items-center pt-6">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800 dark:text-slate-200">
                <input
                  type="checkbox"
                  checked={connectLine}
                  onChange={(e) => setConnectLine(e.target.checked)}
                  className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span>बिन्दुहरूलाई रेखा (Boundary line) ले जोड्ने</span>
              </label>
            </div>

          </div>
        </div>

        {/* Input & Table Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Data Input Card */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                  <span>कोर्डिनेट डेटा पेस्ट गर्नुहोस् (CSV / Text):</span>
                </span>

                <div className="flex items-center gap-2">
                  <label className="cursor-pointer text-xs text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1">
                    <Upload className="w-3.5 h-3.5" />
                    <span>CSV फाइल अपलोड</span>
                    <input
                      type="file"
                      accept=".csv,.txt"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="PointID,Easting,Northing,Elevation,Description"
                rows={12}
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 font-mono text-xs text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
              />

              <p className="text-[11px] text-slate-500">
                💡 ढाँचा: <code>PointID, Easting(X), Northing(Y), Elevation(Z), Description</code>
              </p>
            </div>

            <button
              onClick={handleDownloadKml}
              disabled={points.length === 0}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>Google Earth KML फाइल डाउनलोड गर्नुहोस् ({points.length} बिन्दुहरू)</span>
            </button>
          </div>

          {/* Points Table Preview */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 overflow-hidden flex flex-col justify-between">
            <div className="space-y-3 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Table className="w-4 h-4 text-teal-600" />
                  <span>पढिएका बिन्दुहरूको तालिका ({points.length} Points)</span>
                </span>
                <span className="text-xs font-bold text-emerald-600">
                  WGS84 कोर्डिनेट गणना
                </span>
              </div>

              <div className="max-h-72 overflow-y-auto border border-slate-100 dark:border-slate-800 rounded-2xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 sticky top-0 font-bold border-b border-slate-200/80 dark:border-slate-700">
                    <tr>
                      <th className="p-2.5">Point</th>
                      <th className="p-2.5">Easting (X)</th>
                      <th className="p-2.5">Northing (Y)</th>
                      <th className="p-2.5">Elev (Z)</th>
                      <th className="p-2.5">WGS84 Lat, Long</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono text-[11px]">
                    {points.map((pt, idx) => {
                      const geo = mutmToLatLong(pt.x, pt.y, cm);
                      return (
                        <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                          <td className="p-2.5 font-bold text-slate-900 dark:text-white">{pt.name}</td>
                          <td className="p-2.5 text-slate-600 dark:text-slate-300">{pt.x.toFixed(2)}</td>
                          <td className="p-2.5 text-slate-600 dark:text-slate-300">{pt.y.toFixed(2)}</td>
                          <td className="p-2.5 text-slate-500">{pt.z ? pt.z.toFixed(1) : '-'}</td>
                          <td className="p-2.5 text-emerald-700 dark:text-emerald-400 font-bold">
                            {geo.lat.toFixed(6)}, {geo.lon.toFixed(6)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              <span className="font-bold block text-slate-800 dark:text-slate-200">
                🌏 Google Earth मा खोल्ने तरिका:
              </span>
              <p className="text-[11px] leading-relaxed">
                डाउनलोड भएको <strong>.kml</strong> फाइललाई डबल क्लिक गर्नुहोस् वा मोबाइल/कम्प्युटरको Google Earth एपमा तानेर हाल्नुहोस्। तपाईंको जग्गा वा फिल्डका सबै किल्लाहरू प्रत्यक्ष स्याटेलाइट नक्सामा देखिनेछन्।
              </p>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
