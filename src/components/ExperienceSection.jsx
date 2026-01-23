import { motion } from "framer-motion";
import { experienceData } from "../data/PortfolioData";

const ExperienceSection = () => {
  return (
    <motion.section
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
      className="pl-4 md:pl-8 pr-5 py-1 my-2 flex flex-col space-x-1 max-h-[60vh]"
    >
      {Object.entries(experienceData).map(([key, value]) => (
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
          className="flex w-full items-stretch space-x-4 m-2"
        >
          {/* Left vertical bar */}
          <div className="w-1 bg-card rounded"></div>

          {/* Right content */}
          <div className="flex flex-col w-full py-1">
            <h2 className="font-bold">{value.company}</h2>
            <span className="text-sm text-gray-400">{value.year}</span>
            <ul className="list-disc list-inside mt-2 text-gray-300 text-sm">
              {value.desc.map((val, index) => (
                <li
                  key={`${index}-${val}`}
                  className="text-indent-[-1rem] pl-2"
                >
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ExperienceSection;
