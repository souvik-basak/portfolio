
import "./Portfolio.scss";
import AnimatedLetters from "../Animation/Animation";
import dragSoundSrc from "../../assets/music/dragSound.mp3";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Next.js",
  "Express.js",
  "SQL",
  "MongoDB",
  "Git",
  "GitHub",
  "npm",
  "pnpm",
  "TypeScript",
  "GraphQL",
  "Sass",
  "Redux",
  "Tailwind",
  "Vitest",
  "Figma",
  "Vite",
  "ESLint",
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const Portfolio = () => {
  const audioRef = useRef(null);
  const [showAlert, setShowAlert] = useState(true);
  const [letterClass, setLetterClass] = useState("text-animate");
  const containerRef = useRef(null);
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

  const handleDragStart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const handleDragEnd = () => {
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
            As an enthusiastic Front-End Web Developer actively seeking new
            opportunities, I possess a comprehensive set of technical skills and
            a strong foundation in technical and soft skills. My technical
            expertise includes:
          </p>
          <p>
            Technical Skills:
            <br />- Languages:{" "}
            <span>HTML5, CSS3, JavaScript (ES6+), SQL, SCSS</span>
            <br />- Library: <span>React JS</span>
            <br />- Framework: <span>Tailwind CSS</span>
            <br />- Version Control: <span>Git, GitHub</span>
            <br />- Package Managers: <span>npm, yarn</span>
            <br />- APIs: <span>RESTful APIs, GraphQL</span>
            <br />- Tools: <span>VS Code, Figma, Vercel.</span>
          </p>
          <p>
            In addition to my technical skills, I have strong problem-solving
            abilities, great attention to detail, excellent communication
            skills, the ability to work effectively in a team, adaptability, and
            strong time management skills.Moreover, I am comfortable using
            collaboration platforms like <span>Slack</span> and{" "}
            <span>JIRA</span>. I am eager to contribute to innovative projects
            and collaborate with forward-thinking teams
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
                className="skill-item"
                variants={skillVariants}
                drag
                onDragStart={handleDragStart}
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
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
