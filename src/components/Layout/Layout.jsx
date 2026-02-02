import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import MusicToggle from "../MusicToggle/MusicToggle";
import TimeLocation from "../TimeLocation/TimeLocation";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import FirstTimeLoader from "../FirstTimeLoader/FirstTimeLoader";
import MobilePageNav from "../MobilePageNav/MobilePageNav";
import { applyPageMetadata } from "../../seo";
import "./Layout.scss";

function Layout() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("hasVisited");
  });

  // Update document metadata per route for basic SPA SEO
  useEffect(() => {
    applyPageMetadata(location.pathname);
  }, [location.pathname]);

  const handleLoaderComplete = () => {
    if (!showLoader) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("hasVisited", "true");
    }
    setShowLoader(false);
  };

  // Memoize attention messages to prevent recreation
  const attentionMessages = useMemo(
    () => [
      "Full stack developer",
      "Building web applications",
      "Clean and scalable code",
      "Modern frontend and backend",
      "View my projects",
    ],
    [],
  );

  // Tab visibility listener - change title when user switches tabs
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        const randomIndex = Math.floor(
          Math.random() * attentionMessages.length,
        );
        document.title = attentionMessages[randomIndex];
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle;
    };
  }, [attentionMessages]);

  if (showLoader) {
    return <FirstTimeLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="App">
      <>
        {/* <Spotlight /> */}
        <div className="music-toggle-container">
          <MusicToggle />
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <TimeLocation />
          </motion.div>
          <ScrollToTop />
        </div>
        <MobilePageNav />
      </>
    </div>
  );
}

export default Layout;
