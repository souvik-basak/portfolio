import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import Experience from "./components/Experience/Experience";
import "./index.css";
import "./globals.scss"; // Import global styles here
// import { MusicProvider } from "../src/context/MusicContext.jsx";

export function ErrorPage() {
  return (
    <div className="container" style={{ padding: "4rem 2rem" }}>
      <h1>404 — Page not found</h1>
      <p>
        The page you requested doesn&apos;t exist. Check the URL or go back
        home.
      </p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "project", element: <Project /> },
      { path: "experience", element: <Experience /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MusicProvider> */}
    <RouterProvider router={router} />
    {/* </MusicProvider> */}
  </React.StrictMode>
);
