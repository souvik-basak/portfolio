import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./TimeLocation.scss";

function TimeLocation() {
  const [timeString, setTimeString] = useState("");
  const [showToggle, setShowToggle] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTimeString(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="time-location-container"
      animate={{ y: showToggle ? 0 : -100 }}
      transition={{ type: "tween", duration: 0.8 }}
    >
      <span className="blink-dot" />
      <span>{timeString}</span>
    </motion.div>
  );
}

export default TimeLocation;
