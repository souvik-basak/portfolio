import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./ProjectDetail.scss";
import { projects } from "../../data/projects";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaArrowLeft,
  FaExternalLinkAlt,
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

const ProjectDetail = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === projectName);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/project");
    }
  }, [projectName, navigate]);

  if (!project) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="container project-detail-page">
      <motion.button
        className="back-button"
        onClick={() => navigate("/project")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaArrowLeft className="back-icon" /> Back to Projects
      </motion.button>

      <motion.div
        className="detail-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="project-header" variants={itemVariants}>
          <h1 className="project-title">{project.name}</h1>
          <p className="project-description">{project.fullDetails}</p>
        </motion.div>

        <motion.div className="project-image-section" variants={itemVariants}>
          <img
            src={project.image}
            alt={project.name}
            className="detail-image"
          />
        </motion.div>

        <motion.div
          className="section"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Tech Stack</h2>
          <div className="tech-grid">
            {project.tech.map((tech, idx) => (
              <div key={idx} className="tech-card">
                <div className="tech-icon">
                  {techIcons[tech.replace(/\s|\./g, "")] || tech}
                </div>
                <span className="tech-label">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid-sections"
          variants={scrollVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid-row">
            <div className="grid-item">
              <h2 className="section-title">Features</h2>
              <ul className="features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="grid-item">
              <h2 className="section-title">Challenges</h2>
              <ul className="challenges-list">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid-row">
            <div className="grid-item">
              <h2 className="section-title">Learnings</h2>
              <ul className="learnings-list">
                {project.learnings.map((learning, idx) => (
                  <li key={idx}>{learning}</li>
                ))}
              </ul>
            </div>

            <div className="grid-item links-section">
              <h2 className="section-title">Links</h2>
              <div className="links-container">
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn live-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live <FaExternalLinkAlt className="link-icon" />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-btn github-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Github <FaExternalLinkAlt className="link-icon" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
