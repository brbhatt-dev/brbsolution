'use client';

import React, { useState } from 'react';
import { 
  Wallet, Users, TrendingUp, DollarSign, PlusCircle, 
  Calculator, FileText, CheckCircle2, Search, ArrowUpRight, 
  ArrowDownLeft, Sparkles, X, ShieldAlert 
} from 'lucide-react';

interface Member {
  id: number;
  name: string;
  role: string;
  monthlyDeposit: number;
  totalSavings: number;
  loanTaken: number;
  status: 'सक्रिय' | 'नियमित';
}

interface Transaction {
  id: number;
  memberName: string;
  type: 'बचत जम्मा' | 'ऋण फिर्ता' | 'ऋण लगानी' | 'ब्याज आम्दानी';
  amount: number;
  date: string;
}

export default function HamroKoshDemo({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'members' | 'deposit' | 'loanCalc'>('dashboard');

  // Initial demo data (Completely synthetic demo values)
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: 'राम श्रेष्ठ', role: 'अध्यक्ष', monthlyDeposit: 1000, totalSavings: 24000, loanTaken: 0, status: 'सक्रिय' },
    { id: 2, name: 'सीता अधिकारी', role: 'सचिव', monthlyDeposit: 1000, totalSavings: 24000, loanTaken: 15000, status: 'सक्रिय' },
    { id: 3, name: 'हरि कार्की', role: 'कोषाध्यक्ष', monthlyDeposit: 1000, totalSavings: 24000, loanTaken: 0, status: 'सक्रिय' },
    { id: 4, name: 'दिनेश थापा', role: 'सदस्य', monthlyDeposit: 1000, totalSavings: 22000, loanTaken: 25000, status: 'नियमित' },
    { id: 5, name: 'सुनिता गुरुङ', role: 'सदस्य', monthlyDeposit: 1000, totalSavings: 23000, loanTaken: 0, status: 'सक्रिय' },
    { id: 6, name: 'विमल भट्ट', role: 'सदस्य', monthlyDeposit: 1000, totalSavings: 20000, loanTaken: 0, status: 'नियमित' },
  ]);

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, memberName: 'राम श्रेष्ठ', type: 'बचत जम्मा', amount: 1000, date: '२०८३/०६/०१' },
    { id: 2, memberName: 'सीता अधिकारी', type: 'ऋण फिर्ता', amount: 3500, date: '२०८३/०६/०२' },
    { id: 3, memberName: 'हरि कार्की', type: 'बचत जम्मा', amount: 1000, date: '२०८३/०६/०३' },
    { id: 4, memberName: 'दिनेश थापा', type: 'ब्याज आम्दानी', amount: 450, date: '२०८३/०६/०४' },
  ]);

  // Deposit Form State
  const [depositForm, setDepositForm] = useState({
    memberId: 1,
    amount: 1000,
    type: 'बचत जम्मा' as const,
  });
  const [depositSuccess, setDepositSuccess] = useState(false);

  // Loan Calculator State
  const [loanCalc, setLoanCalc] = useState({
    principal: 50000,
    rateMonthlyPercent: 1.5,
    months: 12,
  });

  // Calculate totals
  const totalSavings = members.reduce((sum, m) => sum + m.totalSavings, 0);
  const totalLoanOut = members.reduce((sum, m) => sum + m.loanTaken, 0);
  const totalInterest = 5250;
  const netFund = totalSavings + totalInterest - totalLoanOut;

  // Handle deposit simulation
  const handleAddDeposit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetMember = members.find(m => m.id === Number(depositForm.memberId));
    if (!targetMember) return;

    // Update member total
    setMembers(members.map(m => {
      if (m.id === targetMember.id) {
        return { ...m, totalSavings: m.totalSavings + Number(depositForm.amount) };
      }
      return m;
    }));

    // Add transaction
    const newTx: Transaction = {
      id: Date.now(),
      memberName: targetMember.name,
      type: depositForm.type,
      amount: Number(depositForm.amount),
      date: '२०८३/०६/०८ (आज)',
    };
    setTransactions([newTx, ...transactions]);

    setDepositSuccess(true);
    setTimeout(() => {
      setDepositSuccess(false);
      setActiveTab('dashboard');
    }, 1500);
  };

  // Loan calculation logic
  const monthlyInterest = (loanCalc.principal * (loanCalc.rateMonthlyPercent / 100));
  const totalLoanInterest = monthlyInterest * loanCalc.months;
  const totalPayable = loanCalc.principal + totalLoanInterest;
  const monthlyEmi = Math.round(totalPayable / loanCalc.months);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-slate-50 w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-4 sm:p-6 flex items-center justify-between border-b border-indigo-700/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/30 border border-indigo-400/40 flex items-center justify-center text-white shadow-inner">
              <Wallet className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black tracking-tight text-white">हाम्रो कोष (Hamro Kosh)</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Interactive Demo
                </span>
              </div>
              <p className="text-xs text-indigo-200 mt-0.5">
                बचत तथा कोष व्यवस्थापन प्रणाली • डेमो संस्करण (No Real Data)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Notice Banner */}
        <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2 text-xs text-amber-900 flex items-center gap-2 shrink-0">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>डेमो सूचना:</strong> यसमा कुनै पनि वास्तविक व्यक्तिगत हिसाब छैन। यो केवल एपको सुविधाहरू प्रत्यक्ष चलाएर हेर्नका लागि तयार गरिएको डेमो हो।
          </span>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center gap-2 sm:gap-4 overflow-x-auto shrink-0 py-2.5">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'dashboard'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>डैशबोर्ड (Overview)</span>
          </button>

          <button
            onClick={() => setActiveTab('members')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'members'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>सदस्यहरू ({members.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('deposit')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'deposit'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>बचत जम्मा सिमुलेटर</span>
          </button>

          <button
            onClick={() => setActiveTab('loanCalc')}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all whitespace-nowrap ${
              activeTab === 'loanCalc'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>ऋण & ब्याज क्यालकुलेटर</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow space-y-6">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              
              {/* Financial Metrics Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">कुल संकलित बचत</span>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-mono">
                    रु {totalSavings.toLocaleString()}
                  </p>
                  <span className="text-[10px] text-emerald-600 font-semibold mt-1 block">
                    ↑ नियमित संकलन भइरहेको
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">लगानीमा रहेको ऋण</span>
                  <p className="text-xl sm:text-2xl font-black text-indigo-700 mt-1 font-mono">
                    रु {totalLoanOut.toLocaleString()}
                  </p>
                  <span className="text-[10px] text-indigo-600 font-semibold mt-1 block">
                    २ जना सदस्यमा लगानी
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">ब्याज आम्दानी</span>
                  <p className="text-xl sm:text-2xl font-black text-emerald-700 mt-1 font-mono">
                    रु {totalInterest.toLocaleString()}
                  </p>
                  <span className="text-[10px] text-emerald-600 font-semibold mt-1 block">
                    मासिक १.५% दरमा
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">हाल बचतमा बाँकी मौज्दात</span>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 mt-1 font-mono">
                    रु {netFund.toLocaleString()}
                  </p>
                  <span className="text-[10px] text-slate-500 font-semibold mt-1 block">
                    कोषमा सुरक्षित नगद
                  </span>
                </div>

              </div>

              {/* Transactions & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Recent Transactions List */}
                <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <FileText className="w-4 h-4 text-indigo-600" />
                      <span>पछिल्ला कारोबारहरू (Demo Transactions)</span>
                    </h4>
                    <span className="text-xs text-slate-400">स्वचालित अपडेट</span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {transactions.map((tx) => (
                      <div key={tx.id} className="py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            tx.type === 'बचत जम्मा' || tx.type === 'ब्याज आम्दानी'
                              ? 'bg-emerald-50 text-emerald-700'
                              : 'bg-indigo-50 text-indigo-700'
                          }`}>
                            {tx.type === 'बचत जम्मा' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">{tx.memberName}</p>
                            <span className="text-[10px] text-slate-500">{tx.type} • {tx.date}</span>
                          </div>
                        </div>
                        <span className={`text-xs font-bold font-mono ${
                          tx.type === 'बचत जम्मा' || tx.type === 'ब्याज आम्दानी' ? 'text-emerald-700' : 'text-indigo-700'
                        }`}>
                          + रु {tx.amount.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Shortcuts */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-5 border border-indigo-100 space-y-3">
                    <h5 className="font-bold text-indigo-950 text-sm">सिमुलेसन गर्नुहोस्</h5>
                    <p className="text-xs text-indigo-800/80 leading-relaxed">
                      तपाईं सिमुलेटर ट्याबमा गएर नयाँ बचत थप्न वा ऋण क्यालकुलेटर चलाएर किस्ता हिसाब गर्न सक्नुहुन्छ।
                    </p>
                    <button
                      onClick={() => setActiveTab('deposit')}
                      className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span>नयाँ बचत थप्नुहोस् (Test)</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('loanCalc')}
                      className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-indigo-900 text-xs font-bold transition-all border border-indigo-200 flex items-center justify-center gap-1.5"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>ऋण क्यालकुलेटर चलाउनुहोस्</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: MEMBERS */}
          {activeTab === 'members' && (
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-sm">सदस्यहरूको बचत तथा ऋण स्थिति (Sample Members)</h4>
                <span className="text-xs text-slate-500 font-medium">{members.length} सदस्य दर्ता</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">नाम</th>
                      <th className="py-3 px-4">पद / भूमिका</th>
                      <th className="py-3 px-4">मासिक बचत</th>
                      <th className="py-3 px-4">कुल बचत रकम</th>
                      <th className="py-3 px-4">लिएको ऋण</th>
                      <th className="py-3 px-4">स्थिति</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {members.map((m) => (
                      <tr key={m.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-[10px]">
                            {m.name.charAt(0)}
                          </div>
                          <span>{m.name}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-600">{m.role}</td>
                        <td className="py-3 px-4 font-mono">रु {m.monthlyDeposit.toLocaleString()}</td>
                        <td className="py-3 px-4 font-bold text-emerald-700 font-mono">रु {m.totalSavings.toLocaleString()}</td>
                        <td className="py-3 px-4 font-mono text-slate-700">
                          {m.loanTaken > 0 ? (
                            <span className="text-indigo-700 font-bold">रु {m.loanTaken.toLocaleString()}</span>
                          ) : (
                            <span className="text-slate-400">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            {m.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: DEPOSIT SIMULATOR */}
          {activeTab === 'deposit' && (
            <div className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <PlusCircle className="w-5 h-5 text-indigo-600" />
                <h4 className="font-bold text-slate-900 text-base">बचत जम्मा प्रविष्टि (Demo Deposit Simulator)</h4>
              </div>

              {depositSuccess ? (
                <div className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h5 className="font-bold text-slate-900 text-base">बचत सफलतापूर्वक थपियो!</h5>
                  <p className="text-xs text-slate-500">डैशबोर्ड तथा सदस्यको कुल खाता अपडेट भइसकेको छ।</p>
                </div>
              ) : (
                <form onSubmit={handleAddDeposit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      सदस्य छान्नुहोस्
                    </label>
                    <select
                      value={depositForm.memberId}
                      onChange={(e) => setDepositForm({ ...depositForm, memberId: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      {members.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.name} ({m.role}) - हालको बचत: रु {m.totalSavings.toLocaleString()}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      जम्मा गर्ने रकम (रुपैयाँमा)
                    </label>
                    <input
                      type="number"
                      required
                      min={100}
                      step={100}
                      value={depositForm.amount}
                      onChange={(e) => setDepositForm({ ...depositForm, amount: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all"
                  >
                    डेमो बचत रेकर्ड गर्नुहोस् (Save Demo Deposit)
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 4: LOAN CALCULATOR */}
          {activeTab === 'loanCalc' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              
              {/* Calculator Inputs */}
              <div className="md:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-indigo-600" />
                  <span>ऋण तथा किस्ता क्यालकुलेटर (EMI & Interest)</span>
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    ऋण रकम (Loan Amount): रु {loanCalc.principal.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min={5000}
                    max={200000}
                    step={5000}
                    value={loanCalc.principal}
                    onChange={(e) => setLoanCalc({ ...loanCalc, principal: Number(e.target.value) })}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    मासिक ब्याजदर (% प्रति महिना): {loanCalc.rateMonthlyPercent}%
                  </label>
                  <input
                    type="range"
                    min={0.5}
                    max={3.0}
                    step={0.1}
                    value={loanCalc.rateMonthlyPercent}
                    onChange={(e) => setLoanCalc({ ...loanCalc, rateMonthlyPercent: Number(e.target.value) })}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    भुक्तानी अवधि (महिनामा): {loanCalc.months} महिना
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={36}
                    step={1}
                    value={loanCalc.months}
                    onChange={(e) => setLoanCalc({ ...loanCalc, months: Number(e.target.value) })}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>
              </div>

              {/* Calculator Output Card */}
              <div className="md:col-span-6 bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md space-y-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  हिसाब प्रतिवेदन (Calculation Summary)
                </h5>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                    <span className="text-xs text-indigo-200">मासिक अनुमानित किस्ता (Monthly Installment)</span>
                    <p className="text-2xl font-black text-white font-mono mt-0.5">
                      रु {monthlyEmi.toLocaleString()} / महिना
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-slate-300">मासिक ब्याज</span>
                      <p className="text-base font-bold text-emerald-400 font-mono mt-0.5">
                        रु {Math.round(monthlyInterest).toLocaleString()}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-slate-300">कुल ब्याज</span>
                      <p className="text-base font-bold text-emerald-400 font-mono mt-0.5">
                        रु {Math.round(totalLoanInterest).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-300">कुल फिर्ता गर्नुपर्ने रकम:</span>
                    <span className="font-bold text-white font-mono text-sm">
                      रु {Math.round(totalPayable).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 shrink-0">
          <p>हाम्रो कोष - बचत, समिति तथा गुठीका लागि भरपर्दो समाधान।</p>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold transition-colors"
          >
            बन्द गर्नुहोस् (Close Demo)
          </button>
        </div>

      </div>
    </div>
  );
}
