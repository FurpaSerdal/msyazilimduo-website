"use client";

import Link from 'next/link';
import { Building, ArrowRight, MessageCircle, CheckCircle, AwardIcon, MapPin, ShieldCheck, Clock, ZapIcon } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  setShowWhatsappModal: (show: boolean) => void;
}

export default function HeroSection({ scrollToSection, setShowWhatsappModal }: HeroSectionProps) {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10" suppressHydrationWarning>
      <div className="text-center mb-12">
        {/* Bursa Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-1.5 rounded-full mb-6 border border-blue-100 shadow-sm">
          <Building className="w-3 h-3" />
          <span className="text-xs font-semibold">Bursa'nın Yazılım Ekibi</span>
          <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
            Bursa Yazılım <span className="inline-block animate-float">Firması</span>
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl">Profesyonel Yazılım Geliştirme</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          <strong>Bursa yazılım</strong> hizmetlerinde öncü firmamız, web sitesi, mobil uygulama ve e-ticaret çözümleri sunuyor.
          <span className="text-blue-600 font-medium"> Bursa'nın en iyi yazılım şirketi.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-200 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
          >
            <span>Ücretsiz Proje Analizi</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>

          <button
            onClick={() => setShowWhatsappModal(true)}
            className="w-full sm:w-auto group border-2 border-green-200 bg-white text-green-700 px-8 py-3.5 rounded-xl font-semibold hover:border-green-300 hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
          >
            <span>WhatsApp'tan Yaz</span>
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Advanced Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-16">
        {[
          { value: "20+", label: "Başarılı Proje", icon: <AwardIcon className="w-3 h-3" />, color: "from-blue-500 to-blue-600" },
          { value: "Bursa", label: "Yerel Merkez", icon: <MapPin className="w-3 h-3" />, color: "from-purple-500 to-purple-600" },
          { value: "%99.9", label: "Sistem Uptime", icon: <ShieldCheck className="w-3 h-3" />, color: "from-green-500 to-green-600" },
          { value: "7/24", label: "Teknik Destek", icon: <Clock className="w-3 h-3" />, color: "from-orange-500 to-orange-600" },
          { value: "30+", label: "Teknoloji", icon: <ZapIcon className="w-3 h-3" />, color: "from-indigo-500 to-indigo-600" },
        ].map((stat, index) => (
          <div key={index} className="text-center p-4 sm:p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg shadow-sm group animate-on-scroll">
            <div className={`text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent flex items-center justify-center gap-2`}>
              {stat.value}
              {stat.icon}
            </div>
            <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Bursa Özel Section */}
      <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200/50 shadow-lg mb-16 animate-on-scroll" suppressHydrationWarning>
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
            <Building className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-xl text-gray-900 mb-3">Bursa Yazılım Hizmetleri</h2>
            <p className="text-gray-600 mb-4">
              <strong>Bursa yazılım</strong> sektöründe uzman ekibimiz, işletmeler için özel geliştirilmiş yazılım hizmetleri sunuyor.
              Yerel tecrübemizle şehrinizin ihtiyaçlarını anlıyor, dijital dönüşümünüzde yanınızdayız.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Bursa'daki işletmelere özel çözümler",
                "Yerinde destek ve danışmanlık",
                "Bölgeye özgü iş modellerine hakimiyet",
                "Yerel network ve referanslar"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link 
                href="/bursa-yazilim"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                <Building className="w-5 h-5" />
                <span>Bursa Yazılım Hizmetleri Detayları</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
