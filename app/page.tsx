import HomeClient from "@/components/home/HomeClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Bursa yazılım firması olarak hangi hizmetleri sunuyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MSYazılımDuo (msduoyazilim) olarak Bursa yazılım geliştirme, Bursa web tasarım, mobil uygulama geliştirme, e-ticaret çözümleri ve özel yazılım projeleri sunuyoruz. Bursa'daki işletmelere yerel destek ve profesyonel çözümler sağlıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Bursa web sitesi maliyetleri ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bursa web sitesi fiyatları projenin kapsamına göre değişir. Kurumsal web siteleri, e-ticaret ve özel yazılım projeleri için ücretsiz danışmanlık ve teklif alabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Bursa yazılım geliştirme süreci nasıl işler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bursa yazılım geliştirme sürecimiz 4 aşamadan oluşur: İhtiyaç analizi, tasarım & geliştirme, test & iyileştirme, teslim & destek. Bursa'daki müşterilerimizle yüz yüze görüşerek projeleri yönetiyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Bursa'da mobil uygulama geliştirme yapıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, Bursa yazılım ekibimiz iOS ve Android için mobil uygulama geliştirme hizmeti sunuyor. React Native ve Flutter teknolojileriyle çapraz platform uygulamalar geliştiriyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Bursa yazılım firmanızın referansları nelerdir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bursa'da 20+ başarılı proje tamamladık. Kurumsal web siteleri, e-ticaret platformları ve özel yazılım projeleri geliştirdik.",
      },
    },
    {
      "@type": "Question",
      name: "Bursa web tasarım projeleri ne kadar sürede tamamlanır?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basit web siteleri 2-3 hafta, e-ticaret siteleri 4-8 hafta, özel yazılım projeleri ise kapsama göre 2-6 ay arasında tamamlanır.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
