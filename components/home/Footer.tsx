"use client";

import { useMemo } from 'react';
import { Code2, Mail, Phone, MessageCircle, ArrowRight, Sparkle } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
  setShowWhatsappModal: (show: boolean) => void;
}

export default function Footer({ scrollToSection, setShowWhatsappModal }: FooterProps) {
  const currentYear = useMemo(() => new Date().getUTCFullYear(), []);

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-lg sm:text-xl">MSYazılımDuo</h3>
                <p className="text-blue-300 text-xs sm:text-sm truncate">Bursa Yazılım Ekibi</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Bursa merkezli profesyonel yazılım geliştirme ekibi.
              İşletmenizin dijital dönüşümünde yanınızdayız.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-base sm:text-lg">Hizmetler</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300">
              {[
                { label: "Bursa Yazılım", href: "/bursa-yazilim" },
                { label: "Web Geliştirme", href: "/#services" },
                { label: "Mobil Uygulamalar", href: "/#services" },
                { label: "E-ticaret", href: "/#services" },
                { label: "Yazılım Danışmanlığı", href: "/#about" },
                { label: "SEO Optimizasyon", href: "/#technologies" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:text-white transition-colors flex items-center gap-2 group text-xs sm:text-sm">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Şirket</h4>
            <ul className="space-y-3 text-gray-300">
              {["Hakkımızda", "Süreç", "Referanslar", "Blog", "Kariyer", "Gizlilik Politikası"].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Bursa'dan Ulaşın</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+905355297508" className="hover:text-white transition-colors">
                  +90 (535) 529 75 08
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@msduoyazilim.com" className="hover:text-white transition-colors">
                  info@msduoyazilim.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <button
                  onClick={() => setShowWhatsappModal(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  WhatsApp'tan Yaz
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center">
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
