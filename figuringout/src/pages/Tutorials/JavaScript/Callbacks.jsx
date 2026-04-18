import React from "react";

const Callbacks = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Callbacks in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        A callback is a function that is passed as an argument to another
        function and is executed later. It helps in handling asynchronous
        operations like API calls, timers, and events.
      </p>

      {/* Basic Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Basic Callback</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Anteshwar", sayBye);`}
          </pre>
        </div>
      </div>

      {/* Async Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Asynchronous Callback</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`console.log("Start");

setTimeout(() => {
  console.log("This runs later");
}, 2000);

console.log("End");`}
          </pre>
        </div>
      </div>

      {/* Callback Hell */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Callback Hell</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`// Nested callbacks
task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks done");
    });
  });
});`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Callbacks are used for async operations</li>
          <li>Too many nested callbacks → callback hell</li>
          <li>Promises & Async/Await solve this problem</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Use callbacks for simple tasks, but prefer Promises or Async/Await for
          complex async code.
        </p>
      </div>
    </div>
  );
};

export default Callbacks;
