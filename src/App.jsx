import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig } from './config/siteConfig';

// Components
import WeddingIntroScreen from './components/WeddingIntroScreen';
import ParticleEffect from './components/ParticleEffect';

// Sections
import HeroSection from './components/sections/HeroSection';
import CoupleSection from './components/sections/CoupleSection';
import EventsSection from './components/sections/EventsSection';
import GallerySection from './components/sections/GallerySection';
import ThankYouSection from './components/sections/ThankYouSection';

// Layout
import Footer from './layout/Footer';
import MusicPlayer from './layout/MusicPlayer';
import ScrollToTop from './layout/ScrollToTop';

// Hooks
import { useAudio } from './hooks/useAudio';
import { useScroll } from './hooks/useScroll';

// Styles
import './styles/index.css';

/**
 * Main App Component
 * Cleaned and reorganized for better maintainability.
 * Keeps existing logic and user notes.
 */
function App() {
  const [isOpened, setIsOpened] = useState(false);
  
  // Custom hooks for logic extraction
  const { isPlaying, toggle: toggleMusic, play } = useAudio(siteConfig.musicUrl);
  const scrolled = useScroll(50);

  const scrollFrameRef = React.useRef();

  const handleOpenInvitation = () => {
    setIsOpened(true);
    play();
    
    // Continuous auto-scroll logic (movie style)
    const startAutoScroll = () => {
      // Small delay before starting
      setTimeout(() => {
        const scrollStep = () => {
          window.scrollBy(0, 0.4); // Very slow and smooth scroll
          scrollFrameRef.current = requestAnimationFrame(scrollStep);
        };
        scrollFrameRef.current = requestAnimationFrame(scrollStep);

        // Add stop listeners ONLY after the scroll has actually started
        // This prevents the "Open Invitation" click from stopping it immediately
        const stopAutoScroll = () => {
          if (scrollFrameRef.current) {
            cancelAnimationFrame(scrollFrameRef.current);
            scrollFrameRef.current = null;
          }
          window.removeEventListener('wheel', stopAutoScroll);
          window.removeEventListener('touchstart', stopAutoScroll);
          window.removeEventListener('keydown', stopAutoScroll);
        };

        window.addEventListener('wheel', stopAutoScroll, { once: true });
        window.addEventListener('touchstart', stopAutoScroll, { once: true });
        window.addEventListener('keydown', stopAutoScroll, { once: true });
      }, 6000); // Wait for animations to finish before starting scroll
    };

    startAutoScroll();
  };

  return (
    <div className="min-h-screen bg-white selection:bg-rose-light font-body transition-colors duration-500 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <WeddingIntroScreen key="intro" onOpen={handleOpenInvitation} />
        ) : (
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex flex-col items-center"
          >
            <ParticleEffect />
            
            {/* Main Content Sections */}
            <main className="relative z-10 w-full">
              <HeroSection />
              <div className="bg-white">
                <CoupleSection />
                <EventsSection />
                <GallerySection />
                <ThankYouSection />
              </div>
            </main>

            <Footer />

            {/* Utility Components */}
            <MusicPlayer 
              isPlaying={isPlaying} 
              onToggle={toggleMusic} 
            />
            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
