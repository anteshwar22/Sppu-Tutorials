import React from "react";

const Operators = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Operators in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Operators are used to perform operations on variables and values in
        JavaScript, such as arithmetic calculations, comparisons, and logical
        operations.
      </p>

      {/* Types */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Types of Operators</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>Arithmetic Operators</b>
          </li>
          <li>
            <b>Comparison Operators</b>
          </li>
          <li>
            <b>Logical Operators</b>
          </li>
          <li>
            <b>Assignment Operators</b>
          </li>
        </ul>
      </div>

      {/* Arithmetic */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Arithmetic Operators</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let a = 10, b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0`}
          </pre>
        </div>
      </div>

      {/* Comparison */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Comparison Operators</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 5);     // true
console.log(10 < 5);     // false`}
          </pre>
        </div>
      </div>

      {/* Logical */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Logical Operators</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let x = true, y = false;

console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false`}
          </pre>
        </div>
      </div>

      {/* Assignment */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Assignment Operators</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let a = 10;

a += 5; // 15
a -= 2; // 13
a *= 2; // 26`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <b>==</b> checks value only
          </li>
          <li>
            <b>===</b> checks value + type (recommended)
          </li>
          <li>Use logical operators for conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Operators;
