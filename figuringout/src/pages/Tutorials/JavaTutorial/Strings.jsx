import React from "react";

const Strings = () => {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Strings in Java (Deep Dive)
      </h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        A String in Java is an object that represents a sequence of characters.
        It is one of the most commonly used classes in Java and is immutable.
      </p>

      <p className="text-gray-700 mb-4">
        Understanding Strings deeply is critical for performance, memory optimization,
        and interview success.
      </p>

      {/* Real Analogy */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Real-World Analogy
      </h2>

      <p className="text-gray-700 mb-4">
        Think of a String as a sealed message. Once created, you cannot change it —
        you can only create a new one.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
{`"Hello" → Cannot be modified → New object created`}
      </pre>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Definition
      </h2>

      <p className="text-gray-700 mb-4">
        A String is an immutable sequence of characters stored in the
        String pool inside heap memory.
      </p>

      {/* Creation */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Ways to Create String
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
{`// Method 1 (String Pool)
String s1 = "Java";

// Method 2 (Heap)
String s2 = new String("Java");`}
      </pre>

      {/* String Pool */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        String Pool (Important 🔥)
      </h2>

      <p className="text-gray-700 mb-4">
        String pool is a special memory area where Java stores string literals
        to optimize memory usage.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
{`String a = "Java";
String b = "Java"; // same object (memory optimized)`}
      </pre>

      {/* Immutability */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Immutability
      </h2>

      <p className="text-gray-700 mb-4">
        Strings are immutable — once created, their value cannot be changed.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
{`String s = "Java";
s.concat(" World");

System.out.println(s); // Output: Java`}
      </pre>

      {/* Why Immutable */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Why Strings are Immutable?
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Security (used in networking, file paths)</li>
        <li>Thread safety</li>
        <li>Memory optimization (String pool)</li>
      </ul>

      {/* Important Methods */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Important String Methods
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Method</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">length()</td>
              <td className="p-3 border">Get length</td>
            </tr>
            <tr>
              <td className="p-3 border">toUpperCase()</td>
              <td className="p-3 border">Convert case</td>
            </tr>
            <tr>
              <td className="p-3 border">charAt()</td>
              <td className="p-3 border">Get character</td>
            </tr>
            <tr>
              <td className="p-3 border">equals()</td>
              <td className="p-3 border">Compare content</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* == vs equals */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        == vs equals() (Very Important 🔥)
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
{`String a = "Java";
String b = new String("Java");

System.out.println(a == b);      // false
System.out.println(a.equals(b)); // true`}
      </pre>

      <p className="text-gray-700 mb-4">
        👉 <b>==</b> compares references (memory)<br/>
        👉 <b>equals()</b> compares values (content)
      </p>

      {/* StringBuilder */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        String vs StringBuilder vs StringBuffer
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Feature</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">String</td>
              <td className="p-3 border">Immutable</td>
            </tr>
            <tr>
              <td className="p-3 border">StringBuilder</td>
              <td className="p-3 border">Mutable, fast</td>
            </tr>
            <tr>
              <td className="p-3 border">StringBuffer</td>
              <td className="p-3 border">Mutable, thread-safe</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        StringBuilder Example
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
{`StringBuilder sb = new StringBuilder("Java");
sb.append(" Rocks");

System.out.println(sb);`}
      </pre>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Common Mistakes
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Using == instead of equals()</li>
        <li>Ignoring immutability</li>
        <li>Using String in loops (performance issue)</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Interview Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li><b>Why String is immutable?</b> → Security + performance</li>
        <li><b>What is String pool?</b> → Memory optimization</li>
        <li><b>Difference String vs StringBuilder?</b> → Immutable vs mutable</li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Key Takeaways
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Strings are immutable</li>
        <li>Stored in String pool</li>
        <li>equals() > == for comparison</li>
        <li>Use StringBuilder for performance</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">
        Memory Trick
      </h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
{`String = Immutable  
Builder = Mutable  
== → Memory  
equals → Value`}
      </pre>

    </div>
  );
};

export default Strings;