import Header from "./Header";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Pointer } from "lucide-react";
import CustomCursor from "./CustomCursor";
import robotAnimation from "../json/space boy developer.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative h-screen bg-hero bg-cover bg-center home-pointer">
        <div className="absolute inset-0 md:bg-black/20 bg-black/50 backdrop-blur-sm"></div>
        {/* Header */}
        <Header />

        {/* Homepage Section */}
        <section className="h-full flex flex-col-reverse xl:flex-row items-center md:justify-between justify-center lg:px-24 px-10 relative overflow-hidden">
          {/* Left Section */}
          <div className="z-40 xl:w-1/2 w-full text-center xl:text-left xl:mb-0 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5,
              }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Building Fast <br />
              Reliable Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.8,
                duration: 1.5,
              }}
              className="text-base md:text-lg lg:text-2xl text-purple-200 max-w-2xl mx-auto xl:mx-0"
            >
              I’m a passionate web developer with expertise in building
              responsive front-end interfaces, scalable back-end systems, and
              custom design solutions. I specialize in delivering websites, web
              applications, and user experiences that are both functional and
              tailored to your unique business needs.
            </motion.p>

            {/* Button with Pointer */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 2.1,
                duration: 1.5,
              }}
              className="relative inline-block mt-5"
            >
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-blue-700 font-bold hover:from-blue-700 hover:to-black hover:text-white transition-all duration-500">
                <Link to="/portfoliov2">About Me</Link>
              </button>
              <motion.div
                className="absolute -left-10 top-1/2 -translate-y-1/2 text-blue-400"
                style={{
                  rotate: 90,
                }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1,
                }}
              >
                <Pointer size={32} />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 2.1,
              duration: 1.5,
            }}
            className="relative xl:w-1/2 w-full flex justify-center lg:top-[-8%] top-0"
          >
            <Lottie
              animationData={robotAnimation}
              loop={true}
              className="w-[80%] md:w-[60%] lg:w-[1000px] h-auto"
            />
          </motion.div>
        </section>
      </div>
      <CustomCursor />
    </>
  );
};

export default Home;
