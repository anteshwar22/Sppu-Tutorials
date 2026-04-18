import React, { useState } from "react";

// 1. Centralized Data: Easier to update or fetch from an API later
const INTERVIEW_DATA = [
  {
    category: "Core Java",
    questions: [
      {
        q: "What is Java?",
        a: "A high-level, object-oriented, platform-independent programming language.",
      },
      {
        q: "Why is Java platform independent?",
        a: "Java uses the JVM to run bytecode, making it OS-neutral.",
      },
      {
        q: "JDK vs JRE vs JVM?",
        a: "JDK (Dev tools) > JRE (Runtime environment) > JVM (Executes bytecode).",
      },
    ],
  },
  {
    category: "OOP Principles",
    questions: [
      {
        q: "What are the 4 pillars of OOP?",
        a: "Abstraction, Encapsulation, Inheritance, and Polymorphism.",
      },
      {
        q: "What is Polymorphism?",
        a: "The ability of an object to take many forms (e.g., Method Overloading/Overriding).",
      },
    ],
  },
  {
    category: "Java 8+ Features",
    questions: [
      {
        q: "What are Lambda Expressions?",
        a: "Short block of code which takes in parameters and returns a value.",
      },
      {
        q: "What is the Optional class?",
        a: "A container object used to contain not-null objects, helping avoid NullPointerExceptions.",
      },
    ],
  },
];

const JavaInterviewQuestions = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl font-sans text-gray-900 border border-gray-100 my-10">
      {/* Header Section */}
      <header className="border-b border-gray-100 pb-6 mb-8 text-center sm:text-left">
        <h1 className="text-4xl font-black text-indigo-600 tracking-tight mb-2">
          Java Interview Elite{" "}
          <span className="text-gray-300 font-light">/ v2.0</span>
        </h1>
        <p className="text-gray-500 font-medium italic">
          Master the fundamentals with clarity and confidence.
        </p>
      </header>

      {/* Dynamic Sections */}
      {INTERVIEW_DATA.map((section, sIdx) => (
        <section key={sIdx} className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm">
              {sIdx + 1}
            </span>
            {section.category}
          </h2>

          <div className="space-y-3">
            {section.questions.map((item, qIdx) => {
              const uniqueKey = `${sIdx}-${qIdx}`;
              const isOpen = activeIdx === uniqueKey;

              return (
                <div
                  key={uniqueKey}
                  className={`group border rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "border-indigo-400 bg-indigo-50 shadow-md"
                      : "border-gray-200 hover:border-indigo-200"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(uniqueKey)}
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                  >
                    <span
                      className={`font-semibold ${isOpen ? "text-indigo-700" : "text-gray-700"}`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-45 text-indigo-500" : "text-gray-400"}`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="pt-2 border-t border-indigo-100">
                        <span className="font-bold text-indigo-500 mr-2">
                          Ans:
                        </span>{" "}
                        {item.a}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Terminal Style Pro-Tip */}
      <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl mt-12 border border-slate-700">
        <div className="flex gap-1.5 mb-4">
          <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
          <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
          <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
        </div>
        <h3 className="text-emerald-400 font-mono text-sm mb-2">
          // Pro-Interview Insight
        </h3>
        <p className="text-indigo-300 font-mono text-xs mb-4 italic">
          "Interviewers value how you think, not just what you know."
        </p>
        <ul className="space-y-2 font-mono text-slate-300 text-sm">
          <li className="flex gap-2">
            <span>1.</span> Explain with real-world analogies.
          </li>
          <li className="flex gap-2">
            <span>2.</span> Be honest if you don't know—then explain how you'd
            find out.
          </li>
          <li className="flex gap-2">
            <span>3.</span> Understand memory management (JVM) deeply.
          </li>
        </ul>
      </div>

      <footer className="mt-12 text-center text-gray-400 text-xs tracking-widest uppercase font-semibold">
        Curated for Senior Engineers • 2024
      </footer>
    </div>
  );
};

export default JavaInterviewQuestions;
