import React from "react";

const AsyncAwait = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Async / Await in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Async/Await is a modern way to handle asynchronous operations in
        JavaScript. It is built on top of promises and makes code look like
        synchronous code.
      </p>

      {/* Async Function */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. async Function</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`async function greet() {
  return "Hello";
}

greet().then(console.log);`}
          </pre>
        </div>
      </div>

      {/* Await */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. await Keyword</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function getData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function fetchData() {
  let result = await getData();
  console.log(result);
}

fetchData();`}
          </pre>
        </div>
      </div>

      {/* Error Handling */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Error Handling</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`async function example() {
  try {
    let res = await Promise.reject("Error occurred");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

example();`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>async makes a function return a promise</li>
          <li>await pauses execution until promise resolves</li>
          <li>Makes code cleaner than .then()</li>
        </ul>
      </div>

      {/* Comparison */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Why Async/Await?</p>
        <p className="text-gray-700">
          It removes promise chaining and makes async code easier to read and
          maintain.
        </p>
      </div>
    </div>
  );
};

export default AsyncAwait;
