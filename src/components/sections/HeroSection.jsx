import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

/**
 * HeroSection Component
 * The first section of the page with a background slideshow.
 */
const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % siteConfig.slideshowImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-8 md:pt-24 md:pb-16 overflow-hidden bg-white">
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

      <div className="container relative z-10 flex flex-col items-center mx-auto px-4">
        {/* Names Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-6 md:mb-10"
        >
          <p className="font-heading text-[10px] md:text-sm tracking-[0.5em] uppercase text-gold-dark/60 mb-4 md:mb-6 font-bold">
            {siteConfig.hero.subtitle}
          </p>
          <h1 className="font-display text-5xl md:text-9xl text-gold-dark drop-shadow-sm flex flex-col md:flex-row items-center gap-2 md:gap-12 leading-tight">
            <span>{siteConfig.bride.shortName}</span>
            <span className="text-rose flex items-center h-full scale-110">
              <Heart fill="#e8c4c4" className="w-8 h-8 md:w-20 md:h-20 animate-pulse" />
            </span>
            <span>{siteConfig.groom.shortName}</span>
          </h1>
        </motion.div>

        {/* Artistic Hero Image Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[900px] aspect-[16/10] md:aspect-[21/9] mb-8 md:mb-12 shadow-2xl rounded-[40px] overflow-hidden group border-4 md:border-8 border-white"
        >
          <div className="absolute inset-0 border-[6px] md:border-[12px] border-white z-20 rounded-[40px] pointer-events-none opacity-90" />
          <div className="absolute inset-0 border border-gold/10 z-20 rounded-[40px] pointer-events-none translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3" />
          
          <img 
            src={siteConfig.slideshowImages[0]} 
            alt="Hero" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
          />
          
          <div className="absolute bottom-4 right-6 md:bottom-6 md:right-10 z-30 flex flex-col items-end">
            <div className="bg-white/80 backdrop-blur-md px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-2xl border border-white/50 shadow-xl">
               <p className="font-heading text-sm md:text-xl text-gold-dark tracking-widest uppercase">
                 {siteConfig.events[1].date}
               </p>
            </div>
          </div>
        </motion.div>

        {/* Hero Content Card */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 1 }}
           className="bg-white/95 border-2 border-gold/20 p-6 md:p-16 rounded-[40px] md:rounded-[60px] shadow-xl max-w-3xl w-full text-center relative"
        >
           <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-md border border-gold/10">
              <Heart fill="#e8c4c4" className="text-rose w-6 h-6" />
           </div>
           
           <p className="font-subheading italic text-xl md:text-2xl text-gray-500 max-w-xl mx-auto leading-relaxed">
             "{siteConfig.hero.quote}"
           </p>
           
           <div className="mt-12 flex flex-col items-center">
              <div className="w-0.5 h-12 bg-gradient-to-b from-gold/40 to-transparent" />
              <p className="text-[10px] tracking-[0.6em] uppercase text-gold-dark/30 font-bold mt-4">
                {siteConfig.hero.discoverText}
              </p>
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
