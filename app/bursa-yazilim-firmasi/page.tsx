"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/home/Footer';
import { 
  ArrowRight, CheckCircle, Building, Award, Users, Star,
  Phone, Mail, MapPin, Clock, Shield, Zap,
  Globe, Code2, Smartphone, ShoppingCart, Database, Cloud,
  Target, TrendingUp, Heart, Briefcase
} from 'lucide-react';

export default function BursaYazilimFirmasiPage() {
  const companyFeatures = [
    {
      icon: Award,
      title: "5+ Yıl Tecrübe",
      description: "Yazılım sektöründe uzun yıllara dayanan deneyim",
      stats: "2020'den beri",
    },
    {
      icon: Users,
      title: "Deneyimli Ekip",
      description: "Full-stack, mobile ve UI/UX uzmanlarından oluşan ekip",
      stats: "8+ uzman",
    },
    {
      icon: Briefcase,
      title: "50+ Başarılı Proje",
      description: "Kurumsal, e-ticaret ve mobil uygulama projeleri",
      stats: "Tamamlandı",
    },
    {
      icon: Star,
      title: "%98 Müşteri Memnuniyeti",
      description: "Müşterilerimizden aldığımız geri bildirimler",
      stats: "40+ mutlu müşteri",
    },
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Yazılım",
      description: "Kurumsal web siteleri ve portaller",
      projects: "30+",
    },
    {
      icon: ShoppingCart,
      title: "E-Ticaret",
      description: "Online mağaza ve satış platformları",
      projects: "15+",
    },
    {
      icon: Smartphone,
      title: "Mobil Uygulama",
      description: "iOS ve Android uygulamalar",
      projects: "20+",
    },
    {
      icon: Database,
      title: "Kurumsal Yazılım",
      description: "CRM, ERP ve özel çözümler",
      projects: "10+",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Güvenilir Hizmet",
      description: "Sözleşmeli çalışma, yasal güvence ve referanslar",
    },
    {
      icon: Zap,
      title: "Hızlı Teslimat",
      description: "Belirlenen sürelerde proje teslimi garantisi",
    },
    {
      icon: Clock,
      title: "7/24 Destek",
      description: "Proje sonrası sürekli teknik destek ve bakım",
    },
    {
      icon: Target,
      title: "Hedef Odaklı",
      description: "İşletmenizin hedeflerine yönelik çözümler",
    },
    {
      icon: TrendingUp,
      title: "Büyüme Odaklı",
      description: "Ölçeklenebilir ve genişletilebilir altyapı",
    },
    {
      icon: Heart,
      title: "Müşteri Odaklı",
      description: "Şeffaf iletişim ve düzenli raporlama",
    },
  ];

  const testimonials = [
    {
      company: "E-Ticaret Firması",
      text: "MSYazılımDuo ile çalışmak harika bir deneyimdi. Web sitemizi modern bir tasarımla yenilediler ve satışlarımız %40 arttı.",
      rating: 5,
      industry: "E-Ticaret",
    },
    {
      company: "Danışmanlık Şirketi",
      text: "Kurumsal yazılım ihtiyaçlarımız için mükemmel çözümler sundular. Teknik destek ekibi çok ilgili ve yardımsever.",
      rating: 5,
      industry: "Danışmanlık",
    },
    {
      company: "Restoran Zinciri",
      text: "Mobil uygulamamızı geliştirdiler. Müşterilerimiz uygulamadan sipariş vermeye bayılıyor. Teşekkürler!",
      rating: 5,
      industry: "Gıda & İçecek",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Kalite Yönetimi",
    "KVKK Uyumluluk",
    "Google Partner",
    "AWS Certified",
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
            <Building className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Bursa'nın Güvenilir Yazılım Şirketi</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Bursa Yazılım Şirketi
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              MSYazılımDuo
            </span>
          </motion.h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <strong>Bursa yazılım firması</strong> MSYazılımDuo olarak 2020'den beri web sitesi, 
            mobil uygulama ve kurumsal yazılım çözümleri sunuyoruz. <strong>Bursa yazılım şirketi</strong> 
            olarak 50+ başarılı proje, profesyonel ekip ve garantili hizmet ile yanınızdayız.
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
              <span>İletişime Geçin</span>
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

        {/* Company Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {companyFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{feature.description}</p>
              <p className="text-blue-600 font-semibold text-sm">{feature.stats}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Hakkımızda
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <strong>MSYazılımDuo</strong>, Bursa'da faaliyet gösteren profesyonel bir 
              <strong> yazılım şirketi</strong>dir. 2020 yılında kurulan firmamız, web sitesi, 
              mobil uygulama ve kurumsal yazılım geliştirme alanlarında hizmet vermektedir.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Deneyimli yazılım ekibimiz ile React, Next.js, Node.js gibi modern teknolojiler 
              kullanarak projeler geliştiriyoruz. Müşteri memnuniyeti odaklı çalışma prensibimiz 
              ile şeffaf, hızlı ve kaliteli hizmet sunuyoruz.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Bursa yazılım</strong> sektöründe güvenilir bir iş ortağı arıyorsanız, 
              doğru adrestesiniz!
            </p>
            
            <div className="flex items-center gap-4 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Bursa, Türkiye</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Sertifikalarımız</h3>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/90 mb-4">İletişim Bilgileri</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+90 535 529 7508</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>info@msduoyazilim.com</span>
                </div>
              </div>
            </div>
          </motion.div>
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
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Bursa yazılım şirketi</strong> olarak sunduğumuz hizmetler
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all group text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-3">{service.description}</p>
              <p className="text-blue-600 font-semibold">{service.projects} Proje</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Neden MSYazılımDuo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <strong>Yazılım firması Bursa</strong> arayanlar için en iyi seçim
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Müşterilerimiz Ne Diyor?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.company.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.company}</p>
                  <p className="text-sm text-gray-600">{testimonial.industry}</p>
                </div>
              </div>
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
            Projeniz İçin Hemen İletişime Geçin!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            <strong>Bursa yazılım firması</strong> MSYazılımDuo ile çalışarak projelerinizi 
            hayata geçirin. Ücretsiz danışmanlık ve teklif için bizimle iletişime geçin.
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
