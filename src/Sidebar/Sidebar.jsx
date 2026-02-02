import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import LogoS from "../assets/images/logo-s.avif";
import LogoSub from "../assets/images/logo-sub.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faEnvelope,
  faDiagramProject,
  faHome,
  faCode,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useCallback, useMemo, memo, useEffect } from "react";
import { motion } from "framer-motion";
import VisitorCounter from "../components/VisitorCounter/VisitorCounter";

// Memoize VisitorCounter to prevent unnecessary re-renders
const MemoizedVisitorCounter = memo(VisitorCounter);

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Memoize prefetch routes
  const prefetchRoutes = useMemo(
    () => ({
      about: () => import("../components/About/About"),
      contact: () => import("../components/Contact/Contact"),
      skills: () => import("../components/Portfolio/Portfolio"),
      project: () => import("../components/Project/Project"),
      experience: () => import("../components/Experience/Experience"),
    }),
    [],
  );

  // Memoize prefetch function
  const prefetch = useCallback(
    (key) => {
      const load = prefetchRoutes[key];
      if (load) {
        load();
      }
    },
    [prefetchRoutes],
  );

  // Memoize prefetch handlers
  const prefetchHandlers = useCallback(
    (key) => ({
      onMouseEnter: () => prefetch(key),
      onFocus: () => prefetch(key),
      onTouchStart: () => prefetch(key),
      onClick: () => prefetch(key),
    }),
    [prefetch],
  );

  const handleNavClose = useCallback(() => setShowNav(false), []);
  const handleNavOpen = useCallback(() => setShowNav(true), []);

  const navVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  const overlayVariants = {
    open: {
      opacity: 0.45,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" loading="lazy" />
        <img className="sub-logo" src={LogoSub} alt="sub-logo" loading="lazy" />
      </Link>

      <motion.nav
        className={showNav ? "mobile-show" : ""}
        variants={navVariants}
        initial={false}
        animate={isMobile ? (showNav ? "open" : "closed") : "open"}
        style={{ pointerEvents: isMobile && !showNav ? "none" : "auto" }}
      >
        {/* Mobile header */}
        <div className="nav-header">
          <FontAwesomeIcon
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
            onClick={handleNavClose}
          />
        </div>

        <NavLink
          exact="true"
          className="home-link"
          activeclassname="active"
          to="/"
          onClick={handleNavClose}
          aria-label="Home"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          aria-label="About Me"
          {...prefetchHandlers("about")}
          onClick={() => {
            prefetch("about");
            handleNavClose();
          }}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/experience"
          className="experience-link"
          aria-label="Experience"
          {...prefetchHandlers("experience")}
          onClick={() => {
            prefetch("experience");
            handleNavClose();
          }}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
          aria-label="Skills"
          {...prefetchHandlers("skills")}
          onClick={() => {
            prefetch("skills");
            handleNavClose();
          }}
        >
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/project"
          className="project-link"
          aria-label="Projects"
          {...prefetchHandlers("project")}
          onClick={() => {
            prefetch("project");
            handleNavClose();
          }}
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
          aria-label="Contact"
          {...prefetchHandlers("contact")}
          onClick={() => {
            prefetch("contact");
            handleNavClose();
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>

        <div className="mobile-socials">
          <a
            href="https://www.linkedin.com/in/souvikbasak831365186/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/souvik-basak"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://x.com/souvikbasak0"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter profile"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/souviiiiiik/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram profile"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="mobile-counter">
          <MemoizedVisitorCounter />
        </div>
      </motion.nav>

      <motion.div
        className="nav-overlay"
        variants={overlayVariants}
        initial={false}
        animate={isMobile ? (showNav ? "open" : "closed") : "closed"}
        onClick={handleNavClose}
        style={{ pointerEvents: isMobile && showNav ? "auto" : "none" }}
      />

      {/* Desktop social links */}
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/souvikbasak831365186/"
            aria-label="LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/souvik-basak"
            aria-label="GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://x.com/souvikbasak0"
            aria-label="Twitter profile"
          >
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/souviiiiiik/"
            aria-label="Instagram profile"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>

      <MemoizedVisitorCounter />

      <FontAwesomeIcon
        icon={faBars}
        color="#ffd700"
        className="burger-icon"
        size="3x"
        onClick={handleNavOpen}
      />
    </div>
  );
};

export default memo(Sidebar);
