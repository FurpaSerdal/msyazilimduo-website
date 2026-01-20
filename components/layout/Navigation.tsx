"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Code2, Menu, ChevronRight, ArrowRight, Sparkle } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Mobil menü için özel scroll fonksiyonu
  const handleMobileScroll = (sectionId: string) => {
    setMobileMenuOpen(false);
    
    // Menü kapanma animasyonunun tamamlanmasını bekle ve scroll yap
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 350);
  };

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('home')}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              MSYazılımDuo
            </span>
            <span className="text-[10px] text-gray-500 font-medium flex items-center gap-1">
              <Sparkle className="w-2 h-2" />
              Bursa Yazılım Ekibi
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { id: 'about', label: 'Hakkımızda', type: 'scroll' },
            { id: 'services', label: 'Çözümlerimiz', type: 'scroll' },
            { id: 'technologies', label: 'Teknolojiler', type: 'scroll' },
            { id: 'process', label: 'Süreç', type: 'scroll' },
            { id: 'integration', label: 'Entegrasyon', type: 'link', href: '/entegrasyon' },
          ].map((item) => {
            if (item.type === 'scroll') {
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.id}
                href={item.href ?? '#'}
                className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-2 group"
          >
            <span>Ücretsiz Danışmanlık</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menü"
        >
          <Menu className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-3 space-y-1">
              {[
                { id: 'about', label: 'Hakkımızda', type: 'scroll' },
                { id: 'services', label: 'Çözümlerimiz', type: 'scroll' },
                { id: 'technologies', label: 'Teknolojiler', type: 'scroll' },
                { id: 'process', label: 'Süreç', type: 'scroll' },
                { id: 'entegrasyon', label: 'Entegrasyon', type: 'link', href: '/entegrasyon' }
              ].map((item) => {
                if (item.type === 'scroll') {
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleMobileScroll(item.id)}
                      className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href ?? '#'}
                    className="flex items-center justify-between w-full py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                );
              })}
              <button
                onClick={() => handleMobileScroll('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:shadow-md transition-all duration-300 mt-2 flex items-center justify-center gap-2"
              >
                <span>Ücretsiz Danışmanlık</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
