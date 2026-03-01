import React from 'react';
import Countdown from 'react-countdown';

/**
 * EventCountdown Component
 * Displays the remaining time to a specific event.
 */
const EventCountdown = ({ targetDate }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <div className="flex gap-4 justify-center mt-4">
        <div className="flex flex-col items-center bg-white/50 px-3 py-1 rounded-xl border border-gold/10 shadow-sm">
          <span className="text-2xl font-bold text-rose">{days}</span>
          <span className="text-[8px] uppercase tracking-widest opacity-50 font-bold">Ngày</span>
        </div>
        <div className="flex flex-col items-center bg-white/50 px-3 py-1 rounded-xl border border-gold/10 shadow-sm">
          <span className="text-2xl font-bold text-rose">{hours}</span>
          <span className="text-[8px] uppercase tracking-widest opacity-50 font-bold">Giờ</span>
        </div>
        <div className="flex flex-col items-center bg-white/50 px-3 py-1 rounded-xl border border-gold/10 shadow-sm">
          <span className="text-2xl font-bold text-rose">{minutes}</span>
          <span className="text-[8px] uppercase tracking-widest opacity-50 font-bold">Phút</span>
        </div>
        <div className="flex flex-col items-center bg-white/50 px-3 py-1 rounded-xl border border-gold/10 shadow-sm">
          <span className="text-2xl font-bold text-rose">{seconds}</span>
          <span className="text-[8px] uppercase tracking-widest opacity-50 font-bold">Giây</span>
        </div>
      </div>
    );
  };
  return <Countdown date={targetDate} renderer={renderer} />;
};

export default EventCountdown;
