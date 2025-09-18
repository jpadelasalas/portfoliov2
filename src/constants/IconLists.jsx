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
// import { Bootstrap } from "react-bootstrap-icons";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { MdMail } from "react-icons/md";

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
  //   bootstrap: (
  //     <a
  //       href="https://getbootstrap.com/"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <Bootstrap size={25} color="#7952B3" />
  //     </a>
  //   ),
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
