import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaReact,
  FaJsSquare,
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";

// Social Links
export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/jpadelasalas",
  },
  {
    id: 2,
    name: "Mail",
    icon: FiMail,
    url: "mailto:jpadelasalas@gmail.com",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/jpadelasalas/",
  },
];

// Tech Stack
export const techStack = [
  { name: "React", percent: 40, color: "from-cyan-400 to-blue-500" },
  { name: "Laravel", percent: 30, color: "from-red-400 to-pink-500" },
  { name: "TailwindCSS", percent: 20, color: "from-teal-400 to-emerald-500" },
  { name: "Others", percent: 10, color: "from-gray-400 to-gray-600" },
];

// Contribution Over The Year
export const contributions = [
  { month: "Dec", commits: 8 },
  { month: "Jan", commits: 33 },
  { month: "Feb", commits: 25 },
  { month: "Mar", commits: 29 },
  { month: "Apr", commits: 34 },
  { month: "May", commits: 15 },
  { month: "Jun", commits: 17 },
  { month: "Jul", commits: 17 },
  { month: "Aug", commits: 29 },
  { month: "Sep", commits: 32 },
  { month: "Oct", commits: 101 },
  { month: "Nov", commits: 111 },
];

// Stats with Icon
export const stats = [
  { label: "Total Contributions", value: 737, icon: "🚀" },
  { label: "Repositories", value: 7, icon: "📦" },
];

// Portfolio Navigation
export const navs = {
  About: "About",
  Skills: "Skills",
  Projects: "Projects",
  Experience: "Experience",
  Contact: "Contact",
};

// Components
export const tabs = {
  About: <AboutSection />,
  Skills: <SkillsSection />,
  Projects: <ProjectSection />,
  Contact: <ContactSection />,
  Experience: <ExperienceSection />,
};

// Project Navigation
export const projectNavs = {
  All: "All",
  Personal: "Personal",
  Professional: "Professional",
};

// Skillset
export const techIcons = {
  html5: (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaHtml5 size={25} color="#e34f26" />
    </a>
  ),
  css3: (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaCss3Alt size={25} color="#1572b6" />
    </a>
  ),
  php: (
    <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
      <FaPhp size={25} color="#4479ff" />
    </a>
  ),
  sql: (
    <a
      href="https://www.w3schools.com/sql/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaDatabase size={25} color="#4479ff" />
    </a>
  ),
  react: (
    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
      <FaReact size={25} color="#61dafb" />
    </a>
  ),
  js: (
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaJsSquare size={25} color="#f7df1e" />
    </a>
  ),
  laravel: (
    <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
      <FaLaravel size={25} color="#FF2D20" />
    </a>
  ),
  nextjs: (
    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
      <SiNextdotjs size={25} color="#FFFFFF" />
    </a>
  ),
  nodejs: (
    <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
      <DiNodejsSmall size={25} color="#339933" />
    </a>
  ),
  expressjs: (
    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
      <SiExpress size={25} color="#000000" />
    </a>
  ),
  tailwind: (
    <a
      href="https://tailwindcss.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiTailwindcss size={25} color="#38BDF8" />
    </a>
  ),
  typescript: (
    <a
      href="https://www.typescriptlang.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SiTypescript size={25} color="#3178C6" />
    </a>
  ),
  bootstrap: (
    <a
      href="https://getbootstrap.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaBootstrap size={25} color="#7952B3" />
    </a>
  ),
  jquery: (
    <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
      <BiLogoJquery size={25} color="#0769ad" />
    </a>
  ),
  github: (
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
      <FaGithub size={25} color="#FFFFFF" />
    </a>
  ),
};

