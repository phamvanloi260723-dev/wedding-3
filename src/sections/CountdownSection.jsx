import React from 'react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const CalendarCard = ({ title, date, icon }) => {
  const [day, month, year] = date.split(' . ');
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-3xl shadow-lg border border-gold/10 flex flex-col items-center text-center relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 text-gold/20 group-hover:text-gold/40 transition-colors">
        {icon}
      </div>
      <h4 className="font-heading text-gold-dark text-sm uppercase tracking-widest mb-4 font-bold">{title}</h4>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold text-rose mb-1">{day}</span>
        <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-bold">Tháng {month} / {year}</span>
      </div>
      <div className="mt-6 w-12 h-0.5 bg-gold/20" />
    </motion.div>
  );
};

const CountdownSection = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div className="text-4xl font-display text-rose text-center py-10">
          Chính thức về chung một nhà! ❤️
        </div>
      );
    }

    const items = [
      { label: 'Ngày', value: days },
      { label: 'Giờ', value: hours },
      { label: 'Phút', value: minutes },
      { label: 'Giây', value: seconds },
    ];

    return (
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center justify-center bg-white border border-gold/20 rounded-2xl w-20 h-24 md:w-28 md:h-32 shadow-md hover:shadow-xl transition-shadow"
          >
            <span className="text-3xl md:text-4xl font-bold text-gold-dark">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs tracking-widest text-gray-400 uppercase mt-2 font-bold">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="countdown" className="bg-cream overflow-hidden">
      <div className="container px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title-wrap"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-8 bg-gold/30" />
             <Heart size={16} fill="#e8c4c4" className="text-rose" />
             <div className="h-[1px] w-8 bg-gold/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading text-gold-dark mb-4 drop-shadow-sm">
            Save The Date
          </h2>
          <div className="section-line" />
        </motion.div>

        {/* Dual Calendar - Simple & Warm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          <CalendarCard 
            title={siteConfig.events[0].title} 
            date={siteConfig.events[0].date} 
            icon={<CalendarIcon size={24} />}
          />
          <CalendarCard 
            title={siteConfig.events[1].title} 
            date={siteConfig.events[1].date} 
            icon={<CalendarIcon size={24} />}
          />
        </div>

        <div className="max-w-4xl mx-auto bg-white/40 p-10 md:p-16 rounded-[40px] border border-white shadow-inner flex flex-col items-center">
           <p className="font-heading text-xl text-gray-500 italic mb-10 tracking-widest uppercase">
              Time to the Big Day
           </p>
           <Countdown date={targetDate} renderer={renderer} />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
