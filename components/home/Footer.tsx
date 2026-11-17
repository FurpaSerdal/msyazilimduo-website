"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageCircle, ArrowRight, Terminal } from 'lucide-react';

interface FooterProps {
  scrollToSection?: (sectionId: string) => void;
  setShowWhatsappModal?: (show: boolean) => void;
}

const servicesLinks = [
  { label: "Bursa Yazılım", href: "/bursa-yazilim" },
  { label: "Bursa Yazılım Geliştirme", href: "/bursa-yazilim-gelistirme" },
  { label: "Bursa Yazılım Ekibi", href: "/bursa-yazilim-ekibi" },
  { label: "Bursa Yazılım Firması", href: "/bursa-yazilim-firmasi" },
  { label: "ERP Entegrasyon (SAP/Logo)", href: "/entegrasyon" },
  { label: "Web Tasarım & Next.js", href: "/#services" },
  { label: "Mobil Uygulama (iOS/Android)", href: "/#services" },
  { label: "E-ticaret Platformları", href: "/#services" },
];

const companyLinks = [
  { label: "Hakkımızda", href: "/#about" },
  { label: "Çözümlerimiz", href: "/#services" },
  { label: "Teknoloji Yığını", href: "/#technologies" },
  { label: "DevOps Süreci", href: "/#process" },
  { label: "ERP Entegrasyonları", href: "/entegrasyon" },
  { label: "Teknik İletişim", href: "/#contact" },
];

export default function Footer({ setShowWhatsappModal }: FooterProps) {
  const currentYear = useMemo(() => new Date().getUTCFullYear(), []);

  const handleWhatsappClick = () => {
    if (setShowWhatsappModal) {
      setShowWhatsappModal(true);
      return;
    }
    window.open(
      `https://wa.me/905355297508?text=${encodeURIComponent("Merhaba, msduoyazilim hakkında bilgi almak istiyorum.")}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="bg-[#050811] text-white py-14 px-4 sm:px-6 relative z-10 border-t border-slate-800">
      {/* Top Gradient Laser Accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl blur opacity-40" />
                <Image
                  src="/logo-icon.svg?v=202611"
                  alt="msduoyazilim logo"
                  width={42}
                  height={42}
                  className="relative w-10 h-10 rounded-xl shadow-lg flex-shrink-0"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-mono text-cyan-400 font-bold text-sm">&lt;</span>
                  <span className="font-extrabold text-lg text-white">msduoyazilim</span>
                  <span className="font-mono text-cyan-400 font-bold text-sm">/&gt;</span>
                </div>
                <p className="font-mono text-cyan-300 text-xs truncate">Bursa Software Engineering Studio</p>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              Bursa merkezli profesyonel yazılım mühendisliği ekibi.
              Web platformları, mobil uygulamalar ve ERP entegrasyonlarında uçtan uca modern mimari çözümleri.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEMS_OPERATIONAL: 99.9%</span>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-bold mb-4 text-base sm:text-lg text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Yazılım Hizmetleri</span>
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-slate-400">
              {servicesLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-cyan-300 transition-colors flex items-center gap-2 group text-xs sm:text-sm">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-cyan-400" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Şirket */}
          <div>
            <h4 className="font-bold mb-4 text-base sm:text-lg text-white flex items-center gap-2">
              <span className="text-cyan-400 font-mono">&gt;</span>
              <span>Hızlı Bağlantılar</span>
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              {companyLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-cyan-300 transition-colors flex items-center gap-2 group text-xs sm:text-sm">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-cyan-400" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bursa İletişim */}
          <div>
            <h4 className="font-bold mb-4 text-base sm:text-lg text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Bursa Merkez İletişim</span>
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="tel:+905355297508" className="hover:text-white transition-colors text-sm font-mono">
                  +90 (535) 529 75 08
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href="mailto:info@msduoyazilim.com" className="hover:text-white transition-colors text-sm font-mono">
                  info@msduoyazilim.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <button
                  onClick={handleWhatsappClick}
                  className="hover:text-white transition-colors text-left text-sm"
                >
                  WhatsApp Mühendislik Hattı
                </button>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-400">
              <span className="text-cyan-400">Bursa, TR</span> · 40.1885° N, 29.0610° E
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-slate-400 text-xs sm:text-sm">
            © {currentYear} <span className="font-mono text-cyan-400">msduoyazilim</span> · Bursa Yazılım Firması. Tüm hakları saklıdır.
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            TypeScript · Next.js · React Native · ERP Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
