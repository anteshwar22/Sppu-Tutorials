import React from "react";

const TypeCasting = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Type Casting in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Type casting in Java is used to convert one data type into another. It
        is an important concept because different operations may require
        different data types, and conversion helps maintain compatibility.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Without type casting, many calculations and assignments would not work
        properly.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Imagine you have a large bottle of water (double) and you want to pour
        it into a small glass (int). Some water may spill (data loss). This is
        similar to type casting in programming.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Type casting is the process of converting a variable from one data type
        to another in Java.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`// Implicit Casting
double b = a;

// Explicit Casting
int b = (int) a;`}
      </pre>

      {/* 6. Detailed Explanation */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Types of Type Casting
      </h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        1. Implicit Casting (Widening)
      </h3>

      <p className="text-gray-700 mb-4">
        Automatic conversion of smaller data types into larger data types. It is
        safe and no data is lost.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        2. Explicit Casting (Narrowing)
      </h3>

      <p className="text-gray-700 mb-6">
        Manual conversion of larger data types into smaller ones. It may lead to
        data loss.
      </p>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Implicit Casting</h3>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`int a = 10;
double b = a;

System.out.println(b); // 10.0`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Explicit Casting</h3>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`double a = 10.75;
int b = (int) a;

System.out.println(b); // 10`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Character Casting</h3>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`char ch = 'A';
int ascii = ch;

System.out.println(ascii); // 65`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Comparison Table</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Implicit</th>
              <th className="p-3 border">Explicit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Conversion</td>
              <td className="p-3 border">Automatic</td>
              <td className="p-3 border">Manual</td>
            </tr>
            <tr>
              <td className="p-3 border">Data Loss</td>
              <td className="p-3 border">No</td>
              <td className="p-3 border">Yes</td>
            </tr>
            <tr>
              <td className="p-3 border">Safety</td>
              <td className="p-3 border">Safe</td>
              <td className="p-3 border">Risky</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step-by-Step Process (Explicit Casting)
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Identify the larger data type</li>
        <li>Use casting operator (targetType)</li>
        <li>Assign the value to a smaller type variable</li>
        <li>Be careful about data loss</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Forgetting to cast explicitly</li>
        <li>Ignoring data loss</li>
        <li>Using wrong data types</li>
      </ul>

      {/* 12. Interview Questions */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is type casting?</b> → Conversion of one data type to another
        </li>
        <li>
          <b>Types of casting?</b> → Implicit and Explicit
        </li>
        <li>
          <b>Which is safe?</b> → Implicit casting
        </li>
        <li>
          <b>Why explicit casting is risky?</b> → Data loss may occur
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Type casting converts data types</li>
        <li>Implicit is automatic and safe</li>
        <li>Explicit is manual and risky</li>
        <li>Used in calculations and assignments</li>
      </ul>

      {/* 14. Memory Tricks */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Big to Small = Risky (Explicit)"</b>
        <br />
        👉 <b>"Small to Big = Safe (Implicit)"</b>
      </p>
    </div>
  );
};

export default TypeCasting;
