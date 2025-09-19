import { motion } from "framer-motion";

const AboutSection = () => {
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
      className="px-2 py-1 my-2 flex flex-col space-y-5 max-h-[60vh]"
    >
      <div className="p-2 bg-card">
        <p className="text-md font-sans">
          I am a Web Developer with a solid foundation in dynamic development,
          RDBMS, and system design. I focus on building scalable, maintainable,
          and user-friendly applications. My strengths include clean code
          practices, effective problem-solving, and a keen understanding of both
          front-end and back-end workflows.
        </p>
      </div>
      <div className="p-2 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xs shadow-gray-900/70 shadow-md hover:shadow-lg hover:shadow-gray-600/40 transition">
        <p className="text-md font-sans">
          I graduated as cum laude from Southern Luzon State University (SLSU).
          Fully committed to life-long learning, I am a full stack developer
          with a strong passion for logic and algorithm. The blend of
          creativity, and technology—and the endless opportunities for
          discovery—drives my excitement for building web applications. Outside
          of coding, I enjoy gaming, staying active, and music.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
