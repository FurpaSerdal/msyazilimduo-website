"use client";

import { motion } from 'framer-motion';
import { Target, Code2, CheckCircle, ShieldCheck } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Geliştirme Sürecimiz</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            <strong>Bursa yazılım</strong> projelerinizde şeffaf ve profesyonel çalışma süreci
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              step: "1",
              title: "Analiz & Planlama",
              desc: "İhtiyaç analizi ve proje planlaması",
              icon: <Target className="w-5 h-5" />
            },
            {
              step: "2",
              title: "Tasarım & Geliştirme",
              desc: "UI/UX tasarımı ve kodlama süreci",
              icon: <Code2 className="w-5 h-5" />
            },
            {
              step: "3",
              title: "Test & İyileştirme",
              desc: "Kapsamlı testler ve iyileştirmeler",
              icon: <CheckCircle className="w-5 h-5" />
            },
            {
              step: "4",
              title: "Teslim & Destek",
              desc: "Proje teslimi ve sürekli destek",
              icon: <ShieldCheck className="w-5 h-5" />
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center text-lg sm:text-2xl font-bold mx-auto relative z-10 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {item.step}
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
