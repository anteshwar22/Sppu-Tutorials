import React from "react";

const ClassesObjects = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Classes and Objects in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Classes and Objects are the basic building blocks of Object-Oriented
        Programming (OOP) in Java. They help organize code into reusable and
        logical structures.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Almost every Java program uses classes and objects to represent
        real-world entities.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a class as a blueprint of a house 🏠, and an object as the
        actual house built from that blueprint.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>Class:</b> A blueprint or template used to create objects
        </li>
        <li>
          <b>Object:</b> An instance of a class
        </li>
      </ul>

      {/* 5. Syntax */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Basic Syntax</h2>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Student {
    String name;
    int age;
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
    }
}`}
      </pre>

      {/* 6. Detailed Explanation */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Understanding Class and Object
      </h2>

      <p className="text-gray-700 mb-4">
        A class contains variables (data) and methods (functions). Objects are
        used to access them.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Student {
    String name;
    int age;

    void display() {
        System.out.println(name + " " + age);
    }
}`}
      </pre>

      {/* 7. Examples */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Examples</h2>

      <h3 className="font-semibold mb-2">Example 1: Creating Object</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`Student s1 = new Student();
s1.name = "Anteshwar";
s1.age = 20;

s1.display();`}
      </pre>

      <h3 className="font-semibold mb-2">Example 2: Multiple Objects</h3>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`Student s1 = new Student();
Student s2 = new Student();`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Class vs Object</h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Class</th>
              <th className="p-3 border">Object</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Blueprint</td>
              <td className="p-3 border">Instance</td>
            </tr>
            <tr>
              <td className="p-3 border">Logical entity</td>
              <td className="p-3 border">Physical entity</td>
            </tr>
            <tr>
              <td className="p-3 border">No memory allocated</td>
              <td className="p-3 border">Memory allocated</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Step-by-Step Process</h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Create a class</li>
        <li>Define variables and methods</li>
        <li>
          Create object using <code>new</code> keyword
        </li>
        <li>Access data using object</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Forgetting to create object</li>
        <li>Accessing variables without object</li>
        <li>Confusing class with object</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is a class?</b> → Blueprint of object
        </li>
        <li>
          <b>What is an object?</b> → Instance of class
        </li>
        <li>
          <b>How to create object?</b> → Using new keyword
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Class defines structure</li>
        <li>Object represents real-world entity</li>
        <li>Used in every Java program</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"Class = Plan, Object = Real"</b>
      </p>
    </div>
  );
};

export default ClassesObjects;
