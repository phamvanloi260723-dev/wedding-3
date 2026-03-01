import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import CoupleCard from '../CoupleCard';

/**
 * CoupleSection Component
 * Introduces the bride and groom.
 * Refactored to use CoupleCard for better maintainability.
 */
const CoupleSection = () => {
  return (
    <section id="couple" className="bg-white py-10 md:py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 p-20 opacity-40">
        <Heart fill="#f5e6e0" className="text-rose-light w-64 h-64 -rotate-12 blur-3xl" />
      </div>
      
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-title-wrap mb-8 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-gold/20" />
             <Heart size={18} fill="#e8c4c4" className="text-rose" />
             <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h2 className="text-3xl md:text-6xl font-heading text-gold-dark mb-4 md:mb-6 drop-shadow-sm">
            Our Love Story
          </h2>
          <div className="section-line w-32 h-0.5 bg-gold/20" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 md:gap-16 lg:gap-24 max-w-7xl mx-auto w-full relative">
          {/* Groom Card */}
          <CoupleCard
            idx={0}
            role="Nhà Trai"
            name={siteConfig.groom.shortName}
            image={siteConfig.groom.image}
            father={siteConfig.groom.father} 
            mother={siteConfig.groom.mother}
            bio={siteConfig.groom.bio}
            facebook={siteConfig.groom.facebook}
            instagram={siteConfig.groom.instagram}
            phone={siteConfig.groom.phone}
          />

          {/* Connecting Heart Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-24 h-24 bg-rose text-white rounded-full shadow-[0_0_50px_rgba(232,196,196,0.6)]"
          >
             <Heart fill="currentColor" className="w-10 h-10 animate-pulse" />
          </motion.div>

          {/* Bride Card */}
          <CoupleCard
            idx={1}
            role="Nhà Gái"
            name={siteConfig.bride.shortName}
            image={siteConfig.bride.image}
            father={siteConfig.bride.father} 
            mother={siteConfig.bride.mother}
            bio={siteConfig.bride.bio}
            facebook={siteConfig.bride.facebook}
            instagram={siteConfig.bride.instagram}
            phone={siteConfig.bride.phone}
          />
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
