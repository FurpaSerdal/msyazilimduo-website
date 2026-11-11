"use client";

import { motion } from 'framer-motion';
import { Target, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/20 to-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full mb-3">
            Neden msduoyazilim?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Firması Olarak Avantajlarımız</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            <strong>Bursa yazılım geliştirme</strong> alanında uzman ekibimiz, yerel işletmelere yüksek standartlı ve sürdürülebilir çözümler sunuyor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Bursa Odaklı",
              description: "Bursa'daki işletmelerin ihtiyaçlarını anlayan, yerel tecrübeye sahip ekip.",
              gradient: "from-blue-500 to-blue-600",
              accentBar: "from-blue-500 to-cyan-400",
              features: ["Yerel Pazar Bilgisi", "Yüz Yüze İletişim", "Bölgesel İşbirliği"]
            },
            {
              icon: Award,
              title: "Kalite Garantisi",
              description: "Modern yazılım pratikleriyle test edilmiş, temiz ve ölçeklenebilir kod.",
              gradient: "from-indigo-500 to-purple-600",
              accentBar: "from-indigo-500 to-purple-500",
              features: ["Kod Kalitesi", "Test Süreçleri", "Performans Optimizasyonu"]
            },
            {
              icon: TrendingUp,
              title: "İş Büyütme",
              description: "Dijital çözümlerimizle operasyonlarınızı hızlandırın ve verimliliğinizi artırın.",
              gradient: "from-cyan-500 to-teal-600",
              accentBar: "from-cyan-500 to-emerald-400",
              features: ["Verimlilik Artışı", "Maliyet Optimizasyonu", "Pazar Genişletme"]
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm group animate-on-scroll"
            >
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.accentBar}`} />
              <div className={`w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed">{item.description}</p>
              <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
