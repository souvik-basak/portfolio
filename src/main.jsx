import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import "./index.css";
import "animate.css";
import "./globals.scss";

// Lazy load all route components
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const Project = lazy(() => import("./components/Project/Project"));
const ProjectDetail = lazy(
  () => import("./components/ProjectDetail/ProjectDetail"),
);
const Experience = lazy(() => import("./components/Experience/Experience"));

// Suspense fallback component
const SuspenseFallback = () => null;

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
          <Suspense fallback={<SuspenseFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "skills",
        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "project",
        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <Project />
          </Suspense>
        ),
      },
      {
        path: "projects/:projectName",
        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <ProjectDetail />
          </Suspense>
        ),
      },
      {
        path: "experience",
        element: (
          <Suspense fallback={<SuspenseFallback />}>
            <Experience />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>,
);
