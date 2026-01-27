// Centralized SEO metadata and helpers for SPA routes.
// Update siteUrl if deployment changes.
const SITE_URL = "https://souvik-basak.vercel.app";

export const DEFAULT_SEO = {
  title: "Souvik Basak • Frontend Developer",
  description:
    "Frontend developer crafting performant, accessible web apps with React, TypeScript, and modern tooling.",
};

export const ROUTE_SEO = {
  "/": {
    title: "Home • Souvik Basak",
    description:
      "Welcome to the portfolio of Souvik Basak — explore featured projects, experience, and contact details.",
  },
  "/about": {
    title: "About • Souvik Basak",
    description:
      "Frontend-focused full-stack developer skilled in React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Docker, AWS, and modern web tooling. Focus on accessibility, performance, and clean architecture.",
  },
  "/contact": {
    title: "Contact • Souvik Basak",
    description:
      "Get in touch with Souvik Basak for collaborations or opportunities.",
  },
  "/skills": {
    title: "Skills • Souvik Basak",
    description:
      "Skills across React/Next.js, TypeScript, Node/Express, PostgreSQL, MongoDB, Redis, Prisma, Docker, AWS (S3/Cognito), Socket.io, testing (Jest/Cypress/Playwright), CI/CD (GitHub Actions), and accessibility.",
  },
  "/project": {
    title: "Projects • Souvik Basak",
    description:
      "Selected projects showcasing React, Next.js, and full-stack work.",
  },
  "/experience": {
    title: "Experience • Souvik Basak",
    description: "Professional experience, roles, and accomplishments.",
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
