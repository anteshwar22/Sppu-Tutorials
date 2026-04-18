import React from "react";

const Arrays = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Arrays in Java</h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Arrays in Java are used to store multiple values of the same data type
        in a single variable. Instead of creating multiple variables, arrays
        help manage data efficiently.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Arrays are widely used in programming, especially in Data Structures and
        Algorithms (DSA).
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of an array like a row of lockers 🔐. Each locker holds a value,
        and each locker has a number (index) to access it.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        An array is a collection of elements of the same data type stored in
        contiguous memory locations.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`// Declaration
int[] arr;

// Initialization
arr = new int[5];

// Declaration + Initialization
int[] arr2 = {1, 2, 3, 4, 5};`}
      </pre>

      {/* 6. Detailed Explanation */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Concepts</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Array index starts from 0</li>
        <li>Fixed size (cannot change after creation)</li>
        <li>Stores elements of same data type</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Accessing Elements</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`int[] arr = {10, 20, 30};

System.out.println(arr[0]); // 10
System.out.println(arr[1]); // 20`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Loop Through Array</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`int[] arr = {1, 2, 3, 4, 5};

for(int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: For-each Loop</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`int[] arr = {1, 2, 3};

for(int num : arr) {
    System.out.println(num);
}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Array Features</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Indexing</td>
              <td className="p-3 border">Starts from 0</td>
            </tr>
            <tr>
              <td className="p-3 border">Size</td>
              <td className="p-3 border">Fixed</td>
            </tr>
            <tr>
              <td className="p-3 border">Type</td>
              <td className="p-3 border">Same data type</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Process</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Declare array</li>
        <li>Allocate memory</li>
        <li>Insert values</li>
        <li>Access elements using index</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Accessing index out of bounds</li>
        <li>Confusing length with size</li>
        <li>Not initializing array</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is an array?</b> → Collection of same type elements
        </li>
        <li>
          <b>Index starts from?</b> → 0
        </li>
        <li>
          <b>Can array size change?</b> → No
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Stores multiple values</li>
        <li>Fixed size</li>
        <li>Fast access using index</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Array = Same Type + Fixed Size"</b>
      </p>
    </div>
  );
};

export default Arrays;
