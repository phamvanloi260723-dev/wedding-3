import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Smartphone, X, QrCode } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const QRModal = ({ isOpen, onClose, person }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl relative flex flex-col items-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-rose"
            >
              <X size={24} />
            </button>
            <div className="w-48 h-48 bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                <img 
                    src={person.qrCode} 
                    alt={`QR ${person.shortName}`} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML += '<div class="flex items-center justify-center h-full text-gray-200"><QrCode size={80} /></div>';
                    }}
                />
            </div>
            <h4 className="font-heading text-xl text-gold-dark mb-2">{person.fullName}</h4>
            <p className="text-xs text-gray-400 text-center italic">
              Vui lòng quét mã QR để gửi quà mừng hoặc liên hệ trực tiếp.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ThankYouSection = () => {
  const [qrState, setQrState] = useState({ isOpen: false, person: null });

  const openQR = (person) => setQrState({ isOpen: true, person });

  return (
    <section id="thanks" className="py-20 bg-cream w-full flex flex-col items-center">
      <div className="container px-4 text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="section-title-wrap"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-8 bg-gold/30" />
             <Heart size={16} fill="#e8c4c4" className="text-rose" />
             <div className="h-[1px] w-8 bg-gold/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading text-gold-dark mb-4 drop-shadow-sm">
             Lời Cảm Ơn
          </h2>
          <div className="section-line" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 md:p-20 shadow-xl mb-16 relative"
          >
            <Heart fill="#e8c4c4" className="text-rose w-12 h-12 mx-auto mb-8 opacity-50" />
            <h2 className="text-2xl md:text-3xl font-heading text-gold-dark mb-10 italic leading-relaxed">
              "{siteConfig.thankYouMessage.quote}"
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed font-subheading italic text-lg md:text-xl border-t border-gold/10 pt-10">
              {siteConfig.thankYouMessage.details.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
            <div className="mt-12">
              <p className="font-display text-5xl text-gold-dark">
                {siteConfig.bride.shortName} & {siteConfig.groom.shortName}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => openQR(siteConfig.bride)}
              className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition-shadow border border-gold/5"
            >
              <div className="w-12 h-12 bg-rose-light/30 rounded-full flex items-center justify-center text-rose">
                <QrCode size={24} />
              </div>
              <p className="font-heading text-lg text-gold-dark">Mừng cưới cô dâu</p>
            </button>
            <button
              onClick={() => openQR(siteConfig.groom)}
              className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition-shadow border border-gold/5"
            >
              <div className="w-12 h-12 bg-rose-light/30 rounded-full flex items-center justify-center text-rose">
                <QrCode size={24} />
              </div>
              <p className="font-heading text-lg text-gold-dark">Mừng cưới chú rể</p>
            </button>
          </div>
        </div>
      </div>

      <QRModal 
        isOpen={qrState.isOpen} 
        onClose={() => setQrState({ ...qrState, isOpen: false })} 
        person={qrState.person} 
      />
    </section>
  );
};

export default ThankYouSection;
