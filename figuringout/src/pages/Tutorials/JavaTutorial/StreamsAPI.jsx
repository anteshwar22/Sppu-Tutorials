import React from "react";

const StreamsAPI = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Streams API in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        The Streams API in Java is used to process collections of data in a
        functional and efficient way. It allows operations like filtering,
        mapping, and sorting with less code.
      </p>

      <p className="text-gray-700 mb-4">
        It was introduced in Java 8 and is widely used in modern applications.
      </p>

      {/* Real Life */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-4">
        Think of a water stream — data flows through multiple filters,
        transformations, and finally produces output.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Data → Filter → Process → Output`}
      </pre>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>

      <p className="text-gray-700 mb-4">
        Stream is a sequence of elements that supports functional-style
        operations to process data.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`list.stream()
    .operation()
    .operation()
    .terminal();`}
      </pre>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Basic Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`import java.util.*;

List<Integer> list = Arrays.asList(1,2,3,4,5);

list.stream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);`}
      </pre>

      {/* Operations */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Types of Stream Operations
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Example</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Intermediate</td>
              <td className="p-3 border">filter(), map()</td>
            </tr>

            <tr>
              <td className="p-3 border">Terminal</td>
              <td className="p-3 border">forEach(), collect()</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Map Example */}

      <h2 className="text-xl font-semibold mt-8 mb-2">map() Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`list.stream()
    .map(n -> n * 2)
    .forEach(System.out::println);`}
      </pre>

      {/* Sorted */}

      <h2 className="text-xl font-semibold mt-8 mb-2">sorted() Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`list.stream()
    .sorted()
    .forEach(System.out::println);`}
      </pre>

      {/* Collect */}

      <h2 className="text-xl font-semibold mt-8 mb-2">collect() Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`List<Integer> result = list.stream()
    .filter(n -> n > 2)
    .collect(Collectors.toList());`}
      </pre>

      {/* Advantages */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Advantages</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Less code</li>
        <li>Better readability</li>
        <li>Supports parallel processing</li>
        <li>Functional programming style</li>
      </ul>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Using streams for simple loops unnecessarily</li>
        <li>Not understanding lazy evaluation</li>
        <li>Confusing intermediate and terminal operations</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What is Stream API?</b> → Process data functionally
        </li>
        <li>
          <b>Difference between map & filter?</b> → transform vs condition
        </li>
        <li>
          <b>What is terminal operation?</b> → Ends stream
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Introduced in Java 8</li>
        <li>Processes collections efficiently</li>
        <li>Uses lambda expressions</li>
        <li>Supports chaining</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Stream = Filter → Map → Collect`}
      </pre>
    </div>
  );
};

export default StreamsAPI;
