import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Calendar, X, ExternalLink, Heart, Gift, Timer } from 'lucide-react';
import Countdown from 'react-countdown';
import { siteConfig } from '../config/siteConfig';

const EventCountdown = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) return <span className="text-rose font-bold">Today!</span>;
    return (
      <div className="flex gap-4 justify-center mt-4">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-gold-dark">{days}</span>
          <span className="text-[8px] uppercase tracking-widest opacity-50">Ngày</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-gold-dark">{hours}</span>
          <span className="text-[8px] uppercase tracking-widest opacity-50">Giờ</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-gold-dark">{minutes}</span>
          <span className="text-[8px] uppercase tracking-widest opacity-50">Phút</span>
        </div>
      </div>
    );
  };
  return <Countdown date={targetDate} renderer={renderer} />;
};

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
            className="bg-white w-full max-w-6xl rounded-[40px] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
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

const EventCard = ({ title, date, time, locations, icon, idx, onOpenMap }) => {
  // Convert date string "21 . 12 . 2025" to Date object
  const [d, m, y] = date.split(' . ');
  const targetDate = new Date(`${y}-${m}-${d}T${time.includes('Sáng') ? '09:00:00' : '11:00:00'}`);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 bg-white/80 backdrop-blur-sm rounded-[60px] p-10 md:p-14 shadow-sm border border-white relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-700"
    >
      <div className="absolute top-0 right-0 p-12 text-gold/5 -z-10 group-hover:scale-110 transition-transform duration-1000">
         <div className="text-9xl font-bold">{idx + 1}</div>
      </div>

      <div className="w-20 h-20 bg-rose-light/20 rounded-3xl flex items-center justify-center mb-10 text-4xl shadow-inner border border-white ring-8 ring-rose-light/5">
        {icon}
      </div>
      
      <h3 className="font-heading text-4xl text-gold-dark mb-10 group-hover:text-rose transition-colors">
        {title}
      </h3>

      <div className="space-y-6 mb-12 text-gray-500">
        <div className="flex items-center gap-4 bg-cream/30 p-4 rounded-2xl border border-gold/5">
          <Calendar size={20} className="text-rose" />
          <span className="font-bold text-gray-700 tracking-wider text-lg">{date}</span>
        </div>
        <div className="flex items-center gap-4 bg-cream/30 p-4 rounded-2xl border border-gold/5">
          <Clock size={20} className="text-rose" />
          <span className="text-lg">{time}</span>
        </div>
        <div className="flex items-start gap-4 p-4">
          <MapPin size={20} className="text-rose shrink-0" />
          <span className="text-sm italic leading-relaxed text-left">{locations[0].address}</span>
        </div>
      </div>

      {/* Local Event Countdown */}
      <div className="mb-10 p-6 bg-gold/5 rounded-3xl border border-gold/10">
         <div className="flex items-center gap-2 mb-2 justify-center opacity-60">
            <Timer size={14} className="text-gold-dark" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Time to Event</span>
         </div>
         <EventCountdown targetDate={targetDate} />
      </div>

      <button
        onClick={() => onOpenMap(locations)}
        className="w-full py-5 bg-gold-dark text-white rounded-[25px] font-bold text-sm tracking-[0.2em] shadow-lg shadow-gold/20 hover:bg-gold hover:shadow-xl transition-all active:scale-95 uppercase flex items-center justify-center gap-3"
      >
        <MapPin size={18} /> Xem Bản Đồ
      </button>
    </motion.div>
  );
};

const EventsSection = () => {
  const [mapState, setMapState] = useState({ isOpen: false, locations: [] });

  return (
    <section id="events" className="bg-cream/50 py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-gold/5 -z-10" />

      <div className="container px-4">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="section-title-wrap mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-gold/20" />
             <Heart size={20} fill="#e8c4c4" className="text-rose" />
             <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <p className="text-[10px] tracking-[0.6em] uppercase text-gold/40 font-bold mb-4 text-center">The Celebration</p>
          <h2 className="text-5xl md:text-7xl font-heading text-gold-dark mb-6 drop-shadow-sm text-center">
            Wedding Events
          </h2>
          <div className="section-line w-40" />
        </motion.div>

        <div className="flex flex-col xl:flex-row items-stretch justify-center gap-12 max-w-7xl mx-auto w-full relative">
          {siteConfig.events.map((event, idx) => (
            <EventCard
              key={event.id}
              idx={idx}
              {...event}
              onOpenMap={(locs) => setMapState({ isOpen: true, locations: locs })}
            />
          ))}
        </div>
      </div>

      <MapModal 
        isOpen={mapState.isOpen} 
        onClose={() => setMapState({ ...mapState, isOpen: false })} 
        locations={mapState.locations}
      />
    </section>
  );
};

export default EventsSection;
