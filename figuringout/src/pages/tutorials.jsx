import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ChevronRight,
  Monitor,
  Code2,
  Database,
  Zap,
  Cpu,
  GraduationCap,
  Layers,
} from "lucide-react";
const tutorials = [
  {
    title: "React",
    desc: "Master hooks, state management, and modern component architecture.",
    color: "from-blue-500 to-cyan-500",
    icon: <Monitor className="w-9 h-9" />,
    video: "https://youtube.com/watch?v=bMknfKXIFA8",
    category: "Frontend",
  },
  {
    title: "Java",
    desc: "Deep dive into OOP, Multithreading, and Enterprise logic.",
    color: "from-orange-500 to-red-500",
    icon: <Code2 className="w-9 h-9" />,
    video: "https://youtube.com/watch?v=eIrMbAQSU34",
    category: "Backend",
  },
  {
    title: "Spring Boot",
    desc: "Build robust microservices and secure production APIs.",
    color: "from-emerald-500 to-green-500",
    icon: <Database className="w-9 h-9" />,
    video: "https://youtube.com/watch?v=vtPkZShrvXQ",
    category: "Backend",
  },
  {
    title: "JavaScript",
    desc: "Master async patterns, ESNext, and DOM manipulation.",
    color: "from-amber-500 to-yellow-500",
    icon: <Zap className="w-9 h-9" />,
    video: "https://youtube.com/watch?v=W6NZfCO5SIk",
    category: "Frontend",
  },
  {
    title: "DSA",
    desc: "Ace technical interviews with optimized problem-solving.",
    color: "from-purple-500 to-indigo-500",
    icon: <Cpu className="w-9 h-9" />,
    video: "https://youtube.com/watch?v=8hly31xKli0",
    category: "Interview",
  },
  {
    title: "Placement Kit",
    desc: "The ultimate guide to landing your dream tech role.",
    color: "from-pink-500 to-rose-500",
    icon: <GraduationCap className="w-9 h-9" />,
    video: "https://youtube.com/watch?v=1hHMwLxN6EM",
    category: "Interview",
  },
  {
    title: "DSASheet",
    desc: "The ultimate guide to landing your dream tech role.",
    color: "from-pink-500 to-rose-500",
    icon: <Layers className="w-9 h-9" />,
    video: "https://youtube.com/watch?v=1hHMwLxN6EM",
    category: "Interview",
  },
];

const Tutorials = () => {
  const [filter, setFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["All", "Frontend", "Backend", "Interview"];

  const filteredTutorials =
    filter === "All"
      ? tutorials
      : tutorials.filter((t) => t.category === filter);

  const handleFilterChange = (cat) => {
    setFilter(cat);
    setCurrentIndex(0);
  };

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 80; // Smaller threshold for easier swiping

    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      info.offset.x < -swipeThreshold &&
      currentIndex < filteredTutorials.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4"
          >
            Master Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Stack
            </span>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            High-quality tutorials designed to take you from beginner to
            industry-ready developer.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleFilterChange(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-white text-slate-950 shadow-lg shadow-white/10"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredTutorials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl overflow-hidden hover:border-slate-500 transition-all duration-500"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />
              <div className="p-8 flex flex-col h-full">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-8 shadow-xl`}
                >
                  {item.icon}
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium px-4 py-1.5 bg-slate-800 text-slate-400 rounded-full border border-slate-700">
                    {item.category}
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed flex-grow mb-10">
                  {item.desc}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <Link
                    to={`/tutorials/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex-1"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white text-slate-950 font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-all"
                    >
                      Start Learning
                      <ChevronRight size={20} />
                    </motion.button>
                  </Link>

                  <a
                    href={item.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl transition-all hover:scale-110"
                  >
                    <Play size={22} fill="currentColor" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==================== MOBILE SWIPEABLE CARDS ==================== */}
        <div className="md:hidden relative h-[480px] flex items-center justify-center">
          <div className="relative w-full max-w-[340px] h-full">
            <AnimatePresence mode="wait">
              {filteredTutorials.map(
                (item, index) =>
                  index === currentIndex && (
                    <motion.div
                      key={item.title}
                      drag="x"
                      dragConstraints={{ left: -80, right: 80 }}
                      onDragEnd={handleDragEnd}
                      initial={{ opacity: 0, x: 60, scale: 0.92 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -60, scale: 0.92 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="absolute inset-0 bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl flex flex-col cursor-grab active:cursor-grabbing"
                    >
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-xl`}
                      >
                        {item.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {item.title}
                      </h3>

                      {/* Description - Smaller text for mobile */}
                      <p className="text-slate-400 text-[15px] leading-relaxed flex-grow mb-8">
                        {item.desc}
                      </p>

                      {/* Action Buttons */}
                      <div className="space-y-4 mt-auto">
                        <Link
                          to={`/tutorials/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block"
                        >
                          <button className="w-full py-3.5 bg-white text-slate-950 font-semibold rounded-2xl flex items-center justify-center gap-2 text-base active:scale-[0.97] transition-transform">
                            Start Learning
                            <ChevronRight size={20} />
                          </button>
                        </Link>

                        <a
                          href={item.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-3 text-slate-400 hover:text-white transition-colors"
                        >
                          <Play size={18} fill="currentColor" /> Watch Preview
                        </a>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Dots */}
        {filteredTutorials.length > 1 && (
          <div className="md:hidden flex justify-center gap-3 mt-8">
            {filteredTutorials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-9 bg-blue-500"
                    : "w-2.5 bg-slate-700 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tutorials;
