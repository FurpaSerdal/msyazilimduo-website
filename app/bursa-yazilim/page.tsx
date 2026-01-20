"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, CheckCircle, Star, Award, Users, Clock, 
  Code2, Smartphone, Globe, Server, Zap, Shield,
  Phone, Mail, MapPin, Building
} from 'lucide-react';

export default function BursaYazilimPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" suppressHydrationWarning></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} suppressHydrationWarning></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} suppressHydrationWarning></div>
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
            <span className="text-blue-700 font-semibold text-sm">Bursa'nın Yazılım Uzmanları</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Bursa Yazılım Firması
            </span>
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Profesyonel Çözümler</span>
          </motion.h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            <strong>Bursa yazılım</strong> sektöründe öncü firmamız ile web sitesi, mobil uygulama ve 
            özel yazılım projeleri geliştirin. Yerel destek, garantili hizmet.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/#contact"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">Ücretsiz Teklif Alın</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link
              href="tel:+905355297508"
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Hemen Arayın</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "20+", label: "Başarılı Proje", icon: Award },
            { value: "15+", label: "Mutlu Müşteri", icon: Users },
            { value: "5+", label: "Yıl Tecrübe", icon: Clock },
            { value: "%100", label: "Müşteri Memnuniyeti", icon: Star },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", bounce: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bursa Yazılım Hizmetleri */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Bursa Yazılım Geliştirme Hizmetlerimiz
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            <strong>Bursa yazılım firması</strong> olarak işletmenize özel, modern ve güvenilir yazılım çözümleri sunuyoruz
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Bursa Web Sitesi",
                description: "SEO uyumlu, mobil uyumlu kurumsal web sitesi ve e-ticaret çözümleri",
                features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yükleme", "Güvenli Altyapı"]
              },
              {
                icon: Smartphone,
                title: "Mobil Uygulama Geliştirme",
                description: "iOS ve Android için native ve hybrid mobil uygulama çözümleri",
                features: ["React Native", "Flutter", "iOS & Android", "Push Notification"]
              },
              {
                icon: Server,
                title: "Özel Yazılım Çözümleri",
                description: "İşletmenize özel yazılım geliştirme ve otomasyon sistemleri",
                features: ["İş Süreç Otomasyonu", "ERP Sistemleri", "API Entegrasyonu", "Bulut Çözümleri"]
              },
              {
                icon: Code2,
                title: "Web Uygulama Geliştirme",
                description: "Modern web teknolojileri ile güçlü web uygulamaları",
                features: ["React/Next.js", "Node.js", "PostgreSQL", "Real-time Apps"]
              },
              {
                icon: Zap,
                title: "E-ticaret Çözümleri",
                description: "Satışlarınızı artıracak profesyonel e-ticaret platformları",
                features: ["Ödeme Entegrasyonu", "Kargo Sistemi", "Stok Yönetimi", "Mobil Uyumlu"]
              },
              {
                icon: Shield,
                title: "Bakım ve Destek",
                description: "7/24 teknik destek ve yazılım bakım hizmetleri",
                features: ["Güvenlik Güncellemeleri", "Performans İzleme", "Yedekleme", "Acil Müdahale"]
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 p-6 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz Section */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Bursa Yazılım Firması Olarak Avantajlarımız
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Yerel Bursa Ekibi",
                description: "Bursa'da ofisimiz ve ekibimizle yüz yüze görüşme imkanı. Yerel işletmelerin ihtiyaçlarını anlayan tecrübeli kadro."
              },
              {
                title: "Hızlı Proje Teslimatı",
                description: "Etkin proje yönetimi ve deneyimli ekibimizle projelerinizi zamanında ve bütçe dahilinde teslim ediyoruz."
              },
              {
                title: "Uzman Kadro",
                description: "React, Node.js, .NET ve mobil teknolojilerinde uzman yazılım geliştiricilerden oluşan ekibimiz."
              },
              {
                title: "Uygun Fiyatlar",
                description: "Bursa bölgesinde rekabetçi fiyatlarla kaliteli yazılım hizmeti. Esnek ödeme seçenekleri."
              },
              {
                title: "7/24 Destek",
                description: "Proje sonrası teknik destek ve bakım hizmetleri. Acil durumlarda hızlı müdahale garantisi."
              },
              {
                title: "Modern Teknolojiler",
                description: "Güncel ve güvenilir teknolojiler kullanarak geleceğe hazır yazılım çözümleri geliştiriyoruz."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          >
            Bursa Yazılım Projeniz İçin Hemen Başlayın
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10 text-blue-50"
          >
            Ücretsiz danışmanlık ve proje analizi için bizimle iletişime geçin
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/#contact"
              className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Ücretsiz Teklif Al</span>
            </Link>
            <a
              href="tel:+905355297508"
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>+90 (535) 529 75 08</span>
            </a>
          </motion.div>

          <div className="mt-12 flex items-center justify-center gap-2 text-blue-100">
            <MapPin className="w-5 h-5" />
            <span>Bursa, Türkiye - Yerel Destek ve Hizmet</span>
          </div>
        </div>
      </section>

      {/* Ana Sayfaya Link */}
      <section className="py-8 px-4 bg-gray-50 text-center">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
        >
          <span>Ana Sayfaya Dön</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </main>
  );
}
