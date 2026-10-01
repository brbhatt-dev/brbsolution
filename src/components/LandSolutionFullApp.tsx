'use client';

import { LAND_SOLUTION_WEB_URL } from '@/lib/land-solution-release';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Home, Search, Menu, X, RotateCw, ExternalLink, Maximize2, Minimize2, Smartphone, ChevronRight, Loader2, AlertCircle, EyeOff } from 'lucide-react';
import IosInstallGuideModal from './IosInstallGuideModal';

const aliases: Record<string, string> = {
  Plotter: 'जग्गा क्षेत्रफल त्रिभुज नाप plot', Map: 'नक्सा naksa gps', 'Stake Out': 'स्टेक आउट stakeout बिन्दु',
  Shapefile: 'सेपफाइल कित्ता shp shape file', Converter: 'युनिट रूपान्तरण रोपनी आना बिघा कट्ठा ropani aana bigha kattha',
  '3D House Design': 'घर नक्सा house design', 'Sheet Coords': 'सिट निर्देशाङ्क coordinates',
  'My Land GPS': 'जग्गा gps', 'Plotter Pro': 'कित्ताकाट plot divide', Calculator: 'क्यालकुलेटर हिसाब scientific calculator', 'Area Calculator': 'क्षेत्रफल जोड घटाउ area',
};
const control = 'min-h-[48px] min-w-[48px] flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400';

