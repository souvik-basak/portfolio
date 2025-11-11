import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Portfolio />} />
          <Route path="project" element={<Project />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
