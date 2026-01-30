import { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "../../data/projects";
import experiences from "../../data/experience.json";
import "./Spotlight.scss";

// Skills data for individual results
const skills = [
  { name: "HTML5", category: "Language" },
  { name: "CSS3", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "C/C++", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Runtime" },
  { name: "Express.js", category: "Framework" },
  { name: "TailwindCSS", category: "Framework" },
  { name: "SCSS", category: "Language" },
  { name: "Prisma", category: "ORM" },
  { name: "Socket.io", category: "Library" },
  { name: "Redux", category: "Library" },
  { name: "shadcn/ui", category: "Library" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "GraphQL", category: "API" },
  { name: "JWT", category: "Auth" },
  { name: "REST API", category: "API" },
  { name: "Cypress", category: "Testing" },
  { name: "Testing Library", category: "Testing" },
  { name: "Vitest", category: "Testing" },
  { name: "Vite", category: "Build Tool" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Version Control" },
  { name: "Vercel", category: "Deployment" },
  { name: "VS Code", category: "Editor" },
  { name: "Figma", category: "Design" },
  { name: "Postman", category: "API Tool" },
];

const Spotlight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const allItems = useMemo(() => {
    const experienceText = Array.isArray(experiences)
      ? experiences
          .map((exp) => `${exp.title} ${exp.period} ${exp.body}`)
          .join(" ")
      : "";

    // Quick Actions
    const quickActions = [
      {
        id: "action-resume",
        type: "action",
        title: "Download Resume",
        description: "Get my latest resume (PDF)",
        keywords: ["cv", "download", "pdf"],
        action: () => {
          window.open("/resume.pdf", "_blank");
        },
      },
      {
        id: "action-email",
        type: "action",
        title: "Send Email",
        description: "Email me at souvik.basak2404@gmail.com",
        keywords: ["mail", "contact", "message"],
        action: () => {
          window.location.href = "mailto:souvik.basak2404@gmail.com";
        },
      },
      {
        id: "action-github",
        type: "action",
        title: "View GitHub",
        description: "Check out my GitHub profile",
        keywords: ["code", "repositories", "profile"],
        action: () => {
          window.open("https://github.com/souvik-basak", "_blank");
        },
      },
      {
        id: "action-linkedin",
        type: "action",
        title: "LinkedIn Profile",
        description: "Connect with me on LinkedIn",
        keywords: ["professional", "network", "connect"],
        action: () => {
          window.open("https://www.linkedin.com/in/isouvikbasak", "_blank");
        },
      },
      {
        id: "action-twitter",
        type: "action",
        title: "Follow on Twitter",
        description: "See my latest updates on Twitter",
        keywords: ["social", "updates", "tweets"],
        action: () => {
          window.open("https://twitter.com/souvikbasak0", "_blank");
        },
      },
      {
        id: "action-instagram",
        type: "action",
        title: "Follow on Instagram",
        description: "Check out my photos on Instagram",
        keywords: ["photos", "social", "pictures"],
        action: () => {
          window.open("https://www.instagram.com/souviiiiiik/", "_blank");
        },
      }
    ];

    const pageItems = [
      {
        id: "page-home",
        type: "page",
        title: "Home",
        description: "Go to the landing page",
        route: "/",
        keywords: [
          "landing",
          "intro",
          "software developer",
          "Next.js",
          "Express.js",
          "TypeScript",
        ],
        content:
          "Hi, I am Souvik. Software Developer / Next.js / Express.js / TypeScript. Contact me. View resume.",
      },
      {
        id: "page-about",
        type: "page",
        title: "About",
        description: "Learn more about me",
        route: "/about",
        keywords: ["bio", "profile", "frontend", "full-stack", "React"],
        content:
          "Frontend-focused full-stack developer. React, Next.js, TypeScript, Node.js, Express, PostgreSQL, MongoDB, Redis, AWS, Docker. JavaScript, TypeScript, C/C++, Python, SQL. JWT, REST, GraphQL, Socket.io, accessibility, performance, Agile/Scrum.",
      },
      {
        id: "page-experience",
        type: "page",
        title: "Experience",
        description: "View my work experience",
        route: "/experience",
        keywords: ["jobs", "work", "intern", "full-stack"],
        content: experienceText,
      },
      {
        id: "page-skills",
        type: "page",
        title: "Skills",
        description: "See my skills and tools",
        route: "/skills",
        keywords: [
          "stack",
          "tools",
          "tech",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Prisma",
          "Tailwind",
          "Docker",
          "AWS",
        ],
        content:
          "JavaScript, TypeScript, C/C++, Python, SQL. React, Next.js, TailwindCSS, shadcn/ui, Redux, Vite. Node.js, Express.js, REST APIs, Socket.io, GraphQL. PostgreSQL, MongoDB, Redis, Prisma, Docker, AWS (S3/Cognito).",
      },
      {
        id: "page-projects",
        type: "page",
        title: "Projects",
        description: "Browse my project showcase",
        route: "/project",
        keywords: ["portfolio", "work", "github", "demo"],
        content:
          "Project showcase including Disappr, Get Wealthy, Byte Lab, Chatter Box, Qwik Notes, Dice Game, Coin Convert, Bubble Game.",
      },
      {
        id: "page-contact",
        type: "page",
        title: "Contact",
        description: "Get in touch with me",
        route: "/contact",
        keywords: ["email", "message", "contact form"],
        content:
          "Contact me using the form. Email: souvik.basak2404@gmail.com. Location: Kolkata, West Bengal.",
      },
    ];

    const projectItems = projects.map((project) => ({
      id: `project-${project.id}`,
      type: "project",
      title: project.name,
      description: project.description,
      tags: project.tech,
      url: project.url,
    }));

    const skillItems = skills.map((skill, index) => ({
      id: `skill-${index}`,
      type: "skill",
      title: skill.name,
      description: `${skill.category} - View on Skills page`,
      route: "/skills",
      keywords: [skill.category, "tech", "stack"],
    }));

    return [...quickActions, ...pageItems, ...projectItems, ...skillItems];
  }, []);

  // Open search with Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
        setSearchQuery("");
        setSelectedIndex(0);
      }

      // Close on Escape
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }

      // Navigate with arrow keys
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < filteredResults.length - 1 ? prev + 1 : prev,
          );
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        }
        if (e.key === "Enter" && filteredResults[selectedIndex]) {
          e.preventDefault();
          handleSelectItem(filteredResults[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Highlight matching text
  const highlightText = (text, query) => {
    if (!text || !query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  // Filter items based on search query
  const getSnippet = (text, query) => {
    if (!text || !query) return "";
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    if (index === -1) return "";

    const start = Math.max(index - 40, 0);
    const end = Math.min(index + lowerQuery.length + 40, text.length);
    const prefix = start > 0 ? "…" : "";
    const suffix = end < text.length ? "…" : "";
    return `${prefix}${text.slice(start, end)}${suffix}`;
  };

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query === "") {
      setFilteredResults([]);
    } else {
      const filtered = allItems
        .map((item) => {
          const searchableText = [
            item.title,
            item.description,
            item.content,
            ...(item.tags || []),
            ...(item.keywords || []),
            item.type,
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          if (!searchableText.includes(query)) {
            return null;
          }

          const snippetSource = item.content || item.description || "";
          const snippet = getSnippet(snippetSource, query);

          return {
            ...item,
            snippet,
          };
        })
        .filter(Boolean);

      setFilteredResults(filtered);
    }
    setSelectedIndex(0);
  }, [searchQuery, allItems]);

  const handleSelectItem = (item) => {
    if (item.type === "action" && item.action) {
      item.action();
    } else if ((item.type === "page" || item.type === "skill") && item.route) {
      navigate(item.route);
    } else if (item.url) {
      window.open(item.url, "_blank");
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Spotlight Trigger Button */}
      <div className="spotlight-trigger">
        <button
          className="spotlight-button"
          onClick={() => setIsOpen(true)}
          title="Search everything (Cmd+K or Ctrl+K)"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className="search-text">Search</span>
          <span className="keyboard-hint">
            <kbd>
              {typeof navigator !== "undefined" &&
              navigator.platform.includes("Mac")
                ? "⌘"
                : "Ctrl"}
            </kbd>
            <kbd>K</kbd>
          </span>
        </button>
      </div>

      {/* Spotlight Modal */}
      {isOpen && (
        <div className="spotlight-overlay" onClick={() => setIsOpen(false)}>
          <div className="spotlight-modal" onClick={(e) => e.stopPropagation()}>
            {/* Search Input */}
            <div className="spotlight-input-container">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
              <input
                ref={inputRef}
                type="text"
                className="spotlight-input"
                placeholder="Search pages, projects, tech, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Results */}
            <div className="spotlight-results">
              {searchQuery.trim() === "" ? (
                <div className="no-results">
                  <p>Start typing to search across pages and projects.</p>
                </div>
              ) : filteredResults.length > 0 ? (
                <ul className="results-list">
                  {filteredResults.map((item, index) => (
                    <li
                      key={item.id}
                      className={`result-item ${
                        index === selectedIndex ? "selected" : ""
                      }`}
                      onClick={() => handleSelectItem(item)}
                    >
                      <div className="result-content">
                        <div className="result-header">
                          {item.type !== "page" && (
                            <span className={`result-type ${item.type}`}>
                              {item.type}
                            </span>
                          )}
                          <h4 className="result-name">
                            {highlightText(item.title, searchQuery)}
                          </h4>
                        </div>
                        <p className="result-description">
                          {highlightText(item.description, searchQuery)}
                        </p>
                        {!!item.snippet && (
                          <p className="result-snippet">{item.snippet}</p>
                        )}
                        {!!item.tags?.length && (
                          <div className="result-tech">
                            {item.tags.map((tech) => (
                              <span key={tech} className="tech-badge">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="result-icon"
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-results">
                  <p>No results found for &quot;{searchQuery}&quot;</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="spotlight-footer">
              <span className="key-hint">
                <kbd>↑↓</kbd> to navigate
              </span>
              <span className="key-hint">
                <kbd>Enter</kbd> to open
              </span>
              <span className="key-hint">
                <kbd>Esc</kbd> to close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Spotlight;
