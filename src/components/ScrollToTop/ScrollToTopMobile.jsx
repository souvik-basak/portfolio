import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.scss";

const ScrollToTopMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleVisibility = () => {
    if (window.scrollY > 300 && isMobile) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopMobile;
