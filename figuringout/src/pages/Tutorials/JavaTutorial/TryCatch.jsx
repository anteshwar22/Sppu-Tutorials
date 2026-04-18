import React from "react";

const TryCatch = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Try-Catch in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Try-Catch is used in Java to handle runtime errors (exceptions). It
        allows the program to continue execution instead of crashing.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        It is a part of Java's exception handling mechanism.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of try-catch like a safety net 🪂. If something goes wrong, the
        catch block handles it and prevents failure.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Try-Catch is a mechanism used to handle exceptions by wrapping risky
        code inside a try block and handling errors in a catch block.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`try {
    // risky code
} catch(Exception e) {
    // handle exception
}`}
      </pre>

      {/* 6. Key Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Concepts</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>try block contains risky code</li>
        <li>catch block handles exception</li>
        <li>Prevents program crash</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Basic Try-Catch</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`try {
    int a = 10 / 0;
} catch(Exception e) {
    System.out.println("Error occurred");
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Specific Exception</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`try {
    int[] arr = new int[2];
    arr[5] = 10;
} catch(ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of range");
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Multiple Catch Blocks</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`try {
    int a = 10 / 0;
} catch(ArithmeticException e) {
    System.out.println("Divide by zero");
} catch(Exception e) {
    System.out.println("General error");
}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Try vs Catch</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Block</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">try</td>
              <td className="p-3 border">Contains risky code</td>
            </tr>
            <tr>
              <td className="p-3 border">catch</td>
              <td className="p-3 border">Handles exception</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Flow</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Write risky code inside try block</li>
        <li>If error occurs → control goes to catch</li>
        <li>Catch block handles error</li>
        <li>Program continues execution</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Using only generic Exception always</li>
        <li>Ignoring exceptions</li>
        <li>Wrong order of catch blocks</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is try-catch?</b> → Exception handling mechanism
        </li>
        <li>
          <b>Can we have multiple catch?</b> → Yes
        </li>
        <li>
          <b>What happens if no catch?</b> → Program crashes
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Handles runtime errors</li>
        <li>Prevents crash</li>
        <li>Improves program stability</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Try → Risk, Catch → Handle"</b>
      </p>
    </div>
  );
};

export default TryCatch;
