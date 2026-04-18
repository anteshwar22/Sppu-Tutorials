import React from "react";

const ListsAndKeys = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Lists and Keys in React</h1>

      <p className="text-gray-700 mb-4">
        In React, you can render multiple elements using JavaScript arrays. The
        most common way is by using the <b>map()</b> function.
      </p>

      <p className="text-gray-700 mb-4">
        When rendering lists, React requires a <b>key</b> for each element. Keys
        help React identify which items have changed, been added, or removed.
      </p>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Example of Rendering a List
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function FruitList() {

  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`}
      </pre>

      {/* Why Keys */}

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Why Keys are Important
      </h2>

      <p className="text-gray-700 mb-4">
        Keys help React efficiently update the UI by identifying which list
        items have changed.
      </p>

      {/* Keys Table */}

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Key Type</th>
              <th className="p-3 border">Recommendation</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Unique ID</td>
              <td className="p-3 border">Best option when available</td>
            </tr>

            <tr>
              <td className="p-3 border">Index</td>
              <td className="p-3 border">
                Use only if items do not change order
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Example with Objects */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Example with Objects</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`function StudentList() {

  const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Anita" },
    { id: 3, name: "Vikram" }
  ];

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>
          {student.name}
        </li>
      ))}
    </ul>
  );
}`}
      </pre>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Lists allow rendering multiple elements dynamically.</li>
        <li>The map() function is commonly used for lists.</li>
        <li>Each list item must have a unique key.</li>
        <li>Keys help React efficiently update the DOM.</li>
      </ul>
    </div>
  );
};

export default ListsAndKeys;
