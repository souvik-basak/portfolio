import { createContext, useContext, useState, useEffect } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.2);

  useEffect(() => {
    const audio = document.getElementById("background-music");
    if (audio) {
      audio.volume = volume;
      audio.muted = false;
      isPlaying ? audio.play().catch(() => {}) : audio.pause();
    }
  }, [isPlaying, volume]);

  return (
    <MusicContext.Provider
      value={{ isPlaying, setIsPlaying, volume, setVolume }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
