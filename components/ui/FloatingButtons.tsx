"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Send, Zap, X } from 'lucide-react';

interface FloatingButtonsProps {
  showWhatsappModal: boolean;
  whatsappMessage: string;
  setWhatsappMessage: (message: string) => void;
  setShowWhatsappModal: (show: boolean) => void;
  sendWhatsAppMessage: () => void;
}

export default function FloatingButtons({
  showWhatsappModal,
  whatsappMessage,
  setWhatsappMessage,
  setShowWhatsappModal,
  sendWhatsAppMessage
}: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {showWhatsappModal && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-5 w-80 border border-gray-200/80 mb-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5 text-white stroke-[2.25]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-sm">Hızlı Mesaj</h3>
                  <p className="text-gray-500 text-xs font-medium">WhatsApp ile anında iletişim</p>
                </div>
                <button
                  onClick={() => setShowWhatsappModal(false)}
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Kapat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <textarea
                value={whatsappMessage}
                onChange={(e) => setWhatsappMessage(e.target.value)}
                placeholder="Projeniz hakkında kısaca bilgi verin..."
                className="w-full border border-gray-200 rounded-xl p-3 mb-3.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-sm bg-gray-50 placeholder-gray-400"
                rows={3}
              />

              <button
                onClick={sendWhatsAppMessage}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] hover:from-emerald-600 hover:to-green-700"
              >
                <Send className="w-4 h-4" />
                <span>WhatsApp&apos;tan Gönder</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setShowWhatsappModal(!showWhatsappModal)}
          className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-3.5 rounded-2xl shadow-xl shadow-emerald-600/25 hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative min-h-[52px] min-w-[52px]"
          aria-label="WhatsApp ile iletişim"
        >
          <MessageCircle className="w-6 h-6 stroke-[2.25]" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </span>
        </motion.button>

        {/* Phone Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          href="tel:+905355297508"
          className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-3.5 rounded-2xl shadow-xl shadow-blue-600/25 hover:shadow-2xl transition-all duration-300 flex items-center justify-center min-h-[52px] min-w-[52px] group"
          aria-label="Telefon ile ara"
        >
          <Phone className="w-6 h-6 stroke-[2.25] group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* Quick Contact Badge */}
        <div className="text-[11px] bg-white/95 backdrop-blur-md rounded-full px-3 py-1 shadow-md text-gray-700 font-semibold border border-gray-200/80 whitespace-nowrap flex items-center gap-1">
          <Zap className="w-3 h-3 text-blue-600" />
          <span>Hızlı Yanıt</span>
        </div>
      </div>
    </div>
  );
}
