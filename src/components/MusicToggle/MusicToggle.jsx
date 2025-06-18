import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MusicToggle.scss";

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(() => {
    const storedIsPlaying = localStorage.getItem("isPlaying");
    return storedIsPlaying === "true";
  });

  const [volume, setVolume] = useState(() => {
    const storedVolume = localStorage.getItem("volume");
    return storedVolume ? parseFloat(storedVolume) : 0.03;
  });

  const [showToggle, setShowToggle] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowToggle(false);
      } else {
        setShowToggle(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const audio = document.getElementById("background-music");
    if (!audio) return;

    audio.volume = volume;

    const tryPlay = async () => {
      audio.muted = false;
      try {
        if (isPlaying) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (err) {
        console.error("Autoplay blocked:", err);
      }
    };

    tryPlay();

    const handleUserInteraction = () => {
      tryPlay();
      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => window.removeEventListener("click", handleUserInteraction);
  }, [isPlaying, volume]);

  useEffect(() => {
    if (!isPlaying) return;

    const playAudio = () => {
      const audio = document.getElementById("background-music");
      if (audio) {
        audio.play().catch(() => {
          console.log("Playback prevented. User gesture needed.");
        });
      }
    };

    window.addEventListener("click", playAudio, { once: true });

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, [isPlaying]);
  

  useEffect(() => {
    localStorage.setItem("isPlaying", isPlaying);
    localStorage.setItem("volume", volume);
  }, [isPlaying, volume]);

  return (
    <>
      <motion.div
        className="music-toggle-container"
        animate={{ y: showToggle ? 0 : -100 }}
        transition={{ type: "tween", duration: 0.8 }}
      >
        <div
          className="music-toggle"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          <motion.div
            className="toggle-circle"
            animate={{ x: isPlaying ? 15 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            style={{ background: isPlaying ? "#ffd700" : "#334f66" }}
          />
        </div>

        <AnimatePresence>
          <motion.div
            className="sound-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            SOUND {isPlaying ? "[ON]" : "[OFF]"}
          </motion.div>
        </AnimatePresence>

        {/* <AnimatePresence>
          {isPlaying && (
            <motion.input
              type="range"
              min="0"
              max="0.5"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="volume-slider"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100px" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ type: "spring", damping: 30 }}
            />
          )}
        </AnimatePresence> */}
      </motion.div>
    </>
  );
}

export default MusicToggle;
