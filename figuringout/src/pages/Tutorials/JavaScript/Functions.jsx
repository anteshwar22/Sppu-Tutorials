import React from "react";

const Functions = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Functions in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Functions are reusable blocks of code that perform a specific task. They
        help in writing clean, modular, and maintainable code.
      </p>

      {/* Basic Function */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Basic Function</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function greet() {
  console.log("Hello, World!");
}

greet();`}
          </pre>
        </div>
      </div>

      {/* Parameters */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          2. Function with Parameters
        </h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8`}
          </pre>
        </div>
      </div>

      {/* Function Expression */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Function Expression</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`const greet = function() {
  console.log("Hello!");
};

greet();`}
          </pre>
        </div>
      </div>

      {/* Arrow Function */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Arrow Function</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`const add = (a, b) => a + b;

console.log(add(2, 3)); // 5`}
          </pre>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Functions make code reusable</li>
          <li>Can accept parameters and return values</li>
          <li>Arrow functions are shorter syntax</li>
          <li>Functions are first-class citizens in JavaScript</li>
        </ul>
      </div>

      {/* Output */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Important Tip:</p>
        <p className="text-gray-700">
          Always use functions to break your code into smaller reusable parts.
        </p>
      </div>
    </div>
  );
};

export default Functions;
