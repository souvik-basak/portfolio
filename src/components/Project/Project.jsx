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

import diceGameImg from "../../data/project-img/dice-game.png";
import currencyConverterImg from "../../data/project-img/currency-converter.jpg";
import notesAppImg from "../../data/project-img/notes-app.png";
import ChatterBoxImg from "../../data/project-img/chatterbox.png";
import bubbleGameImg from "../../data/project-img/bubble-game.png";
import byteLabImg from "../../data/project-img/byte-lab.png";
import wealthyImg from "../../data/project-img/get-wealthy.png";
import disapprImg from "../../data/project-img/disappr.png";

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

const projects = [
  {
    id: 7,
    name: "Disappr",
    description:
      "Disappr is a privacy-first chat app with end-to-end encryption and auto-destructing conversations.",
    image: disapprImg,
    tech: ["Nextjs", "TypeScript", "TailwindCSS", "NodeJs", "Redis"],
    url: "https://disappr.vercel.app/",
    github: "https://github.com/souvik-basak/disappr",
  },
  {
    id: 6,
    name: "Get Wealthy",
    description:
      " A Modern personal finance management app to track expenses and savings.",
    image: wealthyImg,
    tech: ["Nextjs", "Postman", "Clerk", "Resend", "Prisma", "Gemini"],
    url: "https://getwealthy.vercel.app/",
    github: "https://github.com/souvik-basak/wealthy",
  },
  {
    id: 0,
    name: "Byte Lab",
    description:
      "Collaborative code editor and snippet manager designed for developers to write, execute, and share code seamlessly",
    image: byteLabImg,
    tech: ["Nextjs", "React", "TypeScript", "GraphQL", "TailwindCSS", "Clerk"],
    url: "https://byte-lab-lilac.vercel.app/",
    github: "https://github.com/souvik-basak/byte-lab",
  },
  {
    id: 1,
    name: "Chatter Box",
    description:
      "A real-time chat application with rooms and private messaging.",
    image: ChatterBoxImg,
    tech: ["React", "MongoDB", "NodeJs", "ExpressJs", "Postman"],
    url: "https://chatterbox-v29m.onrender.com/",
    github: "https://github.com/souvik-basak/ChatterBox",
  },
  {
    id: 2,
    name: "Qwik Notes",
    description:
      "A cloud-based notes app to manage and organize notes efficiently.",
    image: notesAppImg,
    tech: ["React", "NodeJs", "ExpressJs", "MongoDB", "Postman"],
    url: "https://qwiknote.vercel.app",
    github: "https://github.com/souvik-basak/notes-app",
  },
  {
    id: 3,
    name: "Dice Game",
    description: "A fun dice game built with modern frontend technologies.",
    image: diceGameImg,
    tech: ["React", "TailwindCSS"],
    url: "https://dice-game-six-blue.vercel.app/",
    github: "https://github.com/souvik-basak/dice-game",
  },
  {
    id: 4,
    name: "Coin Convert",
    description: "A currency converter app with live exchange rates.",
    image: currencyConverterImg,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://coinconvert.vercel.app/",
    github: "https://github.com/souvik-basak/convert_currency",
  },
  {
    id: 5,
    name: "Bubble Game",
    description: "Simple and intuitive gameplay with timer-based challenges.",
    image: bubbleGameImg,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://souvik-basak.github.io/bubble-game/",
    github: "https://github.com/souvik-basak/Bubble_Game",
  },
];

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
