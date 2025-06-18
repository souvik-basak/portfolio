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
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const barVariants = {
  initial: { width: "0%" },
  animate: {
    width: "100%",
    transition: {
      duration: 3.5,
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
          [Use headphones for the best experience]
        </motion.p>
      </motion.div>

      <motion.p className="intro-text" variants={textVariants}>
        I’m glad you’re here. Take a deep breath, put on your headphones, and
        enjoy this immersive journey into my creative space.
      </motion.p>

      <motion.div className="loader-bar-wrapper">
        <motion.div
          className="loader-bar"
          variants={barVariants}
          initial="initial"
          animate="animate"
        />
      </motion.div>
    </motion.div>
  );
};

export default FirstTimeLoader;
