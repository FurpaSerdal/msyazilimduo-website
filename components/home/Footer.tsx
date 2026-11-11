"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface FooterProps {
  scrollToSection?: (sectionId: string) => void;
  setShowWhatsappModal?: (show: boolean) => void;
}

const servicesLinks = [
  { label: "Bursa Yazılım", href: "/bursa-yazilim" },
  { label: "Bursa Yazılım Geliştirme", href: "/bursa-yazilim-gelistirme" },
  { label: "Bursa Yazılım Ekibi", href: "/bursa-yazilim-ekibi" },
  { label: "Bursa Yazılım Firması", href: "/bursa-yazilim-firmasi" },
  { label: "ERP Entegrasyon", href: "/entegrasyon" },
  { label: "Web Geliştirme", href: "/#services" },
  { label: "Mobil Uygulamalar", href: "/#services" },
  { label: "E-ticaret", href: "/#services" },
];

const companyLinks = [
  { label: "Hakkımızda", href: "/#about" },
  { label: "Çözümlerimiz", href: "/#services" },
  { label: "Teknolojiler", href: "/#technologies" },
  { label: "Süreç", href: "/#process" },
  { label: "Entegrasyon", href: "/entegrasyon" },
  { label: "İletişim", href: "/#contact" },
];

export default function Footer({ setShowWhatsappModal }: FooterProps) {
  const currentYear = useMemo(() => new Date().getUTCFullYear(), []);

  const handleWhatsappClick = () => {
    if (setShowWhatsappModal) {
      setShowWhatsappModal(true);
      return;
    }
    window.open(
      `https://wa.me/905355297508?text=${encodeURIComponent("Merhaba, MSYazılımDuo hakkında bilgi almak istiyorum.")}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white py-12 px-4 sm:px-6 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-icon.svg"
                alt="MSYazılımDuo logo"
                width={42}
                height={42}
                className="w-10 h-10 rounded-xl shadow-lg flex-shrink-0"
              />
              <div className="min-w-0">
                <h3 className="font-bold text-lg sm:text-xl">MSYazılımDuo</h3>
                <p className="text-cyan-300 text-xs sm:text-sm truncate">Bursa Yazılım Ekibi</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Bursa merkezli profesyonel yazılım geliştirme ekibi.
              İşletmenizin dijital dönüşümünde yanınızdayız.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base sm:text-lg">Hizmetler</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              {servicesLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition-colors flex items-center gap-2 group text-xs sm:text-sm">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-cyan-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Şirket</h4>
            <ul className="space-y-3 text-gray-300">
              {companyLinks.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-white transition-colors flex items-center gap-2 group text-xs sm:text-sm">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-cyan-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Bursa&apos;dan Ulaşın</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+905355297508" className="hover:text-white transition-colors text-sm">
                  +90 (535) 529 75 08
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:info@msduoyazilim.com" className="hover:text-white transition-colors text-sm">
                  info@msduoyazilim.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <button
                  onClick={handleWhatsappClick}
                  className="hover:text-white transition-colors text-left text-sm"
                >
                  WhatsApp&apos;tan Yaz
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} MSYazılımDuo - Bursa Yazılım Firması. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Bursa Yazılım | Bursa Web Tasarım | Bursa Yazılım Geliştirme | Bursa Mobil Uygulama
          </p>
        </div>
      </div>
    </footer>
  );
}
