import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import "./index.css";
import "animate.css";
import "./globals.scss"; // Import global styles here
// import { MusicProvider } from "../src/context/MusicContext.jsx";

const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Project = lazy(() => import("./components/Project/Project"));
const ProjectDetail = lazy(
  () => import("./components/ProjectDetail/ProjectDetail"),
);
const Experience = lazy(() => import("./components/Experience/Experience"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: (
          <Suspense fallback={null}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={null}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "skills",
        element: (
          <Suspense fallback={null}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "project",
        element: (
          <Suspense fallback={null}>
            <Project />
          </Suspense>
        ),
      },
      {
        path: "projects/:projectName",
        element: (
          <Suspense fallback={null}>
            <ProjectDetail />
          </Suspense>
        ),
      },
      {
        path: "experience",
        element: (
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MusicProvider> */}
    <RouterProvider router={router} />
    {/* </MusicProvider> */}
  </React.StrictMode>,
);
