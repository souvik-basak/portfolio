import "./Home.scss";
import { useEffect, useState } from "react";
import LogoTitle from "../../assets/images/logo-s.png";
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
  useEffect(()=>{
    setTimeout(()=>{
      setLetterClass("text-animate-hover")
    },4000)
  },[])
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
            <img src={LogoTitle} alt="developer" />
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
          <h2>Frontend Developer / JavaScript Expert / ReactJS Developer</h2>
          <div className="btn-set">
            <Link to="/contact">
              <EncryptButton text="CONTACT ME"/>
            </Link>
            <Link
              to="https://drive.google.com/file/d/1OrVD93uz_V_rK5s_7fpJSHbFR8kVpdnL/view?usp=sharing"
              target="_blank"
            >
              <EncryptButton text="VIEW RESUME" />
            </Link>
          </div>
        </div>
        <Logo />
      </div>
    </>
  );
};

export default Home;
