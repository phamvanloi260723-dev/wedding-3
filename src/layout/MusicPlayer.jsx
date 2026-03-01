import React from 'react';
import { Music, Music2 } from 'lucide-react';

const MusicPlayer = ({ isPlaying, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-[2000] w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
        isPlaying 
          ? 'bg-rose text-white animate-spin-slow' 
          : 'bg-white text-rose border border-rose/20'
      }`}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? <Music size={20} /> : <Music2 size={20} />}
    </button>
  );
};

export default MusicPlayer;
