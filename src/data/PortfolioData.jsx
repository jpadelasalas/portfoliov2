import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

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
