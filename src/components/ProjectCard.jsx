import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ProjectCard = ({ path, ext, title, desc, role, icons, url, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="project-card bg-card">
      {/* Image */}
      <img
        onClick={() => setIsOpen(true)}
        src={`/${path}.${ext}`}
        alt={title}
        className="cursor-pointer"
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

      {/* Modal */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-xs w-full max-w-lg max-h-[85vh] overflow-y-auto"
              >
                <img
                  src={`/${path}.${ext}`}
                  alt={title}
                  className="w-full h-auto max-h-[50vh] object-contain bg-black rounded-t-xs"
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-white font-bold text-lg font-mono">
                      {title}
                    </h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      aria-label="Close"
                      className="text-gray-400 hover:text-white shrink-0"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {role && (
                    <span className="text-sm text-gray-400">
                      Role: <span className="text-gray-300">{role}</span>
                    </span>
                  )}

                  <p className="text-sm text-gray-300 mt-3">{label}</p>

                  <div className="content flex flex-wrap gap-2 mt-4">
                    {Object.entries(icons).map(([key, value]) => (
                      <span key={key} title={key}>
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default ProjectCard;
