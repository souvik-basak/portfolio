import diceGameImg from "./project-img/dice-game.png";
import currencyConverterImg from "./project-img/currency-converter.jpg";
import notesAppImg from "./project-img/notes-app.png";
import chatterBoxImg from "./project-img/chatterbox.png";
import bubbleGameImg from "./project-img/bubble-game.png";
import byteLabImg from "./project-img/byte-lab.png";
import wealthyImg from "./project-img/get-wealthy.png";
import disapprImg from "./project-img/disappr.png";

export const projects = [
  {
    id: 7,
    name: "Disappr",
    description:
      "Disappr is a privacy-first chat app with end-to-end encryption and auto-destructing conversations.",
    image: disapprImg,
    tech: ["Nextjs", "TypeScript", "TailwindCSS", "NodeJs", "Redis"],
    url: "https://disappr.vercel.app/",
    github: "https://github.com/souvik-basak/disappr",
  },
  {
    id: 6,
    name: "Get Wealthy",
    description:
      "A modern personal finance management app to track expenses and savings.",
    image: wealthyImg,
    tech: ["Nextjs", "Postman", "Clerk", "Resend", "Prisma", "Gemini"],
    url: "https://getwealthy.vercel.app/",
    github: "https://github.com/souvik-basak/wealthy",
  },
  {
    id: 0,
    name: "Byte Lab",
    description:
      "Collaborative code editor and snippet manager designed for developers to write, execute, and share code seamlessly.",
    image: byteLabImg,
    tech: ["Nextjs", "React", "TypeScript", "GraphQL", "TailwindCSS", "Clerk"],
    url: "https://byte-lab-lilac.vercel.app/",
    github: "https://github.com/souvik-basak/byte-lab",
  },
  {
    id: 1,
    name: "Chatter Box",
    description:
      "A real-time chat application with rooms and private messaging.",
    image: chatterBoxImg,
    tech: ["React", "MongoDB", "NodeJs", "ExpressJs", "Postman"],
    url: "https://chatterbox-v29m.onrender.com/",
    github: "https://github.com/souvik-basak/ChatterBox",
  },
  {
    id: 2,
    name: "Qwik Notes",
    description:
      "A cloud-based notes app to manage and organize notes efficiently.",
    image: notesAppImg,
    tech: ["React", "NodeJs", "ExpressJs", "MongoDB", "Postman"],
    url: "https://qwiknote.vercel.app",
    github: "https://github.com/souvik-basak/notes-app",
  },
  {
    id: 3,
    name: "Dice Game",
    description: "A fun dice game built with modern frontend technologies.",
    image: diceGameImg,
    tech: ["React", "TailwindCSS"],
    url: "https://dice-game-six-blue.vercel.app/",
    github: "https://github.com/souvik-basak/dice-game",
  },
  {
    id: 4,
    name: "Coin Convert",
    description: "A currency converter app with live exchange rates.",
    image: currencyConverterImg,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://coinconvert.vercel.app/",
    github: "https://github.com/souvik-basak/convert_currency",
  },
  {
    id: 5,
    name: "Bubble Game",
    description: "Simple and intuitive gameplay with timer-based challenges.",
    image: bubbleGameImg,
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://souvik-basak.github.io/bubble-game/",
    github: "https://github.com/souvik-basak/Bubble_Game",
  },
];
