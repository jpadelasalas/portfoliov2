import { navs } from "../data/PortfolioData";

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="text-lg font-mono font-bold border-b text-gray-600 flex space-x-4 mr-2">
      {Object.entries(navs).map(([key, value]) => (
        <span
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
        </span>
      ))}
    </nav>
  );
};

export default Navigation;
