import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";

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
