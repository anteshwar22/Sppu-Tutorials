import React from "react";
import CodeBlock from "../../../components/CodeBlock";

const WrapperClasses = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">
        Wrapper Classes in Java
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Wrapper classes in Java are used to convert primitive data types into
        objects. This is important because Java collections and many APIs work
        only with objects, not primitive types.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        For example, you cannot store an <b>int</b> directly in an ArrayList,
        but you can store an <b>Integer</b>.
      </p>

      {/* Section */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        Real-Life Analogy
      </h2>
      <p className="text-gray-600 mb-8">
        Think of a gift 🎁. The actual item is like a primitive value, but when
        you wrap it, it becomes more usable. Wrapper classes add extra
        functionality to simple values.
      </p>

      {/* Definition */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Definition</h2>
      <p className="text-gray-600 mb-8">
        Wrapper classes convert primitive data types into objects so they can be
        used in object-based operations.
      </p>

      {/* Syntax */}
      <h2 className="text-lg sm:text-xl font-semibold ">Syntax</h2>
      <CodeBlock
        code={`int a = 10;
Integer obj = Integer.valueOf(a); // boxing

int b = obj.intValue(); // unboxing`}
      />

      {/* Core Concepts */}
      <h2 className="text-lg sm:text-xl font-semibold mt-10 mb-2">
        Core Concepts
      </h2>

      <p className="text-gray-600 mb-4">There are three important concepts:</p>

      <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-8">
        <li>
          <b>Boxing:</b> Primitive → Object
        </li>
        <li>
          <b>Unboxing:</b> Object → Primitive
        </li>
        <li>
          <b>Autoboxing:</b> Automatic conversion
        </li>
      </ul>

      {/* Examples */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Examples</h2>

      <CodeBlock code={`Integer obj = 10; // autoboxing`} />
      <CodeBlock code={`int a = obj; // unboxing`} />

      {/* Table */}
      <h2 className="text-lg sm:text-xl font-semibold mt-10 mb-2">
        Primitive vs Wrapper
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full border text-sm sm:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left">Primitive</th>
              <th className="p-3 border text-left">Wrapper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">int</td>
              <td className="p-3 border">Integer</td>
            </tr>
            <tr>
              <td className="p-3 border">char</td>
              <td className="p-3 border">Character</td>
            </tr>
            <tr>
              <td className="p-3 border">double</td>
              <td className="p-3 border">Double</td>
            </tr>
            <tr>
              <td className="p-3 border">boolean</td>
              <td className="p-3 border">Boolean</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Why Needed */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        Why Wrapper Classes are Needed
      </h2>

      <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-10">
        <li>Collections require objects</li>
        <li>Provide utility methods</li>
        <li>Support null values</li>
      </ul>

      {/* Methods */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        Important Methods
      </h2>

      <CodeBlock
        code={`Integer.parseInt("123");
Integer.valueOf(10);`}
      />

      {/* Mistake */}
      <div className="mt-10 border-l-4 border-yellow-400 bg-yellow-50 px-4 py-3 mb-8">
        <p className="text-sm text-yellow-800">
          ⚠️ <b>Common Mistake:</b> Unboxing a <b>null</b> value causes
          NullPointerException.
        </p>
      </div>

      {/* Interview */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2">
        Interview Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-10">
        <li>
          <b>What are wrapper classes?</b> → Object form of primitives
        </li>
        <li>
          <b>What is autoboxing?</b> → Automatic conversion
        </li>
        <li>
          <b>Why needed?</b> → Collections require objects
        </li>
      </ul>

      {/* Memory Trick */}
      <div className="border-l-4 border-blue-500 pl-4">
        <p className="text-sm">
          👉 <b>Primitive + Wrapper = Object Power</b>
        </p>
      </div>
    </div>
  );
};

export default WrapperClasses;
