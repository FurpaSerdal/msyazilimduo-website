"use client";

import { motion } from 'framer-motion';
import { Mail, MailCheck, PhoneCall, MapPin, CheckCircle, ArrowRight, Terminal, ShieldCheck, Cpu } from 'lucide-react';

interface ContactSectionProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
}

export default function ContactSection({ onSubmit, isSubmitting }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-slate-900 text-white relative z-10 overflow-hidden border-t border-slate-800">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b30_1px,transparent_1px),linear-gradient(to_bottom,#1e293b30_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>&lt;İletişim &amp; Teknik Danışmanlık /&gt;</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white tracking-tight">
            Bursa Yazılım Firmasına Ulaşın
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            <strong>Bursa web</strong>, mobil ve özel yazılım projeleriniz için ücretsiz teknik analiz — hemen iletişime geçin
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info & Dev Badges */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Mühendislik İletişim Kanalları</h3>
              <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                RESPONSE: &lt; 24h
              </span>
            </div>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <MailCheck className="w-5 h-5 text-cyan-400" />,
                  title: "Kurumsal E-posta",
                  info: "info@msduoyazilim.com",
                  action: "mailto:info@msduoyazilim.com",
                  tag: "DIRECT_INBOX",
                  color: "from-slate-800/90 to-slate-850/80 hover:border-cyan-500/50"
                },
                {
                  icon: <PhoneCall className="w-5 h-5 text-emerald-400" />,
                  title: "Teknik Destek & Telefon",
                  info: "+90 (535) 529 75 08",
                  action: "tel:+905355297508",
                  tag: "HOTLINE",
                  color: "from-slate-800/90 to-slate-850/80 hover:border-emerald-500/50"
                },
                {
                  icon: <MapPin className="w-5 h-5 text-purple-400" />,
                  title: "Ar-Ge & Proje Merkezi",
                  info: "Bursa, Türkiye (Yüz Yüze Görüşme)",
                  action: "https://maps.google.com/?q=Bursa",
                  tag: "HQ_LOCATION",
                  color: "from-slate-800/90 to-slate-850/80 hover:border-purple-500/50"
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.action}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start justify-between gap-4 group p-4.5 rounded-2xl transition-all duration-300 bg-slate-950/70 border border-slate-800 ${contact.color} hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-950/20`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-700/80 rounded-xl flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{contact.title}</h4>
                      <p className="text-slate-300 font-mono text-sm mt-0.5">{contact.info}</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors hidden sm:inline">
                    {contact.tag}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bursa Özel Bilgi Kartı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-950 to-blue-950/60 rounded-2xl p-6 border border-cyan-500/25 shadow-xl"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h4 className="font-bold text-white text-lg">Bursa&apos;da Neden msduoyazilim?</h4>
              </div>
              <ul className="space-y-3">
                {[
                  "Bursa merkezli yerel ekip ile ofisinizde yüz yüze teknik planlama",
                  "Bölge sanayi ve ticaret dinamiklerine özel kurumsal yazılım mimarisi",
                  "Garantili SLA, kesintisiz bakım ve hızlı teknik acil destek",
                  "Bursa ve Türkiye genelinde 20+ başarıyla tamamlanmış canlı sistem"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Form Terminal Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/90" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
              </div>
              <span className="font-mono text-xs text-slate-400">new-project-request.ts</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Projenizi Anlatın</h3>
                  <p className="text-slate-400 text-xs sm:text-sm">Mühendislerimiz 24 saat içinde analizle geri döner</p>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                      Ad Soyad <span className="text-rose-400">*</span>
                    </label>
                    <input
                      name="name"
                      placeholder="İsminiz"
                      required
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                      E-posta <span className="text-rose-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="ornek@sirketiniz.com"
                      required
                      className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                    Şirket / Proje Adı
                  </label>
                  <input
                    name="company"
                    placeholder="Şirket adınız (Bursa)"
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium mb-1.5 text-slate-300">
                    Proje Özeti &amp; İhtiyaçlar <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Hedefleriniz, istediğiniz teknolojiler veya entegrasyonlar hakkında bilgi verin..."
                    required
                    rows={4}
                    className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none text-sm"
                  />
                </div>

                <input type="hidden" name="location" value="Bursa" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed border border-cyan-400/30"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>İletiliyor...</span>
                    </>
                  ) : (
                    <>
                      <Terminal className="w-4 h-4 text-cyan-200" />
                      <span>Ücretsiz Proje Analizi İste</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
