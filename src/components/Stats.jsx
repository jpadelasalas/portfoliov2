import { motion } from "framer-motion";
import { contributions, techStack, stats } from "../data/PortfolioData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Stats = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 25,
        delay: 0.2,
        duration: 1.5,
      }}
      className="hidden md:block space-y-5"
    >
      {/* Contributions Line Chart */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg hover:shadow-gray-600/40 shadow-gray-900/70 transition max-w-md mx-auto">
        <h3 className="text-lg font-bold text-white mb-4">
          Contributions Over The Year
        </h3>
        <ResponsiveContainer width="100%" height={170}>
          <LineChart data={contributions}>
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
              }}
            />
            <Line
              type="monotone"
              dataKey="commits"
              stroke="#06b6d4"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Git Stat Cards */}
      <div className="grid grid-cols-2 gap-6 ">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl py-2 shadow-gray-900/70 text-center shadow-md hover:shadow-lg hover:shadow-gray-600/40 transition"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="flex items-center justify-center space-x-1">
              <h3 className="text-lg font-bold text-white">{stat.value}</h3>
              <p className="text-gray-400 text-xs">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-5 shadow-md hover:shadow-lg shadow-gray-900/70 hover:shadow-gray-600/40 transition max-w-md mx-auto">
        <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
        <div className="space-y-4">
          {techStack.map((lang, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{lang.name}</span>
                <span className="text-gray-400">{lang.percent}%</span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${lang.percent}%` }}
                transition={{ duration: 1, delay: i * 0.3 }}
                className={`h-2 rounded-full bg-gradient-to-r ${lang.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default Stats;
