import { useState } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Stats from "./Stats";
import { tabs } from "../data/PortfolioData";
import { motion } from "framer-motion";

const Portfolio = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("About");

  return (
    <main className="h-screen max-h-screen relative">
      <div className="px-5 md:px-12 py-7 max-w-7xl mx-auto flex flex-col z-10">
        <div className="grid md:grid-cols-[8fr_4fr] grid-cols-1">
          <div className="flex flex-col mx-5">
            {/* Profile  */}
            <Profile />

            {/* Navigation */}
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Content Rendered Based on Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                delay: 1.5,
                duration: 0.5,
              }}
              className={`flex-1 ${
                activeTab !== "Projects" && "overflow-y-auto"
              } `}
            >
              {tabs[activeTab]}
            </motion.div>
          </div>

          {/* Stats */}
          <Stats />
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
