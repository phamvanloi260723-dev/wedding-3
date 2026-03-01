import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import EventCard from '../EventCard';
import MapModal from '../MapModal';

/**
 * EventsSection Component
 * Displays the wedding events itinerary.
 * Refactored to use EventCard and MapModal for better maintainability.
 */
const EventsSection = () => {
  const [mapState, setMapState] = useState({ isOpen: false, locations: [] });

  const handleOpenMap = (locations) => {
    setMapState({ isOpen: true, locations });
  };

  const handleCloseMap = () => {
    setMapState({ ...mapState, isOpen: false });
  };

  return (
    <section id="events" className="py-12 md:py-32 bg-cream text-center overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-title-wrap mb-8 md:mb-24 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-gold/20" />
             <Heart size={18} fill="#e8c4c4" className="text-rose" />
             <div className="h-[1px] w-12 bg-gold/20" />
          </div>
          <h2 className="text-3xl md:text-6xl font-heading text-gold-dark mb-4 md:mb-6 drop-shadow-sm">
            Event Details
          </h2>
          <div className="section-line w-32 h-0.5 bg-gold/20" />
        </motion.div>

        <div className="flex flex-col xl:flex-row items-stretch justify-center gap-12 max-w-7xl mx-auto w-full relative">
          {siteConfig.events.map((event, idx) => (
            <EventCard
              key={event.id}
              idx={idx}
              {...event}
              onOpenMap={handleOpenMap}
            />
          ))}
        </div>
      </div>

      <MapModal 
        isOpen={mapState.isOpen} 
        onClose={handleCloseMap} 
        locations={mapState.locations}
      />
    </section>
  );
};

export default EventsSection;
