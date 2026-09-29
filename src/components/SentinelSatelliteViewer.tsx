'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  RefreshCw,
  Search,
  Navigation,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

interface CityHotspot {
  name: string;
  nameEn: string;
  lat: number;
  lng: number;
  zoom: number;
  district: string;
}

const NEPAL_CITIES: CityHotspot[] = [
  { name: 'काठमाडौं (Kathmandu)', nameEn: 'Kathmandu', lat: 27.7172, lng: 85.324, zoom: 13, district: 'काठमाडौं' },
  { name: 'ललितपुर (Lalitpur)', nameEn: 'Lalitpur', lat: 27.6644, lng: 85.3188, zoom: 14, district: 'ललितपुर' },
  { name: 'भक्तपुर (Bhaktapur)', nameEn: 'Bhaktapur', lat: 27.671, lng: 85.4298, zoom: 14, district: 'भक्तपुर' },
  { name: 'पोखरा (Pokhara)', nameEn: 'Pokhara', lat: 28.2096, lng: 83.9595, zoom: 13, district: 'कास्की' },
  { name: 'भरतपुर / चितवन (Chitwan)', nameEn: 'Bharatpur', lat: 27.6833, lng: 84.4333, zoom: 13, district: 'चितवन' },
  { name: 'विराटनगर (Biratnagar)', nameEn: 'Biratnagar', lat: 26.4525, lng: 87.2718, zoom: 13, district: 'मोरङ' },
  { name: 'बुटवल (Butwal)', nameEn: 'Butwal', lat: 27.7006, lng: 83.4484, zoom: 14, district: 'रुपन्देही' },
  { name: 'वीरगन्ज (Birgunj)', nameEn: 'Birgunj', lat: 27.0104, lng: 84.8774, zoom: 13, district: 'पर्सा' },
  { name: 'धरान (Dharan)', nameEn: 'Dharan', lat: 26.8124, lng: 87.2834, zoom: 13, district: 'सुनसरी' },
  { name: 'इटहरी (Itahari)', nameEn: 'Itahari', lat: 26.6633, lng: 87.2789, zoom: 13, district: 'सुनसरी' },
  { name: 'नेपालगन्ज (Nepalgunj)', nameEn: 'Nepalgunj', lat: 28.05, lng: 81.6167, zoom: 13, district: 'बाँके' },
  { name: 'धनगढी (Dhangadhi)', nameEn: 'Dhangadhi', lat: 28.6944, lng: 80.5977, zoom: 13, district: 'कैलाली' },
  { name: 'सुर्खेत (वीरेन्द्रनगर)', nameEn: 'Surkhet', lat: 28.5983, lng: 81.6338, zoom: 13, district: 'सुर्खेत' },
  { name: 'जनकपुर (Janakpur)', nameEn: 'Janakpur', lat: 26.7288, lng: 85.9244, zoom: 13, district: 'धनुषा' },
  { name: 'हेटौंडा (Hetauda)', nameEn: 'Hetauda', lat: 27.4289, lng: 85.0333, zoom: 13, district: 'मकवानपुर' },
  { name: 'दाङ (घोराही/तुलसीपुर)', nameEn: 'Dang', lat: 28.0333, lng: 82.5, zoom: 12, district: 'दाङ' },
  { name: 'बनेपा / धुलिखेल (Kavre)', nameEn: 'Banepa', lat: 27.6298, lng: 85.5214, zoom: 13, district: 'काभ्रे' },
  { name: 'मेलम्ची बाढी क्षेत्र', nameEn: 'Melamchi', lat: 27.8328, lng: 85.5815, zoom: 14, district: 'सिन्धुपाल्चोक' },
  { name: 'कोशी ब्यारेज (Koshi)', nameEn: 'Koshi Barrage', lat: 26.8617, lng: 86.9315, zoom: 13, district: 'सप्तरी/सुनसरी' },
  { name: 'दमक / बिर्तामोड (Jhapa)', nameEn: 'Jhapa', lat: 26.6667, lng: 87.7, zoom: 13, district: 'झापा' }
];

