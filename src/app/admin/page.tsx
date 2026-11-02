'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Lock, 
  Send, 
  Plus, 
  Trash2, 
  Eye, 
  Copy, 
  Check, 
  BookOpen, 
  FileText, 
  ArrowLeft, 
  RefreshCw, 
  Globe, 
  ExternalLink,
  HelpCircle,
  Layers
} from 'lucide-react';

interface SectionItem {
  id: string;
  heading: string;
  content: string;
  alertType?: 'tip' | 'info' | 'warning';
  alertTitle?: string;
  alertText?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function AdminStudioPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionToken, setSessionToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Legal & Cadastre');
  const [categoryNepali, setCategoryNepali] = useState('नापी तथा मालपोत');
  const [tag, setTag] = useState('गाइड');
  const [summary, setSummary] = useState('');
  const [readTime, setReadTime] = useState('५ मिनेट');
  const [sections, setSections] = useState<SectionItem[]>([
    { id: 'sec-1', heading: '१. परिचय तथा मुख्य कानुनी व्यवस्था', content: '' }
  ]);
  const [faqs, setFaqs] = useState<FaqItem[]>([
    { question: '', answer: '' }
  ]);

  // Status & Manage
  const [isPublishing, setIsPublishing] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [cloudDraft, setCloudDraft] = useState<any>(null);
  const [isLoadingDraft, setIsLoadingDraft] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [customPosts, setCustomPosts] = useState<any[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  function applyDraftData(d: any) {
    if (d.title) setTitle(d.title);
    if (d.slug) setSlug(d.slug);
    if (d.summary) setSummary(d.summary);
    if (d.category) setCategory(d.category);
    if (d.categoryNepali) setCategoryNepali(d.categoryNepali);
    if (d.tag) setTag(d.tag);
    if (d.readTime) setReadTime(d.readTime);
    if (d.sections && d.sections.length > 0) setSections(d.sections);
    if (d.faqs && d.faqs.length > 0) setFaqs(d.faqs);
  }

  // Check saved session on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = sessionStorage.getItem('brb_session');
      if (savedToken) {
        setSessionToken(savedToken);
        setIsAuthenticated(true);
      }

      // Load local draft if available
      const savedDraft = localStorage.getItem('brb_post_draft');
      if (savedDraft) {
        try {
          const d = JSON.parse(savedDraft);
          applyDraftData(d);
        } catch (e) {}
      }
    }
  }, []);

  async function checkCloudDraft(tokenToUse?: string) {
    const t = tokenToUse || sessionToken;
    if (!t) return;
    setIsLoadingDraft(true);
    try {
      const res = await fetch('/api/admin-posts?type=draft', {
        headers: { 'Authorization': `Bearer ${t}` }
      });
      const data = await res.json();
      if (data && data.draft) {
        setCloudDraft(data.draft);
        // If local title is currently empty, auto-populate cloud draft
        setTitle((curr) => {
          if (!curr && data.draft.title) {
            applyDraftData(data.draft);
            return data.draft.title;
          }
          return curr;
        });
      }
    } catch (e) {
      console.error('Failed to load cloud draft:', e);
    } finally {
      setIsLoadingDraft(false);
    }
  }

  // Fetch posts & cloud draft when authenticated
  useEffect(() => {
    if (isAuthenticated && sessionToken) {
      loadCustomPosts();
      checkCloudDraft(sessionToken);
    }
  }, [isAuthenticated, sessionToken]);

  async function loadCustomPosts() {
    setIsLoadingPosts(true);
    try {
      const res = await fetch('/api/admin-posts', {
        headers: sessionToken ? { 'Authorization': `Bearer ${sessionToken}` } : {}
      });
      const data = await res.json();
      if (data.posts) {
        const sorted = [...data.posts].sort((a: any, b: any) => {
          const tB = Number(b.timestamp) || (b.createdAt ? new Date(b.createdAt).getTime() : 0) || 0;
          const tA = Number(a.timestamp) || (a.createdAt ? new Date(a.createdAt).getTime() : 0) || 0;
          return tB - tA;
        });
        setCustomPosts(sorted);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoadingPosts(false);
    }
  }

  // Handle Server-Side Login (Credentials verified on Cloudflare Server, ZERO hardcoded secrets in JS)
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError('');
    setIsLoggingIn(true);

    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        sessionStorage.setItem('brb_session', data.token);
        setSessionToken(data.token);
        setIsAuthenticated(true);
        setAuthError('');
        checkCloudDraft(data.token);
      } else {
        setAuthError(data.error || 'लगइन असफल भयो।');
      }
    } catch (err: any) {
      setAuthError('सर्भरमा जडान हुन सकेन। कृपया इन्टरनेट जाँच गर्नुहोस्।');
    } finally {
      setIsLoggingIn(false);
    }
  }

  function handleLogout() {
    sessionStorage.removeItem('brb_session');
    setIsAuthenticated(false);
    setSessionToken('');
    window.location.href = '/';
  }

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!slug) {
      const clean = val
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      if (clean) setSlug(clean);
    }
  }

  function addSection() {
    const nextNum = sections.length + 1;
    setSections([
      ...sections,
      { id: `sec-${Date.now()}`, heading: `${nextNum}. `, content: '' }
    ]);
  }

  function updateSection(index: number, field: keyof SectionItem, val: any) {
    const updated = [...sections];
    updated[index] = { ...updated[index], [field]: val };
    setSections(updated);
  }

  function removeSection(index: number) {
    if (sections.length <= 1) return;
    setSections(sections.filter((_, i) => i !== index));
  }

  function addFaq() {
    setFaqs([...faqs, { question: '', answer: '' }]);
  }

  function updateFaq(index: number, field: keyof FaqItem, val: string) {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: val };
    setFaqs(updated);
  }

  function removeFaq(index: number) {
    if (faqs.length <= 1) return;
    setFaqs(faqs.filter((_, i) => i !== index));
  }

  async function saveDraft() {
    setIsSavingDraft(true);
    const draft = { 
      title, 
      slug, 
      category, 
      categoryNepali, 
      tag, 
      summary, 
      readTime, 
      sections, 
      faqs,
      savedAt: new Date().toISOString()
    };
    
    // 1. Local browser storage backup
    localStorage.setItem('brb_post_draft', JSON.stringify(draft));

    // 2. Cloudflare Cloud KV sync (Syncs across any computer/device!)
    if (sessionToken) {
      try {
        const res = await fetch('/api/admin-posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
          },
          body: JSON.stringify({ ...draft, isDraft: true })
        });
        const data = await res.json();
        if (res.ok && data.success) {
          setCloudDraft(draft);
          setStatusMessage({ 
            type: 'success', 
            text: '☁️ ड्राफ्ट क्लाउड र यो डिभाइसमा सुरक्षित भयो! (तपाईंले अर्को कम्प्युटर वा मोबाइलमा खोल्दा पनि यो ड्राफ्ट स्वतः उपलब्ध हुनेछ)' 
          });
          setTimeout(() => setStatusMessage(null), 5000);
          setIsSavingDraft(false);
          return;
        }
      } catch (e) {
        console.error('Cloud draft sync error:', e);
      }
    }

    setStatusMessage({ type: 'success', text: 'ड्राफ्ट स्थानीय रूपमा सुरक्षित भयो!' });
    setTimeout(() => setStatusMessage(null), 3000);
    setIsSavingDraft(false);
  }

  // Publish Post directly to Cloudflare KV Edge
  async function handlePublish(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !slug.trim() || !summary.trim()) {
      setStatusMessage({ type: 'error', text: 'कृपया शीर्षक, Slug र सारांश अनिवार्य भर्नुहोस्।' });
      return;
    }

    setIsPublishing(true);
    setStatusMessage(null);

    const postPayload = {
      slug: slug.toLowerCase().trim().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-'),
      title: title.trim(),
      tag: tag.trim() || 'गाइड',
      category: category,
      categoryNepali: categoryNepali,
      readTime: readTime || '५ मिनेट',
      publishedDate: new Date().toLocaleDateString('ne-NP', { month: 'long', year: 'numeric' }) || '२०८१',
      updatedDate: new Date().toISOString().split('T')[0],
      createdAt: new Date().toISOString(),
      timestamp: Date.now(),
      summary: summary.trim(),
      author: {
        name: 'BR Bhatta',
        role: 'सफ्टवेयर विकासकर्ता तथा नापी प्रविधि विशेषज्ञ',
        avatar: '/logo.png'
      },
      sections: sections.filter(s => s.heading.trim() || s.content.trim()),
      faq: faqs.filter(f => f.question.trim() && f.answer.trim())
    };

    try {
      const res = await fetch('/api/admin-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        },
        body: JSON.stringify(postPayload)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({ 
          type: 'success', 
          text: `🎉 बधाई छ! "${title}" सफलतापूर्वक वेबसाइटमा लाइभ भयो!` 
        });
        localStorage.removeItem('brb_post_draft');
        setCloudDraft(null);
        loadCustomPosts();
      } else {
        setStatusMessage({ type: 'error', text: data.error || 'पोस्ट सेभ गर्न सकिएन।' });
      }
    } catch (err: any) {
      setStatusMessage({ type: 'error', text: `नेटवर्क त्रुटि: ${err.message}` });
    } finally {
      setIsPublishing(false);
    }
  }

  async function handleDeletePost(postSlug: string) {
    if (!confirm(`के तपाईं यो लेख (${postSlug}) मेटाउन निश्चित हुनुहुन्छ?`)) return;

    try {
      const res = await fetch(`/api/admin-posts?slug=${encodeURIComponent(postSlug)}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${sessionToken}` }
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({ type: 'success', text: 'लेख हटाइयो।' });
        loadCustomPosts();
      } else {
        setStatusMessage({ type: 'error', text: data.error || 'मेटाउन असफल।' });
      }
    } catch (e: any) {
      setStatusMessage({ type: 'error', text: e.message });
    }
  }

  function copyTypeScriptCode() {
    const code = `  {
    slug: '${slug || 'napi-guide'}',
    title: '${title.replace(/'/g, "\\'")}',
    tag: '${tag}',
    category: '${category}' as any,
    categoryNepali: '${categoryNepali}',
    readTime: '${readTime}',
    publishedDate: '२०८१',
    updatedDate: '${new Date().toISOString().split('T')[0]}',
    summary: '${summary.replace(/'/g, "\\'")}',
    author: {
      name: 'BR Bhatta',
      role: 'सफ्टवेयर विकासकर्ता तथा नापी प्रविधि विशेषज्ञ',
      avatar: '/logo.png',
    },
    tableOfContents: [
${sections.map((s, i) => `      { id: 'sec-${i + 1}', label: '${s.heading.replace(/'/g, "\\'")}' },`).join('\n')}
    ],
    sections: [
${sections.map(s => `      {
        id: '${s.id}',
        heading: '${s.heading.replace(/'/g, "\\'")}',
        content: \`${s.content.replace(/`/g, "\\`")}\`,
      },`).join('\n')}
    ],
    faq: [
${faqs.filter(f => f.question).map(f => `      {
        question: '${f.question.replace(/'/g, "\\'")}',
        answer: '${f.answer.replace(/'/g, "\\'")}',
      },`).join('\n')}
    ],
    relatedSlugs: ['malpot-land-registration-fee-tax-calculator-nepal', 'nepal-survey-department-dos-napi-malpot-offices-guide'],
  },`;

    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  }

  // ==========================================
  // VIEW 1: Login Screen (Secure Server Handshake)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white font-extrabold text-2xl mx-auto mb-4 shadow-lg shadow-emerald-900/30">
            BR
          </div>
          <h2 className="text-xl font-black text-white tracking-tight mb-1">
            BR Bhatta Creator Studio
          </h2>
          <p className="text-xs text-slate-400 mb-6">
            नयाँ पोस्ट तथा वेबसाइट सामग्री व्यवस्थापन गर्न आधिकारिक प्रमाण प्रविष्ट गर्नुहोस्।
          </p>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">प्रयोगकर्ता नाम (Username)</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">पासवर्ड (Password)</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            {authError && (
              <p className="text-xs text-rose-400 bg-rose-950/40 p-2.5 rounded-xl border border-rose-800">
                {authError}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/40 transition-all active:scale-95 mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoggingIn ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>प्रमाणीकरण हुँदैछ...</span>
                </>
              ) : (
                <span>🔓 स्टुडियो लगइन (Enter Studio)</span>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: Full Creator Studio Dashboard
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100">
      
      {/* Studio Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 sticky top-0 z-40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-white text-sm shadow-md">
              BR
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>BR Bhatta Creator Studio</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                  Verified Owner
                </span>
              </h1>
              <p className="text-[11px] text-slate-500">Publish, manage & instantly index land & cadastral guides</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link 
              href="/" 
              target="_blank" 
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-1 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">लाइभ साइट</span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-xs font-semibold text-rose-600 dark:text-rose-300 transition-colors flex items-center gap-1"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>लक गर्नुहोस्</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Status Notification */}
        {statusMessage && (
          <div className={`mb-6 p-4 rounded-2xl border text-sm font-semibold flex items-center justify-between ${
            statusMessage.type === 'success' 
              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200' 
              : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
          }`}>
            <span>{statusMessage.text}</span>
            <button onClick={() => setStatusMessage(null)} className="text-xs opacity-70 hover:opacity-100">✕</button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Post Form (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-sm">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <span>नयाँ लेख लेख्नुहोस् (Create New Post)</span>
                  </h2>
                  <p className="text-xs text-slate-500">फारम भरेर सिधै वेबसाइटमा प्रकाशित गर्नुहोस्</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={saveDraft}
                    disabled={isSavingDraft}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-xs font-semibold flex items-center gap-1.5 transition"
                    title="क्लाउडमा सुरक्षित गर्नुहोस् (अर्को कम्प्युटर वा मोबाइलमा पनि देखिनेछ)"
                  >
                    {isSavingDraft ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <span>☁️</span>}
                    <span>{isSavingDraft ? 'सुरक्षित हुँदै...' : 'क्लाउड ड्राफ्ट सेभ'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewMode(!previewMode)}
                    className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{previewMode ? 'फारम हेर्नुहोस्' : 'प्रिभ्यु'}</span>
                  </button>
                </div>
              </div>

              {/* Cloud Draft Sync Alert Banner */}
              {cloudDraft && (
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200 dark:border-blue-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xl">☁️</span>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">
                        क्लाउडमा सुरक्षित ड्राफ्ट फेला पर्यो:{' '}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          "{cloudDraft.title || 'शीर्षक बिनाको मस्यौदा'}"
                        </span>
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        सुरक्षित मिति: {cloudDraft.savedAt ? new Date(cloudDraft.savedAt).toLocaleString('ne-NP') : 'पछिल्लो समय'} (कुनै पनि कम्प्युटरबाट सिंक हुन्छ)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        applyDraftData(cloudDraft);
                        setStatusMessage({ type: 'success', text: '☁️ ड्राफ्ट सम्पादकमा लोड भयो!' });
                        setTimeout(() => setStatusMessage(null), 3000);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-sm"
                    >
                      सम्पादकमा लोड गर्नुहोस्
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        if (confirm('के तपाईं क्लाउड ड्राफ्ट मेटाउन चाहनुहुन्छ?')) {
                          await fetch('/api/admin-posts?type=draft', {
                            method: 'DELETE',
                            headers: { 'Authorization': `Bearer ${sessionToken}` }
                          });
                          setCloudDraft(null);
                          setStatusMessage({ type: 'success', text: 'क्लाउड ड्राफ्ट मेटाइयो।' });
                          setTimeout(() => setStatusMessage(null), 3000);
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-950/50 dark:hover:text-rose-400 text-slate-600 dark:text-slate-400 font-medium transition"
                    >
                      हटाउनुहोस्
                    </button>
                  </div>
                </div>
              )}

              {!previewMode ? (
                <form onSubmit={handlePublish} className="space-y-6">
                  
                  {/* Title */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                      १. लेखको मुख्य शीर्षक (Nepali Title) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="जस्तै: कित्ताकाट सम्बन्धी नयाँ निर्देशिका २०८१ र मापदण्ड..."
                      value={title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white text-base font-semibold focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Slug & URL */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                        २. URL Slug (अंग्रेजी साना अक्षर र हाइफन) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="kitta-kat-new-rules-nepal-2026"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                      />
                      <p className="text-[10px] text-slate-500 mt-1 font-mono">
                        URL: https://www.brbhatta.com/articles/{slug || 'your-slug'}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                        ३. क्याटागोरी (Category) *
                      </label>
                      <select
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                          const nepMap: Record<string, string> = {
                            'Legal & Cadastre': 'नापी तथा मालपोत',
                            'Land Measurement': 'जग्गा नापजाँच',
                            'Financial Management': 'मालपोत तथा कर',
                            'Property Guide': 'घरजग्गा खरिदबिक्री',
                            'Technical Automation': 'प्राविधिक सफ्टवेयर'
                          };
                          setCategoryNepali(nepMap[e.target.value] || 'नापी तथा मालपोत');
                        }}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs font-semibold focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Legal & Cadastre">नापी तथा मालपोत (Legal & Cadastre)</option>
                        <option value="Land Measurement">जग्गा नापजाँच (Land Measurement)</option>
                        <option value="Financial Management">मालपोत तथा कर (Financial Management)</option>
                        <option value="Property Guide">घरजग्गा खरिदबिक्री (Property Guide)</option>
                        <option value="Technical Automation">प्राविधिक सफ्टवेयर (Technical Automation)</option>
                      </select>
                    </div>
                  </div>

                  {/* Tag & Read Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                        ४. ट्याग (Tag)
                      </label>
                      <input
                        type="text"
                        placeholder="जस्तै: कित्ताकाट कानुन"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                        ५. पढ्न लाग्ने समय (Read Time)
                      </label>
                      <input
                        type="text"
                        placeholder="जस्तै: ६ मिनेट"
                        value={readTime}
                        onChange={(e) => setReadTime(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                      ६. सारांश / मेटा विवरण (Summary - Google Search & Card Snippet) *
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="यस लेखले नेपालमा जग्गा कित्ताकाट गर्दा आवश्यक पर्ने कागजात, स्थानीय तहको सिफारिस र नापी कार्यालयको प्रक्रियाबारे स्पष्ट जानकारी दिन्छ..."
                      value={summary}
                      onChange={(e) => setSummary(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs leading-relaxed focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  {/* Dynamic Sections */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <Layers className="w-4 h-4 text-emerald-600" />
                        <span>७. लेखका खण्डहरू (Content Sections)</span>
                      </h3>
                      <button
                        type="button"
                        onClick={addSection}
                        className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center gap-1 hover:bg-emerald-100"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>खण्ड थप्नुहोस्</span>
                      </button>
                    </div>

                    {sections.map((sec, idx) => (
                      <div key={sec.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <input
                            type="text"
                            placeholder={`खण्ड ${idx + 1} को उप-शीर्षक (Heading)...`}
                            value={sec.heading}
                            onChange={(e) => updateSection(idx, 'heading', e.target.value)}
                            className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                          />
                          {sections.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSection(idx)}
                              className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg"
                              title="यो खण्ड हटाउनुहोस्"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>

                        <textarea
                          rows={4}
                          placeholder="यस खण्डको विस्तृत विवरण (नेपालीमा लेख्नुहोस्)..."
                          value={sec.content}
                          onChange={(e) => updateSection(idx, 'content', e.target.value)}
                          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs leading-relaxed text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                        />

                        {/* Optional Alert Tip */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          <input
                            type="text"
                            placeholder="सुझाव शीर्षक (जस्तै: स्मार्ट सुझाव)..."
                            value={sec.alertTitle || ''}
                            onChange={(e) => updateSection(idx, 'alertTitle', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-[11px]"
                          />
                          <input
                            type="text"
                            placeholder="सुझाव विवरण..."
                            value={sec.alertText || ''}
                            onChange={(e) => updateSection(idx, 'alertText', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-[11px]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* FAQs */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-emerald-600" />
                        <span>८. बारम्बार सोधिने प्रश्नहरू (FAQs)</span>
                      </h3>
                      <button
                        type="button"
                        onClick={addFaq}
                        className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center gap-1 hover:bg-emerald-100"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>प्रश्न थप्नुहोस्</span>
                      </button>
                    </div>

                    {faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <input
                            type="text"
                            placeholder={`प्रश्न ${idx + 1}...`}
                            value={faq.question}
                            onChange={(e) => updateFaq(idx, 'question', e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold"
                          />
                          {faqs.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeFaq(idx)}
                              className="p-1.5 text-rose-500 hover:bg-rose-50 rounded"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                        <textarea
                          rows={2}
                          placeholder="यसको स्पष्ट उत्तर..."
                          value={faq.answer}
                          onChange={(e) => updateFaq(idx, 'answer', e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs leading-relaxed"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Submission Action Buttons */}
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={copyTypeScriptCode}
                      className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition-all"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedCode ? 'कोड कपी भयो!' : 'TypeScript कोड कपी'}</span>
                    </button>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={saveDraft}
                        disabled={isSavingDraft}
                        className="px-4 py-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center gap-2 transition"
                      >
                        {isSavingDraft ? <RefreshCw className="w-4 h-4 animate-spin" /> : <span>☁️</span>}
                        <span>{isSavingDraft ? 'सुरक्षित हुँदै...' : 'मस्यौदा क्लाउडमा सेभ'}</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isPublishing}
                        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/30 flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                      >
                        {isPublishing ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>वेबसाइटमा पब्लिस हुँदैछ...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>🚀 सिधै वेबसाइटमा Publish गर्नुहोस्</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                </form>
              ) : (
                /* Live Preview Mode */
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-xs text-emerald-800 dark:text-emerald-300">
                    💡 यो लाइभ प्रिभ्यु हो। वेबसाइटमा प्रयोगकर्ताले हेर्दा यो यस्तै देखिनेछ।
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 text-xs font-bold">
                      {categoryNepali}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {title || 'शीर्षक यहाँ देखिनेछ...'}
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {summary || 'सारांश यहाँ देखिनेछ...'}
                    </p>
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                      {sections.map((s, idx) => (
                        <div key={idx} className="space-y-2">
                          <h3 className="font-bold text-base text-slate-900 dark:text-white">{s.heading}</h3>
                          <p className="text-xs text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{s.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Published Custom Posts (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>एडमिनबाट थपिएका लेखहरू ({customPosts.length})</span>
                </h3>
                <button 
                  onClick={loadCustomPosts}
                  className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500"
                  title="रिफ्रेस गर्नुहोस्"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingPosts ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {customPosts.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400">
                  <p>अहिलेसम्म एडमिनबाट कुनै नयाँ लेख प्रकाशित भएको छैन।</p>
                  <p className="mt-1 text-[11px] opacity-75">बायाँपट्टिको फारमबाट पहिलो लेख पब्लिस गर्नुहोस्!</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                  {customPosts.map((post) => (
                    <div key={post.slug} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                          {post.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                          /articles/{post.slug}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <a
                          href={`/articles/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 hover:bg-emerald-100"
                          title="लाइभ हेर्नुहोस्"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => handleDeletePost(post.slug)}
                          className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-500 hover:bg-rose-100"
                          title="मेटाउनुहोस्"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Zero-Trust Security Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 text-white space-y-3">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-xl bg-emerald-600/30 text-emerald-400">🛡️</span>
                <h4 className="font-bold text-xs">Zero-Trust सुरक्षा ग्यारेन्टी</h4>
              </div>
              <ul className="text-[11px] text-slate-300 space-y-1.5 leading-relaxed">
                <li>• <strong>No Hardcoded Passwords:</strong> पासवर्ड सर्भरमा मात्र बस्छ, Inspect मा केही भेटिँदैन।</li>
                <li>• <strong>HttpOnly Session Cookie:</strong> JavaScript ले पढ्न वा चोर्न सक्दैन।</li>
                <li>• <strong>Rate Limiting:</strong> ५ पटक गलत पासवर्ड हानेमा IP ब्लक हुन्छ।</li>
                <li>• <strong>Edge 404 Guard:</strong> बिना चाबी खोल्ने जो कोहीका लागि यो URL ४०४ रहन्छ।</li>
              </ul>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
