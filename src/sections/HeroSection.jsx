import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % siteConfig.slideshowImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Background Slideshow with Parallax zoom */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${siteConfig.slideshowImages[index]}")` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/90" />
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        {/* Names Header (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-10"
        >
          <p className="font-heading text-xs md:text-sm tracking-[0.5em] uppercase text-gold-dark/60 mb-6 font-bold">
            The Wedding Celebration of
          </p>
          <h1 className="font-display text-8xl md:text-9xl text-gold-dark drop-shadow-sm flex flex-col md:flex-row items-center gap-4 md:gap-12 leading-tight">
            <span>{siteConfig.bride.shortName}</span>
            <span className="text-rose flex items-center h-full scale-110">
              <Heart fill="#e8c4c4" className="w-12 h-12 md:w-20 md:h-20 animate-pulse" />
            </span>
            <span>{siteConfig.groom.shortName}</span>
          </h1>
        </motion.div>

        {/* Artistic Hero Image Frame (Luxury Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1.5, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[900px] aspect-[16/10] md:aspect-[21/9] mb-12 shadow-2xl rounded-[40px] overflow-hidden group"
        >
          <div className="absolute inset-0 border-[12px] border-white z-20 rounded-[40px] pointer-events-none opacity-90" />
          <div className="absolute inset-0 border border-gold/10 z-20 rounded-[40px] pointer-events-none translate-x-3 translate-y-3" />
          
          <img 
            src={siteConfig.slideshowImages[3]} 
            alt="Hero" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
          
          <div className="absolute bottom-6 right-10 z-30 flex flex-col items-end">
            <div className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/50 shadow-xl">
               <p className="font-heading text-xl text-gold-dark tracking-widest uppercase">
                 {siteConfig.events[1].date}
               </p>
            </div>
          </div>
        </motion.div>

        {/* Hero Content Card (Hybrid) */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="bg-white/40 backdrop-blur-sm border border-white/60 p-10 md:p-16 rounded-[60px] shadow-sm max-w-3xl w-full text-center relative"
        >
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-md border border-gold/10">
              <Heart fill="#e8c4c4" className="text-rose w-6 h-6" />
           </div>
           
           <p className="font-subheading italic text-xl md:text-2xl text-gray-500 max-w-xl mx-auto leading-relaxed color-gray-600">
             "Một tình yêu chân thành bắt đầu khi hai trái tim đập cùng một nhịp. Sự hiện diện của bạn là món quà quý giá nhất trong ngày trọng đại của chúng mình."
           </p>
           
           <div className="mt-12 flex flex-col items-center">
              <div className="w-0.5 h-12 bg-gradient-to-b from-gold/40 to-transparent" />
              <p className="text-[10px] tracking-[0.6em] uppercase text-gold-dark/30 font-bold mt-4">Discover Our Story</p>
           </div>
        </motion.div>
      </div>

      {/* Elegant Large Watermark */}
      <div className="absolute -bottom-20 -left-20 font-display text-[25vw] text-gold/5 pointer-events-none select-none -rotate-12 whitespace-nowrap">
        {siteConfig.bride.shortName} & {siteConfig.groom.shortName}
      </div>
    </section>
  );
};

export default HeroSection;
