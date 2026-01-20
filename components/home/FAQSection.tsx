"use client";

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface FAQSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function FAQSection({ scrollToSection }: FAQSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 relative z-10 bg-gradient-to-b from-white via-blue-50/10 to-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Hakkında Sık Sorulan Sorular</h2>
          <p className="text-gray-600 text-lg">
            Bursa yazılım geliştirme ve web tasarım hizmetlerimiz hakkında merak edilenler
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              question: "Bursa yazılım firması olarak hangi hizmetleri sunuyorsunuz?",
              answer: "MSYazılımDuo olarak Bursa yazılım geliştirme, Bursa web tasarım, mobil uygulama geliştirme, e-ticaret çözümleri ve özel yazılım projeleri sunuyoruz. Bursa'daki işletmelere yerel destek ve profesyonel çözümler sağlıyoruz."
            },
            {
              question: "Bursa web sitesi maliyetleri ne kadar?",
              answer: "Bursa web sitesi fiyatları projenin kapsamına göre değişir. Basit kurumsal web siteleri için uygun fiyatlarla başlıyoruz. Bursa web tasarım hizmetlerimiz için ücretsiz danışmanlık alabilirsiniz."
            },
            {
              question: "Bursa yazılım geliştirme süreci nasıl işler?",
              answer: "Bursa yazılım geliştirme sürecimiz 4 aşamadan oluşur: İhtiyaç analizi, tasarım & geliştirme, test & iyileştirme, teslim & destek. Bursa'daki müşterilerimizle yüz yüze görüşerek projeleri yönetiyoruz."
            },
            {
              question: "Bursa'da mobil uygulama geliştirme yapıyor musunuz?",
              answer: "Evet, Bursa yazılım ekibimiz iOS ve Android için mobil uygulama geliştirme hizmeti sunuyor. React Native ve Flutter teknolojileriyle çapraz platform uygulamalar geliştiriyoruz."
            },
            {
              question: "Bursa yazılım firmanızın referansları nelerdir?",
              answer: "Bursa'da 20+ başarılı proje tamamladık. Kurumsal web siteleri, e-ticaret platformları ve özel yazılım projeleri geliştirdik. Bursa yazılım sektöründe güvenilir referanslarımız var."
            },
            {
              question: "Bursa web tasarım projeleri ne kadar sürede tamamlanır?",
              answer: "Bursa web tasarım projelerinin süresi projenin kapsamına bağlı. Basit web siteleri 2-3 hafta, e-ticaret siteleri 4-8 hafta, özel yazılım projeleri ise 2-6 ay sürebilir. Bursa yazılım ekibimiz hızlı teslimat yapar."
            }
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                <span className="text-blue-600 text-lg sm:text-xl flex-shrink-0">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <div className="flex items-start gap-3 pl-6 sm:pl-8">
                <span className="text-green-600 text-lg sm:text-xl font-bold flex-shrink-0">A:</span>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
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
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3.5 sm:py-3 rounded-xl font-semibold hover:shadow-lg active:shadow-lg transition-all duration-300 inline-flex items-center gap-2 text-base min-h-[48px] min-w-[200px] justify-center sm:min-w-auto"
          >
            <span>Bize Ulaşın</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
