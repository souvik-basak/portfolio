import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "./MobilePageNav.scss";

const MobilePageNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define page order
  const pages = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/experience", name: "Experience" },
    { path: "/project", name: "Projects" },
    { path: "/contact", name: "Contact" },
  ];

  // Find current page index
  const currentIndex = pages.findIndex(
    (page) => page.path === location.pathname,
  );

  // Don't show nav on project detail pages or if not found
  if (currentIndex === -1) return null;

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < pages.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      navigate(pages[currentIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      navigate(pages[currentIndex + 1].path);
    }
  };

  const navAlignmentClass =
    !hasPrevious && hasNext
      ? " only-next"
      : hasPrevious && !hasNext
        ? " only-prev"
        : "";

  return (
    <div
      className={`mobile-page-nav${
        location.pathname === "/contact" ? " is-contact" : ""
      }${navAlignmentClass}`}
    >
      {hasPrevious && (
        <motion.button
          className="nav-button nav-button-left"
          onClick={handlePrevious}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          aria-label={`Go to ${pages[currentIndex - 1].name}`}
        >
          <FaChevronLeft className="arrow-icon" />
          <span className="nav-label">{pages[currentIndex - 1].name}</span>
        </motion.button>
      )}

      {hasNext && (
        <motion.button
          className="nav-button nav-button-right"
          onClick={handleNext}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          aria-label={`Go to ${pages[currentIndex + 1].name}`}
        >
          <span className="nav-label">{pages[currentIndex + 1].name}</span>
          <FaChevronRight className="arrow-icon" />
        </motion.button>
      )}
    </div>
  );
};

export default MobilePageNav;
