import React from "react";

const MapInterface = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Map Interface in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        The Map interface in Java is used to store data in key-value pairs. It
        is part of the Java Collections Framework and is very useful when you
        need to associate one value with another.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Unlike lists, Map does not allow duplicate keys, but values can be
        duplicated.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a dictionary 📖. Each word (key) has a meaning (value). You use
        the word to find its meaning. Similarly, Map stores data as key-value
        pairs.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Map is an interface in Java that stores elements in key-value pairs,
        where each key is unique.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`import java.util.*;

Map<Integer, String> map = new HashMap<>();

map.put(1, "Java");
map.put(2, "Python");`}
      </pre>

      {/* 6. Key Features */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Features of Map</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Stores data in key-value pairs</li>
        <li>No duplicate keys allowed</li>
        <li>Values can be duplicated</li>
        <li>Access data using keys</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Basic Map</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Map<Integer, String> map = new HashMap<>();

map.put(1, "Java");
map.put(2, "Python");

System.out.println(map.get(1)); // Java`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Iterating Map</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`for(Map.Entry<Integer, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Checking Key</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`if(map.containsKey(1)) {
    System.out.println("Key exists");
}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Common Map Implementations
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Class</th>
              <th className="p-3 border">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">HashMap</td>
              <td className="p-3 border">Fast, no order</td>
            </tr>
            <tr>
              <td className="p-3 border">LinkedHashMap</td>
              <td className="p-3 border">Maintains insertion order</td>
            </tr>
            <tr>
              <td className="p-3 border">TreeMap</td>
              <td className="p-3 border">Sorted keys</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Usage</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Import java.util package</li>
        <li>Create Map object</li>
        <li>Use put() to add data</li>
        <li>Use get() to retrieve value</li>
        <li>Iterate using entrySet()</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Trying to add duplicate keys</li>
        <li>Confusing key and value</li>
        <li>Not checking null values</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is Map?</b> → Key-value structure
        </li>
        <li>
          <b>Can Map have duplicate keys?</b> → No
        </li>
        <li>
          <b>Difference between HashMap and TreeMap?</b> → Order vs sorting
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Stores data as key-value pairs</li>
        <li>Keys are unique</li>
        <li>Used for fast lookup</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Map = Key → Value"</b>
      </p>
    </div>
  );
};

export default MapInterface;
