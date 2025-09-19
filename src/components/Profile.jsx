import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section className="flex flex-col md:flex-row space-x-10 mb-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 25,
          delay: 0.2,
          duration: 1.5,
        }}
        className="flex space-x-5"
      >
        <img
          src={"./JP.jpg"}
          alt="profile"
          className="rounded-full w-25 h-25 md:w-35 md:h-35"
        />
        <h3 className="block md:hidden text-md font-bold font-mono text-wrap mt-5">
          John Patrick A. de las Alas
        </h3>
      </motion.div>
      <div className="flex flex-col mt-3 space-y-2">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.6,
            duration: 1.5,
          }}
          className="hidden md:block text-xl font-bold font-mono text-wrap"
        >
          John Patrick A. de las Alas
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 0.6,
            duration: 1.5,
          }}
          className="text-md md:text-sm font-extrabold mb-4 md:mb-7"
        >
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              1000,
              "Building Web Solutions With Laravel & React",
              1000,
              "Developer of Fast, Modern, and Scalable Apps",
              1000,
              "Passionate About Crafting Digital Experiences",
              1000,
            ]}
            className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            repeat={Infinity}
          />
        </motion.div>
        <div className="flex space-x-3 text-xs">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 25,
              damping: 15,
              delay: 0.8,
              duration: 1,
            }}
            className="px-2 py-1 bg-card flex flex-col text-center"
          >
            <span className="font-bold text-sm">3+</span>
            <span className="font-mono text-xs">Years Experience</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 25,
              damping: 15,
              delay: 1,
              duration: 1,
            }}
            className="px-2 py-1 bg-card flex flex-col text-center"
          >
            <span className="font-bold text-sm">10+</span>
            <span className="font-mono text-xs">Projects Completed</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
