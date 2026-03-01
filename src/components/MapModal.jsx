import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Heart, ExternalLink } from 'lucide-react';

/**
 * MapModal Component
 * Full-screen modal to show event locations on Google Maps.
 */
const MapModal = ({ isOpen, onClose, locations }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white w-full max-w-6xl rounded-[40px] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] border-2 border-gold/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 bg-white/90 p-3 rounded-full text-gray-400 hover:text-rose transition-all shadow-md active:scale-90"
            >
              <X size={24} />
            </button>

            <div className="p-10 md:p-16 overflow-y-auto">
              <div className="text-center mb-12">
                <Heart fill="#e8c4c4" className="text-rose w-8 h-8 mx-auto mb-4 opacity-50" />
                <h3 className="text-4xl md:text-5xl font-heading text-gold-dark">Bản Đồ Chỉ Đường</h3>
                <div className="w-16 h-0.5 bg-gold/20 mx-auto mt-4" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {locations.map((loc, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="bg-cream/50 p-6 rounded-3xl border border-gold/5 flex items-start gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm">
                        <MapPin className="text-rose shrink-0" size={24} />
                      </div>
                      <div>
                        <p className="font-heading text-2xl text-gold-dark mb-1">{loc.label}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{loc.address}</p>
                      </div>
                    </div>
                    <div className="aspect-video w-full bg-gray-50 rounded-[30px] overflow-hidden border-4 border-white shadow-xl">
                      <iframe
                        src={loc.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title={loc.label}
                      ></iframe>
                    </div>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-2 py-4 bg-gold/5 hover:bg-gold/10 rounded-2xl text-gold-dark font-bold text-xs tracking-widest uppercase transition-all"
                    >
                      <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                      Mở Google Maps
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MapModal;
