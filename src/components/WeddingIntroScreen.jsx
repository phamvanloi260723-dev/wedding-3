import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const WeddingIntroScreen = ({ onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05, 
        filter: 'blur(20px)',
        transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-luxury-cream"
    >
      {/* Background Image with Parallax-like scale */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(#ffffff, #fff0f0) `,
        }}
      />

      {/* Decorative Overlays */}
      <div className="absolute inset-0 bg-luxury-charcoal/20 backdrop-blur-[1px] z-0" />
      
      {/* Main Content */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-[90%] w-[500px]"
      >
        <div className="absolute inset-0 glass-premium rounded-[60px] -z-10 opacity-90 shadow-2xl" />
        
        <motion.div
          initial={{ opacity: 0, tracking: '0.5em' }}
          animate={{ opacity: 1, tracking: '0.3em' }}
          transition={{ delay: 1, duration: 1.5 }}
          className="text-luxury-gold uppercase text-[10px] md:text-xs font-bold mb-10 tracking-[0.3em]"
        >
          The Wedding Invitation
        </motion.div>

        <div className="flex flex-col items-center gap-2 mb-12">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-display text-7xl md:text-8xl text-luxury-gold-dark drop-shadow-md"
          >
            {siteConfig.bride.shortName}
          </motion.h1>
          
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 1.2 }}
            className="bg-white/80 p-3 rounded-full shadow-lg my-2"
          >
            <Heart fill="currentColor" className="text-luxury-rose w-6 h-6 animate-pulse" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="font-display text-7xl md:text-8xl text-luxury-gold-dark drop-shadow-md"
          >
            {siteConfig.groom.shortName}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="w-full flex flex-col items-center gap-8"
        >
          <div className="w-12 h-[1px] bg-luxury-gold/40" />
          
          <p className="font-heading text-lg md:text-xl text-luxury-gold tracking-[0.2em] italic uppercase">
            {siteConfig.events[0].date}
          </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="relative overflow-hidden group bg-luxury-gold-dark text-white px-12 py-5 rounded-full font-heading text-lg shadow-[0_10px_30px_-10px_rgba(142,109,49,0.5)] transition-all flex items-center gap-3 uppercase tracking-widest"
        >
          <span className="relative z-10">Mở Thiệp</span>
          <span className="absolute left-[-100%] top-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-1000" />
        </motion.button>
        </motion.div>
      </motion.div>

      {/* Elegant Frame Corners */}
      <motion.div>  
      <div className="absolute top-10 left-10 border-t-4 border-l-4 border-gold/20 w-16 h-16 rounded-tl-2xl" />
      <div className="absolute top-10 right-10 border-t-4 border-r-4 border-gold/20 w-16 h-16 rounded-tr-2xl" />
      <div className="absolute bottom-10 left-10 border-b-4 border-l-4 border-gold/20 w-16 h-16 rounded-bl-2xl" />
      <div className="absolute bottom-10 right-10 border-b-4 border-r-4 border-gold/20 w-16 h-16 rounded-br-2xl" />
    </motion.div>
    </motion.div>
  );
};

export default WeddingIntroScreen;
