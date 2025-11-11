
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
  SiEslint,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";



const skills = [
  { icon: <FaHtml5 color="#E34F26" />, name: "HTML" },
  { icon: <FaCss3Alt color="#1572B6" />, name: "CSS" },
  { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
  { icon: <FaReact color="#61DAFB" />, name: "React" },
  { icon: <SiRedux color="#764ABC" />, name: "Redux" },
  { icon: <SiTailwindcss color="#06B6D4" />, name: "Tailwind" },
  { icon: <FaSass color="#CC6699" />, name: "Sass" },
  { icon: <SiVite color="#646CFF" />, name: "Vite" },
  { icon: <SiVitest color="#729B1B" />, name: "Vitest" },
  { icon: <SiEslint color="#4B32C3" />, name: "ESLint" },
  { icon: <SiFigma color="#F24E1E" />, name: "Figma" },
  { icon: <SiNextdotjs color="#000000" />, name: "Next.js" },
  { icon: <VscVscode color="#007ACC" />, name: "VS Code" },
  { icon: <SiVercel color="#000000" />, name: "Vercel" },
  { icon: <FaSlack color="#4A154B" />, name: "Slack" },
  // { icon: <SiFramermotion color="#0055FF" />, name: "Framer Motion" },

  // Backend
  { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
  { icon: <SiExpress color="#000000" />, name: "Express.js" },
  { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
  { icon: <SiPostgresql color="#4169E1" />, name: "PostgreSQL" },
  { icon: <SiPrisma color="#2D3748" />, name: "Prisma" },
  { icon: <SiGraphql color="#E10098" />, name: "GraphQL" },
  { icon: <SiSocketdotio color="#010101" />, name: "Socket.IO" },
  { icon: <SiJsonwebtokens color="#000000" />, name: "JWT" },

  // Tools & Version Control
  { icon: <FaGitAlt color="#F05032" />, name: "Git" },
  { icon: <FaGithub color="#181717" />, name: "GitHub" },
  { icon: <SiPnpm color="#F69220" />, name: "pnpm" },
  { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
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
            I am a Full-Stack Web Developer with a strong focus on Front-End
            development. I enjoy building responsive, interactive, and
            high-performance web applications that provide seamless user
            experiences. My work combines modern JavaScript frameworks with
            robust backend solutions to deliver reliable, scalable applications.
          </p>

          <p>
            <strong>Technical Skills:</strong>
            <br />• <strong>Frontend:</strong>{" "}
            <span>
              React.js, Next.js, Redux, Tailwind CSS, TypeScript, Framer Motion
            </span>
            <br />• <strong>Backend:</strong>{" "}
            <span>Node.js, Express.js, MongoDB, PostgreSQL, GraphQL</span>
            <br />• <strong>Languages & Styling:</strong>{" "}
            <span>HTML5, CSS3, JavaScript (ES6+), SCSS</span>
            <br />• <strong>Tools & Version Control:</strong>{" "}
            <span>Git, GitHub, pnpm, Postman, VS Code, Figma, Vercel</span>
            <br />• <strong>Testing:</strong>{" "}
            <span>Vitest, Jest, React Testing Library</span>
          </p>

          <p>
            I enjoy collaborating with teams, brainstorming creative solutions,
            and bringing ideas to life. I am comfortable using{" "}
            <span>Slack</span> and <span>JIRA</span> to stay organized, and I am
            always eager to learn new technologies and tackle challenging
            problems. My goal is to deliver high-quality, user-centric solutions
            that make a real impact.
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
                className={`skill-item ${draggingIndex === index ? 'dragging' : ''}`}
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
