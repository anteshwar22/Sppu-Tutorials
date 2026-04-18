import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

// React Tutorial Components
import Introduction from "./reactTutorial/Introduction";
import WhyReact from "./reactTutorial/whyreact";
import Installation from "./reactTutorial/Installation";
import ProjectStructure from "./reactTutorial/ProjectStructure";
import JSX from "./reactTutorial/JSX";
import Components from "./reactTutorial/Components";
import Props from "./reactTutorial/Props";
import State from "./reactTutorial/State";
import EventHandling from "./reactTutorial/EventHandling";
import ConditionalRendering from "./reactTutorial/ConditionalRendering";
import ListsAndKeys from "./reactTutorial/ListsAndKeys";
import Forms from "./reactTutorial/Forms";
import LiftingStateUp from "./reactTutorial/LiftingStateUp";
import ReactHooks from "./reactTutorial/ReactHooks";
import UseState from "./reactTutorial/useState";
import UseEffect from "./reactTutorial/UseEffect";
import UseRef from "./reactTutorial/UseRef";
import UseContext from "./reactTutorial/UseContext";
import CustomHooks from "./reactTutorial/Custom Hooks";
import ReactRouter from "./reactTutorial/ReactRouter";
import APIFetching from "./reactTutorial/APIFetching";
import ErrorHandling from "./reactTutorial/ErrorHandling";
import PerformanceOptimization from "./reactTutorial/PerformanceOptimization";
import CodeSplitting from "./reactTutorial/CodeSplitting";
import Testing from "./reactTutorial/Testing";
import Deployment from "./reactTutorial/Deployment";

const ReactTutorial = () => {
  const [step, setStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tutorials = [
    { title: "Introduction to React", component: <Introduction /> },
    { title: "Why React?", component: <WhyReact /> },
    { title: "Installation & Setup", component: <Installation /> },
    { title: "Project Structure", component: <ProjectStructure /> },
    { title: "JSX Fundamentals", component: <JSX /> },
    { title: "Components", component: <Components /> },
    { title: "Props", component: <Props /> },
    { title: "State Management", component: <State /> },
    { title: "Event Handling", component: <EventHandling /> },
    { title: "Conditional Rendering", component: <ConditionalRendering /> },
    { title: "Lists & Keys", component: <ListsAndKeys /> },
    { title: "Forms & User Input", component: <Forms /> },
    { title: "Lifting State Up", component: <LiftingStateUp /> },
    { title: "React Hooks Overview", component: <ReactHooks /> },
    { title: "useState Hook", component: <UseState /> },
    { title: "useEffect Hook", component: <UseEffect /> },
    { title: "useRef Hook", component: <UseRef /> },
    { title: "useContext Hook", component: <UseContext /> },
    { title: "Custom Hooks", component: <CustomHooks /> },
    { title: "React Router", component: <ReactRouter /> },
    { title: "API Fetching", component: <APIFetching /> },
    { title: "Error Handling", component: <ErrorHandling /> },
    {
      title: "Performance Optimization",
      component: <PerformanceOptimization />,
    },
    { title: "Code Splitting", component: <CodeSplitting /> },
    { title: "Testing in React", component: <Testing /> },
    { title: "Deployment", component: <Deployment /> },
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
    <div className="min-h-screen bg-slate-950 text-white flex">
      {/* Sidebar - Hidden on mobile */}
      <aside className=" scrollbar-hide hidden md:block w-72 bg-slate-900 border-r border-slate-800 overflow-y-auto sticky top-0 h-screen">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3 sticky top-0 bg-slate-900 z-10">
          <BookOpen className="w-7 h-7 text-blue-400" />
          <h2 className="text-2xl font-bold tracking-tight">React Mastery</h2>
        </div>

        <div className="p-6">
          <div className="  text-xs uppercase tracking-widest text-slate-500 mb-4 font-medium">
            COURSE MODULES
          </div>
          <ul className="space-y-1">
            {tutorials.map((tutorial, index) => (
              <li key={index}>
                <button
                  onClick={() => goToStep(index)}
                  className={`w-full text-left px-5 py-3.5 rounded-2xl transition-all text-sm font-medium
                    ${
                      step === index
                        ? "bg-blue-600 text-white shadow-lg"
                        : "hover:bg-slate-800 text-slate-300 hover:text-white"
                    }`}
                >
                  {tutorial.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className=" scrollbar-hide flex-1 min-w-0 flex flex-col h-screen">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-3 text-slate-400 hover:text-white rounded-xl"
          >
            <Menu size={26} />
          </button>

          <div className="font-semibold text-lg text-white hidden md:block truncate">
            {currentTutorial.title}
          </div>

          <div className="text-sm text-slate-400 font-medium">
            {step + 1} / {tutorials.length}
          </div>
        </div>

        {/* Scrollable Lesson Content */}
        <main className="scrollbar-hide  flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
              >
                {/* Bold Lesson Heading */}
                {/* <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
                  {currentTutorial.title}
                </h1> */}

                {/* Content Area - Scrollable if content is long */}
                <div className="prose prose-invert max-w-none text-slate-300 prose-headings:text-white prose-p:text-slate-400 prose-p:leading-relaxed">
                  {currentTutorial.component}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation */}
            <div className="flex justify-between mt-24 pt-12 border-t border-slate-800">
              <button
                onClick={() => goToStep(step - 1)}
                disabled={step === 0}
                className="flex items-center gap-3 px-7 py-4 bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed rounded-2xl transition-all group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Previous</span>
              </button>

              <button
                onClick={() => goToStep(step + 1)}
                disabled={step === tutorials.length - 1}
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-2xl font-semibold transition-all group"
              >
                <span>Next Lesson</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Full-Screen Sidebar Overlay */}
      {sidebarOpen && (
        <div className=" fixed inset-0 z-50 md:hidden bg-slate-950 flex flex-col">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-blue-400" />
              <h2 className="text-2xl font-bold">React Mastery</h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X size={28} />
            </button>
          </div>

          <div className=" scrollbar-hide flex-1 overflow-y-auto p-6">
            <ul className="space-y-1">
              {tutorials.map((tutorial, index) => (
                <li key={index}>
                  <button
                    onClick={() => goToStep(index)}
                    className={` w-full text-left px-5 py-4 rounded-2xl transition-all text-base font-medium
                      ${
                        step === index
                          ? "bg-blue-600 text-white"
                          : "hover:bg-slate-900 text-slate-300"
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

export default ReactTutorial;
