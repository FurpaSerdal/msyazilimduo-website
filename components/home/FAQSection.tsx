"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const faqs = [
  {
    question: "Bursa yazılım firması olarak hangi hizmetleri sunuyorsunuz?",
    answer:
      "msduoyazilim olarak Bursa yazılım geliştirme, Bursa web tasarım, mobil uygulama geliştirme, e-ticaret çözümleri ve özel yazılım projeleri sunuyoruz. Bursa'daki işletmelere yerel destek ve profesyonel çözümler sağlıyoruz.",
  },
  {
    question: "Bursa web sitesi maliyetleri ne kadar?",
    answer:
      "Bursa web sitesi fiyatları projenin kapsamına göre değişir. Basit kurumsal web siteleri için uygun fiyatlarla başlıyoruz. Bursa web tasarım hizmetlerimiz için ücretsiz danışmanlık alabilirsiniz.",
  },
  {
    question: "Bursa yazılım geliştirme süreci nasıl işler?",
    answer:
      "Bursa yazılım geliştirme sürecimiz 4 aşamadan oluşur: İhtiyaç analizi, tasarım & geliştirme, test & iyileştirme, teslim & destek. Bursa'daki müşterilerimizle yüz yüze görüşerek projeleri yönetiyoruz.",
  },
  {
    question: "Bursa'da mobil uygulama geliştirme yapıyor musunuz?",
    answer:
      "Evet, Bursa yazılım ekibimiz iOS ve Android için mobil uygulama geliştirme hizmeti sunuyor. React Native ve Flutter teknolojileriyle çapraz platform uygulamalar geliştiriyoruz.",
  },
  {
    question: "Bursa yazılım firmanızın referansları nelerdir?",
    answer:
      "Bursa'da 20+ başarılı proje tamamladık. Kurumsal web siteleri, e-ticaret platformları ve özel yazılım projeleri geliştirdik. Bursa yazılım sektöründe güvenilir referanslarımız var.",
  },
  {
    question: "Bursa web tasarım projeleri ne kadar sürede tamamlanır?",
    answer:
      "Bursa web tasarım projelerinin süresi projenin kapsamına bağlı. Basit web siteleri 2-3 hafta, e-ticaret siteleri 4-8 hafta, özel yazılım projeleri ise 2-6 ay sürebilir. Bursa yazılım ekibimiz hızlı teslimat yapar.",
  },
];

export default function FAQSection({ scrollToSection }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 sm:px-6 relative z-10 bg-gradient-to-b from-white via-blue-50/15 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Merak Edilenler
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Hakkında Sık Sorulan Sorular</h2>
          <p className="text-gray-600 text-lg">
            Bursa yazılım geliştirme ve web tasarım hizmetlerimiz hakkında merak edilenler
          </p>
        </motion.div>

        <div className="space-y-3">
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
                    ? 'border-blue-300 shadow-lg shadow-blue-500/5'
                    : 'border-gray-200/90 hover:border-blue-200 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
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
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
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
          className="mt-10 text-center"
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">Bursa yazılım hizmetlerimiz hakkında başka sorularınız mı var?</p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 text-base min-h-[48px] min-w-[200px] justify-center sm:min-w-auto"
          >
            <span>Bize Ulaşın</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
