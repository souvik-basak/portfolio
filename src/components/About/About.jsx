import "./About.scss";
import AnimatedLetters from "../Animation/Animation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I&apos;m a very ambitious front-end developer looking for a role in
            an established IT company with the opportunity to work with the
            latest technologies on challenging and diverse projects. I have a
            strong work ethic, a passion for learning, and a desire to succeed.
            I am always looking for ways to improve my skills and knowledge in
            the field of web development.
          </p>
          <p>
            As an enthusiastic Front-End Web Developer actively seeking new
            opportunities, I possess a comprehensive set of technical skills and
            a strong foundation in soft skills. I&apos;m quiet confident,
            naturally curious, and perpetually working on improving my chops one
            problem at a time.
          </p>
          <p>
            In addition to my technical skills, I have strong problem-solving
            abilities, great attention to detail, excellent communication
            skills, the ability to work effectively in a team, adaptability, and
            strong time management skills.
          </p>
        </div>
        <div className="parallax-star">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="stage-cube-cont">
            <div className="cubeSpinner">
              <div className="face1">
                <FontAwesomeIcon icon={faReact} color="#02D6F0" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#f06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#254BDF" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#E8D44D" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faGithub} color="#000000" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faNodeJs} color="#509941" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;