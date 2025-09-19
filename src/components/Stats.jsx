import { motion } from "framer-motion";
import { techStack } from "../data/portfolioData";

const Stats = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 25,
        delay: 0.2,
        duration: 1.5,
      }}
      className="hidden md:block"
    >
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg shadow-gray-900/70 max-w-md mx-auto">
        <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
        <div className="space-y-4">
          {techStack.map((lang, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{lang.name}</span>
                <span className="text-gray-400">{lang.percent}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${lang.percent}%` }}
                transition={{ duration: 1, delay: i * 0.3 }}
                className={`h-2 rounded-full bg-gradient-to-r ${lang.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default Stats;
