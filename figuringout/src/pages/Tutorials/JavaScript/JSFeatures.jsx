import React from "react";

const JSFeatures = () => {
  return (
    <div className="space-y-6">
    
      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        JavaScript is one of the most popular programming languages used for
        building dynamic and interactive web applications. It has many powerful
        features that make it flexible and easy to use.
      </p>

      {/* Features List */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>Lightweight:</b> Fast execution and minimal resource usage
          </li>
          <li>
            <b>Interpreted Language:</b> No need for compilation
          </li>
          <li>
            <b>Dynamic Typing:</b> No need to declare variable types
          </li>
          <li>
            <b>Event-Based:</b> Handles user actions like clicks
          </li>
          <li>
            <b>Object-Oriented:</b> Supports objects and classes
          </li>
          <li>
            <b>Platform Independent:</b> Runs in any browser
          </li>
        </ul>
      </div>

      {/* Example */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
        <pre>
          {`// Example of dynamic typing
let x = 10;
x = "Hello JavaScript";

console.log(x);`}
        </pre>
      </div>

      {/* Output */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Output:</p>
        <p>Hello JavaScript</p>
      </div>
    </div>
  );
};

export default JSFeatures;
