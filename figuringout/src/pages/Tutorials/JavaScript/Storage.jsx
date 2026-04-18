import React from "react";

const Storage = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Local Storage & Session Storage
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Web storage allows you to store data in the browser. There are two
        types:
        <b> Local Storage</b> and <b> Session Storage</b>.
      </p>

      {/* Local Storage */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Local Storage</h2>
        <p className="text-gray-700 mb-2">
          Data persists even after browser is closed.
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// Save data
localStorage.setItem("name", "Anteshwar");

// Get data
let name = localStorage.getItem("name");

// Remove data
localStorage.removeItem("name");`}
          </pre>
        </div>
      </div>

      {/* Session Storage */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Session Storage</h2>
        <p className="text-gray-700 mb-2">
          Data is cleared when the browser tab is closed.
        </p>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`sessionStorage.setItem("user", "Anteshwar");

let user = sessionStorage.getItem("user");`}
          </pre>
        </div>
      </div>

      {/* Difference */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Difference</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Local Storage → permanent</li>
          <li>Session Storage → temporary (tab-based)</li>
        </ul>
      </div>

      {/* JSON */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Storing Objects</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let user = { name: "Anteshwar", age: 20 };

// Save
localStorage.setItem("user", JSON.stringify(user));

// Get
let data = JSON.parse(localStorage.getItem("user"));`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Stores data as strings only</li>
          <li>Use JSON.stringify() for objects</li>
          <li>Use JSON.parse() to retrieve objects</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Use localStorage for user preferences and sessionStorage for temporary
          data.
        </p>
      </div>
    </div>
  );
};

export default Storage;
