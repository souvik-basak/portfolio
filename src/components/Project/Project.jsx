import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Project.scss";
import AnimatedLetters from "../Animation/Animation";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiNextdotjs,
  SiPostman,
  SiGooglegemini,
  SiClerk,
  SiResend,
  SiPrisma,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";

import { projects } from "../../data/projects";

const techIcons = {
  HTML: <FaHtml5 color="#E34F26" />,
  CSS: <FaCss3Alt color="#1572B6" />,
  JavaScript: <SiJavascript color="#F7DF1E" />,
  React: <FaReact color="#61DAFB" />,
  NodeJs: <FaNodeJs color="#339933" />,
  ExpressJs: <SiExpress color="#000000" />,
  MongoDB: <SiMongodb color="#47A248" />,
  TypeScript: <SiTypescript color="#3178C6" />,
  GraphQL: <SiGraphql color="#E10098" />,
  Redux: <SiRedux color="#764ABC" />,
  TailwindCSS: <SiTailwindcss color="#06B6D4" />,
  PostgreSQL: <SiPostgresql color="#4169E1" />,
  Postman: <SiPostman color="#FF6C37" />,
  Git: <FaGitAlt color="#F05032" />,
  GitHub: <FaGithub color="#181717" />,
  Sass: <FaSass color="#CC6699" />,
  Nextjs: <SiNextdotjs color="#000000" />,
  Clerk: <SiClerk color="#654BF6" />,
  Prisma: <SiPrisma color="#2D3748" />,
  Resend: <SiResend color="#2563EB" />,
  Gemini: <SiGooglegemini color="#3986FC" />,
  Redis: <DiRedis color="#DC382D" />,
};

const ProjectItem = ({ project, index }) => {
  const { scrollY } = useViewportScroll();
  const maxOffset = -40 - index * 10;
  const y = useTransform(scrollY, [0, 600], [0, maxOffset]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-item"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        scale: isHovered ? 1.05 : 1,
        boxShadow: isHovered ? "0 15px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <motion.img
        src={project.image}
        alt={project.name}
        className="project-image"
        style={{ y, filter: isHovered ? "blur(5px)" : "none" }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      <div className={`overlay ${isHovered ? "show" : ""}`}>
        <h2 className="title">{project.name}</h2>
        <p className="description">{project.description}</p>

        <div className="tech-stack">
          <h3 className="tech-title">Techstack</h3>
          <div className="tech-stack-cards">
            {project.tech.map((tech, idx) => (
              <div key={idx} className="tech-item">
                <div className="tech-icon">
                  {techIcons[tech.replace(/\s|\./g, "")] || tech}
                </div>
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-buttons">
          <button className="btn" onClick={() => window.open(project.url)}>
            View
          </button>
          <button className="btn" onClick={() => window.open(project.github)}>
            GitHub
          </button>
        </div>
      </div>
    </motion.div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".project-item",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
    );
  }, []);

  return (
    <div className="container project-page">
      <h1 className="page-title">
        <AnimatedLetters
          strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
          letterClass={letterClass}
          idx={15}
        />
      </h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
