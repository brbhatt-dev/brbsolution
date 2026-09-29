'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Satellite,
  Layers,
  Calendar,
  Compass,
  MapPin,
  ExternalLink,
  Search,
  Navigation,
  ZoomIn,
  ZoomOut,
  Sparkles,
  AlertTriangle,
  RotateCcw
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

type LayerType = 'sentinel' | 'aerial' | 'osm';

export default function SentinelSatelliteViewer() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const activeTileLayerRef = useRef<any>(null);
  const labelLayerRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const [activeLayer, setActiveLayer] = useState<LayerType>('sentinel');
  const [selectedYear, setSelectedYear] = useState<string>('2023');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isReady, setIsReady] = useState<boolean>(false);

  // Initialize single clean Leaflet map
  useEffect(() => {
    let active = true;

    const loadLeaflet = () => {
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      if ((window as any).L) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.id = 'leaflet-js';
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        if (active) {
          initMap();
        }
      };
      document.body.appendChild(script);
    };

    const initMap = () => {
      const L = (window as any).L;
      if (!L || !mapContainerRef.current) return;

      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }

      const center = [27.7172, 85.324];
      const initialZoom = 13;

      const map = L.map(mapContainerRef.current, {
        center,
        zoom: initialZoom,
        zoomControl: false,
        attributionControl: false
      });

      // Default Sentinel-2 Layer
      const sentinelUrl = `https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-${selectedYear}_3857/default/g/{z}/{y}/{x}.jpg`;
      const baseLayer = L.tileLayer(sentinelUrl, {
        maxZoom: 16,
        attribution: 'Sentinel-2 ESA Copernicus'
      }).addTo(map);

      activeTileLayerRef.current = baseLayer;

      // Optional pulse marker on active spot
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

      const m = L.marker(center, { icon: createPin() }).addTo(map);
      markerRef.current = m;

      // Move marker on click without obstructing popup cards
      map.on('click', (e: any) => {
        m.setLatLng(e.latlng);
      });

      mapInstance.current = map;
      setIsReady(true);
    };

    loadLeaflet();

    return () => {
      active = false;
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Update base layer and year
  const updateMapLayer = useCallback((layerType: LayerType, year: string) => {
    const L = (window as any).L;
    const map = mapInstance.current;
    if (!L || !map) return;

    // Remove existing layers
    if (activeTileLayerRef.current) {
      map.removeLayer(activeTileLayerRef.current);
      activeTileLayerRef.current = null;
    }
    if (labelLayerRef.current) {
      map.removeLayer(labelLayerRef.current);
      labelLayerRef.current = null;
    }

    if (layerType === 'sentinel') {
      const sentinelUrl = `https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-${year}_3857/default/g/{z}/{y}/{x}.jpg`;
      activeTileLayerRef.current = L.tileLayer(sentinelUrl, {
        maxZoom: 16,
        attribution: 'Sentinel-2 ESA Copernicus'
      }).addTo(map);
    } else if (layerType === 'aerial') {
      activeTileLayerRef.current = L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 19,
          attribution: 'Esri World Imagery'
        }
      ).addTo(map);

      // Add overlay road labels
      labelLayerRef.current = L.tileLayer(
        'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 19,
          opacity: 0.85
        }
      ).addTo(map);
    } else if (layerType === 'osm') {
      activeTileLayerRef.current = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          maxZoom: 19,
          attribution: 'OpenStreetMap'
        }
      ).addTo(map);
    }
  }, []);

  const handleLayerChange = (layer: LayerType) => {
    setActiveLayer(layer);
    updateMapLayer(layer, selectedYear);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    if (activeLayer === 'sentinel') {
      updateMapLayer('sentinel', year);
    } else {
      setActiveLayer('sentinel');
      updateMapLayer('sentinel', year);
    }
  };

  // Fly to location
  const flyTo = (lat: number, lng: number, zoom = 14) => {
    if (!mapInstance.current) return;
    mapInstance.current.flyTo([lat, lng], zoom, { duration: 1.2 });
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
    }
  };

  // Current GPS location
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

  // Zoom controls
  const zoomIn = () => mapInstance.current?.zoomIn();
  const zoomOut = () => mapInstance.current?.zoomOut();
  const resetCenter = () => flyTo(27.7172, 85.324, 13);

  // Search filter
  const filteredCities = NEPAL_CITIES.filter((c) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.nameEn.toLowerCase().includes(q) ||
      c.district.toLowerCase().includes(q)
    );
  });

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
              तलको नक्सामा सजिलै जुम तथा मुभ गर्नुहोस्, ताजा तथा ऐतिहासिक वर्षका तस्विर र बेस नक्साहरू छान्नुहोस्।
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
          
          {/* Layer Switcher */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto shrink-0">
            <button
              onClick={() => handleLayerChange('sentinel')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeLayer === 'sentinel'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Satellite className="w-3.5 h-3.5" />
              <span>🛰️ ताजा Sentinel-2 (ESA)</span>
            </button>
            <button
              onClick={() => handleLayerChange('aerial')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeLayer === 'aerial'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>🗺️ एश्री हाई-रेजोल्युसन बेस</span>
            </button>
            <button
              onClick={() => handleLayerChange('osm')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeLayer === 'osm'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>🌐 नक्सा / बाटो</span>
            </button>
          </div>

          {/* Time Machine / Year Switcher */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-500" />
              <span>वर्ष / समयरेखा:</span>
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
                    selectedYear === item.year && activeLayer === 'sentinel'
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location & Reset Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCurrentLocation}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 text-xs font-bold transition-all"
              title="मेरो हालको GPS स्थान देखाउनुहोस्"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>मेरो GPS स्थान</span>
            </button>
            <button
              onClick={resetCenter}
              className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-bold transition-all"
              title="काठमाडौं केन्द्रमा फर्कनुहोस्"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>रिसेट</span>
            </button>
          </div>

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

      {/* 3. CLEAN FULL-SCREEN MAP CONTAINER (NO SPLITTER, NO OBSTRUCTIVE FLOATING CARD) */}
      <div 
        className="relative w-full h-[550px] sm:h-[650px] rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-slate-950"
      >
        {/* Single Responsive Leaflet Map Container */}
        <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-0"></div>

        {/* Current Active Mode Indicator Badge */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none bg-slate-900/85 backdrop-blur-md border border-emerald-500/40 px-3 py-1.5 rounded-xl text-white shadow-xl text-xs font-bold flex items-center gap-2">
          <Satellite className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            {activeLayer === 'sentinel' && `ताजा Sentinel-2 (${selectedYear})`}
            {activeLayer === 'aerial' && 'एश्री हाई-रेजोल्युसन बेस'}
            {activeLayer === 'osm' && 'ओपन-स्ट्रिट नक्सा'}
          </span>
        </div>

        {/* Floating Zoom Controls (+ / -) */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <button
            onClick={zoomIn}
            className="w-9 h-9 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-white/20 flex items-center justify-center shadow-lg transition-all"
            title="जुम इन गर्नुहोस् (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={zoomOut}
            className="w-9 h-9 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-white/20 flex items-center justify-center shadow-lg transition-all"
            title="जुम आउट गर्नुहोस् (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 4. PRACTICAL GUIDE & SURVEY NOTICES */}
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
