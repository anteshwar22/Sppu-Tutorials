import React from "react";

const ErrorHandling = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Error Handling in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Error handling is used to catch and manage runtime errors so that the
        program does not crash. JavaScript provides try...catch for handling
        errors.
      </p>

      {/* try-catch */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. try...catch</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`try {
  let x = y; // error (y is not defined)
} catch (err) {
  console.log("Error:", err.message);
}`}
          </pre>
        </div>
      </div>

      {/* finally */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. finally Block</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`try {
  console.log("Try block");
} catch (err) {
  console.log(err);
} finally {
  console.log("Always runs");
}`}
          </pre>
        </div>
      </div>

      {/* throw */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. throw Keyword</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`function checkAge(age) {
  if (age < 18) {
    throw new Error("Not eligible");
  }
  return "Eligible";
}

try {
  console.log(checkAge(16));
} catch (err) {
  console.log(err.message);
}`}
          </pre>
        </div>
      </div>

      {/* Async Error */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Async Error Handling</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`async function fetchData() {
  try {
    let res = await fetch("wrong-url");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}`}
          </pre>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>try → code that may cause error</li>
          <li>catch → handles error</li>
          <li>finally → always runs</li>
          <li>throw → create custom errors</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Always handle errors in API calls and async code to avoid crashes.
        </p>
      </div>
    </div>
  );
};

export default ErrorHandling;
