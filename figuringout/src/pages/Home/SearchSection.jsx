import React, { useState } from "react";
import { Search, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const SearchSection = () => {
  const quickTags = [
    "React",
    "Java",
    "Spring Boot",
    "Tailwind CSS",
    "System Design",
    "DSA",
    "Microservices",
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-950 to-[#0a0e1a]">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[140px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ delay: 1 }}
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 mb-10 mx-auto"
        >
          <Sparkles size={20} className="text-yellow-400 animate-pulse" />
          <span className="font-semibold text-sm tracking-widest text-blue-300 uppercase">
            Fresh Tutorials Every Week
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8 text-white"
        >
          What do you want to{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            master
          </span>{" "}
          today?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14"
        >
          Discover in-depth tutorials, real-world projects, and interview-ready
          guides crafted for serious developers.
        </motion.p>

        {/* Search Bar - Premium Dark Version */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 group-focus-within:opacity-40 transition-all duration-500" />

            <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center p-3">
                {/* Input Area */}
                <div className="flex-1 flex items-center w-full px-6 py-5">
                  <Search
                    size={26}
                    className="text-slate-400 mr-5 flex-shrink-0"
                  />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search tutorials, topics, or technologies..."
                    className="flex-1 bg-transparent text-lg placeholder:text-slate-500 focus:outline-none text-white min-w-0"
                  />
                </div>

                {/* Search Button */}
                <button className="w-full sm:w-auto mx-3 sm:mx-0 bg-white hover:bg-slate-100 text-slate-950 px-10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg text-base">
                  <span>Search</span>
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp size={20} className="text-emerald-400" />
            <span className="text-sm font-medium text-slate-400 tracking-widest uppercase">
              Trending Right Now
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-3 px-4">
            {quickTags.map((tag, index) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-2xl text-sm font-medium text-slate-300 hover:text-white transition-all shadow-sm"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;
