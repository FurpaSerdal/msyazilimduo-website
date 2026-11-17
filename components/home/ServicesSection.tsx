"use client";

import { motion } from 'framer-motion';
import { Globe, Smartphone, Server, Rocket, Zap, Lock, CheckCircle2, ArrowRight, Terminal } from 'lucide-react';

interface ServicesSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function ServicesSection({ scrollToSection }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-indigo-600" />
            <span>&lt;Uçtan Uca Yazılım Çözümleri /&gt;</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Bursa Yazılım Geliştirme Hizmetleri
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            <strong>Bursa web</strong> tasarım, mobil uygulama ve kurumsal yazılım geliştirme çözümleri — işletmenize özel mühendislik hizmetleri
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              endpoint: "GET /web-platform",
              tag: "Web & SEO",
              title: "Bursa Web Tasarım",
              description: "Next.js ve React ile ultra hızlı, SEO uyumlu ve yüksek dönüşümlü kurumsal web siteleri ve web uygulamaları.",
              gradient: "from-blue-600 to-cyan-500",
              badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
              stack: ["Next.js", "React", "Tailwind", "SSR SEO"],
              features: ["Bursa Web Sitesi", "Teknik SEO Mimarisi", "Mobil Uyumlu UI/UX", "Yüksek Hız (99+)"]
            },
            {
              icon: Smartphone,
              endpoint: "BUILD /ios-android",
              tag: "iOS & Android",
              title: "Bursa Mobil Uygulama",
              description: "React Native ve Flutter ile iOS ve Android mağazaları için 60 FPS native performanslı mobil uygulamalar.",
              gradient: "from-purple-600 to-indigo-600",
              badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
              stack: ["React Native", "Flutter", "iOS", "Android"],
              features: ["iOS & Android Mağaza", "React Native / Flutter", "Push Bildirim & Offline", "Bursa Yazılım Desteği"]
            },
            {
              icon: Server,
              endpoint: "POST /custom-system",
              tag: "Özel Sistemler",
              title: "Bursa Yazılım Geliştirme",
              description: "İşletmenizin süreçlerine özel web tabanlı yönetim panelleri, B2B portallar, API ve ERP otomasyon sistemleri.",
              gradient: "from-emerald-600 to-teal-600",
              badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
              stack: ["Node.js", ".NET Core", "REST API", "ERP"],
              features: ["Özel Yazılım Mimarisi", "İş Akışı Otomasyonu", "SAP / Logo / Mikro ERP", "API Geliştirme"]
            },
            {
              icon: Rocket,
              endpoint: "SYNC /digital-ops",
              tag: "Strateji & Mimari",
              title: "Dijital Dönüşüm",
              description: "Bursa'daki sanayi ve ticaret işletmelerinin dijital dönüşüm süreçlerinde uçtan uca yazılım danışmanlığı.",
              gradient: "from-amber-500 to-orange-600",
              badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
              stack: ["Cloud", "Docker", "CI/CD", "Analiz"],
              features: ["Sistem & Süreç Analizi", "Yazılım Mimari Tasarımı", "Ekip & Kullanım Eğitimi", "Sürekli Bakım & SLA"]
            },
            {
              icon: Zap,
              endpoint: "TX /ecommerce-core",
              tag: "Online Satış",
              title: "E-ticaret",
              description: "Ödeme kuruluşları, kargo ve muhasebe/ERP entegrasyonlarıyla tam otomatik, yüksek trafikli satış platformları.",
              gradient: "from-rose-500 to-red-600",
              badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
              stack: ["B2B / B2C", "Iyzico/PayTR", "ERP Sync", "Kargo API"],
              features: ["Güvenli Ödeme Altyapısı", "Kargo & Fatura Otomasyonu", "Stok & ERP Eşitleme", "Dönüşüm Odaklı Sepet"]
            },
            {
              icon: Lock,
              endpoint: "SEC /zero-trust",
              tag: "Koruma & Altyapı",
              title: "Güvenlik",
              description: "Bursa işletmeleri için siber güvenlik sıkılaştırması, sunucu mimarisi, veri koruma ve otomatik yedekleme.",
              gradient: "from-slate-700 to-slate-900",
              badgeBg: "bg-slate-100 text-slate-800 border-slate-300",
              stack: ["SSL/TLS", "WAF", "Backup", "KVKK"],
              features: ["Güvenlik & Sızma Testi", "Kurumsal SSL & WAF", "Şifreli Veri Koruma", "Otomatik Bulut Yedekleme"]
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/10 hover:-translate-y-1 shadow-sm group animate-on-scroll flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Developer Endpoint Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 text-slate-300 border-b border-slate-800 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-cyan-400 font-semibold">{service.endpoint}</span>
                  </div>
                  <span className="text-slate-500">v3.0</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${service.badgeBg}`}>
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.description}</p>

                  {/* Mini Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-2 pt-3 border-t border-slate-100">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 group/btn shadow-sm"
                >
                  <span>Teknik Teklif Al</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
