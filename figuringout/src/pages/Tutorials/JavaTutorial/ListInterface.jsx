import React from "react";

const ListInterface = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">List Interface in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        The <b>List Interface</b> is a part of the Java Collections Framework.
        It is used to store ordered collections of elements where duplicates are
        allowed.
      </p>

      <p className="text-gray-700 mb-4">
        It provides methods to add, remove, access, and iterate elements.
      </p>

      {/* Real Life */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-4">
        Think of a List like a playlist — songs are stored in order, and you can
        repeat songs (duplicates allowed).
      </p>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>

      <p className="text-gray-700 mb-4">
        List is an interface that extends Collection and allows ordered, indexed
        elements with duplicates.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`import java.util.*;

List<Integer> list = new ArrayList<>();`}
      </pre>

      {/* Implementations */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Common Implementations
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Class</th>
              <th className="p-3 border">Feature</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">ArrayList</td>
              <td className="p-3 border">Fast access, dynamic array</td>
            </tr>

            <tr>
              <td className="p-3 border">LinkedList</td>
              <td className="p-3 border">Fast insertion/deletion</td>
            </tr>

            <tr>
              <td className="p-3 border">Vector</td>
              <td className="p-3 border">Thread-safe (slow)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basic Example */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Basic Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import java.util.*;

public class Main {
  public static void main(String[] args) {

    List<String> list = new ArrayList<>();

    list.add("Java");
    list.add("Python");
    list.add("Java"); // duplicate allowed

    System.out.println(list);

  }
}`}
      </pre>

      {/* Methods */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Important Methods</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>add()</b> → Add element
        </li>
        <li>
          <b>get()</b> → Access element
        </li>
        <li>
          <b>remove()</b> → Delete element
        </li>
        <li>
          <b>size()</b> → Get size
        </li>
        <li>
          <b>contains()</b> → Check element
        </li>
      </ul>

      {/* Iteration */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Iterating List</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`for(String s : list) {
  System.out.println(s);
}`}
      </pre>

      {/* Comparison */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        ArrayList vs LinkedList
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">ArrayList</th>
              <th className="p-3 border">LinkedList</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Access</td>
              <td className="p-3 border">Fast</td>
              <td className="p-3 border">Slow</td>
            </tr>

            <tr>
              <td className="p-3 border">Insertion</td>
              <td className="p-3 border">Slow</td>
              <td className="p-3 border">Fast</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Using wrong implementation (ArrayList vs LinkedList)</li>
        <li>Not using generics</li>
        <li>Ignoring performance differences</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What is List?</b> → Ordered collection
        </li>
        <li>
          <b>Allows duplicates?</b> → Yes
        </li>
        <li>
          <b>ArrayList vs LinkedList?</b> → Access vs insertion
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Maintains insertion order</li>
        <li>Allows duplicates</li>
        <li>Supports indexing</li>
        <li>Part of Collections Framework</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`List = Ordered + Duplicate + Indexed`}
      </pre>
    </div>
  );
};

export default ListInterface;
