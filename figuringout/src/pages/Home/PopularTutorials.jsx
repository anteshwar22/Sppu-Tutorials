import React from "react";
import {
  ArrowRight,
  Code2,
  Coffee,
  Leaf,
  Laptop,
  Binary,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const tutorials = [
  {
    title: "React",
    desc: "Master component-based UI development from basics to advanced hooks & performance.",
    icon: <Laptop className="w-9 h-9 text-blue-600" />,
    color: "blue",
  },
  {
    title: "Java",
    desc: "Comprehensive guides on OOPs, multithreading, collections, and enterprise patterns.",
    icon: <Coffee className="w-9 h-9 text-orange-600" />,
    color: "orange",
  },
  {
    title: "Spring Boot",
    desc: "Build production-ready microservices, REST APIs, and secure backend applications.",
    icon: <Leaf className="w-9 h-9 text-emerald-600" />,
    color: "emerald",
  },
  {
    title: "JavaScript",
    desc: "Deep dive into ES6+, closures, async/await, and modern JavaScript ecosystem.",
    icon: <Code2 className="w-9 h-9 text-amber-600" />,
    color: "amber",
  },
  {
    title: "DSA",
    desc: "Optimized solutions for arrays, trees, graphs, dynamic programming & interviews.",
    icon: <Binary className="w-9 h-9 text-teal-600" />,
    color: "teal",
  },
  {
    title: "MERN Stack",
    desc: "End-to-end full-stack development with MongoDB, Express, React & Node.js.",
    icon: <Layers className="w-9 h-9 text-purple-600" />,
    color: "purple",
  },
];

const PopularTutorials = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 to-[#0a0e1a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-blue-400 text-sm font-medium mb-6">
            🔥 Most Popular Right Now
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Popular Tutorials
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Hand-crafted, high-quality resources loved by thousands of
            developers
          </p>
        </div>

        {/* Tutorials Grid - Improved Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-slate-500 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Top Gradient Accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-t-3xl`}
              />

              {/* Icon */}
              <div className="mb-10 flex justify-between items-start">
                <div
                  className={`p-5 rounded-2xl bg-slate-800 group-hover:bg-slate-700/80 transition-all duration-300 border border-slate-700`}
                >
                  {item.icon}
                </div>

                <motion.div
                  whileHover={{ x: 8, rotate: 12 }}
                  className="text-slate-500 group-hover:text-white transition-colors"
                >
                  <ArrowRight size={32} strokeWidth={2.5} />
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-relaxed text-[15.5px] line-clamp-3">
                {item.desc}
              </p>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-${item.color}-400 to-${item.color}-500 group-hover:w-full transition-all duration-500" />

              {/* Subtle Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 font-semibold text-lg rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:bg-slate-100"
          >
            Explore All Tutorials
            <ArrowRight size={24} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PopularTutorials;
