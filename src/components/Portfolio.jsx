import { techIcons } from "../constants/IconLists";
import Profile from "./Profile";
import Stats from "./Stats";

const Portfolio = () => {
  return (
    <main className="min-h-screen relative">
      <div className="px-5 md:px-12 py-10 max-w-7xl mx-auto flex flex-col z-10">
        <div className="grid md:grid-cols-[8fr_4fr] grid-cols-1">
          <div className="flex flex-col mx-5">
            {/* Profile  */}
            <Profile />

            {/* Navigation */}
            <nav>Navigation</nav>

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
