import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="px-2 py-1 my-2 flex flex-col space-y-5 max-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 25,
          damping: 15,
          duration: 0.5,
        }}
        className="p-2 bg-card"
      >
        <p className="text-md font-sans">
          I am a Supervisor Developer with a solid foundation in dynamic
          development, RDBMS, and system design, from transactional audit
          trails and concurrency-safe inventory systems to multi-tenant SaaS
          integrations and drag-and-drop form builders. Beyond building
          scalable, maintainable, and user-friendly applications, I lead code
          reviews, mentor new hires, and help the team hold to clean,
          effective engineering practices.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 25,
          damping: 15,
          delay: 0.4,
          duration: 0.5,
        }}
        className="p-2 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xs shadow-gray-900/70 shadow-md hover:shadow-lg hover:shadow-gray-600/40 transition"
      >
        <p className="text-md font-sans">
          I graduated as cum laude from Southern Luzon State University (SLSU).
          Fully committed to life-long learning, I am now a Supervisor
          Developer with a strong passion for logic and algorithm. The blend of
          creativity, and technology—and the endless opportunities for
          discovery—drives my excitement for building web applications. Outside
          of coding, I enjoy gaming, staying active, and music.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
