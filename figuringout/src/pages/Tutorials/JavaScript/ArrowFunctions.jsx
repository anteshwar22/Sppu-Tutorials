import React from "react";

const ArrowFunctions = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Arrow Functions in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Arrow functions are a shorter and cleaner way to write functions in
        JavaScript. They were introduced in ES6 and are widely used in modern
        development, especially in React.
      </p>

      {/* Basic Syntax */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Basic Syntax</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// Normal Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => {
  return a + b;
};`}
          </pre>
        </div>
      </div>

      {/* Short Syntax */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Short Syntax</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// Single line return (implicit return)
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5`}
          </pre>
        </div>
      </div>

      {/* One Parameter */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Single Parameter</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`const square = x => x * x;

console.log(square(4)); // 16`}
          </pre>
        </div>
      </div>

      {/* No Parameter */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. No Parameter</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`const greet = () => "Hello!";

console.log(greet());`}
          </pre>
        </div>
      </div>

      {/* Important Difference */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Difference</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            No <b>this</b> binding (inherits from parent)
          </li>
          <li>Shorter syntax</li>
          <li>Best for small functions</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Use arrow functions in React and callbacks, but avoid them in objects
          when you need <b>this</b>.
        </p>
      </div>
    </div>
  );
};

export default ArrowFunctions;
