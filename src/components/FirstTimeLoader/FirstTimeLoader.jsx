import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import "./FirstTimeLoader.scss";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cursorVariants = {
  blink: {
    opacity: [0, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const FirstTimeLoader = () => {
  return (
    <motion.div
      className="first-time-loader"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="icon" variants={textVariants}>
        <FontAwesomeIcon icon={faHeadphones} size="3x" color="#ffd9006f" />
        <motion.p className="headphone-text" variants={textVariants}>
          This site includes sound. Headphones recommended.
        </motion.p>
      </motion.div>

      <motion.p className="intro-text" variants={textVariants}>
        Full stack developer portfolio. Focused on clean code, performance, and
        real world applications.
      </motion.p>

      <motion.div className="terminal-line" variants={textVariants}>
        <span>&gt; Loading projects</span>
        <motion.span
          className="cursor"
          variants={cursorVariants}
          animate="blink"
        >
          _
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default FirstTimeLoader;
