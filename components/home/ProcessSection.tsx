"use client";

import { motion } from 'framer-motion';
import { Target, Code2, CheckCircle, ShieldCheck } from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Analiz & Planlama",
    desc: "İhtiyaç analizi, teknik mimari ve net yol haritası",
    icon: Target,
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    step: "02",
    title: "Tasarım & Geliştirme",
    desc: "Modern UI/UX tasarımı ve temiz kod geliştirme",
    icon: Code2,
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    step: "03",
    title: "Test & İyileştirme",
    desc: "Performans, güvenlik testleri ve kalite kontrol",
    icon: CheckCircle,
    gradient: "from-purple-600 to-cyan-600",
  },
  {
    step: "04",
    title: "Teslim & Destek",
    desc: "Canlıya alma, eğitim ve sürekli teknik destek",
    icon: ShieldCheck,
    gradient: "from-cyan-600 to-emerald-600",
  },
];

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
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-100 px-3.5 py-1 rounded-full mb-3">
            4 Adımda Teslimat
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Geliştirme Sürecimiz</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            <strong>Bursa yazılım</strong> projelerinizde şeffaf, planlı ve ölçülebilir çalışma süreci
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-emerald-200 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 text-[11px] font-bold bg-slate-900 text-white rounded-full shadow">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
