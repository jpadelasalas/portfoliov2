import { motion } from "framer-motion";
import { techIcons } from "../data/PortfolioData";

const SkillsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 25,
        damping: 15,
        delay: 0.2,
        duration: 0.5,
      }}
      className="px-2 py-1 my-2 flex flex-col md:flex-row space-x-2 max-h-[60vh]"
    >
      <div className="w-full p-2 mx-1">
        <div className="bg-card p-2">
          I have a solid foundation in web development, working with both
          frontend and backend technologies. My skills span across building
          responsive UIs with React, Next.js, Tailwind, and Bootstrap, crafting
          efficient backend systems with PHP, Laravel, and SQL, and enhancing
          interactivity with JavaScript, TypeScript, and jQuery. I also manage
          version control through GitHub to ensure clean and collaborative
          workflows.
        </div>
      </div>
      <motion.div
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
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-3/4 py-2"
      >
        {Object.entries(techIcons).map(([key, value]) => (
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
            title={key}
            className="p-2 flex flex-col items-center justify-center"
          >
            <span className="bg-card p-4">{value}</span>
            <span className="">{key}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
