import React from "react";

const Variables = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Variables in JavaScript (var, let, const)
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Variables are used to store data in JavaScript. There are three ways to
        declare variables: <b>var</b>, <b>let</b>, and <b>const</b>.
      </p>

      {/* Types */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Types of Variables</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>var:</b> Function-scoped and can be redeclared
          </li>
          <li>
            <b>let:</b> Block-scoped and cannot be redeclared
          </li>
          <li>
            <b>const:</b> Block-scoped and cannot be reassigned
          </li>
        </ul>
      </div>

      {/* Example */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
        <pre>
          {`// var example
var a = 10;
var a = 20; // allowed

// let example
let b = 30;
// let b = 40; ❌ error

// const example
const c = 50;
// c = 60; ❌ error`}
        </pre>
      </div>

      {/* Differences Table */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Differences</h2>
        <ul className="text-gray-700 space-y-1">
          <li>🔹 var → function scoped</li>
          <li>🔹 let → block scoped</li>
          <li>🔹 const → block scoped + fixed value</li>
        </ul>
      </div>

      {/* Output */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Important Note:</p>
        <p className="text-gray-700">
          Always prefer <b>let</b> and <b>const</b> over <b>var</b> in modern
          JavaScript.
        </p>
      </div>
    </div>
  );
};

export default Variables;
