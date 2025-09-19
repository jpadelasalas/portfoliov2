import { motion } from "framer-motion";
import { useState } from "react";
import { projectNavs } from "../data/PortfolioData";

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
      className="px-2 py-1 my-2 flex flex-col space-y-5 max-h-[60vh]"
    >
      <nav className="flex text-gray-700 space-x-2">
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
            className={`px-4 py-1 cursor-pointer transition-colors duration-300 ${
              activeNav === key
                ? "bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xs shadow-gray-900/70 shadow-md text-white font-bold"
                : " bg-black text-gray-700 font-normal"
            }`}
          >
            {value}
          </motion.span>
        ))}
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="p-2 bg-card"></div>
        <div className="p-2 bg-card"></div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
