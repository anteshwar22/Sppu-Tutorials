import React from "react";

const FunctionalInterfaces = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Functional Interfaces in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Functional Interfaces are a key feature introduced in Java 8. They are
        mainly used with lambda expressions to write clean and concise code.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Functional interfaces are widely used in modern Java development,
        especially in streams, collections, and frameworks.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a remote control 📺 with a single button. That button performs
        one specific action. Similarly, a functional interface has only one
        abstract method.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        A functional interface is an interface that contains exactly one
        abstract method. It can have multiple default or static methods.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`@FunctionalInterface
interface MyInterface {
    void show();
}`}
      </pre>

      {/* 6. Key Concepts */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Features</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Only one abstract method</li>
        <li>Can have multiple default and static methods</li>
        <li>Used with lambda expressions</li>
        <li>Annotated with @FunctionalInterface (optional but recommended)</li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Traditional Way</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`interface MyInterface {
    void show();
}

class Test implements MyInterface {
    public void show() {
        System.out.println("Hello");
    }
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Using Lambda Expression</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`MyInterface obj = () -> {
    System.out.println("Hello from Lambda");
};

obj.show();`}
      </pre>

      <h3 className="font-semibold mb-2">
        Example 3: Built-in Functional Interface
      </h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`import java.util.function.*;

Predicate<Integer> p = x -> x > 10;
System.out.println(p.test(20)); // true`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Common Functional Interfaces
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Interface</th>
              <th className="p-3 border">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Predicate</td>
              <td className="p-3 border">Returns boolean</td>
            </tr>
            <tr>
              <td className="p-3 border">Function</td>
              <td className="p-3 border">Takes input, returns output</td>
            </tr>
            <tr>
              <td className="p-3 border">Consumer</td>
              <td className="p-3 border">Consumes data, no return</td>
            </tr>
            <tr>
              <td className="p-3 border">Supplier</td>
              <td className="p-3 border">Returns data</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Usage</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Create interface with one abstract method</li>
        <li>Use @FunctionalInterface annotation</li>
        <li>Implement using lambda expression</li>
        <li>Call the method</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Adding multiple abstract methods</li>
        <li>Not understanding lambda syntax</li>
        <li>Confusing with normal interfaces</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is functional interface?</b> → Interface with one abstract
          method
        </li>
        <li>
          <b>Why used?</b> → For lambda expressions
        </li>
        <li>
          <b>Example?</b> → Predicate, Function
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Introduced in Java 8</li>
        <li>Supports lambda expressions</li>
        <li>Improves code readability</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"One Method Interface = Functional Interface"</b>
      </p>
    </div>
  );
};

export default FunctionalInterfaces;
