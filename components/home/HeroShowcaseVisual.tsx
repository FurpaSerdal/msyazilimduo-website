"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Globe, Smartphone, TrendingUp, Zap } from 'lucide-react';

export default function HeroShowcaseVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0 select-none">
      {/* Ambient Background Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-cyan-400/25 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Dark Engineering Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-slate-950 rounded-2xl border border-slate-800/90 shadow-2xl overflow-hidden text-left"
      >
        {/* Window Chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90" />
            <span className="w-3 h-3 rounded-full bg-amber-400/90" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium text-slate-300">msduoyazilim.com · v2.4</span>
          </div>
          <Cpu className="w-4 h-4 text-cyan-400" />
        </div>

        {/* Window Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Code / Architecture Snippet */}
          <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-4 font-mono text-xs leading-relaxed">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
              <span>platform.config.ts</span>
              <span className="text-cyan-400">TypeScript · Next.js</span>
            </div>
            <div className="space-y-1 text-slate-300">
              <p>
                <span className="text-indigo-400">export const</span>{' '}
                <span className="text-sky-300">solution</span> = {'{'}
              </p>
              <p className="pl-4">
                region: <span className="text-emerald-300">&apos;Bursa, TR&apos;</span>,
              </p>
              <p className="pl-4">
                stack: [<span className="text-amber-300">&apos;Web&apos;</span>,{' '}
                <span className="text-amber-300">&apos;Mobile&apos;</span>,{' '}
                <span className="text-amber-300">&apos;ERP API&apos;</span>],
              </p>
              <p className="pl-4">
                uptime: <span className="text-cyan-300">&apos;%99.9&apos;</span>,
              </p>
              <p>{'}'};</p>
            </div>
          </div>

          {/* Analytics & Status Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Performance Chart Card */}
            <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-900/70 border border-slate-800 p-3.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium text-slate-400">Sistem Hızı</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
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
            <div className="rounded-xl bg-gradient-to-br from-blue-950/70 to-indigo-950/60 border border-blue-500/20 p-3.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium text-blue-200">Canlı Modüller</span>
                <Zap className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="space-y-1.5 mt-2">
                {[
                  { icon: Globe, label: 'Web & E-Ticaret' },
                  { icon: Smartphone, label: 'iOS & Android' },
                ].map((mod, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <mod.icon className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{mod.label}</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-auto flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Bottom-Left Badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-blue-100"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-gray-900">20+ Tamamlanan Proje</p>
          <p className="text-[11px] text-gray-500">Bursa &amp; Türkiye Geneli</p>
        </div>
      </motion.div>

      {/* Floating Top-Right Pill */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden sm:flex items-center gap-2 absolute -top-4 -right-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-semibold"
      >
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span>ERP &amp; API Hazır</span>
      </motion.div>
    </div>
  );
}
