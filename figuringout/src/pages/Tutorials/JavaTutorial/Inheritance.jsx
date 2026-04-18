import React from "react";

const Inheritance = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Inheritance in Java</h1>

      {/* Introduction */}

      <p className="text-gray-700 mb-4">
        Inheritance is a core concept of Object-Oriented Programming (OOP) that
        allows one class to acquire properties and behavior of another class.
      </p>

      <p className="text-gray-700 mb-4">
        It promotes <b>code reuse</b>, <b>hierarchical structure</b>, and
        <b>maintainability</b>.
      </p>

      {/* Real-world analogy */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Real-World Analogy</h2>

      <p className="text-gray-700 mb-4">
        A child inherits properties from parents — like name, features, and
        behavior. Similarly, a class inherits fields and methods from another
        class.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`Parent → Child
Vehicle → Car`}
      </pre>

      {/* Definition */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Definition</h2>

      <p className="text-gray-700 mb-4">
        Inheritance is a mechanism where one class (child/subclass) derives
        properties and behavior from another class (parent/superclass) using the{" "}
        <b>extends</b> keyword.
      </p>

      {/* Syntax */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`class Parent {
  // properties
}

class Child extends Parent {
  // inherited + own properties
}`}
      </pre>

      {/* Basic Example */}

      <h2 className="text-xl font-semibold mt-6 mb-2">Basic Example</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md overflow-x-auto">
        {`class Animal {

  void eat() {
    System.out.println("Eating...");
  }
}

class Dog extends Animal {

  void bark() {
    System.out.println("Barking...");
  }
}

public class Main {
  public static void main(String[] args) {

    Dog d = new Dog();
    d.eat();  // inherited
    d.bark(); // own method

  }
}`}
      </pre>

      {/* Types */}

      <h2 className="text-xl font-semibold mt-8 mb-4">Types of Inheritance</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border">Single</td>
              <td className="p-3 border">One parent, one child</td>
            </tr>

            <tr>
              <td className="p-3 border">Multilevel</td>
              <td className="p-3 border">Chain of inheritance</td>
            </tr>

            <tr>
              <td className="p-3 border">Hierarchical</td>
              <td className="p-3 border">One parent, multiple children</td>
            </tr>

            <tr>
              <td className="p-3 border">Multiple</td>
              <td className="p-3 border">Not supported in Java (via class)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Super Keyword */}

      <h2 className="text-xl font-semibold mt-8 mb-2">super Keyword</h2>

      <p className="text-gray-700 mb-4">
        The <b>super</b> keyword is used to access parent class methods and
        constructors.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`super.methodName();`}
      </pre>

      {/* Method Overriding */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Method Overriding</h2>

      <p className="text-gray-700 mb-4">
        Child class can redefine parent method — this is called overriding.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`class Animal {
  void sound() {
    System.out.println("Animal sound");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Dog barks");
  }
}`}
      </pre>

      {/* Mistakes */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Trying multiple inheritance with classes</li>
        <li>Forgetting extends keyword</li>
        <li>Confusing overriding with overloading</li>
      </ul>

      {/* Interview */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Interview Questions</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>
          <b>What is inheritance?</b> → Code reuse mechanism
        </li>
        <li>
          <b>Why use it?</b> → Reduce duplication
        </li>
        <li>
          <b>Can Java support multiple inheritance?</b> → Only via interface
        </li>
      </ul>

      {/* Key Points */}

      <h2 className="text-xl font-semibold mt-8 mb-3">Key Points</h2>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Inheritance promotes code reuse</li>
        <li>Uses extends keyword</li>
        <li>Supports method overriding</li>
        <li>Builds parent-child relationship</li>
      </ul>

      {/* Memory Trick */}

      <h2 className="text-xl font-semibold mt-8 mb-2">Memory Trick</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md">
        {`IS-A Relationship
Dog IS-A Animal`}
      </pre>
    </div>
  );
};

export default Inheritance;
