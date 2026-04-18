import React from "react";

const ArrayMethods = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Array Methods (map, filter, reduce)
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        JavaScript provides powerful array methods like <b>map</b>,{" "}
        <b>filter</b>, and <b>reduce</b> to manipulate data efficiently without
        using loops.
      </p>

      {/* map */}
      <div>
        <h2 className="text-xl font-semibold mb-2">1. map()</h2>
        <p className="text-gray-700 mb-2">
          Creates a new array by applying a function to each element.
        </p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let arr = [1, 2, 3];

let result = arr.map(num => num * 2);

console.log(result); // [2, 4, 6]`}
          </pre>
        </div>
      </div>

      {/* filter */}
      <div>
        <h2 className="text-xl font-semibold mb-2">2. filter()</h2>
        <p className="text-gray-700 mb-2">
          Returns a new array with elements that satisfy a condition.
        </p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let arr = [1, 2, 3, 4];

let result = arr.filter(num => num > 2);

console.log(result); // [3, 4]`}
          </pre>
        </div>
      </div>

      {/* reduce */}
      <div>
        <h2 className="text-xl font-semibold mb-2">3. reduce()</h2>
        <p className="text-gray-700 mb-2">
          Reduces the array to a single value using an accumulator.
        </p>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
          <pre>
            {`let arr = [1, 2, 3, 4];

let sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10`}
          </pre>
        </div>
      </div>

      {/* Comparison */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Difference</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <b>map()</b> → transforms every element
          </li>
          <li>
            <b>filter()</b> → selects elements
          </li>
          <li>
            <b>reduce()</b> → returns single value
          </li>
        </ul>
      </div>

      {/* Tip */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="font-semibold">Pro Tip:</p>
        <p className="text-gray-700">
          These methods make your code cleaner and are heavily used in React.
        </p>
      </div>
    </div>
  );
};

export default ArrayMethods;
