"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, HelpCircle, Code2 } from 'lucide-react';

interface FAQSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const faqs = [
  {
    question: "Bursa yazılım firması olarak hangi hizmetleri sunuyorsunuz?",
    answer:
      "msduoyazilim olarak Bursa yazılım geliştirme, Bursa web tasarım, mobil uygulama geliştirme (iOS/Android), e-ticaret platformları, özel yönetim panelleri ve SAP, Logo, Mikro ERP entegrasyon çözümleri sunuyoruz. Bursa'daki işletmelere yerinde destek ve profesyonel yazılım mühendisliği sağlıyoruz.",
  },
  {
    question: "Bursa web sitesi ve özel yazılım maliyetleri ne kadar?",
    answer:
      "Fiyatlandırma; projenin mimarisine, sayfa sayısına, entegrasyon ihtiyaçlarına (ERP, ödeme, mobil API) ve tasarım kapsamına göre şeffaf bir şekilde belirlenir. İhtiyaç analizi sonrasında net bütçe ve aşamalı ödeme planı sunuyoruz. Ücretsiz teknik danışmanlık talep edebilirsiniz.",
  },
  {
    question: "Bursa yazılım geliştirme süreci nasıl işler?",
    answer:
      "Yazılım sürecimiz 4 adımdan oluşur: İhtiyaç analizi & mimari planlama, UI/UX tasarımı & sprint tabanlı temiz kod geliştirme, yük/güvenlik testleri, teslimat & 7/24 SLA desteği. Bursa'daki müşterilerimizle yüz yüze görüşerek şeffaf Git süreçleriyle projeleri yönetiyoruz.",
  },
  {
    question: "Bursa'da mobil uygulama geliştirme yapıyor musunuz?",
    answer:
      "Evet, Bursa yazılım ekibimiz iOS ve Android için React Native ve Flutter teknolojileriyle 60 FPS native performanslı mobil uygulamalar geliştiriyor. App Store ve Google Play mağaza yayını, push bildirimler ve ERP veri eşitlemesi uçtan uca sağlanır.",
  },
  {
    question: "Bursa yazılım firmanızın referansları nelerdir?",
    answer:
      "Bursa ve Türkiye genelinde 20+ başarılı canlı sistem teslim ettik. Kurumsal B2B portallar, üretim takip arayüzleri, yüksek trafikli e-ticaret siteleri ve ERP entegrasyonlarında güvenilir referanslara sahibiz.",
  },
  {
    question: "Bursa web tasarım projeleri ne kadar sürede tamamlanır?",
    answer:
      "Modern kurumsal web siteleri ortalama 2-3 hafta, kapsamlı e-ticaret ve ERP bağlantılı sistemler 4-8 hafta, büyük ölçekli özel yazılımlar ise aşamalı sprintlerle 2-4 ay arasında testleri tamamlanarak canlıya alınır.",
  },
];

export default function FAQSection({ scrollToSection }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 sm:px-6 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>&lt;Sıkça Sorulan Sorular /&gt;</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">
            Bursa Yazılım Hakkında Merak Edilenler
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Bursa yazılım geliştirme, web tasarım ve teknik süreçlerimiz hakkında detaylı bilgiler
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-400 shadow-xl shadow-blue-900/5'
                    : 'border-slate-200/90 hover:border-blue-300 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4.5 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 flex-shrink-0">
                      Q{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4 text-sm sm:text-base">Farklı bir teknik sorunuz veya projeniz mi var?</p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-slate-900 hover:bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 text-base"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>Mühendislerimizle Görüşün</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
