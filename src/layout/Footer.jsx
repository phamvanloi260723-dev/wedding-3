import React from 'react';
import { Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const Footer = () => {
  return (
    <footer className="footer-layout bg-gray-900 text-white pt-24 pb-12 px-6 text-center w-full relative overflow-hidden">
      {/* Subtle light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(232,196,196,0.1)_0%,_transparent_50%)]" />
      
      <div className="container relative z-10 flex flex-col items-center mx-auto">
        {/* Circular Couple Image */}
        <div className="relative mb-12">
          <div className="absolute inset-0 rounded-full border-2 border-gold/20 scale-110 animate-pulse" />
          <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src={siteConfig.slideshowImages[0]} 
              alt="Couple" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Thank You Message */}
        <div className="max-w-xl mb-12">
          <p className="font-heading text-xl md:text-2xl text-gold-light mb-4 italic">
            Thank You!
          </p>
          <p className="text-gray-400 font-subheading italic text-sm md:text-base leading-relaxed opacity-80">
            {siteConfig.thankYouMessage.details[2]} {/* Using the "Cảm ơn vì đã là một phần..." line */}
          </p>
        </div>

        {/* Names & Heart */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <p className="font-display text-4xl md:text-5xl text-gold-light">
            {siteConfig.bride.shortName} & {siteConfig.groom.shortName}
          </p>
          <div className="flex items-center gap-4">
             <div className="h-[1px] w-8 bg-gold/20" />
             <Heart size={16} fill="#e8c4c4" className="text-rose opacity-60" />
             <div className="h-[1px] w-8 bg-gold/20" />
          </div>
        </div>

        {/* Studio Branding */}
        <div className="pt-8 border-t border-white/5 w-full max-w-xs">
          <p className="text-[10px] tracking-[0.4em] opacity-30 uppercase font-bold">
              Designed by {siteConfig.footerText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
