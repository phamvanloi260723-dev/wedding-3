import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, QrCode } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import QRModal from '../QRModal';

/**
 * ThankYouSection Component
 * Shows a final message and gifting/contact options.
 */
const ThankYouSection = () => {
  const [qrState, setQrState] = useState({ isOpen: false, person: null });

  const openQR = (person) => setQrState({ isOpen: true, person });
  const closeQR = () => setQrState({ ...qrState, isOpen: false });

  return (
    <section id="thanks" className="py-10 md:py-20 bg-cream w-full flex flex-col items-center">
      <div className="container px-4 mx-auto text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="section-title-wrap mb-8 md:mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-8 bg-gold/30" />
             <Heart size={16} fill="#e8c4c4" className="text-rose" />
             <div className="h-[1px] w-8 bg-gold/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading text-gold-dark mb-4 drop-shadow-sm">
             Lời Cảm Ơn
          </h2>
          <div className="section-line w-24 h-0.5 bg-gold/20" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-6 md:p-20 shadow-xl mb-8 md:mb-16 relative border-2 border-gold/10"
          >
            <Heart fill="#e8c4c4" className="text-rose w-10 h-10 md:w-12 md:h-12 mx-auto mb-6 md:mb-8 opacity-50" />
            <h2 className="text-xl md:text-3xl font-heading text-gold-dark mb-6 md:mb-10 italic leading-relaxed">
              "{siteConfig.thankYouMessage.quote}"
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-500 leading-relaxed font-subheading italic text-base md:text-xl border-t border-gold/10 pt-6 md:pt-10">
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
              className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition-all border border-gold/5 active:scale-95"
            >
              <div className="w-12 h-12 bg-rose-light/30 rounded-full flex items-center justify-center text-rose">
                <QrCode size={24} />
              </div>
              <p className="font-heading text-lg text-gold-dark">Mừng cưới cô dâu</p>
            </button>
            <button
              onClick={() => openQR(siteConfig.groom)}
              className="bg-white p-8 rounded-3xl shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition-all border border-gold/5 active:scale-95"
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
        onClose={closeQR} 
        person={qrState.person} 
      />
    </section>
  );
};

export default ThankYouSection;
