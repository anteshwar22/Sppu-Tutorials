import React from "react";

const Constructors = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Constructors in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Constructors in Java are special methods used to initialize objects.
        They are automatically called when an object is created.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Constructors help in assigning initial values to variables and preparing
        an object for use.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a constructor like setting up a new phone 📱. When you buy it,
        you configure settings (name, apps, etc.). Similarly, constructors set
        up object values when it is created.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        A constructor is a special method in Java that is used to initialize
        objects. It has the same name as the class and does not have a return
        type.
      </p>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Student {
    Student() {
        System.out.println("Constructor Called");
    }
}`}
      </pre>

      {/* 6. Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Types of Constructors
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Default Constructor</li>
        <li>Parameterized Constructor</li>
      </ul>

      {/* Default */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        1. Default Constructor
      </h3>

      <p className="text-gray-700 mb-4">
        A constructor with no parameters. It is called automatically when an
        object is created.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class Student {
    Student() {
        System.out.println("Default Constructor");
    }
}`}
      </pre>

      {/* Parameterized */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        2. Parameterized Constructor
      </h3>

      <p className="text-gray-700 mb-4">
        A constructor that accepts parameters to initialize variables.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Student {
    String name;
    int age;

    Student(String n, int a) {
        name = n;
        age = a;
    }
}`}
      </pre>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">
        Example 1: Using Default Constructor
      </h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Student s1 = new Student();`}
      </pre>

      <h3 className="font-semibold mb-2">
        Example 2: Using Parameterized Constructor
      </h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`Student s1 = new Student("Anteshwar", 20);`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Default vs Parameterized Constructor
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Default</th>
              <th className="p-3 border">Parameterized</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Parameters</td>
              <td className="p-3 border">No</td>
              <td className="p-3 border">Yes</td>
            </tr>
            <tr>
              <td className="p-3 border">Usage</td>
              <td className="p-3 border">Basic initialization</td>
              <td className="p-3 border">Custom initialization</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Process</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Create a class</li>
        <li>Define constructor (same name as class)</li>
        <li>
          Create object using <code>new</code>
        </li>
        <li>Constructor is automatically called</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Giving return type to constructor</li>
        <li>Wrong constructor name</li>
        <li>Not initializing variables properly</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is a constructor?</b> → Special method to initialize object
        </li>
        <li>
          <b>Can constructor have return type?</b> → No
        </li>
        <li>
          <b>Types?</b> → Default and Parameterized
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Constructor initializes object</li>
        <li>Called automatically</li>
        <li>No return type</li>
        <li>Same name as class</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Constructor = Object Setup"</b>
      </p>
    </div>
  );
};

export default Constructors;
