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
  Sparkles,
} from 'lucide-react';
import HeroShowcaseVisual from './HeroShowcaseVisual';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  setShowWhatsappModal: (show: boolean) => void;
}

export default function HeroSection({ scrollToSection, setShowWhatsappModal }: HeroSectionProps) {
  return (
    <section id="home" className="pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10" suppressHydrationWarning>
      {/* Split Hero */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
        <div className="lg:col-span-6 text-center lg:text-left">
          {/* Bursa Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-1.5 rounded-full mb-6 border border-blue-200/70 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-semibold">Bursa&apos;nın Yazılım ve Teknoloji Ekibi</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold mb-6 text-gray-900 leading-[1.12] tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Bursa Yazılım Firması
            </span>
            <br />
            <span className="text-3xl sm:text-4xl xl:text-[2.75rem] text-gray-900 font-bold">
              Modern Dijital Çözümler
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            <strong>Bursa yazılım</strong> hizmetlerinde uzman ekibimizle işletmenize özel web siteleri,
            iOS/Android mobil uygulamalar, e-ticaret ve ERP entegrasyonları geliştiriyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base active:scale-95"
            >
              <span>Ücretsiz Proje Analizi</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </button>

            <button
              onClick={() => setShowWhatsappModal(true)}
              className="w-full sm:w-auto group border border-emerald-200 bg-white/90 backdrop-blur-sm text-emerald-700 px-7 py-3.5 rounded-xl font-semibold hover:border-emerald-400 hover:bg-emerald-50 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base shadow-sm hover:shadow-md active:scale-95"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform stroke-[2.25]" />
              <span>WhatsApp&apos;tan Yaz</span>
            </button>
          </div>

          {/* Trust Micro-Badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              Yüz Yüze Danışmanlık
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              SEO &amp; Hız Odaklı Mimari
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              7/24 Teknik Destek
            </span>
          </div>
        </div>

        {/* Right Showcase Visual */}
        <div className="lg:col-span-6">
          <HeroShowcaseVisual />
        </div>
      </div>

      {/* Advanced Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-16">
        {[
          { value: "20+", label: "Başarılı Proje", icon: Award, gradient: "from-blue-600 to-indigo-600", bg: "bg-blue-50 text-blue-600" },
          { value: "Bursa", label: "Yerel Merkez", icon: MapPin, gradient: "from-purple-600 to-indigo-600", bg: "bg-purple-50 text-purple-600" },
          { value: "%99.9", label: "Sistem Uptime", icon: ShieldCheck, gradient: "from-emerald-600 to-teal-600", bg: "bg-emerald-50 text-emerald-600" },
          { value: "7/24", label: "Teknik Destek", icon: Clock, gradient: "from-amber-600 to-orange-600", bg: "bg-amber-50 text-amber-600" },
          { value: "30+", label: "Modern Teknoloji", icon: Zap, gradient: "from-cyan-600 to-blue-600", bg: "bg-cyan-50 text-cyan-600" },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/80 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-sm flex flex-col items-center text-center group"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className={`text-2xl sm:text-3xl font-extrabold mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Bursa Özel Section */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl mb-16 animate-on-scroll"
        suppressHydrationWarning
      >
        {/* Decorative Vector Grid Glow */}
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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
            <Building className="w-8 h-8 text-white stroke-[2]" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-2">
              <span>Yerel Güç, Global Standart</span>
            </div>
            <h2 className="font-bold text-2xl sm:text-3xl text-white mb-3">Bursa Yazılım Hizmetleri</h2>
            <p className="text-slate-300 mb-6 max-w-3xl text-sm sm:text-base leading-relaxed">
              <strong>Bursa yazılım</strong> sektöründe uzman ekibimiz, işletmeler için özel geliştirilmiş yazılım hizmetleri sunuyor.
              Yerel tecrübemizle şehrinizin iş dinamiklerini anlıyor, dijital dönüşümünüzde uçtan uca yanınızda oluyoruz.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Bursa'daki işletmelere özel çözümler",
                "Yerinde destek ve yüz yüze danışmanlık",
                "Bölgeye özgü iş modellerine hakimiyet",
                "Güçlü yerel network ve referanslar",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 stroke-[2.25]" />
                  <span className="text-slate-100 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <Link
                href="/bursa-yazilim"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl hover:bg-cyan-50 font-semibold shadow-lg transition-all duration-300 text-sm sm:text-base group"
              >
                <Building className="w-4 h-4 text-blue-600" />
                <span>Bursa Yazılım Hizmetleri Detayları</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
