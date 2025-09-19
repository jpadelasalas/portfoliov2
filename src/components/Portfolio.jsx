import { useState } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Stats from "./Stats";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <main className="min-h-screen relative">
      <div className="px-5 md:px-12 py-7 max-w-7xl mx-auto flex flex-col z-10">
        <div className="grid md:grid-cols-[8fr_4fr] grid-cols-1">
          <div className="flex flex-col mx-5">
            {/* Profile  */}
            <Profile />

            {/* Navigation */}
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Content Rendered Based on Navigation */}
          </div>

          {/* Stats */}
          <Stats />
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
