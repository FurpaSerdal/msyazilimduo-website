"use client";

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { MotionConfig } from 'framer-motion';
import {
  Code2, CheckCircle, ArrowRight,
  Zap, Database, RefreshCw, GitBranch, Globe, Server,
  Smartphone, Truck, CreditCard, BarChart, Settings,
  Target, Building, ShieldCheck, Clock, TrendingUp,
  Users, Award, MessageCircle
} from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/home/Footer';

const FloatingButtons = dynamic(() => import('@/components/ui/FloatingButtons'), { ssr: false });
const Notification = dynamic(() => import('@/components/ui/Notification'), { ssr: false });

export default function EntegrasyonPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);

  const sendWhatsAppMessage = useCallback(() => {
    const message = whatsappMessage || 'Merhaba, ERP entegrasyon hizmetleriniz hakk?nda bilgi almak istiyorum.';
    const phoneNumber = '905355297508';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setShowWhatsappModal(false);
    setWhatsappMessage('');
  }, [whatsappMessage]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          company: formData.get('company'),
          erpSystem: formData.get('erpSystem'),
          message: formData.get('message'),
          source: 'entegrasyon',
          location: 'Bursa',
        }),
      });

      if (!response.ok) throw new Error('G?nderim ba?ar?s?z');

      setNotification({
        type: 'success',
        message: 'Mesaj?n?z ba?ar?yla g?nderildi! En k?sa s?rede sizinle ileti?ime ge?ece?iz.',
      });
      form.reset();
    } catch {
      setNotification({
        type: 'error',
        message: 'Bir hata olu?tu. L?tfen tekrar deneyin veya WhatsApp ?zerinden ileti?ime ge?in.',
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 5000);
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white overflow-x-clip" suppressHydrationWarning>
        {notification && (
          <Notification notification={notification} onClose={() => setNotification(null)} />
        )}

        <FloatingButtons
          showWhatsappModal={showWhatsappModal}
          whatsappMessage={whatsappMessage}
          setWhatsappMessage={setWhatsappMessage}
          setShowWhatsappModal={setShowWhatsappModal}
          sendWhatsAppMessage={sendWhatsAppMessage}
        />

        <Navigation contactTargetId="iletisim" />
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-4 py-1.5 rounded-full mb-6 border border-blue-100">
            <Zap className="w-3 h-3" />
            <span className="text-xs font-semibold">Bursa ERP Entegrasyon</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
              ERP Entegrasyon
            </span>
            <br />
            <span className="text-2xl sm:text-4xl md:text-5xl">Profesyonel Çözümler</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Bursa&apos;da işletmenizin SAP, Logo, Mikro gibi ERP sistemlerini diğer yazılımlarla entegre ediyor, 
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
              <span>WhatsApp&apos;tan Yaz</span>
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
              Bursa&apos;daki işletmelerin kullandığı başlıca ERP sistemleri için entegrasyon çözümleri sunuyoruz
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
              Bursa&apos;daki işletmeniz için 4 adımda profesyonel entegrasyon çözümü
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
              Bursa&apos;da ERP entegrasyon konusunda neden bizi tercih etmelisiniz?
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">Şirket Adı</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Şirket adınız"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="erpSystem" className="block text-sm font-medium mb-2 text-gray-700">Kullandığınız ERP Sistemi</label>
                <select 
                  id="erpSystem"
                  name="erpSystem"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
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

        <Footer setShowWhatsappModal={setShowWhatsappModal} />
      </div>
    </MotionConfig>
  );
}
