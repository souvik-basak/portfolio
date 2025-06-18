import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import { useEffect, useState, useRef } from "react";
import Loader from "../Loader/Loader.jsx";
import FirstTimeLoader from "../FirstTimeLoader/FirstTimeLoader";
import { motion } from "framer-motion";
import MusicToggle from "../MusicToggle/MusicToggle";
import TimeLocation from "../TimeLocation/TimeLocation";
import "./Layout.scss";

function Layout() {
  const location = useLocation();

  const [showFirstTimeLoader, setShowFirstTimeLoader] = useState(() => {
    return !localStorage.getItem("visited");
  });

  const [loading, setLoading] = useState(false);
  const skipNextLoader = useRef(false); // flag to skip next route loader only once

  // First-time loader logic
  useEffect(() => {
    if (showFirstTimeLoader) {
      const timer = setTimeout(() => {
        localStorage.setItem("visited", "true");
        setShowFirstTimeLoader(false);
        skipNextLoader.current = true;
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showFirstTimeLoader]);
  useEffect(() => {
    if (!showFirstTimeLoader) {
      if (skipNextLoader.current) {
        skipNextLoader.current = false;
        return;
      }

      setLoading(true);
      const routeTimer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(routeTimer);
    }
  }, [location, showFirstTimeLoader]);

  return (
    <div className="App">
      {showFirstTimeLoader ? (
        <FirstTimeLoader />
      ) : (
        <>
          {loading && <Loader />}
          <div className="music-toggle-container">
            {!loading && <MusicToggle />}
          </div>
          <Sidebar />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#115190",
                color: "#fff",
                fontFamily: "sans-serif",
                padding: "10px 20px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "16px",
              },
              success: {
                style: { background: "#28a745" },
              },
              error: {
                style: { background: "#dc3545" },
              },
            }}
            transition="slide"
          />
          <div className="page">
            <span className="tags top-tags">
              &lt;html&gt;
              <br />
              <span className="top-tag-body">&lt;body&gt;</span>
            </span>

            <Outlet />

            <span className="tags bottom-tags">
              <span className="bottom-tag-body">&lt;/body&gt;</span>
              <br />
              &lt;/html&gt;
            </span>

            {!showFirstTimeLoader && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <TimeLocation />
              </motion.div>
            )}
            
          </div>
        </>
      )}
    </div>
  );
}

export default Layout;
