import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import IntroSheet from "./DSASheet/IntroSheet";

const DSASheet= () => {
  const [step, setStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ✅ DSA Topics
  const dsaTopics = [
  
    { id: "arrays", title: "Arrays", component: <IntroSheet /> },
    {
      id: "array-problems",
      title: "Array Problems",
      component: <IntroSheet />,
    },

    { id: "strings", title: "Strings", component: <IntroSheet /> },
    {
      id: "string-problems",
      title: "String Problems",
      component: <IntroSheet />,
    },

    { id: "recursion", title: "Recursion", component: <IntroSheet /> },

    { id: "linked-list", title: "Linked List", component: <IntroSheet /> },
    {
      id: "ll-problems",
      title: "Linked List Problems",
      component: <IntroSheet />,
    },

    { id: "stack", title: "Stack", component: <IntroSheet /> },
    { id: "queue", title: "Queue", component: <IntroSheet /> },

    { id: "trees", title: "Trees", component: <IntroSheet /> },
    { id: "bst", title: "Binary Search Tree", component: <IntroSheet /> },

    { id: "graphs", title: "Graphs", component: <IntroSheet /> },

    { id: "sorting", title: "Sorting", component: <IntroSheet /> },
    { id: "searching", title: "Searching", component: <IntroSheet /> },

    { id: "heap", title: "Heap", component: <IntroSheet /> },
    { id: "hashing", title: "Hashing", component: <IntroSheet /> },

    { id: "dp", title: "Dynamic Programming", component: <IntroSheet /> },
    { id: "greedy", title: "Greedy", component: <IntroSheet /> },
    { id: "backtracking", title: "Backtracking", component: <IntroSheet /> },
  ];

  const currentTutorial = dsaTopics[step];

  const goToStep = (newStep) => {
    if (newStep >= 0 && newStep < dsaTopics.length) {
      setStep(newStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 flex">
      {/* Sidebar */}
      <aside className="hidden md:block w-72 bg-zinc-950 border-r border-zinc-800 overflow-y-auto sticky top-0 h-screen no-scrollbar">
        <div className="p-6 border-b border-zinc-800 flex items-center gap-3 sticky top-0 bg-zinc-950 z-10">
          <div className="p-2 bg-emerald-500/10 rounded-xl">
            <Zap className="w-7 h-7 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white">DSA Mastery</h2>
        </div>

        <div className="p-6">
          <ul className="space-y-1">
            {dsaTopics.map((topic, index) => (
              <li key={topic.id}>
                <button
                  onClick={() => goToStep(index)}
                  className={`w-full text-left px-5 py-3 rounded-xl transition-all text-sm
                    ${
                      step === index
                        ? "bg-emerald-600 text-white"
                        : "hover:bg-zinc-900 text-zinc-400 hover:text-white"
                    }`}
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-[#0a0a0f]/95 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>

          <div className="text-white font-semibold hidden md:block">
            Problems
          </div>

          <div className="text-emerald-400 text-sm">
            {step + 1} / {dsaTopics.length}
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar">
          <div className="max-w-4xl mx-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {currentTutorial.component}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-10">
              <button
                onClick={() => goToStep(step - 1)}
                disabled={step === 0}
                className="px-5 py-2 bg-zinc-800 rounded-lg disabled:opacity-40"
              >
                <ChevronLeft /> Prev
              </button>

              <button
                onClick={() => goToStep(step + 1)}
                disabled={step === dsaTopics.length - 1}
                className="px-5 py-2 bg-emerald-600 rounded-lg"
              >
                Next <ChevronRight />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black z-50 p-6 md:hidden">
          <button onClick={() => setSidebarOpen(false)}>
            <X />
          </button>

          <ul className="mt-6 space-y-2">
            {dsaTopics.map((topic, index) => (
              <li key={topic.id}>
                <button
                  onClick={() => goToStep(index)}
                  className="block w-full text-left py-3"
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DSASheet;
