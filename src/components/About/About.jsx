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
import { FaAws } from "react-icons/fa";

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
            I&apos;m a frontend-focused full-stack developer with expertise
            across React, Next.js, TypeScript, and modern tooling. I build
            responsive, accessible web applications with a strong emphasis on
            performance and user experience. My work spans frontend frameworks,
            backend systems (Node.js, Express), databases (PostgreSQL, MongoDB,
            Redis), and cloud infrastructure (AWS, Docker).
          </p>
          <p>
            I code in JavaScript/TypeScript, C/C++, Python, and SQL. I&apos;m
            comfortable with authentication (JWT), REST/GraphQL APIs, real-time
            features (Socket.io), and containerized deployments. I focus on
            clean architecture, accessibility (WCAG), performance optimization,
            and collaborative practices (code reviews, Agile/Scrum).
          </p>
          <p>
            I&apos;m naturally curious, detail-oriented, and driven to solve
            complex problems. I enjoy learning new technologies, collaborating
            across teams, and delivering user-centric solutions that scale. When
            I&apos;m not coding, I explore new frameworks, contribute to
            projects, and stay current with modern web standards.
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
