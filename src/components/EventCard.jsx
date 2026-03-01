import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Timer } from 'lucide-react';
import EventCountdown from './EventCountdown';

/**
 * EventCard Component
 * Displays a single wedding event with details and countdown.
 */
const EventCard = ({ title, date, time, locations, icon, idx, onOpenMap }) => {
  // Convert date string "21 . 12 . 2025" to Date object
  const [d, m, y] = date.split(' . ');
  const targetTime = time.includes('Sáng') ? '09:00:00' : '11:00:00';
  const targetDate = new Date(`${y}-${m}-${d}T${targetTime}`);

  return (
    <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: idx * 0.2 }}
    className="bg-white p-6 md:p-14 rounded-[50px] md:rounded-[70px] shadow-xl border-4 border-gold/10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
  >
    {/* Decorative Background Icon */}
    <div className="absolute -top-10 -right-10 opacity-[0.03] text-gold group-hover:scale-110 transition-transform duration-1000">
       <span className="text-[150px] md:text-[200px] leading-none">{icon}</span>
    </div>

    {/* Header Icon */}
    <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-rose-light/20 rounded-full flex items-center justify-center text-rose mx-auto mb-6 md:mb-10 ring-8 ring-rose-light/5">
       <span className="text-2xl md:text-4xl">{icon}</span>
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

export default EventCard;
