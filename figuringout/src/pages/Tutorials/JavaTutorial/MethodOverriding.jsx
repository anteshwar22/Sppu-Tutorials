import React from "react";

const MethodOverriding = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Method Overriding in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        Method overriding is a concept in Java where a child class provides a
        specific implementation of a method that is already defined in its
        parent class.
      </p>

      <p className="text-gray-700 mb-4">
        It is used to achieve <b>runtime polymorphism</b>.
      </p>

      {/* Real Life */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-4">
        A parent teaches a general way of doing something, but a child modifies
        it according to their own style.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Parent → General behavior
Child → Modified behavior`}
      </pre>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>

      <p className="text-gray-700 mb-4">
        Method overriding occurs when a subclass defines a method with the same
        name, return type, and parameters as in the parent class.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`class Parent {
  void show() {}
}

class Child extends Parent {
  void show() {}
}`}
      </pre>

      {/* Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`class Animal {

  void sound() {
    System.out.println("Animal makes sound");
  }
}

class Dog extends Animal {

  @Override
  void sound() {
    System.out.println("Dog barks");
  }
}

public class Main {
  public static void main(String[] args) {

    Animal obj = new Dog(); // runtime polymorphism
    obj.sound();

  }
}`}
      </pre>

      {/* Rules */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Rules of Method Overriding
      </h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Method name must be the same</li>
        <li>Parameters must be the same</li>
        <li>Return type must be the same</li>
        <li>Must be in inheritance relationship</li>
      </ul>

      {/* Overriding vs Overloading */}

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Overriding vs Overloading
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Overriding</th>
              <th className="p-3 border">Overloading</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Time</td>
              <td className="p-3 border">Runtime</td>
              <td className="p-3 border">Compile-time</td>
            </tr>

            <tr>
              <td className="p-3 border">Parameters</td>
              <td className="p-3 border">Same</td>
              <td className="p-3 border">Different</td>
            </tr>

            <tr>
              <td className="p-3 border">Inheritance</td>
              <td className="p-3 border">Required</td>
              <td className="p-3 border">Not required</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Changing method signature</li>
        <li>Forgetting @Override annotation</li>
        <li>Confusing with overloading</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What is overriding?</b> → Redefining parent method
        </li>
        <li>
          <b>When it happens?</b> → Runtime
        </li>
        <li>
          <b>Why use it?</b> → Achieve polymorphism
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Used for runtime polymorphism</li>
        <li>Same method signature required</li>
        <li>Enhances flexibility</li>
        <li>Works with inheritance</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Override = Same Method + New Behavior`}
      </pre>
    </div>
  );
};

export default MethodOverriding;
