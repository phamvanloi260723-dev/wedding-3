import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Music, Music2, Heart } from 'lucide-react';
import { siteConfig } from './config/siteConfig';
import WeddingIntroScreen from './components/WeddingIntroScreen';
import ParticleEffect from './components/ParticleEffect';
import HeroSection from './sections/HeroSection';
import CountdownSection from './sections/CountdownSection';
import CoupleSection from './sections/CoupleSection';
import EventsSection from './sections/EventsSection';
import GallerySection from './sections/GallerySection';
import ThankYouSection from './sections/ThankYouSection';
import './index.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [audio] = useState(new Audio(siteConfig.musicUrl));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const weddingDate = new Date(siteConfig.countdownDate);

  useEffect(() => {
    audio.loop = true;
    document.title = siteConfig.title;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [audio]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    audio.play().then(() => setIsPlaying(true)).catch(error => console.log("Audio play failed:", error));
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const navLinks = [
    { label: 'Trang chủ', href: '#home' },
    { label: 'Cặp đôi', href: '#couple' },
    { label: 'Sự kiện', href: '#events' },
    { label: 'Album', href: '#gallery' },
    { label: 'Cảm ơn', href: '#thanks' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-rose-light font-body transition-colors duration-500">
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
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 px-6 py-4 flex justify-between items-center ${
              scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
            }`}>
              <a href="#" className="font-display text-3xl text-gold-dark hover:scale-105 transition-transform flex items-center gap-2">
                {siteConfig.bride.shortName} <Heart size={16} fill="#e8c4c4" className="text-rose" /> {siteConfig.groom.shortName}
              </a>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex gap-8 text-[11px] font-bold tracking-widest text-gray-500 uppercase">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-rose transition-colors py-2">
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="fixed inset-0 z-[1100] bg-white flex flex-col items-center justify-center gap-8 md:hidden shadow-2xl"
                >
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 text-gray-400 p-2"
                  >
                    <X size={32} />
                  </button>
                  <div className="flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                      <a 
                        key={link.href} 
                        href={link.href} 
                        onClick={() => setIsMenuOpen(false)}
                        className="font-heading text-2xl text-gray-800 hover:text-rose transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <ParticleEffect />
            
            <main className="relative z-10 w-full">
              <HeroSection />
              <div className="bg-white">
                <CoupleSection />
                <EventsSection />
                <GallerySection />
                <ThankYouSection />
              </div>
            </main>

            {/* Classic Footer */}
            <footer className="bg-gray-900 text-white py-16 px-6 text-center  w-full">
              <div className="container flex flex-col items-center">
                <p className="font-display text-4xl mb-4 text-gold-light">
                  {siteConfig.bride.shortName} & {siteConfig.groom.shortName}
                </p>
                <p className="font-heading tracking-widest text-xs mb-8 uppercase opacity-50">
                  {siteConfig.events[1].date}
                </p>
                <div className="flex justify-center gap-6 mb-12">
                   <Heart size={20} fill="#e8c4c4" className="text-rose opacity-50" />
                </div>
                <p className="text-[10px] tracking-widest opacity-30 uppercase">
                    {siteConfig.footerText}
                </p>
              </div>
            </footer>

            {/* Compact Music Player */}
            <button 
              onClick={toggleMusic}
              className={`fixed bottom-6 right-6 z-[2000] w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
                isPlaying 
                  ? 'bg-rose text-white animate-spin-slow' 
                  : 'bg-white text-rose border border-rose/20'
              }`}
            >
              {isPlaying ? <Music size={20} /> : <Music2 size={20} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
