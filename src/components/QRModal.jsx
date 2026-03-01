import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode } from 'lucide-react';
import { createPortal } from 'react-dom';
/**
 * QRModal Component
 * Displays a QR code for gifting/contact.
 */
const QRModal = ({ isOpen, onClose, person }) => {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl relative flex flex-col items-center p-8 border-2 border-gold/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-rose transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="w-48 h-48 bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100 flex items-center justify-center">
                {person?.qrCode ? (
                  <img 
                      src={person.qrCode} 
                      alt={`QR ${person.shortName}`} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<div class="text-gray-200"><QrCode size={80} /></div>';
                      }}
                  />
                ) : (
                  <div className="text-gray-200"><QrCode size={80} /></div>
                )}
            </div>
            <h4 className="font-heading text-xl text-gold-dark mb-2">{person?.fullName}</h4>
            <p className="text-xs text-gray-400 text-center italic">
              Vui lòng quét mã QR để gửi quà mừng hoặc liên hệ trực tiếp.
            </p>
             </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default QRModal;
