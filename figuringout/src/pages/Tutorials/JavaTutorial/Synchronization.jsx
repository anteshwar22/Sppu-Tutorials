import React from "react";

const Synchronization = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Synchronization in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Synchronization in Java is used to control access to shared resources in
        a multithreaded environment. It ensures that only one thread can access
        a resource at a time.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        It helps prevent data inconsistency and issues like race conditions.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a bathroom 🚻 with a lock. Only one person can use it at a
        time. Synchronization works the same way for shared resources.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Synchronization is a technique used to control multiple threads
        accessing shared data to avoid conflicts.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`synchronized void method() {
    // critical section
}`}
      </pre>

      {/* 6. Key Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Concepts</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Used in multithreading</li>
        <li>Prevents race conditions</li>
        <li>Only one thread executes synchronized block at a time</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Without Synchronization</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class Counter {
    int count = 0;

    void increment() {
        count++;
    }
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: With Synchronization</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Counter {
    int count = 0;

    synchronized void increment() {
        count++;
    }
}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Types of Synchronization
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
              <td className="p-3 border">Method Synchronization</td>
              <td className="p-3 border">Locks entire method</td>
            </tr>
            <tr>
              <td className="p-3 border">Block Synchronization</td>
              <td className="p-3 border">Locks specific block</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Block Example */}
      <h3 className="font-semibold mb-2">Example: Synchronized Block</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`void increment() {
    synchronized(this) {
        count++;
    }
}`}
      </pre>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step-by-Step Understanding
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Multiple threads access shared resource</li>
        <li>Without sync → data inconsistency</li>
        <li>Apply synchronized keyword</li>
        <li>Only one thread executes at a time</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Overusing synchronization (reduces performance)</li>
        <li>Not synchronizing critical sections</li>
        <li>Ignoring thread safety</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is synchronization?</b> → Controlling thread access
        </li>
        <li>
          <b>Why needed?</b> → Avoid race conditions
        </li>
        <li>
          <b>Keyword used?</b> → synchronized
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Ensures thread safety</li>
        <li>Prevents data inconsistency</li>
        <li>Used in multithreading</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"One Thread at a Time"</b>
      </p>
    </div>
  );
};

export default Synchronization;
