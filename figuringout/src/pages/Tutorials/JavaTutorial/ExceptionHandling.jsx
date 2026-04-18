import React from "react";

const ExceptionHandling = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Exception Handling in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Exception handling in Java is used to handle runtime errors so that the
        program can continue running smoothly without crashing.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        It helps in maintaining normal flow of the application even when
        unexpected situations occur.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Imagine you are driving a car 🚗 and suddenly a problem occurs (like a
        flat tire). Instead of stopping everything, you fix the issue and
        continue your journey. Exception handling works the same way in
        programs.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Exception handling is a mechanism to handle runtime errors using try,
        catch, finally, throw, and throws keywords.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Basic Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`try {
    // risky code
} catch(Exception e) {
    // handle exception
} finally {
    // always executes
}`}
      </pre>

      {/* 6. Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Types of Exceptions</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Checked Exceptions (compile-time)</li>
        <li>Unchecked Exceptions (runtime)</li>
      </ul>

      {/* Checked */}
      <h3 className="text-xl font-semibold mt-4 mb-2">1. Checked Exceptions</h3>

      <p className="text-gray-700 mb-4">
        Checked exceptions are checked at compile time.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`import java.io.*;

FileReader file = new FileReader("file.txt");`}
      </pre>

      {/* Unchecked */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        2. Unchecked Exceptions
      </h3>

      <p className="text-gray-700 mb-4">Occur during runtime.</p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`int a = 10 / 0; // ArithmeticException`}
      </pre>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: try-catch</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`try {
    int a = 10 / 0;
} catch(Exception e) {
    System.out.println("Error occurred");
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: finally block</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`try {
    int a = 5;
} finally {
    System.out.println("Always runs");
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: throw keyword</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`throw new ArithmeticException("Error");`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Keywords in Exception Handling
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Keyword</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">try</td>
              <td className="p-3 border">Defines risky code</td>
            </tr>
            <tr>
              <td className="p-3 border">catch</td>
              <td className="p-3 border">Handles exception</td>
            </tr>
            <tr>
              <td className="p-3 border">finally</td>
              <td className="p-3 border">Always executes</td>
            </tr>
            <tr>
              <td className="p-3 border">throw</td>
              <td className="p-3 border">Throws exception manually</td>
            </tr>
            <tr>
              <td className="p-3 border">throws</td>
              <td className="p-3 border">Declares exception</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Flow</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Write risky code inside try</li>
        <li>Handle exception in catch</li>
        <li>Use finally for cleanup</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Not using try-catch for risky code</li>
        <li>Catching wrong exception type</li>
        <li>Ignoring exceptions</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is exception?</b> → Runtime error
        </li>
        <li>
          <b>Difference between checked and unchecked?</b> → Compile vs runtime
        </li>
        <li>
          <b>Purpose of finally?</b> → Always executes
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Handles runtime errors</li>
        <li>Prevents program crash</li>
        <li>Uses try-catch-finally</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Try → Catch → Finally"</b>
      </p>
    </div>
  );
};

export default ExceptionHandling;
