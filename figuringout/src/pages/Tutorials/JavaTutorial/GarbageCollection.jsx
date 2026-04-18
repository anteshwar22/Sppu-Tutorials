import React from "react";

const GarbageCollection = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Garbage Collection in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Garbage Collection (GC) in Java is the process of automatically removing
        unused objects from memory to free up space.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        It helps in efficient memory management and prevents memory leaks,
        making Java a powerful and safe programming language.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of garbage collection like cleaning your room 🧹. Unused items
        (objects) are removed to make space for new ones.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Garbage Collection is a mechanism in Java that automatically destroys
        unused objects to reclaim memory.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Basic Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`System.gc(); // Request JVM to run garbage collector`}
      </pre>

      {/* 6. How it Works */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        How Garbage Collection Works
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Objects are created in heap memory</li>
        <li>Unused objects become eligible for GC</li>
        <li>Garbage Collector removes them automatically</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Null Reference</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Object obj = new Object();
obj = null; // eligible for GC`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Reassigning Object</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Object obj1 = new Object();
obj1 = new Object(); // old object eligible for GC`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Anonymous Object</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`new Object(); // eligible immediately`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Concepts</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Concept</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Heap Memory</td>
              <td className="p-3 border">Stores objects</td>
            </tr>
            <tr>
              <td className="p-3 border">GC</td>
              <td className="p-3 border">Removes unused objects</td>
            </tr>
            <tr>
              <td className="p-3 border">Eligible Object</td>
              <td className="p-3 border">No reference pointing</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Flow</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Create objects in heap</li>
        <li>Remove references</li>
        <li>Object becomes eligible</li>
        <li>GC removes object</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Thinking System.gc() guarantees execution</li>
        <li>Manually trying to delete objects</li>
        <li>Confusing GC with memory leak handling</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is GC?</b> → Automatic memory cleanup
        </li>
        <li>
          <b>When is object eligible?</b> → No reference
        </li>
        <li>
          <b>Does System.gc() force GC?</b> → No
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Automatic memory management</li>
        <li>Works on heap memory</li>
        <li>Improves performance</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"No Reference = Garbage"</b>
      </p>
    </div>
  );
};

export default GarbageCollection;
