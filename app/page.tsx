"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Mail, Phone, MapPin, CheckCircle, Users, Clock, Shield, 
  Sparkles, ArrowRight, Star, Globe, Zap, Cloud, Database, 
  Smartphone, Server, Lock, BarChart, Settings, Award, Target, 
  PieChart, MailCheck, PhoneCall, MessageCircle, Send, X, AlertCircle
} from 'lucide-react';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

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
          message: form.message.value,
        }),
      });

      if (!res.ok) {
        throw new Error("Email gönderilemedi");
      }

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
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-8 right-8 z-[100]"
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

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => {
            const phoneNumber = '905355297508';
            window.open(`https://wa.me/${phoneNumber}`, '_blank');
          }}
          className="group bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-green-200 hover:scale-105 transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp'tan yazın
          </span>
        </button>
      </div>

      {/* WhatsApp Message Modal */}
      <div className="fixed bottom-24 right-8 z-50">
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">WhatsApp Hattımız</h3>
              <p className="text-gray-600 text-sm">Hızlı yanıt için</p>
            </div>
          </div>
          
          <textarea
            value={whatsappMessage}
            onChange={(e) => setWhatsappMessage(e.target.value)}
            placeholder="Mesajınızı buraya yazın..."
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            rows={3}
          />
          
          <button
            onClick={sendWhatsAppMessage}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-100 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Mesaj Gönder
          </button>
          
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                const phoneNumber = '905355297508';
                window.open(`https://wa.me/${phoneNumber}?text=Merhaba,%20MSYazılımDuo%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`, '_blank');
              }}
              className="text-green-600 text-sm hover:text-green-700"
            >
              Veya direkt WhatsApp'tan aç
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-sm">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900">MSYazılımDuo</span>
              <span className="text-xs text-gray-500 font-medium">Yazılım Geliştirme Ekibi</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
            >
              Ücretsiz Danışmanlık
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-5 py-2.5 rounded-full mb-8 border border-blue-100">
            <Sparkles className="w-3 h-3" />
            <span className="text-sm font-semibold">2 Uzman Yazılımcı • 20+ Başarılı Proje</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">
            Dijital Dönüşümünüz İçin
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Profesyonel Çözümler
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12 leading-relaxed">
            MSYazılımDuo olarak, kurumsal işletmelerden startup'lara kadar, modern teknolojilerle 
            ölçeklenebilir, güvenli ve yüksek performanslı yazılım çözümleri geliştiriyoruz. 
            Her projeye özel strateji ve uzman ekibimizle dijital hedeflerinize ulaşmanızı sağlıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-9 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <span>Ücretsiz Proje Analizi</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button
              onClick={sendWhatsAppMessage}
              className="group border-2 border-green-200 bg-white text-green-700 px-9 py-4 rounded-xl font-semibold hover:border-green-300 hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center gap-3"
            >
              <span>WhatsApp'tan Yaz</span>
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Advanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {[
            { value: "20+", label: "Tamamlanan Proje", color: "from-blue-500 to-blue-600" },
            { value: "5+", label: "Sektör Deneyimi", color: "from-purple-500 to-purple-600" },
            { value: "%99.9", label: "Sistem Uptime", color: "from-green-500 to-green-600" },
            { value: "24/7", label: "Teknik Destek", color: "from-orange-500 to-orange-600" },
            { value: "30+", label: "Teknoloji Partneri", color: "from-indigo-500 to-indigo-600" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg shadow-sm group">
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
              <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-gray-200 to-gray-200 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Neden MSYazılımDuo?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Alanında uzman iki yazılımcıdan oluşan ekibimiz, size özel çözümlerle 
              dijital dönüşüm yolculuğunuzda yanınızda. Tecrübe ve yenilikçiliği bir araya getiriyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-6 h-6 text-blue-600" />,
                title: "Stratejik Yaklaşım",
                description: "Her projeye özel analiz ve strateji geliştiriyor, uzun vadeli başarı için sürdürülebilir çözümler sunuyoruz.",
                gradient: "from-blue-50 to-blue-100"
              },
              {
                icon: <Award className="w-6 h-6 text-indigo-600" />,
                title: "Kalite Odaklı",
                description: "En son teknolojiler ve en iyi yazılım pratikleriyle kaliteli, test edilmiş ve dokümante edilmiş kod üretiyoruz.",
                gradient: "from-indigo-50 to-indigo-100"
              },
              {
                icon: <PieChart className="w-6 h-6 text-cyan-600" />,
                title: "Veri Odaklı Kararlar",
                description: "Analitik ve veri odaklı yaklaşımla, performansı optimize eden ve ROI'ı maksimize eden çözümler geliştiriyoruz.",
                gradient: "from-cyan-50 to-cyan-100"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - COMPREHENSIVE SOLUTIONS */}
      <section id="services" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Kapsamlı Çözümlerimiz</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              İş ihtiyaçlarınıza özel, ölçeklenebilir ve geleceğe hazır teknoloji çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-6 h-6 text-blue-600" />,
                title: "Kurumsal Web Çözümleri",
                description: "Next.js, React ve modern framework'ler ile yüksek performanslı, SEO dostu ve responsive web uygulamaları.",
                gradient: "from-blue-50 to-blue-100",
                features: [
                  "E-ticaret Platformları",
                  "Kurumsal CMS Sistemleri",
                  "Portal ve Dashboard'lar",
                  "Progressive Web Apps"
                ]
              },
              {
                icon: <Smartphone className="w-6 h-6 text-purple-600" />,
                title: "Mobil Uygulama Geliştirme",
                description: "React Native ve Flutter ile cross-platform mobil uygulamalar ve native iOS/Android çözümleri.",
                gradient: "from-purple-50 to-purple-100",
                features: [
                  "Cross-platform Apps",
                  "Native iOS & Android",
                  "Push Notification Sistemleri",
                  "App Store Optimization"
                ]
              },
              {
                icon: <Server className="w-6 h-6 text-green-600" />,
                title: "Backend & API Geliştirme",
                description: "Node.js, Python Django ve .NET Core ile yüksek performanslı backend sistemleri ve REST/GraphQL API'ları.",
                gradient: "from-green-50 to-green-100",
                features: [
                  "Mikroservis Mimarileri",
                  "REST & GraphQL API'lar",
                  "Veritabanı Optimizasyonu",
                  "Real-time Sistemler"
                ]
              },
              {
                icon: <Cloud className="w-6 h-6 text-orange-600" />,
                title: "Cloud & DevOps",
                description: "AWS, Azure ve Google Cloud üzerinde scalable cloud çözümleri ve CI/CD pipeline'ları.",
                gradient: "from-orange-50 to-orange-100",
                features: [
                  "Cloud Migration",
                  "CI/CD Pipeline",
                  "Containerization (Docker)",
                  "Monitoring & Logging"
                ]
              },
              {
                icon: <Zap className="w-6 h-6 text-red-600" />,
                title: "E-ticaret Çözümleri",
                description: "Shopify, WooCommerce ve custom e-ticaret platformları ile satışlarınızı dijitale taşıyoruz.",
                gradient: "from-red-50 to-red-100",
                features: [
                  "Custom E-ticaret",
                  "Ödeme Entegrasyonları",
                  "Envanter Yönetimi",
                  "CRM Entegrasyonu"
                ]
              },
              {
                icon: <Lock className="w-6 h-6 text-gray-600" />,
                title: "Güvenlik Çözümleri",
                description: "Uçtan uca güvenlik testleri, penetration testing ve güvenlik danışmanlığı hizmetleri.",
                gradient: "from-gray-50 to-gray-100",
                features: [
                  "Penetration Testing",
                  "GDPR Uyumluluğu",
                  "SSL & Güvenlik Sertifikaları",
                  "Güvenlik Danışmanlığı"
                ]
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="technologies" className="py-20 px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Kullandığımız Teknolojiler</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              En son teknolojiler ve modern stack'lerle geleceğe hazır çözümler üretiyoruz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React/Next.js", color: "from-blue-100 to-blue-200" },
              { name: "TypeScript", color: "from-blue-100 to-blue-200" },
              { name: "Node.js", color: "from-green-100 to-green-200" },
              { name: ".NET Core", color: "from-purple-100 to-purple-200" },
              { name: "Vue.js/Nuxt.js", color: "from-green-100 to-teal-200" },
              { name: "Angular", color: "from-red-100 to-red-200" },
              { name: "IIS", color: "from-yellow-100 to-yellow-200" },
              { name: "Python/Django", color: "from-green-100 to-green-200" },
              { name: "AWS/Azure", color: "from-orange-100 to-orange-200" },
              { name: "Docker/K8s", color: "from-blue-100 to-cyan-200" },
              { name: "PostgreSQL", color: "from-blue-100 to-indigo-200" },
              { name: "MongoDB", color: "from-green-100 to-emerald-200" },
              { name: "GraphQL", color: "from-pink-100 to-purple-200" },
              { name: "Redis", color: "from-red-100 to-red-200" },
              { name: "React Native", color: "from-cyan-100 to-blue-200" },
              { name: "Flutter", color: "from-blue-100 to-indigo-200" },
            ].map((tech, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
                <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full"></div>
                </div>
                <span className="text-gray-700 font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Çalışma Sürecimiz</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Şeffaf iletişim ve metodolojik yaklaşımla her projede başarıyı garanti ediyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Keşif & Analiz", 
                desc: "Detaylı ihtiyaç analizi, teknik değerlendirme ve proje planlaması",
                icon: <Settings className="w-5 h-5" />
              },
              { 
                step: "02", 
                title: "Tasarım & Planlama", 
                desc: "UI/UX tasarımı, teknik mimari ve database tasarımı",
                icon: <BarChart className="w-5 h-5" />
              },
              { 
                step: "03", 
                title: "Geliştirme", 
                desc: "Agile metodoloji ile iteratif geliştirme ve düzenli demo'lar",
                icon: <Code2 className="w-5 h-5" />
              },
              { 
                step: "04", 
                title: "Test & Yayın", 
                desc: "Kapsamlı testler, deployment ve sonrasında teknik destek",
                icon: <Shield className="w-5 h-5" />
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto z-10 relative">
                    {item.step}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl blur-lg opacity-50"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Ücretsiz Danışmanlık</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Projeniz için en uygun çözümü belirlemek üzere uzman ekibimizle 
              ücretsiz danışmanlık görüşmesi ayarlayın
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Bize Ulaşın</h3>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <MailCheck className="w-5 h-5 text-blue-600" />,
                    title: "Email",
                    info: "info@msyazilimduo.com",
                    subInfo: "Yanıt süresi: 1 iş günü",
                    gradient: "from-blue-50 to-blue-100"
                  },
                  {
                    icon: <PhoneCall className="w-5 h-5 text-green-600" />,
                    title: "Telefon",
                    info: "+90 (535) 529 75 08",
                    subInfo: "Çalışma saatleri: 09:00 - 18:00",
                    gradient: "from-green-50 to-green-100"
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-purple-600" />,
                    title: "Ofis Adresi",
                    info: "Bursa, Türkiye",
                    subInfo: "Hafta içi ofis görüşmeleri için randevu alın",
                    gradient: "from-purple-50 to-purple-100"
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{contact.title}</h4>
                      <p className="text-gray-600">{contact.info}</p>
                      <p className="text-gray-600 text-sm">{contact.subInfo}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-3">Neden Biz?</h4>
                <ul className="space-y-2">
                  {[
                    "Alanında uzman 2 yazılımcı",
                    "100+ başarılı proje deneyimi",
                    "Şeffaf fiyatlandırma politikası",
                    "Proje sonrası 6 ay ücretsiz destek"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-10 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Proje Detaylarınızı Paylaşın</h3>
              
              <form onSubmit={submit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Ad Soyad</label>
                    <input
                      name="name"
                      placeholder="İsminiz"
                      required
                      className="w-full border border-gray-300 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Email Adresiniz</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="ornek@email.com"
                      required
                      className="w-full border border-gray-300 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Şirket/Proje Adı</label>
                  <input
                    name="company"
                    placeholder="Şirket adınız veya proje ismi"
                    className="w-full border border-gray-300 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Proje Açıklaması</label>
                  <textarea
                    name="message"
                    placeholder="Projenizin detayları, hedefleri, zaman çerçevesi, bütçe aralığı ve özel gereksinimlerinizi detaylıca açıklayın..."
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <span>Ücretsiz Danışmanlık Talebi Gönder</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">MSYazılımDuo</h3>
                  <p className="text-blue-200 text-sm">Yazılım Geliştirme Ekibi</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                İki uzman yazılımcı, modern teknolojilerle işinizi geleceğe taşımak için burada.
                <br />
                <strong>msyazilimduo.com</strong>
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Hizmetler</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#services" className="hover:text-white transition-colors">Web Geliştirme</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Mobil Uygulamalar</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">E-ticaret Çözümleri</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cloud & DevOps</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Şirket</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Çalışma Süreci</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">İletişim</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Mail className="w-3 h-3" />
                  info@msyazilimduo.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3 h-3" />
                  +90 (535) 529 75 08
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-3 h-3" />
                  <button 
                    onClick={sendWhatsAppMessage}
                    className="hover:text-green-400 transition-colors"
                  >
                    WhatsApp'tan Yaz
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} MSYazılımDuo. Tüm hakları saklıdır.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              msyazilimduo.com - Profesyonel Yazılım Geliştirme Partneriniz
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}