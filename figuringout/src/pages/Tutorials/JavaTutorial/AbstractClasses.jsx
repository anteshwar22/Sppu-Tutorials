import React from "react";

const AbstractClasses = () => {
  // Data for the comparison table to keep JSX clean
  const comparisonData = [
    {
      feature: "Methods",
      abstract: "Abstract + Concrete",
      interface: "Mainly Abstract (prior to Java 8)",
    },
    {
      feature: "Inheritance",
      abstract: "Single (extends)",
      interface: "Multiple (implements)",
    },
    {
      feature: "Variables",
      abstract: "Final, non-final, static",
      interface: "Only static & final",
    },
    { feature: "Constructor", abstract: "Allowed", interface: "Not allowed" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="mb-10 border-l-8 border-indigo-500 pl-6">
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          Abstract Classes
        </h1>
        <p className="text-lg text-gray-600">
          The blueprint for inheritance. Define the{" "}
          <span className="text-indigo-600 font-semibold">what</span>, let
          subclasses define the{" "}
          <span className="text-indigo-600 font-semibold">how</span>.
        </p>
      </header>

      {/* Concept Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <h3 className="font-bold text-indigo-900 mb-2">What is it?</h3>
          <p className="text-sm leading-relaxed">
            A class declared with the <b>abstract</b> keyword. It acts as a
            partial implementation that cannot be instantiated on its own.
          </p>
        </div>
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
          <h3 className="font-bold text-amber-900 mb-2">The Rule of Thumb</h3>
          <p className="text-sm leading-relaxed">
            Use an abstract class when you want to share code (concrete methods)
            among several closely related classes.
          </p>
        </div>
      </div>

      {/* Code Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="mr-2">💻</span> Implementation Syntax
        </h2>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <pre className="relative bg-slate-900 text-slate-300 p-6 rounded-lg overflow-x-auto font-mono text-sm leading-relaxed">
            <code className="text-purple-400">abstract class</code>{" "}
            <span className="text-yellow-300">Vehicle</span> {"{"} {"\n"}
            {"  "}{" "}
            <span className="text-gray-500">// Abstract method (no body)</span>
            {"\n"}
            {"  "} <code className="text-purple-400">abstract void</code>{" "}
            <span className="text-blue-400">fuelType()</span>; {"\n\n"}
            {"  "}{" "}
            <span className="text-gray-500">// Concrete method (has body)</span>
            {"\n"}
            {"  "} <code className="text-purple-400">void</code>{" "}
            <span className="text-blue-400">start()</span> {"{"} {"\n"}
            {"    "} System.out.println(
            <span className="text-green-400">"Engine starting..."</span>);{"\n"}
            {"  "} {"}"} {"\n"}
            {"}"}
          </pre>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 italic text-gray-700 underline decoration-indigo-500 underline-offset-8">
          Abstract Class vs. Interface
        </h2>
        <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="p-4 font-bold text-gray-600">Feature</th>
                <th className="p-4 font-bold text-indigo-600">
                  Abstract Class
                </th>
                <th className="p-4 font-bold text-purple-600">Interface</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-900">
                    {row.feature}
                  </td>
                  <td className="p-4 text-gray-600">{row.abstract}</td>
                  <td className="p-4 text-gray-600">{row.interface}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Rules Footer */}
      <footer className="bg-slate-100 p-8 rounded-3xl">
        <h3 className="text-lg font-bold mb-4 text-slate-800">
          Pro-Tips for Interviews:
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Constructors are allowed in abstract classes.",
            "You cannot use 'final' with 'abstract'.",
            "A class can be abstract without having any abstract methods.",
            "Subclasses MUST implement all inherited abstract methods.",
          ].map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <span className="text-indigo-500">✔</span> {tip}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default AbstractClasses;
