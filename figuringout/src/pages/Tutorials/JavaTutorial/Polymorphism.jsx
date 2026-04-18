import React from "react";

const Polymorphism = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* 1. Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">
        Polymorphism in Java
      </h1>

      {/* 2. Introduction */}
      <p className="text-gray-700 mb-4 leading-relaxed">
        Polymorphism is one of the core concepts of Object-Oriented Programming
        (OOP). It allows one object to take many forms.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        It helps in writing flexible and reusable code by allowing the same
        method to behave differently in different situations.
      </p>

      {/* 3. Real-life Analogy */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Real-Life Analogy</h2>

      <p className="text-gray-700 mb-6">
        Think of a person 👤. A person can be a student, employee, or teacher.
        Same person, different roles. Similarly, one method can behave
        differently.
      </p>

      {/* 4. Definition */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Definition</h2>

      <p className="text-gray-700 mb-6">
        Polymorphism means "many forms". It allows methods to perform different
        tasks based on the object or parameters.
      </p>

      {/* 5. Types */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Types of Polymorphism
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Compile-Time Polymorphism (Method Overloading)</li>
        <li>Runtime Polymorphism (Method Overriding)</li>
      </ul>

      {/* Compile Time */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        1. Compile-Time Polymorphism
      </h3>

      <p className="text-gray-700 mb-4">
        Achieved using method overloading. The method call is resolved at
        compile time.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-4">
        {`class MathOps {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}`}
      </pre>

      {/* Runtime */}
      <h3 className="text-xl font-semibold mt-4 mb-2">
        2. Runtime Polymorphism
      </h3>

      <p className="text-gray-700 mb-4">
        Achieved using method overriding. The method call is resolved at
        runtime.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md mb-6">
        {`class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

Animal obj = new Dog();
obj.sound();`}
      </pre>

      {/* 9. Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Compile-Time vs Runtime Polymorphism
      </h2>

      <div className="overflow-x-auto mb-6">
        <table className="w-full border text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Compile-Time</th>
              <th className="p-3 border">Runtime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">Method</td>
              <td className="p-3 border">Overloading</td>
              <td className="p-3 border">Overriding</td>
            </tr>
            <tr>
              <td className="p-3 border">Resolution</td>
              <td className="p-3 border">Compile time</td>
              <td className="p-3 border">Runtime</td>
            </tr>
            <tr>
              <td className="p-3 border">Performance</td>
              <td className="p-3 border">Faster</td>
              <td className="p-3 border">Slower</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 10. Step-by-step */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Step-by-Step Understanding
      </h2>

      <ol className="list-decimal ml-6 text-gray-700 mb-6 space-y-2">
        <li>Define method in parent class</li>
        <li>Override method in child class</li>
        <li>Create parent reference of child object</li>
        <li>Call method → runtime decides execution</li>
      </ol>

      {/* 11. Mistakes */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Common Mistakes</h2>

      <ul className="list-disc ml-6 text-red-500 mb-6 space-y-2">
        <li>Confusing overloading with overriding</li>
        <li>Not using correct method signature</li>
        <li>Forgetting inheritance in runtime polymorphism</li>
      </ul>

      {/* 12. Interview */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Interview / Viva Questions
      </h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>
          <b>What is polymorphism?</b> → Many forms
        </li>
        <li>
          <b>Types?</b> → Compile-time and runtime
        </li>
        <li>
          <b>Example?</b> → Method overloading and overriding
        </li>
      </ul>

      {/* 13. Key Points */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Key Points Summary</h2>

      <ul className="list-disc ml-6 text-gray-700 mb-6 space-y-2">
        <li>Improves flexibility</li>
        <li>Supports code reuse</li>
        <li>Two main types</li>
      </ul>

      {/* 14. Memory Trick */}
      <h2 className="text-2xl font-semibold mt-6 mb-3">Memory Trick</h2>

      <p className="text-gray-700 mb-6">
        👉 <b>"One Name, Many Forms"</b>
      </p>
    </div>
  );
};

export default Polymorphism;
