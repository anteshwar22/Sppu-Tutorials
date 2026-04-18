import React from "react";

const Destructuring = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Destructuring in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Destructuring is a feature in JavaScript that allows you to extract
        values from arrays or objects and assign them to variables easily.
      </p>

      {/* Object Destructuring */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Object Destructuring</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let person = {
  name: "Anteshwar",
  age: 20
};

let { name, age } = person;

console.log(name); // Anteshwar`}
          </pre>
        </div>
      </div>

      {/* Array Destructuring */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Array Destructuring</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(a); // 10`}
          </pre>
        </div>
      </div>

      {/* Default Values */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Default Values</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let { city = "Pune" } = {};

console.log(city); // Pune`}
          </pre>
        </div>
      </div>

      {/* Rename Variables */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Renaming Variables</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let person = { name: "Anteshwar" };

let { name: userName } = person;

console.log(userName);`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Makes code shorter and cleaner</li>
          <li>Works with arrays and objects</li>
          <li>Used heavily in React props and API data</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Always use destructuring when working with objects in modern
          JavaScript.
        </p>
      </div>
    </div>
  );
};

export default Destructuring;