// List of Projects
export const projectList = {
  schedule_tracker: {
    ext: "png",
    title: "Schedule Tracker",
    desc: "(On-Premise)",
    role: "Freelance Project",
    type: "Professional",
    url: "#",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      React: techIcons.react,
      TailwindCSS: techIcons.tailwind,
      SQL: techIcons.sql,
      Laravel: techIcons.laravel,
    },
    label:
      "An on-premise employee scheduling system built with React and Laravel. It manages on-site work, field assignments, official business, and leave events, supports employee-specific notes, and automatically sends email reminders to users for events scheduled on the current day.",
  },
  e_projectdocs: {
    ext: "png",
    title: "E-ProjectDocs",
    desc: "(On-Premise)",
    role: "Freelance Project",
    type: "Professional",
    url: "#",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      React: techIcons.react,
      TailwindCSS: techIcons.tailwind,
      SQL: techIcons.sql,
      Laravel: techIcons.laravel,
    },
    label:
      "An on-premise engineering document repository built with React and Laravel, focused on organizing project deliverables across their lifecycle. It centralizes project files per engineer, enables controlled downloads, and archives completed projects to preserve records and reduce document sprawl.",
  },
  cleanstack: {
    ext: "png",
    title: "React-laravel Cleanstack",
    desc: <FaArrowUpRightFromSquare size={15} />,
    role: "Sole Developer",
    type: "Personal",
    url: "https://github.com/jpadelasalas/react-laravel-cleanstack",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      React: techIcons.react,
      TailwindCSS: techIcons.tailwind,
      SQL: techIcons.sql,
      Laravel: techIcons.laravel,
    },
    label:
      "A clean and scalable full-stack boilerplate using React for the frontend and Laravel for the backend. Features organized folder structure, reusable components, and RESTful APIs for rapid and maintainable web app development.",
  },
  portfoliov2: {
    ext: "png",
    title: "Portfolio v2",
    desc: <FaArrowUpRightFromSquare size={15} />,
    role: "Sole Developer",
    type: "Personal",
    url: "https://mini-erp-pat.vercel.app/",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      React: techIcons.react,
      TailwindCSS: techIcons.tailwind,
    },
    label:
      "An upgraded version of my portfolio with modern UI/UX, animations, and enhanced responsiveness. Focused on interactivity and better project presentation.",
  },
  mini_erp: {
    ext: "png",
    title: "Mini ERP",
    desc: <FaArrowUpRightFromSquare size={15} />,
    role: "Sole Developer",
    type: "Personal",
    url: "https://mini-erp-pat.vercel.app/",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      React: techIcons.react,
      TailwindCSS: techIcons.tailwind,
    },
    label:
      "A lightweight Enterprise Resource Planning system covering core business operations such as sales, inventory, and employee management.",
  },
  todolist: {
    ext: "png",
    title: "To-do List",
    desc: <FaArrowUpRightFromSquare size={15} />,
    role: "Sole Developer",
    type: "Personal",
    url: "https://to-do-list-pat.vercel.app/",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      React: techIcons.react,
      Typescript: techIcons.typescript,
      TailwindCSS: techIcons.tailwind,
    },
    label:
      "A simple yet effective to-do list application for task tracking. Supports CRUD operations and helps in daily productivity.",
  },
  portfolio: {
    ext: "png",
    title: "Portfolio",
    desc: <FaArrowUpRightFromSquare size={15} />,
    role: "Sole Developer",
    type: "Personal",
    url: "https://jp-delasalas.vercel.app/",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      TailwindCSS: techIcons.tailwind,
      React: techIcons.react,
      Nextjs: techIcons.nextjs,
      Typescript: techIcons.typescript,
    },
    label:
      "A personal portfolio website showcasing my skills, projects, and experiences. Built with clean design and responsive layout to highlight my work.",
  },
  his: {
    ext: "png",
    title: "Hospital Information",
    desc: "(On Prem)",
    role: "Full-stack Developer",
    type: "Professional",
    url: "#",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      Bootstrap5: techIcons.bootstrap,
      JavaScript: techIcons.js,
      jQuery: techIcons.jquery,
      SQL: techIcons.sql,
      Laravel: techIcons.laravel,
    },
    label:
      "A hospital management platform with patient records, and workflow modules. Includes CPOE for electronic orders and case ordering for labs, radiology, and diagnostics to improve efficiency and patient care.",
  },
  clinical_docs: {
    ext: "png",
    title: "Clinical Document",
    desc: "(On Prem)",
    role: "Back-end Developer / API",
    type: "Professional",
    url: "#",
    icons: {
      JavaScript: techIcons.js,
      jQuery: techIcons.jquery,
      SQL: techIcons.sql,
      Laravel: techIcons.laravel,
    },
    label:
      "A system for storing, organizing, and retrieving patient clinical documents securely for healthcare providers.",
  },
  document_management: {
    ext: "png",
    title: "Document Management",
    desc: "(On Prem)",
    role: "Freelance Project",
    type: "Professional",
    url: "#",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      Bootstrap5: techIcons.bootstrap,
      JavaScript: techIcons.js,
      jQuery: techIcons.jquery,
      SQL: techIcons.sql,
      Laravel: techIcons.laravel,
    },
    label:
      "A system for managing documents with features like secure storage, retrieval, and automatic report generation for better document control.",
  },
  location_clearance: {
    ext: "png",
    title: "Location Clearance",
    desc: "(On Prem)",
    role: "Freelance Project",
    type: "Professional",
    url: "#",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      Bootstrap5: techIcons.bootstrap,
      JavaScript: techIcons.js,
      SQL: techIcons.sql,
      PHP: techIcons.php,
    },
    label:
      "A system for processing and managing locational clearance applications, including form submissions and automated report generation.",
  },
  archival_system: {
    ext: "png",
    title: "Digital Archival",
    desc: "(On Prem)",
    role: "Freelance Project",
    type: "Professional",
    url: "#",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      Bootstrap5: techIcons.bootstrap,
      JavaScript: techIcons.js,
      SQL: techIcons.sql,
      PHP: techIcons.php,
    },
    label:
      "A digital archive for newspapers, where users can upload PDF files and view them online for long-term e-storage and retrieval.",
  },
};

export const experienceData = {
  onedoc: {
    company: "One Document Corporation",
    title: "Full Stack Developer",
    year: "2023 - Present",
    desc: [
      "Collaborated on ERP and EHR platforms using Laravel and React to deliver scalable solutions.",
      "Improved app performance with code-splitting, lazy loading, and memoization (React.memo, useCallback, useMemo).",
      "Built custom React hooks to simplify and reuse complex logic across multiple components.",
      "Enhanced efficiency by consolidating Clinical Document requests into a single AJAX call.",
      "Refactored hard-coded logic and loops, improving maintainability and reducing technical debt.",
      "Optimized performance by consolidating queries and applying eager loading to eliminate n+1 issues.",
      "Debugged and resolved system issues, ensuring reliability and smooth operations.",
      "Performed code reviews to uphold best practices and improve overall code quality.",
      "Trained new hires, accelerating onboarding and team productivity.",
    ],
  },
  free: {
    company: "Freelance",
    title: "Full Stack Developer",
    year: "2022 - 2023",
    desc: [
      "Communicated with clients to gather requirements and ensure project alignment with goals.",
      "Created design proposals emphasizing usability, functionality, and visual appeal.",
      "Developed full-stack web solutions using HTML, CSS, Bootstrap, JavaScript, jQuery, Laravel, and MySQL.",
    ],
  },
};
