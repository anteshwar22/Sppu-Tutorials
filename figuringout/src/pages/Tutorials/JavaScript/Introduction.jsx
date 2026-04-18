import React from "react";

const Introduction = () => {
  return (
    <div className="space-y-6">
    

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">
        JavaScript is a powerful programming language used to make web pages
        interactive. It allows you to create dynamic content like animations,
        form validation, and real-time updates.
      </p>

      {/* Key Points */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Key Features</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Lightweight and fast</li>
          <li>Runs directly in the browser</li>
          <li>Supports object-oriented programming</li>
          <li>Used for frontend and backend (Node.js)</li>
        </ul>
      </div>

      {/* Example Code */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
        <pre>
          {`// Your first JavaScript code
console.log("Hello, World!");`}
        </pre>
      </div>

      {/* Output */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Output:</p>
        <p>Hello, World!</p>
      </div>
    </div>
  );
};

export default Introduction;
