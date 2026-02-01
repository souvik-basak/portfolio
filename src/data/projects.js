import diceGameImg from "./project-img/dice-game.png";
import currencyConverterImg from "./project-img/currency-converter.jpg";
import notesAppImg from "./project-img/notes-app.png";
import chatterBoxImg from "./project-img/chatterbox.png";
import bubbleGameImg from "./project-img/bubble-game.png";
import byteLabImg from "./project-img/byte-lab.png";
import wealthyImg from "./project-img/get-wealthy.png";
import disapprImg from "./project-img/disappr.png";
import portfolioImg from "./project-img/portfolio.png";

export const projects = [
  {
    id: 8,
    name: "Disappr",
    slug: "disappr",
    description:
      "Disappr is a privacy-first chat app with end-to-end encryption and auto-destructing conversations.",
    fullDetails:
      "A secure messaging platform that prioritizes user privacy with military-grade encryption, auto-destructing messages, and anonymous room creation. Built for users who value confidentiality.",
    image: disapprImg,
    tech: ["Nextjs", "TypeScript", "TailwindCSS", "NodeJs", "Redis"],
    features: [
      "End-to-end encrypted messaging",
      "Auto-destructing conversations that disappear after set time",
      "Anonymous room creation with custom room codes",
      "Real-time message delivery with WebSocket",
      "User authentication with secure session management",
    ],
    challenges: [
      "Implementing client-side encryption/decryption without exposing keys",
      "Managing WebSocket connections for real-time encrypted messages",
      "Handling auto-destruction of messages at precise timestamps",
      "Ensuring scalability with Redis for session and message caching",
    ],
    learnings: [
      "Deep understanding of cryptographic principles and TweetNaCl.js library",
      "WebSocket connection management and error recovery",
      "Redis pub/sub patterns for real-time messaging",
      "TypeScript strict type safety for security-sensitive code",
    ],
    url: "https://disappr.vercel.app/",
    github: "https://github.com/souvik-basak/disappr",
  },
  {
    id: 7,
    name: "Get Wealthy",
    slug: "get-wealthy",
    description:
      "A modern personal finance management app to track expenses and savings.",
    fullDetails:
      "A comprehensive personal finance application that helps users track expenses, manage budgets, visualize spending patterns, and achieve financial goals with AI-powered insights.",
    image: wealthyImg,
    tech: ["Nextjs", "Postman", "Clerk", "Resend", "Prisma", "Gemini"],
    features: [
      "Expense tracking with categorization and filtering",
      "Budget creation and management with real-time tracking",
      "Financial insights powered by Google Gemini AI",
      "Email notifications for budget alerts via Resend",
      "Secure user authentication with Clerk",
      "Beautiful data visualizations with charts",
    ],
    challenges: [
      "Integrating Google Gemini API for financial recommendations",
      "Optimizing database queries for large expense datasets",
      "Email service integration and reliability",
      "Creating intuitive UI for complex financial data",
    ],
    learnings: [
      "AI integration for personalized financial advice",
      "Email automation with Resend",
      "Prisma ORM for efficient database queries",
      "Complex state management for budget calculations",
    ],
    url: "https://getwealthy.vercel.app/",
    github: "https://github.com/souvik-basak/wealthy",
  },
  {
    id: 6,
    name: "Portfolio",
    slug: "portfolio",
    description:
      "A modern developer portfolio showcasing projects, skills, and experience.",
    fullDetails:
      "A fast, responsive portfolio built with Vite and React featuring smooth animations, clean typography, and a structured project showcase with detailed views.",
    image: portfolioImg,
    tech: ["Vite", "React", "Sass", "JavaScript", "Framer Motion"],
    features: [
      "Clean and responsive layout for all devices",
      "Smooth page and section animations",
      "Project grid with detailed project pages",
      "Optimized assets and fast load times",
      "Reusable component-driven structure",
    ],
    challenges: [
      "Balancing motion effects with performance",
      "Maintaining consistent spacing across breakpoints",
      "Organizing project data for scalability",
    ],
    learnings: [
      "Animation patterns with Framer Motion",
      "Sass architecture for scalable styles",
      "Component composition and reuse in React",
    ],
    url: "https://souvikbasak.vercel.app",
    github: "https://github.com/souvik-basak/portfolio",
  },
  {
    id: 5,
    name: "Byte Lab",
    slug: "byte-lab",
    description:
      "Collaborative code editor and snippet manager designed for developers to write, execute, and share code seamlessly.",
    fullDetails:
      "A full-stack collaborative code editor platform where developers can write, execute, save, and share code snippets with real-time collaboration and syntax highlighting for multiple languages.",
    image: byteLabImg,
    tech: ["Nextjs", "React", "TypeScript", "GraphQL", "TailwindCSS", "Clerk"],
    features: [
      "Real-time code editor with syntax highlighting",
      "Multiple language support (JavaScript, Python, SQL, etc.)",
      "Snippet sharing with unique URLs",
      "Collaborative editing capabilities",
      "Code execution in sandboxed environment",
      "User authentication and snippet management",
      "Search and discovery of public snippets",
    ],
    challenges: [
      "Implementing real-time collaboration using GraphQL subscriptions",
      "Sandboxing code execution safely",
      "Handling large file uploads and storage",
      "Syntax highlighting for multiple languages",
    ],
    learnings: [
      "GraphQL subscription patterns for real-time updates",
      "Code sandboxing and security considerations",
      "Real-time synchronization between multiple users",
      "Monaco editor integration and customization",
    ],
    url: "https://byte-lab-lilac.vercel.app/",
    github: "https://github.com/souvik-basak/byte-lab",
  },
  {
    id: 4,
    name: "Chatter Box",
    slug: "chatter-box",
    description:
      "A real-time chat application with rooms and private messaging.",
    fullDetails:
      "A full-featured chat application enabling real-time communication through public rooms and private direct messages, with typing indicators and user status.",
    image: chatterBoxImg,
    tech: ["React", "MongoDB", "NodeJs", "ExpressJs", "Postman"],
    features: [
      "Real-time chat using WebSocket",
      "Multiple chat rooms with room management",
      "Private direct messaging between users",
      "Typing indicators showing who's typing",
      "User online/offline status",
      "Message history persistence",
      "User profiles and avatars",
    ],
    challenges: [
      "Managing multiple concurrent WebSocket connections",
      "Ensuring message delivery in correct order",
      "Handling user disconnections gracefully",
      "Scaling database queries for message retrieval",
    ],
    learnings: [
      "Socket.io for real-time communication",
      "MongoDB aggregation for efficient queries",
      "WebSocket connection lifecycle management",
      "Real-time event handling in Express",
    ],
    url: "https://chatterbox-v29m.onrender.com/",
    github: "https://github.com/souvik-basak/ChatterBox",
  },
  {
    id: 3,
    name: "Qwik Notes",
    slug: "qwik-notes",
    description:
      "A cloud-based notes app to manage and organize notes efficiently.",
    fullDetails:
      "A responsive note-taking application with cloud storage, allowing users to create, edit, delete, and search notes with rich text formatting.",
    image: notesAppImg,
    tech: ["React", "NodeJs", "ExpressJs", "MongoDB", "Postman"],
    features: [
      "Create, read, update, and delete notes",
      "Search and filter notes by content",
      "Tag-based organization",
      "Cloud synchronization across devices",
      "Note sharing with other users",
      "Rich text editor with formatting options",
      "Dark mode support",
    ],
    challenges: [
      "Real-time synchronization across multiple devices",
      "Handling offline mode with sync on reconnect",
      "Optimizing search for large note collections",
      "Rich text editor integration",
    ],
    learnings: [
      "Cloud storage architecture patterns",
      "Conflict resolution for concurrent edits",
      "Efficient database indexing for search",
      "React component state management for notes",
    ],
    url: "https://qwiknote.vercel.app",
    github: "https://github.com/souvik-basak/notes-app",
  },
  {
    id: 2,
    name: "Dice Game",
    slug: "dice-game",
    description: "A fun dice game built with modern frontend technologies.",
    fullDetails:
      "An interactive dice rolling game where players compete to reach a target score first, with strategic decision-making and instant gameplay.",
    image: diceGameImg,
    tech: ["React", "TailwindCSS"],
    features: [
      "Two-player gameplay",
      "Dice rolling with visual animations",
      "Current score tracking",
      "Strategic hold decision-making",
      "Responsive design for all devices",
      "Score reset functionality",
      "Win detection and celebration",
    ],
    challenges: [
      "Creating smooth dice roll animations",
      "Managing game state for turn-based logic",
      "Implementing responsive design",
    ],
    learnings: [
      "React hooks for game state management",
      "CSS animations and transitions",
      "Game logic implementation",
      "Responsive design patterns",
    ],
    url: "https://dice-game-six-blue.vercel.app/",
    github: "https://github.com/souvik-basak/dice-game",
  },
  {
    id: 1,
    name: "Coin Convert",
    slug: "coin-convert",
    description: "A currency converter app with live exchange rates.",
    fullDetails:
      "A real-time currency converter application that fetches live exchange rates and provides instant conversions between any two currencies.",
    image: currencyConverterImg,
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Real-time exchange rate updates",
      "Convert between any two currencies",
      "Search currency by code or name",
      "Conversion history tracking",
      "Responsive design for mobile and desktop",
      "Clean and intuitive interface",
      "Offline functionality with cached rates",
    ],
    challenges: [
      "Fetching and updating exchange rates from API",
      "Handling API failures gracefully",
      "Implementing currency search functionality",
      "Managing state without framework",
    ],
    learnings: [
      "Third-party API integration (ExchangeRate API)",
      "DOM manipulation without framework",
      "Error handling and fallbacks",
      "Local storage for caching data",
    ],
    url: "https://coinconvert.vercel.app/",
    github: "https://github.com/souvik-basak/convert_currency",
  },
  {
    id: 0,
    name: "Bubble Game",
    slug: "bubble-game",
    description: "Simple and intuitive gameplay with timer-based challenges.",
    fullDetails:
      "A fast-paced bubble popping game with timer-based challenges, scoring system, and progressive difficulty levels.",
    image: bubbleGameImg,
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Click bubbles to pop them and score points",
      "Timer-based challenges",
      "Score tracking and high score saving",
      "Progressive difficulty levels",
      "Sound effects and visual feedback",
      "Responsive gameplay on all devices",
      "Leaderboard functionality",
    ],
    challenges: [
      "Handling rapid click events and debouncing",
      "Smooth bubble animation and removal",
      "Storing and retrieving high scores",
      "Performance optimization for many bubbles",
    ],
    learnings: [
      "Event handling optimization",
      "CSS animations and transforms",
      "LocalStorage for persistent data",
      "Game loop implementation without framework",
    ],
    url: "https://souvik-basak.github.io/bubble-game/",
    github: "https://github.com/souvik-basak/Bubble_Game",
  },
];
