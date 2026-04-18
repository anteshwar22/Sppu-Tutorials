import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Code2,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

// All JavaScript Components
import Introduction from "./JavaScript/Introduction";
import JSFeatures from "./JavaScript/JSFeatures";
import ExecutionContext from "./JavaScript/Execution";
import Variables from "./JavaScript/Variables";
import DataTypes from "./JavaScript/Datatypes";
import TypeConversion from "./JavaScript/TypeConversion";
import Operators from "./JavaTutorial/Operators";
import ControlStatements from "./JavaTutorial/ControlStatements";
import Functions from "./JavaScript/Functions";
import ArrowFunctions from "./JavaScript/ArrowFunctions";
import Callbacks from "./JavaScript/Callbacks";
import Closures from "./JavaScript/Closures";
import Objects from "./JavaScript/Objects";
import ThisKeyword from "./JavaScript/ThisKeyword";
import PrototypeInheritance from "./JavaScript/PrototypeInheritance";
import Arrays from "./JavaTutorial/Arrays";
import ArrayMethods from "./JavaScript/ArrayMethods";
import DOMManipulation from "./JavaScript/DOMManipulation";
import ES6Features from "./JavaScript/ES6Features";
import Destructuring from "./JavaScript/Destructuring";
import SpreadRest from "./JavaScript/SpreadRest";
import TemplateLiterals from "./JavaScript/TemplateLiterals";
import AsyncJavaScript from "./JavaScript/Asynchronous";
import Promises from "./JavaScript/Promises";
import AsyncAwait from "./JavaScript/AsyncAwait";
import FetchAPI from "./JavaScript/FetchAPI";
import ErrorHandling from "./JavaScript/ErrorHandling";
import Storage from "./JavaScript/Storage";
import JSInterviewQuestions from "./JavaScript/Interview";

