import React from "react";

const StringBuilderBuffer = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        StringBuilder and StringBuffer in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        StringBuilder and StringBuffer are classes in Java used to create
        mutable (changeable) strings. Unlike String, they allow modification
        without creating new objects.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        They are mainly used to improve performance when working with multiple
        string operations.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a whiteboard 🧾. You can erase and rewrite on it easily.
        StringBuilder and StringBuffer work like that, while String is like
        permanent ink.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        StringBuilder and StringBuffer are classes that represent mutable
        sequences of characters.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");

StringBuffer sbf = new StringBuffer("Java");
sbf.append(" Programming");`}
      </pre>

      {/* 6. Key Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Differences</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Both are mutable</li>
        <li>StringBuilder is faster</li>
        <li>StringBuffer is thread-safe (synchronized)</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Using StringBuilder</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
System.out.println(sb);`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Using StringBuffer</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`StringBuffer sbf = new StringBuffer("Java");
sbf.append(" Rocks");
System.out.println(sbf);`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Common Methods</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`sb.append("!");
sb.insert(0, "Hi ");
sb.replace(0, 2, "Hello");
sb.delete(0, 2);`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        String vs StringBuilder vs StringBuffer
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">String</th>
              <th className="p-3 border">StringBuilder</th>
              <th className="p-3 border">StringBuffer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Mutable</td>
              <td className="p-3 border">No</td>
              <td className="p-3 border">Yes</td>
              <td className="p-3 border">Yes</td>
            </tr>
            <tr>
              <td className="p-3 border">Thread-safe</td>
              <td className="p-3 border">Yes</td>
              <td className="p-3 border">No</td>
              <td className="p-3 border">Yes</td>
            </tr>
            <tr>
              <td className="p-3 border">Performance</td>
              <td className="p-3 border">Slow</td>
              <td className="p-3 border">Fast</td>
              <td className="p-3 border">Moderate</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Usage</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Create StringBuilder or StringBuffer object</li>
        <li>Use methods like append(), insert()</li>
        <li>Modify string efficiently</li>
        <li>Convert to String if needed</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Using String for heavy modifications</li>
        <li>Confusing StringBuilder with StringBuffer</li>
        <li>Ignoring thread safety requirements</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>Difference between StringBuilder and StringBuffer?</b> → Thread
          safety
        </li>
        <li>
          <b>Which is faster?</b> → StringBuilder
        </li>
        <li>
          <b>Why use them?</b> → Efficient string modification
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Mutable strings</li>
        <li>Better performance than String</li>
        <li>StringBuilder is faster</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Builder = Fast, Buffer = Safe"</b>
      </p>
    </div>
  );
};

export default StringBuilderBuffer;
