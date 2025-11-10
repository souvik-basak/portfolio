// List of known top-level routes the site uses.
// Keep this in sync with the router in `src/main.jsx`.
export const KNOWN_PATHS = [
  "/",
  "/about",
  "/contact",
  "/portfolio",
  "/project",
  "/experience",
];

// Lightweight metadata for previewing suggested pages in the NotFound UI.
export const ROUTE_META = {
  "/": {
    title: "Home",
    description:
      "Welcome to my personal portfolio - projects, experience, and contact details.",
  },
  "/about": {
    title: "About",
    description:
      "A short bio and background about me, my skills, and what I build.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Ways to get in touch: email, social links, and a contact form.",
  },
  "/portfolio": {
    title: "Portfolio",
    description:
      "A curated list of projects with screenshots, descriptions, and links.",
  },
  "/project": {
    title: "Project",
    description:
      "Individual project pages with details about technologies and goals.",
  },
  "/experience": {
    title: "Experience",
    description: "Work history, roles, and notable accomplishments.",
  },
};

export default KNOWN_PATHS;
