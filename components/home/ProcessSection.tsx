"use client";

import { motion } from 'framer-motion';
import { Target, Code2, CheckCircle, ShieldCheck, GitBranch } from 'lucide-react';

const processSteps = [
  {
    step: "01",
    branch: "feat/architecture",
    cmd: "$ msduo analyze --requirements",
    title: "Analiz & Planlama",
    desc: "İhtiyaç analizi, veritabanı & sistem mimarisi tasarımı ve teknik yol haritası",
    icon: Target,
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    step: "02",
    branch: "feat/clean-code",
    cmd: "$ msduo build --ui-ux --api",
    title: "Tasarım & Geliştirme",
    desc: "Modern UI/UX arayüz tasarımı, çevik sprintler ve tip güvenli temiz kod geliştirme",
    icon: Code2,
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    step: "03",
    branch: "test/qa-pipeline",
    cmd: "$ msduo test --security --perf",
    title: "Test & İyileştirme",
    desc: "Yük & performans testleri, siber güvenlik kontrolleri ve Lighthouse optimizasyonu",
    icon: CheckCircle,
    gradient: "from-purple-600 to-cyan-600",
  },
  {
    step: "04",
    branch: "release/v1.0-live",
    cmd: "$ msduo deploy --prod --sla",
    title: "Teslim & Destek",
    desc: "CI/CD ile kesintisiz canlıya alma, ekip eğitimi ve 7/24 teknik bakım desteği",
    icon: ShieldCheck,
    gradient: "from-cyan-600 to-emerald-600",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 bg-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <GitBranch className="w-3.5 h-3.5 text-purple-600" />
            <span>&lt;Agile &amp; DevOps Yaşam Döngüsü /&gt;</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Bursa Yazılım Geliştirme Sürecimiz
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mx-auto">
            <strong>Bursa yazılım</strong> projelerinizde şeffaf, Git versiyon kontrollü ve ölçülebilir mühendislik süreci
          </p>
        </motion.div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-20 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-300 via-indigo-300 to-emerald-300 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {processSteps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-400 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
                      <GitBranch className="w-3 h-3" />
                      {item.branch}
                    </span>
                    <span className="font-mono text-xs font-bold bg-slate-900 text-cyan-400 px-2.5 py-1 rounded-md">
                      #{item.step}
                    </span>
                  </div>

                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform`}>
                    <item.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{item.desc}</p>
                </div>

                <div className="px-3 py-2 rounded-lg bg-slate-950 text-cyan-300 font-mono text-[11px] truncate border border-slate-800">
                  {item.cmd}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
