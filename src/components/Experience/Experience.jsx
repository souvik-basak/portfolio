import "./Experience.scss";
import AnimatedLetters from "../Animation/Animation";
import { useEffect, useState } from "react";
import experiences from "../../data/experience.json";
import ScrollToTopMobile from "../ScrollToTop/ScrollToTopMobile";

// use the first experience entry for now; the JSON makes it easy to add more later
const experience =
  Array.isArray(experiences) && experiences.length ? experiences[0] : null;

const Experience = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const t = setTimeout(() => setLetterClass("text-animate-hover"), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="container experience-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
            idx={15}
          />
        </h1>

        {/* helper text removed per request; details are toggled by the pin */}

        <section
          className="timeline"
          aria-label="Professional experience timeline"
        >
          <div className="timeline-line" />

          <article className={`timeline-item open`}>
            <div className="timeline-content">
              <div className="timeline-head">
                <h3 className="timeline-title">{experience.title}</h3>
                <time className="timeline-period">{experience.period}</time>
              </div>

              <div id="exp-body" className="timeline-body">
                {experience.body.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </section>
      </div>
      <ScrollToTopMobile />
    </div>
  );
};

export default Experience;
