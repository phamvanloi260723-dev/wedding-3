import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Sparkles, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const CoupleCard = ({ role, name, image, father, mother, bio, idx, facebook, instagram, phone }) => (
  <motion.div
    initial={{ x: idx === 0 ? -100 : 100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    className="flex-1 flex flex-col items-center p-12 bg-white/60 backdrop-blur-md rounded-[80px] shadow-sm border border-white/80 relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
  >
    {/* Luxury Image Frame (Diagonal/Artistic) */}
    <div className="relative mb-12">
      <div className="absolute inset-0 border-2 border-gold/10 rounded-full scale-110 -rotate-6 z-0 group-hover:rotate-6 transition-transform duration-1000" />
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

const CoupleSection = () => {
  return (
    <section id="couple" className="bg-white py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 p-20 opacity-40">
        <Heart fill="#f5e6e0" className="text-rose-light w-64 h-64 -rotate-12 blur-3xl" />
      </div>
      
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-title-wrap mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-gold/20" />
             <Heart size={18} fill="#e8c4c4" className="text-rose" />
             <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading text-gold-dark mb-6 drop-shadow-sm">
            Our Love Story
          </h2>
          <div className="section-line w-32" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-16 lg:gap-24 max-w-7xl mx-auto w-full relative">
          {/* Groom Card (Slides from Left) */}
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

          {/* Connecting Heart Icon (Appear from center) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-24 h-24 bg-rose text-white rounded-full shadow-[0_0_50px_rgba(232,196,196,0.6)]"
          >
             <Heart fill="currentColor" className="w-10 h-10 animate-pulse" />
          </motion.div>

          {/* Bride Card (Slides from Right) */}
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
