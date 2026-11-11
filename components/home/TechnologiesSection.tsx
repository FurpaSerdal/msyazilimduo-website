"use client";

import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Cloud } from 'lucide-react';

const techGroups = [
  {
    title: "Frontend & Arayüz",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    border: "hover:border-blue-300",
    items: [
      { name: "React / Next.js", dot: "bg-blue-500" },
      { name: "TypeScript", dot: "bg-indigo-500" },
      { name: "Tailwind CSS", dot: "bg-cyan-500" },
      { name: "Vue.js & Angular", dot: "bg-emerald-500" },
    ],
  },
  {
    title: "Backend & API",
    icon: Server,
    gradient: "from-indigo-500 to-purple-600",
    border: "hover:border-indigo-300",
    items: [
      { name: "Node.js", dot: "bg-emerald-500" },
      { name: ".NET Core", dot: "bg-purple-500" },
      { name: "Python", dot: "bg-amber-500" },
      { name: "Laravel", dot: "bg-rose-500" },
    ],
  },
  {
    title: "Mobil & E-Ticaret",
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-600",
    border: "hover:border-purple-300",
    items: [
      { name: "React Native", dot: "bg-indigo-500" },
      { name: "Flutter", dot: "bg-sky-500" },
      { name: "Shopify", dot: "bg-emerald-500" },
      { name: "WordPress", dot: "bg-slate-600" },
    ],
  },
  {
    title: "Bulut & Veritabanı",
    icon: Cloud,
    gradient: "from-emerald-500 to-teal-600",
    border: "hover:border-emerald-300",
    items: [
      { name: "PostgreSQL", dot: "bg-blue-600" },
      { name: "MongoDB", dot: "bg-emerald-600" },
      { name: "Docker", dot: "bg-cyan-600" },
      { name: "AWS & Azure", dot: "bg-orange-500" },
    ],
  },
];

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/20 to-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-100 px-3.5 py-1 rounded-full mb-3">
            Modern Teknoloji Yığını
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Teknolojilerimiz</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            <strong>Bursa yazılım geliştirme</strong> süreçlerinde kullandığımız güncel, hızlı ve ölçeklenebilir teknolojiler
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`bg-white rounded-2xl p-6 border border-gray-200/90 ${group.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-md`}>
                  <group.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">{group.title}</h3>
              </div>

              <div className="space-y-2.5">
                {group.items.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-gray-50/80 border border-gray-100 hover:bg-blue-50/50 hover:border-blue-100 transition-colors"
                  >
                    <span className={`w-2 h-2 rounded-full ${tech.dot} flex-shrink-0`} />
                    <span className="font-medium text-sm text-gray-800">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
