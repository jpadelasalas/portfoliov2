import { motion } from "framer-motion";

const Stats = () => {
  const languages = [
    { name: "React", percent: 80, color: "from-cyan-400 to-blue-500" },
    { name: "Laravel", percent: 90, color: "from-red-400 to-pink-500" },
    { name: "TailwindCSS", percent: 80, color: "from-teal-400 to-emerald-500" },
    { name: "Others", percent: 70, color: "from-gray-400 to-gray-600" },
  ];
  return (
    <aside className="hidden md:block">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg shadow-gray-900/70 max-w-md mx-auto">
        <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
        <div className="space-y-4">
          {languages.map((lang, i) => (
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
    </aside>
  );
};

export default Stats;
