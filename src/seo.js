// Centralized SEO metadata and helpers for SPA routes.
// Update siteUrl if deployment changes.
const SITE_URL = "https://souvik-basak.vercel.app";

export const DEFAULT_SEO = {
  title: "Souvik Basak • Software Developer",
  description:
    "FullStack software developer specializing in frontend and backend engineering with React, TypeScript, Node.js, PostgreSQL, and scalable APIs.",
};

export const ROUTE_SEO = {
  "/": {
    title: "Home • Souvik Basak",
    description:
      "Welcome to the portfolio of Souvik Basak — FullStack software developer specializing in frontend and backend development. Explore featured projects, experience, and contact details.",
  },
  "/about": {
    title: "About • Souvik Basak",
    description:
      "FullStack software developer with expertise in frontend (React, Next.js, TypeScript) and backend (Node.js, Express, PostgreSQL, MongoDB). Skilled in Docker, AWS, Redis, Prisma, GraphQL, REST APIs, and modern web architecture.",
  },
  "/contact": {
    title: "Contact • Souvik Basak",
    description:
      "Get in touch with Souvik Basak, FullStack software developer, for collaborations or opportunities.",
  },
  "/skills": {
    title: "Skills • Souvik Basak",
    description:
      "FullStack software development skills: Frontend (React/Next.js, TypeScript, TailwindCSS), Backend (Node.js/Express, PostgreSQL, MongoDB, Redis, Prisma, GraphQL), DevOps (Docker, AWS S3/Cognito), Testing (Jest/Cypress/Vitest), and CI/CD (GitHub Actions).",
  },
  "/project": {
    title: "Projects • Souvik Basak",
    description:
      "Selected FullStack projects showcasing React, Next.js, Node.js, Express, and end-to-end development work.",
  },
  "/experience": {
    title: "Experience • Souvik Basak",
    description: "Professional experience as a FullStack software developer with roles spanning frontend and backend development.",
  },
};

export function applyPageMetadata(pathname) {
  const meta = ROUTE_SEO[pathname] || DEFAULT_SEO;
  const title = meta.title || DEFAULT_SEO.title;
  const description = meta.description || DEFAULT_SEO.description;

  document.title = title;
  setMetaTag("name", "description", description);
  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:url", `${SITE_URL}${pathname}`);
  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
}

function setMetaTag(attr, key, value) {
  if (!value) return;
  let tag = document.querySelector(`meta[${attr}='${key}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}