export default function LandSolutionFullApp() {
  const frame = useRef<HTMLIFrameElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [iframeKey, setIframeKey] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [panel, setPanel] = useState<'search' | 'menu' | null>(null);
  const [query, setQuery] = useState('');
  const [tools, setTools] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [phase, setPhase] = useState('download');
  const [ready, setReady] = useState(false);
  const [problem, setProblem] = useState('');
  const [opening, setOpening] = useState('');
  const openTimer = useRef<ReturnType<typeof setTimeout>>();

  const post = (data: object) => frame.current?.contentWindow?.postMessage(JSON.stringify(data), window.location.origin);
  const closePanel = () => { const previous = panel; setPanel(null); setTimeout(() => (previous === 'search' ? searchButton : menuButton).current?.focus(), 0); };
  const retry = () => { clearTimeout(openTimer.current); setReady(false); setProblem(''); setPhase('download'); setOpening(''); setIframeKey(k => k + 1); };

  useEffect(() => {
    try { const saved = JSON.parse(localStorage.getItem('land-solution-recent-tools') || '[]'); if (Array.isArray(saved)) setRecent(saved.filter(t => typeof t === 'string').slice(0, 4)); } catch {}
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow || typeof event.data !== 'string') return;
      let data; try { data = JSON.parse(event.data); } catch { return; }
      if (data?.type === 'land-solution-status' && typeof data.phase === 'string') { setPhase(data.phase); if (data.phase === 'error') setProblem('App खोल्न समस्या भयो। इन्टरनेट जाँचेर फेरि प्रयास गर्नुहोस्।'); }
      if (data?.type === 'land-solution-ready' && Array.isArray(data.tools)) {
        setTools(data.tools.filter((t: unknown): t is string => typeof t === 'string')); setReady(true); setProblem(''); setPhase('ready');
      }
      if (data?.type === 'land-solution-tool-opened' && typeof data.tool === 'string') {
        clearTimeout(openTimer.current); setOpening(''); setPanel(null); frame.current?.focus();
        setRecent(previous => { const next = [data.tool, ...previous.filter(t => t !== data.tool)].slice(0,4); try { localStorage.setItem('land-solution-recent-tools',JSON.stringify(next)); } catch {} return next; });
      }
    };
    const fullscreen = () => setIsFullscreen(!!document.fullscreenElement);
    window.addEventListener('message', onMessage); document.addEventListener('fullscreenchange',fullscreen);
    return () => { window.removeEventListener('message',onMessage); document.removeEventListener('fullscreenchange',fullscreen); clearTimeout(openTimer.current); };
  }, []);

  useEffect(() => {
    if (ready) return;
    const ping = setInterval(() => post({type:'land-solution-hello'}),1500);
    const timeout = setTimeout(() => setProblem('लोड हुन धेरै समय लाग्यो। पुनः प्रयास गर्नुहोस् वा सिधै खोल्नुहोस्।'),45000);
    return () => { clearInterval(ping); clearTimeout(timeout); };
  }, [iframeKey,ready]);

  useEffect(() => {
    if (!panel) return;
    const first = dialog.current?.querySelector<HTMLElement>('input') || dialog.current?.querySelector<HTMLElement>('button, a'); first?.focus();
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setPanel(null); setTimeout(() => (panel === 'search' ? searchButton : menuButton).current?.focus(),0); }
      if (event.key === 'Tab') {
        const elements = Array.from(dialog.current?.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled)') || []);
        const first = elements[0], last = elements[elements.length-1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown',key); return () => document.removeEventListener('keydown',key);
  }, [panel]);

  const openTool = (tool: string) => {
    if (!ready || !tools.includes(tool) || opening) return;
    setOpening(tool); setProblem(''); post({type:'land-solution-open-tool',tool});
    clearTimeout(openTimer.current); openTimer.current = setTimeout(() => { setOpening(''); setProblem('Tool खोल्न सकेन। फेरि रोज्नुहोस्।'); },20000);
  };
  const toggleFullscreen = async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else if (document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen(); else setShowTopBar(false); setPanel(null); }
    catch { setShowTopBar(false); setPanel(null); }
  };
  const normalized = query.trim().toLocaleLowerCase();
  const matches = tools.filter(t => (t.toLocaleLowerCase()+' '+(aliases[t]||'')).includes(normalized));
  const displayed = normalized ? matches : [...recent.filter(t=>tools.includes(t)), ...tools.filter(t=>!recent.includes(t))];
  const status = phase === 'engine' ? 'चित्र र नक्सा इन्जिन तयार हुँदैछ…' : phase === 'application' ? 'App सुरु हुँदैछ…' : 'App डाउनलोड हुँदैछ…';

  return <div data-land-solution-shell className="fixed inset-0 h-[100dvh] flex flex-col bg-slate-950 text-white overflow-hidden z-50">
    {showTopBar ? <header className="shrink-0 border-b border-slate-800 bg-slate-900 px-2 sm:px-4 py-2 pt-[max(8px,env(safe-area-inset-top))] flex items-center gap-2">
      <Link href="/" aria-label="मुख्य पेज" title="मुख्य पेज" className={control}><Home size={20}/></Link>
      <div className="flex-1 min-w-0 flex items-center gap-2"><img src="/logo.png" alt="" width="32" height="32" className="hidden sm:block rounded-lg"/><div className="min-w-0"><h1 className="text-sm font-bold truncate">Land Solution</h1><p className="text-[11px] text-slate-400 truncate">जग्गा नापी तथा नक्सा</p></div></div>
      <button ref={searchButton} type="button" aria-label="Tools खोज्नुहोस्" onClick={()=>{setQuery('');setPanel('search');}} className={control+' px-3'}><Search size={20}/><span className="hidden sm:inline text-sm">Tools खोज्नुहोस्</span></button>
      <button ref={menuButton} type="button" aria-label="App menu" aria-expanded={panel==='menu'} onClick={()=>setPanel('menu')} className={control}><Menu size={20}/></button>
    </header> : <button type="button" onClick={()=>setShowTopBar(true)} aria-label="मेनु देखाउनुहोस्" className={control+' fixed top-2 right-2 z-30 px-3 shadow-lg'}><Menu size={20}/></button>}
    <main className="flex-1 min-h-0 relative pb-[env(safe-area-inset-bottom)]">
      <iframe ref={frame} key={iframeKey} src={LAND_SOLUTION_WEB_URL} title="Land Solution Full Version Application" className="w-full h-full border-0" allow="geolocation *; camera *; accelerometer *; gyroscope *; magnetometer *" onLoad={()=>post({type:'land-solution-hello'})} onError={()=>setProblem('App डाउनलोड हुन सकेन। पुनः प्रयास गर्नुहोस्।')}/>
      {(!ready || (problem && !panel)) && <div className="absolute inset-0 bg-slate-950/95 flex items-center justify-center p-5" aria-live="polite">
        <div className="max-w-sm text-center"><img src="/logo.png" alt="" width="64" height="64" className="mx-auto mb-5 rounded-2xl"/>
          {problem ? <AlertCircle className="mx-auto mb-3 text-amber-400" size={28}/> : <Loader2 className="mx-auto mb-3 animate-spin text-sky-400" size={28}/>}
          <h2 className="font-semibold text-lg">{problem ? 'फेरि प्रयास गर्नुहोस्' : 'Land Solution खोल्दैछ'}</h2><p className="text-sm text-slate-300 mt-2 leading-6">{problem || status}</p>
          <p className="text-xs text-slate-500 mt-3">पहिलो पटक खुल्दा केही समय लाग्न सक्छ।</p>
          {problem && <div className="flex flex-wrap justify-center gap-2 mt-5"><button type="button" onClick={retry} className={control+' px-4'}><RotateCw size={18}/>Retry</button><a href={LAND_SOLUTION_WEB_URL} target="_blank" rel="noopener noreferrer" className={control+' px-4'}>सिधै खोल्नुहोस्<ExternalLink size={16}/></a></div>}
        </div>
      </div>}
    </main>
    {panel && <div className="fixed inset-0 z-40 bg-black/60 flex items-start sm:items-center justify-center p-3 pt-[max(16px,env(safe-area-inset-top))]" onMouseDown={e=>{if(e.target===e.currentTarget)closePanel();}}>
      <div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="app-panel-title" className="w-full max-w-lg max-h-[90dvh] flex flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 p-3 border-b border-slate-800"><h2 id="app-panel-title" className="flex-1 font-bold">{panel==='search' ? 'Tools खोज्नुहोस्' : 'App menu'}</h2><button type="button" aria-label="Close panel" onClick={closePanel} className={control}><X size={20}/></button></div>
        {panel==='search' ? <><div className="p-3"><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>{if(e.key==='Enter' && displayed.length===1)openTool(displayed[0]);}} aria-label="Search tools" placeholder="Plotter, नक्सा, GPS…" className="w-full min-h-[48px] rounded-xl border border-slate-600 bg-slate-950 px-3 text-base focus:outline-none focus:border-sky-400"/><p className="text-xs text-slate-400 mt-2">{normalized ? `${matches.length} tools भेटिए` : recent.length ? 'हालै खोलेका tools पहिले देखिन्छन्' : 'नेपाली वा English मा खोज्नुहोस्'}</p></div>
          <div className="overflow-y-auto px-3 pb-3 flex-1">{!ready ? <p role="status" className="p-3 text-slate-300">App तयार भएपछि tools देखिन्छन्…</p> : displayed.length===0 ? <p role="status" className="p-3 text-slate-300">कुनै tool भेटिएन। अर्को नाम खोज्नुहोस्।</p> : displayed.map(tool=><button type="button" key={tool} disabled={!!opening} onClick={()=>openTool(tool)} className="w-full min-h-[48px] flex items-center justify-between gap-3 text-left rounded-xl p-3 mb-1 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 disabled:opacity-60"><span>{tool}{!normalized && recent.includes(tool) && <span className="ml-2 text-xs text-sky-400">हालै</span>}</span>{opening===tool ? <Loader2 size={18} className="animate-spin"/> : <ChevronRight size={18}/>}</button>)}</div>{problem && <p role="alert" className="px-4 pb-4 text-amber-300 text-sm">{problem}</p>}
        </> : <div className="p-3 space-y-2 overflow-y-auto">
          <button type="button" onClick={()=>{setPanel(null);setShowIosGuide(true);}} className={control+' w-full justify-start px-3'}><Smartphone size={20}/>iPhone मा Home Screen मा राख्ने</button>
          <a href={LAND_SOLUTION_WEB_URL} target="_blank" rel="noopener noreferrer" className={control+' w-full justify-start px-3'}><ExternalLink size={20}/>App सिधै खोल्नुहोस्</a>
          <button type="button" onClick={()=>{if(window.confirm('रिलोड गर्दा अहिलेको नसुरक्षित काम हट्न सक्छ। App रिलोड गर्ने?')){closePanel();retry();}}} className={control+' w-full justify-start px-3'}><RotateCw size={20}/>App रिलोड</button>
          <button type="button" onClick={toggleFullscreen} className={control+' w-full justify-start px-3'}>{isFullscreen ? <Minimize2 size={20}/> : <Maximize2 size={20}/>} {isFullscreen ? 'सामान्य स्क्रिन' : 'Full screen'}</button>
          <button type="button" onClick={()=>{setPanel(null);setShowTopBar(false);}} className={control+' w-full justify-start px-3'}><EyeOff size={20}/>माथिल्लो बार लुकाउने</button>
        </div>}
      </div>
    </div>}
    <IosInstallGuideModal isOpen={showIosGuide} onClose={()=>setShowIosGuide(false)}/>
  </div>;
}
