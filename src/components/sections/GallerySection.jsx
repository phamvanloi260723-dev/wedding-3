import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Heart } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const displayedImages = isExpanded 
    ? siteConfig.galleryImages 
    : siteConfig.galleryImages.slice(0, 6);

  return (
    <section id="gallery" className="py-10 md:py-16 bg-white overflow-hidden w-full">
      <div className="container px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="section-title-wrap mb-10"
        >
          <div className="flex items-center gap-4 mb-4 justify-center">
             <div className="h-[1px] w-8 bg-gold/30" />
             <Heart size={16} fill="#e8c4c4" className="text-rose" />
             <div className="h-[1px] w-8 bg-gold/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading text-gold-dark mb-4 drop-shadow-sm text-center">
            Album Hình Cưới
          </h2>
          <div className="section-line mx-auto w-24 h-0.5 bg-gold/20" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto w-full px-4">
          {displayedImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 6) * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImg(src)}
              className="relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all group border-4 border-white"
            >
              <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="bg-white/80 p-3 rounded-full text-gold-dark">
                    <Maximize2 size={20} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {siteConfig.galleryImages.length > 6 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex flex-col items-center gap-2 text-gold-dark font-heading hover:text-rose transition-colors"
            >
              <span className="text-lg tracking-widest uppercase">
                {isExpanded ? "Thu gọn" : ""}
              </span>
              <motion.div
                animate={{ 
                  y: isExpanded ? 0 : [0, 5, 0],
                  rotate: isExpanded ? 180 : 0
                }}
                transition={{ 
                  y: { duration: 1.5, repeat: isExpanded ? 0 : Infinity },
                  rotate: { duration: 0.5 }
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center border border-gold/10 shadow-sm transition-all transform group-hover:scale-110 ${
                  isExpanded ? 'bg-rose text-white' : 'bg-cream text-gold-dark group-hover:bg-rose group-hover:text-white'
                }`}
              >
                <Heart size={16} />
              </motion.div>
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <button 
              className="absolute top-6 right-6 text-white bg-white/20 p-2 rounded-full z-[10001] transition-transform hover:scale-110"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              className="max-w-full max-h-full rounded-xl shadow-2xl"
              alt="Full Size"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