export default function SentinelSatelliteViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapBottomRef = useRef<HTMLDivElement>(null);
  const mapTopRef = useRef<HTMLDivElement>(null);

  const mapBottomInstance = useRef<any>(null);
  const mapTopInstance = useRef<any>(null);
  const sentinelLayerRef = useRef<any>(null);
  const markerBottomRef = useRef<any>(null);
  const markerTopRef = useRef<any>(null);

  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'split' | 'sentinel' | 'aerial'>('split');
  const [selectedYear, setSelectedYear] = useState<string>('2023');
  const [selectedPoint, setSelectedPoint] = useState<{ lat: number; lng: number } | null>({
    lat: 27.7172,
    lng: 85.324
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Initialize Maps
  useEffect(() => {
    let active = true;

    const loadLeaflet = () => {
      // CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // JS
      if ((window as any).L) {
        initDualMaps();
        return;
      }

      const script = document.createElement('script');
      script.id = 'leaflet-js';
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        if (active) {
          initDualMaps();
        }
      };
      document.body.appendChild(script);
    };

    const initDualMaps = () => {
      const L = (window as any).L;
      if (!L || !mapBottomRef.current || !mapTopRef.current) return;

      // Clean up previous instances if any
      if (mapBottomInstance.current) {
        mapBottomInstance.current.remove();
        mapBottomInstance.current = null;
      }
      if (mapTopInstance.current) {
        mapTopInstance.current.remove();
        mapTopInstance.current = null;
      }

      const center = [27.7172, 85.324];
      const initialZoom = 13;

      // 1. Bottom Map: High-Res Aerial Basemap (Esri World Imagery) - Handles all user touches & clicks
      const map1 = L.map(mapBottomRef.current, {
        center,
        zoom: initialZoom,
        zoomControl: false,
        attributionControl: false
      });

      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 19,
          attribution: 'Esri World Imagery'
        }
      ).addTo(map1);

      // Add roads/labels overlay on bottom map for better context
      L.tileLayer(
        'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 19,
          opacity: 0.8
        }
      ).addTo(map1);

      // 2. Top Map: Sentinel-2 Cloudless / 5-Day Fresh Imagery (EOX Sentinel-2)
      const map2 = L.map(mapTopRef.current, {
        center,
        zoom: initialZoom,
        zoomControl: false,
        attributionControl: false,
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false
      });

      const sentinelUrl = `https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-${selectedYear}_3857/default/g/{z}/{y}/{x}.jpg`;
      const sLayer = L.tileLayer(sentinelUrl, {
        maxZoom: 16,
        attribution: 'Sentinel-2 ESA Copernicus'
      }).addTo(map2);

      sentinelLayerRef.current = sLayer;

      // Pin icon helper
      const createPin = () => {
        return L.divIcon({
          className: 'custom-satellite-pin',
          html: `
            <div class="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
              <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white shadow-xl"></span>
            </div>
          `,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });
      };

      const m1 = L.marker(center, { icon: createPin() }).addTo(map1);
      const m2 = L.marker(center, { icon: createPin() }).addTo(map2);

      markerBottomRef.current = m1;
      markerTopRef.current = m2;

      // Sync Top Map with Bottom Map whenever Bottom Map moves or zooms
      map1.on('move', () => {
        const c = map1.getCenter();
        const z = map1.getZoom();
        map2.setView(c, z, { animate: false });
      });

      // Handle Click on Map: Update Coordinates and Markers
      map1.on('click', (e: any) => {
        const lat = parseFloat(e.latlng.lat.toFixed(5));
        const lng = parseFloat(e.latlng.lng.toFixed(5));
        setSelectedPoint({ lat, lng });

        m1.setLatLng([lat, lng]);
        m2.setLatLng([lat, lng]);
      });

      mapBottomInstance.current = map1;
      mapTopInstance.current = map2;
      setIsReady(true);
    };

    loadLeaflet();

    return () => {
      active = false;
      if (mapBottomInstance.current) {
        mapBottomInstance.current.remove();
        mapBottomInstance.current = null;
      }
      if (mapTopInstance.current) {
        mapTopInstance.current.remove();
        mapTopInstance.current = null;
      }
    };
  }, []);

  // Update Year / Layer on Sentinel Map
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    if (!mapTopInstance.current || !(window as any).L) return;
    const L = (window as any).L;

    if (sentinelLayerRef.current) {
      mapTopInstance.current.removeLayer(sentinelLayerRef.current);
    }

    const sentinelUrl = `https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-${year}_3857/default/g/{z}/{y}/{x}.jpg`;
    const newLayer = L.tileLayer(sentinelUrl, {
      maxZoom: 16,
      attribution: 'Sentinel-2 ESA Copernicus'
    }).addTo(mapTopInstance.current);

    sentinelLayerRef.current = newLayer;
  };

  // Fly to Coordinate or City
  const flyTo = (lat: number, lng: number, zoom = 14) => {
    if (!mapBottomInstance.current) return;
    mapBottomInstance.current.flyTo([lat, lng], zoom, { duration: 1.5 });
    setSelectedPoint({ lat, lng });
    if (markerBottomRef.current) markerBottomRef.current.setLatLng([lat, lng]);
    if (markerTopRef.current) markerTopRef.current.setLatLng([lat, lng]);
  };

  // User Current Location
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('तपाईंको ब्राउजरमा GPS सपोर्ट छैन।');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        flyTo(parseFloat(latitude.toFixed(5)), parseFloat(longitude.toFixed(5)), 15);
      },
      () => {
        alert('GPS लोकेशन प्राप्त हुन सकेन। कृपया लोकेसन अनुमति दिनुहोस्।');
      }
    );
  };

  // Zoom Helpers
  const zoomIn = () => mapBottomInstance.current?.zoomIn();
  const zoomOut = () => mapBottomInstance.current?.zoomOut();

  // Slider Dragging Logic
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 1), 99);
    setSliderPos(pct);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Search Filter
  const filteredCities = NEPAL_CITIES.filter((c) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.nameEn.toLowerCase().includes(q) ||
      c.district.toLowerCase().includes(q)
    );
  });

  const copyCoords = () => {
    if (!selectedPoint) return;
    navigator.clipboard.writeText(`${selectedPoint.lat}, ${selectedPoint.lng}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Computed Top Map Clip Path
  const getTopMapClip = () => {
    if (viewMode === 'aerial') {
      return 'inset(0 100% 0 0)'; // fully hidden
    }
    if (viewMode === 'sentinel') {
      return 'none'; // fully visible
    }
    // Split mode: Sentinel on Left (0% to sliderPos%), Aerial on Right
    return `inset(0 calc(100% - ${sliderPos}%) 0 0)`;
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
              <span>युरोपेली अन्तरिक्ष एजेन्सी (ESA) Copernicus Sentinel-2</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              नेपाल ताजा स्याटेलाइट सन्दर्भ (Latest 5-Day Satellite Reference)
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              गुगल वा एश्री नक्सा प्रायः १ देखि ३ वर्ष पुराना हुन्छन्। युरोपेली उपग्रह <strong>Sentinel-2</strong> ले हरेक ५ दिनमा नेपालको भूगोलको नयाँ तस्विर खिच्छ। 
              तलको नक्सामा माउस वा औंलाले सार्नुहोस्, जुम गर्नुहोस्, र बीचको <strong>स्लाइडर तानेर</strong> पुरानो र ताजा अवस्था तुलना गर्नुहोस्।
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

      {/* 2. SEARCH & INTERACTION CONTROLS BAR */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3.5">
        
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto shrink-0">
            <button
              onClick={() => setViewMode('split')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'split'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>⇋ स्प्लिट तुलना (Split Slider)</span>
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
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-500" />
              <span>समयरेखा:</span>
            </span>
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              {[
                { year: '2023', label: 'ताजा (Latest)' },
                { year: '2022', label: '२०२२' },
                { year: '2021', label: '२०२१' },
                { year: '2020', label: '२०२०' }
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

          {/* My Location Button */}
          <button
            onClick={handleCurrentLocation}
            className="flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 text-xs font-bold transition-all shrink-0"
            title="मेरो हालको GPS स्थान देखाउनुहोस्"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>मेरो GPS स्थान</span>
          </button>

        </div>

        {/* Nepal Cities & Locations Quick Search Bar */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="नेपालको सहर वा जिल्ला खोज्नुहोस् (उदा: काठमाडौं, पोखरा, मेलम्ची, कोशी, बुटवल, धरान)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-hidden focus:border-emerald-500"
            />
          </div>

          {/* Popular Hotspots Horizontal Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {filteredCities.slice(0, 8).map((city) => (
              <button
                key={city.name}
                onClick={() => flyTo(city.lat, city.lng, city.zoom)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700 shrink-0 font-medium transition-all"
              >
                {city.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 3. MAIN DUAL-MAP CONTAINER WITH HARDWARE-ACCELERATED SPLIT SLIDER */}
      <div 
        ref={containerRef}
        onPointerMove={handlePointerMove}
        className="relative w-full h-[520px] sm:h-[620px] rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-slate-950 select-none touch-none"
      >
        
        {/* Layer 1 (Bottom): High-Res Aerial Basemap + Handles user drags, zoom, clicks */}
        <div ref={mapBottomRef} className="absolute inset-0 w-full h-full z-0"></div>

        {/* Layer 2 (Top): Sentinel-2 ESA Layer (Clipped to Slider Position) */}
        <div
          ref={mapTopRef}
          style={{ clipPath: getTopMapClip() }}
          className="absolute inset-0 w-full h-full z-10 pointer-events-none transition-none"
        ></div>

        {/* Split Slider Floating Labels */}
        {viewMode === 'split' && (
          <>
            {/* Left Label */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none bg-slate-900/85 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-xl text-white shadow-xl text-xs font-bold flex items-center gap-1.5">
              <Satellite className="w-3.5 h-3.5 text-emerald-400" />
              <span>बायाँ: ताजा उपग्रह (Sentinel-2 10m)</span>
            </div>

            {/* Right Label */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none bg-slate-900/85 backdrop-blur-md border border-amber-500/40 px-3 py-1.5 rounded-xl text-white shadow-xl text-xs font-bold flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>दायाँ: पुराना बेस नक्सा (Google / Esri)</span>
            </div>

            {/* Draggable Vertical Split Divider Line & Central Handle */}
            <div
              style={{ left: `${sliderPos}%` }}
              className="absolute top-0 bottom-0 z-30 pointer-events-none -ml-0.5"
            >
              {/* Divider Glow Line */}
              <div className="w-1 h-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,1)]"></div>

              {/* Central Draggable Handle */}
              <div
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-slate-900 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center shadow-2xl pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform"
                title="दायाँ-बायाँ तानेर तुलना गर्नुहोस्"
              >
                <span className="text-sm font-black font-mono select-none">⇋</span>
              </div>
            </div>
          </>
        )}

        {/* Floating Zoom Buttons (+ / -) */}
        <div className="absolute top-4 right-4 sm:right-auto sm:left-4 sm:top-14 z-20 flex flex-col gap-1.5">
          <button
            onClick={zoomIn}
            className="w-8 h-8 rounded-xl bg-slate-900/85 hover:bg-slate-800 text-white border border-white/20 flex items-center justify-center shadow-lg transition-all"
            title="जुम इन गर्नुहोस् (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={zoomOut}
            className="w-8 h-8 rounded-xl bg-slate-900/85 hover:bg-slate-800 text-white border border-white/20 flex items-center justify-center shadow-lg transition-all"
            title="जुम आउट गर्नुहोस् (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

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
                onClick={copyCoords}
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
