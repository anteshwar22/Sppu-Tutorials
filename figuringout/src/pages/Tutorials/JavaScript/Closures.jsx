import React from "react";

const Closures = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Closures in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        A closure is created when a function remembers and accesses variables
        from its outer scope even after the outer function has finished
        execution.
      </p>

      {/* Basic Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Basic Example</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2`}
          </pre>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold mb-2">Explanation:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <b>outer()</b> creates variable <b>count</b>
          </li>
          <li>
            <b>inner()</b> remembers <b>count</b> even after outer finishes
          </li>
          <li>
            This memory = <b>Closure</b>
          </li>
        </ul>
      </div>

      {/* Real Use */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Real Use Case</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function createUser(name) {
  return function() {
    console.log("User:", name);
  };
}

const user1 = createUser("Anteshwar");
user1(); // User: Anteshwar`}
          </pre>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Closures remember outer variables</li>
          <li>Used for data privacy</li>
          <li>Helps in creating functions with memory</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Closures are heavily used in React, event handlers, and async code.
        </p>
      </div>
    </div>
  );
};

export default Closures;
