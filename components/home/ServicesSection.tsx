"use client";

import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Rocket, Zap, Lock, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ServicesSection({ scrollToSection }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Geliştirme Hizmetleri</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            <strong>Bursa web</strong> tasarım ve yazılım geliştirme çözümleri - işletmenize özel profesyonel hizmetler
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Globe className="w-6 h-6 text-white" />,
              title: "Bursa Web Tasarım",
              description: "Bursa web sitesi ve e-ticaret çözümleri - modern, SEO uyumlu ve mobil uyumlu web tasarım hizmetleri.",
              gradient: "from-blue-500 to-blue-600",
              features: ["Bursa Web Sitesi", "SEO Optimizasyon", "Mobil Uyumlu", "E-ticaret"]
            },
            {
              icon: <Smartphone className="w-6 h-6 text-white" />,
              title: "Bursa Mobil Uygulama",
              description: "Bursa yazılım ekibimizle iOS ve Android mobil uygulama geliştirme - işletmeniz için özel çözümler.",
              gradient: "from-purple-500 to-purple-600",
              features: ["iOS & Android", "React Native", "Bursa Yazılım", "Profesyonel Destek"]
            },
            {
              icon: <Server className="w-6 h-6 text-white" />,
              title: "Bursa Yazılım Geliştirme",
              description: "Bursa yazılım geliştirme hizmetleri - işletmenize özel yazılım çözümleri ve otomasyon sistemleri.",
              gradient: "from-green-500 to-green-600",
              features: ["Özel Yazılım", "İş Otomasyonu", "Bursa Yazılım", "API Geliştirme"]
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
  );
}
