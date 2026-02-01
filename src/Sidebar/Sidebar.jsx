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
import { useState, useCallback, useMemo, memo } from "react";
import VisitorCounter from "../components/VisitorCounter/VisitorCounter";

// Memoize VisitorCounter to prevent unnecessary re-renders
const MemoizedVisitorCounter = memo(VisitorCounter);

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

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

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" loading="lazy" />
        <img className="sub-logo" src={LogoSub} alt="sub-logo" loading="lazy" />
      </Link>

      <nav className={showNav ? "mobile-show" : ""}>
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
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
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
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/souvik-basak"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://x.com/souvikbasak0" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.instagram.com/souviiiiiik/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="mobile-counter">
          <MemoizedVisitorCounter />
        </div>
      </nav>

      {/* Desktop social links */}
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/souvikbasak831365186/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/souvik-basak"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://x.com/souvikbasak0">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/souviiiiiik/"
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
