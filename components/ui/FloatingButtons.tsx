"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Send, Zap } from 'lucide-react';

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
              className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-100 mb-3 backdrop-blur-xl bg-white/95"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MessageCircle className="w-5 h-5 text-white stroke-[2.5]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-base">Hızlı Mesaj</h3>
                  <p className="text-gray-500 text-xs font-medium">WhatsApp ile iletişim</p>
                </div>
                <button
                  onClick={() => setShowWhatsappModal(false)}
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Kapat"
                >
                  ✕
                </button>
              </div>

              <textarea
                value={whatsappMessage}
                onChange={(e) => setWhatsappMessage(e.target.value)}
                placeholder="Bursa yazılım hizmeti hakkında sorularınız..."
                className="w-full border border-gray-200 rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm bg-gray-50 placeholder-gray-400"
                rows={3}
              />

              <button
                onClick={sendWhatsAppMessage}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold text-sm hover:shadow-xl active:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] hover:from-green-600 hover:to-green-700"
              >
                <Send className="w-4 h-4 stroke-2" />
                <span>Gönder</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          onClick={() => setShowWhatsappModal(!showWhatsappModal)}
          className="bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center relative group min-h-[56px] min-w-[56px] hover:from-green-500 hover:to-green-700"
          aria-label="WhatsApp ile iletişim"
        >
          <MessageCircle className="w-6 h-6 stroke-[2.5]" />
          <motion.div 
            className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </motion.div>
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
        </motion.button>

        {/* Phone Button */}
        <motion.a
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          href="tel:+905355297508"
          className="bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center min-h-[56px] min-w-[56px] hover:from-blue-600 hover:to-blue-800 group"
          aria-label="Telefon ile ara"
        >
          <Phone className="w-6 h-6 stroke-[2.5] group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* Quick Contact Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs bg-white rounded-full px-3 py-1.5 shadow-lg text-gray-700 font-medium border border-gray-100 whitespace-nowrap"
        >
          <span className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-blue-500" />
            Hızlı Yanıt
          </span>
        </motion.div>
      </div>
    </div>
  );
}
