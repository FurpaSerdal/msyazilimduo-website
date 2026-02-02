"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/home/Footer';
import { 
  ArrowRight, CheckCircle, Code2, Smartphone, Globe, 
  ShoppingCart, Database, Cloud, Shield, Zap,
  Phone, Mail, Clock, Award, Users, Target,
  Laptop, Server, Package, Settings
} from 'lucide-react';

export default function BursaYazilimGelistirmePage() {
  const services = [
    {
      icon: Globe,
      title: "Web Sitesi Geliştirme",
      description: "Modern, responsive ve SEO uyumlu web siteleri",
      features: ["Kurumsal Web Siteleri", "Landing Page", "Portfolyo Siteleri", "Blog Platformları"],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      price: "₺15.000'den başlayan fiyatlarla",
    },
    {
      icon: ShoppingCart,
      title: "E-Ticaret Geliştirme",
      description: "Satış odaklı, güvenli online mağaza çözümleri",
      features: ["Ödeme Entegrasyonu", "Stok Yönetimi", "Kargo Entegrasyonu", "Admin Paneli"],
      tech: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
      price: "₺25.000'den başlayan fiyatlarla",
    },
    {
      icon: Smartphone,
      title: "Mobil Uygulama Geliştirme",
      description: "iOS ve Android için native-performanslı uygulamalar",
      features: ["Cross-Platform", "Push Notification", "Offline Destek", "API Entegrasyonu"],
      tech: ["React Native", "Flutter", "Firebase"],
      price: "₺30.000'den başlayan fiyatlarla",
    },
    {
      icon: Package,
      title: "Kurumsal Yazılım",
      description: "İşletmenize özel yazılım çözümleri",
      features: ["CRM Sistemleri", "ERP Çözümleri", "Otomasyon", "Raporlama"],
      tech: ["Node.js", "PostgreSQL", "Docker", "Microservices"],
      price: "İhtiyaca özel fiyatlandırma",
    },
    {
      icon: Database,
      title: "API & Backend Geliştirme",
      description: "Güçlü, ölçeklenebilir backend altyapısı",
      features: ["RESTful API", "GraphQL", "Authentication", "Database Design"],
      tech: ["Node.js", "Express", "NestJS", "MongoDB/PostgreSQL"],
      price: "₺10.000'den başlayan fiyatlarla",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Bulut altyapı ve sürekli entegrasyon",
      features: ["AWS/Azure Setup", "CI/CD Pipeline", "Docker", "Monitoring"],
      tech: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
      price: "Aylık bakım paketleri mevcut",
    },
  ];

  const developmentProcess = [
    {
      step: "1",
      title: "Analiz & Planlama",
      description: "İhtiyaçlarınızı detaylı analiz ediyor, proje kapsamını belirliyoruz",
      duration: "1-2 Hafta",
    },
    {
      step: "2",
      title: "Tasarım & Prototipoleme",
      description: "UI/UX tasarımları hazırlıyor, onayınıza sunuyoruz",
      duration: "1-2 Hafta",
    },
    {
      step: "3",
      title: "Geliştirme",
      description: "Modern teknolojilerle kodlama ve test süreçleri",
      duration: "3-8 Hafta",
    },
    {
      step: "4",
      title: "Test & QA",
      description: "Kapsamlı testler ve performans optimizasyonu",
      duration: "1 Hafta",
    },
    {
      step: "5",
      title: "Yayın & Destek",
      description: "Canlıya alma ve sürekli teknik destek",
      duration: "Devam Eden",
    },
  ];

  const technologies = [
    { name: "React / Next.js", category: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "Node.js / Express", category: "Backend", color: "from-green-500 to-emerald-500" },
    { name: "TypeScript", category: "Language", color: "from-blue-600 to-indigo-600" },
    { name: "React Native", category: "Mobile", color: "from-purple-500 to-pink-500" },
    { name: "PostgreSQL / MongoDB", category: "Database", color: "from-orange-500 to-red-500" },
    { name: "AWS / Docker", category: "DevOps", color: "from-yellow-500 to-orange-500" },
    { name: "Tailwind CSS", category: "Styling", color: "from-teal-500 to-cyan-500" },
    { name: "GraphQL / REST", category: "API", color: "from-pink-500 to-rose-500" },
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Hızlı Teslimat",
      description: "Agile metodoloji ile hızlı ve esnek geliştirme",
    },
    {
      icon: Shield,
      title: "Güvenli Kod",
      description: "OWASP standartları ve güvenlik best practices",
    },
    {
      icon: Users,
      title: "Şeffaf İletişim",
      description: "Haftalık raporlama ve düzenli görüşmeler",
    },
    {
      icon: Award,
      title: "Kalite Garantisi",
      description: "3 ay ücretsiz bakım ve destek garantisi",
    },
    {
      icon: Clock,
      title: "7/24 Destek",
      description: "Projeniz yayında olduğu sürece destek",
    },
    {
      icon: Target,
      title: "ROI Odaklı",
      description: "İşletmenizin hedeflerine odaklı çözümler",
    },
  ];

  return (
    <>
      <Navigation activeSection="home" scrollToSection={() => {}} />
      <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-2.5 rounded-full mb-6 border border-blue-200/50 shadow-md"
          >
            <Code2 className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Profesyonel Yazılım Geliştirme</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Bursa Yazılım Geliştirme
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              Modern Teknolojiler
            </span>
          </motion.h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <strong>Bursa yazılım geliştirme</strong> alanında uzman ekibimizle web sitesi, 
            mobil uygulama ve kurumsal yazılım projeleri geliştiriyoruz. React, Next.js, Node.js 
            gibi modern teknolojiler ile <strong>yazılım geliştirme Bursa</strong> hizmetleri sunuyoruz.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/#contact"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Ücretsiz Teklif Alın</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+905355297508"
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Hemen Arayın</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "50+", label: "Tamamlanan Proje", icon: Package },
            { value: "40+", label: "Mutlu Müşteri", icon: Users },
            { value: "5+", label: "Yıl Tecrübe", icon: Award },
            { value: "%100", label: "Kod Kalitesi", icon: Shield },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className="text-center p-6 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Yazılım Geliştirme Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Bursa web geliştirme</strong> ve mobil uygulama hizmetleri
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm font-semibold text-indigo-600">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Yazılım Geliştirme Sürecimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesyonel ve şeffaf <strong>Bursa yazılım geliştirme</strong> süreci
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 mb-3">{process.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {process.duration}
                  </span>
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold shadow-xl z-10">
                  {process.step}
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Kullandığımız Teknolojiler
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern ve güncel teknolojilerle <strong>React geliştirme Bursa</strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all text-center group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform`}></div>
              <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-sm text-gray-600">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <advantage.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Projenizi Birlikte Geliştirelim!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            <strong>Bursa yazılım geliştirme</strong> hizmetlerimiz hakkında detaylı bilgi almak 
            ve ücretsiz teklif için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:scale-105 transition-all"
            >
              <span>Ücretsiz Teklif Al</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+905355297508"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>+90 535 529 7508</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
    <Footer scrollToSection={() => {}} setShowWhatsappModal={() => {}} />
    </>
  );
}
