import React from "react";

const Arrays = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">Arrays in JavaScript</h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Arrays are used to store multiple values in a single variable. They are
        ordered collections and can hold different types of data.
      </p>

      {/* Create Array */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. Creating an Array</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let arr = [1, 2, 3, 4];
let names = ["Amit", "Rahul", "Priya"];`}
          </pre>
        </div>
      </div>

      {/* Access */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. Accessing Elements</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`console.log(arr[0]); // 1
console.log(arr[2]); // 3`}
          </pre>
        </div>
      </div>

      {/* Methods */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. Common Array Methods</h2>

        <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-3">
          <pre>
            {`arr.push(5);   // add at end
arr.pop();      // remove last
arr.shift();    // remove first
arr.unshift(0); // add at start`}
          </pre>
        </div>
      </div>

      {/* Loop */}
      <div>
        <h2 className="text-xl font-semibold mb-2">4. Looping through Array</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let arr = [1, 2, 3];

arr.forEach((num) => {
  console.log(num);
});`}
          </pre>
        </div>
      </div>

      {/* Advanced Methods */}
      <div>
        <h2 className="text-xl font-semibold mb-2">5. Advanced Methods</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let arr = [1, 2, 3, 4];

let doubled = arr.map(n => n * 2);
let filtered = arr.filter(n => n > 2);

console.log(doubled);  // [2, 4, 6, 8]
console.log(filtered); // [3, 4]`}
          </pre>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Arrays are zero-indexed</li>
          <li>Can store mixed data types</li>
          <li>Very useful for loops and data handling</li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          Use <b>map</b>, <b>filter</b>, and <b>reduce</b> instead of loops for
          cleaner code.
        </p>
      </div>
    </div>
  );
};

export default Arrays;
