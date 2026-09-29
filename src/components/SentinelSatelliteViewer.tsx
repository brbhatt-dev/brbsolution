'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Satellite,
  Layers,
  Calendar,
  Compass,
  MapPin,
  Maximize2,
  ExternalLink,
  Copy,
  Check,
  AlertTriangle,
  Info,
  ChevronRight,
  Eye,
  Sliders,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface HotspotLocation {
  name: string;
  sub: string;
  lat: number;
  lng: number;
  zoom: number;
  description: string;
}

const NEPAL_HOTSPOTS: HotspotLocation[] = [
  {
    name: 'काठमाडौं उपत्यका',
    sub: 'सहरी विकास र प्लटिङ',
    lat: 27.7172,
    lng: 85.324,
    zoom: 13,
    description: 'काठमाडौं र ललितपुरको नयाँ बाटो तथा सहरी विस्तार'
  },
  {
    name: 'पोखरा (फेवाताल र सेती)',
    sub: 'तालको सिमाना र नदी',
    lat: 28.2096,
    lng: 83.9595,
    zoom: 13,
    description: 'फेवातालको जलाधार क्षेत्र तथा सेती खोंच'
  },
  {
    name: 'मेलम्ची बाढी क्षेत्र',
    sub: 'तटीय परिवर्तन र बगर',
    lat: 27.8328,
    lng: 85.5815,
    zoom: 14,
    description: 'बाढीपछिको नदी बहाव तथा बगरको ताजा अवस्था'
  },
  {
    name: 'कोशी ब्यारेज र नदी',
    sub: 'सप्तकोशी नदी कटान',
    lat: 26.8617,
    lng: 86.9315,
    zoom: 13,
    description: 'कोशी नदीको बालुवा टापु र धारको ताजा परिवर्तन'
  },
  {
    name: 'नारायणगढ / देवघाट',
    sub: 'नारायणी र त्रिशूली संगम',
    lat: 27.7126,
    lng: 84.4255,
    zoom: 13,
    description: 'नारायणी नदी तटीय क्षेत्र तथा बाढी रेखा'
  },
  {
    name: 'बुटवल (तिनाउ नदी)',
    sub: 'तिनाउ पुल र तटीय बस्ती',
    lat: 27.7006,
    lng: 83.4484,
    zoom: 14,
    description: 'तिनाउ नदी बहाव र किनारका बस्तीहरू'
  },
  {
    name: 'सुर्खेत (वीरेन्द्रनगर)',
    sub: 'उपत्यका चक्रपथ र प्लटिङ',
    lat: 28.5983,
    lng: 81.6338,
    zoom: 13,
    description: 'कर्णाली राजधानी वीरेन्द्रनगरको ताजा विकास'
  },
  {
    name: 'धनगढी (मोहना नदी)',
    sub: 'कैलाली सिमाना र नदी कटान',
    lat: 28.6944,
    lng: 80.5977,
    zoom: 13,
    description: 'मोहना नदी तटीय भूभाग र खेतीयोग्य जमिन'
  }
];

