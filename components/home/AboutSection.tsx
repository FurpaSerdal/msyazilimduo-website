"use client";

import { motion } from 'framer-motion';
import { Target, Award, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Firması Olarak Avantajlarımız</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            <strong>Bursa yazılım geliştirme</strong> alanında uzman ekibimiz, yerel işletmelere profesyonel çözümler sunuyor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-6 h-6 text-white" />,
              title: "Bursa Odaklı",
              description: "Bursa'daki işletmelerin ihtiyaçlarını anlayan, yerel tecrübeye sahip ekip.",
              gradient: "from-blue-500 to-blue-600",
              features: ["Yerel Pazar Bilgisi", "Yüz Yüze İletişim", "Bölgesel İşbirliği"]
            },
            {
              icon: <Award className="w-6 h-6 text-white" />,
              title: "Kalite Garantisi",
              description: "En iyi yazılım pratikleriyle test edilmiş, yüksek kaliteli kod.",
              gradient: "from-indigo-500 to-indigo-600",
              features: ["Kod Kalitesi", "Test Süreçleri", "Performans Optimizasyonu"]
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-white" />,
              title: "İş Büyütme",
              description: "Yazılım çözümlerimizle işinizi büyütün ve verimliliğinizi artırın.",
              gradient: "from-cyan-500 to-cyan-600",
              features: ["Verimlilik Artışı", "Maliyet Optimizasyonu", "Pazar Genişletme"]
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-xl shadow-lg group animate-on-scroll"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
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
