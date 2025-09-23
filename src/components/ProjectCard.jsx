import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({ path, ext, title, desc, role, icons, url, label }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="project-card bg-card">
      {/* Image */}
      <img
        onClick={() => setIsClicked(!isClicked)}
        src={`/${path}.${ext}`}
        alt={title}
        className="cursor-pointer rounded-md"
      />

      {/* Title + Desc */}
      <div className="mt-4 pl-1">
        <div className="flex flex-row gap-2 items-center">
          <h3 className="text-lg font-semibold">{title}</h3>

          {desc === "(On Prem)" ? (
            <label className="text-sm text-gray-300">{desc}</label>
          ) : (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <label className="cursor-pointer hover:text-white active:text-white text-sm">
                {desc}
              </label>
            </a>
          )}
        </div>

        {role && (
          <span className="text-sm">
            <span className="text-gray-400">Role:</span> {role}
          </span>
        )}

        {/* Icons */}
        <div className="content flex flex-wrap gap-2 mt-2">
          {Object.entries(icons).map(([key, value]) => (
            <span
              key={key}
              title={key}
              className="cursor-pointer hover:scale-125 active:scale-125 transition-transform"
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      {/* Overlay  */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            onClick={() => setIsClicked(!isClicked)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{
              type: "spring",
              stiffness: 35,
              damping: 5,
              duration: 0.3,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-xl text-white text-center p-4 transition-opacity duration-300 cursor-pointer"
          >
            <p className="text-sm md:text-lg font-bold font-mono">{title}</p>
            <p className="text-xs md:text-sm p-5">{label}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
