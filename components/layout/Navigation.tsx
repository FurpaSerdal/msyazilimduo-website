"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';

interface NavigationProps {
  activeSection?: string;
  scrollToSection?: (sectionId: string) => void;
  contactTargetId?: string;
}

const navItems = [
  { id: 'home', label: 'Ana Sayfa', type: 'scroll' as const, href: '/' },
  { id: 'about', label: 'Hakkımızda', type: 'scroll' as const, href: '/#about' },
  { id: 'services', label: 'Çözümlerimiz', type: 'scroll' as const, href: '/#services' },
  { id: 'technologies', label: 'Teknolojiler', type: 'scroll' as const, href: '/#technologies' },
  { id: 'process', label: 'Süreç', type: 'scroll' as const, href: '/#process' },
  { id: 'entegrasyon', label: 'Entegrasyon', type: 'link' as const, href: '/entegrasyon' },
];

export default function Navigation({
  activeSection = 'home',
  scrollToSection,
  contactTargetId = 'contact',
}: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 40;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      setMobileMenuOpen((prev) => (prev ? false : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string, delay = 0) => {
    setMobileMenuOpen(false);
    const targetId = sectionId === 'contact' ? contactTargetId : sectionId;
    const element = typeof document !== 'undefined' ? document.getElementById(targetId) : null;

    if (element && (isHomePage || sectionId === 'contact')) {
      const runScroll = () => {
        if (scrollToSection && isHomePage) {
          scrollToSection(targetId);
          return;
        }
        const navBar = document.querySelector('nav');
        const navHeight = navBar ? navBar.offsetHeight : 80;
        const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 10;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      };

      if (delay > 0) {
        setTimeout(runScroll, delay);
      } else {
        runScroll();
      }
      return;
    }

    router.push(sectionId === 'home' ? '/' : `/#${sectionId}`);
  };

  const isItemActive = (item: (typeof navItems)[number]) => {
    if (item.type === 'link') {
      return pathname === item.href;
    }
    return isHomePage && activeSection === item.id;
  };

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              navigateToSection('home');
            } else {
              setMobileMenuOpen(false);
            }
          }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <Image
            src="/logo-icon.svg"
            alt="msduoyazilim logo"
            width={42}
            height={42}
            className="w-10 h-10 rounded-xl shadow-md group-hover:shadow-blue-500/30 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
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
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isItemActive(item);
            const classes = `px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              active
                ? 'bg-blue-50 text-blue-600 font-semibold'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`;

            if (item.type === 'scroll') {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateToSection(item.id)}
                  className={classes}
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link key={item.id} href={item.href} className={classes}>
                {item.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => navigateToSection('contact')}
            className="ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 group"
          >
            <span>Ücretsiz Danışmanlık</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menü"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-3 py-4 space-y-1.5 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navItems.map((item) => {
                const active = isItemActive(item);
                const mobileClasses = `flex items-center justify-between w-full py-3 px-3 font-medium rounded-lg transition-colors min-h-[44px] ${
                  active
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`;

                if (item.type === 'scroll') {
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => navigateToSection(item.id, 250)}
                      className={mobileClasses}
                    >
                      <span className="text-base">{item.label}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={mobileClasses}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-base">{item.label}</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={() => navigateToSection('contact', 250)}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 px-4 rounded-xl font-semibold hover:shadow-md transition-all duration-300 mt-3 flex items-center justify-center gap-2 min-h-[48px] text-base"
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
