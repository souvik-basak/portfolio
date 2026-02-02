import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Project.scss";
import AnimatedLetters from "../Animation/Animation";

import { projects } from "../../data/projects";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();

  return (
    <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
      <h2 className="project-title">{project.name}</h2>
      <p className="project-description">{project.description}</p>
      <button
        className="learn-more-btn"
        onClick={() => navigate(`/projects/${project.slug}`)}
      >
        Learn More...
      </button>
    </motion.div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
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

  return (
    <main className="container project-page">
      <h1 className="page-title">
        <AnimatedLetters
          strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
          letterClass={letterClass}
          idx={15}
        />
      </h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </main>
  );
};

export default Project;
