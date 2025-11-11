import { useState, useEffect, useRef } from "react";
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
  const barRefs = useRef([]);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowToggle(!(currentScrollY > lastScrollY && currentScrollY > 50));
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Audio control
  useEffect(() => {
    const audio = document.getElementById("background-music");
    if (!audio) return;
    audio.volume = volume;

    const tryPlay = async () => {
      audio.muted = false;
      try {
        if (isPlaying) await audio.play();
        else audio.pause();
      } catch (err) {
        console.warn("Autoplay blocked:", err);
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

  // Save state
  useEffect(() => {
    localStorage.setItem("isPlaying", isPlaying);
    localStorage.setItem("volume", volume);
  }, [isPlaying, volume]);

  // Random pulse (paused state freeze)
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      barRefs.current.forEach((bar) => {
        if (bar) {
          const randomScale = (Math.random() * 1.8 + 0.8).toFixed(2); // more bounce
          bar.style.transform = `scaleY(${randomScale})`;
        }
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <motion.div
      className="soundwave-container"
      animate={{ y: showToggle ? 0 : -100 }}
      transition={{ type: "tween", duration: 0.8 }}
      onClick={() => setIsPlaying((prev) => !prev)}
    >
      <div className="soundwave-bars">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            ref={(el) => (barRefs.current[i] = el)}
            className={`bar ${isPlaying ? "active" : "paused"}`}
          ></span>
        ))}
      </div>

      {/* <AnimatePresence>
        <motion.div
          className="sound-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
        >
          SOUND {isPlaying ? "[ON]" : "[PAUSED]"}
        </motion.div>
      </AnimatePresence> */}
    </motion.div>
  );
}

export default MusicToggle;