const JavascriptTutorial = () => {
  const [step, setStep] = useState(() => {
    const saved = localStorage.getItem("js-tutorial-step");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("js-tutorial-step", step);
  }, [step]);

  const tutorials = [
    { title: "Introduction to JavaScript", component: <Introduction /> },
    { title: "JavaScript Features", component: <JSFeatures /> },
    {
      title: "How JS Works (Execution Context)",
      component: <ExecutionContext />,
    },
    { title: "Variables (var, let, const)", component: <Variables /> },
    { title: "Data Types", component: <DataTypes /> },
    { title: "Type Conversion & Coercion", component: <TypeConversion /> },
    { title: "Operators", component: <Operators /> },
    {
      title: "Control Statements (if, switch, loops)",
      component: <ControlStatements />,
    },
    { title: "Functions", component: <Functions /> },
    { title: "Arrow Functions", component: <ArrowFunctions /> },
    { title: "Callbacks", component: <Callbacks /> },
    { title: "Closures", component: <Closures /> },
    { title: "Objects", component: <Objects /> },
    { title: "this Keyword", component: <ThisKeyword /> },
    { title: "Prototype & Inheritance", component: <PrototypeInheritance /> },
    { title: "Arrays", component: <Arrays /> },
    {
      title: "Array Methods (map, filter, reduce)",
      component: <ArrayMethods />,
    },
    { title: "DOM Manipulation", component: <DOMManipulation /> },
    { title: "ES6 Features", component: <ES6Features /> },
    { title: "Destructuring", component: <Destructuring /> },
    { title: "Spread & Rest Operators", component: <SpreadRest /> },
    { title: "Template Literals", component: <TemplateLiterals /> },
    { title: "Asynchronous JavaScript", component: <AsyncJavaScript /> },
    { title: "Promises", component: <Promises /> },
    { title: "Async / Await", component: <AsyncAwait /> },
    { title: "Fetch API (Backend Connection)", component: <FetchAPI /> },
    { title: "Error Handling (try-catch)", component: <ErrorHandling /> },
    { title: "Local Storage & Session Storage", component: <Storage /> },
    {
      title: "JavaScript Interview Questions",
      component: <JSInterviewQuestions />,
    },
  ];

  const progress = ((step + 1) / tutorials.length) * 100;

  const goToStep = (newStep) => {
    if (newStep >= 0 && newStep < tutorials.length) {
      setStep(newStep);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex font-sans">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <aside className="  scrollbar-hide hidden md:block w-80 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 overflow-y-auto sticky top-0 h-screen">
        <div className="p-6 border-b border-slate-800/50 flex items-center gap-3 sticky top-0 bg-slate-900/80 backdrop-blur-md z-10">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <Code2 className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            JS Masterclass
          </h2>
        </div>

        <div className="p-4">
          <div className="px-4 py-2 flex justify-between items-center mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
              Course Content
            </span>
            <span className="text-[10px] text-orange-500 font-bold">
              {Math.round(progress)}% Done
            </span>
          </div>

          <nav className=" scrollbar-hide space-y-1">
            {tutorials.map((tutorial, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={` w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  step === index
                    ? "bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/20"
                    : "hover:bg-slate-800/50 text-slate-400 hover:text-slate-100"
                }`}
              >
                <div
                  className={` flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${
                    index < step
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-500"
                      : step === index
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-slate-700 group-hover:border-slate-500"
                  }`}
                >
                  {index < step ? <CheckCircle2 size={14} /> : index + 1}
                </div>
                <span className="text-sm font-medium text-left truncate">
                  {tutorial.title}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-[#020617]/80 backdrop-blur-lg border-b border-slate-800/50 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="  md:hidden p-2 text-slate-400 hover:bg-slate-800 rounded-lg"
            >
              <Menu size={24} />
            </button>

            <div className="  flex items-center gap-4 flex-1 md:ml-0 ml-4">
              <BookOpen size={18} className="text-slate-500 hidden sm:block" />
              <span className="text-sm font-medium text-slate-400 truncate">
                {tutorials[step]?.title}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className=" scrollbar-hide hidden lg:block w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-orange-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-mono text-slate-500">
                {String(step + 1).padStart(2, "0")} / {tutorials.length}
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
            <AnimatePresence mode="wait">
              <motion.article
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[60vh]"
              >
                <div className="space-y-4 mb-12">
                  <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">
                    Module {step + 1}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    {tutorials[step]?.title}
                  </h1>
                </div>

                <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-p:text-slate-400 prose-p:leading-relaxed prose-p:text-lg prose-code:text-orange-300">
                  {tutorials[step]?.component}
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Navigation Footer */}
            <div className="mt-24 pt-10 border-t border-slate-800/50 flex flex-col sm:flex-row gap-4 justify-between">
              <button
                onClick={() => goToStep(step - 1)}
                disabled={step === 0}
                className="flex flex-col items-start gap-1 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-all disabled:opacity-30 group"
              >
                <span className="text-[10px] uppercase tracking-wider text-slate-500 flex items-center gap-1">
                  <ChevronLeft size={12} /> Previous
                </span>
                <span className="font-bold text-slate-200">
                  {step > 0 ? tutorials[step - 1].title : "Start"}
                </span>
              </button>

              <button
                onClick={() => goToStep(step + 1)}
                disabled={step === tutorials.length - 1}
                className="flex flex-col items-end gap-1 p-5 rounded-2xl bg-orange-600 hover:bg-orange-500 transition-all shadow-lg shadow-orange-900/20 disabled:opacity-30 group text-right"
              >
                <span className="text-[10px] uppercase tracking-wider text-orange-200 flex items-center gap-1">
                  Next Lesson <ChevronRight size={12} />
                </span>
                <span className="font-bold text-white">
                  {step < tutorials.length - 1
                    ? tutorials[step + 1].title
                    : "Complete!"}
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Full-Screen Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#020617] flex flex-col">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Code2 className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-xl font-bold">JS Masterclass</h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-slate-400"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-1">
              {tutorials.map((tutorial, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    step === index
                      ? "bg-orange-500/10 text-orange-500 ring-1 ring-orange-500/20"
                      : "hover:bg-slate-800/50 text-slate-400"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      index < step
                        ? "border-emerald-500 bg-emerald-500/10 text-emerald-500"
                        : step === index
                          ? "border-orange-500 bg-orange-500 text-white"
                          : "border-slate-700"
                    }`}
                  >
                    {index < step ? <CheckCircle2 size={14} /> : index + 1}
                  </div>
                  <span className="text-sm font-medium text-left truncate">
                    {tutorial.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default JavascriptTutorial;
