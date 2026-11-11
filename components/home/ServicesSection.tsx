"use client";

import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Rocket, Zap, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

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
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3.5 py-1 rounded-full mb-3">
            Uçtan Uca Hizmetler
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Geliştirme Hizmetleri</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            <strong>Bursa web</strong> tasarım ve yazılım geliştirme çözümleri — işletmenize özel profesyonel hizmetler
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              tag: "Web & SEO",
              title: "Bursa Web Tasarım",
              description: "Modern, SEO uyumlu ve yüksek dönüşümlü kurumsal web siteleri ve e-ticaret çözümleri.",
              gradient: "from-blue-500 to-blue-600",
              badgeBg: "bg-blue-50 text-blue-700",
              features: ["Bursa Web Sitesi", "SEO Optimizasyon", "Mobil Uyumlu", "E-ticaret"]
            },
            {
              icon: Smartphone,
              tag: "iOS & Android",
              title: "Bursa Mobil Uygulama",
              description: "React Native ve Flutter ile iOS ve Android için yüksek performanslı mobil uygulamalar.",
              gradient: "from-purple-500 to-indigo-600",
              badgeBg: "bg-purple-50 text-purple-700",
              features: ["iOS & Android", "React Native", "Bursa Yazılım", "Profesyonel Destek"]
            },
            {
              icon: Server,
              tag: "Özel Sistemler",
              title: "Bursa Yazılım Geliştirme",
              description: "İşletmenizin süreçlerine özel yazılım mimarisi, API entegrasyonu ve otomasyon sistemleri.",
              gradient: "from-emerald-500 to-teal-600",
              badgeBg: "bg-emerald-50 text-emerald-700",
              features: ["Özel Yazılım", "İş Otomasyonu", "Bursa Yazılım", "API Geliştirme"]
            },
            {
              icon: Rocket,
              tag: "Strateji",
              title: "Dijital Dönüşüm",
              description: "Bursa'daki işletmelerin dijital dönüşüm süreçlerinde uçtan uca teknik danışmanlık.",
              gradient: "from-amber-500 to-orange-600",
              badgeBg: "bg-amber-50 text-amber-700",
              features: ["Süreç Analizi", "Teknoloji Danışmanlığı", "Eğitim", "Destek"]
            },
            {
              icon: Zap,
              tag: "Online Satış",
              title: "E-ticaret",
              description: "Ödeme, kargo ve ERP entegrasyonlarıyla tam otomatik, ölçeklenebilir satış platformları.",
              gradient: "from-rose-500 to-red-600",
              badgeBg: "bg-rose-50 text-rose-700",
              features: ["Ödeme Sistemleri", "Kargo Entegrasyon", "Mobil Uyum", "Analiz"]
            },
            {
              icon: Lock,
              tag: "Koruma & Altyapı",
              title: "Güvenlik",
              description: "Bursa işletmeleri için siber güvenlik testleri, veri koruma ve yedekleme sistemleri.",
              gradient: "from-slate-700 to-slate-800",
              badgeBg: "bg-slate-100 text-slate-700",
              features: ["Güvenlik Testi", "SSL Sertifikaları", "Veri Koruma", "Yedekleme"]
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm group animate-on-scroll flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.badgeBg}`}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center justify-center gap-1.5 border border-gray-200/70 hover:border-blue-200 transition-all group/btn"
              >
                <span>Teklif Al</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
