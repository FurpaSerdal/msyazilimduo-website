"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Send } from 'lucide-react';

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
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        <AnimatePresence>
          {showWhatsappModal && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-white rounded-xl shadow-2xl p-4 w-80 border border-gray-200 mb-3"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">WhatsApp'tan Yaz</h3>
                  <p className="text-gray-600 text-xs">Hızlı yanıt için</p>
                </div>
                <button
                  onClick={() => setShowWhatsappModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <textarea
                value={whatsappMessage}
                onChange={(e) => setWhatsappMessage(e.target.value)}
                placeholder="Mesajınız..."
                className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm"
                rows={3}
              />

              <button
                onClick={sendWhatsAppMessage}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-medium text-sm hover:shadow-lg active:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Send className="w-4 h-4" />
                Gönder
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setShowWhatsappModal(!showWhatsappModal)}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative group min-h-[48px] min-w-[48px]"
          aria-label="WhatsApp ile iletişim"
        >
          <MessageCircle className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </motion.button>

        {/* Phone Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          href="tel:+905355297508"
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center min-h-[48px] min-w-[48px]"
          aria-label="Telefon ile ara"
        >
          <Phone className="w-5 h-5" />
        </motion.a>
      </div>
    </div>
  );
}
