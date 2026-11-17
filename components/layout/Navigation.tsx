"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronRight, ArrowRight, Terminal } from 'lucide-react';

interface NavigationProps {
  activeSection?: string;
  scrollToSection?: (sectionId: string) => void;
  contactTargetId?: string;
}

const navItems = [
  { id: 'home', label: 'Ana Sayfa', type: 'scroll' as const, href: '/' },
  { id: 'about', label: 'Hakkımızda', type: 'scroll' as const, href: '/#about' },
  { id: 'services', label: 'Çözümlerimiz', type: 'scroll' as const, href: '/#services' },
  { id: 'technologies', label: 'Teknoloji Yığını', type: 'scroll' as const, href: '/#technologies' },
  { id: 'process', label: 'DevOps & Süreç', type: 'scroll' as const, href: '/#process' },
  { id: 'entegrasyon', label: 'ERP & API', type: 'link' as const, href: '/entegrasyon', badge: 'API' },
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
      const nextScrolled = window.scrollY > 30;
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
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/90 shadow-xl shadow-slate-950/20'
          : 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/60'
      }`}
    >
      {/* Top Laser Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Developer Brand Logo */}
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
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl blur opacity-40 group-hover:opacity-80 transition duration-300" />
            <Image
              src="/logo-icon.svg?v=202611"
              alt="msduoyazilim logo"
              width={42}
              height={42}
              className="relative w-10 h-10 rounded-xl shadow-md group-hover:scale-105 transition-all duration-300"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <div className="flex items-center gap-1">
              <span className="font-mono text-cyan-400 font-bold text-sm">&lt;</span>
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                msduoyazilim
              </span>
              <span className="font-mono text-cyan-400 font-bold text-sm">/&gt;</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] text-slate-400 font-medium tracking-wide">
                Bursa Software Studio
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isItemActive(item);
            const classes = `px-3.5 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-1.5 ${
              active
                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent'
            }`;

            if (item.type === 'scroll') {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateToSection(item.id)}
                  className={classes}
                >
                  <span>{item.label}</span>
                </button>
              );
            }

            return (
              <Link key={item.id} href={item.href} className={classes}>
                <span>{item.label}</span>
                {item.badge && (
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => navigateToSection('contact')}
            className="ml-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 flex items-center gap-2 group border border-cyan-400/30"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-100" />
            <span>Proje Başlat</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="lg:hidden text-slate-200 p-2 rounded-lg hover:bg-slate-800 border border-slate-800 transition-colors"
          aria-label="Menü"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-t border-slate-800 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-4 space-y-1.5 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navItems.map((item) => {
                const active = isItemActive(item);
                const mobileClasses = `flex items-center justify-between w-full py-3 px-3.5 font-medium rounded-xl transition-colors min-h-[44px] ${
                  active
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
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
                      <ChevronRight className="w-5 h-5 text-slate-500" />
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
                    <span className="text-base flex items-center gap-2">
                      {item.label}
                      {item.badge && (
                        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-500" />
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={() => navigateToSection('contact', 250)}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white py-3.5 px-4 rounded-xl font-semibold hover:shadow-md transition-all duration-300 mt-3 flex items-center justify-center gap-2 min-h-[48px] text-base"
              >
                <Terminal className="w-4 h-4" />
                <span>Ücretsiz Proje Analizi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
