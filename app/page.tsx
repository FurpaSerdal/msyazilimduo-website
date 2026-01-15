"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Mail, Phone, MapPin, CheckCircle, Users, Clock, Shield, 
  Sparkles, ArrowRight, Star, Globe, Zap, Cloud, Database, 
  Smartphone, Server, Lock, BarChart, Settings, Award, Target, 
  PieChart, MailCheck, PhoneCall, MessageCircle, Send, X, AlertCircle,
  ChevronRight, Building, TrendingUp, Rocket
} from 'lucide-react';

// Mobile menu için yeni icon
import { Menu } from 'lucide-react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll için mobile menüyü kapatma
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

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
          location: "Bursa", // Bursa için özel alan
          source: "msyazilimduo.com"
        }),
      });

      if (!res.ok) {
        throw new Error("Email gönderilemedi");
      }

      // Başarılı toast notification
      setNotification({
        type: 'success',
        message: "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."
      });
      
      // Formu resetle
      form.reset();
      
      // 5 saniye sonra toast'ı kaldır
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      // Hata toast notification
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

  // Add JSON-LD to head on client side to avoid hydration mismatch
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "MSYazılımDuo",
      "description": "Bursa'da yazılım geliştirme hizmetleri",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bursa",
        "addressRegion": "TR-16",
        "addressCountry": "TR"
      },
      "areaServed": "TR",
      "telephone": "+90-535-529-7508",
      "url": "https://msyazilimduo.com"
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Bursa için özel içerik
  const bursaContent = {
    title: "Bursa'nın Önde Gelen Yazılım Geliştirme Ekibi",
    description: "Bursa'da faaliyet gösteren işletmeler için özel yazılım çözümleri. Yerel tecrübemizle şehrinizin ihtiyaçlarını anlıyor, dijital dönüşümünüzde yanınızdayız.",
    features: [
      "Bursa'daki işletmelere özel çözümler",
      "Yerinde destek ve danışmanlık",
      "Bölgeye özgü iş modellerine hakimiyet",
      "Yerel network ve referanslar"
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden" suppressHydrationWarning>
        {/* Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 right-4 left-4 md:left-auto md:right-8 md:w-auto z-[100]"
            >
              <div className={`flex items-start gap-4 px-6 py-4 rounded-xl shadow-2xl border ${
                notification.type === 'success'
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
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

        {/* Enhanced Background Pattern */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating WhatsApp Button - Mobile Optimized */}
        <div className="fixed bottom-4 right-4 z-50">
          <div className="flex flex-col items-end gap-3">
            {/* WhatsApp Modal Toggle */}
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
            <button
              onClick={() => setShowWhatsappModal(!showWhatsappModal)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-full shadow-xl hover:shadow-2xl hover:shadow-green-200 hover:scale-105 transition-all duration-300 flex items-center justify-center"
              aria-label="WhatsApp ile iletişim"
            >
              <MessageCircle className="w-5 h-5" />
            </button>

            {/* Quick Contact Button */}
            <a
              href="tel:+905355297508"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-xl hover:shadow-2xl hover:shadow-blue-200 hover:scale-105 transition-all duration-300 flex items-center justify-center"
              aria-label="Telefon ile ara"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation - Mobile Optimized */}
        <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-sm">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900">MSYazılımDuo</span>
                <span className="text-[10px] text-gray-500 font-medium">Bursa Yazılım Ekibi</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
                Hakkımızda
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
                Çözümlerimiz
              </a>
              <a href="#technologies" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
                Teknolojiler
              </a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors">
                Süreç
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300 whitespace-nowrap"
              >
                Ücretsiz Danışmanlık
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Menü"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
              >
                <div className="px-4 py-3 space-y-2">
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
                  >
                    <span>Hakkımızda</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
                  >
                    <span>Çözümlerimiz</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#technologies"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
                  >
                    <span>Teknolojiler</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100"
                  >
                    <span>Süreç</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium text-center hover:shadow-md transition-all duration-300 mt-2"
                  >
                    Ücretsiz Danışmanlık
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* HERO SECTION - Mobile Optimized */}
        <section className="pt-16 pb-12 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            {/* Bursa Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-1.5 rounded-full mb-6 border border-blue-100">
              <Building className="w-3 h-3" />
              <span className="text-xs font-semibold">Bursa'nın Yazılım Ekibi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Bursa'da
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Yazılım Çözümleri
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Bursa'da faaliyet gösteren işletmeler için özel yazılım geliştirme çözümleri. 
              Modern teknolojilerle dijital dönüşümünüzü gerçekleştiriyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="#contact"
                className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Ücretsiz Proje Analizi</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={() => setShowWhatsappModal(true)}
                className="w-full sm:w-auto group border border-green-200 bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:border-green-300 hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>WhatsApp'tan Yaz</span>
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* Advanced Stats - Mobile Optimized */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-16">
            {[
              { value: "20+", label: "Proje", color: "from-blue-500 to-blue-600" },
              { value: "Bursa", label: "Merkez", color: "from-purple-500 to-purple-600" },
              { value: "%99.9", label: "Uptime", color: "from-green-500 to-green-600" },
              { value: "24/7", label: "Destek", color: "from-orange-500 to-orange-600" },
              { value: "30+", label: "Teknoloji", color: "from-indigo-500 to-indigo-600" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-3 sm:p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-md shadow-sm group">
                <div className={`text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bursa Özel Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Bursa'da Yazılım Çözümleri</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Bursa'daki işletmeler için özel geliştirilmiş yazılım hizmetleri. 
                  Yerel tecrübemizle şehrinizin ihtiyaçlarını anlıyoruz.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {bursaContent.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT - Mobile Optimized */}
        <section id="about" className="py-12 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Neden Bizi Tercih Etmelisiniz?</h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Bursa merkezli uzman ekibimiz, yerel işletmelere özel çözümler sunuyor.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: <Target className="w-5 h-5 text-blue-600" />,
                  title: "Bursa Odaklı",
                  description: "Bursa'daki işletmelerin ihtiyaçlarını anlayan, yerel tecrübeye sahip ekip.",
                  gradient: "from-blue-50 to-blue-100"
                },
                {
                  icon: <Award className="w-5 h-5 text-indigo-600" />,
                  title: "Kalite Garantisi",
                  description: "En iyi yazılım pratikleriyle test edilmiş, yüksek kaliteli kod.",
                  gradient: "from-indigo-50 to-indigo-100"
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-cyan-600" />,
                  title: "İş Büyütme",
                  description: "Yazılım çözümlerimizle işinizi büyütün ve verimliliğinizi artırın.",
                  gradient: "from-cyan-50 to-cyan-100"
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES - Mobile Optimized */}
        <section id="services" className="py-12 px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Bursa için Çözümlerimiz</h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Bursa'daki işletmelere özel geliştirdiğimiz yazılım çözümleri
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: <Globe className="w-5 h-5 text-blue-600" />,
                  title: "Kurumsal Web",
                  description: "Bursa işletmeleri için profesyonel web siteleri ve e-ticaret çözümleri.",
                  features: ["Responsive Tasarım", "SEO Optimizasyon", "Hızlı Yükleme"]
                },
                {
                  icon: <Smartphone className="w-5 h-5 text-purple-600" />,
                  title: "Mobil Uygulamalar",
                  description: "Bursa'daki müşterilerinize özel mobil uygulama geliştirme.",
                  features: ["iOS & Android", "Kullanıcı Dostu", "Yüksek Performans"]
                },
                {
                  icon: <Server className="w-5 h-5 text-green-600" />,
                  title: "Özel Yazılım",
                  description: "Bursa işletmelerine özel yazılım çözümleri ve otomasyon sistemleri.",
                  features: ["İş Otomasyonu", "Veritabanı", "API Entegrasyon"]
                },
                {
                  icon: <Rocket className="w-5 h-5 text-orange-600" />,
                  title: "Dijital Dönüşüm",
                  description: "Bursa'daki işletmelerin dijital dönüşüm süreçlerinde danışmanlık.",
                  features: ["Süreç Analizi", "Teknoloji Danışmanlığı", "Eğitim"]
                },
                {
                  icon: <Zap className="w-5 h-5 text-red-600" />,
                  title: "E-ticaret",
                  description: "Bursa üretici ve satıcıları için e-ticaret platformları.",
                  features: ["Ödeme Sistemleri", "Kargo Entegrasyon", "Mobil Uyum"]
                },
                {
                  icon: <Lock className="w-5 h-5 text-gray-600" />,
                  title: "Güvenlik",
                  description: "Bursa işletmeleri için güvenlik çözümleri ve koruma sistemleri.",
                  features: ["Güvenlik Testi", "SSL Sertifikaları", "Veri Koruma"]
                },
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-gray-700 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES - Mobile Optimized */}
        <section id="technologies" className="py-12 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Kullandığımız Teknolojiler</h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Modern teknolojilerle Bursa'daki işletmelere en iyi çözümleri sunuyoruz
              </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                "React/Next.js", "TypeScript", "Node.js", ".NET Core",
                "Vue.js", "Angular", "Python", "AWS/Azure",
                "Docker", "PostgreSQL", "MongoDB", "React Native",
                "Flutter", "WordPress", "Shopify", "Laravel"
              ].map((tech, i) => (
                <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 text-center hover:border-blue-200 transition-all duration-300">
                  <span className="text-gray-700 font-medium text-xs sm:text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS - Mobile Optimized */}
        <section id="process" className="py-12 px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Çalışma Sürecimiz</h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Bursa'daki müşterilerimizle şeffaf ve verimli çalışma süreci
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  step: "1", 
                  title: "Analiz", 
                  desc: "İhtiyaç analizi ve planlama",
                },
                { 
                  step: "2", 
                  title: "Tasarım", 
                  desc: "UI/UX tasarımı ve onay",
                },
                { 
                  step: "3", 
                  title: "Geliştirme", 
                  desc: "Kodlama ve test aşaması",
                },
                { 
                  step: "4", 
                  title: "Teslim", 
                  desc: "Deploy ve destek başlangıcı",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="relative mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold mx-auto z-10 relative">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT - Mobile Optimized */}
        <section id="contact" className="py-12 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Bursa'dan Bize Ulaşın</h2>
              <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                Bursa'daki işletmeniz için ücretsiz danışmanlık talebi oluşturun
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-900">İletişim Bilgilerimiz</h3>
                
                <div className="space-y-4 mb-6">
                  {[
                    {
                      icon: <MailCheck className="w-4 h-4 text-blue-600" />,
                      title: "Email",
                      info: "info@msyazilimduo.com",
                      action: "mailto:info@msyazilimduo.com"
                    },
                    {
                      icon: <PhoneCall className="w-4 h-4 text-green-600" />,
                      title: "Telefon",
                      info: "+90 (535) 529 75 08",
                      action: "tel:+905355297508"
                    },
                    {
                      icon: <MapPin className="w-4 h-4 text-purple-600" />,
                      title: "Konum",
                      info: "Bursa, Türkiye",
                      action: "https://maps.google.com/?q=Bursa"
                    },
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.action}
                      className="flex items-start gap-3 group p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{contact.title}</h4>
                        <p className="text-gray-600 text-sm">{contact.info}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Bursa Özel Bilgi */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-3 text-sm">Bursa'da Neden Biz?</h4>
                  <ul className="space-y-2">
                    {[
                      "Bursa merkezli yerel ekip",
                      "Yüz yüze görüşme imkanı",
                      "Bölge tecrübesi",
                      "Hızlı destek ve servis"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-600" />
                        <span className="text-gray-700 text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Projenizi Anlatın</h3>
                
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700">Ad Soyad *</label>
                      <input
                        name="name"
                        placeholder="İsminiz"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1 text-gray-700">Email *</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Şirket/Proje Adı</label>
                    <input
                      name="company"
                      placeholder="Şirket adınız (Bursa)"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700">Proje Detayları *</label>
                    <textarea
                      name="message"
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                      required
                      rows={4}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm"
                    />
                  </div>

                  <input type="hidden" name="location" value="Bursa" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <span>Ücretsiz Danışmanlık İste</span>
                        <ArrowRight className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Mobile Optimized */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Code2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">MSYazılımDuo</h3>
                    <p className="text-blue-200 text-xs">Bursa Yazılım Ekibi</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs">
                  Bursa merkezli profesyonel yazılım geliştirme ekibi.
                  <br />
                  <strong>msyazilimduo.com</strong>
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-sm">Hizmetler</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li><a href="#services" className="hover:text-white transition-colors">Web Geliştirme</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Mobil Uygulamalar</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">E-ticaret</a></li>
                  <li><a href="#services" className="hover:text-white transition-colors">Yazılım Danışmanlığı</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-sm">Şirket</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
                  <li><a href="#process" className="hover:text-white transition-colors">Süreç</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Referanslar</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-sm">Bursa'dan Ulaşın</h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    +90 (535) 529 75 08
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    info@msyazilimduo.com
                  </li>
                  <li>
                    <button 
                      onClick={() => setShowWhatsappModal(true)}
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3" />
                      WhatsApp'tan Yaz
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} MSYazılımDuo - Bursa. Tüm hakları saklıdır.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Bursa'nın Profesyonel Yazılım Geliştirme Ekibi
              </p>
            </div>
          </div>
        </footer>
      </main>
    );
}