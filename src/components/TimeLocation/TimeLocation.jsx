import { useEffect, useState } from "react";
import "./TimeLocation.scss";

function TimeLocation() {
  const [location, setLocation] = useState({ city: "", country: "" });
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setLocation({ city: data.city, country: data.country_name });
      } catch (error) {
        console.error("Location fetch failed", error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const tzOffset = -now.getTimezoneOffset() / 60;
      const tzStr = `GMT${tzOffset >= 0 ? "+" : ""}${tzOffset}`;
      setTimeString(`${time} ${tzStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-location-container">
      <span className="blink-dot" />
      <span>{location.city}, {location.country} {timeString}</span>
    </div>
  );
}

export default TimeLocation;
