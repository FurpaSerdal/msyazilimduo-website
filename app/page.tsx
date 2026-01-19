"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  Code2, Mail, Phone, MapPin, CheckCircle, Users, Clock, Shield,
  Sparkles, ArrowRight, Star, Globe, Zap, Cloud, Database,
  Smartphone, Server, Lock, BarChart, Settings, Award, Target,
  PieChart, MailCheck, PhoneCall, MessageCircle, Send, X, AlertCircle,
  ChevronRight, Building, TrendingUp, Rocket, Menu, Sparkle,
  ExternalLink, Award as AwardIcon, Heart, ShieldCheck, Zap as ZapIcon
} from 'lucide-react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const currentYear = useMemo(() => new Date().getUTCFullYear(), []);

  // Scroll ve section takibi
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Mobile menüyü kapat
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }

      // Active section tracking
      const sections = ['home', 'about', 'services', 'technologies', 'process', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  async function submit(e: any) {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          company: form.company.value,
          message: form.message.value,
          location: "Bursa",
          source: "msyazilimduo.com"
        }),
      });

      if (!res.ok) throw new Error("Email gönderilemedi");

      setNotification({
        type: 'success',
        message: "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."
      });

      form.reset();
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      setNotification({
        type: 'error',
        message: "Bir hata oluştu, lütfen tekrar deneyin!"
      });
      setTimeout(() => setNotification(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  const sendWhatsAppMessage = () => {
    const message = whatsappMessage || 'Merhaba, MSYazılımDuo hakkında bilgi almak istiyorum.';
    const phoneNumber = '905355297508';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setShowWhatsappModal(false);
    setWhatsappMessage('');
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  // Add JSON-LD for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "MSYazılımDuo",
      "description": "Bursa'nın önde gelen yazılım geliştirme şirketi. Web ve mobil uygulama geliştirme, e-ticaret çözümleri.",
      "image": "https://msyazilimduo.com/logo.png",
      "@id": "https://msyazilimduo.com",
      "url": "https://msyazilimduo.com",
      "telephone": "+90-535-529-7508",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bursa",
        "addressRegion": "TR-16",
        "addressCountry": "TR",
        "streetAddress": "Bursa, Türkiye"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.1885,
        "longitude": 29.0610
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://facebook.com/msyazilimduo",
        "https://instagram.com/msyazilimduo",
        "https://linkedin.com/company/msyazilimduo"
      ]
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden" suppressHydrationWarning>
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 left-4 md:left-auto md:right-8 md:w-auto z-[100]"
          >
            <div className={`flex items-start gap-4 px-6 py-4 rounded-xl shadow-2xl border ${notification.type === 'success'
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
                : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200'
              }`}>
              <div className={notification.type === 'success' ? 'text-green-600' : 'text-red-600'}>
                {notification.type === 'success' ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <AlertCircle className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <p className={notification.type === 'success' ? 'text-green-900 font-medium' : 'text-red-900 font-medium'}>
                  {notification.message}
                </p>
              </div>
              <button
                onClick={() => setNotification(null)}
                className={notification.type === 'success' ? 'text-green-600 hover:text-green-800' : 'text-red-600 hover:text-red-800'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Background Patterns */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 via-purple-100/10 to-pink-100/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/20 via-blue-100/10 to-indigo-100/10 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f01c_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f01c_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-400/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-float animation-delay-2000"></div>
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="flex flex-col items-end gap-3">
          <AnimatePresence>
            {showWhatsappModal && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="bg-white rounded-xl shadow-2xl p-4 w-64 border border-gray-200 mb-3"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">WhatsApp'tan Yaz</h3>
                    <p className="text-gray-600 text-xs">Hızlı yanıt için</p>
                  </div>
                </div>

                <textarea
                  value={whatsappMessage}
                  onChange={(e) => setWhatsappMessage(e.target.value)}
                  placeholder="Mesajınız..."
                  className="w-full border border-gray-300 rounded-lg p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm"
                  rows={2}
                />

                <button
                  onClick={sendWhatsAppMessage}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-3 h-3" />
                  Gönder
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowWhatsappModal(!showWhatsappModal)}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative group"
            aria-label="WhatsApp ile iletişim"
          >
            <MessageCircle className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </motion.button>

          {/* Phone Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+905355297508"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
            aria-label="Telefon ile ara"
          >
            <Phone className="w-5 h-5" />
          </motion.a>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled
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
              { id: 'entegrasyon', label: 'Entegrasyon', type: 'link', href: '/entegrasyon' }
            ].map((item) => {
              if (item.type === 'scroll') {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${activeSection === item.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              }

              // Entegrasyon için link
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
                        onClick={() => scrollToSection(item.id)}
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
                  onClick={() => scrollToSection('contact')}
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

      {/* Hero Section - Enhanced */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          {/* Bursa Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-1.5 rounded-full mb-6 border border-blue-100 shadow-sm"
          >
            <Building className="w-3 h-3" />
            <span className="text-xs font-semibold">Bursa'nın Yazılım Ekibi</span>
            <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Bursa'nın <span className="inline-block animate-float">Öncü</span>
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">Yazılım Geliştirme Ekibi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Bursa'da web sitesi, mobil uygulama ve e-ticaret çözümleri konusunda uzmanlaşmış yazılım şirketi.
            <span className="text-blue-600 font-medium"> Yerel tecrübe, global kalite.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
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
          </motion.div>
        </div>

        {/* Advanced Stats - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-16"
        >
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
        </motion.div>

        {/* Bursa Özel Section - Enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200/50 shadow-lg mb-16 animate-on-scroll"
        >
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
              <Building className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-xl text-gray-900 mb-3">Bursa'da Yazılım Çözümleri</h3>
              <p className="text-gray-600 mb-4">
                Bursa'daki işletmeler için özel geliştirilmiş yazılım hizmetleri.
                Yerel tecrübemizle şehrinizin ihtiyaçlarını anlıyor, dijital dönüşümünüzde yanınızdayız.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Bursa'daki işletmelere özel çözümler",
                  "Yerinde destek ve danışmanlık",
                  "Bölgeye özgü iş modellerine hakimiyet",
                  "Yerel network ve referanslar"
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT - Enhanced */}
      <section id="about" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bursa merkezli uzman ekibimiz, yerel işletmelere özel çözümler sunuyor.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6 text-white" />,
                title: "Bursa Odaklı",
                description: "Bursa'daki işletmelerin ihtiyaçlarını anlayan, yerel tecrübeye sahip ekip.",
                gradient: "from-blue-500 to-blue-600",
                features: ["Yerel Pazar Bilgisi", "Yüz Yüze İletişim", "Bölgesel İşbirliği"]
              },
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Kalite Garantisi",
                description: "En iyi yazılım pratikleriyle test edilmiş, yüksek kaliteli kod.",
                gradient: "from-indigo-500 to-indigo-600",
                features: ["Kod Kalitesi", "Test Süreçleri", "Performans Optimizasyonu"]
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: "İş Büyütme",
                description: "Yazılım çözümlerimizle işinizi büyütün ve verimliliğinizi artırın.",
                gradient: "from-cyan-500 to-cyan-600",
                features: ["Verimlilik Artışı", "Maliyet Optimizasyonu", "Pazar Genişletme"]
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl shadow-lg group animate-on-scroll"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - Enhanced */}
      <section id="services" className="py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa için Çözümlerimiz</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bursa'daki işletmelere özel geliştirdiğimiz yazılım çözümleri
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-6 h-6 text-white" />,
                title: "Kurumsal Web",
                description: "Bursa işletmeleri için profesyonel web siteleri ve e-ticaret çözümleri.",
                gradient: "from-blue-500 to-blue-600",
                features: ["Responsive Tasarım", "SEO Optimizasyon", "Hızlı Yükleme", "Güvenlik"]
              },
              {
                icon: <Smartphone className="w-6 h-6 text-white" />,
                title: "Mobil Uygulamalar",
                description: "Bursa'daki müşterilerinize özel mobil uygulama geliştirme.",
                gradient: "from-purple-500 to-purple-600",
                features: ["iOS & Android", "Kullanıcı Dostu", "Yüksek Performans", "Güncelleme"]
              },
              {
                icon: <Server className="w-6 h-6 text-white" />,
                title: "Özel Yazılım",
                description: "Bursa işletmelerine özel yazılım çözümleri ve otomasyon sistemleri.",
                gradient: "from-green-500 to-green-600",
                features: ["İş Otomasyonu", "Veritabanı", "API Entegrasyon", "Raporlama"]
              },
              {
                icon: <Rocket className="w-6 h-6 text-white" />,
                title: "Dijital Dönüşüm",
                description: "Bursa'daki işletmelerin dijital dönüşüm süreçlerinde danışmanlık.",
                gradient: "from-orange-500 to-orange-600",
                features: ["Süreç Analizi", "Teknoloji Danışmanlığı", "Eğitim", "Destek"]
              },
              {
                icon: <Zap className="w-6 h-6 text-white" />,
                title: "E-ticaret",
                description: "Bursa üretici ve satıcıları için e-ticaret platformları.",
                gradient: "from-red-500 to-red-600",
                features: ["Ödeme Sistemleri", "Kargo Entegrasyon", "Mobil Uyum", "Analiz"]
              },
              {
                icon: <Lock className="w-6 h-6 text-white" />,
                title: "Güvenlik",
                description: "Bursa işletmeleri için güvenlik çözümleri ve koruma sistemleri.",
                gradient: "from-gray-600 to-gray-700",
                features: ["Güvenlik Testi", "SSL Sertifikaları", "Veri Koruma", "Yedekleme"]
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl shadow-lg group animate-on-scroll"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 group"
                >
                  <span>Teklif Al</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES - Enhanced */}
      <section id="technologies" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Kullandığımız Teknolojiler</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Modern teknolojilerle Bursa'daki işletmelere en iyi çözümleri sunuyoruz
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {[
              { name: "React/Next.js", color: "bg-blue-100 text-blue-800" },
              { name: "TypeScript", color: "bg-indigo-100 text-indigo-800" },
              { name: "Node.js", color: "bg-green-100 text-green-800" },
              { name: ".NET Core", color: "bg-purple-100 text-purple-800" },
              { name: "Vue.js", color: "bg-emerald-100 text-emerald-800" },
              { name: "Angular", color: "bg-red-100 text-red-800" },
              { name: "Python", color: "bg-yellow-100 text-yellow-800" },
              { name: "AWS/Azure", color: "bg-orange-100 text-orange-800" },
              { name: "Docker", color: "bg-cyan-100 text-cyan-800" },
              { name: "PostgreSQL", color: "bg-blue-100 text-blue-800" },
              { name: "MongoDB", color: "bg-green-100 text-green-800" },
              { name: "React Native", color: "bg-indigo-100 text-indigo-800" },
              { name: "Flutter", color: "bg-sky-100 text-sky-800" },
              { name: "WordPress", color: "bg-gray-100 text-gray-800" },
              { name: "Shopify", color: "bg-emerald-100 text-emerald-800" },
              { name: "Laravel", color: "bg-red-100 text-red-800" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`${tech.color} rounded-lg p-3 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <span className="font-medium text-xs sm:text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS - Enhanced */}
      <section id="process" className="py-16 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Çalışma Sürecimiz</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bursa'daki müşterilerimizle şeffaf ve verimli çalışma süreci
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Analiz & Planlama",
                desc: "İhtiyaç analizi ve proje planlaması",
                icon: <Target className="w-5 h-5" />
              },
              {
                step: "2",
                title: "Tasarım & Geliştirme",
                desc: "UI/UX tasarımı ve kodlama süreci",
                icon: <Code2 className="w-5 h-5" />
              },
              {
                step: "3",
                title: "Test & İyileştirme",
                desc: "Kapsamlı testler ve iyileştirmeler",
                icon: <CheckCircle className="w-5 h-5" />
              },
              {
                step: "4",
                title: "Teslim & Destek",
                desc: "Proje teslimi ve sürekli destek",
                icon: <ShieldCheck className="w-5 h-5" />
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto relative z-10 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT - Enhanced */}
      <section id="contact" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa'dan Bize Ulaşın</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bursa'daki işletmeniz için ücretsiz danışmanlık talebi oluşturun
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info - Enhanced */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">İletişim Bilgilerimiz</h3>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: <MailCheck className="w-5 h-5 text-blue-600" />,
                    title: "Email Adresimiz",
                    info: "info@msyazilimduo.com",
                    action: "mailto:info@msyazilimduo.com",
                    color: "from-blue-50 to-blue-100"
                  },
                  {
                    icon: <PhoneCall className="w-5 h-5 text-green-600" />,
                    title: "Telefon Numaramız",
                    info: "+90 (535) 529 75 08",
                    action: "tel:+905355297508",
                    color: "from-green-50 to-green-100"
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-purple-600" />,
                    title: "Konumumuz",
                    info: "Bursa, Türkiye",
                    action: "https://maps.google.com/?q=Bursa",
                    color: "from-purple-50 to-purple-100"
                  },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.action}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-4 group p-4 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-r ${contact.color} border border-transparent hover:border-blue-200 animate-on-scroll`}
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{contact.title}</h4>
                      <p className="text-gray-600 mt-1">{contact.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Bursa Özel Bilgi - Enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-lg"
              >
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Bursa'da Neden Biz?</h4>
                <ul className="space-y-3">
                  {[
                    "Bursa merkezli yerel ekip ve yüz yüze görüşme imkanı",
                    "Bölge tecrübesi ile işletmenize özel çözümler",
                    "Hızlı destek ve acil servis hizmeti",
                    "Bursa'daki referanslarımız ile güven"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Form - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Projenizi Anlatın</h3>
                  <p className="text-gray-600 text-sm">24 saat içinde dönüş yapıyoruz</p>
                </div>
              </div>

              <form onSubmit={submit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Ad Soyad *</label>
                    <input
                      name="name"
                      placeholder="İsminiz"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Şirket/Proje Adı</label>
                  <input
                    name="company"
                    placeholder="Şirket adınız (Bursa)"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Proje Detayları *</label>
                  <textarea
                    name="message"
                    placeholder="Projeniz hakkında detaylı bilgi verin..."
                    required
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 resize-none"
                  />
                </div>

                <input type="hidden" name="location" value="Bursa" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <span>Ücretsiz Danışmanlık İste</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">MSYazılımDuo</h3>
                  <p className="text-blue-300 text-sm">Bursa Yazılım Ekibi</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Bursa merkezli profesyonel yazılım geliştirme ekibi.
                İşletmenizin dijital dönüşümünde yanınızdayız.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Hizmetler</h4>
              <ul className="space-y-3 text-gray-300">
                {["Web Geliştirme", "Mobil Uygulamalar", "E-ticaret", "Yazılım Danışmanlığı", "SEO Optimizasyon", "Bakım & Destek"].map((item, i) => (
                  <li key={i}>
                    <a href="#services" className="hover:text-white transition-colors flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
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
                  <a href="mailto:info@msyazilimduo.com" className="hover:text-white transition-colors">
                    info@msyazilimduo.com
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
              © {currentYear} MSYazılımDuo - Bursa. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Bursa'nın Profesyonel Yazılım Geliştirme Ekibi
            </p>
          </div>
        </div>
      </footer>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}