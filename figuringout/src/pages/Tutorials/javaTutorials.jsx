import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

// All Java Tutorial Components
import IntroductionToJava from "./JavaTutorial/IntroductionToJava";
import AbstractClasses from "./JavaTutorial/AbstractClasses";
import JavaFeatures from "./JavaTutorial/JavaFeatures";
import Abstraction from "./JavaTutorial/Abstraction";
import JVMArchitecture from "./JavaTutorial/JVMArchitecture";
import VariablesDataTypes from "./JavaTutorial/VariablesDataTypes";
import ProgramStructure from "./JavaTutorial/ProgramStructure";
import TypeCasting from "./JavaTutorial/TypeCasting";
import Operators from "./JavaTutorial/Operators";
import ControlStatements from "./JavaTutorial/ControlStatements";
import OOPConcepts from "./JavaTutorial/OOPConcepts";
import ClassesObjects from "./JavaTutorial/ClassesObjects";
import Constructors from "./JavaTutorial/Constructors";
import Polymorphism from "./JavaTutorial/Polymorphism";
import Inheritance from "./JavaTutorial/Inheritance";
import Encapsulation from "./JavaTutorial/Encapsulation";
import Interfaces from "./JavaTutorial/Interfaces";
import MethodOverloading from "./JavaTutorial/MethodOverloading";
import MethodOverriding from "./JavaTutorial/MethodOverriding";
import Strings from "./JavaTutorial/Strings";
import StringBuilderBuffer from "./JavaTutorial/StringBuilderBuffer";
import Arrays from "./JavaTutorial/Arrays";
import MultiDimArrays from "./JavaTutorial/MultiDimArrays";
import ExceptionHandling from "./JavaTutorial/ExceptionHandling";
import TryCatch from "./JavaTutorial/TryCatch";
import CustomExceptions from "./JavaTutorial/CustomExceptions";
import CollectionsFramework from "./JavaTutorial/CollectionsFramework";
import ListInterface from "./JavaTutorial/ListInterface";
import SetInterface from "./JavaTutorial/SetInterface";
import MapInterface from "./JavaTutorial/MapInterface";
import IteratorComparable from "./JavaTutorial/IteratorComparable";
import Multithreading from "./JavaTutorial/Multithreading";
import ThreadLifecycle from "./JavaTutorial/ThreadLifecycle";
import Synchronization from "./JavaTutorial/Synchronization";
import FileHandling from "./JavaTutorial/FileHandling";
import Serialization from "./JavaTutorial/Serialization";
import Java8Features from "./JavaTutorial/Java8Features";
import LambdaExpressions from "./JavaTutorial/LambdaExpressions";
import StreamsAPI from "./JavaTutorial/StreamsAPI";
import FunctionalInterfaces from "./JavaTutorial/FunctionalInterfaces";
import GarbageCollection from "./JavaTutorial/GarbageCollection";
import WrapperClasses from "./JavaTutorial/WrapperClasses";
import Annotations from "./JavaTutorial/Annotations";
import JavaInterviewQuestions from "./JavaTutorial/JavaInterviewQuestions";
import JavaComponent from "./JavaTutorial/JavaComponent";

