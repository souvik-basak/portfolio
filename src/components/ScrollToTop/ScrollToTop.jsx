import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollContainerRef = useRef(null);

  const toggleVisibility = () => {
    const threshold = isMobile ? 150 : 300;
    let scrollY = 0;

    if (scrollContainerRef.current) {
      scrollY = scrollContainerRef.current.scrollTop;
    } else {
      scrollY = window.scrollY || document.documentElement.scrollTop;
    }

    if (scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = document.querySelector(
      ".project-page, .experience-page, .portfolio-page, .contact-page, .container",
    );
    if (container && container.scrollHeight > container.clientHeight) {
      scrollContainerRef.current = container;
      container.addEventListener("scroll", toggleVisibility);
    } else {
      window.addEventListener("scroll", toggleVisibility);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "scroll",
          toggleVisibility,
        );
      }
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

export default ScrollToTop;
