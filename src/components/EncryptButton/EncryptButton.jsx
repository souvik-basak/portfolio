import { useRef, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "./EncryptButton.scss";

const CHARS = "!@#$%^&*():{};|,.<>/?[]~`";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const EncryptButton = ({ text, color, onClick }) => {
  const intervalRef = useRef(null);
  const [scrambledText, setScrambledText] = useState(text);

  const scramble = () => {
    let pos = 0;
    intervalRef.current = setInterval(() => {
      const mixed = text
        .split("")
        .map((char, i) => {
          if (pos / CYCLES_PER_LETTER > i) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setScrambledText(mixed);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) stopScramble();
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setScrambledText(text);
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={`encrypt-button group ${color}`}
    >
      <div className="content">
        <span>{scrambledText}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="highlight"
      />
    </motion.button>
  );
};

EncryptButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

EncryptButton.defaultProps = {
  text: "Encrypt",
  color: "indigo",
  onClick: () => {},
};

export default EncryptButton;
