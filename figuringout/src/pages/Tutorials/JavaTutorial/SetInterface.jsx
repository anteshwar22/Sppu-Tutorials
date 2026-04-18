import React from "react";

const SetInterface = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Set Interface in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        The Set interface in Java is used to store a collection of unique
        elements. It is part of the Java Collections Framework and does not
        allow duplicate values.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Sets are useful when you need to store data without repetition.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a set like a group of unique students in a class 🎓. Even if
        someone tries to enter twice, only one entry is allowed.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Set is an interface that stores unique elements and does not allow
        duplicates.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`import java.util.*;

Set<Integer> set = new HashSet<>();

set.add(10);
set.add(20);
set.add(10); // duplicate, ignored`}
      </pre>

      {/* 6. Key Features */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Features of Set</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>No duplicate elements allowed</li>
        <li>Stores unique values only</li>
        <li>Does not guarantee order (in HashSet)</li>
        <li>Fast lookup operations</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Basic Set</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Set<String> set = new HashSet<>();

set.add("Java");
set.add("Python");
set.add("Java"); // ignored

System.out.println(set);`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Iterating Set</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`for(String s : set) {
    System.out.println(s);
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Checking Element</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`if(set.contains("Java")) {
    System.out.println("Found");
}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Common Set Implementations
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
              <td className="p-3 border">HashSet</td>
              <td className="p-3 border">Fast, no order</td>
            </tr>
            <tr>
              <td className="p-3 border">LinkedHashSet</td>
              <td className="p-3 border">Maintains insertion order</td>
            </tr>
            <tr>
              <td className="p-3 border">TreeSet</td>
              <td className="p-3 border">Sorted elements</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Usage</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Import java.util package</li>
        <li>Create Set object</li>
        <li>Add elements using add()</li>
        <li>Check using contains()</li>
        <li>Iterate using loop</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Expecting duplicates to be stored</li>
        <li>Assuming order is maintained in HashSet</li>
        <li>Not understanding difference between Set types</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is Set?</b> → Collection of unique elements
        </li>
        <li>
          <b>Does Set allow duplicates?</b> → No
        </li>
        <li>
          <b>Difference between HashSet and TreeSet?</b> → Order vs sorting
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Stores unique elements</li>
        <li>No duplicates allowed</li>
        <li>Used for filtering unique data</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Set = No Duplicates"</b>
      </p>
    </div>
  );
};

export default SetInterface;
