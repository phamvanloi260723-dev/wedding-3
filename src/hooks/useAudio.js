import { useState, useEffect, useRef } from 'react';

export const useAudio = (url) => {
  const audioRef = useRef(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    
    // Ensure the source is set correctly
    if (audio.src !== window.location.origin + url && !audio.src.endsWith(url)) {
      audio.src = url;
      audio.load();
    }
    
    audio.loop = true;
    audio.preload = 'auto';

    const onPlay = () => {
      console.log("Audio started playing");
      setIsPlaying(true);
    };
    const onPause = () => {
      console.log("Audio paused");
      setIsPlaying(false);
    };
    const onError = (e) => {
      console.error("Audio error:", e);
      setIsPlaying(false);
    };

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onPause);
    audio.addEventListener('error', onError);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('ended', onPause);
      audio.removeEventListener('error', onError);
    };
  }, [url]);

  const play = () => {
    console.log("Attempting to play audio from:", url);
    audioRef.current.play()
      .catch(error => {
        console.error("Audio play failed interaction check:", error);
      });
  };

  const pause = () => {
    audioRef.current.pause();
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return { isPlaying, play, pause, toggle };
};
