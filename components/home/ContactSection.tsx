"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MailCheck, PhoneCall, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

export default function ContactSection({ onSubmit, isSubmitting }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-blue-50/10 to-white relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Bursa Yazılım Firmasına Ulaşın</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            <strong>Bursa web</strong> ve yazılım projeleri için ücretsiz danışmanlık - hemen iletişime geçin
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">İletişim Bilgilerimiz</h3>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <MailCheck className="w-5 h-5 text-blue-600" />,
                  title: "Email Adresimiz",
                  info: "info@msduoyazilim.com",
                  action: "mailto:info@msduoyazilim.com",
                  color: "from-blue-50 to-blue-100"
                },
                {
                  icon: <PhoneCall className="w-5 h-5 text-green-600" />,
                  title: "Telefon Numaramız",
                  info: "+90 (535) 529 75 08",
                  action: "tel:+905355297508",
                  color: "from-green-50 to-green-100"
                },
                {
                  icon: <MapPin className="w-5 h-5 text-purple-600" />,
                  title: "Konumumuz",
                  info: "Bursa, Türkiye",
                  action: "https://maps.google.com/?q=Bursa",
                  color: "from-purple-50 to-purple-100"
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.action}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-4 group p-4 rounded-xl hover:shadow-lg transition-all duration-300 bg-gradient-to-r ${contact.color} border border-transparent hover:border-blue-200 animate-on-scroll`}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{contact.title}</h4>
                    <p className="text-gray-600 mt-1">{contact.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bursa Özel Bilgi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-lg"
            >
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Bursa'da Neden Biz?</h4>
              <ul className="space-y-3">
                {[
                  "Bursa merkezli yerel ekip ve yüz yüze görüşme imkanı",
                  "Bölge tecrübesi ile işletmenize özel çözümler",
                  "Hızlı destek ve acil servis hizmeti",
                  "Bursa'daki referanslarımız ile güven"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Projenizi Anlatın</h3>
                <p className="text-gray-600 text-sm">24 saat içinde dönüş yapıyoruz</p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Ad Soyad *</label>
                  <input
                    name="name"
                    placeholder="İsminiz"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 text-base sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 text-base sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Şirket/Proje Adı</label>
                <input
                  name="company"
                  placeholder="Şirket adınız (Bursa)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 sm:py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 text-base sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Proje Detayları *</label>
                <textarea
                  name="message"
                  placeholder="Projeniz hakkında detaylı bilgi verin..."
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:border-gray-400 resize-none text-base sm:text-sm"
                />
              </div>

              <input type="hidden" name="location" value="Bursa" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3.5 sm:py-3 rounded-lg font-semibold hover:shadow-xl active:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed min-h-[48px]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <span>Ücretsiz Danışmanlık İste</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
