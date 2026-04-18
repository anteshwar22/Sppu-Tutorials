import React from "react";

const Introduction = () => {
  return (
    <section id="introduction" className="mb-12">

      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        React Tutorial
      </h1>

      <p className="text-gray-600 leading-relaxed">
        React is a JavaScript library used to build user interfaces. It allows
        developers to create reusable UI components and build fast and
        interactive web applications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        Example Code
      </h2>

      <pre className="bg-gray-900 text-green-400 p-5 rounded-lg overflow-x-auto text-sm">
{`function App() {
  return (
    <h1>Hello React</h1>
  )
}

export default App`}
      </pre>

    </section>
  );
};

export default Introduction;