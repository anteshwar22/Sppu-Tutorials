import React from "react";

const SpreadRest = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Spread & Rest Operators in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        The <b>spread</b> and <b>rest</b> operators use the same syntax (
        <b>...</b>) but serve different purposes in JavaScript.
      </p>

      {/* Spread */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Spread Operator (...)</h2>
        <p className="text-gray-700 mb-2">
          Expands elements of an array or object.
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// Array example
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]

// Object example
let obj1 = { name: "Anteshwar" };
let obj2 = { ...obj1, age: 20 };`}
          </pre>
        </div>
      </div>

      {/* Rest */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Rest Operator (...)</h2>
        <p className="text-gray-700 mb-2">
          Collects multiple values into a single variable.
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10`}
          </pre>
        </div>
      </div>

      {/* Difference */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Difference</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <b>Spread</b> → expands values
          </li>
          <li>
            <b>Rest</b> → collects values
          </li>
        </ul>
      </div>

      {/* Use Cases */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Common Use Cases</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Copying arrays/objects</li>
          <li>Merging data</li>
          <li>Handling function arguments</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Spread is mostly used in React state updates, and rest is useful in
          functions.
        </p>
      </div>
    </div>
  );
};

export default SpreadRest;
