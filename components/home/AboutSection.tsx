"use client";

import { motion } from 'framer-motion';
import { Target, Award, TrendingUp, CheckCircle2, Code2, Cpu, GitBranch, ShieldCheck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-blue-600" />
            <span>&lt;Neden msduoyazilim? /&gt;</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Bursa Yazılım Firması Olarak Avantajlarımız
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
            <strong>Bursa yazılım geliştirme</strong> alanında uzman mühendis ekibimiz, yerel işletmelere kurumsal standartlarda, ölçeklenebilir ve yüksek performanslı yazılım mimarileri sunuyor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {[
            {
              code: "MOD_01 // LOCAL_CORE",
              icon: Target,
              title: "Bursa Odaklı Mühendislik",
              description: "Bursa'daki sanayi ve ticaret işletmelerinin saha ihtiyaçlarını bilen, yerinde analiz yapan yerel yazılım ekibi.",
              gradient: "from-blue-600 to-cyan-500",
              accentBar: "from-blue-600 to-cyan-400",
              features: ["Yerel Pazar & Sanayi Bilgisi", "Yüz Yüze Teknik Analiz", "Bölgesel Hızlı Entegrasyon"]
            },
            {
              code: "MOD_02 // CLEAN_CODE",
              icon: Award,
              title: "Temiz Kod & Mimari Garantisi",
              description: "TypeScript, modüler mikroservis yapısı ve otomatik test süreçleriyle uzun ömürlü, bakımı kolay yazılım altyapısı.",
              gradient: "from-indigo-600 to-purple-600",
              accentBar: "from-indigo-600 to-purple-500",
              features: ["Type-Safe Clean Architecture", "Otomatik Test & QA Süreçleri", "99+ Lighthouse Performansı"]
            },
            {
              code: "MOD_03 // SCALE_GROWTH",
              icon: TrendingUp,
              title: "Ölçeklenebilir İş Büyütme",
              description: "Otomasyon, ERP entegrasyonu ve yüksek dönüşümlü dijital ürünlerle operasyonel hızınızı ve kârlılığınızı artırın.",
              gradient: "from-cyan-600 to-emerald-600",
              accentBar: "from-cyan-500 to-emerald-400",
              features: ["Süreç & İş Akışı Otomasyonu", "Maliyet & Zaman Optimizasyonu", "Yüksek Trafik Ölçeklenebilirliği"]
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 shadow-sm group animate-on-scroll"
            >
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${item.accentBar}`} />

              <div className="flex items-center justify-between mb-6">
                <div className={`w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-mono text-[11px] font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                  {item.code}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">{item.description}</p>

              <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Engineering Standards Strip */}
        <div className="rounded-2xl bg-slate-900 text-white p-5 sm:p-6 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">Yazılım Mühendisliği Standartlarımız</h4>
              <p className="text-xs text-slate-400">Her projede kurumsal kod kalitesi ve şeffaf geliştirme</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { icon: GitBranch, text: "Git & CI/CD Otomasyonu" },
              { icon: Code2, text: "Modüler TypeScript Mimarisi" },
              { icon: ShieldCheck, text: "OWASP Güvenlik Standartları" },
            ].map((std, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300"
              >
                <std.icon className="w-3.5 h-3.5 text-cyan-400" />
                <span>{std.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
