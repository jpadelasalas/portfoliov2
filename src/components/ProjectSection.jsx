import { motion } from "framer-motion";
import { useState } from "react";
import { projectList, projectNavs } from "../data/PortfolioData";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const [activeNav, setActiveNav] = useState("All");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 25,
        damping: 15,
        duration: 0.5,
      }}
      className="p-1 my-1 flex flex-col space-y-2 max-h-[60vh]"
    >
      <nav className="flex text-gray-700">
        {Object.entries(projectNavs).map(([key, value]) => (
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              duration: 1.5,
            }}
            key={`${key}-${value}`}
            onClick={() => setActiveNav(key)}
            className={`py-1 cursor-pointer transition-all ease-in-out duration-300 ${
              activeNav === key
                ? "px-4 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xs shadow-gray-900/70 shadow-md text-white font-bold"
                : "px-2 bg-black text-gray-700 font-normal hover:text-white"
            }`}
          >
            {value}
          </motion.span>
        ))}
      </nav>
      <div className="overflow-y-auto p-2">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {Object.entries(projectList).map(([key, value]) => {
            const shouldRender =
              activeNav === "Personal"
                ? value.type === "Personal"
                : activeNav === "Professional"
                ? value.type === "Professional"
                : true;

            return (
              shouldRender && (
                <motion.div
                  key={key}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 40,
                    damping: 15,
                  }}
                >
                  <ProjectCard
                    path={key}
                    ext={value.ext}
                    desc={value.desc}
                    title={value.title}
                    role={value.role}
                    url={value.url}
                    icons={value.icons}
                  />
                </motion.div>
              )
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
