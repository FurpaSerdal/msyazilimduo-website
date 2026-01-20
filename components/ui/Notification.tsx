"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

interface NotificationProps {
  notification: { type: 'success' | 'error'; message: string } | null;
  onClose: () => void;
}

export default function Notification({ notification, onClose }: NotificationProps) {
  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 left-4 md:left-auto md:right-8 md:w-auto z-[100]"
        >
          <div className={`flex items-start gap-4 px-6 py-4 rounded-xl shadow-2xl border ${
            notification.type === 'success'
              ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
              : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-200'
          }`}>
            <div className={notification.type === 'success' ? 'text-green-600' : 'text-red-600'}>
              {notification.type === 'success' ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <AlertCircle className="w-6 h-6" />
              )}
            </div>
            <div className="flex-1">
              <p className={notification.type === 'success' ? 'text-green-900 font-medium' : 'text-red-900 font-medium'}>
                {notification.message}
              </p>
            </div>
            <button
              onClick={onClose}
              className={notification.type === 'success' ? 'text-green-600 hover:text-green-800' : 'text-red-600 hover:text-red-800'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
