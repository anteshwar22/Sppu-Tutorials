import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, PlayCircle, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a] min-h-screen flex items-center justify-center py-16 px-5">
      {/* Multi-layer Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Animated Depth Blobs */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.15, opacity: 0.28 }}
          transition={{ duration: 28, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-[-15%] -left-[10%] w-[750px] h-[750px] bg-blue-600/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.65, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 0.22 }}
          transition={{
            delay: 0.8,
            duration: 24,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-[-20%] -right-[15%] w-[680px] h-[680px] bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.18 }}
          transition={{
            delay: 1.4,
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-[35%] right-[10%] w-[450px] h-[450px] bg-indigo-500/25 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-10 inline-flex items-center gap-3 px-7 py-3 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <Zap className="w-5 h-5 text-emerald-400" />
          </div>
          <span className="text-blue-300 font-semibold tracking-[1px] text-sm uppercase">
            Spring Boot Elite 2026
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black tracking-[-2px] leading-none mb-8"
        >
          Learn Programming
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            The Elite Way
          </span>
        </motion.h1>

        {/* Subtitle - More Impactful */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-14"
        >
          Stop copying code. Build real understanding.
          <br className="hidden sm:block" />
          Master logic, architecture, and the mindset of senior developers.
        </motion.p>

        {/* CTA Buttons - Bigger & More Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 justify-center max-w-lg mx-auto"
        >
          <Link to="/tutorials" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="w-full group flex items-center justify-center gap-4 bg-white text-slate-950 font-bold text-xl py-7 px-12 rounded-3xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
            >
              Start Learning Free
              <motion.span
                whileHover={{ x: 8 }}
                transition={{ type: "spring" }}
              >
                <ChevronRight size={28} />
              </motion.span>
            </motion.button>
          </Link>

          <Link to="/demo" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="w-full group flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/70 bg-white/5 backdrop-blur-2xl font-bold text-xl py-7 px-12 rounded-3xl transition-all hover:bg-white/10"
            >
              <PlayCircle
                size={28}
                className="text-blue-400 group-hover:scale-110 transition-transform"
              />
              Watch Demo
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Signals - Replaced the old social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-x-10 gap-y-6 text-sm text-slate-400"
        >
         
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-[2px] text-slate-500"
      >
        <div>SCROLL TO DISCOVER</div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mt-2"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
