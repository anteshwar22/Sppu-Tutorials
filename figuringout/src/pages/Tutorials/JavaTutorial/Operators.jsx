import React from "react";

const Operators = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Operators in Java
      </h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        Operators in Java are special symbols used to perform operations on
        variables and values.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Types of Operators in Java
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Arithmetic Operators</li>
        <li>Relational Operators</li>
        <li>Logical Operators</li>
        <li>Assignment Operators</li>
        <li>Unary Operators</li>
      </ul>

      {/* Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Operator Summary Table
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Operators</th>
              <th className="p-3 border">Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Arithmetic</td>
              <td className="p-3 border">+, -, *, /, %</td>
              <td className="p-3 border">Math operations</td>
            </tr>
            <tr>
              <td className="p-3 border">Relational</td>
              <td className="p-3 border">{">, <, ==, !=, >=, <="}</td>
              <td className="p-3 border">Comparison</td>
            </tr>
            <tr>
              <td className="p-3 border">Logical</td>
              <td className="p-3 border">&&, ||, !</td>
              <td className="p-3 border">Conditions</td>
            </tr>
            <tr>
              <td className="p-3 border">Assignment</td>
              <td className="p-3 border">=, +=, -=, *=, /=</td>
              <td className="p-3 border">Assign values</td>
            </tr>
            <tr>
              <td className="p-3 border">Unary</td>
              <td className="p-3 border">++, --</td>
              <td className="p-3 border">Increment/Decrement</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Operators;
