import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
// import { gsap } from "gsap";
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
import { useState } from "react";
import VisitorCounter from "../components/VisitorCounter/VisitorCounter";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSub} alt="sub-logo" />
      </Link>

      <nav className={showNav ? "mobile-show" : ""}>
        {/* Mobile header */}
        <div className="nav-header">
          <FontAwesomeIcon
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
            onClick={() => setShowNav(false)}
          />
        </div>

        <NavLink
          exact="true"
          className="home-link"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/experience"
          className="experience-link"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/project"
          className="project-link"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faDiagramProject} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
          onClick={() => setShowNav(false)}
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
          <VisitorCounter />
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

      <VisitorCounter />

      <FontAwesomeIcon
        icon={faBars}
        color="#ffd700"
        className="burger-icon"
        size="3x"
        onClick={() => setShowNav(true)}
      />
    </div>
  );
};

export default Sidebar;
