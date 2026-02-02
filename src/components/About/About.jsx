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
    <main>
      <div className="container about-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am a full stack developer who builds fast, accessible web
            applications. I work primarily with React, Next.js, TypeScript, and
            modern frontend tooling, with a strong focus on performance and user
            experience.
          </p>

          <p>
            On the backend, I design and build APIs using Node.js and Express. I
            work with PostgreSQL, MongoDB, and Redis, and deploy using Docker
            and AWS. I have hands-on experience with authentication, REST and
            GraphQL APIs, real-time features, and production-ready database
            design.
          </p>

          <p>
            I care about clean architecture, accessibility standards, and
            maintainable code. I work well in collaborative teams, contribute
            through code reviews, and ship features iteratively in Agile
            environments.
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
    </main>
  );
};

export default About;
