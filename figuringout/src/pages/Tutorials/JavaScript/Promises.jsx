import React from "react";

const Promises = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Promises in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        A Promise is an object that represents the eventual completion or
        failure of an asynchronous operation.
      </p>

      {/* States */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Promise States</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <b>Pending</b> → initial state
          </li>
          <li>
            <b>Fulfilled</b> → operation successful
          </li>
          <li>
            <b>Rejected</b> → operation failed
          </li>
        </ul>
      </div>

      {/* Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Creating a Promise</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error));`}
          </pre>
        </div>
      </div>

      {/* Chaining */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Promise Chaining</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`Promise.resolve(2)
  .then(num => num * 2)
  .then(num => num * 3)
  .then(result => console.log(result)); // 12`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Promises avoid callback hell</li>
          <li>Use .then() for success</li>
          <li>Use .catch() for errors</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Async/Await is built on top of promises — learn it next!
        </p>
      </div>
    </div>
  );
};

export default Promises;
