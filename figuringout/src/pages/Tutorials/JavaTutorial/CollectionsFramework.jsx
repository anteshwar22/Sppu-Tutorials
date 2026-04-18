import React from "react";

const CollectionsFramework = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Java Collections Framework
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        The Java Collections Framework (JCF) is a set of classes and interfaces
        used to store, manage, and manipulate groups of data efficiently.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        It provides ready-made data structures like lists, sets, and maps,
        making development faster and easier.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of collections like a toolbox 🧰. Each tool (List, Set, Map) is
        used for a specific purpose, just like data structures in Java.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        The Java Collections Framework is a unified architecture for storing and
        manipulating collections of objects.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Basic Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`import java.util.*;

List<Integer> list = new ArrayList<>();
list.add(10);
list.add(20);`}
      </pre>

      {/* 6. Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Types of Collections</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>List</li>
        <li>Set</li>
        <li>Map</li>
        <li>Queue</li>
      </ul>

      {/* List */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        1. List (Ordered Collection)
      </h3>

      <p className="text-gray-700 mb-4">
        Allows duplicate elements and maintains insertion order.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add("A");`}
      </pre>

      {/* Set */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        2. Set (Unique Elements)
      </h3>

      <p className="text-gray-700 mb-4">Does not allow duplicate elements.</p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Set<Integer> set = new HashSet<>();
set.add(10);
set.add(10); // ignored`}
      </pre>

      {/* Map */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        3. Map (Key-Value Pair)
      </h3>

      <p className="text-gray-700 mb-4">Stores data in key-value pairs.</p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Map<Integer, String> map = new HashMap<>();
map.put(1, "Java");
map.put(2, "Python");`}
      </pre>

      {/* Queue */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        4. Queue (FIFO Structure)
      </h3>

      <p className="text-gray-700 mb-4">
        Follows First In First Out principle.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`Queue<Integer> q = new LinkedList<>();
q.add(1);
q.add(2);`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Comparison Table</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Collection</th>
              <th className="p-3 border">Duplicates</th>
              <th className="p-3 border">Order</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">List</td>
              <td className="p-3 border">Yes</td>
              <td className="p-3 border">Maintained</td>
            </tr>
            <tr>
              <td className="p-3 border">Set</td>
              <td className="p-3 border">No</td>
              <td className="p-3 border">Not guaranteed</td>
            </tr>
            <tr>
              <td className="p-3 border">Map</td>
              <td className="p-3 border">Keys unique</td>
              <td className="p-3 border">Not guaranteed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Usage</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Import java.util package</li>
        <li>Choose collection type</li>
        <li>Create object</li>
        <li>Add elements</li>
        <li>Access or iterate data</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Using wrong collection type</li>
        <li>Confusing List and Set</li>
        <li>Not understanding key uniqueness in Map</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is Collections Framework?</b> → Set of classes and interfaces
        </li>
        <li>
          <b>Difference between List and Set?</b> → Duplicates allowed vs not
          allowed
        </li>
        <li>
          <b>What is Map?</b> → Key-value structure
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Used to manage large data</li>
        <li>Provides ready-made structures</li>
        <li>Improves efficiency</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"L S M Q"</b>
        <br />
        List → Set → Map → Queue
      </p>
    </div>
  );
};

export default CollectionsFramework;
