import React from "react";

const VariablesDataTypes = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Variables and Data Types in Java
      </h1>

      <p className="text-gray-700 mb-4">
        In Java, variables are used to store data, and data types define the
        type of data a variable can hold.
      </p>

      {/* Variables */}

      <h2 className="text-xl font-semibold mt-6 mb-2">What is a Variable?</h2>

      <p className="text-gray-700 mb-4">
        A variable is a container that stores a value. Each variable must have a
        specific data type.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`int age = 20;
String name = "Anteshwar";`}
      </pre>

      {/* Types of Variables */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Types of Variables</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>Local Variable</b> – declared inside a method
        </li>
        <li>
          <b>Instance Variable</b> – declared inside a class but outside methods
        </li>
        <li>
          <b>Static Variable</b> – declared using the static keyword
        </li>
      </ul>

      {/* Data Types */}

      <h2 className="text-xl font-semibold mt-6 mb-2">What are Data Types?</h2>

      <p className="text-gray-700 mb-4">
        Data types define what kind of data a variable can store.
      </p>

      {/* Primitive Data Types */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Primitive Data Types</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Size</th>
              <th className="p-3 border">Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">int</td>
              <td className="p-3 border">4 bytes</td>
              <td className="p-3 border">int x = 10;</td>
            </tr>

            <tr>
              <td className="p-3 border">float</td>
              <td className="p-3 border">4 bytes</td>
              <td className="p-3 border">float y = 10.5f;</td>
            </tr>

            <tr>
              <td className="p-3 border">double</td>
              <td className="p-3 border">8 bytes</td>
              <td className="p-3 border">double z = 20.5;</td>
            </tr>

            <tr>
              <td className="p-3 border">char</td>
              <td className="p-3 border">2 bytes</td>
              <td className="p-3 border">char c = 'A';</td>
            </tr>

            <tr>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">1 bit</td>
              <td className="p-3 border">boolean b = true;</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Non-Primitive */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Non-Primitive Data Types
      </h2>

      <p className="text-gray-700 mb-4">
        These are reference types used to store complex data.
      </p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>String</li>
        <li>Array</li>
        <li>Class</li>
        <li>Object</li>
      </ul>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`String name = "Java";
int[] arr = {1, 2, 3};`}
      </pre>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Variables store data values</li>
        <li>Data types define the type of data</li>
        <li>Java has primitive and non-primitive types</li>
        <li>Each variable must have a data type</li>
      </ul>
    </div>
  );
};

export default VariablesDataTypes;
