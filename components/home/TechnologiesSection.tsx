"use client";

import { motion } from 'framer-motion';
import { Code2, Server, Smartphone, Cloud, Cpu, ArrowRight } from 'lucide-react';

const techGroups = [
  {
    code: "LAYER_01 // UI_UX",
    title: "Frontend & Arayüz",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-600",
    border: "hover:border-cyan-500/50",
    items: [
      { name: "React / Next.js", badge: "App Router", dot: "bg-cyan-400" },
      { name: "TypeScript", badge: "Strict", dot: "bg-blue-400" },
      { name: "Tailwind CSS", badge: "Design Sys", dot: "bg-sky-400" },
      { name: "Vue.js & Angular", badge: "SPA", dot: "bg-emerald-400" },
    ],
  },
  {
    code: "LAYER_02 // CORE_API",
    title: "Backend & API",
    icon: Server,
    gradient: "from-blue-600 to-indigo-600",
    border: "hover:border-indigo-500/50",
    items: [
      { name: "Node.js", badge: "REST/GraphQL", dot: "bg-emerald-400" },
      { name: ".NET Core", badge: "Enterprise", dot: "bg-purple-400" },
      { name: "Python", badge: "Data/AI", dot: "bg-amber-400" },
      { name: "Laravel", badge: "MVC/API", dot: "bg-rose-400" },
    ],
  },
  {
    code: "LAYER_03 // MOBILE_COMMERCE",
    title: "Mobil & E-Ticaret",
    icon: Smartphone,
    gradient: "from-indigo-500 to-purple-600",
    border: "hover:border-purple-500/50",
    items: [
      { name: "React Native", badge: "iOS/Android", dot: "bg-indigo-400" },
      { name: "Flutter", badge: "60fps UI", dot: "bg-sky-400" },
      { name: "Shopify & B2B", badge: "Headless", dot: "bg-emerald-400" },
      { name: "WordPress", badge: "Custom CMS", dot: "bg-slate-400" },
    ],
  },
  {
    code: "LAYER_04 // CLOUD_DB",
    title: "Bulut & Veritabanı",
    icon: Cloud,
    gradient: "from-emerald-500 to-teal-600",
    border: "hover:border-emerald-500/50",
    items: [
      { name: "PostgreSQL", badge: "ACID SQL", dot: "bg-blue-400" },
      { name: "MongoDB", badge: "NoSQL", dot: "bg-emerald-400" },
      { name: "Docker", badge: "Container", dot: "bg-cyan-400" },
      { name: "AWS & Azure", badge: "Cloud SLA", dot: "bg-amber-400" },
    ],
  },
];

export default function TechnologiesSection() {
  return (
    <section
      id="technologies"
      className="py-20 px-4 sm:px-6 bg-[#060A14] text-white relative z-10 overflow-hidden border-y border-slate-800/80"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b35_1px,transparent_1px),linear-gradient(to_bottom,#1e293b35_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>&lt;Modern Teknoloji Yığını /&gt;</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white tracking-tight">
            Bursa Yazılım Teknolojilerimiz
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            <strong className="text-white">Bursa yazılım geliştirme</strong> süreçlerinde kullandığımız güncel, tip güvenli ve yüksek ölçeklenebilir teknolojiler
          </p>
        </motion.div>

        {/* System Architecture Flow Bar */}
        <div className="mb-10 rounded-2xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-center lg:text-left">
            <span className="font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              SYSTEM_PIPELINE //
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-cyan-500/30 text-cyan-300">
                [01] Client (Web &amp; Mobile)
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:inline" />
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-blue-500/30 text-blue-300">
                [02] API Gateway (Node / .NET)
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:inline" />
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-indigo-500/30 text-indigo-300">
                [03] ERP &amp; İş Katmanı
              </span>
              <ArrowRight className="w-4 h-4 text-slate-500 hidden sm:inline" />
              <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-emerald-500/30 text-emerald-300">
                [04] Cloud &amp; DB Cluster
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`bg-slate-900/85 backdrop-blur-md rounded-2xl p-6 border border-slate-800 ${group.border} shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="font-mono text-[10px] text-slate-400 mb-3">{group.code}</div>
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center shadow-lg`}>
                  <group.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white text-base">{group.title}</h3>
              </div>

              <div className="space-y-2.5">
                {group.items.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800/90 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`w-2 h-2 rounded-full ${tech.dot} flex-shrink-0`} />
                      <span className="font-medium text-sm text-slate-100 truncate">{tech.name}</span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 flex-shrink-0">
                      {tech.badge}
                    </span>
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
