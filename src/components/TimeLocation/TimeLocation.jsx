import { useEffect, useState } from "react";
import "./TimeLocation.scss";

function TimeLocation() {
  const [timeString, setTimeString] = useState("");

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
    <div className="time-location-container">
      <span className="blink-dot" />
      <span>{timeString}</span>
    </div>
  );
}

export default TimeLocation;
