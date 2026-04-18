import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight, Zap } from "lucide-react";

// Import your DSA components here (add them as you create)

import IntroductiontoDSA from "./DsaTutorial/IntroductiontoDSA";
import RecursionBasics from "./DsaTutorial/RecursionBasics";
import Arrays from "./DsaTutorial/Arrays";
import ArrayProblems from "./DsaTutorial/ArrayProblems";
import StringsBasics from "./DsaTutorial/StringsBasics";
import StringProblems from "./DsaTutorial/StringProblems";
// import BigO from "./DSATutorial/BigO";
// import Arrays from "./DSATutorial/Arrays";
// ... add all other modules

const DSATutorial = () => {
  const [step, setStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tutorials = [
    { title: "Introduction to DSA", component: <IntroductiontoDSA /> },
    {
      title: "Time & Space Complexity (Big O)",
      component: <IntroductiontoDSA />,
    },
    { title: "Recursion Basics", component: <RecursionBasics/> },

    { title: "Arrays Basics", component: <Arrays/> },
    { title: "Array Problems", component: <ArrayProblems /> },
    { title: "Strings Basics", component: <StringsBasics /> },
    { title: "String Problems", component: <StringProblems /> },

    { title: "Singly Linked List", component: <IntroductiontoDSA /> },
    { title: "Doubly Linked List", component: <IntroductiontoDSA /> },
    { title: "Linked List Problems", component: <IntroductiontoDSA /> },

    { title: "Stack Basics", component: <IntroductiontoDSA /> },
    { title: "Queue Basics", component: <IntroductiontoDSA /> },
    { title: "Deque", component: <IntroductiontoDSA /> },
    { title: "Stack & Queue Problems", component: <IntroductiontoDSA /> },

    { title: "Binary Tree Basics", component: <IntroductiontoDSA /> },
    { title: "Tree Traversals", component: <IntroductiontoDSA /> },
    { title: "Binary Search Tree", component: <IntroductiontoDSA /> },

    { title: "Graph Basics", component: <IntroductiontoDSA /> },
    { title: "BFS & DFS", component: <IntroductiontoDSA /> },

    { title: "Sorting Algorithms", component: <IntroductiontoDSA /> },
    { title: "Searching Algorithms", component: <IntroductiontoDSA /> },

    { title: "Heap / Priority Queue", component: <IntroductiontoDSA /> },
    { title: "Hashing", component: <IntroductiontoDSA /> },

    { title: "Dynamic Programming", component: <IntroductiontoDSA /> },
    { title: "Greedy Algorithms", component: <IntroductiontoDSA /> },
    { title: "Backtracking", component: <IntroductiontoDSA /> },

    { title: "DSA Interview Questions", component: <IntroductiontoDSA /> },
  ];
  const currentTutorial = tutorials[step];

  const goToStep = (newStep) => {
    if (newStep >= 0 && newStep < tutorials.length) {
      setStep(newStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  return (
    <div className=" min-h-screen bg-[#0a0a0f] text-slate-200 flex">
      {/* Sidebar - Hidden on mobile */}
      <aside className=" scrollbar-hide hidden md:block w-72 bg-zinc-950 border-r border-zinc-800 overflow-y-auto sticky top-0 h-screen">
        <div className="p-6 border-b border-zinc-800 flex items-center gap-3 sticky top-0 bg-zinc-950 z-10">
          <div className="p-2 bg-emerald-500/10 rounded-xl">
            <Zap className="w-7 h-7 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent">
            DSA Mastery
          </h2>
        </div>

        <div className="p-6">
          <div className="text-xs uppercase tracking-[0.125em] text-zinc-500 mb-5 font-medium">
            ALGORITHMS &amp; DATA STRUCTURES
          </div>
          <ul className="space-y-1">
            {tutorials.map((tutorial, index) => (
              <li key={index}>
                <button
                  onClick={() => goToStep(index)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all text-sm font-medium
                    ${
                      step === index
                        ? "bg-emerald-600 text-white shadow-xl shadow-emerald-900/50"
                        : "hover:bg-zinc-900 text-zinc-400 hover:text-white"
                    }`}
                >
                  {tutorial.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className=" flex-1 min-w-0 flex flex-col h-screen">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-zinc-800 px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-3 text-zinc-400 hover:text-white rounded-xl"
          >
            <Menu size={26} />
          </button>

          <div className="font-semibold text-lg text-white hidden md:block truncate">
            {currentTutorial.title}
          </div>

          <div className="text-sm font-mono text-emerald-400">
            {step + 1} / {tutorials.length}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <main className=" scrollbar-hide flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45 }}
              >
                {/* Distinct DSA Heading */}
                <div className="mb-12">
                  <span className="inline-block px-4 py-1.5 text-xs font-mono tracking-widest bg-emerald-950 text-emerald-400 rounded-full mb-4">
                    MODULE {String(step + 1).padStart(2, "0")}
                  </span>
                  {/* <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                    {currentTutorial.title}
                  </h1> */}
                </div>

                {/* Lesson Content */}
                <div className="prose prose-invert max-w-none text-zinc-300 prose-headings:text-white prose-p:leading-relaxed prose-code:bg-zinc-900 prose-code:text-emerald-300">
                  {currentTutorial.component}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation */}
            <div className="flex justify-between mt-24 pt-12 border-t border-zinc-800">
              <button
                onClick={() => goToStep(step - 1)}
                disabled={step === 0}
                className="flex items-center gap-3 px-7 py-4 bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-2xl transition-all group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Previous</span>
              </button>

              <button
                onClick={() => goToStep(step + 1)}
                disabled={step === tutorials.length - 1}
                className="flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-2xl font-semibold transition-all group"
              >
                <span>Next Lesson</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Full-Screen Sidebar */}
      {sidebarOpen && (
        <div className="  fixed inset-0 z-50 md:hidden bg-[#0a0a0f] flex flex-col">
          <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-xl">
                <Zap className="w-7 h-7 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">DSA Mastery</h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              <X size={28} />
            </button>
          </div>

          <div className=" scrollbar-hide flex-1 overflow-y-auto p-6">
            <ul className=" space-y-1">
              {tutorials.map((tutorial, index) => (
                <li key={index}>
                  <button
                    onClick={() => goToStep(index)}
                    className={` w-full text-left px-5 py-4 rounded-2xl transition-all text-base font-medium
                      ${
                        step === index
                          ? "bg-emerald-600 text-white"
                          : "hover:bg-zinc-900 text-zinc-400"
                      }`}
                  >
                    {tutorial.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DSATutorial;
