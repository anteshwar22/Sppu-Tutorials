import React from "react";

const ES6Features = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        ES6 Features in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        ES6 (ECMAScript 2015) introduced many powerful features that make
        JavaScript more modern, readable, and efficient.
      </p>

      {/* Features List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Key ES6 Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>let & const</li>
          <li>Arrow Functions</li>
          <li>Template Literals</li>
          <li>Destructuring</li>
          <li>Spread & Rest Operators</li>
          <li>Classes</li>
          <li>Modules (import/export)</li>
        </ul>
      </div>

      {/* let & const */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. let & const</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let name = "Anteshwar";
const age = 20;`}
          </pre>
        </div>
      </div>

      {/* Arrow Function */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Arrow Functions</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>{`const add = (a, b) => a + b;`}</pre>
        </div>
      </div>

      {/* Template Literals */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Template Literals</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let name = "Anteshwar";
console.log(\`Hello \${name}\`);`}
          </pre>
        </div>
      </div>

      {/* Destructuring */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Destructuring</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let obj = { name: "Anteshwar", age: 20 };
let { name, age } = obj;`}
          </pre>
        </div>
      </div>

      {/* Spread */}
      <div>
        <h2 className="text-xl font-semibold mb-2">5. Spread Operator</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];`}
          </pre>
        </div>
      </div>

      {/* Classes */}
      <div>
        <h2 className="text-xl font-semibold mb-2">6. Classes</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`class Person {
  constructor(name) {
    this.name = name;
  }
}`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>ES6 makes code cleaner and shorter</li>
          <li>Widely used in React and modern JS apps</li>
          <li>Helps in writing maintainable code</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Master ES6 — it is required for React, Node.js, and interviews.
        </p>
      </div>
    </div>
  );
};

export default ES6Features;
