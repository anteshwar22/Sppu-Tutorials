import React from "react";

const DataTypes = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-blue-600">
        Data Types in JavaScript
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        Data types define the type of value a variable can hold in JavaScript.
        JavaScript is a <b>dynamically typed</b> language, meaning you don’t
        need to specify the type of a variable explicitly.
      </p>

      {/* Types */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Types of Data</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <b>Primitive Types:</b> String, Number, Boolean, Null, Undefined,
            Symbol, BigInt
          </li>
          <li>
            <b>Non-Primitive Types:</b> Object, Array, Function
          </li>
        </ul>
      </div>

      {/* Primitive Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Primitive Data Types</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre>
            {`let name = "Anteshwar";   // String
let age = 20;              // Number
let isStudent = true;      // Boolean
let x = null;              // Null
let y;                     // Undefined`}
          </pre>
        </div>
      </div>

      {/* Non Primitive Example */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Non-Primitive Data Types</h2>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre>
            {`// Object
let person = {
  name: "Anteshwar",
  age: 20
};

// Array
let arr = [1, 2, 3];

// Function
function greet() {
  console.log("Hello!");
}`}
          </pre>
        </div>
      </div>

      {/* Key Notes */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Key Points</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Primitive types are immutable (cannot change)</li>
          <li>Objects and arrays are mutable</li>
          <li>
            <b>typeof</b> operator is used to check data type
          </li>
        </ul>
      </div>

      {/* typeof Example */}
      <div className="bg-gray-900 text-green-400 p-4 rounded-lg">
        <pre>
          {`console.log(typeof "Hello");  // string
console.log(typeof 10);       // number
console.log(typeof true);     // boolean`}
        </pre>
      </div>
    </div>
  );
};

export default DataTypes;
