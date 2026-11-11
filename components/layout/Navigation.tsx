"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, ChevronRight, ArrowRight } from 'lucide-react';

interface NavigationProps {
  activeSection?: string;
  scrollToSection?: (sectionId: string) => void;
}

export default function Navigation({ activeSection = 'home', scrollToSection }: NavigationProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      setMobileMenuOpen((prev) => (prev ? false : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string, delay = 0) => {
    setMobileMenuOpen(false);
    const hasElement = typeof document !== 'undefined' && Boolean(document.getElementById(sectionId));

    if (hasElement && scrollToSection) {
      if (delay > 0) {
        setTimeout(() => scrollToSection(sectionId), delay);
      } else {
        scrollToSection(sectionId);
      }
      return;
    }

    router.push(sectionId === 'home' ? '/' : `/#${sectionId}`);
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
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => navigateToSection('home')}
        >
          <Image
            src="/logo-icon.svg"
            alt="msduoyazilim logo"
            width={44}
            height={44}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl shadow-md group-hover:shadow-blue-500/30 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-lg tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              msduoyazilim
            </span>
            <span className="text-[10px] text-gray-500 font-semibold mt-0.5">
              Bursa Yazılım
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
                  onClick={() => navigateToSection(item.id)}
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
            onClick={() => navigateToSection('contact')}
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
            <div className="px-3 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
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
                      onClick={() => navigateToSection(item.id, 300)}
                      className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors active:bg-blue-100 min-h-[44px]"
                    >
                      <span className="text-base">{item.label}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href ?? '#'}
                    className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors active:bg-blue-100 min-h-[44px]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base">{item.label}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                );
              })}
              <button
                onClick={() => navigateToSection('contact', 300)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 px-4 rounded-lg font-semibold hover:shadow-md active:shadow-lg transition-all duration-300 mt-3 flex items-center justify-center gap-2 min-h-[48px] text-base"
              >
                <span>Ücretsiz Danışmanlık</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
