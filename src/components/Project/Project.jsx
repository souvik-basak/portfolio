import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Project.scss";
import AnimatedLetters from "../Animation/Animation";

import diceGameImg from "../../data/project-img/dice-game.png";
import currencyConverterImg from "../../data/project-img/currency-converter.jpg";
import notesAppImg from "../../data/project-img/notes-app.png";
import ChatterBoxImg from "../../data/project-img/chatterbox.png";

const projects = [
  {
    id: 1,
    name: "Chatter Box",
    description: "This is a project",
    image: ChatterBoxImg,
    tech: ["React", "MongoDB", "Node.js", "Express.js"],
    url: "https://chatterbox-v29m.onrender.com/",
    github: "https://github.com/souvik-basak/ChatterBox",
  },
  {
    id: 2,
    name: "Qwik Notes",
    description: "This is a project",
    image: notesAppImg,
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    url: "https://qwiknote.vercel.app",
    github: "https://github.com/souvik-basak/notes-app",
  },
  {
    id: 3,
    name: "Dice Game",
    description: "This is a project",
    image: diceGameImg,
    tech: ["React", "TailwindCSS"],
    url: "https://dice-game-six-blue.vercel.app/",
    github: "https://github.com/souvik-basak/dice-game",
  },
  {
    id: 4,
    name: "Coin Convert",
    description: "This is a project",
    image: currencyConverterImg,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://coinconvert.vercel.app/",
    github: "https://github.com/souvik-basak/convert_currency",
  },
];

const ProjectItem = ({ project, index }) => {
  const { scrollY } = useViewportScroll();
  const maxOffset = -40 - index * 10; // parallax offset varies per item
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
  <div className="tech-stack">
    {project.tech.map((tech, idx) => (
      <span key={idx} className="tech-item">
        {tech}
      </span>
    ))}
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
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    );
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Project;
