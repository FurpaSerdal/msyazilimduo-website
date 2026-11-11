"use client";

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { MotionConfig } from 'framer-motion';

// Above-the-fold components
import Navigation from '@/components/layout/Navigation';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';

// Below-the-fold lazy-loaded components
const TechnologiesSection = dynamic(() => import('@/components/home/TechnologiesSection'));
const ProcessSection = dynamic(() => import('@/components/home/ProcessSection'));
const ContactSection = dynamic(() => import('@/components/home/ContactSection'));
const FAQSection = dynamic(() => import('@/components/home/FAQSection'));
const Footer = dynamic(() => import('@/components/home/Footer'));
const FloatingButtons = dynamic(() => import('@/components/ui/FloatingButtons'), { ssr: false });
const Notification = dynamic(() => import('@/components/ui/Notification'), { ssr: false });

const SECTION_IDS = ['home', 'about', 'services', 'technologies', 'process', 'contact'];

export default function HomeClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState('');
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showWhatsappModal, setShowWhatsappModal] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // IntersectionObserver ile layout thrashing olmadan aktif bölüm takibi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  // Form submit handler
  const submit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
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
    } catch {
      setNotification({
        type: 'error',
        message: "Bir hata oluştu, lütfen tekrar deneyin!"
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification(null), 5000);
    }
  }, []);

  const sendWhatsAppMessage = useCallback(() => {
    const message = whatsappMessage || 'Merhaba, msduoyazilim hakkında bilgi almak istiyorum.';
    const phoneNumber = '905355297508';
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setShowWhatsappModal(false);
    setWhatsappMessage('');
  }, [whatsappMessage]);

  const scrollToSection = useCallback((sectionId: string) => {
    setShowWhatsappModal(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navBar = document.querySelector('nav');
        const navHeight = navBar ? navBar.offsetHeight : 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight - 10;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 50);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/20 to-white relative overflow-hidden" suppressHydrationWarning>
        {notification && (
          <Notification notification={notification} onClose={() => setNotification(null)} />
        )}

        {/* Background Patterns */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 via-purple-100/10 to-pink-100/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/20 via-blue-100/10 to-indigo-100/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f01c_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f01c_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <FloatingButtons
          showWhatsappModal={showWhatsappModal}
          whatsappMessage={whatsappMessage}
          setWhatsappMessage={setWhatsappMessage}
          setShowWhatsappModal={setShowWhatsappModal}
          sendWhatsAppMessage={sendWhatsAppMessage}
        />

        <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

        <HeroSection scrollToSection={scrollToSection} setShowWhatsappModal={setShowWhatsappModal} />

        <AboutSection />

        <ServicesSection scrollToSection={scrollToSection} />

        <TechnologiesSection />

        <ProcessSection />

        <ContactSection onSubmit={submit} isSubmitting={isSubmitting} />

        <FAQSection scrollToSection={scrollToSection} />

        <Footer scrollToSection={scrollToSection} setShowWhatsappModal={setShowWhatsappModal} />
      </main>
    </MotionConfig>
  );
}
