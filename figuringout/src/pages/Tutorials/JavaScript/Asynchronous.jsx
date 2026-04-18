import React from "react";

const AsyncJavaScript = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Asynchronous JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Asynchronous JavaScript allows code to run without blocking the
        execution. It helps perform tasks like API calls, timers, and file
        handling in the background.
      </p>

      {/* Sync vs Async */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          1. Synchronous vs Asynchronous
        </h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// Synchronous
console.log("Start");
console.log("End");

// Asynchronous
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");`}
          </pre>
        </div>
      </div>

      {/* Output */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold mb-2">Output:</p>
        <p>Start</p>
        <p>End</p>
        <p>Async Task (after 2 sec)</p>
      </div>

      {/* Why Async */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Why Async?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Prevents blocking of code</li>
          <li>Improves performance</li>
          <li>Handles API calls efficiently</li>
        </ul>
      </div>

      {/* Ways */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Ways to Handle Async</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Callbacks</li>
          <li>Promises</li>
          <li>Async / Await</li>
        </ul>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>JavaScript is single-threaded</li>
          <li>Uses event loop for async tasks</li>
          <li>Async makes apps faster and responsive</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Learn Promises and Async/Await next — they are used in real-world
          apps.
        </p>
      </div>
    </div>
  );
};

export default AsyncJavaScript;
