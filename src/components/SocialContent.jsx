import { socialLinks } from "../data/PortfolioData";
import { motion } from "framer-motion";

const SocialContent = () => {
  return (
    <>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + (index + 1) * 0.2, duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
        >
          <link.icon className="w-5 h-5" />
        </motion.a>
      ))}

      {/* CV */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.6,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-blue-700 font-bold hover:from-blue-700 hover:to-black hover:text-white transition-all duration-500"
      >
        <a href="/Resume.pdf" download>
          Download CV
        </a>
      </motion.button>
    </>
  );
};

export default SocialContent;
