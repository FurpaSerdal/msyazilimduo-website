"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Mail, Phone, MapPin, CheckCircle, ArrowRight,
  Zap, Database, RefreshCw, GitBranch, Globe, Server,
  Smartphone, Truck, CreditCard, BarChart, Settings,
  Target, Building, ShieldCheck, Clock, TrendingUp,
  Users, Award, MessageCircle, Send, X, ChevronRight
} from 'lucide-react';
import Link from 'next/link';

export default function EntegrasyonPage() {
  const currentYear = useMemo(() => new Date().getUTCFullYear(), []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll takibi
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // SEO için JSON-LD
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "ERP Entegrasyon Çözümleri | MSYazılımDuo Bursa",
      "description": "Bursa'da ERP entegrasyon, API geliştirme ve sistem entegrasyon hizmetleri. SAP, Logo, Mikro entegrasyonu.",
      "url": "https://msyazilimduo.com/entegrasyon",
      "mainEntity": {
        "@type": "Service",
        "name": "ERP Entegrasyon",
        "description": "Profesyonel ERP entegrasyon çözümleri ve API geliştirme hizmetleri",
        "provider": {
          "@type": "Organization",
          "name": "MSYazılımDuo",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bursa",
            "addressCountry": "TR"
          }
        },
        "areaServed": "Bursa",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Entegrasyon Hizmetleri",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ERP Entegrasyon"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "API Geliştirme"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Veri Senkronizasyon"
              }
            }
          ]
        }
      }
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const sendWhatsAppMessage = () => {
    const message = whatsappMessage || 'Merhaba, ERP entegrasyon hizmetleriniz hakkında bilgi almak istiyorum.';
    const phoneNumber = '905355297508';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setShowWhatsappModal(false);
    setWhatsappMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form verilerini al
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          erpSystem: formData.get('erpSystem'),
          message: formData.get('message'),
          source: 'entegrasyon',
          location: 'Bursa'
        }),
      });

      if (!response.ok) throw new Error('Gönderim başarısız');

      setNotification({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.'
      });
      
      form.reset();
    } catch (error) {
      setNotification({
        type: 'error',
        message: 'Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden iletişime geçin.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white" suppressHydrationWarning>
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 left-4 md:left-auto md:right-8 md:w-auto z-[100]"
          >
            <div className={`flex items-start gap-4 px-6 py-4 rounded-xl shadow-2xl border ${
              notification.type === 'success'
                ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
                : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200'
            }`}>
              <div className={notification.type === 'success' ? 'text-green-600' : 'text-red-600'}>
                {notification.type === 'success' ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <X className="w-6 h-6" />
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

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {showWhatsappModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowWhatsappModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">ERP Entegrasyon Danışmanlığı</h3>
                  <p className="text-gray-600 text-sm">WhatsApp üzerinden hemen iletişime geçin</p>
                </div>
              </div>
              
              <textarea
                value={whatsappMessage}
                onChange={(e) => setWhatsappMessage(e.target.value)}
                placeholder="Entegrasyon ihtiyacınızı kısaca anlatın..."
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                rows={3}
              />
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowWhatsappModal(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  İptal
                </button>
                <button
                  onClick={sendWhatsAppMessage}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Gönder
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-sm">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900">MSYazılımDuo</span>
              <span className="text-[10px] text-gray-500 font-medium">Bursa Yazılım Ekibi</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            <Link href="/#about" className="px-4 py-2 rounded-lg font-medium text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/entegrasyon" className="px-4 py-2 rounded-lg font-medium text-sm bg-blue-50 text-blue-600">
              Entegrasyon
            </Link>
            <a 
              href="#iletisim" 
              className="ml-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300"
            >
              Teklif Al
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
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
                <Link 
                  href="/" 
                  className="block py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
                <Link 
                  href="/entegrasyon" 
                  className="block py-3 px-2 text-blue-600 bg-blue-50 font-medium rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Entegrasyon
                </Link>
                <a 
                  href="#iletisim"
                  className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium text-center hover:shadow-md transition-all duration-300 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Teklif Al
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-1.5 rounded-full mb-6 border border-blue-100">
            <Zap className="w-3 h-3" />
            <span className="text-xs font-semibold">Bursa ERP Entegrasyon</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              ERP Entegrasyon
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl">Profesyonel Çözümler</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Bursa'da işletmenizin SAP, Logo, Mikro gibi ERP sistemlerini diğer yazılımlarla entegre ediyor, 
            verimliliğinizi maksimuma çıkarıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#iletisim"
              className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
            >
              <span>Ücretsiz Entegrasyon Analizi</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <button
              onClick={() => setShowWhatsappModal(true)}
              className="w-full sm:w-auto group border-2 border-green-200 bg-white text-green-700 px-8 py-3.5 rounded-xl font-semibold hover:border-green-300 hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base"
            >
              <span>WhatsApp'tan Yaz</span>
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { value: "100+", label: "Entegrasyon Projesi", icon: <GitBranch className="w-3 h-3" /> },
            { value: "SAP/Logo", label: "ERP Sistemleri", icon: <Database className="w-3 h-3" /> },
            { value: "%99.9", label: "Başarı Oranı", icon: <CheckCircle className="w-3 h-3" /> },
            { value: "7/24", label: "Destek", icon: <Clock className="w-3 h-3" /> },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300">
              <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent flex items-center justify-center gap-2">
                {stat.value}
                {stat.icon}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ERP Entegrasyon Açıklama */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">ERP Entegrasyon Nedir?</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              ERP entegrasyonu, işletmenizin farklı sistemlerini (ERP, CRM, e-ticaret, muhasebe) tek bir merkezde buluşturarak 
              veri bütünlüğü sağlayan, süreçleri otomatikleştiren ve verimliliği artıran bir çözümdür.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Veri Senkronizasyonu</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Farklı sistemler arasında gerçek zamanlı veri senkronizasyonu sağlayarak, 
                veri tutarsızlıklarını ortadan kaldırıyoruz.
              </p>
              <ul className="space-y-2">
                {["Stok verileri", "Sipariş bilgileri", "Müşteri verileri", "Fatura bilgileri"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Süreç Otomasyonu</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Manuel süreçleri otomatik hale getirerek hata oranını düşürüyor ve 
                çalışan verimliliğini artırıyoruz.
              </p>
              <ul className="space-y-2">
                {["Sipariş takibi", "Fatura oluşturma", "Stok güncelleme", "Raporlama"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Desteklenen ERP Sistemleri */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Desteklediğimiz ERP Sistemleri</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bursa'daki işletmelerin kullandığı başlıca ERP sistemleri için entegrasyon çözümleri sunuyoruz
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "SAP",
                description: "SAP ERP sistemleri için özel entegrasyon çözümleri",
                features: ["SAP B1", "SAP S/4HANA", "SAP Business One"],
                color: "from-blue-500 to-blue-600"
              },
              {
                name: "Logo",
                description: "Logo yazılımları için kapsamlı entegrasyon",
                features: ["Logo GO", "Logo Enterprise", "Logo İşbaşı"],
                color: "from-green-500 to-green-600"
              },
              {
                name: "Mikro",
                description: "Mikro ERP sistem entegrasyon hizmetleri",
                features: ["Mikro v16", "Mikro v17", "Mikro v18"],
                color: "from-purple-500 to-purple-600"
              },
              {
                name: "Diğer ERP'ler",
                description: "Özel ERP sistemleri için entegrasyon",
                features: ["Eta", "Link", "Oracle NetSuite", "Özel Yazılımlar"],
                color: "from-orange-500 to-orange-600"
              },
            ].map((erp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl shadow-lg">
                <div className={`w-12 h-12 bg-gradient-to-br ${erp.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{erp.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{erp.description}</p>
                <ul className="space-y-1">
                  {erp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entegrasyon Alanları */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Entegrasyon Alanlarımız</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              ERP sistemlerinizi diğer platformlarla entegre ederek iş süreçlerinizi optimize ediyoruz
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe className="w-5 h-5 text-white" />,
                title: "E-Ticaret Entegrasyonu",
                description: "Trendyol, Hepsiburada, Amazon gibi pazaryerleri ile ERP entegrasyonu",
                features: ["Ürün Senkronizasyonu", "Sipariş Aktarımı", "Stok Yönetimi"]
              },
              {
                icon: <Smartphone className="w-5 h-5 text-white" />,
                title: "Mobil Uygulama Entegrasyonu",
                description: "Mobil uygulamalarınızı ERP sisteminizle entegre ediyoruz",
                features: ["Saha Satış", "Sipariş Takibi", "Müşteri Yönetimi"]
              },
              {
                icon: <Truck className="w-5 h-5 text-white" />,
                title: "Kargo Entegrasyonu",
                description: "Aras, Yurtiçi, MNG gibi kargo firmaları ile otomatik entegrasyon",
                features: ["Kargo Takip", "Fatura Oluşturma", "Teslimat Bildirimi"]
              },
              {
                icon: <CreditCard className="w-5 h-5 text-white" />,
                title: "Ödeme Sistemleri",
                description: "Banka ve POS sistemleri ile güvenli entegrasyon",
                features: ["İyzico", "PayTR", "Stripe", "Banka API"]
              },
              {
                icon: <BarChart className="w-5 h-5 text-white" />,
                title: "CRM Entegrasyonu",
                description: "Müşteri ilişkileri yönetimi sistemleri ile entegrasyon",
                features: ["HubSpot", "Salesforce", "Zoho CRM", "Özel CRM"]
              },
              {
                icon: <Server className="w-5 h-5 text-white" />,
                title: "Bulut Sistem Entegrasyonu",
                description: "AWS, Azure, Google Cloud gibi bulut platformları ile entegrasyon",
                features: ["Veri Yedekleme", "API Gateway", "Mikroservis Mimari"]
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Süreç */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Entegrasyon Sürecimiz</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bursa'daki işletmeniz için 4 adımda profesyonel entegrasyon çözümü
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                step: "1", 
                title: "Analiz", 
                desc: "Mevcut sistem analizi ve ihtiyaç belirleme",
                icon: <Settings className="w-4 h-4" />
              },
              { 
                step: "2", 
                title: "Planlama", 
                desc: "Entegrasyon mimarisi ve proje planı oluşturma",
                icon: <Target className="w-4 h-4" />
              },
              { 
                step: "3", 
                title: "Geliştirme", 
                desc: "API geliştirme ve entegrasyon testleri",
                icon: <Code2 className="w-4 h-4" />
              },
              { 
                step: "4", 
                title: "Canlıya Alma", 
                desc: "Üretim ortamına geçiş ve destek başlangıcı",
                icon: <CheckCircle className="w-4 h-4" />
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto z-10 relative">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Neden MSYazılımDuo?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bursa'da ERP entegrasyon konusunda neden bizi tercih etmelisiniz?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  icon: <Building className="w-5 h-5 text-blue-600" />,
                  title: "Bursa'da Yerel Hizmet",
                  description: "Bursa merkezli ekibimizle yüz yüze destek ve danışmanlık"
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
                  title: "Güvenli Entegrasyon",
                  description: "En güncel güvenlik standartları ile veri güvenliğinizi sağlıyoruz"
                },
                {
                  icon: <Clock className="w-5 h-5 text-orange-600" />,
                  title: "7/24 Teknik Destek",
                  description: "Entegrasyon sisteminiz için sürekli teknik destek sağlıyoruz"
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
                  title: "Yüksek Performans",
                  description: "Optimize edilmiş entegrasyonlar ile maksimum performans"
                },
                {
                  icon: <Users className="w-5 h-5 text-indigo-600" />,
                  title: "Deneyimli Ekip",
                  description: "10+ yıllık ERP entegrasyon tecrübesine sahip uzman ekip"
                },
                {
                  icon: <Award className="w-5 h-5 text-yellow-600" />,
                  title: "Kalite Garantisi",
                  description: "Test edilmiş ve onaylanmış entegrasyon çözümleri"
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Formu */}
      <section id="iletisim" className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Ücretsiz Entegrasyon Analizi</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              ERP entegrasyon ihtiyacınızı bize anlatın, size özel çözüm önerelim
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">Ad Soyad *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="İsminiz"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">Telefon *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="05xx xxx xx xx"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">Email Adresi *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">Şirket Adı</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Şirket adınız"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="erpSystem" className="block text-sm font-medium mb-2 text-gray-700">Kullandığınız ERP Sistemi</label>
                <select 
                  id="erpSystem"
                  name="erpSystem"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Seçiniz</option>
                  <option value="sap">SAP</option>
                  <option value="logo">Logo</option>
                  <option value="mikro">Mikro</option>
                  <option value="eta">Eta</option>
                  <option value="link">Link</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">Entegrasyon İhtiyacınız</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="ERP sisteminizi hangi platformlarla entegre etmek istiyorsunuz? (e-ticaret, CRM, kargo, vb.)"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

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
                    <span>Ücretsiz Analiz İste</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
              <p className="text-gray-300 text-sm">
                Bursa merkezli ERP entegrasyon ve yazılım geliştirme ekibi.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">ERP Entegrasyon</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>SAP Entegrasyon</li>
                <li>Logo Entegrasyon</li>
                <li>Mikro Entegrasyon</li>
                <li>E-Ticaret Entegrasyon</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link></li>
                <li><Link href="/entegrasyon" className="hover:text-white transition-colors">Entegrasyon</Link></li>
                <li><a href="#iletisim" className="hover:text-white transition-colors">Teklif Al</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Bursa'dan Ulaşın</h4>
              <ul className="space-y-2 text-sm text-gray-300">
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

          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MSYazılımDuo - Bursa ERP Entegrasyon. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}