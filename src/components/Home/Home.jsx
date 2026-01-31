import "./Home.scss";
import { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-s.avif";
import { Link } from "react-router-dom";
import AnimatedLetters from "../Animation/Animation";
import Logo from "./Logo/Logo";
import EncryptButton from "../EncryptButton/EncryptButton";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["o", "u", "v", "i", "k"];
  const jobArray = [
    "W",
    "e",
    "b",
    "s",
    "i",
    "t",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>{" "}
            <span className={`${letterClass} _15`}>a</span>
            <span className={`${letterClass} _16`}>m</span>
            <img
              src={LogoTitle}
              alt="S"
              width="32"
              height="32"
              fetchPriority="high"
              loading="eager"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Software Developer | React • Node.js • TypeScript</h2>
          <div className="btn-set">
            <Link to="/contact">
              <EncryptButton text="CONTACT ME" />
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <EncryptButton text="VIEW RESUME" />
            </a>
          </div>
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Home;
