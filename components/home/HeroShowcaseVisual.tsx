"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Cpu,
  GitBranch,
  Globe,
  Smartphone,
  Terminal,
  TrendingUp,
  Zap,
  Database,
  Code2,
} from 'lucide-react';

type TabKey = 'arch' | 'erp' | 'terminal';

export default function HeroShowcaseVisual() {
  const [activeTab, setActiveTab] = useState<TabKey>('arch');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0 select-none">
      {/* Ambient Cyber Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/30 via-blue-600/25 to-indigo-500/30 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Dark IDE Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-[#070B14] rounded-2xl border border-slate-800 shadow-2xl shadow-blue-950/50 overflow-hidden text-left"
      >
        {/* Top IDE Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/95 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90" />
            <span className="w-3 h-3 rounded-full bg-amber-400/90" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
            <span className="hidden sm:inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-cyan-400 border border-slate-700/70">
              <GitBranch className="w-2.5 h-2.5" />
              main
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/90 border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[11px] font-medium text-slate-300">
              msduoyazilim.dev · v3.0
            </span>
          </div>

          <Cpu className="w-4 h-4 text-cyan-400" />
        </div>

        {/* Interactive IDE File Tabs */}
        <div className="flex items-center gap-1 px-3 pt-2 bg-slate-900/60 border-b border-slate-800/90 overflow-x-auto">
          {[
            { id: 'arch' as const, label: 'architecture.ts', icon: Code2, color: 'text-cyan-400' },
            { id: 'erp' as const, label: 'erp-sync.api.ts', icon: Database, color: 'text-indigo-400' },
            { id: 'terminal' as const, label: 'deploy.sh', icon: Terminal, color: 'text-emerald-400' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg font-mono text-[11px] transition-all border-t border-x ${
                  isActive
                    ? 'bg-[#070B14] text-white border-slate-700/80 font-semibold'
                    : 'bg-slate-900/40 text-slate-400 border-transparent hover:text-slate-200'
                }`}
              >
                <tab.icon className={`w-3.5 h-3.5 ${tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Window Content */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Code / Terminal Panel */}
          <div className="rounded-xl bg-slate-950/95 border border-slate-800/90 p-3.5 sm:p-4 font-mono text-[11px] sm:text-xs leading-relaxed min-h-[172px]">
            <AnimatePresence mode="wait">
              {activeTab === 'arch' && (
                <motion.div
                  key="arch"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-1 text-slate-300"
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1.5 mb-1.5 border-b border-slate-800/70">
                    <span>{"// Full-Stack Kurumsal Mimari"}</span>
                    <span className="text-cyan-400 font-semibold">Next.js 16 · TypeScript</span>
                  </div>
                  <p>
                    <span className="text-slate-600 select-none mr-3">01</span>
                    <span className="text-pink-400">export const</span>{' '}
                    <span className="text-cyan-300">msduoArchitecture</span> = {'{'}
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">02</span>
                    <span className="pl-4 text-slate-400">hq:</span>{' '}
                    <span className="text-emerald-300">&apos;Bursa, TR&apos;</span>,
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">03</span>
                    <span className="pl-4 text-slate-400">frontend:</span> [
                    <span className="text-amber-300">&apos;Next.js&apos;</span>,{' '}
                    <span className="text-amber-300">&apos;React Native&apos;</span>],
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">04</span>
                    <span className="pl-4 text-slate-400">backend:</span> [
                    <span className="text-sky-300">&apos;Node.js&apos;</span>,{' '}
                    <span className="text-sky-300">&apos;.NET Core&apos;</span>,{' '}
                    <span className="text-sky-300">&apos;PostgreSQL&apos;</span>],
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">05</span>
                    <span className="pl-4 text-slate-400">slaUptime:</span>{' '}
                    <span className="text-cyan-300">&apos;99.98%&apos;</span>,
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">06</span>
                    {'}'} <span className="text-pink-400">satisfies</span>{' '}
                    <span className="text-indigo-300">EnterpriseStack</span>;
                  </p>
                </motion.div>
              )}

              {activeTab === 'erp' && (
                <motion.div
                  key="erp"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-1 text-slate-300"
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1.5 mb-1.5 border-b border-slate-800/70">
                    <span>{"// SAP · Logo · Mikro Real-Time Sync"}</span>
                    <span className="text-indigo-400 font-semibold">REST / GraphQL Webhook</span>
                  </div>
                  <p>
                    <span className="text-slate-600 select-none mr-3">01</span>
                    <span className="text-pink-400">async function</span>{' '}
                    <span className="text-cyan-300">syncErpInventory</span>(payload: ErpEvent) {'{'}
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">02</span>
                    <span className="pl-4 text-pink-400">const</span> tx ={' '}
                    <span className="text-pink-400">await</span> erpBridge.connect(
                    <span className="text-amber-300">&apos;SAP_LOGO_MIKRO&apos;</span>);
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">03</span>
                    <span className="pl-4 text-pink-400">await</span> tx.syncOrders({'{'}
                    zeroDataLoss: <span className="text-emerald-400">true</span> {'}'});
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">04</span>
                    <span className="pl-4 text-pink-400">return</span> {'{'} status:{' '}
                    <span className="text-emerald-300">&apos;200_OK&apos;</span>, latency:{' '}
                    <span className="text-cyan-300">&apos;14ms&apos;</span> {'}'};
                  </p>
                  <p>
                    <span className="text-slate-600 select-none mr-3">05</span>
                    {'}'}
                  </p>
                </motion.div>
              )}

              {activeTab === 'terminal' && (
                <motion.div
                  key="terminal"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-1.5 text-slate-300"
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1.5 mb-1.5 border-b border-slate-800/70">
                    <span>zsh — msduoyazilim@bursa-prod</span>
                    <span className="text-emerald-400 font-semibold">CI/CD Pipeline</span>
                  </div>
                  <p className="text-cyan-300">$ npm run build &amp;&amp; msduo deploy --prod</p>
                  <p className="text-slate-400">✓ Compiling TypeScript &amp; Next.js Turbopack...</p>
                  <p className="text-slate-400">✓ Running 128 automated security &amp; API tests...</p>
                  <p className="text-emerald-400 font-semibold">
                    ✓ Production live: https://msduoyazilim.com (12ms TTFB)
                  </p>
                  <p className="text-amber-300">
                    ⚡ Lighthouse: 100 Performance · 100 SEO · 100 Best Practices
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Analytics & Status Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Performance Chart Card */}
            <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] font-medium text-slate-400">
                  LIGHTHOUSE_SCORE
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-400">
                  <TrendingUp className="w-3 h-3" />
                  99/100
                </span>
              </div>
              <svg viewBox="0 0 180 54" className="w-full h-12 overflow-visible" fill="none">
                <defs>
                  <linearGradient id="heroSparkArea" x1="0" y1="0" x2="0" y2="54" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 44 C 32 42, 46 28, 70 30 C 94 32, 110 14, 136 16 C 154 18, 166 8, 176 6 L 176 52 L 4 52 Z"
                  fill="url(#heroSparkArea)"
                />
                <path
                  d="M4 44 C 32 42, 46 28, 70 30 C 94 32, 110 14, 136 16 C 154 18, 166 8, 176 6"
                  stroke="#22D3EE"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="176" cy="6" r="4" fill="#34D399" />
              </svg>
            </div>

            {/* Active Integrations Card */}
            <div className="rounded-xl bg-gradient-to-br from-blue-950/80 to-indigo-950/70 border border-cyan-500/25 p-3.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-medium text-cyan-300">
                  ACTIVE_MODULES
                </span>
                <Zap className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="space-y-1.5 mt-2">
                {[
                  { icon: Globe, label: 'Next.js Web & E-Ticaret' },
                  { icon: Smartphone, label: 'iOS & Android Native' },
                ].map((mod, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                    <mod.icon className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{mod.label}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 ml-auto flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IDE Bottom Status Bar */}
          <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800/80 font-mono text-[10px] text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              BUILD: PASSING
            </span>
            <span className="hidden sm:inline text-slate-500">UTF-8 · TypeScript 5.x</span>
            <span className="text-cyan-400">LATENCY: 14ms</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Bottom-Left Badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-slate-900/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-cyan-500/30"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-white">20+ Canlı Sistem</p>
          <p className="font-mono text-[10px] text-cyan-400">Bursa &amp; Türkiye Geneli</p>
        </div>
      </motion.div>

      {/* Floating Top-Right Pill */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex items-center gap-2 absolute -top-4 -right-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-mono font-semibold border border-emerald-300/40"
      >
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span>ERP &amp; REST API READY</span>
      </motion.div>
    </div>
  );
}