export default function SentinelSatelliteViewer() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const topLayerRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<string>('2023'); // eox tile year
  const [viewMode, setViewMode] = useState<'split' | 'sentinel' | 'aerial'>('split');
  const [selectedPoint, setSelectedPoint] = useState<{ lat: number; lng: number } | null>({
    lat: 27.7172,
    lng: 85.324
  });
  const [copied, setCopied] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [manualCoords, setManualCoords] = useState<string>('');

  // Dynamically load Leaflet from CDN
  useEffect(() => {
    let isCancelled = false;

    const loadLeaflet = () => {
      // Check if Leaflet CSS is present
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Check if Leaflet JS is present
      if ((window as any).L) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.id = 'leaflet-js';
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        if (!isCancelled) {
          initMap();
        }
      };
      document.body.appendChild(script);
    };

    const initMap = () => {
      const L = (window as any).L;
      if (!L || !mapContainerRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Initialize map centered on Nepal
      const map = L.map(mapContainerRef.current, {
        center: [27.7172, 85.324],
        zoom: 12,
        zoomControl: false,
        attributionControl: false
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Bottom Layer: High-Res Aerial Basemap (Esri World Imagery)
      const baseLayer = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 19,
          attribution: 'Esri World Imagery'
        }
      ).addTo(map);

      // Top Layer: Sentinel-2 Cloudless / 5-Day Near-Realtime Mosaic (EOX Sentinel-2)
      const sentinelTileUrl = `https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-${selectedYear}_3857/default/g/{z}/{y}/{x}.jpg`;
      const sentinelLayer = L.tileLayer(sentinelTileUrl, {
        maxZoom: 16,
        attribution: 'Sentinel-2 ESA Copernicus via EOX'
      }).addTo(map);

      topLayerRef.current = sentinelLayer;

      // Click event on map to inspect coordinates & trigger Sentinel-2 Latest View
      map.on('click', (e: any) => {
        const { lat, lng } = e.latlng;
        setSelectedPoint({
          lat: parseFloat(lat.toFixed(5)),
          lng: parseFloat(lng.toFixed(5))
        });

        if (markerRef.current) {
          markerRef.current.setLatLng([lat, lng]);
        } else {
          const markerIcon = L.divIcon({
            className: 'custom-satellite-pin',
            html: `
              <div class="relative flex items-center justify-center">
                <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-lg"></span>
              </div>
            `,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
          });
          markerRef.current = L.marker([lat, lng], { icon: markerIcon }).addTo(map);
        }
      });

      // Add default marker at center
      const defaultIcon = L.divIcon({
        className: 'custom-satellite-pin',
        html: `
          <div class="relative flex items-center justify-center">
            <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-lg"></span>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });
      markerRef.current = L.marker([27.7172, 85.324], { icon: defaultIcon }).addTo(map);

      mapInstanceRef.current = map;
      setIsLoaded(true);
    };

    loadLeaflet();

    return () => {
      isCancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update top layer clipping or opacity based on slider position and view mode
  useEffect(() => {
    if (!topLayerRef.current || !mapInstanceRef.current) return;

    const container = topLayerRef.current.getContainer();
    if (!container) return;

    if (viewMode === 'aerial') {
      container.style.clipPath = 'inset(0 0 0 100%)';
      container.style.opacity = '0';
    } else if (viewMode === 'sentinel') {
      container.style.clipPath = 'none';
      container.style.opacity = '1';
    } else {
      // Split mode: clip top layer to sliderPosition percentage from left to right
      container.style.opacity = '1';
      container.style.clipPath = `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`;
    }
  }, [sliderPosition, viewMode, isLoaded]);

  // Handle year change for Sentinel-2 layer
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    if (!mapInstanceRef.current || !(window as any).L) return;

    const L = (window as any).L;
    if (topLayerRef.current) {
      mapInstanceRef.current.removeLayer(topLayerRef.current);
    }

    const sentinelTileUrl = `https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-${year}_3857/default/g/{z}/{y}/{x}.jpg`;
    const newSentinelLayer = L.tileLayer(sentinelTileUrl, {
      maxZoom: 16,
      attribution: 'Sentinel-2 ESA Copernicus'
    }).addTo(mapInstanceRef.current);

    topLayerRef.current = newSentinelLayer;

    // Apply clip path
    setTimeout(() => {
      const container = newSentinelLayer.getContainer();
      if (container) {
        if (viewMode === 'aerial') {
          container.style.clipPath = 'inset(0 0 0 100%)';
          container.style.opacity = '0';
        } else if (viewMode === 'sentinel') {
          container.style.clipPath = 'none';
          container.style.opacity = '1';
        } else {
          container.style.opacity = '1';
          container.style.clipPath = `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`;
        }
      }
    }, 100);
  };

  // Fly to hotspot
  const flyToLocation = (hotspot: HotspotLocation) => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([hotspot.lat, hotspot.lng], hotspot.zoom, {
      duration: 1.5
    });
    setSelectedPoint({ lat: hotspot.lat, lng: hotspot.lng });
    if (markerRef.current) {
      markerRef.current.setLatLng([hotspot.lat, hotspot.lng]);
    }
  };

  // Handle manual coordinate submission
  const handleCoordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualCoords.trim() || !mapInstanceRef.current) return;
    const parts = manualCoords.split(',').map((p) => parseFloat(p.trim()));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      const [lat, lng] = parts;
      mapInstanceRef.current.flyTo([lat, lng], 15, { duration: 1.2 });
      setSelectedPoint({ lat, lng });
      if (markerRef.current) {
        markerRef.current.setLatLng([lat, lng]);
      }
    }
  };

  const copyCoordinates = () => {
    if (!selectedPoint) return;
    navigator.clipboard.writeText(`${selectedPoint.lat}, ${selectedPoint.lng}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP HEADER BANNER */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 border border-emerald-500/30 rounded-3xl p-5 sm:p-7 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
              <Satellite className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              <span>युरोपेली स्पेस एजेन्सी (ESA) Copernicus Sentinel-2</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              नेपाल ताजा स्याटेलाइट सन्दर्भ (Latest 5-Day Satellite Reference)
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              गुगल वा एश्री नक्सा प्रायः १ देखि ३ वर्ष पुराना हुन्छन्। युरोपेली उपग्रह <strong>Sentinel-2</strong> ले हरेक ५ दिनमा नेपालको भूगोलको नयाँ तस्विर खिच्छ। 
              यहाँबाट नयाँ बाटो, खोलाको बहाव, बाढी/पहिरो र जग्गाको पछिल्लो अवस्था तुलना गर्नुहोस्।
            </p>
          </div>

          {/* Quick Technical Specs Badge */}
          <div className="grid grid-cols-3 gap-2.5 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-md shrink-0">
            <div className="text-center p-2 rounded-xl bg-white/5">
              <span className="text-[10px] text-slate-400 block font-bold">रिभिजिट साइकल</span>
              <span className="text-base sm:text-lg font-black text-emerald-300">५ दिन</span>
            </div>
            <div className="text-center p-2 rounded-xl bg-white/5">
              <span className="text-[10px] text-slate-400 block font-bold">अप्टिकल रिजोल्युसन</span>
              <span className="text-base sm:text-lg font-black text-amber-300">१० मिटर</span>
            </div>
            <div className="text-center p-2 rounded-xl bg-white/5">
              <span className="text-[10px] text-slate-400 block font-bold">डेटा पहुँच</span>
              <span className="text-base sm:text-lg font-black text-teal-300">खुला (Free)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CONTROLS BAR: VIEW MODE + YEAR TIMELINE + GPS SEARCH */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setViewMode('split')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'split'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>स्प्लिट तुलना (Split Slider)</span>
            </button>
            <button
              onClick={() => setViewMode('sentinel')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'sentinel'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Satellite className="w-3.5 h-3.5" />
              <span>ताजा Sentinel-2 मात्र</span>
            </button>
            <button
              onClick={() => setViewMode('aerial')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'aerial'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>गुगल/एश्री बेस मात्र</span>
            </button>
          </div>

          {/* Time Machine / Year Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-500" />
              <span>समयरेखा:</span>
            </span>
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              {[
                { year: '2023', label: 'ताजा (Latest)', badge: 'हाल' },
                { year: '2022', label: '२०२२', badge: '१ वर्ष अघि' },
                { year: '2021', label: '२०२१', badge: '२ वर्ष अघि' },
                { year: '2020', label: '२०२०', badge: '३ वर्ष अघि' }
              ].map((item) => (
                <button
                  key={item.year}
                  onClick={() => handleYearChange(item.year)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedYear === item.year
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* GPS Coordinates Search */}
          <form onSubmit={handleCoordSubmit} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="अक्षांश, देशान्तर (उदा: 27.7172, 85.3240)"
              value={manualCoords}
              onChange={(e) => setManualCoords(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500 w-48 sm:w-56"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shrink-0"
            >
              खोज्नुहोस्
            </button>
          </form>

        </div>

        {/* Quick Hotspot Chips */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          <span className="text-slate-400 font-bold shrink-0 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-emerald-500" />
            <span>नेपालका मुख्य स्थानहरू:</span>
          </span>
          {NEPAL_HOTSPOTS.map((h) => (
            <button
              key={h.name}
              onClick={() => flyToLocation(h)}
              className="px-3 py-1 rounded-full bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 shrink-0 font-medium transition-all"
            >
              {h.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. MAIN INTERACTIVE MAP CONTAINER WITH SPLIT SLIDER */}
      <div className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-slate-950">
        
        {/* Leaflet Map Target */}
        <div ref={mapContainerRef} className="w-full h-full z-0"></div>

        {/* Before / After Floating Badges in Split Mode */}
        {viewMode === 'split' && (
          <>
            {/* Left Label */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl text-white shadow-lg text-xs font-bold flex items-center gap-1.5">
              <Satellite className="w-3.5 h-3.5 text-emerald-400" />
              <span>बायाँ: ताजा उपग्रह (Sentinel-2 10m)</span>
            </div>

            {/* Right Label */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl text-white shadow-lg text-xs font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>दायाँ: पुराना बेस नक्सा (Google / Esri)</span>
            </div>

            {/* Draggable Vertical Split Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-1 h-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)] relative -ml-0.5">
                {/* Central Handle Pill */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-emerald-400 text-white flex items-center justify-center shadow-2xl pointer-events-auto cursor-ew-resize">
                  <span className="text-xs font-mono select-none">⇋</span>
                </div>
              </div>
            </div>

            {/* Transparent Full-Width Drag Slider Input */}
            <input
              type="range"
              min="1"
              max="99"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 z-40 cursor-ew-resize m-0 p-0"
              aria-label="स्याटेलाइट तुलना स्लाइडर"
            />
          </>
        )}

        {/* 4. DEDICATED "SENTINEL-2 LATEST VIEW" FLOATING INSPECTOR CARD */}
        {selectedPoint && (
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-20 bg-slate-900/90 backdrop-blur-xl border border-emerald-500/40 rounded-2xl p-4 text-white shadow-2xl animate-in slide-in-from-bottom duration-300">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <Satellite className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-sm text-white">🛰️ Sentinel-2 Latest View</h3>
                    <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      सक्रिय
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    युरोपेली अन्तरिक्ष एजेन्सी (ESA Copernicus) को १० मिटर अप्टिकल डेटा
                  </p>
                </div>
              </div>

              <button
                onClick={copyCoordinates}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                title="GPS कोअर्डिनेट प्रतिलिपि गर्नुहोस्"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Coordinates detail */}
            <div className="grid grid-cols-2 gap-2 mt-3 pt-2.5 border-t border-slate-800 text-xs">
              <div className="bg-slate-800/60 p-2 rounded-xl">
                <span className="text-[10px] text-slate-400 block font-mono">अक्षांश (Latitude)</span>
                <span className="font-mono font-bold text-emerald-300">{selectedPoint.lat}° N</span>
              </div>
              <div className="bg-slate-800/60 p-2 rounded-xl">
                <span className="text-[10px] text-slate-400 block font-mono">देशान्तर (Longitude)</span>
                <span className="font-mono font-bold text-emerald-300">{selectedPoint.lng}° E</span>
              </div>
            </div>

            {/* External Action Links */}
            <div className="flex items-center gap-2 mt-3">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${selectedPoint.lat},${selectedPoint.lng}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>गुगल म्यापमा खोल्नुहोस्</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={`https://browser.dataspace.copernicus.eu/?lat=${selectedPoint.lat}&lng=${selectedPoint.lng}&zoom=14`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <span>ESA ब्राइजरमा पूर्ण ब्यान्ड</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        )}

      </div>

      {/* 5. PRACTICAL GUIDE & SURVEY NOTICES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Important Warning Notice */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-amber-900 dark:text-amber-200">
            <h4 className="font-bold text-sm text-amber-950 dark:text-amber-300">
              ⚠️ नापी तथा जग्गा सिमाना सम्बन्धी प्राविधिक सूचना
            </h4>
            <p className="leading-relaxed">
              <strong>Sentinel-2</strong> उपग्रहको ग्राउन्ड रिजोल्युसन १० मिटर (१० मिटर = १ पिक्सेल) हुने भएकाले 
              यसबाट जग्गाको कित्ता नम्बर, किल्ला (Boundaries) वा साना घरको साँध छुट्याउन मिल्दैन। 
              यो केवल <strong>नयाँ बाटो खनिएको, खोलाले धार बदलेको वा जमिनको ताजा अवस्था हेर्न</strong> सन्दर्भको लागि मात्र प्रयोग गर्नुहोस्।
            </p>
          </div>
        </div>

        {/* Benefits & Use-Cases */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-emerald-900 dark:text-emerald-200">
            <h4 className="font-bold text-sm text-emerald-950 dark:text-emerald-300">
              💡 कसरी फाइदा लिने?
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-[11px] leading-relaxed">
              <li><strong>जग्गा किन्नु वा बेच्नुअघि:</strong> पछिल्लो ६ महिना वा १ वर्षमा जमिनमा भएको परिवर्तन तुलना गर्नुहोस्।</li>
              <li><strong>बाढी र नदी कटान:</strong> वर्षायाममा खोलाले जग्गा काटेको वा बगर बनेको ताजा अवस्था हेर्नुहोस्।</li>
              <li><strong>डोजर बाटो:</strong> नक्सामा नदेखिएका नयाँ बाटोहरू उपग्रहमा खनिएको देख्न सकिन्छ।</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
}
