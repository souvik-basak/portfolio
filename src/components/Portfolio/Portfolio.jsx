import "./Portfolio.scss";
import AnimatedLetters from "../Animation/Animation";
import dragSoundSrc from "../../assets/music/dragSound.mp3";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSass,
  FaSlack,
  FaPython,
  FaDatabase,
  FaCodeBranch,
  FaUniversalAccess,
  FaPalette,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPnpm,
  SiTypescript,
  SiGraphql,
  SiRedux,
  SiTailwindcss,
  SiVitest,
  SiFigma,
  SiVite,
  SiVercel,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPostman,
  SiCplusplus,
  SiDocker,
  SiGithubactions,
  SiCypress,
  // SiPlaywright,
  SiTestinglibrary,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS3" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript (ES6+)" },
  { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
  { icon: <SiCplusplus color="#00599C" />, name: "C/C++" },
  { icon: <FaPython color="#3776AB" />, name: "Python" },
  { icon: <FaReact color="#61DAFB" />, name: "React" },
  { icon: <SiNextdotjs color="#000000" />, name: "Next.js" },
  { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
  { icon: <SiExpress color="#000000" />, name: "Express.js" },
  { icon: <SiTailwindcss color="#06B6D4" />, name: "TailwindCSS" },
  { icon: <FaSass color="#CC6699" />, name: "SCSS" },
  { icon: <SiPrisma color="#2D3748" />, name: "Prisma" },
  { icon: <SiSocketdotio color="#010101" />, name: "Socket.io" },
  { icon: <SiRedux color="#764ABC" />, name: "Redux" },
  { icon: <FaPalette color="#c084fc" />, name: "shadcn/ui" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
  { icon: <DiRedis color="#DC382D" />, name: "Redis" },
  { icon: <FaDatabase color="#0f172a" />, name: "SQL / DBMS" },
  { icon: <SiDocker color="#2496ED" />, name: "Docker" },
  { icon: <FaAws color="#FF9900" />, name: "AWS (S3, Cognito)" },
  { icon: <SiGithubactions color="#2088FF" />, name: "GitHub Actions" },
  { icon: <SiGraphql color="#E10098" />, name: "GraphQL" },
  { icon: <SiJsonwebtokens color="#000000" />, name: "JWT Auth" },
  { icon: <SiCypress color="#69D3A7" />, name: "Cypress" },
  // { icon: <SiPlaywright color="#2dba4e" />, name: "Playwright" },
  { icon: <SiTestinglibrary color="#E33332" />, name: "Testing Library" },
  { icon: <SiVitest color="#729B1B" />, name: "Vitest" },
  { icon: <FaCodeBranch color="#5b21b6" />, name: "Agile / Code Reviews" },
  { icon: <FaUniversalAccess color="#2563eb" />, name: "Accessibility (WCAG)" },
  { icon: <SiVite color="#646CFF" />, name: "Vite" },
  { icon: <SiPnpm color="#F69220" />, name: "pnpm" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  { icon: <FaGitAlt color="#F05032" />, name: "Git" },
  { icon: <FaGithub color="#181717" />, name: "GitHub" },
  { icon: <SiVercel color="#000000" />, name: "Vercel" },
  { icon: <VscVscode color="#007ACC" />, name: "VS Code" },
  { icon: <SiFigma color="#F24E1E" />, name: "Figma" },
  { icon: <FaSlack color="#4A154B" />, name: "Slack" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.15 } },
};
const Portfolio = () => {
  const audioRef = useRef(null);
  const [showAlert, setShowAlert] = useState(true);
  const [letterClass, setLetterClass] = useState("text-animate");
  const containerRef = useRef(null);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragConstraints, setDragConstraints] = useState({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDragConstraints({
        left: -width / 4,
        top: -height / 4,
        right: width / 4,
        bottom: height / 4,
      });
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    audioRef.current = new Audio(dragSoundSrc);
    audioRef.current.volume = 0.05; // Set volume low for subtlety
    audioRef.current.preload = "auto";
  }, []);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              strArray={["S", "k", "i", "l", "l", "s"]}
              letterClass={letterClass}
              idx={15}
            />
          </h1>

          <p>
            I am a fullstack developer building fast,
            accessible web applications. My core stack centers on React,
            Next.js, and TypeScript, with backend systems built in Node.js and
            Express and deployed to cloud platforms.
          </p>

          <p>
            <strong>Technical Skills</strong>
            <br />
            <strong>Languages:</strong>{" "}
            <span>JavaScript (ES6+), TypeScript, C/C++, Python, SQL</span>
            <br />
            <strong>Frontend:</strong>{" "}
            <span>
              React, Next.js, Tailwind CSS, shadcn/ui, Zustand, Redux, Vite
            </span>
            <br />
            <strong>Backend and Realtime:</strong>{" "}
            <span>Node.js, Express, REST APIs, GraphQL, Socket.io</span>
            <br />
            <strong>Data and Infrastructure:</strong>{" "}
            <span>
              PostgreSQL, MongoDB, Redis, Prisma, Docker, AWS (S3, Cognito)
            </span>
            <br />
            <strong>Testing and Quality:</strong>{" "}
            <span>
              Jest, React Testing Library, Cypress, Playwright, Vitest, ESLint
            </span>
            <br />
            <strong>DevOps and Tooling:</strong>{" "}
            <span>
              Git, GitHub Actions, CI and CD pipelines, pnpm, Postman, Vercel,
              VS Code
            </span>
          </p>

          <p>
            I prioritize clean architecture, secure authentication with JWT,
            performance optimization, accessibility standards, and collaborative
            delivery through code reviews and Agile workflows.
          </p>
        </div>

        <div className="skills-container" ref={containerRef}>
          {showAlert && (
            <span className="drag-alert">You can drag the elements</span>
          )}
          <motion.div
            className="skills-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`skill-item ${draggingIndex === index ? "dragging" : ""}`}
                variants={skillVariants}
                drag
                onDragStart={() => handleDragStart(index)}
                onDragEnd={handleDragEnd}
                dragConstraints={dragConstraints}
                dragElastic={1}
                dragTransition={{
                  power: 0.3,
                  timeConstant: 200,
                  bounceStiffness: 100,
                  bounceDamping: 10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  mass: 0.5,
                }}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                {skill.icon}
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
