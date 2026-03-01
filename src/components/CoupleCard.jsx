import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Sparkles, Phone } from 'lucide-react';

/**
 * CoupleCard Component
 * Displays individual information for the bride or groom.
 */
const CoupleCard = ({ role, name, image, father, mother, bio, idx, facebook, instagram, phone }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    className="flex-1 flex flex-col items-center p-6 md:p-12 bg-white/95 rounded-[60px] md:rounded-[80px] shadow-xl border-2 border-gold/10 relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
  >
    {/* Luxury Image Frame (Diagonal/Artistic) */}
    <div className="relative mb-6 md:mb-12">
      <div className="absolute inset-0 border-2 border-gold/10 rounded-full scale-105 -rotate-6 z-0 group-hover:rotate-6 transition-transform duration-1000" />
      <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[80px] shadow-2xl border-4 border-white z-10">
        <img src={image} alt={name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent" />
      </div>
      <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg z-20 border border-gold/5">
         <Sparkles className="text-rose w-6 h-6 animate-pulse" />
      </div>
    </div>
    
    <div className="text-center px-4 w-full">
      <p className="font-heading text-xs tracking-[0.5em] uppercase text-gold/40 mb-3 font-bold">{role}</p>
      <h3 className="font-display text-6xl text-gold-dark mb-6 drop-shadow-sm">{name}</h3>
      
      <div className="flex flex-col items-center gap-1 mb-8 text-sm text-gray-500 italic">
        <p className="border-b border-gold/10 pb-1 px-4">Con ông: <span className="font-bold text-gold-dark">{father}</span></p>
        <p className="pt-1 px-4">Con bà: <span className="font-bold text-gold-dark">{mother}</span></p>
      </div>

      <div className="mb-10 p-8 bg-cream/30 rounded-[40px] border border-gold/5 relative">
        <p className="text-gray-500 text-sm leading-relaxed italic font-subheading text-lg">
          {bio}
        </p>
      </div>

      <div className="flex justify-center gap-6">
        <a 
          href={instagram} 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gold-dark/40 hover:text-rose hover:shadow-xl transition-all"
        >
          <Instagram size={18} />
        </a>
        <a 
          href={facebook} 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gold-dark/40 hover:text-rose hover:shadow-xl transition-all"
        >
          <Facebook size={18} />
        </a>
        <a 
          href={`tel:${phone}`} 
          className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gold-dark/40 hover:text-rose hover:shadow-xl transition-all"
        >
          <Phone size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default CoupleCard;
