"use client";

import Link from 'next/link';
import {
  Building,
  ArrowRight,
  MessageCircle,
  CheckCircle,
  Award,
  MapPin,
  ShieldCheck,
  Clock,
  Zap,
  Terminal,
  Code2,
} from 'lucide-react';
import HeroShowcaseVisual from './HeroShowcaseVisual';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  setShowWhatsappModal: (show: boolean) => void;
}

const stackBadges = [
  { label: 'Next.js 16', tag: 'SSR/App' },
  { label: 'React & TypeScript', tag: 'Type-Safe' },
  { label: 'Node.js & .NET', tag: 'Microservices' },
  { label: 'React Native & Flutter', tag: 'iOS/Android' },
  { label: 'SAP · Logo · Mikro', tag: 'ERP Bridge' },
  { label: 'PostgreSQL & Docker', tag: 'Cloud/DB' },
];

export default function HeroSection({ scrollToSection, setShowWhatsappModal }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-[#050811] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 border-b border-slate-800/80"
      suppressHydrationWarning
    >
      {/* Developer Cyber Grid & Spotlights */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b40_1px,transparent_1px),linear-gradient(to_bottom,#1e293b40_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        <div className="absolute -top-32 left-1/4 w-[560px] h-[560px] bg-blue-600/20 rounded-full blur-[130px]" />
        <div className="absolute top-20 right-10 w-[480px] h-[480px] bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050811] to-transparent" />
      </div>

      <div className="px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        {/* Split Hero */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-14">
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Terminal Command Pill */}
            <div className="inline-flex items-center gap-2.5 bg-slate-900/90 text-cyan-300 px-3.5 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6 border border-cyan-500/30 shadow-lg shadow-cyan-950/30">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wide">
                ~/msduoyazilim <span className="text-slate-500">$</span> init --bursa-software-studio
              </span>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0" />
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold mb-5 sm:mb-6 text-white leading-[1.12] tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Bursa Yazılım Firması
              </span>
              <br />
              <span className="text-2xl sm:text-4xl xl:text-[2.65rem] text-slate-100 font-bold inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start mt-1">
                <span>Mühendislik Odaklı Çözümler</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-7 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <strong className="text-white font-semibold">Bursa yazılım</strong> geliştirme stüdyomuzda; temiz kod mimarisiyle yüksek hızlı kurumsal web platformları,{' '}
              <span className="text-cyan-300 font-mono text-sm">iOS/Android</span> mobil uygulamalar, ölçeklenebilir e-ticaret ve{' '}
              <span className="text-cyan-300 font-mono text-sm">SAP/Logo/Mikro ERP</span> entegrasyonları inşa ediyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto group bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2.5 text-base border border-cyan-400/30 active:scale-95"
              >
                <Code2 className="w-5 h-5 text-cyan-100" />
                <span>Ücretsiz Teknik Analiz</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>

              <button
                onClick={() => setShowWhatsappModal(true)}
                className="w-full sm:w-auto group border border-emerald-500/40 bg-slate-900/90 backdrop-blur-sm text-emerald-300 px-7 py-3.5 rounded-xl font-semibold hover:border-emerald-400 hover:bg-emerald-950/50 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base shadow-sm hover:shadow-md active:scale-95"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform stroke-[2.25]" />
                <span>WhatsApp Mühendislik Hattı</span>
              </button>
            </div>

            {/* Developer Trust Micro-Badges */}
            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Clean Architecture
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                99+ Lighthouse SEO
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-indigo-400" />
                7/24 SLA &amp; DevOps
              </span>
            </div>
          </div>

          {/* Right Interactive IDE Visual */}
          <div className="lg:col-span-6">
            <HeroShowcaseVisual />
          </div>
        </div>

        {/* Live Engineering Tech Stack Bar */}
        <div className="mb-12 rounded-2xl bg-slate-900/75 border border-slate-800/90 px-4 py-3.5 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              CORE_STACK //
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {stackBadges.map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/40 transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Telemetry Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-14">
          {[
            { value: "20+", label: "Canlı Proje", code: "PROD_DEPLOY", icon: Award, gradient: "from-cyan-400 to-blue-400", iconBg: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30" },
            { value: "Bursa", label: "Ar-Ge & Merkez", code: "HQ_LOCATION", icon: MapPin, gradient: "from-indigo-400 to-purple-400", iconBg: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30" },
            { value: "%99.9", label: "Sistem Uptime", code: "SLA_UPTIME", icon: ShieldCheck, gradient: "from-emerald-400 to-teal-400", iconBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30" },
            { value: "7/24", label: "Teknik Destek", code: "DEV_SUPPORT", icon: Clock, gradient: "from-amber-400 to-orange-400", iconBg: "bg-amber-500/15 text-amber-400 border-amber-500/30" },
            { value: "30+", label: "Modern Teknoloji", code: "TECH_STACK", icon: Zap, gradient: "from-sky-400 to-cyan-300", iconBg: "bg-sky-500/15 text-sky-400 border-sky-500/30" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-4 sm:p-5 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col items-center text-center group ${
                index === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="w-full flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors">
                  {stat.code}
                </span>
                <div className={`w-8 h-8 rounded-lg border ${stat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-4 h-4" />
                </div>
              </div>
              <div className={`text-2xl sm:text-3xl font-extrabold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-mono`}>
                {stat.value}
              </div>
              <div className="text-slate-300 font-medium text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bursa Özel Engineering Banner */}
        <div
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950/90 to-indigo-950/90 rounded-3xl p-6 sm:p-10 text-white border border-cyan-500/25 shadow-2xl animate-on-scroll"
          suppressHydrationWarning
        >
          {/* Decorative Vector Radar Glow */}
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="absolute -right-16 -top-16 w-80 h-80 opacity-20 pointer-events-none"
            fill="none"
          >
            <circle cx="200" cy="200" r="160" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="8 8" />
            <circle cx="200" cy="200" r="110" stroke="#22D3EE" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="60" stroke="#818CF8" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="200" cy="90" r="7" fill="#22D3EE" />
            <circle cx="310" cy="200" r="7" fill="#60A5FA" />
            <circle cx="140" cy="295" r="7" fill="#34D399" />
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 border border-cyan-300/30">
              <Building className="w-8 h-8 text-white stroke-[2]" />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
                <span>{"// YEREL GÜÇ, GLOBAL MÜHENDİSLİK STANDARDI"}</span>
              </div>
              <h2 className="font-bold text-2xl sm:text-3xl text-white mb-3">Bursa Yazılım Hizmetleri</h2>
              <p className="text-slate-300 mb-6 max-w-3xl text-sm sm:text-base leading-relaxed">
                <strong className="text-white">Bursa yazılım</strong> sektöründe uzman mühendis ekibimiz, sanayi ve ticaret işletmeleri için yüksek güvenlikli, ölçeklenebilir yazılım mimarileri geliştiriyor.
                Yüz yüze analiz ve yerinde entegrasyon desteğiyle dijital dönüşümünüzü uçtan uca yönetiyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Bursa'daki fabrika ve işletmelere özel yazılım mimarisi",
                  "Yerinde analiz, kurulum ve yüz yüze teknik danışmanlık",
                  "ERP, B2B bayi portalı ve üretim takip entegrasyonları",
                  "Yüksek hız, modern UI/UX ve garantili SLA desteği",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-slate-950/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 stroke-[2.25]" />
                    <span className="text-slate-100 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div>
                <Link
                  href="/bursa-yazilim"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-6 py-3 rounded-xl hover:bg-cyan-50 font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base group"
                >
                  <Building className="w-4 h-4 text-blue-600" />
                  <span>Bursa Yazılım Hizmetleri Detayları</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
