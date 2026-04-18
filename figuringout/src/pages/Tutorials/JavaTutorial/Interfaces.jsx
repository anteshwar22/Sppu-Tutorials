import React from "react";

const Interfaces = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Interfaces in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        An interface in Java is a blueprint of a class that contains abstract
        methods. It is used to achieve abstraction and multiple inheritance in
        Java.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Interfaces are widely used in modern Java development, especially in
        frameworks like Spring Boot.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of an interface like a remote control 📺. It defines what actions
        can be performed (buttons), but not how they are implemented.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        An interface is a collection of abstract methods that a class must
        implement.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Bark");
    }
}`}
      </pre>

      {/* 6. Key Features */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Key Features of Interface
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>All methods are abstract (by default)</li>
        <li>Supports multiple inheritance</li>
        <li>Variables are public, static, and final</li>
        <li>
          Uses <code>implements</code> keyword
        </li>
      </ul>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Basic Interface</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`interface Shape {
    void draw();
}

class Circle implements Shape {
    public void draw() {
        System.out.println("Drawing Circle");
    }
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Multiple Interfaces</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`interface A {
    void show();
}

interface B {
    void display();
}

class Test implements A, B {
    public void show() {}
    public void display() {}
}`}
      </pre>

      <h3 className="font-semibold mb-2">Example 3: Default Method (Java 8)</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`interface MyInterface {
    default void greet() {
        System.out.println("Hello");
    }
}`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Interface vs Class</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Interface</th>
              <th className="p-3 border">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Methods</td>
              <td className="p-3 border">Abstract</td>
              <td className="p-3 border">Concrete</td>
            </tr>
            <tr>
              <td className="p-3 border">Inheritance</td>
              <td className="p-3 border">Multiple</td>
              <td className="p-3 border">Single</td>
            </tr>
            <tr>
              <td className="p-3 border">Keyword</td>
              <td className="p-3 border">implements</td>
              <td className="p-3 border">extends</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Usage</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          Create interface using <code>interface</code> keyword
        </li>
        <li>Define abstract methods</li>
        <li>
          Implement interface using <code>implements</code>
        </li>
        <li>Override methods in class</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Not implementing all methods</li>
        <li>Confusing interface with abstract class</li>
        <li>Forgetting public in method implementation</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is interface?</b> → Blueprint with abstract methods
        </li>
        <li>
          <b>Why use interface?</b> → Multiple inheritance
        </li>
        <li>
          <b>Keyword used?</b> → implements
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Used for abstraction</li>
        <li>Supports multiple inheritance</li>
        <li>Widely used in frameworks</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Interface = What to Do, Not How to Do"</b>
      </p>
    </div>
  );
};

export default Interfaces;
