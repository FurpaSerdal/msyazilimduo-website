"use client";

import { useState, useEffect } from 'react';

// Components
import Navigation from '@/components/layout/Navigation';
import Notification from '@/components/ui/Notification';
import FloatingButtons from '@/components/ui/FloatingButtons';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import TechnologiesSection from '@/components/home/TechnologiesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ContactSection from '@/components/home/ContactSection';
import FAQSection from '@/components/home/FAQSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll ve section takibi
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'technologies', 'process', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Form submit handler
  async function submit(e: any) {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          company: form.company.value,
          message: form.message.value,
          location: "Bursa",
          source: "msduoyazilim.com"
        }),
      });

      if (!res.ok) throw new Error("Email gönderilemedi");

      setNotification({
        type: 'success',
        message: "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."
      });

      form.reset();
      setTimeout(() => setNotification(null), 5000);
    } catch (error) {
      setNotification({
        type: 'error',
        message: "Bir hata oluştu, lütfen tekrar deneyin!"
      });
      setTimeout(() => setNotification(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  const sendWhatsAppMessage = () => {
    const message = whatsappMessage || 'Merhaba, MSYazılımDuo hakkında bilgi almak istiyorum.';
    const phoneNumber = '905355297508';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setShowWhatsappModal(false);
    setWhatsappMessage('');
  };

  // Scroll to section - mobil ve masaüstü uyumlu
  const scrollToSection = (sectionId: string) => {
    setShowWhatsappModal(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Dinamik navbar yüksekliğini hesapla
        const navBar = document.querySelector('nav');
        const navHeight = navBar ? navBar.offsetHeight : 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight - 10; // 10px extra padding
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  // Add JSON-LD for SEO
  useEffect(() => {
    // Organization Schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "MSYazılımDuo",
      "description": "Bursa'nın önde gelen yazılım geliştirme şirketi. Web ve mobil uygulama geliştirme, e-ticaret çözümleri.",
      "image": "https://msduoyazilim.com/icon-512.png",
      "@id": "https://msduoyazilim.com",
      "url": "https://msduoyazilim.com",
      "telephone": "+90-535-529-7508",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bursa",
        "addressRegion": "TR-16",
        "addressCountry": "TR",
        "streetAddress": "Bursa, Türkiye"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.1885,
        "longitude": 29.0610
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://facebook.com/msduoyazilim",
        "https://instagram.com/msduoyazilim",
        "https://linkedin.com/company/msduoyazilim"
      ]
    });
    document.head.appendChild(orgScript);

    // FAQ Schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Bursa yazılım firması olarak hangi hizmetleri sunuyorsunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MSYazılımDuo olarak Bursa yazılım geliştirme, Bursa web tasarım, mobil uygulama geliştirme, e-ticaret çözümleri ve özel yazılım projeleri sunuyoruz. Bursa'daki işletmelere yerel destek ve profesyonel çözümler sağlıyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Bursa web sitesi maliyetleri ne kadar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bursa web sitesi fiyatları projenin kapsamına göre değişir. Basit kurumsal web siteleri için uygun fiyatlarla başlıyoruz. Bursa web tasarım hizmetlerimiz için ücretsiz danışmanlık alabilirsiniz."
          }
        },
        {
          "@type": "Question",
          "name": "Bursa yazılım geliştirme süreci nasıl işler?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bursa yazılım geliştirme sürecimiz 4 aşamadan oluşur: İhtiyaç analizi, tasarım & geliştirme, test & iyileştirme, teslim & destek. Bursa'daki müşterilerimizle yüz yüze görüşerek projeleri yönetiyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Bursa'da mobil uygulama geliştirme yapıyor musunuz?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, Bursa yazılım ekibimiz iOS ve Android için mobil uygulama geliştirme hizmeti sunuyor. React Native ve Flutter teknolojileriyle çapraz platform uygulamalar geliştiriyoruz."
          }
        },
        {
          "@type": "Question",
          "name": "Bursa yazılım firmanızın referansları nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bursa'da 20+ başarılı proje tamamladık. Kurumsal web siteleri, e-ticaret platformları ve özel yazılım projeleri geliştirdik. Bursa yazılım sektöründe güvenilir referanslarımız var."
          }
        },
        {
          "@type": "Question",
          "name": "Bursa web tasarım projeleri ne kadar sürede tamamlanır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bursa web tasarım projelerinin süresi projenin kapsamına bağlı. Basit web siteleri 2-3 hafta, e-ticaret siteleri 4-8 hafta, özel yazılım projeleri ise 2-6 ay sürebilir. Bursa yazılım ekibimiz hızlı teslimat yapar."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    return () => {
      if (orgScript.parentNode) {
        orgScript.parentNode.removeChild(orgScript);
      }
      if (faqScript.parentNode) {
        faqScript.parentNode.removeChild(faqScript);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden" suppressHydrationWarning>
      {/* Notification */}
      <Notification notification={notification} onClose={() => setNotification(null)} />

      {/* Enhanced Background Patterns */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 via-purple-100/10 to-pink-100/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/20 via-blue-100/10 to-indigo-100/10 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f01c_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f01c_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-400/20 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-cyan-400/20 rounded-full animate-float animation-delay-2000"></div>
      </div>

      {/* Floating Contact Buttons */}
      <FloatingButtons
        showWhatsappModal={showWhatsappModal}
        whatsappMessage={whatsappMessage}
        setWhatsappMessage={setWhatsappMessage}
        setShowWhatsappModal={setShowWhatsappModal}
        sendWhatsAppMessage={sendWhatsAppMessage}
      />

      {/* Navigation */}
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} setShowWhatsappModal={setShowWhatsappModal} />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection scrollToSection={scrollToSection} />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Contact Section */}
      <ContactSection onSubmit={submit} isSubmitting={isSubmitting} />

      {/* FAQ Section */}
      <FAQSection scrollToSection={scrollToSection} />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} setShowWhatsappModal={setShowWhatsappModal} />

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </main>
  );
}
