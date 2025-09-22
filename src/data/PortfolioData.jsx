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
  FaLinkedin,
} from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { MdMail } from "react-icons/md";

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

export const techStack = [
  { name: "React", percent: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Laravel", percent: 90, color: "from-red-400 to-pink-500" },
  { name: "TailwindCSS", percent: 80, color: "from-teal-400 to-emerald-500" },
  { name: "Others", percent: 70, color: "from-gray-400 to-gray-600" },
];

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

export const stats = [
  { label: "Total Contributions", value: 600, icon: "🚀" },
  { label: "Repositories", value: 6, icon: "📦" },
];

export const navs = {
  About: "About",
  Experience: "Experience",
  Skills: "Skills",
  Projects: "Projects",
  Contact: "Contact",
};

export const tabs = {
  About: <AboutSection />,
  Skills: "Skills",
  Projects: <ProjectSection />,
  Contact: "Contact",
  Experience: "Experience",
};

export const projectNavs = {
  All: "All",
  Personal: "Personal",
  Professional: "Professional",
};

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
};

export const socialIcons = {
  Github: (
    <a
      href="https://github.com/jpadelasalas"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-100"
    >
      <FaGithub size={30} />
    </a>
  ),
  LinkedIn: (
    <a
      href="https://www.linkedin.com/in/jpadelasalas/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-gray-100"
    >
      <FaLinkedin size={30} />
    </a>
  ),
  Mail: (
    <a
      href="mailto:jpadelasalas@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className={"hover:text-gray-100"}
    >
      <MdMail size={30} />
    </a>
  ),
};

export const projectList = {
  portfoliov2: {
    ext: "png",
    title: "Portfolio v2",
    desc: <FaArrowUpRightFromSquare size={15} />,
    role: "Sole Developer",
    type: "Personal",
    url: "https://mini-erp-pat.vercel.app/dashboard",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      React: techIcons.react,
      TailwindCSS: techIcons.tailwind,
    },
  },
  mini_erp: {
    ext: "png",
    title: "Mini ERP",
    desc: <FaArrowUpRightFromSquare size={15} />,
    role: "Sole Developer",
    type: "Personal",
    url: "https://mini-erp-pat.vercel.app/dashboard",
    icons: {
      HTML5: techIcons.html5,
      CSS3: techIcons.css3,
      React: techIcons.react,
      TailwindCSS: techIcons.tailwind,
    },
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
      TailwindCSS: techIcons.tailwind,
    },
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
  },
};