const JavaTutorial = () => {
  const [step, setStep] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tutorials = [
    { title: "Introduction to Java", component: <IntroductionToJava /> },
    { title: "Java Features", component: <JavaFeatures /> },
    { title: "JDK, JRE, JVM", component: <JavaComponent /> },
    { title: "JVM Architecture", component: <JVMArchitecture /> },
    { title: "Program Structure", component: <ProgramStructure /> },
    { title: "Variables & Data Types", component: <VariablesDataTypes /> },
    { title: "Type Casting", component: <TypeCasting /> },
    { title: "Operators", component: <Operators /> },
    { title: "Control Statements", component: <ControlStatements /> },
    { title: "OOP Concepts", component: <OOPConcepts /> },
    { title: "Classes & Objects", component: <ClassesObjects /> },
    { title: "Constructors", component: <Constructors /> },
    { title: "Inheritance", component: <Inheritance /> },
    { title: "Polymorphism", component: <Polymorphism /> },
    { title: "Abstraction", component: <Abstraction /> },
    { title: "Encapsulation", component: <Encapsulation /> },
    { title: "Interfaces", component: <Interfaces /> },
    { title: "Abstract Classes", component: <AbstractClasses /> },
    { title: "Method Overloading", component: <MethodOverloading /> },
    { title: "Method Overriding", component: <MethodOverriding /> },
    { title: "Strings", component: <Strings /> },
    { title: "StringBuilder & Buffer", component: <StringBuilderBuffer /> },
    { title: "Arrays", component: <Arrays /> },
    { title: "Multidimensional Arrays", component: <MultiDimArrays /> },
    { title: "Exception Handling", component: <ExceptionHandling /> },
    { title: "Try-Catch", component: <TryCatch /> },
    { title: "Custom Exceptions", component: <CustomExceptions /> },
    { title: "Collections Framework", component: <CollectionsFramework /> },
    { title: "List Interface", component: <ListInterface /> },
    { title: "Set Interface", component: <SetInterface /> },
    { title: "Map Interface", component: <MapInterface /> },
    { title: "Multithreading", component: <Multithreading /> },
    { title: "Thread Lifecycle", component: <ThreadLifecycle /> },
    { title: "Synchronization", component: <Synchronization /> },
    { title: "File Handling", component: <FileHandling /> },
    { title: "Serialization", component: <Serialization /> },
    { title: "Java 8 Features", component: <Java8Features /> },
    { title: "Lambda Expressions", component: <LambdaExpressions /> },
    { title: "Streams API", component: <StreamsAPI /> },
    { title: "Garbage Collection", component: <GarbageCollection /> },
    { title: "Wrapper Classes", component: <WrapperClasses /> },
    { title: "Annotations", component: <Annotations /> },
    { title: "Interview Questions", component: <JavaInterviewQuestions /> },
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
      {/* Sidebar - Hidden on mobile, always visible on desktop */}
      <aside className=" scrollbar-hide hidden md:block w-72 bg-slate-900 border-r border-slate-800 overflow-y-auto sticky top-0 h-screen">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3 sticky top-0 bg-slate-900 z-10">
          <BookOpen className="w-7 h-7 text-orange-400" />
          <h2 className="text-2xl font-bold tracking-tight">Core Java</h2>
        </div>

        <div className="p-6">
          <div className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-medium">
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
                        ? "bg-orange-600 text-white shadow-lg"
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
      <div className="flex-1 flex flex-col h-screen min-w-0">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-3 text-slate-400 hover:text-white rounded-xl"
          >
            {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <div className="font-semibold text-lg text-white hidden md:block truncate">
            {currentTutorial.title}
          </div>

          <div className="text-sm text-slate-400 font-medium">
            {step + 1} / {tutorials.length}
          </div>
        </div>

        {/* Scrollable Lesson Content */}
        <main className=" scrollbar-hide flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
              >
                {/* Large Bold Heading */}
                {/* <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-12">
                  {currentTutorial.title}
                </h1> */}

                {/* Actual Lesson Content */}
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
                className="flex items-center gap-3 px-8 py-4 bg-orange-600 hover:bg-orange-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-2xl font-semibold transition-all group"
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
        <div className="fixed inset-0 z-50 md:hidden bg-slate-950 flex flex-col">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-orange-400" />
              <h2 className="text-2xl font-bold">Core Java</h2>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-1">
              {tutorials.map((tutorial, index) => (
                <li key={index}>
                  <button
                    onClick={() => goToStep(index)}
                    className={`w-full text-left px-5 py-4 rounded-2xl transition-all text-base font-medium
                      ${
                        step === index
                          ? "bg-orange-600 text-white"
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

export default JavaTutorial;
