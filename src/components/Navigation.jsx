import { navs } from "../data/PortfolioData";
import { motion } from "framer-motion";

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 25,
        delay: 0.2,
        duration: 1.5,
      }}
      className="text-lg font-mono font-bold border-b text-gray-600 flex space-x-1 md:space-x-4 mr-2 overflow-x-scroll no-scrollbar"
    >
      {Object.entries(navs).map(([key, value]) => (
        <motion.span
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.2,
            duration: 1.5,
          }}
          key={`${key}-${value}`}
          onClick={() => setActiveTab(key)}
          className={`relative px-2 py-1 cursor-pointer group hover:text-white transition-colors duration-300 ${
            activeTab === key ? "text-white border-b" : " text-gray-600"
          }`}
        >
          {value}
          {activeTab !== key && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          )}
        </motion.span>
      ))}
    </motion.nav>
  );
};

export default Navigation;
