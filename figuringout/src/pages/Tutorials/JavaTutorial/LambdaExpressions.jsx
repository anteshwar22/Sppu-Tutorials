import React from "react";

const LambdaExpressions = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Lambda Expressions in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Lambda expressions were introduced in Java 8 to write cleaner, shorter,
        and more readable code. They allow you to implement functional
        interfaces without creating separate classes.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Lambda expressions are widely used in Streams API, Collections, and
        modern frameworks.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of lambda as a shortcut ✂️. Instead of writing a full function,
        you directly write what needs to be done.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        A lambda expression is a concise way to represent an anonymous function
        that can be passed as an argument.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`(parameters) -> expression

(parameters) -> {
    // multiple statements
}`}
      </pre>

      {/* 6. Deep Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Key Concepts (Important)
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Works only with functional interfaces</li>
        <li>Removes boilerplate code</li>
        <li>Treats behavior as data</li>
        <li>Used in Streams, Collections, and APIs</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Without Lambda</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Runnable r = new Runnable() {
    public void run() {
        System.out.println("Running...");
    }
};`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: With Lambda</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Runnable r = () -> System.out.println("Running...");`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Lambda with Parameters</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`(int a, int b) -> a + b`}
      </pre>

      <h3 className="font-semibold mb-2">Example 4: Sorting with Lambda</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`List<Integer> list = Arrays.asList(5, 3, 1);

Collections.sort(list, (a, b) -> a - b);`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Lambda vs Traditional Code
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Traditional</th>
              <th className="p-3 border">Lambda</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Code Length</td>
              <td className="p-3 border">Long</td>
              <td className="p-3 border">Short</td>
            </tr>
            <tr>
              <td className="p-3 border">Readability</td>
              <td className="p-3 border">Complex</td>
              <td className="p-3 border">Simple</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step-by-Step Thinking
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Identify functional interface</li>
        <li>Remove class and method boilerplate</li>
        <li>Keep only logic</li>
        <li>Use → operator</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Common Mistakes (IMPORTANT)
      </h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Using lambda without functional interface</li>
        <li>Confusing syntax with normal methods</li>
        <li>Overcomplicating lambda expressions</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is lambda?</b> → Anonymous function
        </li>
        <li>
          <b>Why introduced?</b> → Reduce boilerplate
        </li>
        <li>
          <b>Works with?</b> → Functional interfaces
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Introduced in Java 8</li>
        <li>Short and clean code</li>
        <li>Used with Streams and Collections</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Lambda = Shortcut Function"</b>
      </p>
    </div>
  );
};

export default LambdaExpressions;
