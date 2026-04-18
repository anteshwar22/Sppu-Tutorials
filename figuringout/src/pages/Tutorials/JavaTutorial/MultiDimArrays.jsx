import React from "react";

const MultiDimArrays = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Multidimensional Arrays in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Multidimensional arrays in Java are arrays of arrays. They are used to
        store data in tabular form like rows and columns.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        The most common type is the 2D array, which is widely used in matrix
        problems and real-world applications.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a spreadsheet 📊 with rows and columns. Each cell holds a
        value, just like elements in a 2D array.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        A multidimensional array is an array that contains other arrays as its
        elements.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`// Declaration
int[][] arr;

// Initialization
arr = new int[3][3];

// Declaration + Initialization
int[][] arr2 = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};`}
      </pre>

      {/* 6. Key Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Concepts</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>2D array has rows and columns</li>
        <li>Access using arr[row][column]</li>
        <li>Index starts from 0</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Accessing Elements</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`int[][] arr = {
    {1, 2},
    {3, 4}
};

System.out.println(arr[0][1]); // 2`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Traversing 2D Array</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`for(int i = 0; i < arr.length; i++) {
    for(int j = 0; j < arr[i].length; j++) {
        System.out.print(arr[i][j] + " ");
    }
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Jagged Array</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`int[][] arr = new int[3][];
arr[0] = new int[2];
arr[1] = new int[3];
arr[2] = new int[1];`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Types of Multidimensional Arrays
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">2D Array</td>
              <td className="p-3 border">Rows and columns</td>
            </tr>
            <tr>
              <td className="p-3 border">Jagged Array</td>
              <td className="p-3 border">Different column sizes</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Usage</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Declare 2D array</li>
        <li>Initialize with size or values</li>
        <li>Access using row and column index</li>
        <li>Use nested loops to traverse</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Confusing rows and columns</li>
        <li>Index out of bounds</li>
        <li>Not using nested loops properly</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is 2D array?</b> → Array of arrays
        </li>
        <li>
          <b>What is jagged array?</b> → Unequal row sizes
        </li>
        <li>
          <b>How to traverse?</b> → Nested loops
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Stores data in table form</li>
        <li>Access using arr[i][j]</li>
        <li>Used in matrix problems</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"2D Array = Rows + Columns"</b>
      </p>
    </div>
  );
};

export default MultiDimArrays;
